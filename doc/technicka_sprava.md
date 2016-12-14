# MP3 přehrávač s databází skladeb
### Projekt ITU, 2016Z
* Číslo projektu: 65
* Číslo a názov týmu: 62. Tým xkiral01
* Autor: Jakub Kulich (xkulic03)
* Ďalší členovia týmu: Ján Demčák (xdemca01), Adrián Király (xkiral01)
* Termín riešenia: 19. 9. - 19. 12. 2016

### Abstrakt

Cieľom tohto školského projektu je vytvoriť MP3 prehrávač kde sa bude brať ohľad hlavne na kvalitu užívateľského rozhrania.

### Cieľové požiadavky na aplikáciu a jej rozhranie

Hlavným cieľom užívateľského rozhrania je jednoduchosť  a pohodlie 
používania aplikácie. Aplikácia by mala slúžiť viacerým skupinám ľudí - chceli by sme sa zamerať na to aby bola aplikácia vhodná pre náročnejších užívateľov ktorí majú obsiahlu hudobnú zbierku a zároveň aj pre menej náročných užívateľov, ktorí od hudobného prehrávača neočakávajú nič okrem jednoduchého prehrania skladieb. Pridaná hodnota aplikácie by mala byť čistota a jednoduchosť užívateľského rozhrania a zároveň funkčnosť aplikácie. Spokojného užívateľa aplikácie spoznáme tak, že rád používa danú aplikáciu, používanie aplikácie mu nekazí náladu a nemá potrebu hľadať alternatívu danej aplikácie.

### Štúdium cieľovej skupiny a prípady použitia

Aplikácia je zameraná na skupinu náročnejších poslucháčov hudby ktorí preferujú offline hudobnú zbierku a neradi počúvaju hudbu zo služieb ako je YouTube, poprípade zo streamovacích služieb ako je Spotify, Google Music, atď.

Hudobný prehrávač je typ aplikácie ktorá je používaná neustále - väčšina ľudí ma pustenú hudbu pri práci, pri prehliadaní webu, atď. Interakcia užívateľa by mala prebiehať hlavne s pomocou myši nakoľko len malá skupina ľudí je ochotná učiť sa klávesové skratky pre rôzne aplikácie, ktoré používajú. Interakcia však bude možná aj s pomocou klávesnice - bude možné nastaviť klávesové skratky pre náročnejších užívateľov. Aplikácia by mala tiež podporovať ovládanie cez multimediálne klávesy. Z dôvodu použitia myši ako hlavného ovládacieho prvku je potrebné aby všetky dôležité ovládacie prvky boli ľahko dostupné a zároveň aby prostredie nepôsobilo na užívateľa rušivo a mätúco. V aplikácií by sme sa chceli vyhnúť pridávaniu funkcií ako je napr. správa hudobnej knižnice keďže existujú aplikácie zamerané priamo na túto činnosť a v našej aplikácií by to mohlo narušiť zámer aby vyzerala jednoducho. 

### Existujúce riešenia

Osobnú skúsenosť mám len s 3 prehrávačmi a to sú:

* Clementine
* Lollypop
* Gnome Music

#### Clementine
![](/home/jakub/fit/itu/sprava/clementine.png) 

Clementine je môj obľúbený prehrávač zo spomenutej trojice prehrávačov a to z niekoľkých dôvodov. Prehliadanie hudobnej zbierky je prepracované - podporuje aj rozdelenie podľa žánrov. Pri prehliadaní zbierky mi chýba rozdelenie albumu ak je album rozdelený na viac diskov. Ďalšia super funkcia je zobrazenie informácií o skladbe, interpretovi a text skladby. Čo mi na prehrávači je snaha autorov integrovať rôzne online služby a internetové rádia ktoré značne uberajú jednoduchosti prehrávača a môj osobný názor je že máloktorá z týchto služieb je používana užívateľmi, keďže väčšina z nich má vlastnú aplikáciu ktorá zväčša funguje lepšie. Estetika rozhrania je tiež jedna z vecí ktorou sa nie je možné chváliť. 

#### Lollypop
![](/home/jakub/fit/itu/sprava/lollypop.png) 

Lollypop je prehrávač ktorý vyzerá jednoducho a čisto, ale na úkor použiteľnosti. Prehliadanie hudobnej zbierky je taktiež prepracované a navyše je rozhranie príjemné z estetického hľadiska. Interpreti majú okrem názvu v zozname aj náhľad fotky a pri prehliadaní vidíme veľké obrázky albumov, čo je výhoda, lebo človek sa rýchlejšie orientuje medzi albumami keď vidí obrázky ako keď je nútený čítať text. V čom aplikácia zaostáva je absencia hudobného poradia. Vieme si pustiť len skladby z jedného albumu a nie je možné do poradia si pridať piesne od rôznych umelcov z rôznych albumov podľa našej chuti. Ďalej mi chýba možnosť zobraziť informácie o skladbe, umelcovi a text piesne.

#### Gnome Music
![](/home/jakub/fit/itu/sprava/gnome-music.png) 

Gnome Music trpí podobnými neduhami ako prehrávač **Lollypop**. Rozhranie sa tvári tiež veľmi jednoducho a čisto, avšak opak je pravdou. Vieme si zobraziť len všetky albumy v zbierke alebo si vieme najprv zbierku rozdeliť na základe interpreta a neskôr vybrať album, čo pri obsiahlejšej zbierke nie je moc funkčné. Aplikácia Gnome Music je zo strany UI nepoužiteľná.

### Návrh GUI
Prehrávač by mal mať niekoľko funkcií - najdôležitejšie sú prehliadanie zbierky a prehrávanie skladieb. Najviac času človek strávi prehliadaním zbierky a vyberaním piesní na prehratie, preto by mal byť návrh GUI tejto časti aplikácie vyhotovený kvalitne. Pri obsiahlejšej zbierke človek potrebuje pre pohodlné prehliadanie možnosť filtrovať skladby napr. na základe umelca, žánru a pod. Mohla by byť možnosť filtrovať aj na základe iných atribútov ako sú rok vydania albumu ale myslím že obrovské množstvo filtrov by len znečistilo čisté prostredie. Ďalej je potrebné mať vedľa prehliadača zbierky aj playlist do ktorého budeme vedieť vložiť skladby zo zbierky. Na ovládanie prehrávania potrebujeme pár tlačidiel ako sú Play, Pause, Previous, Next, Shuffle, Repeat. Hodnotenie skladieb bolo možné urobiť 2 spôsobmi - 5 hviezdičiek, ako býva vo väčšine prehrávačov alebo hodnotenie páči/nepáči. Po krátkom prieskume sme zistili, že druhá možnosť je medzi užívateľmi ďaleko obľúbenejšia. 

![](/home/jakub/fit/itu/sprava/noteo-library.png) 

Po dlhšom skúšaní vznikol tento návrh. Kľúčom prehliadania zbierky sú albumy, ktoré bude možné filtrovať na základe žánru a umelca a skladby sa zobrazia kliknutím na album. 

![](/home/jakub/fit/itu/sprava/noteo-np.png) 

Okrem základnej funkcionality ešte zvažujeme pridať do prehrávača sekciu "Práve prehrávané" kde by sa zobrazili informácie o aktuálne prehrávanom umelcovi a skladbe a tiež text piesne.

### Návrh a implementácia back-endu

Backend pre prehrávač nebude zložitý. Bude sa skladať zo scanneru knižnice, ktorý bude hľadať skladby v úložisku počítača, následne z nich bude čítať ID3 tagy a tieto ukladať do databázy. Prehrávanie skladieb nám bude umožňovať Electron. Nakoľko Electron je postavený na jadre z prehliadača Chromium a Node.js, tak najlepšia možnosť je urobiť aj scanner skladieb v Node.js. Ďalej zvažujeme možnosť zakomponovať do back-endu aj prepojenie s online službou ako je napríklad MusicBrainz, čo by nám umožňovalo doplniť do skladieb ID3 tagy v prípade že by chýbali. 

### Návrhy užívateľských testov

Užívateľské testy je vhodné vykonávať na uzavretej skupine ľudí ktorí počúvajú hudbu a tak vedia čo majú od hudobného prehrávača očakávať. Samotné testy by sa mali týkať ovládania jednotlivých častí prehrávača ako je napríklad:

* Nastaviť priečinok v ktorom sa nachádza hudba
* Nájsť konkrétnu skladbu v hudobnej knižnici v prípade že poznáme interpreta a názov skladby
* Pridať túto skladbu do playlistu
* Pridať do playlistu okrem tejto skladby album ktorého názov a názov interpreta poznáme
* Prehrať playlisť, preskočiť až na poslednú skladbu, následne pozastaviť prehrávanie a vymazať playlist

To že je užívateľské rozhranie efektívne spoznáme podľa toho že tester nemal sebemenší problém vykonať spomenuté úkony. Testovanie by sme chceli vykonať na čo najväčšej vzorke ľudí ale reálne odhadujeme počet ľudí na 8 - 10.

Testovací protokol bude vo forme 

### Nástroje pro tvorbu GUI

V projekte sme použili spomínaný Electron ktorý nám dokáže spustiť webovu aplikáciu ako natívnu. Samotná aplikácia je založená na webových technológiach ako je html, css a javascript. Pre tvorbu aplikácie sme využili framework Vue s Material Designom. Výhoda tohto riešenia spočíva v rýchlosti vývoja a zároveň je vyvíjaná aplikácia multiplatformná. Obmedzujúce môže byť pri použití tejto technológie sú väčšie nároky na hardvérové zdroje počítača. Štruktúra aplikácie je daná boilerplatom frameworku Vue - aplikácia sa skladá z komponentov ktoré sú následne tiež zložené z jednoduchších komponentov. To znamená že jednotlivé prvky rozhrania sú znovupoužiteľné. 

### Užívateľské testy
Užívateľ vyplnil po otestovaní krátky dotazník kde hodnotil jednotlivé úlohy číslami 1 - 5 na základe náročnosti (1 je najľahšie, 5 je najťažšie)

1. Nastavte priečinok v ktorom sa nachádza hudba:
70% hodnotilo známkou 1, 15% známkou 2, zvyšok hodnotil známkami 3-5. Pripomienky: *"Dlhšie mi trvalo, kým som došiel k tomu že sa bude cesta nás-tavovať v nastaveniach, inak nemám čo vytknúť"*
2. Nájdite album “Night visions” od interpreta “Imagine Dragons” a pridajteho do playlistu:
80% hodnotilo známkou 1, 10% známkou 2, zvyšok známkami 3-5.
3. Nájdite skladbu s názvom “Dark Necessities” v albume “The Getaway” odinterpreta “Red Hot Chilli Peppers”:
100% hodnotilo známkou 1. Pripomienky: *"Bolo to veľmi jednoduché, okamžite som vedel čo mám robiť"*
4. Pridajte túto skladbu do playlistu:
60% hodnotilo známkou 1, 20% hodnotilo známkou 2, 10% hodnotilo známkou 3, 10% hodnotilo známkou 4. Pripomienky: *"Dlhšie mi trvalo kým som prišiel na to ako to urobiť"*, *"Nebolo  to  veľmi  intuitívne,  očakával  som  že  sa  to  bude  robiť jednoduchšie*"
5. Spustite prehrávanie playlistu, preskočte až na poslednú skladbu a následne prehrávanie pozastavte a vymažte playlist:
65% hodnotilo známkou 1, 25% hodnotilo známkou 2, 10% známkou 3-5.

### Výsledky a záver

Ohlasy používateľov na aplikáciu boli pozitívne, o čom svedčia aj výsledky testovania. 

V prehľadnosti užívateľského rozhrania veľmi pomáha ikonografické zobrazenie prvkov ako je napríklad ozubené koliesko pre zobrazenie nastavení - z toho plynie dobrý výsledok z testovania prvej úlohy. 

Druhá a tretia boli z pohľadu užívateľov veľmi jednoduché. Úlohy boli navzájom dosť podobné, takže sa dal očakávať podobný výsledok.

Štvrtá úloha sa zdala byť užívateľom neintuitívna tak sme museli zmeniť spôsob pridávania skladieb do playlistu.

V piatej úlohe bol problém s vymazávaním obsahu playlistu, využívali sme ikonu "clear all" zo sady Material Design Icons, avšak užívatelia mali problém identifikovať správnu funkčnosť tejto ikony, bola nahradená intuitívnejšou ikonou smetného koša.

### Tímová spolupráca

Tímová spolupráca je pre mňa nová skúsenosť ktorá bude určite ďalej využiteľná. Tvorba projektu mi ukázala cesty ako spoločne vymýšľať riešenia a hľadať kompromisy v prípade nezhode názorov. Na tímovej spolupráci sa mi taktiež páčila výmena skúseností, čo nám ušetrilo množstvo času. Tímová spolupráca má aj nevýhody - napríklad stala komunikácia s ostatnými členmi a stretávania sa aby sme mohli konzultovať stav projektu a plánovať si ďalší vývoj.

### Záver

Hlavný cieľ projektu bol vytvoriť hudobný prehrávač ktorý má prívetivé užívateľské rozhranie. Myslím že toto sa nám úspešne podarilo a zároveň sme si všetci počas vývoja nazbierali kopu nových skúseností či už z navrhovania grafických rozhraní alebo samotného použitia vývojových technológií. 

Výsledná forma aplikácie:
![](/home/jakub/fit/itu/sprava/final.png) 