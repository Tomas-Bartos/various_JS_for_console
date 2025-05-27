(function replaceTextStrings() {
    // Define translations for supported languages
    const languages = {
        'hr': { // Croatian
            'Akce': 'Akcija',
            'Novinka': 'Novosti',
            'Tip': 'Preporuka',
            'Detail': 'Detalji',
        },
        'hu': { // Hungarian
            'Akce': 'Akció',
            'Novinka': 'Újdonság',
            'Tip': 'Tipp',
            'Detail': 'Részletek',
        },
        'ro': { // Romanian
            'Akce': 'Promoție',
            'Novinka': 'Noutate',
            'Tip': 'Recomandare',
            'Detail': 'Detalii',
        },
        'el': { // Greek
            'Akce': 'Προσφορά',
            'Novinka': 'Νέο',
            'Tip': 'Πρόταση',
            'Detail': 'Λεπτομέρειες',
        },
        'bg': { // Bulgarian
            'Akce': 'Промоция',
            'Novinka': 'Ново',
            'Tip': 'Препоръка',
            'Detail': 'Детайли',
        },
        'sl': { // Slovenian
            'Akce': 'Akcija',
            'Novinka': 'Novost',
            'Tip': 'Nasvet',
            'Detail': 'Podrobnosti',
        },
        'de': { // German
            'Akce': 'Aktion',
            'Novinka': 'Neuheit',
            'Tip': 'Tipp',
            'Detail': 'Details',
        },
        'sk': { // Slovak
            'Akce': 'Akcia',
            'Novinka': 'Novinka',
            'Tip': 'Tip',
            'Detail': 'Detail',
        },
        'pl': { // Polish
            'Akce': 'Promocja',
            'Novinka': 'Nowość',
            'Tip': 'Porada',
            'Detail': 'Szczegóły',
        },
        'it': { // Italian
            'Akce': 'Promozione',
            'Novinka': 'Novità',
            'Tip': 'Consiglio',
            'Detail': 'Dettagli',
        },
    };

    // Prompt user for language code
    const langCode = prompt('Zadejte jazykový kód (např. hr, hu, ro, el, bg, sl, de, sk, pl, it):').toLowerCase();

    // Check if the selected language exists
    if (!languages[langCode]) {
        console.log('Nepodporovaný jazykový kód:', langCode);
        return;
    }

    const translations = languages[langCode];

    // Get the target container element
    const container = document.querySelector('#incomaker_content_body');
    if (!container) {
        console.log('Element #incomaker_content_body not found.');
        return;
    }

    // Get the HTML content of the container
    let html = container.innerHTML;
    let count = 0;

    // Loop through each key and replace all matches
    for (const [original, replacement] of Object.entries(translations)) {
        const regex = new RegExp(original, 'g'); // Match all occurrences
        const matches = html.match(regex);
        if (matches) {
            count += matches.length;
            html = html.replace(regex, replacement);
        }
    }

    // Replace the container’s content with the updated HTML
    container.innerHTML = html;

    // Log how many replacements were made
    console.log(`Jazyk: ${langCode.toUpperCase()}, počet nahrazených výrazů:`, count);
})();