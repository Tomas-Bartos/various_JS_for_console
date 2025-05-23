// This function finds and remove all strings created by automatic transtlation by Edge browser.
// 1. Transtlate your HTML file in new window of Edge browser. 
// 2. Then run the script in the console
// 3. Copy and use transtlated HTML

(function removeMicrosoftTranslatorAttributes() {
  const html = document.body.innerHTML;

  // Find all occurencies of _msthash="103"; _msttexthash="94913"; _msthidden="3", all numbers in the "" are counted for
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