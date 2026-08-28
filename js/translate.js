var englishSpeakingCountries = new Set([
    'AG', 'AU', 'BB', 'BS', 'BZ', 'BW', 'CA', 'DM', 'FJ', 'FM', 'GD', 'GH',
    'GM', 'GY', 'IE', 'IN', 'JM', 'KE', 'KI', 'KN', 'LC', 'LR', 'LS', 'MH',
    'MT', 'MU', 'MW', 'NA', 'NG', 'NR', 'NZ', 'PG', 'PH', 'PK', 'PW', 'SB',
    'SC', 'SG', 'SL', 'SZ', 'TO', 'TT', 'TV', 'TZ', 'UG', 'US', 'VC', 'VU',
    'WS', 'ZA', 'ZM', 'ZW', 'GB'
]);

window.addEventListener('load', () => {
    var params = new URLSearchParams(window.location.search);
    var requestedLang = params.get('lang');
    var storedLang = localStorage.getItem('lang');

    if (requestedLang) {
        localStorage.setItem('lang', requestedLang);
        translate();
        return;
    }

    if (storedLang) {
        translate();
        return;
    }

    detectLanguageByCountry().then((countryCode) => {
        if (countryCode && !englishSpeakingCountries.has(countryCode)) {
            var englishUrl = new URL(window.location.href);
            englishUrl.searchParams.set('lang', 'en');
            window.location.replace(englishUrl.toString());
            return;
        }

        translate();
    });
});

function detectLanguageByCountry() {
    var controller = new AbortController();
    var timeout = setTimeout(() => controller.abort(), 3000);

    return fetch('https://ipapi.co/json/', { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((data) => data && data.country_code ? data.country_code.toUpperCase() : null)
        .catch(() => null)
        .finally(() => clearTimeout(timeout));
}

function translate() {
    var langcode = localStorage.getItem('lang') || 'fr';
    if(langcode === 'fr') return;
    var langue = lang[langcode];
    if (!langue) {
        window.location.href = '/?lang=fr';
        return;
    }

    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach((element) => {
        var key = element.getAttribute('data-lang');
        if (langue[key]) {
            element.innerHTML = langue[key];
        } else {
            console.warn(`Translation key "${key}" not found for language "${langcode}".`);
        }
    })

    var hrefElements = document.querySelectorAll('[data-lang-href]');
    hrefElements.forEach((element) => {
        var key = element.getAttribute('data-lang-href');
        if (langue[key]) {
            element.setAttribute('href', langue[key]);
        }
    });
}