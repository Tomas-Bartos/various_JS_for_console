(function replaceTextStrings() {
    // Funkce pro escapování speciálních znaků v regulárních výrazech
    function escapeRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // Transtlation variables
    const tr_1 = '__salutation2||"" __,';
    const tr_2 = 'Akce';
    const tr_3 = 'Novinka';
    const tr_4 = 'Tip';
    const tr_5 = 'Detail';
    const tr_6 = 'Dobrý den';
    const tr_7 = 'Otevřít v prohlížeči';
    const tr_8 = 'Do obchodu';
    const tr_9 = 'Do košíku';
    const tr_10 = 'Do košíku';
    const tr_11 = 'Sledujte nás na sociálních sítích';
    const tr_12 = 'Rychlý kontakt';
    const tr_13 = 'Tento e-mail je obchodní sdělení společnosti';
    const tr_14 = 'Nepřejete li si nadále dostávat podobné e-maily';
    const tr_15 = 'zde je link pro odhlášení';
    const tr_16 = 'E-mail byl spolehlivě doručen přes';
    const tr_17 = 'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.';
    const tr_18 = 'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.';
    const tr_19 = 'Napište nám kdykoliv';
    const tr_20 = 'Kontaktujte nás';
    const tr_21 = 'odhlásit odběr';
    const tr_22 = 'INFOLINKA';
    const tr_23 = 'Sleva';
    const tr_24 = 'Pro Vaše dotazy';
    const tr_25 = 'Zavolejte nám';
    const tr_26 = 'Pondělí';
    const tr_27 = 'Pátek';
    const tr_28 = 'Tento e-mail je obchodní sdělení';

    // Define translations for supported languages
    const languages = {
        'hr': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Akcija',
            [tr_3]: 'Novosti',
            [tr_4]: 'Preporuka',
            [tr_5]: 'Detalji',
            [tr_6]: 'Dobar dan',
            [tr_7]: 'Otvori u pregledniku',
            [tr_8]: 'U trgovinu',
            [tr_9]: 'U košaricu',
            [tr_10]: 'U košaricu',
            [tr_11]: 'Pratite nas na društvenim mrežama',
            [tr_12]: 'Brzi kontakt',
            [tr_13]: 'Ovaj e-mail je promotivna poruka tvrtke',
            [tr_14]: 'Ako više ne želite primati slične e-poruke',
            [tr_15]: 'ovdje je poveznica za odjavu',
            [tr_16]: 'E-mail je pouzdano isporučen putem',
            [tr_17]: 'odabrali smo nekoliko proizvoda koji bi vas mogli zanimati. Ako nismo pogodili, sigurni smo da ćete nešto pronaći u našoj e-trgovini.',
            [tr_18]: 'hvala vam na interesu za našu robu. Ako želite dovršiti kupnju, samo kliknite.',
            [tr_19]: 'Pišite nam u bilo kojem trenutku',
            [tr_20]: 'Kontaktirajte nas',
            [tr_21]: 'Odjava s liste',
            [tr_22]: 'INFO linija',
            [tr_23]: 'Popust',
            [tr_24]: 'Za vaša pitanja',
            [tr_25]: 'Nazovite nas',
            [tr_26]: 'Ponedjeljak',
            [tr_27]: 'Petak',
            [tr_28]: 'Ovaj e-mail je komercijalna poruka',
        },
        'hu': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Akció',
            [tr_3]: 'Újdonság',
            [tr_4]: 'Tipp',
            [tr_5]: 'Részletek',
            [tr_6]: 'Jó napot',
            [tr_7]: 'Megnyitás böngészőben',
            [tr_8]: 'A boltba',
            [tr_9]: 'Kosárba',
            [tr_10]: 'Kosárba',
            [tr_11]: 'Kövessen minket a közösségi médián',
            [tr_12]: 'Gyors kapcsolat',
            [tr_13]: 'Ez az e-mail a cégünk kereskedelmi üzenete',
            [tr_14]: 'Ha nem szeretne több hasonló e-mailt kapni',
            [tr_15]: 'itt található a leiratkozási link',
            [tr_16]: 'Az e-mail megbízhatóan kézbesítve lett a következőn keresztül:',
            [tr_17]: 'kiválasztottunk néhány terméket, amelyek érdekelhetik Önt. Ha nem találtunk el ízlését, webshopunkban biztosan talál megfelelőt.',
            [tr_18]: 'köszönjük érdeklődését termékeink iránt. A vásárlás befejezéséhez egyszerűen kattintson.',
            [tr_19]: 'Írjon nekünk bármikor',
            [tr_20]: 'Lépjen kapcsolatba velünk',
            [tr_21]: 'Leiratkozás',
            [tr_22]: 'INFOVONAL',
            [tr_23]: 'Kedvezmény',
            [tr_24]: 'Kérdéseivel kapcsolatban',
            [tr_25]: 'Hívjon minket',
            [tr_26]: 'Hétfő',
            [tr_27]: 'Péntek',
            [tr_28]: 'Ez az e-mail kereskedelmi célú közlés',
        },
        'ro': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Promoție',
            [tr_3]: 'Noutate',
            [tr_4]: 'Recomandare',
            [tr_5]: 'Detalii',
            [tr_6]: 'Bună ziua',
            [tr_7]: 'Deschide în browser',
            [tr_8]: 'La magazin',
            [tr_9]: 'În coș',
            [tr_10]: 'În coș',
            [tr_11]: 'Urmăriți-ne pe rețelele sociale',
            [tr_12]: 'Contact rapid',
            [tr_13]: 'Acest e-mail este o comunicare comercială a companiei',
            [tr_14]: 'Dacă nu doriți să mai primiți e-mailuri similare',
            [tr_15]: 'aici este linkul pentru dezabonare',
            [tr_16]: 'E-mailul a fost livrat cu succes prin',
            [tr_17]: 'am selectat câteva produse care v-ar putea interesa. Dacă nu v-am nimerit gusturile, veți găsi cu siguranță ceva în magazinul nostru online.',
            [tr_18]: 'vă mulțumim pentru interesul acordat produselor noastre. Pentru a finaliza comanda, este suficient să faceți clic.',
            [tr_19]: 'Scrieți-ne oricând',
            [tr_20]: 'Contactați-ne',
            [tr_21]: 'Dezabonare',
            [tr_22]: 'LINIA INFO',
            [tr_23]: 'Reducere',
            [tr_24]: 'Pentru întrebările dvs.',
            [tr_25]: 'Sunați-ne',
            [tr_26]: 'Luni',
            [tr_27]: 'Vineri',
            [tr_28]: 'Acest e-mail este un mesaj comercial',
        },
        'el': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Προσφορά',
            [tr_3]: 'Νέο',
            [tr_4]: 'Συμβουλή',
            [tr_5]: 'Λεπτομέρειες',
            [tr_6]: 'Καλημέρα',
            [tr_7]: 'Άνοιγμα στο πρόγραμμα περιήγησης',
            [tr_8]: 'Στο κατάστημα',
            [tr_9]: 'Στο καλάθι',
            [tr_10]: 'Στο καλάθι',
            [tr_11]: 'Ακολουθήστε μας στα κοινωνικά δίκτυα',
            [tr_12]: 'Γρήγορη επαφή',
            [tr_13]: 'Αυτό το email είναι εμπορική επικοινωνία της εταιρείας',
            [tr_14]: 'Αν δεν θέλετε να λαμβάνετε παρόμοια email στο μέλλον',
            [tr_15]: 'εδώ είναι ο σύνδεσμος για διαγραφή',
            [tr_16]: 'Το email παραδόθηκε με ασφάλεια μέσω',
            [tr_17]: 'επιλέξαμε μερικά προϊόντα που μπορεί να σας ενδιαφέρουν. Αν δεν πετύχαμε το γούστο σας, σίγουρα θα βρείτε κάτι στο ηλεκτρονικό μας κατάστημα.',
            [tr_18]: 'σας ευχαριστούμε για το ενδιαφέρον σας στα προϊόντα μας. Για να ολοκληρώσετε την αγορά, απλώς κάντε κλικ.',
            [tr_19]: 'Γράψτε μας οποιαδήποτε στιγμή',
            [tr_20]: 'Επικοινωνήστε μαζί μας',
            [tr_21]: 'Διαγραφή συνδρομής',
            [tr_22]: 'ΓΡΑΜΜΗ ΠΛΗΡΟΦΟΡΙΩΝ',
            [tr_23]: 'Έκπτωση',
            [tr_24]: 'Για τις ερωτήσεις σας',
            [tr_25]: 'Καλέστε μας',
            [tr_26]: 'Δευτέρα',
            [tr_27]: 'Παρασκευή',
            [tr_28]: 'Αυτό το email είναι εμπορικό μήνυμα',
        },
        'bg': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Промоция',
            [tr_3]: 'Ново',
            [tr_4]: 'Съвет',
            [tr_5]: 'Детайли',
            [tr_6]: 'Добър ден',
            [tr_7]: 'Отваряне в браузъра',
            [tr_8]: 'Към магазина',
            [tr_9]: 'В кошницата',
            [tr_10]: 'В кошницата',
            [tr_11]: 'Последвайте ни в социалните мрежи',
            [tr_12]: 'Бърз контакт',
            [tr_13]: 'Този имейл е търговско съобщение от компанията',
            [tr_14]: 'Ако не желаете да получавате подобни имейли',
            [tr_15]: 'ето линк за отписване',
            [tr_16]: 'Имейлът беше надеждно доставен чрез',
            [tr_17]: 'подбрахме няколко продукта, които биха могли да ви заинтересуват. Ако не сме уцелили, със сигурност ще намерите нещо в нашия онлайн магазин.',
            [tr_18]: 'благодарим ви за интереса към нашите стоки. За да завършите покупката, просто кликнете.',
            [tr_19]: 'Пишете ни по всяко време',
            [tr_20]: 'Свържете се с нас',
            [tr_21]: 'Отписване',
            [tr_22]: 'ИНФОЛИНИЯ',
            [tr_23]: 'Отстъпка',
            [tr_24]: 'За вашите въпроси',
            [tr_25]: 'Обадете ни се',
            [tr_26]: 'Понеделник',
            [tr_27]: 'Петък',
            [tr_28]: 'Този имейл е търговско съобщение',
        },
        'sl': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Akcija',
            [tr_3]: 'Novost',
            [tr_4]: 'Nasvet',
            [tr_5]: 'Podrobnosti',
            [tr_6]: 'Dober dan',
            [tr_7]: 'Odpri v brskalniku',
            [tr_8]: 'V trgovino',
            [tr_9]: 'V košarico',
            [tr_10]: 'V košarico',
            [tr_11]: 'Spremljajte nas na družbenih omrežjih',
            [tr_12]: 'Hiter stik',
            [tr_13]: 'To e-poštno sporočilo je poslovno sporočilo podjetja',
            [tr_14]: 'Če ne želite več prejemati podobnih e-sporočil',
            [tr_15]: 'tukaj je povezava za odjavo',
            [tr_16]: 'E-pošta je bila zanesljivo dostavljena prek',
            [tr_17]: 'izbrali smo nekaj izdelkov, ki bi vas lahko zanimali. Če nismo zadeli okusa, boste zagotovo našli kaj primernega v naši spletni trgovini.',
            [tr_18]: 'hvala za zanimanje za naše izdelke. Za zaključek nakupa preprosto kliknite.',
            [tr_19]: 'Pišite nam kadarkoli',
            [tr_20]: 'Kontaktirajte nas',
            [tr_21]: 'Odjava',
            [tr_22]: 'INFO LINIJA',
            [tr_23]: 'Popust',
            [tr_24]: 'Za vaša vprašanja',
            [tr_25]: 'Pokličite nas',
            [tr_26]: 'Ponedeljek',
            [tr_27]: 'Petek',
            [tr_28]: 'Ta e-pošta je poslovno sporočilo',
        },
        'de': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Aktion',
            [tr_3]: 'Neuheit',
            [tr_4]: 'Tipp',
            [tr_5]: 'Details',
            [tr_6]: 'Guten Tag',
            [tr_7]: 'Im Browser öffnen',
            [tr_8]: 'Zum Shop',
            [tr_9]: 'In den Warenkorb',
            [tr_10]: 'In den Warenkorb',
            [tr_11]: 'Folgen Sie uns in den sozialen Netzwerken',
            [tr_12]: 'Schneller Kontakt',
            [tr_13]: 'Diese E-Mail ist eine geschäftliche Mitteilung des Unternehmens',
            [tr_14]: 'Wenn Sie solche E-Mails nicht mehr erhalten möchten',
            [tr_15]: 'hier ist der Abmeldelink',
            [tr_16]: 'Die E-Mail wurde zuverlässig zugestellt über',
            [tr_17]: 'wir haben einige Produkte ausgewählt, die Sie interessieren könnten. Wenn wir Ihren Geschmack nicht getroffen haben, finden Sie bestimmt etwas in unserem Online-Shop.',
            [tr_18]: 'vielen Dank für Ihr Interesse an unseren Produkten. Um den Kauf abzuschließen, klicken Sie einfach.',
            [tr_19]: 'Schreiben Sie uns jederzeit',
            [tr_20]: 'Kontaktieren Sie uns',
            [tr_21]: 'Abmeldung',
            [tr_22]: 'INFOLINE',
            [tr_23]: 'Rabatt',
            [tr_24]: 'Für Ihre Fragen',
            [tr_25]: 'Rufen Sie uns an',
            [tr_26]: 'Montag',
            [tr_27]: 'Freitag',
            [tr_28]: 'Diese E-Mail ist eine Werbenachricht',
        },
        'sk': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Akcia',
            [tr_3]: 'Novinka',
            [tr_4]: 'Tip',
            [tr_5]: 'Detail',
            [tr_6]: 'Dobrý deň',
            [tr_7]: 'Otvoriť v prehliadači',
            [tr_8]: 'Do obchodu',
            [tr_9]: 'Do košíka',
            [tr_10]: 'Do košíka',
            [tr_11]: 'Sledujte nás na sociálnych sieťach',
            [tr_12]: 'Rýchly kontakt',
            [tr_13]: 'Tento e-mail je obchodné oznámenie spoločnosti',
            [tr_14]: 'Ak si neželáte naďalej dostávať podobné e-maily',
            [tr_15]: 'tu je odkaz na odhlásenie',
            [tr_16]: 'E-mail bol spoľahlivo doručený cez',
            [tr_17]:
                'vybrali sme niekoľko produktov, ktoré by vás mohli zaujať. Ak sme sa netrafili do vášho výberu, určite si vyberiete v našom e-shope.',
            [tr_18]:
                'ďakujeme za váš záujem o náš tovar. Ak chcete dokončiť nákup, stačí kliknúť.',
            [tr_19]: 'Napíšte nám kedykoľvek',
            [tr_20]: 'Kontaktujte nás',
            [tr_21]: 'Odhlásiť odber',
            [tr_22]: 'INFOLINKA',
            [tr_23]: 'Zľava',
            [tr_24]: 'Pre vaše otázky',
            [tr_25]: 'Zavolajte nám',
            [tr_26]: 'Pondelok',
            [tr_27]: 'Piatok',
            [tr_28]: 'Tento e-mail je obchodné oznámenie',
        },
        'pl': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Promocja',
            [tr_3]: 'Nowość',
            [tr_4]: 'Porada',
            [tr_5]: 'Szczegóły',
            [tr_6]: 'Dzień dobry',
            [tr_7]: 'Otwórz w przeglądarce',
            [tr_8]: 'Do sklepu',
            [tr_9]: 'Do koszyka',
            [tr_10]: 'Do koszyka',
            [tr_11]: 'Śledź nas w mediach społecznościowych',
            [tr_12]: 'Szybki kontakt',
            [tr_13]: 'Ten e-mail to komunikat handlowy firmy',
            [tr_14]: 'Jeśli nie chcesz już otrzymywać podobnych e-maili',
            [tr_15]: 'tutaj znajduje się link do wypisania się',
            [tr_16]: 'E-mail został niezawodnie dostarczony przez',
            [tr_17]: 'wybraliśmy kilka produktów, które mogą Cię zainteresować. Jeśli nie trafiliśmy w Twój gust, z pewnością znajdziesz coś w naszym sklepie internetowym.',
            [tr_18]: 'dziękujemy za zainteresowanie naszymi produktami. Aby dokończyć zakup, wystarczy kliknąć.',
            [tr_19]: 'Napisz do nas w każdej chwili',
            [tr_20]: 'Skontaktuj się z nami',
            [tr_21]: 'Wypisz się',
            [tr_22]: 'INFOLINIA',
            [tr_23]: 'Zniżka',
            [tr_24]: 'W razie pytań',
            [tr_25]: 'Zadzwoń do nas',
            [tr_26]: 'Poniedziałek',
            [tr_27]: 'Piątek',
            [tr_28]: 'Ten e-mail jest informacją handlową',
        },
        'it': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Promozione',
            [tr_3]: 'Novità',
            [tr_4]: 'Consiglio',
            [tr_5]: 'Dettagli',
            [tr_6]: 'Buongiorno',
            [tr_7]: 'Apri nel browser',
            [tr_8]: 'Vai al negozio',
            [tr_9]: 'Aggiungi al carrello',
            [tr_10]: 'Aggiungi al carrello',
            [tr_11]: 'Seguici sui social media',
            [tr_12]: 'Contatto rapido',
            [tr_13]: "Questa e-mail è una comunicazione commerciale dell'azienda",
            [tr_14]: 'Se non desideri più ricevere e-mail simili',
            [tr_15]: 'ecco il link per annullare l’iscrizione',
            [tr_16]: 'L’e-mail è stata consegnata con successo tramite',
            [tr_17]: 'abbiamo selezionato alcuni prodotti che potrebbero interessarti. Se non abbiamo indovinato i tuoi gusti, troverai sicuramente qualcosa nel nostro e-shop.',
            [tr_18]: 'grazie per il tuo interesse nei nostri prodotti. Per completare l’acquisto, ti basta fare clic.',
            [tr_19]: 'Scrivici in qualsiasi momento',
            [tr_20]: 'Contattaci',
            [tr_21]: 'Annulla iscrizione',
            [tr_22]: 'LINEA INFORMATIVA',
            [tr_23]: 'Sconto',
            [tr_24]: 'Per le tue domande',
            [tr_25]: 'Chiamaci',
            [tr_26]: 'Lunedì',
            [tr_27]: 'Venerdì',
            [tr_28]: 'Questa e-mail è una comunicazione commerciale',
        },
        'fr': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Promotion',
            [tr_3]: 'Nouveauté',
            [tr_4]: 'Conseil',
            [tr_5]: 'Détails',
            [tr_6]: 'Bonjour',
            [tr_7]: 'Ouvrir dans le navigateur',
            [tr_8]: 'Aller à la boutique',
            [tr_9]: 'Ajouter au panier',
            [tr_10]: 'Ajouter au panier',
            [tr_11]: 'Suivez-nous sur les réseaux sociaux',
            [tr_12]: 'Contact rapide',
            [tr_13]: "Cet e-mail est une communication commerciale de l'entreprise",
            [tr_14]: "Si vous ne souhaitez plus recevoir d'e-mails similaires",
            [tr_15]: "voici le lien pour se désabonner",
            [tr_16]: "L'e-mail a été livré avec succès via",
            [tr_17]: 'nous avons sélectionné quelques produits susceptibles de vous intéresser. Si nous n’avons pas trouvé ce qu’il vous faut, vous trouverez sûrement quelque chose sur notre boutique en ligne.',
            [tr_18]: 'merci de votre intérêt pour nos produits. Pour finaliser votre achat, il vous suffit de cliquer.',
            [tr_19]: 'Écrivez-nous à tout moment',
            [tr_20]: 'Contactez-nous',
            [tr_21]: 'Se désabonner',
            [tr_22]: 'LIGNE INFO',
            [tr_23]: 'Réduction',
            [tr_24]: 'Pour vos questions',
            [tr_25]: 'Appelez-nous',
            [tr_26]: 'Lundi',
            [tr_27]: 'Vendredi',
            [tr_28]: 'Cet e-mail est un message commercial',
        },
        'es': {
            [tr_1]: '__salutation2||""__,',
            [tr_2]: 'Promoción',
            [tr_3]: 'Novedad',
            [tr_4]: 'Consejo',
            [tr_5]: 'Detalles',
            [tr_6]: 'Buenos días',
            [tr_7]: 'Abrir en el navegador',
            [tr_8]: 'Ir a la tienda',
            [tr_9]: 'Añadir al carrito',
            [tr_10]: 'Añadir al carrito',
            [tr_11]: 'Síguenos en las redes sociales',
            [tr_12]: 'Contacto rápido',
            [tr_13]: 'Este correo electrónico es una comunicación comercial de la empresa',
            [tr_14]: 'Si no desea seguir recibiendo correos similares',
            [tr_15]: 'aquí está el enlace para darse de baja',
            [tr_16]: 'El correo fue entregado con éxito a través de',
            [tr_17]: 'hemos seleccionado algunos productos que podrían interesarle. Si no hemos acertado con su gusto, seguro que encuentra algo en nuestra tienda online.',
            [tr_18]: 'gracias por su interés en nuestros productos. Para finalizar la compra, simplemente haga clic.',
            [tr_19]: 'Escríbanos en cualquier momento',
            [tr_20]: 'Contáctenos',
            [tr_21]: 'Darse de baja',
            [tr_22]: 'LÍNEA DE INFORMACIÓN',
            [tr_23]: 'Descuento',
            [tr_24]: 'Para sus preguntas',
            [tr_25]: 'Llámenos',
            [tr_26]: 'Lunes',
            [tr_27]: 'Viernes',
            [tr_28]: 'Este correo electrónico es una comunicación comercial',
        },
    };

    // Prompt user for language code
    const langCode = prompt('Zadejte jazykový kód (např. hr, hu, ro, el, bg, sl, de, sk, pl, it, fr, es):').toLowerCase();

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

    // Function to replace text in text nodes, skipping certain tags
    function replaceTextInNode(node, translations, skipTags = ['SCRIPT', 'STYLE']) {
        if (node.nodeType === 3) { // Text node
            // Check if any ancestor is in skipTags
            let parent = node.parentElement;
            while (parent) {
                if (skipTags.includes(parent.tagName)) {
                    return 0; // Skip this node
                }
                parent = parent.parentElement;
            }
            // Proceed with replacement
            let text = node.nodeValue;
            let count = 0;
            for (const [original, replacement] of Object.entries(translations)) {
                const regex = new RegExp(escapeRegex(original), 'g');
                const matches = text.match(regex);
                if (matches) {
                    count += matches.length;
                    text = text.replace(regex, replacement);
                }
            }
            node.nodeValue = text;
            return count;
        } else if (node.nodeType === 1) { // Element node
            let totalCount = 0;
            node.childNodes.forEach(child => {
                totalCount += replaceTextInNode(child, translations, skipTags);
            });
            return totalCount;
        }
        return 0;
    }

    // Replace text in all text nodes within the container, skipping <script> and <style>
    const totalReplacements = replaceTextInNode(container, translations);

    // Log how many replacements were made
    console.log(`Jazyk: ${langCode.toUpperCase()}, počet nahrazených výrazů:`, totalReplacements);
})();

// for simple replacement
(function replaceTextStrings() {
    // Define strings to search and their replacements
    const translations = {
        [tr_2]: 'Promo',
        [tr_3]: 'New',
        [tr_4]: 'Recommendation',
        [tr_5]: 'Detalji',
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