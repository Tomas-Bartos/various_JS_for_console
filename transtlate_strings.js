(function replaceTextStrings() {
    // Define strings to search and their replacements, uncoment desired language

    // Czech to Croatian
    // const translations = {
    //     'Akce': 'Akcija',
    //     'Novinka': 'Novosti',
    //     'Tip': 'Preporuka',
    //     'Detail': 'Detalji',
    // };

    // Czech to Hungarian
    // const translations = {
    //     'Akce': 'Akció',
    //     'Novinka': 'Újdonság',
    //     'Tip': 'Tipp',
    //     'Detail': 'Részletek',
    // };

    // Czech to Romanian
    const translations = {
        'Akce': 'Promoție',
        'Novinka': 'Noutate',
        'Tip': 'Recomandare',
        'Detail': 'Detalii',
    };



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
    console.log('Total replacements:', count);
})();