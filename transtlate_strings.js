(function replaceTextStrings() {
    // Define translations for supported languages
    const languages = {
        'hr': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Akcija',
            'Novinka': 'Novosti',
            'Tip': 'Preporuka',
            'Detail': 'Detalji',
            'Dobrý den': 'Dobar dan',
            'Otevřít v prohlížeči': 'Otvori u pregledniku',
            'Do obchodu': 'U trgovinu',
            'Do košíku': 'U košaricu',
            'Do košíku': 'U košaricu',
            'Sledujte nás na sociálních sítích': 'Pratite nas na društvenim mrežama',
            'Rychlý kontakt': 'Brzi kontakt',
            'Tento e-mail je obchodní sdělení společnosti': 'Ovaj e-mail je promotivna poruka tvrtke',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Ako više ne želite primati slične e-poruke',
            'zde je link pro odhlášení': 'ovdje je poveznica za odjavu',
            'E-mail byl spolehlivě doručen přes': 'E-mail je pouzdano isporučen putem',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'odabrali smo nekoliko proizvoda koji bi vas mogli zanimati. Ako nismo pogodili, sigurni smo da ćete nešto pronaći u našoj e-trgovini.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'hvala vam na interesu za našu robu. Ako želite dovršiti kupnju, samo kliknite.',
            'Napište nám kdykoliv': 'Pišite nam u bilo kojem trenutku',
            'Kontaktujte nás': 'Kontaktirajte nas',
            'odhlásit odběr': 'Odjava s liste',
            'INFOLINKA': 'INFO linija',
            'Sleva': 'Popust',
            'Pro Vaše dotazy': 'Za vaša pitanja',
            'Zavolejte nám': 'Nazovite nas',
            'Pondělí': 'Ponedjeljak',
            'Pátek': 'Petak',
        },
        'hu': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Akció',
            'Novinka': 'Újdonság',
            'Tip': 'Tipp',
            'Detail': 'Részletek',
            'Dobrý den': 'Jó napot',
            'Otevřít v prohlížeči': 'Megnyitás böngészőben',
            'Do obchodu': 'A boltba',
            'Do košíku': 'Kosárba',
            'Do košíku': 'Kosárba',
            'Sledujte nás na sociálních sítích': 'Kövessen minket a közösségi médián',
            'Rychlý kontakt': 'Gyors kapcsolat',
            'Tento e-mail je obchodní sdělení společnosti': 'Ez az e-mail a cégünk kereskedelmi üzenete',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Ha nem szeretne több hasonló e-mailt kapni',
            'zde je link pro odhlášení': 'itt található a leiratkozási link',
            'E-mail byl spolehlivě doručen přes': 'Az e-mail megbízhatóan kézbesítve lett a következőn keresztül:',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'kiválasztottunk néhány terméket, amelyek érdekelhetik Önt. Ha nem találtunk el ízlését, webshopunkban biztosan talál megfelelőt.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'köszönjük érdeklődését termékeink iránt. A vásárlás befejezéséhez egyszerűen kattintson.',
            'Napište nám kdykoliv': 'Írjon nekünk bármikor',
            'Kontaktujte nás': 'Lépjen kapcsolatba velünk',
            'odhlásit odběr': 'Leiratkozás',
            'INFOLINKA': 'INFOVONAL',
            'Sleva': 'Kedvezmény',
            'Pro Vaše dotazy': 'Kérdéseivel kapcsolatban',
            'Zavolejte nám': 'Hívjon minket',
            'Pondělí': 'Hétfő',
            'Pátek': 'Péntek',
        },
        'ro': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Promoție',
            'Novinka': 'Noutate',
            'Tip': 'Recomandare',
            'Detail': 'Detalii',
            'Dobrý den': 'Bună ziua',
            'Otevřít v prohlížeči': 'Deschide în browser',
            'Do obchodu': 'La magazin',
            'Do košíku': 'În coș',
            'Do košíku': 'În coș',
            'Sledujte nás na sociálních sítích': 'Urmăriți-ne pe rețelele sociale',
            'Rychlý kontakt': 'Contact rapid',
            'Tento e-mail je obchodní sdělení společnosti': 'Acest e-mail este o comunicare comercială a companiei',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Dacă nu doriți să mai primiți e-mailuri similare',
            'zde je link pro odhlášení': 'aici este linkul pentru dezabonare',
            'E-mail byl spolehlivě doručen přes': 'E-mailul a fost livrat cu succes prin',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'am selectat câteva produse care v-ar putea interesa. Dacă nu v-am nimerit gusturile, veți găsi cu siguranță ceva în magazinul nostru online.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'vă mulțumim pentru interesul acordat produselor noastre. Pentru a finaliza comanda, este suficient să faceți clic.',
            'Napište nám kdykoliv': 'Scrieți-ne oricând',
            'Kontaktujte nás': 'Contactați-ne',
            'odhlásit odběr': 'Dezabonare',
            'INFOLINKA': 'LINIA INFO',
            'Sleva': 'Reducere',
            'Pro Vaše dotazy': 'Pentru întrebările dvs.',
            'Zavolejte nám': 'Sunați-ne',
            'Pondělí': 'Luni',
            'Pátek': 'Vineri',
        },
        'el': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Προσφορά',
            'Novinka': 'Νέο',
            'Tip': 'Συμβουλή',
            'Detail': 'Λεπτομέρειες',
            'Dobrý den': 'Καλημέρα',
            'Otevřít v prohlížeči': 'Άνοιγμα στο πρόγραμμα περιήγησης',
            'Do obchodu': 'Στο κατάστημα',
            'Do košíku': 'Στο καλάθι',
            'Do košíku': 'Στο καλάθι',
            'Sledujte nás na sociálních sítích': 'Ακολουθήστε μας στα κοινωνικά δίκτυα',
            'Rychlý kontakt': 'Γρήγορη επαφή',
            'Tento e-mail je obchodní sdělení společnosti': 'Αυτό το email είναι εμπορική επικοινωνία της εταιρείας',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Αν δεν θέλετε να λαμβάνετε παρόμοια email στο μέλλον',
            'zde je link pro odhlášení': 'εδώ είναι ο σύνδεσμος για διαγραφή',
            'E-mail byl spolehlivě doručen přes': 'Το email παραδόθηκε με ασφάλεια μέσω',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'επιλέξαμε μερικά προϊόντα που μπορεί να σας ενδιαφέρουν. Αν δεν πετύχαμε το γούστο σας, σίγουρα θα βρείτε κάτι στο ηλεκτρονικό μας κατάστημα.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'σας ευχαριστούμε για το ενδιαφέρον σας στα προϊόντα μας. Για να ολοκληρώσετε την αγορά, απλώς κάντε κλικ.',
            'Napište nám kdykoliv': 'Γράψτε μας οποιαδήποτε στιγμή',
            'Kontaktujte nás': 'Επικοινωνήστε μαζί μας',
            'odhlásit odběr': 'Διαγραφή συνδρομής',
            'INFOLINKA': 'ΓΡΑΜΜΗ ΠΛΗΡΟΦΟΡΙΩΝ',
            'Sleva': 'Έκπτωση',
            'Pro Vaše dotazy': 'Για τις ερωτήσεις σας',
            'Zavolejte nám': 'Καλέστε μας',
            'Pondělí': 'Δευτέρα',
            'Pátek': 'Παρασκευή',
        },
        'bg': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Промоция',
            'Novinka': 'Ново',
            'Tip': 'Съвет',
            'Detail': 'Детайли',
            'Dobrý den': 'Добър ден',
            'Otevřít v prohlížeči': 'Отваряне в браузъра',
            'Do obchodu': 'Към магазина',
            'Do košíku': 'В кошницата',
            'Do košíku': 'В кошницата',
            'Sledujte nás na sociálních sítích': 'Последвайте ни в социалните мрежи',
            'Rychlý kontakt': 'Бърз контакт',
            'Tento e-mail je obchodní sdělení společnosti': 'Този имейл е търговско съобщение от компанията',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Ако не желаете да получавате подобни имейли',
            'zde je link pro odhlášení': 'ето линк за отписване',
            'E-mail byl spolehlivě doručen přes': 'Имейлът беше надеждно доставен чрез',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'подбрахме няколко продукта, които биха могли да ви заинтересуват. Ако не сме уцелили, със сигурност ще намерите нещо в нашия онлайн магазин.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'благодарим ви за интереса към нашите стоки. За да завършите покупката, просто кликнете.',
            'Napište nám kdykoliv': 'Пишете ни по всяко време',
            'Kontaktujte nás': 'Свържете се с нас',
            'odhlásit odběr': 'Отписване',
            'INFOLINKA': 'ИНФОЛИНИЯ',
            'Sleva': 'Отстъпка',
            'Pro Vaše dotazy': 'За вашите въпроси',
            'Zavolejte nám': 'Обадете ни се',
            'Pondělí': 'Понеделник',
            'Pátek': 'Петък',
        },
        'sl': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Akcija',
            'Novinka': 'Novost',
            'Tip': 'Nasvet',
            'Detail': 'Podrobnosti',
            'Dobrý den': 'Dober dan',
            'Otevřít v prohlížeči': 'Odpri v brskalniku',
            'Do obchodu': 'V trgovino',
            'Do košíku': 'V košarico',
            'Do košíku': 'V košarico',
            'Sledujte nás na sociálních sítích': 'Spremljajte nas na družbenih omrežjih',
            'Rychlý kontakt': 'Hiter stik',
            'Tento e-mail je obchodní sdělení společnosti': 'To e-poštno sporočilo je poslovno sporočilo podjetja',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Če ne želite več prejemati podobnih e-sporočil',
            'zde je link pro odhlášení': 'tukaj je povezava za odjavo',
            'E-mail byl spolehlivě doručen přes': 'E-pošta je bila zanesljivo dostavljena prek',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'izbrali smo nekaj izdelkov, ki bi vas lahko zanimali. Če nismo zadeli okusa, boste zagotovo našli kaj primernega v naši spletni trgovini.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'hvala za zanimanje za naše izdelke. Za zaključek nakupa preprosto kliknite.',
            'Napište nám kdykoliv': 'Pišite nam kadarkoli',
            'Kontaktujte nás': 'Kontaktirajte nas',
            'odhlásit odběr': 'Odjava',
            'INFOLINKA': 'INFO LINIJA',
            'Sleva': 'Popust',
            'Pro Vaše dotazy': 'Za vaša vprašanja',
            'Zavolejte nám': 'Pokličite nas',
            'Pondělí': 'Ponedeljek',
            'Pátek': 'Petek',
        },
        'de': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Aktion',
            'Novinka': 'Neuheit',
            'Tip': 'Tipp',
            'Detail': 'Details',
            'Dobrý den': 'Guten Tag',
            'Otevřít v prohlížeči': 'Im Browser öffnen',
            'Do obchodu': 'Zum Shop',
            'Do košíku': 'In den Warenkorb',
            'Do košíku': 'In den Warenkorb',
            'Sledujte nás na sociálních sítích': 'Folgen Sie uns in den sozialen Netzwerken',
            'Rychlý kontakt': 'Schneller Kontakt',
            'Tento e-mail je obchodní sdělení společnosti': 'Diese E-Mail ist eine geschäftliche Mitteilung des Unternehmens',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Wenn Sie solche E-Mails nicht mehr erhalten möchten',
            'zde je link pro odhlášení': 'hier ist der Abmeldelink',
            'E-mail byl spolehlivě doručen přes': 'Die E-Mail wurde zuverlässig zugestellt über',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'wir haben einige Produkte ausgewählt, die Sie interessieren könnten. Wenn wir Ihren Geschmack nicht getroffen haben, finden Sie bestimmt etwas in unserem Online-Shop.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'vielen Dank für Ihr Interesse an unseren Produkten. Um den Kauf abzuschließen, klicken Sie einfach.',
            'Napište nám kdykoliv': 'Schreiben Sie uns jederzeit',
            'Kontaktujte nás': 'Kontaktieren Sie uns',
            'odhlásit odběr': 'Abmeldung',
            'INFOLINKA': 'INFOLINE',
            'Sleva': 'Rabatt',
            'Pro Vaše dotazy': 'Für Ihre Fragen',
            'Zavolejte nám': 'Rufen Sie uns an',
            'Pondělí': 'Montag',
            'Pátek': 'Freitag',
        },
        'sk': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Akcia',
            'Novinka': 'Novinka',
            'Tip': 'Tip',
            'Detail': 'Detail',
            'Dobrý den': 'Dobrý deň',
            'Otevřít v prohlížeči': 'Otvoriť v prehliadači',
            'Do obchodu': 'Do obchodu',
            'Do košíku': 'Do košíka',
            'Do košíku': 'Do košíka',
            'Sledujte nás na sociálních sítích': 'Sledujte nás na sociálnych sieťach',
            'Rychlý kontakt': 'Rýchly kontakt',
            'Tento e-mail je obchodní sdělení společnosti': 'Tento e-mail je obchodné oznámenie spoločnosti',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Ak si neželáte naďalej dostávať podobné e-maily',
            'zde je link pro odhlášení': 'tu je odkaz na odhlásenie',
            'E-mail byl spolehlivě doručen přes': 'E-mail bol spoľahlivo doručený cez',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.':
                'vybrali sme niekoľko produktov, ktoré by vás mohli zaujať. Ak sme sa netrafili do vášho výberu, určite si vyberiete v našom e-shope.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.':
                'ďakujeme za váš záujem o náš tovar. Ak chcete dokončiť nákup, stačí kliknúť.',
            'Napište nám kdykoliv': 'Napíšte nám kedykoľvek',
            'Kontaktujte nás': 'Kontaktujte nás',
            'odhlásit odběr': 'Odhlásiť odber',
            'INFOLINKA': 'INFOLINKA',
            'Sleva': 'Zľava',
            'Pro Vaše dotazy': 'Pre vaše otázky',
            'Zavolejte nám': 'Zavolajte nám',
            'Pondělí': 'Pondelok',
            'Pátek': 'Piatok',
        },
        'pl': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Promocja',
            'Novinka': 'Nowość',
            'Tip': 'Porada',
            'Detail': 'Szczegóły',
            'Dobrý den': 'Dzień dobry',
            'Otevřít v prohlížeči': 'Otwórz w przeglądarce',
            'Do obchodu': 'Do sklepu',
            'Do košíku': 'Do koszyka',
            'Do košíku': 'Do koszyka',
            'Sledujte nás na sociálních sítích': 'Śledź nas w mediach społecznościowych',
            'Rychlý kontakt': 'Szybki kontakt',
            'Tento e-mail je obchodní sdělení společnosti': 'Ten e-mail to komunikat handlowy firmy',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Jeśli nie chcesz już otrzymywać podobnych e-maili',
            'zde je link pro odhlášení': 'tutaj znajduje się link do wypisania się',
            'E-mail byl spolehlivě doručen přes': 'E-mail został niezawodnie dostarczony przez',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'wybraliśmy kilka produktów, które mogą Cię zainteresować. Jeśli nie trafiliśmy w Twój gust, z pewnością znajdziesz coś w naszym sklepie internetowym.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'dziękujemy za zainteresowanie naszymi produktami. Aby dokończyć zakup, wystarczy kliknąć.',
            'Napište nám kdykoliv': 'Napisz do nas w każdej chwili',
            'Kontaktujte nás': 'Skontaktuj się z nami',
            'odhlásit odběr': 'Wypisz się',
            'INFOLINKA': 'INFOLINIA',
            'Sleva': 'Zniżka',
            'Pro Vaše dotazy': 'W razie pytań',
            'Zavolejte nám': 'Zadzwoń do nas',
            'Pondělí': 'Poniedziałek',
            'Pátek': 'Piątek',
        },
        'it': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Promozione',
            'Novinka': 'Novità',
            'Tip': 'Consiglio',
            'Detail': 'Dettagli',
            'Dobrý den': 'Buongiorno',
            'Otevřít v prohlížeči': 'Apri nel browser',
            'Do obchodu': 'Vai al negozio',
            'Do košíku': 'Aggiungi al carrello',
            'Do košíku': 'Aggiungi al carrello',
            'Sledujte nás na sociálních sítích': 'Seguici sui social media',
            'Rychlý kontakt': 'Contatto rapido',
            'Tento e-mail je obchodní sdělení společnosti': "Questa e-mail è una comunicazione commerciale dell'azienda",
            'Nepřejete li si nadále dostávat podobné e-maily': 'Se non desideri più ricevere e-mail simili',
            'zde je link pro odhlášení': 'ecco il link per annullare l’iscrizione',
            'E-mail byl spolehlivě doručen přes': 'L’e-mail è stata consegnata con successo tramite',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'abbiamo selezionato alcuni prodotti che potrebbero interessarti. Se non abbiamo indovinato i tuoi gusti, troverai sicuramente qualcosa nel nostro e-shop.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'grazie per il tuo interesse nei nostri prodotti. Per completare l’acquisto, ti basta fare clic.',
            'Napište nám kdykoliv': 'Scrivici in qualsiasi momento',
            'Kontaktujte nás': 'Contattaci',
            'odhlásit odběr': 'Annulla iscrizione',
            'INFOLINKA': 'LINEA INFORMATIVA',
            'Sleva': 'Sconto',
            'Pro Vaše dotazy': 'Per le tue domande',
            'Zavolejte nám': 'Chiamaci',
            'Pondělí': 'Lunedì',
            'Pátek': 'Venerdì',
        },
        'fr': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Promotion',
            'Novinka': 'Nouveauté',
            'Tip': 'Conseil',
            'Detail': 'Détails',
            'Dobrý den': 'Bonjour',
            'Otevřít v prohlížeči': 'Ouvrir dans le navigateur',
            'Do obchodu': 'Aller à la boutique',
            'Do košíku': 'Ajouter au panier',
            'Do košíku': 'Ajouter au panier',
            'Sledujte nás na sociálních sítích': 'Suivez-nous sur les réseaux sociaux',
            'Rychlý kontakt': 'Contact rapide',
            'Tento e-mail je obchodní sdělení společnosti': "Cet e-mail est une communication commerciale de l'entreprise",
            'Nepřejete li si nadále dostávat podobné e-maily': "Si vous ne souhaitez plus recevoir d'e-mails similaires",
            'zde je link pro odhlášení': "voici le lien pour se désabonner",
            'E-mail byl spolehlivě doručen přes': "L'e-mail a été livré avec succès via",
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'nous avons sélectionné quelques produits susceptibles de vous intéresser. Si nous n’avons pas trouvé ce qu’il vous faut, vous trouverez sûrement quelque chose sur notre boutique en ligne.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'merci de votre intérêt pour nos produits. Pour finaliser votre achat, il vous suffit de cliquer.',
            'Napište nám kdykoliv': 'Écrivez-nous à tout moment',
            'Kontaktujte nás': 'Contactez-nous',
            'odhlásit odběr': 'Se désabonner',
            'INFOLINKA': 'LIGNE INFO',
            'Sleva': 'Réduction',
            'Pro Vaše dotazy': 'Pour vos questions',
            'Zavolejte nám': 'Appelez-nous',
            'Pondělí': 'Lundi',
            'Pátek': 'Vendredi',
        },
        'es': {
            '__salutation2||"" __,': '__salutation2||""__,',
            'Akce': 'Promoción',
            'Novinka': 'Novedad',
            'Tip': 'Consejo',
            'Detail': 'Detalles',
            'Dobrý den': 'Buenos días',
            'Otevřít v prohlížeči': 'Abrir en el navegador',
            'Do obchodu': 'Ir a la tienda',
            'Do košíku': 'Añadir al carrito',
            'Do košíku': 'Añadir al carrito',
            'Sledujte nás na sociálních sítích': 'Síguenos en las redes sociales',
            'Rychlý kontakt': 'Contacto rápido',
            'Tento e-mail je obchodní sdělení společnosti': 'Este correo electrónico es una comunicación comercial de la empresa',
            'Nepřejete li si nadále dostávat podobné e-maily': 'Si no desea seguir recibiendo correos similares',
            'zde je link pro odhlášení': 'aquí está el enlace para darse de baja',
            'E-mail byl spolehlivě doručen přes': 'El correo fue entregado con éxito a través de',
            'vybrali jsme několik produktů, které by Vás mohly zaujmout. Pokud jsme se s výběrem netrefili, na našem e-shopu si jistě vyberete.': 'hemos seleccionado algunos productos que podrían interesarle. Si no hemos acertado con su gusto, seguro que encuentra algo en nuestra tienda online.',
            'děkujeme za zájem o naše zboží. Pokud budete chtít nákup dokončit, stačí jen kliknout.': 'gracias por su interés en nuestros productos. Para finalizar la compra, simplemente haga clic.',
            'Napište nám kdykoliv': 'Escríbanos en cualquier momento',
            'Kontaktujte nás': 'Contáctenos',
            'odhlásit odběr': 'Darse de baja',
            'INFOLINKA': 'LÍNEA DE INFORMACIÓN',
            'Sleva': 'Descuento',
            'Pro Vaše dotazy': 'Para sus preguntas',
            'Zavolejte nám': 'Llámenos',
            'Pondělí': 'Lunes',
            'Pátek': 'Viernes',
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

    // Function to replace text in text nodes
    function replaceTextInNode(node, translations) {
        if (node.nodeType === 3) { // Text node
            let text = node.nodeValue;
            let count = 0;
            for (const [original, replacement] of Object.entries(translations)) {
                const regex = new RegExp(original, 'g');
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
                totalCount += replaceTextInNode(child, translations);
            });
            return totalCount;
        }
        return 0;
    }

    // Replace text in all text nodes within the container
    const totalReplacements = replaceTextInNode(container, translations);

    // Log how many replacements were made
    console.log(`Jazyk: ${langCode.toUpperCase()}, počet nahrazených výrazů:`, totalReplacements);
})();

// for simple replacement
(function replaceTextStrings() {
    // Define strings to search and their replacements
    const translations = {
        'Akce': 'Promo',
        'Novinka': 'New',
        'Tip': 'Recommendation',
        'Detail': 'Detalji',
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