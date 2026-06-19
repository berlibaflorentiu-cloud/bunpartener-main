#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_langs.py — generate per-language static pages for SEO.

Romanian stays at the site root (canonical). This script pre-renders fully
translated copies of each page into /en/, /ru/, /it/, /fr/ using the same
translation table that i18n.js uses at runtime (extracted directly from
i18n.js — single source of truth, no extra files, stdlib only).

Run it before deploying (drag-and-drop):  python3 build_langs.py
"""

import os, re, ast, shutil, hashlib, html as _html

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = "https://bunpartener.md"
LANGS = ["en", "ru", "it", "fr"]          # ro = root, generated separately
ALL_LANGS = ["ro"] + LANGS
PAGES = ["index.html", "dosare.html", "galerie.html", "cv.html"]
SRV_KEYS = ['penal','contrav','civil','fam','munca','corp','com','admin','cons','imob','autor','cedo']

OG_LOCALE = {"ro": "ro_MD", "en": "en_US", "ru": "ru_RU", "it": "it_IT", "fr": "fr_FR"}

# ── per-page <title> / <meta description> per language ────────────────────────
META = {
    "index.html": {
        "ro": ("BuNPartener — Birou Asociat de Avocați · Chișinău",
               "Biroul Asociat de Avocați „Berliba și Partenerii” (BuNPartener) — servicii juridice profesionale în Chișinău, Republica Moldova. Drept penal, civil, comercial și contencios administrativ."),
        "en": ("BuNPartener — Law Firm · Chisinau, Moldova",
               "Berliba & Partners Law Firm (BuNPartener) — professional legal services in Chisinau, Moldova. Criminal, civil, commercial and administrative law."),
        "ru": ("BuNPartener — Адвокатское бюро · Кишинэу, Молдова",
               "Адвокатское бюро «Berliba și Partenerii» (BuNPartener) — профессиональные юридические услуги в Кишинэу, Молдова. Уголовное, гражданское, коммерческое и административное право."),
        "it": ("BuNPartener — Studio Legale · Chișinău, Moldova",
               "Studio Legale «Berliba și Partenerii» (BuNPartener) — servizi legali professionali a Chișinău, Moldova. Diritto penale, civile, commerciale e amministrativo."),
        "fr": ("BuNPartener — Cabinet d'avocats · Chișinău, Moldova",
               "Cabinet d'avocats « Berliba și Partenerii » (BuNPartener) — services juridiques professionnels à Chișinău, Moldova. Droit pénal, civil, commercial et administratif."),
    },
    "dosare.html": {
        "ro": ("Dosare — BuNPartener",
               "Registru de dosare reprezentate de Biroul Asociat de Avocați „Berliba și Partenerii”."),
        "en": ("Cases — BuNPartener",
               "Register of cases handled by Berliba & Partners Law Firm (BuNPartener)."),
        "ru": ("Дела — BuNPartener",
               "Реестр дел, представленных Адвокатским бюро «Berliba și Partenerii» (BuNPartener)."),
        "it": ("Fascicoli — BuNPartener",
               "Registro dei fascicoli rappresentati dallo Studio Legale «Berliba și Partenerii» (BuNPartener)."),
        "fr": ("Dossiers — BuNPartener",
               "Registre des dossiers représentés par le Cabinet d'avocats « Berliba și Partenerii » (BuNPartener)."),
    },
    "galerie.html": {
        "ro": ("Galerie — BuNPartener",
               "Galerie foto — Biroul Asociat de Avocați „Berliba și Partenerii”."),
        "en": ("Gallery — BuNPartener",
               "Photo gallery — Berliba & Partners Law Firm (BuNPartener)."),
        "ru": ("Галерея — BuNPartener",
               "Фотогалерея — Адвокатское бюро «Berliba și Partenerii» (BuNPartener)."),
        "it": ("Galleria — BuNPartener",
               "Galleria fotografica — Studio Legale «Berliba și Partenerii» (BuNPartener)."),
        "fr": ("Galerie — BuNPartener",
               "Galerie photo — Cabinet d'avocats « Berliba și Partenerii » (BuNPartener)."),
    },
    "cv.html": {
        "ro": ("CV — BuNPartener",
               "Curriculum vitae al avocaților Biroului Asociat de Avocați „Berliba și Partenerii” (BuNPartener)."),
        "en": ("CV — BuNPartener",
               "Curriculum vitae of the lawyers at Berliba & Partners Law Firm (BuNPartener)."),
        "ru": ("CV — BuNPartener",
               "Резюме адвокатов Адвокатского бюро «Berliba și Partenerii» (BuNPartener)."),
        "it": ("CV — BuNPartener",
               "Curriculum vitae degli avvocati dello Studio Legale «Berliba și Partenerii» (BuNPartener)."),
        "fr": ("CV — BuNPartener",
               "Curriculum vitae des avocats du Cabinet d'avocats « Berliba și Partenerii » (BuNPartener)."),
    },
}

# ── extract the T translation table from i18n.js (stdlib only) ────────────────
def extract_translations():
    src = open(os.path.join(ROOT, "i18n.js"), encoding="utf-8").read()
    start = src.index("var T = {")
    bs = src.index("{", start)
    i, depth, in_str, q, esc = bs, 0, False, "", False
    while i < len(src):
        ch = src[i]
        if in_str:
            if esc: esc = False
            elif ch == "\\": esc = True
            elif ch == q: in_str = False
        else:
            if ch in "'\"": in_str = True; q = ch
            elif ch == "{": depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0: break
        i += 1
    obj = src[bs:i+1]
    # strip /* */ comments outside strings
    out = []; i = 0; in_str = False; q = ""; esc = False
    while i < len(obj):
        ch = obj[i]
        if in_str:
            out.append(ch)
            if esc: esc = False
            elif ch == "\\": esc = True
            elif ch == q: in_str = False
            i += 1
        else:
            if ch in "'\"": in_str = True; q = ch; out.append(ch); i += 1
            elif ch == "/" and i+1 < len(obj) and obj[i+1] == "*":
                i = obj.index("*/", i+2) + 2
            else: out.append(ch); i += 1
    obj = "".join(out)
    obj = re.sub(r'(\n\s*)(ro|ru|en|it|fr)(\s*):(\s*\{)', r'\1"\2"\3:\4', obj)
    return ast.literal_eval(obj)

# ── helpers ───────────────────────────────────────────────────────────────────
def esc_text(s):   # textContent insertion
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def esc_attr(s):
    return s.replace("&", "&amp;").replace('"', "&quot;")

def translate_body(htmltext, t, ro):
    # value->key reverse maps for the JS-driven service section
    rev_tab   = {ro['tab.'+k]: k for k in SRV_KEYS}
    rev_pill  = {ro['pill.'+k]: k for k in SRV_KEYS}
    rev_title = {ro['sp.'+k+'.title']: k for k in SRV_KEYS}
    rev_desc  = {ro['sp.'+k+'.desc']: k for k in SRV_KEYS}
    rev_list  = {ro['sp.'+k+'.list']: k for k in SRV_KEYS}
    role_map  = t.get('role_map', {})
    cta_map   = t.get('news.cta_map', {})

    # data-i18n-html (innerHTML)
    def f_html(m):
        k = m.group(3)
        return (m.group(1) + t[k] + m.group(5)) if k in t else m.group(0)
    htmltext = re.sub(r'(<(\w+)[^>]*\bdata-i18n-html="([^"]+)"[^>]*>)(.*?)(</\2>)',
                      f_html, htmltext, flags=re.DOTALL)

    # data-i18n (textContent)
    def f_text(m):
        k = m.group('key'); v = t.get(k)
        if isinstance(v, str):
            return m.group('open') + esc_text(v) + m.group('close')
        return m.group(0)
    htmltext = re.sub(
        r'(?P<open><(?P<tag>\w+)[^>]*\bdata-i18n="(?P<key>[^"]+)"[^>]*>)(?P<inner>[^<]*)(?P<close></(?P=tag)>)',
        f_text, htmltext)

    # data-i18n-placeholder / data-i18n-aria-label  (attribute value)
    # lookbehind keeps us from matching the data-i18n-* attribute itself,
    # which also ends in "...placeholder" / "...aria-label".
    def f_attr(attr):
        apat = r'(?<![-\w])' + attr + r'="[^"]*"'
        def inner(m):
            tag = m.group(0); k = m.group(1)
            if k in t and re.search(apat, tag):
                tag = re.sub(apat, attr+'="'+esc_attr(t[k])+'"', tag)
            return tag
        return inner
    htmltext = re.sub(r'<\w+[^>]*\bdata-i18n-placeholder="([^"]+)"[^>]*>',
                      f_attr('placeholder'), htmltext)
    htmltext = re.sub(r'<\w+[^>]*\bdata-i18n-aria-label="([^"]+)"[^>]*>',
                      f_attr('aria-label'), htmltext)

    # data-i18n-select  (rebuild <option>s)
    def f_sel(m):
        arr = t.get(m.group(2))
        if not isinstance(arr, list):
            return m.group(0)
        opts = "".join('<option value="%s">%s</option>' %
                       ('' if i == 0 else esc_attr(o), esc_text(o))
                       for i, o in enumerate(arr))
        return m.group(1) + opts + m.group(4)
    htmltext = re.sub(r'(<select[^>]*\bdata-i18n-select="([^"]+)"[^>]*>)(.*?)(</select>)',
                      f_sel, htmltext, flags=re.DOTALL)

    # role / cred  (.tslide-role / .tslide-cred)
    def f_role(m):
        txt = m.group(3).strip()
        return m.group(1) + esc_text(role_map.get(txt, txt)) + m.group(4)
    htmltext = re.sub(r'(<(\w+)[^>]*\bclass="[^"]*\btslide-(?:role|cred)\b[^"]*"[^>]*>)([^<]*)(</\2>)',
                      f_role, htmltext)

    # news CTA  (.news-cta  "text <svg>")
    def f_cta(m):
        txt = m.group(2).strip()
        return m.group(1) + esc_text(cta_map.get(txt, txt)) + ' ' + m.group(3)
    htmltext = re.sub(r'(<\w+[^>]*\bclass="[^"]*\bnews-cta\b[^"]*"[^>]*>)\s*([^<]+?)\s*(<svg)',
                      f_cta, htmltext)

    # service section — tab labels & panel content, matched by RO value
    def repl_class(cls, revmap, keyfmt, is_html=False):
        nonlocal htmltext
        if is_html:
            pat = r'(<(\w+)[^>]*\bclass="[^"]*\b'+cls+r'\b[^"]*"[^>]*>)(.*?)(</\2>)'
            def fn(m):
                cur = m.group(3).strip()
                k = revmap.get(cur)
                return (m.group(1) + t[keyfmt % k] + m.group(4)) if k else m.group(0)
            htmltext = re.sub(pat, fn, htmltext, flags=re.DOTALL)
        else:
            pat = r'(<(\w+)[^>]*\bclass="[^"]*\b'+cls+r'\b[^"]*"[^>]*>)([^<]*)(</\2>)'
            def fn(m):
                cur = m.group(3).strip()
                k = revmap.get(cur)
                return (m.group(1) + esc_text(t[keyfmt % k]) + m.group(4)) if k else m.group(0)
            htmltext = re.sub(pat, fn, htmltext)
    repl_class('srv-tab-lbl', rev_tab,   'tab.%s')
    repl_class('sp-pill',     rev_pill,  'pill.%s')
    repl_class('sp-title',    rev_title, 'sp.%s.title')
    repl_class('sp-desc',     rev_desc,  'sp.%s.desc')
    repl_class('sp-list',     rev_list,  'sp.%s.list', is_html=True)
    return htmltext

ASSET_EXT = r'(?:png|jpe?g|gif|webp|svg|ico|css|js|pdf|docx|woff2?|mp4|JPG|JPEG|PNG)'
def absolutize_assets(htmltext):
    # src="x.ext" / href="x.ext" with a relative, non-anchor, non-absolute path
    def fix(m):
        attr, val = m.group(1), m.group(2)
        if re.match(r'^(https?:|//|/|#|mailto:|tel:|data:)', val):
            return m.group(0)
        return '%s="/%s"' % (attr, val)
    htmltext = re.sub(r'\b(src|href)="([^"]+\.'+ASSET_EXT+r'(?:\?[^"]*)?)"', fix, htmltext)
    # url(...) in inline styles for local assets
    def fixurl(m):
        val = m.group(1)
        if re.match(r'^(https?:|//|/|data:)', val):
            return m.group(0)
        return "url('/%s')" % val
    htmltext = re.sub(r"url\(['\"]?([^'\")]+\."+ASSET_EXT+r")['\"]?\)", fixurl, htmltext)
    # cv.html TEAM object image paths (JS string values)
    htmltext = re.sub(r'(img:\s*")([^"/][^"]*\.'+ASSET_EXT+r')(")',
                      lambda m: m.group(1) + '/' + m.group(2) + m.group(3), htmltext)
    return htmltext

def hreflang_block(page):
    slug = "" if page == "index.html" else page
    lines = ['  <!-- i18n-seo:start -->']
    for lg in ALL_LANGS:
        href = SITE + ("/" if lg == "ro" else "/"+lg+"/") + slug
        lines.append('  <link rel="alternate" hreflang="%s" href="%s">' % (lg, href))
    lines.append('  <link rel="alternate" hreflang="x-default" href="%s">' % (SITE + "/" + slug))
    lines.append('  <!-- i18n-seo:end -->')
    return "\n".join(lines)

def self_url(page, lang):
    slug = "" if page == "index.html" else page
    return SITE + ("/" if lang == "ro" else "/"+lang+"/") + slug

def set_or_insert_meta(head, name_attr, name_val, content):
    pat = r'<meta\s+%s="%s"[^>]*>' % (re.escape(name_attr), re.escape(name_val))
    tag = '<meta %s="%s" content="%s">' % (name_attr, name_val, esc_attr(content))
    if re.search(pat, head):
        return re.sub(pat, tag, head, count=1)
    # insert after <title>
    return re.sub(r'(</title>)', r'\1\n  ' + tag, head, count=1)

def build_head(head, page, lang):
    title, desc = META[page][lang]
    # title
    head = re.sub(r'<title>.*?</title>', '<title>%s</title>' % esc_text(title), head, count=1, flags=re.DOTALL)
    # description
    head = set_or_insert_meta(head, "name", "description", desc)
    # canonical
    can = '<link rel="canonical" href="%s">' % self_url(page, lang)
    if re.search(r'<link\s+rel="canonical"[^>]*>', head):
        head = re.sub(r'<link\s+rel="canonical"[^>]*>', can, head, count=1)
    else:
        head = re.sub(r'(</title>)', r'\1\n  ' + can, head, count=1)
    # og / twitter
    head = set_or_insert_meta(head, "property", "og:title", title)
    head = set_or_insert_meta(head, "property", "og:description", desc)
    head = set_or_insert_meta(head, "property", "og:url", self_url(page, lang))
    head = set_or_insert_meta(head, "property", "og:locale", OG_LOCALE[lang])
    # refresh existing hreflang block, else insert before </head>
    blk = hreflang_block(page)
    if "<!-- i18n-seo:start -->" in head:
        head = re.sub(r'  <!-- i18n-seo:start -->.*?  <!-- i18n-seo:end -->', blk, head, flags=re.DOTALL)
    else:
        head = head.replace("</head>", blk + "\n</head>", 1)
    return head

def write_sitemap():
    # one <url> per language version, each annotated with all hreflang alternates
    pages = [("index.html", "1.0", "weekly"),
             ("dosare.html", "0.8", "monthly"),
             ("galerie.html", "0.6", "monthly")]
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for page, prio, freq in pages:
        slug = "" if page == "index.html" else page
        for lang in ALL_LANGS:
            loc = SITE + ("/" if lang == "ro" else "/"+lang+"/") + slug
            out.append('  <url>')
            out.append('    <loc>%s</loc>' % loc)
            for alt in ALL_LANGS:
                href = SITE + ("/" if alt == "ro" else "/"+alt+"/") + slug
                out.append('    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>' % (alt, href))
            out.append('    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>' % (SITE + "/" + slug))
            out.append('    <changefreq>%s</changefreq>' % freq)
            out.append('    <priority>%s</priority>' % prio)
            out.append('  </url>')
    out.append('</urlset>')
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write("\n".join(out) + "\n")

def inject_page_lang(htmltext, lang):
    # runs after absolutize_assets, so the script src is already "/i18n.js?v=..."
    tag = "<script>window.__PAGE_LANG__='%s';</script>\n" % lang
    return re.sub(r'(<script src="/i18n\.js(?:\?[^"]*)?"></script>)',
                  tag + r'\1', htmltext, count=1)

# ── main ──────────────────────────────────────────────────────────────────────
def main():
    T = extract_translations()
    ro = T["ro"]
    # content hash of i18n.js → cache-busting version so browsers never run a stale copy
    ver = hashlib.md5(open(os.path.join(ROOT, "i18n.js"), "rb").read()).hexdigest()[:8]

    # 1. add/refresh hreflang block + version the i18n.js script on the ROOT (ro) pages
    for page in PAGES:
        p = os.path.join(ROOT, page)
        src = open(p, encoding="utf-8").read()
        head_end = src.index("</head>")
        head, body = src[:head_end], src[head_end:]
        blk = hreflang_block(page)
        if "<!-- i18n-seo:start -->" in head:
            head = re.sub(r'  <!-- i18n-seo:start -->.*?  <!-- i18n-seo:end -->', blk, head, flags=re.DOTALL)
        else:
            head = head + blk + "\n"
        full = head + body
        full = re.sub(r'src="(?:/)?i18n\.js(?:\?v=[^"]*)?"', 'src="i18n.js?v=%s"' % ver, full)
        open(p, "w", encoding="utf-8").write(full)

    # 2. generate language copies
    count = 0
    for lang in LANGS:
        d = os.path.join(ROOT, lang)
        os.makedirs(d, exist_ok=True)
        for page in PAGES:
            src = open(os.path.join(ROOT, page), encoding="utf-8").read()
            he = src.index("</head>")
            head, body = src[:he], src[he:]
            # head
            head = re.sub(r'<html lang="ro">', '<html lang="%s">' % lang, head, count=1)
            head = build_head(head, page, lang)
            doc = head + body
            # body translation
            doc = translate_body(doc, T[lang], ro)
            # absolute asset paths (page is now in a subdir)
            doc = absolutize_assets(doc)
            # page-language hint + absolute i18n.js
            doc = inject_page_lang(doc, lang)
            open(os.path.join(d, page), "w", encoding="utf-8").write(doc)
            count += 1
    # 3. multilingual sitemap
    write_sitemap()
    print("Generated %d language pages (%s) + sitemap.xml in %s" % (count, ", ".join(LANGS), ROOT))

if __name__ == "__main__":
    main()
