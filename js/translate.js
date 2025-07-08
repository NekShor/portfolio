window.addEventListener('load', () => {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get('lang');
    if (lang) {
        localStorage.setItem('lang', lang);
    }
    translate();
});

function translate() {
    var langcode = localStorage.getItem('lang') || 'fr';
    if(langcode === 'fr') return;
    var langue = lang[langcode];
    if (!langue) {
        window.location.href = '/?lang=fr';
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
}