(function removeMicrosoftTranslatorAttributes() {
  const html = document.body.innerHTML;

  // Find all occurencies
  const matches = html.match(/\s*_(?:msthash|msttexthash|msthidden|istranslated)="\d+"/g);

  // If found count them and then delete
  if (matches) {
    const cleaned = html.replace(/\s*_(?:msthash|msttexthash|msthidden|istranslated)="\d+"/g, '');
    document.body.innerHTML = cleaned;
    console.log('Počet odstraněných atributů:', matches.length);
  } else {
    console.log('Nebyl nalezen žádný atribut ke smazání.');
  }
})();