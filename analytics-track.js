/* Lightweight first-party pageview tracker for bunpartener.md.
   No cookies, no third party — just an anonymous localStorage/sessionStorage
   id used to distinguish visits and visitors, written to our own Supabase table. */
(function () {
  try {
    // Skip logging for automated/headless browsers so dev/QA checks never pollute
    // real visitor stats. navigator.webdriver catches Selenium/Puppeteer/Playwright;
    // the UA check catches Electron-based automation tools that don't set it.
    if (navigator.webdriver) return;
    if (/Claude\/|Electron\//.test(navigator.userAgent)) return;

    var SUPA_URL = 'https://beuseulqtgtesavswxyy.supabase.co';
    var SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldXNldWxxdGd0ZXNhdnN3eHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNzM0MzYsImV4cCI6MjA5NzY0OTQzNn0.IV-pknNPnOyeRgZDi5sV413HHrPbqbtdPY_sxQ-HORc';

    function randId() {
      return 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
    }
    function getId(store, key) {
      try {
        var v = store.getItem(key);
        if (!v) { v = randId(); store.setItem(key, v); }
        return v;
      } catch (e) { return randId(); }
    }

    var visitorId = getId(window.localStorage, 'bp_visitor_id');
    var sessionId = getId(window.sessionStorage, 'bp_session_id');

    var langMatch = window.location.pathname.match(/^\/(en|ru|it|fr)\//);
    var lang = langMatch ? langMatch[1] : 'ro';

    function send() {
      fetch(SUPA_URL + '/rest/v1/bunpartener_pageviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPA_KEY,
          'Authorization': 'Bearer ' + SUPA_KEY
        },
        body: JSON.stringify({
          path: window.location.pathname,
          lang: lang,
          referrer: document.referrer ? document.referrer.slice(0, 300) : null,
          visitor_id: visitorId,
          session_id: sessionId,
          user_agent: navigator.userAgent
        }),
        keepalive: true
      }).catch(function () {});
    }

    if (document.readyState === 'complete') send();
    else window.addEventListener('load', send);
  } catch (e) { /* tracking must never break the page */ }
})();
