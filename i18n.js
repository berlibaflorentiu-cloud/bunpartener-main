(function () {
  /* ─── Translations ─────────────────────────────────────────────────────── */
  var T = {

    ro: {
      /* nav */
      'nav.about':     'Despre noi',
      'nav.services':  'Servicii',
      'nav.team':      'Echipa',
      'nav.news':      'Noutăți',
      'nav.resources': 'Resurse',
      'nav.gallery':   'Galerie',
      'nav.cases':     'Dosare',
      'nav.contact':   'Contact',
      'nav.cta':       'Solicitați o consultație',
      'nav.back':      'Înapoi la site',
      'nav.menu_open': 'Deschide meniu',
      'nav.skip':      'Sari la conținut',

      /* hero */
      'hero.quote':   'Dacă este o cale legală pentru a ajunge la rezultatul dorit, fiți sigur că noi o vom găsi!',
      'hero.btn1':    'Solicitați o consultație',
      'hero.btn2':    'Domenii de activitate',
      'hero.badge':   'Birou Asociat de Avocați · Chișinău, Moldova',
      'hero.stat1':   'Ani de experiență',
      'hero.stat2':   'Cauze gestionate',
      'hero.stat3':   'Rată de succes',
      'hero.stat4':   'Domenii de activitate',
      'hero.stat5':   'Jurisdicții partenere',

      /* about */
      'about.tag':    'Despre birou',
      'about.heading':'Construiți pe <span class="ab">Integritate,</span><br>Conduși de Dreptate',
      'about.founded':'Fondat în<br>Chișinău',
      'about.lead':   'Parteneriatul dintre avocat și client constituie o prioritate pentru noi. Avocații din cadrul BUNPartener întotdeauna au fost motivați și pregătiți să schimbe pozitiv mentalități și să distrugă stereotipuri prin acțiuni legale și rezultate necesare.',
      'about.v1t':    'Integritate absolută',
      'about.v1d':    'Atitudine față de client și respectarea celor mai înalte standarde etice ale profesiei de avocat.',
      'about.v2t':    'Promptitudine garantată',
      'about.v2d':    'Respectăm strict termenele și oferim răspunsuri rapide — în drept. Fiecare moment și fiecare soluție contează pentru noi.',
      'about.v3t':    'Abordare personalizată',
      'about.v3d':    'Cauza este privită individual și este unică. Strategia avocațială este la maxim individualizată.',
      'about.cta':    'Solicită o consultație',

      /* services */
      'srv.tag':      'Domenii de activitate',
      'srv.heading':  'Expertiză <span class="aw">de Încredere</span>',
      'srv.desc':     'Servicii juridice integrate în toate domeniile dreptului, cu o abordare orientată spre rezultate și protecția intereselor tale.',
      'srv.cta':      'Solicitați o consultație',
      'srv.hint':     'Glisați pentru toate domeniile',

      /* service tabs */
      'tab.penal':   'Drept Penal',
      'tab.contrav': 'Drept Contravențional',
      'tab.civil':   'Drept Civil',
      'tab.fam':     'Dreptul Familiei',
      'tab.munca':   'Dreptul Muncii',
      'tab.corp':    'Drept Corporativ/Insolvabilitate',
      'tab.com':     'Drept Comercial',
      'tab.admin':   'Drept Administrativ',
      'tab.cons':    'Protecția Consumatorului',
      'tab.imob':    'Imobiliare & Proprietate',
      'tab.autor':   'Drept de Autor',
      'tab.cedo':    'Cereri la CtEDO',

      /* service pills */
      'pill.penal':   'Penal',
      'pill.contrav': 'Contravențional',
      'pill.civil':   'Civil',
      'pill.fam':     'Familie',
      'pill.munca':   'Muncă',
      'pill.corp':    'Corporativ',
      'pill.com':     'Comercial',
      'pill.admin':   'Administrativ',
      'pill.cons':    'Consum',
      'pill.imob':    'Proprietate',
      'pill.autor':   'Autor',
      'pill.cedo':    'CtEDO',

      /* service panel — penal */
      'sp.penal.title': 'Drept Penal',
      'sp.penal.desc':  'Asigurăm o apărare penală riguroasă în toate etapele procesului — de la reținere și urmărire penală, până la judecată și căi de atac (ordinare și extraordinare). Cunoaștem sistemul juridic din Republica Moldova și din alte state în profunzime și acționăm ferm pentru asigurarea drepturilor și intereselor legitime.',
      'sp.penal.list':  '<li>Apărare penală la etapa urmăririi penale</li><li>Reprezentare în instanțe de fond și apel/recurs</li><li>Asistență juridică în interesele persoanelor reținute/arestate preventiv/condamnate</li><li>Contestarea actelor procesuale ilegale</li><li>Acte de reabilitare judecătorească/amnistie/grațiere</li>',

      /* service panel — contrav */
      'sp.contrav.title': 'Drept Contravențional',
      'sp.contrav.desc':  'Asigurăm asistență juridică în cauzele contravenționale la toate etapele procedurii. Reprezentăm persoanele fizice și juridice în limitele proceselor contravenționale/sancționate contravențional și contestăm procesele-verbale ilegale.',
      'sp.contrav.list':  '<li>Contestarea proceselor-verbale contravenționale</li><li>Reprezentare în fața agentului constatator</li><li>Litigii contravenționale în instanță</li><li>Nulitatea actelor de constatare</li><li>Suspendarea executării sancțiunii</li><li>Recuperarea prejudiciilor cauzate prin sancțiuni ilegale</li>',

      /* service panel — civil */
      'sp.civil.title': 'Drept Civil',
      'sp.civil.desc':  'Oferim asistență juridică completă în cauze civile — de la recuperarea daunelor și executarea contractelor, până la apărarea drepturilor personale și patrimoniale în fața instanțelor de judecată.',
      'sp.civil.list':  '<li>Litigii civile și recuperarea prejudiciilor</li><li>Executarea silită a hotărârilor judecătorești</li><li>Apărarea drepturilor personale nepatrimoniale</li><li>Contracte civile și obligații</li><li>Contestarea tranzacțiilor nule sau anulabile</li><li>Reprezentare în instanțele de fond, apel și recurs</li>',

      /* service panel — fam */
      'sp.fam.title': 'Dreptul Familiei',
      'sp.fam.desc':  'Gestionăm cu empatie și profesionalism situațiile de drept familial. Prioritatea echipei noastre este identificarea găsirea unor soluții echilibrate care să protejeze interesele tuturor membrilor familiei, în particular cele ale copiilor.',
      'sp.fam.list':  '<li>Proceduri de divorț</li><li>Stabilirea custodiei și dreptului de vizită</li><li>Partaj patrimonial și bunuri comune</li><li>Pensie alimentară și executare silită</li><li>Adopție națională și internațională</li><li>Contracte premaritale și convenții matrimoniale</li>',

      /* service panel — munca */
      'sp.munca.title': 'Dreptul Muncii',
      'sp.munca.desc':  'Reprezentăm atât angajați, cât și angajatori în toate tipurile de litigii de muncă. Elaborăm contracte clare, gestionăm concedierile și protejăm drepturile salariale în fața instanțelor și autorităților competente.',
      'sp.munca.list':  '<li>Litigii privind concedierea abuzivă</li><li>Elaborarea contractelor individuale de muncă</li><li>Conflicte colective și negocieri sindicale</li><li>Recuperarea salariilor și indemnizațiilor restante</li><li>Discriminare și hărțuire la locul de muncă</li><li>Consultanță pentru angajatori (HR juridic)</li>',

      /* service panel — corp */
      'sp.corp.title': 'Drept Corporativ/Insolvabilitate',
      'sp.corp.desc':  'Oferim asistență juridică completă pentru companii la toate etapele nivelului de activitate — de la înființare și structurare, până la expansiune, reorganizare sau lichidare. Avocații noștri înțeleg atât dimensiunea juridică, cât și cea de afaceri.',
      'sp.corp.list':  '<li>Înregistrarea și structurarea societăților comerciale</li><li>Contracte comerciale și negocieri</li><li>Fuziuni, achiziții și reorganizări corporative</li><li>Guvernanță corporativă și due diligence</li><li>Protecția acționarilor și conflicte interne</li><li>Dizolvare și lichidare voluntară/insolvabilitate</li>',

      /* service panel — com */
      'sp.com.title': 'Drept Comercial',
      'sp.com.desc':  'Asistăm profesioniști și companii în toate aspectele activității comerciale — de la negocierea contractelor și recuperarea creanțelor, până la gestionarea insolvenței și restructurarea datoriilor.',
      'sp.com.list':  '<li>Recuperarea creanțelor comerciale</li><li>Proceduri de insolvență și faliment</li><li>Litigii comerciale între profesioniști</li><li>Contracte de distribuție, agenție și franchise</li><li>Arbitraj comercial național și internațional</li><li>Restructurarea datoriilor și negocieri cu creditorii</li>',

      /* service panel — admin */
      'sp.admin.title': 'Drept Administrativ',
      'sp.admin.desc':  'Reprezentare în raporturile cu autoritățile publice și contestarea actelor administrative ilegale. De la contravenții și permise, până la litigii complexe în contencios administrativ, asigurăm apărarea drepturilor în fața statului.',
      'sp.admin.list':  '<li>Contestarea actelor administrative ilegale</li><li>Litigii de contencios administrativ</li><li>Contravenții și sancțiuni administrative</li><li>Autorizații, licențe și permise</li><li>Răspunderea autorităților publice</li><li>Acces la informații de interes public</li>',

      /* service panel — cons */
      'sp.cons.title': 'Protecția Consumatorului',
      'sp.cons.desc':  'Apărăm drepturile consumatorului în fața comercianților, furnizorilor de servicii și producătorilor. Cunoaștem în detaliu legislația națională și europeană de protecție a consumatorilor și asigurăm o muncă calitativă în domeniu.',
      'sp.cons.list':  '<li>Litigii cu comercianți și furnizori de servicii</li><li>Recuperarea daunelor pentru produse defectuoase</li><li>Contestarea clauzelor abuzive din contracte</li><li>Reprezentare în fața autorităților</li><li>Fraude online și comerț electronic</li><li>Garanții și returnări neonorate</li>',

      /* service panel — imob */
      'sp.imob.title': 'Imobiliare & Proprietate',
      'sp.imob.desc':  'Identificăm riscurile vis-a-vis de securitatea juridică în tranzacțiile imobiliare și protejăm dreptul de proprietate în litigii complexe. De la due diligence la intabulare, suntem alături de tine la fiecare pas.',
      'sp.imob.list':  '<li>Contracte de cumpărare și vânzare imobile</li><li>Due diligence juridic imobiliar</li><li>Litigii privind dreptul de proprietate</li><li>Succesiuni, moșteniri și partaj</li><li>Contracte de închiriere și locațiune</li><li>Exproprierea și contestarea hotărârilor</li>',

      /* service panel — autor */
      'sp.autor.title': 'Drept de Autor',
      'sp.autor.desc':  'Asigurăm reprezentarea în limitele protejării operelor și creațiilor intelectuale, de la înregistrare și gestionarea drepturilor, până la combaterea utilizării neautorizate. Asistăm autori, artiști, dezvoltatori și companii în valorificarea și apărarea proprietății intelectuale.',
      'sp.autor.list':  '<li>Protecția operelor literare, artistice și științifice</li><li>Contracte de cesiune și licențiere a drepturilor</li><li>Drepturi conexe și gestiune colectivă</li><li>Combaterea plagiatului și a pirateriei</li><li>Protecția software-ului și a conținutului digital</li><li>Litigii/infracțiuni privind încălcarea drepturilor de autor și a drepturilor conexe</li>',

      /* service panel — cedo */
      'sp.cedo.title': 'Cereri la CtEDO',
      'sp.cedo.desc':  'Pregătim și depunem cereri la Curtea Europeană a Drepturilor Omului atunci când drepturile și libertățile fundamentale au fost încălcate, iar căile de atac interne au fost epuizate. Redactăm cereri conforme cu exigențele stricte ale CtEDO și asigurăm reprezentarea pe tot parcursul procedurii la CtEDO.',
      'sp.cedo.list':  '<li>Evaluarea admisibilității cererii la CtEDO</li><li>Epuizarea căilor de atac interne</li><li>Redactarea și depunerea cererii (formular oficial)</li><li>Reprezentare în procedura de la CtEDO</li><li>Executarea hotărârilor CtEDO la nivel național</li>',

      /* why us */
      'why.tag':    'De ce BunPartener',
      'why.heading':'Bu<span class="logo-n">N</span>Partener — echipa de avocați în care poți avea <span class="ab">încredere</span>',
      'why.lead':   'Alegem să fim partenerii tăi juridici pe termen lung, nu doar consilierii unui singur caz.',
      'why.f1t':    'Experiență dovedită',
      'why.f1d':    'Avocați cu peste 25 de ani de experiență activă în domeniul avocaturii, cu implicare în diferite state și referitor la diferite jurisdicții.',
      'why.f2t':    'Disponibilitate 24/7',
      'why.f2d':    'Reacție promptă — deși avem un orar aprobat, reacționăm atunci când are nevoie Clientul nostru (24/7).',
      'why.f3t':    'Muncă în echipă',
      'why.f3d':    'Toate dosarele sunt gestionate în echipă, pe bază de viziune strategică clară și aprobată de Client.',
      'why.quote':  '«Ceea ce ești se va vedea în ceea ce faci...»',
      'why.stat6':  'Clienți mulțumiți',

      /* team */
      'team.tag':   'Echipa noastră',
      'team.heading':'Avocații din spatele <span class="aw">fiecărui dosar</span>',
      'team.hint':  'Apăsați pe oricare membru pentru a-i vedea CV-ul',
      'team.row1':  'Avocați asociați Bu<span class="logo-n">N</span>Partener',
      'team.row2':  'Avocați în colaborare cu Bu<span class="logo-n">N</span>Partener',
      'team.prev':  'Anteriorul',
      'team.next':  'Următorul',

      /* role map */
      'role_map': {
        'avocat-asociat':                               'avocat-asociat',
        'avocat-stagiar asociat':                       'avocat-stagiar asociat',
        'avocat-coordonator':                           'avocat-coordonator',
        'avocat prin colaborare':                       'avocat prin colaborare',
        'avocat-stagiar prin colaborare':               'avocat-stagiar prin colaborare',
        'doctor în drept':                              'doctor în drept',
        'profesor universitar · doctor în drept':       'profesor universitar · doctor în drept',
        'conferențiar universitar · doctor în drept':   'conferențiar universitar · doctor în drept',
        'conferențiar universitar · doctor habilitat în drept': 'conferențiar universitar · doctor habilitat în drept'
      },

      /* cv page */
      'cv.tag.asociat':   'Membru asociat al biroului',
      'cv.tag.colaborare':'Membru prin colaborare',
      'cv.tag.other':     'Membru al echipei',
      'cv.section.bio':   'Prezentare',
      'cv.open':          'Deschide CV-ul',
      'cv.unavail':       'Membru indisponibil',
      'cv.select':        'Selectați un membru din pagina echipei.',
      'cv.hint':          'Glisați spre dreapta pentru a reveni',
      'cv.back':          'Înapoi la echipă',

      /* testimonials */
      'testi.tag':     'Recenzii clienți',
      'testi.heading': 'Ce spun <span class="ab">clienții noștri</span>',
      'testi.lead':    'Satisfacția clienților este cea mai mare recompensă a muncii noastre.',
      'testi.prev':    'Recenzia anterioară',
      'testi.next':    'Recenzia următoare',

      /* useful links */
      'links.tag':  'Resurse',
      'links.heading': 'Linkuri <span class="ab">utile</span>',
      'links.desc': 'Resurse oficiale și baze de date juridice naționale și internaționale, utile pentru documentare.',
      'links.prev': 'Resurse anterioare',
      'links.next': 'Resurse următoare',

      /* news */
      'news.tag':     'Noutăți & Media',
      'news.heading': 'Noutăți',
      'news.lead':    'Informații/anunțuri și noutăți din mass-media.',
      'news.prev':    'Articolul anterior',
      'news.next':    'Articolul următor',
      'news.cta_map': {
        'Citește articolul': 'Citește articolul',
        'Vezi postarea':     'Vezi postarea',
        'Vizionează':        'Vizionează'
      },

      /* contact */
      'cont.tag':    'Contactați-ne',
      'cont.heading':'Haideți să discutăm<br>cazul <span class="ab">tău</span>',
      'cont.lead':   'Programează o consultație confidențială.',
      'cont.addr':   'Adresă',
      'cont.phone':  'Telefon',
      'cont.email':  'Email',
      'cont.sched':  'Program de lucru',
      'cont.sched.v':'Luni – Vineri: 09:00 – 18:00<br>Sâmbătă: 10:00 – 14:00',
      'cont.follow': 'Urmăriți-ne',
      'form.title':  'Solicită o consultație',
      'form.sub':    'Programează o întâlnire sau trimite-ne un mesaj.',
      'form.tab1':   'Programează o întâlnire',
      'form.tab2':   'Trimite un mesaj',
      'form.name.l': 'Nume complet',
      'form.name.p': 'Ion Ionescu',
      'form.phone.l':'Telefon',
      'form.email.l':'Email',
      'form.srv.l':  'Domeniu juridic',
      'form.srv.opts':['Selectați domeniul...','Drept Corporativ','Drept Penal','Drept de Familie','Dreptul Muncii','Protecția Consumatorilor','Drept Comercial','Imobiliare & Proprietate','Cereri la CtEDO','Drept de Autor','Drept Administrativ','Altele'],
      'form.msg.l':  'Situația dvs.',
      'form.msg.p':  'Descrieți pe scurt situația juridică în care vă aflați...',
      'form.submit': 'Trimite solicitarea',
      'form.privacy':'Datele dvs. sunt confidențiale și protejate conform GDPR.',

      /* map */
      'map.tag':     'Vizitați-ne',
      'map.heading': 'Unde ne <span class="aw">găsiți</span>',
      'map.sched':   'Luni – Vineri: 09:00 – 18:00 · Sâmbătă: 10:00 – 14:00',
      'map.btn':     'Deschide în Google Maps',

      /* footer */
      'ft.desc':     'Servicii juridice profesionale în Chișinău, Republica Moldova — parteneri de încredere pentru orice situație juridică.',
      'ft.services': 'Servicii',
      'ft.contact':  'Contact',
      'ft.rights':   '© 2017–2026 Bu<span class="logo-n">N</span>Partener. Toate drepturile rezervate.',
      'ft.name':     'Biroul asociat de avocați "Berliba și Partenerii" (Bu<span class="logo-n">N</span>Partener)',

      /* dosare page */
      'ds.tag':      'Registru de dosare',
      'ds.title':    'Dosare <em>reprezentate</em>',
      'ds.sub':      'Selecție de cauze instrumentate de avocații biroului, cu acces la deciziile și sentințele publicate de instanțele de judecată.',
      'ds.filter.all':   'Toate',
      'ds.filter.cedo':  'CtEDO',
      'ds.filter.csj':   'CSJ',
      'ds.filter.ca':    'Curți de Apel',
      'ds.filter.jud':   'Judecătorii',

      /* gallery page */
      'gal.tag':   'Galerie foto',
      'gal.title': 'Momente din activitatea <em>biroului</em>',
      'gal.sub':   'Imagini din viața profesională a echipei BuNPartener — evenimente, distincții și colaborări.',
    },

    /* ── RUSSIAN ─────────────────────────────────────────────────────── */
    ru: {
      'nav.about':     'О нас',
      'nav.services':  'Услуги',
      'nav.team':      'Команда',
      'nav.news':      'Новости',
      'nav.resources': 'Ресурсы',
      'nav.gallery':   'Галерея',
      'nav.cases':     'Дела',
      'nav.contact':   'Контакт',
      'nav.cta':       'Запросить консультацию',
      'nav.back':      'Вернуться на сайт',
      'nav.menu_open': 'Открыть меню',
      'nav.skip':      'Перейти к содержанию',

      'hero.quote':  'Если существует законный способ достичь желаемого результата — будьте уверены, мы его найдём!',
      'hero.btn1':   'Запросить консультацию',
      'hero.btn2':   'Области деятельности',
      'hero.badge':  'Бюро адвокатов · Кишинэу, Молдова',
      'hero.stat1':  'Лет опыта',
      'hero.stat2':  'Дел рассмотрено',
      'hero.stat3':  'Успешных дел',
      'hero.stat4':  'Области права',
      'hero.stat5':  'Юрисдикции',

      'about.tag':    'Об адвокатском бюро',
      'about.heading':'Основаны на <span class="ab">честности,</span><br>движимы справедливостью',
      'about.founded':'Основано в<br>Кишинэу',
      'about.lead':   'Партнёрство между адвокатом и клиентом является для нас приоритетом. Адвокаты BuNPartener всегда были мотивированы и готовы позитивно изменять менталитет и разрушать стереотипы посредством законных действий и необходимых результатов.',
      'about.v1t':    'Абсолютная честность',
      'about.v1d':    'Уважение к клиенту и соблюдение высочайших этических стандартов адвокатской профессии.',
      'about.v2t':    'Гарантированная оперативность',
      'about.v2d':    'Строго соблюдаем сроки и обеспечиваем быстрые правовые ответы. Каждый момент и каждое решение важны для нас.',
      'about.v3t':    'Индивидуальный подход',
      'about.v3d':    'Каждое дело рассматривается индивидуально и является уникальным. Стратегия защиты максимально персонализирована.',
      'about.cta':    'Запросить консультацию',

      'srv.tag':     'Области деятельности',
      'srv.heading': 'Надёжная <span class="aw">экспертиза</span>',
      'srv.desc':    'Комплексные юридические услуги во всех отраслях права с ориентацией на результат и защиту ваших интересов.',
      'srv.cta':     'Запросить консультацию',
      'srv.hint':    'Прокрутите для всех областей',

      'tab.penal':   'Уголовное право',
      'tab.contrav': 'Административные правонарушения',
      'tab.civil':   'Гражданское право',
      'tab.fam':     'Семейное право',
      'tab.munca':   'Трудовое право',
      'tab.corp':    'Корпоративное право / Несостоятельность',
      'tab.com':     'Коммерческое право',
      'tab.admin':   'Административное право',
      'tab.cons':    'Защита прав потребителей',
      'tab.imob':    'Недвижимость и собственность',
      'tab.autor':   'Авторское право',
      'tab.cedo':    'Жалобы в ЕСПЧ',

      'pill.penal':   'Уголовное',
      'pill.contrav': 'Правонарушения',
      'pill.civil':   'Гражданское',
      'pill.fam':     'Семейное',
      'pill.munca':   'Трудовое',
      'pill.corp':    'Корпоративное',
      'pill.com':     'Коммерческое',
      'pill.admin':   'Административное',
      'pill.cons':    'Потребители',
      'pill.imob':    'Недвижимость',
      'pill.autor':   'Авторское',
      'pill.cedo':    'ЕСПЧ',

      'sp.penal.title': 'Уголовное право',
      'sp.penal.desc':  'Обеспечиваем надёжную защиту по уголовным делам на всех этапах процесса — от задержания и досудебного расследования до судебного разбирательства и обжалования судебных решений в обычном и чрезвычайном порядке. Досконально знаем правовую систему Республики Молдова и других государств и эффективно защищаем права и законные интересы наших клиентов.',
      'sp.penal.list':  '<li>Защита на этапе уголовного преследования</li><li>Представительство в судах первой инстанции, апелляции и кассации</li><li>Юридическая помощь задержанным, заключённым под стражу и осуждённым</li><li>Обжалование незаконных процессуальных актов</li><li>Судебная реабилитация, амнистия и помилование</li>',

      'sp.contrav.title': 'Административные правонарушения',
      'sp.contrav.desc':  'Обеспечиваем юридическую помощь по делам об административных правонарушениях на всех этапах производства. Представляем физических и юридических лиц в административных делах и оспариваем незаконные протоколы.',
      'sp.contrav.list':  '<li>Обжалование протоколов об административных правонарушениях</li><li>Представительство перед уполномоченным органом</li><li>Административные споры в суде</li><li>Признание актов недействительными</li><li>Приостановление исполнения санкций</li><li>Возмещение вреда, причинённого незаконными санкциями</li>',

      'sp.civil.title': 'Гражданское право',
      'sp.civil.desc':  'Оказываем полноценную юридическую помощь по гражданским делам — от взыскания убытков и исполнения договоров до защиты личных и имущественных прав в судах.',
      'sp.civil.list':  '<li>Гражданские споры и возмещение вреда</li><li>Принудительное исполнение судебных решений</li><li>Защита личных неимущественных прав</li><li>Гражданские договоры и обязательства</li><li>Оспаривание недействительных или оспоримых сделок</li><li>Представительство в судах первой инстанции, апелляции и кассации</li>',

      'sp.fam.title': 'Семейное право',
      'sp.fam.desc':  'С эмпатией и профессионализмом решаем вопросы семейного права. Приоритет нашей команды — поиск сбалансированных решений, защищающих интересы всех членов семьи, особенно детей.',
      'sp.fam.list':  '<li>Бракоразводный процесс</li><li>Определение места жительства ребёнка и права на общение</li><li>Раздел имущества и общая собственность</li><li>Алименты и принудительное исполнение</li><li>Национальное и международное усыновление</li><li>Брачные договоры и соглашения</li>',

      'sp.munca.title': 'Трудовое право',
      'sp.munca.desc':  'Представляем как работников, так и работодателей во всех видах трудовых споров. Составляем чёткие договоры, сопровождаем увольнения и защищаем права на оплату труда в судах и перед компетентными органами.',
      'sp.munca.list':  '<li>Споры о незаконном увольнении</li><li>Разработка индивидуальных трудовых договоров</li><li>Коллективные конфликты и профсоюзные переговоры</li><li>Взыскание задолженности по заработной плате и пособиям</li><li>Дискриминация и преследование на рабочем месте</li><li>Консультирование работодателей (HR-юрист)</li>',

      'sp.corp.title': 'Корпоративное право / Несостоятельность',
      'sp.corp.desc':  'Оказываем комплексную юридическую поддержку компаниям на всех этапах деятельности — от создания и структурирования до расширения, реорганизации или ликвидации. Наши адвокаты понимают как правовую, так и коммерческую составляющую бизнеса.',
      'sp.corp.list':  '<li>Регистрация и структурирование коммерческих обществ</li><li>Коммерческие договоры и переговоры</li><li>Слияния, поглощения и корпоративные реорганизации</li><li>Корпоративное управление и due diligence</li><li>Защита акционеров и внутренние конфликты</li><li>Добровольная ликвидация и несостоятельность</li>',

      'sp.com.title': 'Коммерческое право',
      'sp.com.desc':  'Сопровождаем предпринимателей и компании во всех аспектах коммерческой деятельности — от согласования договоров и взыскания долгов до управления несостоятельностью и реструктуризации задолженности.',
      'sp.com.list':  '<li>Взыскание коммерческой задолженности</li><li>Процедуры несостоятельности и банкротства</li><li>Коммерческие споры между предпринимателями</li><li>Договоры дистрибуции, агентские соглашения и франшиза</li><li>Национальный и международный коммерческий арбитраж</li><li>Реструктуризация долга и переговоры с кредиторами</li>',

      'sp.admin.title': 'Административное право',
      'sp.admin.desc':  'Представляем интересы клиентов во взаимоотношениях с органами публичной власти и оспариваем незаконные административные акты. От обжалования штрафов и вопросов лицензирования до сложных административных споров в суде — эффективно защищаем права и законные интересы наших клиентов в отношениях с государством.',
      'sp.admin.list':  '<li>Оспаривание незаконных административных актов</li><li>Административное судопроизводство</li><li>Административные правонарушения и санкции</li><li>Разрешения, лицензии и допуски</li><li>Ответственность публичных органов</li><li>Доступ к информации, представляющей общественный интерес</li>',

      'sp.cons.title': 'Защита прав потребителей',
      'sp.cons.desc':  'Защищаем права потребителей перед торговцами, поставщиками услуг и производителями. Детально знаем национальное и европейское законодательство о защите прав потребителей и обеспечиваем качественную работу в этой области.',
      'sp.cons.list':  '<li>Споры с торговцами и поставщиками услуг</li><li>Возмещение ущерба от дефектных товаров</li><li>Оспаривание несправедливых условий договоров</li><li>Представительство перед органами власти</li><li>Онлайн-мошенничество и электронная торговля</li><li>Гарантийное обслуживание и неосуществлённые возвраты</li>',

      'sp.imob.title': 'Недвижимость и собственность',
      'sp.imob.desc':  'Выявляем правовые риски в сделках с недвижимостью и защищаем право собственности в сложных спорах. От due diligence до регистрации — сопровождаем вас на каждом шагу.',
      'sp.imob.list':  '<li>Договоры купли-продажи недвижимости</li><li>Юридический due diligence по недвижимости</li><li>Споры о праве собственности</li><li>Наследство и раздел имущества</li><li>Договоры аренды и найма</li><li>Изъятие имущества и обжалование решений</li>',

      'sp.autor.title': 'Авторское право',
      'sp.autor.desc':  'Обеспечиваем защиту произведений и иных объектов интеллектуальной собственности — от регистрации и управления правами до противодействия их незаконному использованию. Оказываем правовую помощь авторам, художникам, разработчикам и компаниям в вопросах создания, использования и защиты объектов интеллектуальной собственности.',
      'sp.autor.list':  '<li>Защита литературных, художественных и научных произведений</li><li>Договоры уступки и лицензирования прав</li><li>Смежные права и коллективное управление</li><li>Борьба с плагиатом и пиратством</li><li>Защита программного обеспечения и цифрового контента</li><li>Споры и преступления, связанные с нарушением авторских и смежных прав</li>',

      'sp.cedo.title': 'Жалобы в ЕСПЧ',
      'sp.cedo.desc':  'Подготавливаем и подаём жалобы в Европейский суд по правам человека, когда основные права и свободы нарушены, а внутренние средства правовой защиты исчерпаны. Составляем жалобы в соответствии со строгими требованиями ЕСПЧ и обеспечиваем представительство на протяжении всей процедуры.',
      'sp.cedo.list':  '<li>Оценка приемлемости жалобы в ЕСПЧ</li><li>Исчерпание внутренних средств правовой защиты</li><li>Подготовка и подача жалобы (официальная форма)</li><li>Представительство в производстве ЕСПЧ</li><li>Исполнение постановлений ЕСПЧ на национальном уровне</li>',

      'why.tag':    'Почему BuNPartener',
      'why.heading':'Bu<span class="logo-n">N</span>Partener — команда адвокатов, которым вы можете <span class="ab">доверять</span>',
      'why.lead':   'Мы выбираем быть вашими долгосрочными юридическими партнёрами, а не только советниками по одному делу.',
      'why.f1t':    'Доказанный опыт',
      'why.f1d':    'Адвокаты с более чем 25-летним активным опытом в адвокатуре, с участием в делах в различных государствах и юрисдикциях.',
      'why.f2t':    'Доступность 24/7',
      'why.f2d':    'Оперативное реагирование — несмотря на утверждённый рабочий график, мы реагируем тогда, когда это нужно Клиенту (24/7).',
      'why.f3t':    'Командная работа',
      'why.f3d':    'Все дела ведутся командой на основе чёткой стратегической концепции, согласованной с Клиентом.',
      'why.quote':  '«Кем вы являетесь, проявляется в том, что вы делаете...»',
      'why.stat6':  'Довольных клиентов',

      'team.tag':    'Наша команда',
      'team.heading':'Адвокаты за каждым <span class="aw">делом</span>',
      'team.hint':   'Нажмите на любого члена команды, чтобы увидеть его CV',
      'team.row1':   'Адвокаты-партнёры Bu<span class="logo-n">N</span>Partener',
      'team.row2':   'Адвокаты-сотрудники Bu<span class="logo-n">N</span>Partener',
      'team.prev':   'Предыдущий',
      'team.next':   'Следующий',

      'role_map': {
        'avocat-asociat':                               'адвокат-партнёр',
        'avocat-stagiar asociat':                       'адвокат-стажёр',
        'avocat-coordonator':                           'адвокат-координатор',
        'avocat prin colaborare':                       'адвокат-сотрудник',
        'avocat-stagiar prin colaborare':               'адвокат-стажёр (сотрудник)',
        'doctor în drept':                              'доктор права',
        'profesor universitar · doctor în drept':       'профессор · доктор права',
        'conferențiar universitar · doctor în drept':   'доцент · доктор права',
        'conferențiar universitar · doctor habilitat în drept': 'доцент · доктор хаб. права'
      },

      /* cv page */
      'cv.tag.asociat':   'Партнёр адвокатского бюро',
      'cv.tag.colaborare':'Адвокат-сотрудник',
      'cv.tag.other':     'Член команды',
      'cv.section.bio':   'Биография',
      'cv.open':          'Открыть резюме',
      'cv.unavail':       'Член команды не найден',
      'cv.select':        'Выберите члена команды на странице команды.',
      'cv.hint':          'Проведите вправо для возврата',
      'cv.back':          'Назад к команде',

      /* testimonials */
      'testi.tag':     'Отзывы клиентов',
      'testi.heading': 'Что говорят <span class="ab">наши клиенты</span>',
      'testi.lead':    'Удовлетворённость клиентов — наша главная награда.',
      'testi.prev':    'Предыдущий отзыв',
      'testi.next':    'Следующий отзыв',

      'links.tag':     'Ресурсы',
      'links.heading': 'Полезные <span class="ab">ссылки</span>',
      'links.desc':    'Официальные ресурсы и национальные и международные правовые базы данных, полезные для изучения.',
      'links.prev':    'Предыдущие ресурсы',
      'links.next':    'Следующие ресурсы',

      'news.tag':     'Новости и СМИ',
      'news.heading': 'Новости',
      'news.lead':    'Информация/объявления и новости из СМИ.',
      'news.prev':    'Предыдущая статья',
      'news.next':    'Следующая статья',
      'news.cta_map': {
        'Citește articolul': 'Читать статью',
        'Vezi postarea':     'Смотреть пост',
        'Vizionează':        'Смотреть'
      },

      'cont.tag':    'Свяжитесь с нами',
      'cont.heading':'Давайте обсудим<br><span class="ab">ваше</span> дело',
      'cont.lead':   'Запишитесь на конфиденциальную консультацию.',
      'cont.addr':   'Адрес',
      'cont.phone':  'Телефон',
      'cont.email':  'Эл. почта',
      'cont.sched':  'Часы работы',
      'cont.sched.v':'Пн – Пт: 09:00 – 18:00<br>Сб: 10:00 – 14:00',
      'cont.follow': 'Следите за нами',
      'form.title':  'Запросить консультацию',
      'form.sub':    'Запланируйте встречу или отправьте нам сообщение.',
      'form.tab1':   'Запланировать встречу',
      'form.tab2':   'Отправить сообщение',
      'form.name.l': 'Полное имя',
      'form.name.p': 'Иван Иванов',
      'form.phone.l':'Телефон',
      'form.email.l':'Эл. почта',
      'form.srv.l':  'Область права',
      'form.srv.opts':['Выберите область...','Корпоративное право','Уголовное право','Семейное право','Трудовое право','Защита потребителей','Коммерческое право','Недвижимость и собственность','Жалобы в ЕСПЧ','Авторское право','Административное право','Другое'],
      'form.msg.l':  'Ваша ситуация',
      'form.msg.p':  'Кратко опишите вашу правовую ситуацию...',
      'form.submit': 'Отправить запрос',
      'form.privacy':'Ваши данные конфиденциальны и защищены в соответствии с GDPR.',

      'map.tag':     'Посетите нас',
      'map.heading': 'Где нас <span class="aw">найти</span>',
      'map.sched':   'Пн – Пт: 09:00 – 18:00 · Сб: 10:00 – 14:00',
      'map.btn':     'Открыть в Google Maps',

      'ft.desc':     'Профессиональные юридические услуги в Кишинэу, Республика Молдова — надёжные партнёры в любой правовой ситуации.',
      'ft.services': 'Услуги',
      'ft.contact':  'Контакт',
      'ft.rights':   '© 2017–2026 Bu<span class="logo-n">N</span>Partener. Все права защищены.',
      'ft.name':     'Адвокатское бюро "Berliba și Partenerii" (Bu<span class="logo-n">N</span>Partener)',

      'ds.tag':      'Дела адвокатского бюро',
      'ds.title':    'Дела из практики <em>адвокатского бюро</em>',
      'ds.sub':      'Подборка судебных решений и постановлений, в которых Адвокатское бюро BuNPartener обеспечивало юридическое представительство.',
      'ds.filter.all':   'Все',
      'ds.filter.cedo':  'ЕСПЧ',
      'ds.filter.csj':   'ВСС',
      'ds.filter.ca':    'Апелляционные суды',
      'ds.filter.jud':   'Суды',

      'gal.tag':   'Фотогалерея',
      'gal.title': 'Моменты из деятельности <em>адвокатского бюро</em>',
      'gal.sub':   'Снимки из профессиональной жизни команды BuNPartener — события, награды и сотрудничество.',
    },

    /* ── ITALIAN ─────────────────────────────────────────────────────── */
    it: {
      'nav.about':     'Chi siamo',
      'nav.services':  'Servizi',
      'nav.team':      'Team',
      'nav.news':      'Notizie',
      'nav.resources': 'Risorse',
      'nav.gallery':   'Galleria',
      'nav.cases':     'Fascicoli',
      'nav.contact':   'Contatti',
      'nav.cta':       'Consulenza',
      'nav.back':      'Torna al sito',
      'nav.menu_open': 'Apri menu',
      'nav.skip':      'Vai al contenuto',

      'hero.quote':  'Se esiste una via legale per raggiungere il risultato desiderato, state certi che la troveremo!',
      'hero.btn1':   'Richiedi una consulenza',
      'hero.btn2':   'Aree di attività',
      'hero.badge':  'Studio Legale · Chișinău, Moldova',
      'hero.stat1':  'Anni di esperienza',
      'hero.stat2':  'Cause gestite',
      'hero.stat3':  'Tasso di successo',
      'hero.stat4':  'Aree di attività',
      'hero.stat5':  'Giurisdizioni partner',

      'about.tag':    'Lo studio',
      'about.heading':'Fondati sull\'<span class="ab">Integrità,</span><br>Guidati dalla Giustizia',
      'about.founded':'Fondato a<br>Chișinău',
      'about.lead':   'Il partenariato tra avvocato e cliente è la nostra priorità. Gli avvocati di BuNPartener sono sempre stati motivati e pronti a cambiare positivamente le mentalità e a sfatare gli stereotipi attraverso azioni legali e risultati concreti.',
      'about.v1t':    'Integrità assoluta',
      'about.v1d':    'Rispetto genuino per i clienti e adesione ai più alti standard etici della professione forense.',
      'about.v2t':    'Prontezza garantita',
      'about.v2d':    'Rispettiamo rigorosamente le scadenze e forniamo risposte legali rapide. Ogni momento e ogni soluzione sono importanti per noi.',
      'about.v3t':    'Approccio personalizzato',
      'about.v3d':    'Ogni caso è valutato individualmente ed è unico. La strategia legale è completamente adattata alla situazione del cliente.',
      'about.cta':    'Richiedi una consulenza',

      'srv.tag':     'Aree di attività',
      'srv.heading': 'Competenza <span class="aw">affidabile</span>',
      'srv.desc':    'Servizi legali integrati in tutte le aree del diritto, con un approccio orientato ai risultati e alla protezione dei vostri interessi.',
      'srv.cta':     'Richiedi una consulenza',
      'srv.hint':    'Scorri per tutte le aree',

      'tab.penal':   'Diritto Penale',
      'tab.contrav': 'Illeciti Amministrativi',
      'tab.civil':   'Diritto Civile',
      'tab.fam':     'Diritto di Famiglia',
      'tab.munca':   'Diritto del Lavoro',
      'tab.corp':    'Diritto Societario / Insolvenza',
      'tab.com':     'Diritto Commerciale',
      'tab.admin':   'Diritto Amministrativo',
      'tab.cons':    'Tutela dei Consumatori',
      'tab.imob':    'Immobiliare e Proprietà',
      'tab.autor':   'Diritto d\'Autore',
      'tab.cedo':    'Ricorsi alla CEDU',

      'pill.penal':   'Penale',
      'pill.contrav': 'Illeciti',
      'pill.civil':   'Civile',
      'pill.fam':     'Famiglia',
      'pill.munca':   'Lavoro',
      'pill.corp':    'Societario',
      'pill.com':     'Commerciale',
      'pill.admin':   'Amministrativo',
      'pill.cons':    'Consumatori',
      'pill.imob':    'Immobiliare',
      'pill.autor':   'Autore',
      'pill.cedo':    'CEDU',

      'sp.penal.title': 'Diritto Penale',
      'sp.penal.desc':  'Forniamo una rigorosa difesa penale in ogni fase del procedimento — dalla detenzione e dalle indagini preliminari fino al dibattimento e alle impugnazioni (ordinarie e straordinarie). Conosciamo approfonditamente il sistema giuridico della Repubblica di Moldova e di altri paesi e agiamo con determinazione per tutelare i diritti e gli interessi legittimi dei clienti.',
      'sp.penal.list':  '<li>Difesa nella fase delle indagini preliminari</li><li>Rappresentanza davanti ai tribunali di primo grado, in appello e in cassazione</li><li>Assistenza legale per detenuti, in custodia cautelare e condannati</li><li>Impugnazione di atti processuali illegittimi</li><li>Riabilitazione giudiziaria, amnistia e grazia</li>',

      'sp.contrav.title': 'Illeciti Amministrativi',
      'sp.contrav.desc':  'Forniamo assistenza legale nei procedimenti per illeciti amministrativi in tutte le fasi. Rappresentiamo persone fisiche e giuridiche e contestiamo i verbali illegittimi.',
      'sp.contrav.list':  '<li>Contestazione dei verbali di illecito amministrativo</li><li>Rappresentanza davanti all\'autorità competente</li><li>Contenzioso amministrativo in tribunale</li><li>Nullità degli atti di accertamento</li><li>Sospensione dell\'esecuzione della sanzione</li><li>Risarcimento dei danni causati da sanzioni illegittime</li>',

      'sp.civil.title': 'Diritto Civile',
      'sp.civil.desc':  'Forniamo assistenza legale completa in materia civile — dal risarcimento dei danni e dall\'esecuzione dei contratti alla difesa dei diritti personali e patrimoniali davanti ai tribunali.',
      'sp.civil.list':  '<li>Contenzioso civile e risarcimento danni</li><li>Esecuzione forzata delle sentenze</li><li>Tutela dei diritti personali non patrimoniali</li><li>Contratti civili e obbligazioni</li><li>Contestazione di negozi nulli o annullabili</li><li>Rappresentanza davanti ai tribunali di primo grado, in appello e in cassazione</li>',

      'sp.fam.title': 'Diritto di Famiglia',
      'sp.fam.desc':  'Gestiamo le questioni di diritto di famiglia con empatia e professionalità. La priorità del nostro team è trovare soluzioni equilibrate che tutelino gli interessi di tutti i membri della famiglia, in particolare dei minori.',
      'sp.fam.list':  '<li>Procedimenti di divorzio</li><li>Affidamento e diritto di visita</li><li>Divisione dei beni e proprietà coniugale</li><li>Assegno di mantenimento ed esecuzione forzata</li><li>Adozione nazionale e internazionale</li><li>Accordi prematrimoniali e contratti matrimoniali</li>',

      'sp.munca.title': 'Diritto del Lavoro',
      'sp.munca.desc':  'Rappresentiamo sia dipendenti che datori di lavoro in tutti i tipi di controversie lavorative. Redigiamo contratti chiari, gestiamo i licenziamenti e tuteliamo i diritti retributivi davanti ai tribunali e alle autorità competenti.',
      'sp.munca.list':  '<li>Controversie per licenziamento illegittimo</li><li>Redazione di contratti individuali di lavoro</li><li>Conflitti collettivi e trattative sindacali</li><li>Recupero di retribuzioni e indennità arretrate</li><li>Discriminazione e molestie sul luogo di lavoro</li><li>Consulenza HR legale per datori di lavoro</li>',

      'sp.corp.title': 'Diritto Societario / Insolvenza',
      'sp.corp.desc':  'Offriamo supporto legale completo alle aziende in ogni fase del loro ciclo di vita — dalla costituzione e strutturazione fino all\'espansione, alla riorganizzazione o alla liquidazione. I nostri avvocati comprendono sia la dimensione giuridica che quella commerciale.',
      'sp.corp.list':  '<li>Costituzione e strutturazione di società commerciali</li><li>Contratti commerciali e negoziazioni</li><li>Fusioni, acquisizioni e riorganizzazioni societarie</li><li>Corporate governance e due diligence</li><li>Tutela degli azionisti e controversie interne</li><li>Scioglimento volontario e insolvenza</li>',

      'sp.com.title': 'Diritto Commerciale',
      'sp.com.desc':  'Assistiamo professionisti e aziende in tutti gli aspetti dell\'attività commerciale — dalla negoziazione dei contratti e dal recupero crediti alla gestione dell\'insolvenza e alla ristrutturazione del debito.',
      'sp.com.list':  '<li>Recupero di crediti commerciali</li><li>Procedure di insolvenza e fallimento</li><li>Controversie commerciali tra professionisti</li><li>Contratti di distribuzione, agenzia e franchising</li><li>Arbitrato commerciale nazionale e internazionale</li><li>Ristrutturazione del debito e trattative con i creditori</li>',

      'sp.admin.title': 'Diritto Amministrativo',
      'sp.admin.desc':  'Rappresentanza nei rapporti con le pubbliche autorità e contestazione degli atti amministrativi illegittimi. Dalle sanzioni e autorizzazioni ai complessi ricorsi amministrativi, difendiamo i vostri diritti nei confronti dello Stato.',
      'sp.admin.list':  '<li>Contestazione di atti amministrativi illegittimi</li><li>Contenzioso amministrativo</li><li>Illeciti amministrativi e sanzioni</li><li>Autorizzazioni, licenze e permessi</li><li>Responsabilità delle pubbliche autorità</li><li>Accesso alle informazioni di interesse pubblico</li>',

      'sp.cons.title': 'Tutela dei Consumatori',
      'sp.cons.desc':  'Difendiamo i diritti dei consumatori nei confronti di commercianti, fornitori di servizi e produttori. Conosciamo in dettaglio la normativa nazionale ed europea sulla tutela dei consumatori e garantiamo un lavoro di qualità in questo settore.',
      'sp.cons.list':  '<li>Controversie con commercianti e fornitori di servizi</li><li>Risarcimento danni per prodotti difettosi</li><li>Contestazione di clausole contrattuali abusive</li><li>Rappresentanza davanti alle autorità</li><li>Frodi online e commercio elettronico</li><li>Garanzie e resi non onorati</li>',

      'sp.imob.title': 'Immobiliare e Proprietà',
      'sp.imob.desc':  'Identifichiamo i rischi legali nelle transazioni immobiliari e tuteliamo i diritti di proprietà in controversie complesse. Dal due diligence alla registrazione, siamo al vostro fianco ad ogni passo.',
      'sp.imob.list':  '<li>Contratti di compravendita immobiliare</li><li>Due diligence legale immobiliare</li><li>Controversie in materia di diritti di proprietà</li><li>Successioni, eredità e divisioni</li><li>Contratti di locazione e affitto</li><li>Espropriazione e impugnazione delle decisioni</li>',

      'sp.autor.title': 'Diritto d\'Autore',
      'sp.autor.desc':  'Ci occupiamo della protezione delle opere e delle creazioni intellettuali — dalla registrazione e gestione dei diritti alla lotta contro l\'uso non autorizzato. Assistiamo autori, artisti, sviluppatori e aziende nella valorizzazione e nella difesa della proprietà intellettuale.',
      'sp.autor.list':  '<li>Protezione di opere letterarie, artistiche e scientifiche</li><li>Contratti di cessione e licenza dei diritti</li><li>Diritti connessi e gestione collettiva</li><li>Lotta contro il plagio e la pirateria</li><li>Protezione del software e dei contenuti digitali</li><li>Contenzioso in materia di violazione del diritto d\'autore e dei diritti connessi</li>',

      'sp.cedo.title': 'Ricorsi alla CEDU',
      'sp.cedo.desc':  'Prepariamo e presentiamo ricorsi alla Corte Europea dei Diritti dell\'Uomo quando i diritti e le libertà fondamentali sono stati violati e i rimedi interni sono stati esauriti. Redigiamo ricorsi conformi ai severi requisiti della CEDU e assicuriamo la rappresentanza durante l\'intero procedimento.',
      'sp.cedo.list':  '<li>Valutazione dell\'ammissibilità del ricorso alla CEDU</li><li>Esaurimento dei rimedi interni</li><li>Redazione e presentazione del ricorso (modulo ufficiale)</li><li>Rappresentanza nel procedimento dinanzi alla CEDU</li><li>Esecuzione delle sentenze della CEDU a livello nazionale</li>',

      'why.tag':    'Perché BuNPartener',
      'why.heading':'Bu<span class="logo-n">N</span>Partener — il team legale di cui ti puoi <span class="ab">fidare</span>',
      'why.lead':   'Scegliamo di essere i tuoi partner legali a lungo termine, non solo i consulenti di un singolo caso.',
      'why.f1t':    'Esperienza comprovata',
      'why.f1d':    'Avvocati con oltre 25 anni di esperienza attiva nella professione forense, con coinvolgimento in casi in diversi paesi e giurisdizioni.',
      'why.f2t':    'Disponibilità 24/7',
      'why.f2d':    'Risposta tempestiva — pur avendo orari d\'ufficio definiti, reagiamo quando il Cliente ne ha bisogno (24/7).',
      'why.f3t':    'Lavoro di squadra',
      'why.f3d':    'Tutti i casi sono gestiti in team, sulla base di una visione strategica chiara approvata dal Cliente.',
      'why.quote':  '«Ciò che sei si vedrà in ciò che fai...»',
      'why.stat6':  'Clienti soddisfatti',

      'team.tag':    'Il nostro team',
      'team.heading':'Gli avvocati dietro <span class="aw">ogni fascicolo</span>',
      'team.hint':   'Clicca su qualsiasi membro per visualizzare il suo CV',
      'team.row1':   'Avvocati associati di Bu<span class="logo-n">N</span>Partener',
      'team.row2':   'Avvocati collaboratori di Bu<span class="logo-n">N</span>Partener',
      'team.prev':   'Precedente',
      'team.next':   'Successivo',

      'role_map': {
        'avocat-asociat':                               'avvocato associato',
        'avocat-stagiar asociat':                       'avvocato praticante',
        'avocat-coordonator':                           'avvocato coordinatore',
        'avocat prin colaborare':                       'avvocato collaboratore',
        'avocat-stagiar prin colaborare':               'praticante collaboratore',
        'doctor în drept':                              'dottore in diritto',
        'profesor universitar · doctor în drept':       'professore · dottore in diritto',
        'conferențiar universitar · doctor în drept':   'professore associato · dottore in diritto',
        'conferențiar universitar · doctor habilitat în drept': 'prof. associato · dott. hab. in diritto'
      },

      'cv.tag.asociat':   'Socio dello studio',
      'cv.tag.colaborare':'Collaboratore esterno',
      'cv.tag.other':     'Membro del team',
      'cv.section.bio':   'Presentazione',
      'cv.open':          'Apri il CV',
      'cv.unavail':       'Membro non trovato',
      'cv.select':        'Seleziona un membro dalla pagina del team.',
      'cv.hint':          'Scorri a destra per tornare',
      'cv.back':          'Torna al team',

      'testi.tag':     'Recensioni clienti',
      'testi.heading': 'Cosa dicono i <span class="ab">nostri clienti</span>',
      'testi.lead':    'La soddisfazione dei clienti è la nostra più grande ricompensa.',
      'testi.prev':    'Recensione precedente',
      'testi.next':    'Recensione successiva',

      'links.tag':     'Risorse',
      'links.heading': 'Link <span class="ab">utili</span>',
      'links.desc':    'Risorse ufficiali e banche dati giuridiche nazionali e internazionali, utili per la ricerca e la documentazione.',
      'links.prev':    'Risorse precedenti',
      'links.next':    'Risorse successive',

      'news.tag':     'Notizie e Media',
      'news.heading': 'Notizie',
      'news.lead':    'Informazioni/annunci e notizie dai media.',
      'news.prev':    'Articolo precedente',
      'news.next':    'Articolo successivo',
      'news.cta_map': {
        'Citește articolul': 'Leggi l\'articolo',
        'Vezi postarea':     'Vedi il post',
        'Vizionează':        'Guarda'
      },

      'cont.tag':    'Contattaci',
      'cont.heading':'Parliamo del<br>tuo <span class="ab">caso</span>',
      'cont.lead':   'Prenota una consulenza riservata.',
      'cont.addr':   'Indirizzo',
      'cont.phone':  'Telefono',
      'cont.email':  'Email',
      'cont.sched':  'Orari di lavoro',
      'cont.sched.v':'Lun – Ven: 09:00 – 18:00<br>Sab: 10:00 – 14:00',
      'cont.follow': 'Seguici',
      'form.title':  'Richiedi una consulenza',
      'form.sub':    'Prenota un appuntamento o inviaci un messaggio.',
      'form.tab1':   'Prenota un appuntamento',
      'form.tab2':   'Invia un messaggio',
      'form.name.l': 'Nome completo',
      'form.name.p': 'Mario Rossi',
      'form.phone.l':'Telefono',
      'form.email.l':'Email',
      'form.srv.l':  'Area legale',
      'form.srv.opts':['Seleziona area...','Diritto Societario','Diritto Penale','Diritto di Famiglia','Diritto del Lavoro','Tutela dei Consumatori','Diritto Commerciale','Immobiliare e Proprietà','Ricorsi alla CEDU','Diritto d\'Autore','Diritto Amministrativo','Altro'],
      'form.msg.l':  'La vostra situazione',
      'form.msg.p':  'Descrivete brevemente la vostra situazione legale...',
      'form.submit': 'Invia la richiesta',
      'form.privacy':'I vostri dati sono riservati e protetti ai sensi del GDPR.',

      'map.tag':     'Visitateci',
      'map.heading': 'Dove <span class="aw">trovarci</span>',
      'map.sched':   'Lun – Ven: 09:00 – 18:00 · Sab: 10:00 – 14:00',
      'map.btn':     'Apri in Google Maps',

      'ft.desc':     'Servizi legali professionali a Chișinău, Repubblica di Moldova — partner affidabili per qualsiasi situazione legale.',
      'ft.services': 'Servizi',
      'ft.contact':  'Contatti',
      'ft.rights':   '© 2017–2026 Bu<span class="logo-n">N</span>Partener. Tutti i diritti riservati.',
      'ft.name':     'Studio Legale "Berliba și Partenerii" (Bu<span class="logo-n">N</span>Partener)',

      'ds.tag':      'Registro fascicoli',
      'ds.title':    'Fascicoli <em>rappresentati</em>',
      'ds.sub':      'Selezione di cause trattate dagli avvocati dello studio, con accesso alle decisioni e sentenze pubblicate dai tribunali.',
      'ds.filter.all':   'Tutti',
      'ds.filter.cedo':  'CEDU',
      'ds.filter.csj':   'CSC',
      'ds.filter.ca':    'Corti d\'Appello',
      'ds.filter.jud':   'Tribunali',

      'gal.tag':   'Galleria fotografica',
      'gal.title': 'Momenti dell\'attività <em>dello studio</em>',
      'gal.sub':   'Immagini dalla vita professionale del team BuNPartener — eventi, riconoscimenti e collaborazioni.',
    },

    /* ── FRENCH ──────────────────────────────────────────────────────── */
    fr: {
      'nav.about':     'À propos',
      'nav.services':  'Services',
      'nav.team':      'Équipe',
      'nav.news':      'Actualités',
      'nav.resources': 'Ressources',
      'nav.gallery':   'Galerie',
      'nav.cases':     'Dossiers',
      'nav.contact':   'Contact',
      'nav.cta':       'Consultation',
      'nav.back':      'Retour au site',
      'nav.menu_open': 'Ouvrir le menu',
      'nav.skip':      'Aller au contenu',

      'hero.quote':  'S\'il existe une voie légale pour atteindre le résultat souhaité, soyez assurés que nous la trouverons!',
      'hero.btn1':   'Demander une consultation',
      'hero.btn2':   'Domaines d\'activité',
      'hero.badge':  'Cabinet d\'avocats · Chișinău, Moldova',
      'hero.stat1':  'Ans d\'expérience',
      'hero.stat2':  'Affaires traitées',
      'hero.stat3':  'Taux de succès',
      'hero.stat4':  'Domaines d\'activité',
      'hero.stat5':  'Juridictions partenaires',

      'about.tag':    'Le cabinet',
      'about.heading':'Fondés sur l\'<span class="ab">Intégrité,</span><br>Guidés par la Justice',
      'about.founded':'Fondé à<br>Chișinău',
      'about.lead':   'Le partenariat entre avocat et client est notre priorité. Les avocats de BuNPartener ont toujours été motivés et prêts à changer positivement les mentalités et à briser les stéréotypes par des actions juridiques et des résultats concrets.',
      'about.v1t':    'Intégrité absolue',
      'about.v1d':    'Respect authentique envers nos clients et adhésion aux plus hauts standards éthiques de la profession d\'avocat.',
      'about.v2t':    'Promptitude garantie',
      'about.v2d':    'Nous respectons rigoureusement les délais et fournissons des réponses juridiques rapides. Chaque moment et chaque solution comptent pour nous.',
      'about.v3t':    'Approche personnalisée',
      'about.v3d':    'Chaque affaire est examinée individuellement et est unique. La stratégie juridique est entièrement adaptée à votre situation.',
      'about.cta':    'Demander une consultation',

      'srv.tag':     'Domaines d\'activité',
      'srv.heading': 'Expertise <span class="aw">de confiance</span>',
      'srv.desc':    'Services juridiques intégrés dans tous les domaines du droit, avec une approche axée sur les résultats et la protection de vos intérêts.',
      'srv.cta':     'Demander une consultation',
      'srv.hint':    'Faites défiler pour tous les domaines',

      'tab.penal':   'Droit Pénal',
      'tab.contrav': 'Infractions Administratives',
      'tab.civil':   'Droit Civil',
      'tab.fam':     'Droit de la Famille',
      'tab.munca':   'Droit du Travail',
      'tab.corp':    'Droit des Sociétés / Insolvabilité',
      'tab.com':     'Droit Commercial',
      'tab.admin':   'Droit Administratif',
      'tab.cons':    'Protection des Consommateurs',
      'tab.imob':    'Immobilier et Propriété',
      'tab.autor':   'Droit d\'Auteur',
      'tab.cedo':    'Requêtes à la CEDH',

      'pill.penal':   'Pénal',
      'pill.contrav': 'Infractions',
      'pill.civil':   'Civil',
      'pill.fam':     'Famille',
      'pill.munca':   'Travail',
      'pill.corp':    'Sociétés',
      'pill.com':     'Commercial',
      'pill.admin':   'Administratif',
      'pill.cons':    'Consommateurs',
      'pill.imob':    'Immobilier',
      'pill.autor':   'Auteur',
      'pill.cedo':    'CEDH',

      'sp.penal.title': 'Droit Pénal',
      'sp.penal.desc':  'Nous assurons une défense pénale rigoureuse à chaque étape de la procédure — de la garde à vue et de l\'instruction jusqu\'au procès et aux voies de recours (ordinaires et extraordinaires). Nous connaissons en profondeur le système juridique de la République de Moldova et d\'autres États et agissons résolument pour défendre les droits et les intérêts légitimes de nos clients.',
      'sp.penal.list':  '<li>Défense lors de l\'instruction pénale</li><li>Représentation devant les juridictions de première instance, d\'appel et de cassation</li><li>Assistance juridique pour les personnes détenues, placées en détention provisoire et condamnées</li><li>Contestation d\'actes de procédure illégaux</li><li>Réhabilitation judiciaire, amnistie et grâce</li>',

      'sp.contrav.title': 'Infractions Administratives',
      'sp.contrav.desc':  'Nous fournissons une assistance juridique dans les affaires d\'infractions administratives à toutes les étapes de la procédure. Nous représentons les personnes physiques et morales et contestons les procès-verbaux illégaux.',
      'sp.contrav.list':  '<li>Contestation des procès-verbaux d\'infractions administratives</li><li>Représentation devant l\'autorité compétente</li><li>Contentieux administratif devant le tribunal</li><li>Nullité des actes de constatation</li><li>Suspension de l\'exécution de la sanction</li><li>Réparation des préjudices causés par des sanctions illégales</li>',

      'sp.civil.title': 'Droit Civil',
      'sp.civil.desc':  'Nous fournissons une assistance juridique complète dans les affaires civiles — du recouvrement de dommages et de l\'exécution de contrats à la défense des droits personnels et patrimoniaux devant les tribunaux.',
      'sp.civil.list':  '<li>Litiges civils et recouvrement de préjudices</li><li>Exécution forcée des décisions de justice</li><li>Protection des droits personnels extrapatrimoniaux</li><li>Contrats civils et obligations</li><li>Contestation de transactions nulles ou annulables</li><li>Représentation devant les juridictions de première instance, d\'appel et de cassation</li>',

      'sp.fam.title': 'Droit de la Famille',
      'sp.fam.desc':  'Nous traitons les affaires de droit de la famille avec empathie et professionnalisme. La priorité de notre équipe est de trouver des solutions équilibrées qui protègent les intérêts de tous les membres de la famille, en particulier des enfants.',
      'sp.fam.list':  '<li>Procédures de divorce</li><li>Garde d\'enfants et droit de visite</li><li>Partage des biens et propriété matrimoniale</li><li>Pension alimentaire et exécution forcée</li><li>Adoption nationale et internationale</li><li>Contrats de mariage et conventions matrimoniales</li>',

      'sp.munca.title': 'Droit du Travail',
      'sp.munca.desc':  'Nous représentons aussi bien les salariés que les employeurs dans tous les types de litiges du travail. Nous rédigeons des contrats clairs, gérons les licenciements et protégeons les droits salariaux devant les tribunaux et les autorités compétentes.',
      'sp.munca.list':  '<li>Litiges pour licenciement abusif</li><li>Rédaction de contrats de travail individuels</li><li>Conflits collectifs et négociations syndicales</li><li>Recouvrement de salaires et indemnités impayés</li><li>Discrimination et harcèlement au travail</li><li>Conseil juridique RH pour les employeurs</li>',

      'sp.corp.title': 'Droit des Sociétés / Insolvabilité',
      'sp.corp.desc':  'Nous offrons un soutien juridique complet aux entreprises à chaque étape de leur cycle de vie — de la création et la structuration jusqu\'à l\'expansion, la réorganisation ou la liquidation. Nos avocats comprennent à la fois les dimensions juridiques et commerciales.',
      'sp.corp.list':  '<li>Immatriculation et structuration de sociétés commerciales</li><li>Contrats commerciaux et négociations</li><li>Fusions, acquisitions et réorganisations de sociétés</li><li>Gouvernance d\'entreprise et due diligence</li><li>Protection des actionnaires et litiges internes</li><li>Dissolution volontaire et insolvabilité</li>',

      'sp.com.title': 'Droit Commercial',
      'sp.com.desc':  'Nous assistons professionnels et entreprises dans tous les aspects de l\'activité commerciale — de la négociation de contrats et du recouvrement de créances à la gestion de l\'insolvabilité et à la restructuration de dettes.',
      'sp.com.list':  '<li>Recouvrement de créances commerciales</li><li>Procédures d\'insolvabilité et de faillite</li><li>Litiges commerciaux entre professionnels</li><li>Contrats de distribution, d\'agence et de franchise</li><li>Arbitrage commercial national et international</li><li>Restructuration de dettes et négociations avec les créanciers</li>',

      'sp.admin.title': 'Droit Administratif',
      'sp.admin.desc':  'Représentation dans les rapports avec les autorités publiques et contestation des actes administratifs illégaux. Des contraventions et permis aux litiges complexes en contentieux administratif, nous défendons vos droits face à l\'État.',
      'sp.admin.list':  '<li>Contestation d\'actes administratifs illégaux</li><li>Contentieux administratif</li><li>Contraventions et sanctions administratives</li><li>Autorisations, licences et permis</li><li>Responsabilité des autorités publiques</li><li>Accès aux informations d\'intérêt public</li>',

      'sp.cons.title': 'Protection des Consommateurs',
      'sp.cons.desc':  'Nous défendons les droits des consommateurs face aux commerçants, prestataires de services et producteurs. Nous maîtrisons en détail la législation nationale et européenne sur la protection des consommateurs et garantissons un travail de qualité dans ce domaine.',
      'sp.cons.list':  '<li>Litiges avec commerçants et prestataires de services</li><li>Recouvrement de préjudices pour produits défectueux</li><li>Contestation de clauses contractuelles abusives</li><li>Représentation devant les autorités</li><li>Fraudes en ligne et commerce électronique</li><li>Garanties et retours non honorés</li>',

      'sp.imob.title': 'Immobilier et Propriété',
      'sp.imob.desc':  'Nous identifions les risques juridiques dans les transactions immobilières et protégeons les droits de propriété dans des litiges complexes. Du due diligence à l\'enregistrement, nous sommes à vos côtés à chaque étape.',
      'sp.imob.list':  '<li>Contrats de vente et d\'achat immobiliers</li><li>Due diligence juridique immobilier</li><li>Litiges relatifs aux droits de propriété</li><li>Successions, héritages et partages</li><li>Contrats de bail et de location</li><li>Expropriation et recours contre les décisions</li>',

      'sp.autor.title': 'Droit d\'Auteur',
      'sp.autor.desc':  'Nous assurons la protection des œuvres et des créations intellectuelles — de l\'enregistrement et de la gestion des droits à la lutte contre l\'utilisation non autorisée. Nous assistons auteurs, artistes, développeurs et entreprises dans la valorisation et la défense de la propriété intellectuelle.',
      'sp.autor.list':  '<li>Protection des œuvres littéraires, artistiques et scientifiques</li><li>Contrats de cession et de licence de droits</li><li>Droits voisins et gestion collective</li><li>Lutte contre le plagiat et la piraterie</li><li>Protection des logiciels et des contenus numériques</li><li>Litiges en matière de violation des droits d\'auteur et des droits voisins</li>',

      'sp.cedo.title': 'Requêtes à la CEDH',
      'sp.cedo.desc':  'Nous préparons et déposons des requêtes auprès de la Cour Européenne des Droits de l\'Homme lorsque des droits et libertés fondamentaux ont été violés et que les voies de recours internes ont été épuisées. Nous rédigeons des requêtes conformes aux exigences strictes de la CEDH et assurons la représentation tout au long de la procédure.',
      'sp.cedo.list':  '<li>Évaluation de la recevabilité de la requête à la CEDH</li><li>Épuisement des voies de recours internes</li><li>Rédaction et dépôt de la requête (formulaire officiel)</li><li>Représentation dans la procédure devant la CEDH</li><li>Exécution des arrêts de la CEDH au niveau national</li>',

      'why.tag':    'Pourquoi BuNPartener',
      'why.heading':'Bu<span class="logo-n">N</span>Partener — l\'équipe juridique en laquelle vous pouvez avoir <span class="ab">confiance</span>',
      'why.lead':   'Nous choisissons d\'être vos partenaires juridiques à long terme, pas seulement les conseillers d\'un seul dossier.',
      'why.f1t':    'Expérience éprouvée',
      'why.f1d':    'Avocats avec plus de 25 ans d\'expérience active dans la profession, impliqués dans des affaires dans différents pays et juridictions.',
      'why.f2t':    'Disponibilité 24/7',
      'why.f2d':    'Réactivité immédiate — bien que nous ayons des horaires définis, nous répondons quand notre Client en a besoin (24/7).',
      'why.f3t':    'Travail d\'équipe',
      'why.f3d':    'Toutes les affaires sont gérées en équipe, sur la base d\'une vision stratégique claire approuvée par le Client.',
      'why.quote':  '«Ce que tu es se verra dans ce que tu fais...»',
      'why.stat6':  'Clients satisfaits',

      'team.tag':    'Notre équipe',
      'team.heading':'Les avocats derrière <span class="aw">chaque dossier</span>',
      'team.hint':   'Cliquez sur n\'importe quel membre pour voir son CV',
      'team.row1':   'Avocats associés de Bu<span class="logo-n">N</span>Partener',
      'team.row2':   'Avocats collaborateurs de Bu<span class="logo-n">N</span>Partener',
      'team.prev':   'Précédent',
      'team.next':   'Suivant',

      'role_map': {
        'avocat-asociat':                               'avocat associé',
        'avocat-stagiar asociat':                       'avocat stagiaire',
        'avocat-coordonator':                           'avocat coordinateur',
        'avocat prin colaborare':                       'avocat collaborateur',
        'avocat-stagiar prin colaborare':               'avocat stagiaire collaborateur',
        'doctor în drept':                              'docteur en droit',
        'profesor universitar · doctor în drept':       'professeur · docteur en droit',
        'conferențiar universitar · doctor în drept':   'maître de conférences · docteur en droit',
        'conferențiar universitar · doctor habilitat în drept': 'maître de conférences · HDR en droit'
      },

      'cv.tag.asociat':   'Associé du cabinet',
      'cv.tag.colaborare':'Collaborateur externe',
      'cv.tag.other':     'Membre de l\'équipe',
      'cv.section.bio':   'Présentation',
      'cv.open':          'Ouvrir le CV',
      'cv.unavail':       'Membre introuvable',
      'cv.select':        'Sélectionnez un membre depuis la page de l\'équipe.',
      'cv.hint':          'Glissez à droite pour revenir',
      'cv.back':          'Retour à l\'équipe',

      'testi.tag':     'Avis clients',
      'testi.heading': 'Ce que disent <span class="ab">nos clients</span>',
      'testi.lead':    'La satisfaction de nos clients est notre plus grande récompense.',
      'testi.prev':    'Avis précédent',
      'testi.next':    'Avis suivant',

      'links.tag':     'Ressources',
      'links.heading': 'Liens <span class="ab">utiles</span>',
      'links.desc':    'Ressources officielles et bases de données juridiques nationales et internationales, utiles pour la recherche et la documentation.',
      'links.prev':    'Ressources précédentes',
      'links.next':    'Ressources suivantes',

      'news.tag':     'Actualités et Médias',
      'news.heading': 'Actualités',
      'news.lead':    'Informations/annonces et actualités des médias.',
      'news.prev':    'Article précédent',
      'news.next':    'Article suivant',
      'news.cta_map': {
        'Citește articolul': 'Lire l\'article',
        'Vezi postarea':     'Voir la publication',
        'Vizionează':        'Regarder'
      },

      'cont.tag':    'Contactez-nous',
      'cont.heading':'Parlons de<br>votre <span class="ab">affaire</span>',
      'cont.lead':   'Planifiez une consultation confidentielle.',
      'cont.addr':   'Adresse',
      'cont.phone':  'Téléphone',
      'cont.email':  'E-mail',
      'cont.sched':  'Horaires d\'ouverture',
      'cont.sched.v':'Lun – Ven: 09:00 – 18:00<br>Sam: 10:00 – 14:00',
      'cont.follow': 'Suivez-nous',
      'form.title':  'Demander une consultation',
      'form.sub':    'Planifiez un rendez-vous ou envoyez-nous un message.',
      'form.tab1':   'Planifier un rendez-vous',
      'form.tab2':   'Envoyer un message',
      'form.name.l': 'Nom complet',
      'form.name.p': 'Jean Dupont',
      'form.phone.l':'Téléphone',
      'form.email.l':'E-mail',
      'form.srv.l':  'Domaine juridique',
      'form.srv.opts':['Sélectionnez le domaine...','Droit des Sociétés','Droit Pénal','Droit de la Famille','Droit du Travail','Protection des Consommateurs','Droit Commercial','Immobilier et Propriété','Requêtes à la CEDH','Droit d\'Auteur','Droit Administratif','Autre'],
      'form.msg.l':  'Votre situation',
      'form.msg.p':  'Décrivez brièvement votre situation juridique...',
      'form.submit': 'Envoyer la demande',
      'form.privacy':'Vos données sont confidentielles et protégées conformément au RGPD.',

      'map.tag':     'Rendez-nous visite',
      'map.heading': 'Où nous <span class="aw">trouver</span>',
      'map.sched':   'Lun – Ven: 09:00 – 18:00 · Sam: 10:00 – 14:00',
      'map.btn':     'Ouvrir dans Google Maps',

      'ft.desc':     'Services juridiques professionnels à Chișinău, République de Moldova — partenaires de confiance pour toute situation juridique.',
      'ft.services': 'Services',
      'ft.contact':  'Contact',
      'ft.rights':   '© 2017–2026 Bu<span class="logo-n">N</span>Partener. Tous droits réservés.',
      'ft.name':     'Cabinet d\'avocats «Berliba și Partenerii» (Bu<span class="logo-n">N</span>Partener)',

      'ds.tag':      'Registre des dossiers',
      'ds.title':    'Dossiers <em>représentés</em>',
      'ds.sub':      'Sélection d\'affaires traitées par les avocats du cabinet, avec accès aux décisions et jugements publiés par les tribunaux.',
      'ds.filter.all':   'Tous',
      'ds.filter.cedo':  'CEDH',
      'ds.filter.csj':   'CSJ',
      'ds.filter.ca':    'Cours d\'appel',
      'ds.filter.jud':   'Tribunaux',

      'gal.tag':   'Galerie photo',
      'gal.title': 'Moments de l\'activité <em>du cabinet</em>',
      'gal.sub':   'Images de la vie professionnelle de l\'équipe BuNPartener — événements, distinctions et collaborations.',
    },

    /* ── ENGLISH ─────────────────────────────────────────────────────── */
    en: {
      'nav.about':     'About Us',
      'nav.services':  'Services',
      'nav.team':      'Team',
      'nav.news':      'News',
      'nav.resources': 'Resources',
      'nav.gallery':   'Gallery',
      'nav.cases':     'Cases',
      'nav.contact':   'Contact',
      'nav.cta':       'Request Consultation',
      'nav.back':      'Back to site',
      'nav.menu_open': 'Open menu',
      'nav.skip':      'Skip to content',

      'hero.quote':  'If there is a legal way to reach the desired result, rest assured we will find it!',
      'hero.btn1':   'Request Consultation',
      'hero.btn2':   'Practice Areas',
      'hero.badge':  'Law Firm · Chisinau, Moldova',
      'hero.stat1':  'Years of experience',
      'hero.stat2':  'Cases handled',
      'hero.stat3':  'Success rate',
      'hero.stat4':  'Practice areas',
      'hero.stat5':  'Partner jurisdictions',

      'about.tag':    'About the firm',
      'about.heading':'Built on <span class="ab">Integrity,</span><br>Driven by Justice',
      'about.founded':'Founded in<br>Chisinau',
      'about.lead':   'The partnership between lawyer and client is our top priority. BuNPartener lawyers have always been motivated and ready to positively shift mindsets and break stereotypes through legal action and results that matter.',
      'about.v1t':    'Absolute Integrity',
      'about.v1d':    'Genuine respect for our clients and adherence to the highest ethical standards of the legal profession.',
      'about.v2t':    'Guaranteed Promptness',
      'about.v2d':    'We strictly observe deadlines and provide fast legal responses. Every moment and every solution matters to us.',
      'about.v3t':    'Personalised Approach',
      'about.v3d':    'Each case is viewed individually and is unique. Our legal strategy is fully tailored to your situation.',
      'about.cta':    'Request a consultation',

      'srv.tag':     'Practice Areas',
      'srv.heading': 'Trusted <span class="aw">Expertise</span>',
      'srv.desc':    'Integrated legal services across all areas of law, with a results-oriented approach focused on protecting your interests.',
      'srv.cta':     'Request Consultation',
      'srv.hint':    'Scroll to see all areas',

      'tab.penal':   'Criminal Law',
      'tab.contrav': 'Administrative Offences',
      'tab.civil':   'Civil Law',
      'tab.fam':     'Family Law',
      'tab.munca':   'Employment Law',
      'tab.corp':    'Corporate Law / Insolvency',
      'tab.com':     'Commercial Law',
      'tab.admin':   'Administrative Law',
      'tab.cons':    'Consumer Protection',
      'tab.imob':    'Real Estate & Property',
      'tab.autor':   'Copyright Law',
      'tab.cedo':    'Applications to ECtHR',

      'pill.penal':   'Criminal',
      'pill.contrav': 'Offences',
      'pill.civil':   'Civil',
      'pill.fam':     'Family',
      'pill.munca':   'Employment',
      'pill.corp':    'Corporate',
      'pill.com':     'Commercial',
      'pill.admin':   'Administrative',
      'pill.cons':    'Consumer',
      'pill.imob':    'Property',
      'pill.autor':   'Copyright',
      'pill.cedo':    'ECtHR',

      'sp.penal.title': 'Criminal Law',
      'sp.penal.desc':  'We provide rigorous criminal defence at every stage of the proceedings — from detention and criminal investigation through trial and appeal (ordinary and extraordinary). We have deep knowledge of the Moldovan legal system and other jurisdictions and act decisively to protect our clients\' rights and legitimate interests.',
      'sp.penal.list':  '<li>Defence during criminal investigation</li><li>Representation before courts of first instance, appeal and cassation</li><li>Legal assistance for detained, remanded and convicted persons</li><li>Challenging unlawful procedural acts</li><li>Judicial rehabilitation, amnesty and pardon</li>',

      'sp.contrav.title': 'Administrative Offences',
      'sp.contrav.desc':  'We provide legal assistance in administrative offence cases at all stages of the proceedings. We represent individuals and legal entities and challenge unlawful offence reports.',
      'sp.contrav.list':  '<li>Challenging administrative offence reports</li><li>Representation before the authorised official</li><li>Administrative litigation in court</li><li>Nullity of offence records</li><li>Suspension of sanction enforcement</li><li>Recovery of damages caused by unlawful sanctions</li>',

      'sp.civil.title': 'Civil Law',
      'sp.civil.desc':  'We provide comprehensive legal assistance in civil matters — from recovering damages and enforcing contracts to defending personal and property rights before the courts.',
      'sp.civil.list':  '<li>Civil litigation and recovery of damages</li><li>Enforcement of court judgments</li><li>Protection of personal non-pecuniary rights</li><li>Civil contracts and obligations</li><li>Challenging void or voidable transactions</li><li>Representation before courts of first instance, appeal and cassation</li>',

      'sp.fam.title': 'Family Law',
      'sp.fam.desc':  'We handle family law matters with empathy and professionalism. Our team\'s priority is finding balanced solutions that protect the interests of all family members, particularly children.',
      'sp.fam.list':  '<li>Divorce proceedings</li><li>Child custody and visitation rights</li><li>Division of assets and marital property</li><li>Child support and enforcement</li><li>National and international adoption</li><li>Prenuptial agreements and marital contracts</li>',

      'sp.munca.title': 'Employment Law',
      'sp.munca.desc':  'We represent both employees and employers in all types of employment disputes. We draft clear contracts, manage dismissals and protect salary rights before courts and competent authorities.',
      'sp.munca.list':  '<li>Wrongful dismissal disputes</li><li>Drafting individual employment contracts</li><li>Collective conflicts and union negotiations</li><li>Recovery of unpaid wages and benefits</li><li>Workplace discrimination and harassment</li><li>Legal HR consulting for employers</li>',

      'sp.corp.title': 'Corporate Law / Insolvency',
      'sp.corp.desc':  'We offer comprehensive legal support to companies at every stage of their lifecycle — from incorporation and structuring to expansion, reorganisation or winding up. Our lawyers understand both the legal and commercial dimensions.',
      'sp.corp.list':  '<li>Registration and structuring of commercial entities</li><li>Commercial contracts and negotiations</li><li>Mergers, acquisitions and corporate reorganisations</li><li>Corporate governance and due diligence</li><li>Shareholder protection and internal disputes</li><li>Voluntary dissolution and insolvency</li>',

      'sp.com.title': 'Commercial Law',
      'sp.com.desc':  'We assist professionals and companies in all aspects of commercial activity — from contract negotiation and debt recovery to insolvency management and debt restructuring.',
      'sp.com.list':  '<li>Commercial debt recovery</li><li>Insolvency and bankruptcy proceedings</li><li>Commercial disputes between professionals</li><li>Distribution, agency and franchise agreements</li><li>National and international commercial arbitration</li><li>Debt restructuring and creditor negotiations</li>',

      'sp.admin.title': 'Administrative Law',
      'sp.admin.desc':  'Representation in dealings with public authorities and challenging unlawful administrative acts. From offences and permits to complex administrative court disputes, we defend your rights before the state.',
      'sp.admin.list':  '<li>Challenging unlawful administrative acts</li><li>Administrative court litigation</li><li>Administrative offences and sanctions</li><li>Authorisations, licences and permits</li><li>Public authority liability</li><li>Access to public information</li>',

      'sp.cons.title': 'Consumer Protection',
      'sp.cons.desc':  'We defend consumer rights against traders, service providers and manufacturers. We have detailed knowledge of national and European consumer protection legislation and deliver quality work in this field.',
      'sp.cons.list':  '<li>Disputes with traders and service providers</li><li>Recovery of damages for defective products</li><li>Challenging unfair contract terms</li><li>Representation before authorities</li><li>Online fraud and e-commerce</li><li>Unhonourred warranties and returns</li>',

      'sp.imob.title': 'Real Estate & Property',
      'sp.imob.desc':  'We identify legal risks in real estate transactions and protect property rights in complex disputes. From due diligence to registration, we are by your side at every step.',
      'sp.imob.list':  '<li>Property purchase and sale agreements</li><li>Real estate legal due diligence</li><li>Property rights disputes</li><li>Succession, inheritance and division</li><li>Lease and rental agreements</li><li>Expropriation and challenging decisions</li>',

      'sp.autor.title': 'Copyright Law',
      'sp.autor.desc':  'We handle the protection of works and intellectual creations — from registration and rights management to combating unauthorised use. We assist authors, artists, developers and companies in exploiting and defending intellectual property.',
      'sp.autor.list':  '<li>Protection of literary, artistic and scientific works</li><li>Assignment and licensing agreements</li><li>Related rights and collective management</li><li>Combating plagiarism and piracy</li><li>Protection of software and digital content</li><li>Litigation involving copyright and related rights infringement</li>',

      'sp.cedo.title': 'Applications to the ECtHR',
      'sp.cedo.desc':  'We prepare and submit applications to the European Court of Human Rights when fundamental rights and freedoms have been violated and domestic remedies have been exhausted. We draft applications that meet the ECtHR\'s strict requirements and provide representation throughout the proceedings.',
      'sp.cedo.list':  '<li>Assessing admissibility of the ECtHR application</li><li>Exhaustion of domestic remedies</li><li>Drafting and submitting the application (official form)</li><li>Representation in ECtHR proceedings</li><li>Enforcement of ECtHR judgments at national level</li>',

      'why.tag':    'Why BuNPartener',
      'why.heading':'Bu<span class="logo-n">N</span>Partener — the legal team you can <span class="ab">trust</span>',
      'why.lead':   'We choose to be your long-term legal partners, not just advisers for a single case.',
      'why.f1t':    'Proven Experience',
      'why.f1d':    'Lawyers with over 25 years of active experience in legal practice, involved in cases across different countries and jurisdictions.',
      'why.f2t':    '24/7 Availability',
      'why.f2d':    'Prompt response — although we have set office hours, we react whenever our Client needs us (24/7).',
      'why.f3t':    'Teamwork',
      'why.f3d':    'All cases are managed as a team, based on a clear strategic vision approved by the Client.',
      'why.quote':  '«Who you are will be seen in what you do...»',
      'why.stat6':  'Satisfied clients',

      'team.tag':    'Our Team',
      'team.heading':'The lawyers behind <span class="aw">every case</span>',
      'team.hint':   'Click on any member to view their CV',
      'team.row1':   'Associate Lawyers of Bu<span class="logo-n">N</span>Partener',
      'team.row2':   'Collaborating Lawyers of Bu<span class="logo-n">N</span>Partener',
      'team.prev':   'Previous',
      'team.next':   'Next',

      'role_map': {
        'avocat-asociat':                               'associate lawyer',
        'avocat-stagiar asociat':                       'trainee lawyer',
        'avocat-coordonator':                           'lead lawyer',
        'avocat prin colaborare':                       'collaborating lawyer',
        'avocat-stagiar prin colaborare':               'collaborating trainee lawyer',
        'doctor în drept':                              'PhD in Law',
        'profesor universitar · doctor în drept':       'professor · PhD in Law',
        'conferențiar universitar · doctor în drept':   'assoc. professor · PhD in Law',
        'conferențiar universitar · doctor habilitat în drept': 'assoc. professor · habilitated PhD'
      },

      /* cv page */
      'cv.tag.asociat':   'Firm partner',
      'cv.tag.colaborare':'Collaborating member',
      'cv.tag.other':     'Team member',
      'cv.section.bio':   'About',
      'cv.open':          'Open CV',
      'cv.unavail':       'Member not found',
      'cv.select':        'Select a team member from the team page.',
      'cv.hint':          'Swipe right to go back',
      'cv.back':          'Back to team',

      /* testimonials */
      'testi.tag':     'Client reviews',
      'testi.heading': 'What our <span class="ab">clients say</span>',
      'testi.lead':    'Client satisfaction is the greatest reward for our work.',
      'testi.prev':    'Previous review',
      'testi.next':    'Next review',

      'links.tag':     'Resources',
      'links.heading': 'Useful <span class="ab">links</span>',
      'links.desc':    'Official resources and national and international legal databases, useful for research and reference.',
      'links.prev':    'Previous resources',
      'links.next':    'Next resources',

      'news.tag':     'News & Media',
      'news.heading': 'News',
      'news.lead':    'Information/announcements and news from the media.',
      'news.prev':    'Previous article',
      'news.next':    'Next article',
      'news.cta_map': {
        'Citește articolul': 'Read article',
        'Vezi postarea':     'View post',
        'Vizionează':        'Watch'
      },

      'cont.tag':    'Contact Us',
      'cont.heading':'Let\'s discuss<br>your <span class="ab">case</span>',
      'cont.lead':   'Schedule a confidential consultation.',
      'cont.addr':   'Address',
      'cont.phone':  'Phone',
      'cont.email':  'Email',
      'cont.sched':  'Working Hours',
      'cont.sched.v':'Mon – Fri: 09:00 – 18:00<br>Sat: 10:00 – 14:00',
      'cont.follow': 'Follow Us',
      'form.title':  'Request a consultation',
      'form.sub':    'Schedule a meeting or send us a message.',
      'form.tab1':   'Schedule a meeting',
      'form.tab2':   'Send a message',
      'form.name.l': 'Full name',
      'form.name.p': 'John Smith',
      'form.phone.l':'Phone',
      'form.email.l':'Email',
      'form.srv.l':  'Legal area',
      'form.srv.opts':['Select area...','Corporate Law','Criminal Law','Family Law','Employment Law','Consumer Protection','Commercial Law','Real Estate & Property','Applications to ECtHR','Copyright Law','Administrative Law','Other'],
      'form.msg.l':  'Your situation',
      'form.msg.p':  'Briefly describe your legal situation...',
      'form.submit': 'Submit request',
      'form.privacy':'Your data is confidential and protected under GDPR.',

      'map.tag':     'Visit Us',
      'map.heading': 'Where to <span class="aw">find us</span>',
      'map.sched':   'Mon – Fri: 09:00 – 18:00 · Sat: 10:00 – 14:00',
      'map.btn':     'Open in Google Maps',

      'ft.desc':     'Professional legal services in Chisinau, Republic of Moldova — trusted partners for any legal situation.',
      'ft.services': 'Services',
      'ft.contact':  'Contact',
      'ft.rights':   '© 2017–2026 Bu<span class="logo-n">N</span>Partener. All rights reserved.',
      'ft.name':     'Law Firm "Berliba și Partenerii" (Bu<span class="logo-n">N</span>Partener)',

      'ds.tag':      'Firm cases',
      'ds.title':    'Cases from the firm\'s <em>practice</em>',
      'ds.sub':      'A selection of court judgments and decisions in which BuNPartener provided legal representation.',
      'ds.filter.all':   'All',
      'ds.filter.cedo':  'ECtHR',
      'ds.filter.csj':   'SCJ',
      'ds.filter.ca':    'Courts of Appeal',
      'ds.filter.jud':   'District courts',

      'gal.tag':   'Photo gallery',
      'gal.title': 'Moments from the firm\'s <em>activity</em>',
      'gal.sub':   'Images from BuNPartener\'s professional life — events, awards and collaborations.',
    }
  };

  /* ─── Apply language ───────────────────────────────────────────────── */
  function applyLang(lang) {
    if (!T[lang]) lang = 'ro';
    var t = T[lang];

    /* text nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k] !== undefined) el.textContent = t[k];
    });

    /* innerHTML nodes */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (t[k] !== undefined) el.innerHTML = t[k];
    });

    /* placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (t[k] !== undefined) el.placeholder = t[k];
    });

    /* select options */
    document.querySelectorAll('[data-i18n-select]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-select');
      var opts = t[k];
      if (!Array.isArray(opts)) return;
      el.innerHTML = opts.map(function (o, i) {
        return '<option value="' + (i === 0 ? '' : o) + '">' + o + '</option>';
      }).join('');
    });

    /* role / cred elements — translate via role_map without data attributes */
    var roleMap = t['role_map'] || {};
    document.querySelectorAll('.tslide-role, .tslide-cred').forEach(function (el) {
      if (!el.dataset.orig) el.dataset.orig = el.textContent.trim();
      el.textContent = roleMap[el.dataset.orig] || el.dataset.orig;
    });

    /* news card CTAs — translate text node, preserve SVG icon */
    var ctaMap = t['news.cta_map'] || {};
    document.querySelectorAll('.news-cta').forEach(function (el) {
      if (!el.dataset.orig) {
        var node = el.firstChild;
        el.dataset.orig = node && node.nodeType === 3 ? node.textContent.trim() : '';
      }
      if (el.dataset.orig && el.firstChild && el.firstChild.nodeType === 3) {
        el.firstChild.textContent = (ctaMap[el.dataset.orig] || el.dataset.orig) + ' ';
      }
    });

    /* service tabs + panels — identified by existing ids/data-tab attributes */
    var srvKeys = ['penal','contrav','civil','fam','munca','corp','com','admin','cons','imob','autor','cedo'];
    srvKeys.forEach(function (key) {
      /* tab button label */
      var tabLbl = document.querySelector('.srv-tab[data-tab="' + key + '"] .srv-tab-lbl');
      if (tabLbl && t['tab.' + key] !== undefined) tabLbl.textContent = t['tab.' + key];

      /* panel content */
      var panel = document.getElementById('tab-' + key);
      if (!panel) return;
      var pill  = panel.querySelector('.sp-pill');
      var title = panel.querySelector('.sp-title');
      var desc  = panel.querySelector('.sp-desc');
      var list  = panel.querySelector('.sp-list');
      var cta   = panel.querySelector('.sp-cta .btn-w');
      if (pill  && t['pill.' + key] !== undefined)       pill.textContent  = t['pill.' + key];
      if (title && t['sp.' + key + '.title'] !== undefined) title.textContent = t['sp.' + key + '.title'];
      if (desc  && t['sp.' + key + '.desc']  !== undefined) desc.textContent  = t['sp.' + key + '.desc'];
      if (list  && t['sp.' + key + '.list']  !== undefined) list.innerHTML    = t['sp.' + key + '.list'];
    });

    /* aria labels — generic data-i18n-aria-label + burger */
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria-label');
      if (t[k] !== undefined) el.setAttribute('aria-label', t[k]);
    });
    var burger = document.getElementById('burger');
    if (burger) burger.setAttribute('aria-label', t['nav.menu_open'] || '');

    /* lang switcher buttons */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem('bunp_lang', lang); } catch (e) {}
    window._lang = lang;

    if (typeof window._cvUpdate === 'function') window._cvUpdate(t);
  }

  /* ─── Per-language URL routing ─────────────────────────────────────────
     Each language lives at its own path for SEO: ro at the root, the rest
     under /en/, /ru/, /it/, /fr/. The switcher navigates between them. */
  var LANG_DIRS = { en: 1, ru: 1, it: 1, fr: 1 };

  function langUrl(l) {
    var parts = location.pathname.split('/').filter(Boolean);
    if (parts.length && LANG_DIRS[parts[0]]) parts.shift();      // drop current lang prefix
    var page = parts.length ? parts[parts.length - 1] : '';      // '' = index
    if (page === 'index.html') page = '';
    var base = (l === 'ro') ? '/' : '/' + l + '/';
    return base + page + location.search;
  }

  /* ─── Click handler ────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.lang-btn') : null;
    if (!btn) return;
    var l = btn.getAttribute('data-lang');
    if (!l) return;
    if (l === window._lang) return;            // already here
    window.location.href = langUrl(l);
  });

  /* ─── Init ─────────────────────────────────────────────────────────── */
  function init() {
    var lang = window.__PAGE_LANG__ ||
               (document.documentElement.getAttribute('lang') || 'ro').toLowerCase();
    if (!T[lang]) lang = 'ro';
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window._applyLang = applyLang;
})();
