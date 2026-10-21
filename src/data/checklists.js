export const checklistsData = [
  {
    "slug": "glukomer-simulacia-hodnotenie",
    "title": "Hodnotiaci checklist pre pedagóga",
    "subtitle": "Stanovenie glukózy glukomerom – observačný záznam simulačného výkonu študenta",
    "instructions": [
      "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
      "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
      "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „dezinfekciu nechal zaschnúť“).",
      "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
      "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
    ],
    "objectives": [
      "Overiť totožnosť pacienta a účel merania.",
      "Pripraviť pomôcky podľa zásad sterility a bezpečnosti.",
      "Dodržať hygienické postupy (hygiena rúk, OOPP).",
      "Realizovať meranie glykémie správnou technikou.",
      "Správne interpretovať nameranú hodnotu.",
      "Viesť dokumentáciu a komunikovať s pacientom.",
      "Bezpečne likvidovať biologický a ostrý odpad."
    ],
    "phases": [
      { "id": "priprava", "title": "FÁZA 1 – Príprava (pred meraním)", "items": [ { "id": "p1", "text": "Overil totožnosť pacienta (meno a rodné číslo)." }, { "id": "p2", "text": "Oboznámil pacienta s postupom a získal súhlas." }, { "id": "p3", "text": "Overil, či pacient nie je na lačno / v správnom čase merania." }, { "id": "p4", "text": "Skontroloval platnosť a typ testovacích prúžkov." }, { "id": "p5", "text": "Overil funkčnosť a kalibráciu glukomeru." }, { "id": "p6", "text": "Pripravil všetky pomôcky vopred (lanceta, tampóny, dezinfekcia)." }, { "id": "p7", "text": "Pripravil nádobu na ostrý odpad v dosahu." }, { "id": "p8", "text": "Zabezpečil súkromie a pohodlie pacienta." } ] },
      { "id": "hygiena", "title": "FÁZA 2 – Hygiena a bezpečnosť", "items": [ { "id": "h1", "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom." }, { "id": "h2", "text": "Nasadil si jednorazové rukavice." }, { "id": "h3", "text": "Použil nový jednorazový lancet." }, { "id": "h4", "text": "Pripravil dezinfekciu na kožu a nechal ju zaschnúť." } ] },
      { "id": "vykon", "title": "FÁZA 3 – Vlastný výkon – meranie glykémie", "items": [ { "id": "v1", "text": "Zapol glukomer a skontroloval displej." }, { "id": "v2", "text": "Vložil testovací prúžok správne (podľa typu glukomeru)." }, { "id": "v3", "text": "Dezinfikoval miesto vpichu a nechal zaschnúť." }, { "id": "v4", "text": "Vybral správne miesto vpichu – bočná strana prsta." }, { "id": "v5", "text": "Vykonal vpich lancetou plynule a bezpečne." }, { "id": "v6", "text": "Prvú kvapku krvi utrel tampónom (ak to vyžaduje postup)." }, { "id": "v7", "text": "Vytvoril dostatočnú kvapku krvi jemným tlakom." }, { "id": "v8", "text": "Preniesol kvapku na testovací prúžok / senzor podľa pokynov." }, { "id": "v9", "text": "Odčítal výsledok z displeja a správne ho zapísal (mmol/l)." }, { "id": "v10", "text": "Priložil tampón na miesto vpichu a zastavil krvácanie." } ] },
      { "id": "po_vykone", "title": "FÁZA 4 – Postup po výkone", "items": [ { "id": "pv1", "text": "Odstránil rukavice a vykonal hygienickú dezinfekciu rúk." }, { "id": "pv2", "text": "Zlikvidoval lancetu do nádoby na ostrý odpad." }, { "id": "pv3", "text": "Zlikvidoval použitý prúžok a tampón do infekčného odpadu." }, { "id": "pv4", "text": "Uložil glukomer a pomôcky na určené miesto." } ] },
      { "id": "komunikacia", "title": "FÁZA 5 – Dokumentácia a komunikácia", "items": [ { "id": "k1", "text": "Zaznamenal výsledok do dokumentácie (hodnota, čas, okolnosti)." }, { "id": "k2", "text": "Správne interpretoval nameranú hodnotu (porovnal s normou)." }, { "id": "k3", "text": "Nahlásil kritickú hodnotu lekárovi (hypoglykémia/hyperglykémia)." }, { "id": "k4", "text": "Informoval pacienta o výsledku a ďalšom postupe." } ] }
    ],
    "critical_errors": { "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“", "items": [ "Nedodržal hygienu rúk pred výkonom alebo po ňom.", "Použil opakovaný / nesterilný lancet.", "Nesprávne miesto vpichu (bruško prsta namiesto bočnej strany).", "Nesprávna likvidácia ostrého odpadu (lanceta do komunálneho odpadu).", "Neoveril totožnosť pacienta.", "Nezaznamenal výsledok do dokumentácie.", "Nesprávna interpretácia kritickej hodnoty (nezareagoval na hypo/hyperglykémiu)." ] },
    "scoring": { "max_points_per_item": 2 }
  },
  {
    "slug": "laktat-simulacia-hodnotenie",
    "title": "Hodnotiaci checklist pre pedagóga",
    "subtitle": "Stanovenie laktátu – observačný záznam simulačného výkonu študenta",
    "instructions": [
      "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
      "Každé kritérium hodnotiť podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
      "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „zabudol utrieť prvú kvapku“).",
      "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
      "Po ukončení simulácie zrátajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
    ],
    "objectives": [
      "Overiť totožnosť pacienta a účel merania (napr. športová diagnostika, sepsa, hypoxia).",
      "Pripraviť pomôcky (laktomer, prúžky, kapilára) podľa zásad bezpečnosti.",
      "Dodržať hygienické postupy (hygiena rúk, OOPP).",
      "Realizovať odber krvi správnou technikou pre stanovenie laktátu.",
      "Správne interpretovať nameranú hodnotu laktátu (norma vs. acidóza).",
      "Viesť dokumentáciu a komunikovať s pacientom.",
      "Bezpečne likvidovať biologický a ostrý odpad."
    ],
    "phases": [
      { "id": "priprava", "title": "FÁZA 1 – Príprava (pred meraním)", "items": [ { "id": "p1", "text": "Overil totožnosť pacienta (meno + rodné číslo)." }, { "id": "p2", "text": "Oboznámil pacienta s postupom a získal súhlas." }, { "id": "p3", "text": "Overil indikáciu (kedy a prečo sa laktát meria)." }, { "id": "p4", "text": "Skontroloval platnosť a typ testovacích prúžkov pre laktát." }, { "id": "p5", "text": "Overil funkčnosť a kalibráciu laktomeru." }, { "id": "p6", "text": "Pripravil všetky pomôcky (kapilára, lanceta, tampóny, dezinfekcia)." }, { "id": "p7", "text": "Pripravil nádobu na ostrý odpad v dosahu." }, { "id": "p8", "text": "Zabezpečil zohriatie rúk pacienta (podpora prekrvenia)." } ] },
      { "id": "hygiena", "title": "FÁZA 2 – Hygiena a bezpečnosť", "items": [ { "id": "h1", "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom." }, { "id": "h2", "text": "Nasadil si jednorazové rukavice." }, { "id": "h3", "text": "Použil nový jednorazový lancet." }, { "id": "h4", "text": "Pripravil dezinfekciu na kožu a nechal ju zaschnúť." } ] },
      { "id": "vykon", "title": "FÁZA 3 – Vlastný výkon – meranie laktátu", "items": [ { "id": "v1", "text": "Zapol laktomer a skontroloval displej / pripravil analyzátor." }, { "id": "v2", "text": "Vložil testovací prúžok správne (ak sa vyžaduje)." }, { "id": "v3", "text": "Dezinfikoval miesto vpichu a nechal zaschnúť." }, { "id": "v4", "text": "Vybral správne miesto vpichu – bočná strana prsta." }, { "id": "v5", "text": "Vykonal vpich lancetou plynule a bezpečne." }, { "id": "v6", "text": "Utrel prvú kvapku krvi tampónom (prevencia skreslenia tkanivovým mokom)." }, { "id": "v7", "text": "Vytvoril dostatočnú kvapku krvi jemným tlakom (bez silného žmýkania)." }, { "id": "v8", "text": "Nabral krv do kapiláry (bez vzduchových bublín) / priamo na prúžok." }, { "id": "v9", "text": "Preniesol vzorku do prístroja podľa pokynov výrobcu." }, { "id": "v10", "text": "Odčítal výsledok z displeja a správne ho zapísal (mmol/l)." }, { "id": "v11", "text": "Priložil tampón na miesto vpichu a zastavil krvácanie." } ] },
      { "id": "po_vykone", "title": "FÁZA 4 – Postup po výkone", "items": [ { "id": "pv1", "text": "Odstránil rukavice a vykonal hygienickú dezinfekciu rúk." }, { "id": "pv2", "text": "Zlikvidoval lancetu do nádoby na ostrý odpad." }, { "id": "pv3", "text": "Zlikvidoval kapiláru, prúžok a tampón do infekčného odpadu." }, { "id": "pv4", "text": "Uložil laktomer a pomôcky na určené miesto." } ] },
      { "id": "komunikacia", "title": "FÁZA 5 – Dokumentácia a komunikácia", "items": [ { "id": "k1", "text": "Zaznamenal výsledok do dokumentácie (hodnota, čas, okolnosti)." }, { "id": "k2", "text": "Správne interpretoval nameranú hodnotu (norma 0,5 – 2,2 mmol/l)." }, { "id": "k3", "text": "Nahlásil by kritickú hodnotu lekárovi (napr. > 4,0 mmol/l)." }, { "id": "k4", "text": "Informoval pacienta o výsledku a ďalšom postupe." } ] }
    ],
    "critical_errors": { "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“", "items": [ "Nedodržal hygienu rúk pred výkonom alebo po ňom.", "Použil opakovaný / nesterilný lancet.", "Nesprávne miesto vpichu (bruško prsta namiesto bočnej strany).", "Nesprávny odber – prítomnosť vzduchových bublín v kapiláre.", "Nesprávna likvidácia ostrého odpadu.", "Neoveril totožnosť pacienta.", "Nezaznamenal výsledok do dokumentácie.", "Nesprávna interpretácia kritickej hodnoty (nezareagoval na laktátovú acidózu)." ] },
    "scoring": { "max_points_per_item": 2 }
  },
  {
    "slug": "pipetovanie-simulacia-hodnotenie",
    "title": "Hodnotiaci checklist pre pedagóga",
    "subtitle": "Správne pipetovanie s automatickými (piestovými) pipetami – observačný záznam",
    "instructions": [
      "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
      "Každé kritérium hodnotiť podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
      "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „pipetu držal pod uhlom“, „zabudol na 2. zarážku“).",
      "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
      "Po ukončení simulácie zrátajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
    ],
    "objectives": [
      "Overiť správnosť výberu pipety a nastavenia objemu.",
      "Pripraviť správny typ špičky (tips) a skontrolovať jej nasadenie.",
      "Dodržať zásady sterility a bezpečnosti pri práci s kvapalinami.",
      "Osvojiť si správnu techniku nasávania a vypúšťania (1. a 2. zarážka).",
      "Predchádzať kontaminácii filtračnej vrstvy a pipety.",
      "Správne ukončiť prácu a uskladniť pipetu."
    ],
    "phases": [
      { "id": "priprava", "title": "FÁZA 1 – Príprava (pred pipetovaním)", "items": [ { "id": "p1", "text": "Skontroloval typ pipety (objemový rozsah) vhodný pre danú úlohu." }, { "id": "p2", "text": "Nastavil požadovaný objem bez prekročenia max/min rozsahu pipety." }, { "id": "p3", "text": "Skontroloval, či je nastavený objem jasne čitateľný na displeji." }, { "id": "p4", "text": "Vybral správny typ špičky (tips) pre danú pipetu a objem." }, { "id": "p5", "text": "Pripravil si nádoby na kvapalinu a odpad na špičky." }, { "id": "p6", "text": "Skontroloval teplotu a charakter pipetovanej kvapaliny (viskozita, prchavosť)." } ] },
      { "id": "hygiena", "title": "FÁZA 2 – Hygiena a bezpečnosť", "items": [ { "id": "h1", "text": "Vykonal hygienickú dezinfekciu rúk a pracovnej plochy." }, { "id": "h2", "text": "Nasadil si jednorazové rukavice a OOPP (ak je to potrebné)." }, { "id": "h3", "text": "Pracoval s potenciálne nebezpečnými látkami v rámci bezpečnostných pravidiel." } ] },
      { "id": "vykon", "title": "FÁZA 3 – Vlastný výkon – pipetovanie", "items": [ { "id": "v1", "text": "Nasadenie špičky: pevne pritlačil pipetu do špičky bez dotyku ruky na špičku." }, { "id": "v2", "text": "Pre-pláchnutie (pre-wetting): nasal a vypustil kvapalinu späť do nádoby (ak je to vhodné)." }, { "id": "v3", "text": "Držanie pipety: dodržal vertikálnu polohu počas nasávania a vypúšťania." }, { "id": "v4", "text": "Nasávanie: stlačil piest na 1. zarážku, ponoril špičku (2–3 mm) a pomaly uvoľnil piest." }, { "id": "v5", "text": "Dodržal správnu rýchlosť nasávania (pomaly pri viskóznych, rýchlejšie pri vodných roztokoch)." }, { "id": "v6", "text": "Vypúšťanie: dotkol sa špičkou steny nádoby (pod uhlom) a stlačil piest na 1. zarážku." }, { "id": "v7", "text": "Dokončenie vypustenia: stlačil piest na 2. zarážku (blow-out) a plynule vytiahol pipetu." }, { "id": "v8", "text": "Vyhol sa tvorbe bublín a aerosólov počas celého procesu." }, { "id": "v9", "text": "Zabránil vniknutiu kvapaliny do filtračnej vrstvy (špička nebola ponorená príliš hlboko)." } ] },
      { "id": "po_vykone", "title": "FÁZA 4 – Postup po výkone", "items": [ { "id": "pv1", "text": "Odstránil špičku (tips) do príslušného odpadu bez dotyku ruky." }, { "id": "pv2", "text": "Uviedol pipetu do základnej (horizontálnej/vertikálnej) polohy podľa pokynov." }, { "id": "pv3", "text": "Uložil pipetu do stojana (nikdy nie na bok alebo do vrecka)." }, { "id": "pv4", "text": "Uviedol pracovné miesto do pôvodného stavu, vykonal dezinfekciu." } ] },
      { "id": "komunikacia", "title": "FÁZA 5 – Dokumentácia a komunikácia", "items": [ { "id": "k1", "text": "Zaznamenal výsledky / objemy do laboratórneho protokolu." }, { "id": "k2", "text": "V prípade odchýlky (napr. bublina v špičke) stav nahlásil alebo zopakoval." }, { "id": "k3", "text": "Skontroloval čistotu pipety a v prípade potreby nahlásil potrebu kalibrácie." } ] }
    ],
    "critical_errors": { "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“", "items": [ "Prekročenie maximálneho rozsahu pipety (riziko poškodenia piestu).", "Nasávanie s pipetou pod uhlom (nie vertikálne).", "Nedodržanie 2. zarážky pri vypúšťaní (nepresný objem).", "Vniknutie kvapaliny do filtračnej vrstvy / tela pipety.", "Použitie nesprávnej špičky (netesná, poškodená).", "Uloženie pipety v horizontálnej polohe alebo na boku.", "Pipetovanie ústami (pri absencii mechanickej pipety)." ] },
    "scoring": { "max_points_per_item": 2 }
  },
{
  "slug": "hemoglobin-poct-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie hemoglobínu POCT spektrofotometrom – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotiť podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „zabudol utrieť kyvetu“, „v kyvete boli bubliny“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie zrátajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a účel merania (napr. anémia, krvácanie).",
    "Pripraviť POCT spektrofotometer a skontrolovať jeho funkčnosť.",
    "Dodržať hygienické postupy a zásady prevencie infekcie.",
    "Ovládať správnu techniku odberu a plnenia mikrokyvety.",
    "Predchádzať chybám merania (bubliny, neúplné naplnenie, znečistenie optiky).",
    "Správne interpretovať nameranú hladinu hemoglobínu.",
    "Bezpečne likvidovať biologický a ostrý odpad."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta (meno + rodné číslo)."
        },
        {
          "id": "p2",
          "text": "Oboznámil pacienta s postupom a získal súhlas."
        },
        {
          "id": "p3",
          "text": "Skontroloval, či prístroj prešel kontrolou kvality (QC) / je kalibrovaný."
        },
        {
          "id": "p4",
          "text": "Skontroloval exspiráciu a neporušenosť mikrokyviet."
        },
        {
          "id": "p5",
          "text": "Pripravil si všetky pomôcky (lanceta, mikrokyveta, tampóny, dezinfekcia)."
        },
        {
          "id": "p6",
          "text": "Pripravil nádobu na ostrý a infekčný odpad v dosahu."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice."
        },
        {
          "id": "h3",
          "text": "Použil nový jednorazový lancet pre pacienta."
        },
        {
          "id": "h4",
          "text": "Pripravil dezinfekciu na kožu a nechal ju zaschnúť."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – odber a meranie",
      "items": [
        {
          "id": "v1",
          "text": "Vybral správne miesto vpichu – bočná strana prsta."
        },
        {
          "id": "v2",
          "text": "Vykonal vpich lancetou plynule a bezpečne."
        },
        {
          "id": "v3",
          "text": "Prvú kvapku krvi utrel tampónom (ak to vyžaduje štandard pracoviska)."
        },
        {
          "id": "v4",
          "text": "Vytvoril dostatočnú kvapku krvi jemným tlakom (bez silného žmýkania)."
        },
        {
          "id": "v5",
          "text": "Naplnil mikrokyvetu správnym spôsobom (kapilárnym účinkom) až po rysku."
        },
        {
          "id": "v6",
          "text": "Skontroloval, či v mikrokyvete nie sú vzduchové bubliny."
        },
        {
          "id": "v7",
          "text": "Opatrne utrel vonkajšiu stranu kyvety od prebytočnej krvi (dôležité pre optiku!)."
        },
        {
          "id": "v8",
          "text": "Vložil kyvetu do prístroja podľa pokynov a spustil meranie."
        },
        {
          "id": "v9",
          "text": "Odčítal výsledok z displeja a správne ho zapísal (g/l)."
        },
        {
          "id": "v10",
          "text": "Priložil tampón na miesto vpichu a zastavil krvácanie."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Postup po výkone",
      "items": [
        {
          "id": "pv1",
          "text": "Odstránil rukavice a vykonal hygienickú dezinfekciu rúk."
        },
        {
          "id": "pv2",
          "text": "Zlikvidoval lancetu do nádoby na ostrý odpad."
        },
        {
          "id": "pv3",
          "text": "Zlikvidoval mikrokyvetu a tampón do infekčného odpadu."
        },
        {
          "id": "pv4",
          "text": "Uložil prístroj a pomôcky na určené miesto."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a komunikácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledok do dokumentácie (hodnota, čas, okolnosti)."
        },
        {
          "id": "k2",
          "text": "Správne interpretoval nameranú hodnotu (muži ~130–170 g/l, ženy ~120–160 g/l)."
        },
        {
          "id": "k3",
          "text": "Nahlásil kritickú hodnotu lekárovi (napr. Hb < 70 g/l)."
        },
        {
          "id": "k4",
          "text": "Informoval pacienta o výsledku a ďalšom postupe."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal hygienu rúk pred výkonom alebo po ňom.",
      "Použil opakovaný / nesterilný lancet.",
      "Výrazné vzduchové bubliny v mikrokyvete (skreslenie výsledku).",
      "Neúplné naplnenie mikrokyvety (chybajúca krv).",
      "Neutretie vonkajšej strany kyvety (znečistenie optiky prístroja).",
      "Použitie exspirovanej mikrokyvety.",
      "Nesprávna likvidácia ostrého odpadu.",
      "Nevykonaná kontrola kvality (QC) prístroja pred meraním.",
      "Nezaznamenanie výsledku do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "crp-cube-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie CRP POCT analyzátorom CUBE – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nesprávna pipetáž“, „dotyk optickej plochy“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a indikáciu stanovenia CRP.",
    "Pripraviť prístroj CUBE, testovaciu súpravu a RFID kartu.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s biologickým materiálom.",
    "Ovládať správnu techniku odberu a presnej pipetáže vzorky (5 µL).",
    "Správne vložiť kyvetu a spustiť meranie cez príslušnú aplikáciu.",
    "Interpretovať nameranú hodnotu CRP a rozpoznať patologické stavy."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta (meno + rodné číslo)."
        },
        {
          "id": "p2",
          "text": "Oboznámil pacienta s postupom a získal súhlas."
        },
        {
          "id": "p3",
          "text": "Skontroloval, či je prístroj CUBE pripravený (zapnutý, pripojený k tabletu/aplikácii)."
        },
        {
          "id": "p4",
          "text": "Vložil RFID kartu do priehlbne prístroja CUBE (automaticky sa načítajú informácie o teste, šarži a kalibrácii)."
        },
        {
          "id": "p5",
          "text": "Skontroloval exspiráciu a neporušenosť CRP testovacej kyvety."
        },
        {
          "id": "p6",
          "text": "Nechal testovaciu kyvetu a vzorku temperovať na izbovú teplotu (15–30 min)."
        },
        {
          "id": "p7",
          "text": "Pripravil si kalibrovanú pipetu (5 µL) – nepoužívať integrovanú kapiláru."
        },
        {
          "id": "p8",
          "text": "Pripravil nádobu na ostrý a infekčný odpad v dosahu."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice a vhodné OOPP."
        },
        {
          "id": "h3",
          "text": "Použil nový jednorazový lancet pre pacienta."
        },
        {
          "id": "h4",
          "text": "Pripravil dezinfekciu na kožu a nechal ju zaschnúť."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – odber a pipetáž",
      "items": [
        {
          "id": "v1",
          "text": "Vybral správne miesto vpichu – bočná strana prsta."
        },
        {
          "id": "v2",
          "text": "Vykonal vpich lancetou plynule a bezpečne."
        },
        {
          "id": "v3",
          "text": "Prvú kvapku krvi utrel tampónom (ak to vyžaduje štandard pracoviska)."
        },
        {
          "id": "v4",
          "text": "Vytvoril dostatočnú kvapku krvi jemným tlakom (bez silného žmýkania)."
        },
        {
          "id": "v5",
          "text": "Pipetoval presne 5 µL vzorky: piest stlačil do prvého bodu (Position 1) mimo vzorky."
        },
        {
          "id": "v6",
          "text": "Ponoril špičku pipety len 2–3 mm do vzorky a pomaly uvoľnil piest (nasiatie). Príliš hlboké ponorenie skresľuje objem!"
        },
        {
          "id": "v7",
          "text": "Vypustil vzorku priamo do kvapaliny v kyvete: stlačil piest do prvého bodu, po krátkej pauze do druhého bodu."
        },
        {
          "id": "v8",
          "text": "Vytiahol pipetu z kvapaliny a až potom uvoľnil piest."
        },
        {
          "id": "v9",
          "text": "Kyvetu pevne uzavrel viečkom (netreba pretrepávať, pokiaľ nie je uvedené inak)."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Meranie a interpretácia",
      "items": [
        {
          "id": "pv1",
          "text": "Vložil kyvetu do prístroja CUBE (nedotýkať sa optickej plochy v spodnej časti kyvety)."
        },
        {
          "id": "pv2",
          "text": "Na dotykovom displeji/tablete zadal pohlavie (pacient/kontrola) a typ vzorky (sérum/plazma)."
        },
        {
          "id": "pv3",
          "text": "Spustil meranie zatvorením dvierok prístroja."
        },
        {
          "id": "pv4",
          "text": "Po dokončení merania otvoril dvierka, vybral kyvetu a zlikvidoval ju do infekčného odpadu."
        },
        {
          "id": "pv5",
          "text": "Odčítal nameranú hodnotu CRP z displeja a správne ju zapísal (mg/l)."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a komunikácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledok do dokumentácie (hodnota, čas, okolnosti)."
        },
        {
          "id": "k2",
          "text": "Správne interpretoval nameranú hodnotu CRP (norma < 5 mg/l; hodnoty > 10 mg/l indikujú zápal)."
        },
        {
          "id": "k3",
          "text": "Nahlásil by výrazne zvýšenú hodnotu lekárovi."
        },
        {
          "id": "k4",
          "text": "Informoval pacienta o výsledku a ďalšom postupe."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal hygienu rúk pred výkonom alebo po ňom.",
      "Použil opakovaný / nesterilný lancet.",
      "Použitie integrovanej kapiláry namiesto kalibrovanej pipety.",
      "Príliš hlboké ponorenie pipetovej špičky do vzorky (skreslenie objemu a výsledku).",
      "Nesprávne pipetovanie (piest nebol stlačený pred ponorením, alebo nebolo vypustené do druhého bodu).",
      "Dotyk optickej plochy kyvety v spodnej časti.",
      "Zabudol vložiť RFID kartu testovacej sady do prístroja.",
      "Vložil kyvetu s viditeľnými vzduchovými bublinami.",
      "Nedodržal časový interval medzi odberom a meraním (max. 4 hodiny).",
      "Nesprávna likvidácia ostrého a biologického odpadu.",
      "Neoveril totožnosť pacienta.",
      "Nezaznamenal výsledok do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "moc-ureader-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Analýza moču POCT prístrojom UReader – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „príliš dlhé ponorenie prúžku“, „zabudol odstrániť prebytočný moč“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a účel vyšetrenia moču.",
    "Pripraviť prístroj UReader, testovacie prúžky a čerstvú vzorku moču.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s biologickým materiálom.",
    "Ovládať správnu techniku ponorenia a manipulácie s testovacím prúžkom.",
    "Správne vložiť prúžok do prístroja a spustiť meranie.",
    "Interpretovať výsledky vybraných parametrov moču (pH, bielkoviny, glukóza, ketóny, krv, leukocyty, nitrity)."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta (meno + rodné číslo) a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Oboznámil pacienta s postupom a získal súhlas."
        },
        {
          "id": "p3",
          "text": "Skontroloval, či je prístroj UReader zapnutý a v pohotovostnom režime."
        },
        {
          "id": "p4",
          "text": "Skontroloval exspiráciu a správne skladovanie testovacích prúžkov (suché, chránené pred svetlom)."
        },
        {
          "id": "p5",
          "text": "Použil čerstvú vzorku moču (ideálne stredný prúd) v čistej nádobe."
        },
        {
          "id": "p6",
          "text": "Pripravil si držiak na testovací prúžok a nádobu na biologický odpad."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice."
        },
        {
          "id": "h3",
          "text": "Pracoval tak, aby nedošlo ku kontaminácii pracovnej plochy a prístroja močom."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – práca s prúžkom a meranie",
      "items": [
        {
          "id": "v1",
          "text": "Ponoril testovací prúžok do vzorky moču na približne 1 sekundu (všetky reagenčné polia musia byť ponorené)."
        },
        {
          "id": "v2",
          "text": "Odstránil prebytočný moč z prúžku jemným priložením na savý materiál (napr. papierovú utierku) – prúžok nesmie byť úplne suchý."
        },
        {
          "id": "v3",
          "text": "Vložil prúžok do držiaka prístroja UReader správnou stranou a v správnej orientácii."
        },
        {
          "id": "v4",
          "text": "Spustil meranie (automaticky pri vložení alebo stlačením tlačidla Start)."
        },
        {
          "id": "v5",
          "text": "Počas inkubácie a merania nezasahoval do prístroja ani nevyberal prúžok predčasne."
        },
        {
          "id": "v6",
          "text": "Po dokončení merania vybral prúžok a zlikvidoval ho do infekčného odpadu."
        },
        {
          "id": "v7",
          "text": "Odčítal výsledky z displeja alebo z tlačovej zostavy a správne ich zapísal."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Postup po výkone",
      "items": [
        {
          "id": "pv1",
          "text": "Odstránil rukavice a vykonal hygienickú dezinfekciu rúk."
        },
        {
          "id": "pv2",
          "text": "Zlikvidoval použitý prúžok, obal a zvyšky vzorky do infekčného odpadu."
        },
        {
          "id": "pv3",
          "text": "Očistil držiak prúžkov a pracovnú plochu podľa pokynov výrobcu (napr. 70% alkoholom)."
        },
        {
          "id": "pv4",
          "text": "Uviedol prístroj do pohotovostného režimu alebo ho vypol."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a interpretácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledky do dokumentácie (hodnoty parametrov, čas, okolnosti)."
        },
        {
          "id": "k2",
          "text": "Správne interpretoval patologické nálezy (napr. pozitívna bielkovina, glukóza, ketóny, krv, leukocyty, nitrity)."
        },
        {
          "id": "k3",
          "text": "Nahlásil by výrazne patologické hodnoty lekárovi."
        },
        {
          "id": "k4",
          "text": "Informoval pacienta o výsledku a ďalšom postupe."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal hygienu rúk pred výkonom alebo po ňom.",
      "Použil exspirovaný alebo nesprávne skladovaný testovací prúžok.",
      "Ponoril prúžok do moču na príliš dlhý čas (dôjde k vymytiu reagencií).",
      "Neodstránil prebytočný moč z prúžku (skreslenie výsledkov).",
      "Vložil prúžok do prístroja nesprávnou stranou alebo v nesprávnej orientácii.",
      "Vybral prúžok z prístroja pred dokončením merania.",
      "Nesprávna likvidácia biologického odpadu (prúžok do komunálneho odpadu).",
      "Neoveril totožnosť pacienta.",
      "Nezaznamenal výsledky do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "lipidovy-profil-poct-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie lipidového profilu POCT analyzátorom – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nesprávne naplnenie kapiláry“, „bubliny v kazete“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta, dodržanie pôstu a indikáciu vyšetrenia.",
    "Pripraviť POCT analyzátor, testovacie kazety a vykonať kontrolu kvality.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s biologickým materiálom.",
    "Ovládať správnu techniku odberu kapilárnej krvi a manipuláciu s kazetou.",
    "Správne aplikovať vzorku do kazety a spustiť meranie.",
    "Interpretovať výsledky lipidového profilu (TC, HDL, LDL, TG) a rozpoznať rizikové hodnoty."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Overil, či pacient dodržal odporúčaný pôst (9–12 hodín) podľa typu testu."
        },
        {
          "id": "p3",
          "text": "Skontroloval, či je analyzátor zapnutý a v pohotovostnom režime."
        },
        {
          "id": "p4",
          "text": "Vykonal dennú kontrolu optického systému (napr. Optics Check Cassette)."
        },
        {
          "id": "p5",
          "text": "Skontroloval exspiráciu a správne skladovanie testovacích kaziet."
        },
        {
          "id": "p6",
          "text": "Nechal kazetu temperovať na izbovú teplotu (min. 10 minút pred otvorením fólie)."
        },
        {
          "id": "p7",
          "text": "Pripravil si kapiláru s heparínom alebo kalibrovanú pipetu (podľa typu prístroja)."
        },
        {
          "id": "p8",
          "text": "Pripravil nádobu na ostrý a infekčný odpad v dosahu."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice."
        },
        {
          "id": "h3",
          "text": "Použil nový jednorazový lancet pre pacienta."
        },
        {
          "id": "h4",
          "text": "Dezinfikoval miesto vpichu a nechal zaschnúť (odstránenie mastnoty a krémov)."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – odber a aplikácia vzorky",
      "items": [
        {
          "id": "v1",
          "text": "Vybral správne miesto vpichu – bočná strana prsta."
        },
        {
          "id": "v2",
          "text": "Vykonal vpich lancetou plynule a bezpečne."
        },
        {
          "id": "v3",
          "text": "Prvú kvapku krvi utrel tampónom (ak to vyžaduje štandard pracoviska)."
        },
        {
          "id": "v4",
          "text": "Vytvoril dostatočnú kvapku krvi jemným tlakom (bez silného žmýkania)."
        },
        {
          "id": "v5",
          "text": "Naplnil kapiláru alebo pipetu presným objemom vzorky (bez vzduchových bublín)."
        },
        {
          "id": "v6",
          "text": "Aplikoval vzorku do vzorkovacej jamky kazety podľa pokynov výrobcu (do 5 minút od odberu)."
        },
        {
          "id": "v7",
          "text": "Kazetu udržiaval v horizontálnej polohe a ihneď ju vložil do analyzátora."
        },
        {
          "id": "v8",
          "text": "Spustil meranie (automaticky alebo stlačením tlačidla RUN)."
        },
        {
          "id": "v9",
          "text": "Počas merania nezasahoval do prístroja a čakal na dokončenie analýzy."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Postup po výkone",
      "items": [
        {
          "id": "pv1",
          "text": "Odstránil rukavice a vykonal hygienickú dezinfekciu rúk."
        },
        {
          "id": "pv2",
          "text": "Po dokončení merania vybral kazetu a zlikvidoval ju do infekčného odpadu."
        },
        {
          "id": "pv3",
          "text": "Zlikvidoval lancetu do nádoby na ostrý odpad."
        },
        {
          "id": "pv4",
          "text": "Uviedol prístroj do pohotovostného režimu alebo ho vypol."
        },
        {
          "id": "pv5",
          "text": "Očistil pracovnú plochu a prípadné znečistené časti prístroja."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a interpretácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledky lipidového profilu (TC, HDL, LDL, TG) do dokumentácie."
        },
        {
          "id": "k2",
          "text": "Správne interpretoval výsledky podľa referenčných hodnôt (napr. TC < 5,18 mmol/l, LDL < 2,59 mmol/l, HDL > 1,04 mmol/l, TG < 1,70 mmol/l)."
        },
        {
          "id": "k3",
          "text": "Identifikoval by prítomnosť rizikových hodnôt (napr. vysoký LDL, nízky HDL, vysoké TG) a nahlásil ich lekárovi."
        },
        {
          "id": "k4",
          "text": "Informoval pacienta o výsledkoch a odporučil ďalší postup (napr. konzultáciu s lekárom)."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal hygienu rúk pred výkonom alebo po ňom.",
      "Použil opakovaný / nesterilný lancet.",
      "Nevykonal dennú kontrolu optického systému alebo kontrolu kvality.",
      "Použil exspirovanú alebo nesprávne skladovanú testovaciu kazetu.",
      "Nedodržal pôst pacienta (ak je pre daný test vyžadovaný).",
      "Naplnil kapiláru nepresným objemom alebo s vzduchovými bublinami.",
      "Aplikoval vzorku do kazety po viac ako 5 minútach od odberu.",
      "Vložil kazetu do prístroja nesprávnou stranou alebo v nesprávnej orientácii.",
      "Vybral kazetu z prístroja pred dokončením merania.",
      "Nesprávna likvidácia biologického a ostrého odpadu.",
      "Neoveril totožnosť pacienta.",
      "Nezaznamenal výsledky do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "istat-eg6-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie parametrov na Abbott i-STAT 1 (kazeta EG6+) – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nedodržaný čas naplnenia“, „bubliny v kazete“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a indikáciu vyšetrenia (napr. vnútorné prostredie, acidobázická rovnováha).",
    "Pripraviť analyzátor i-STAT 1 a kazetu EG6+ podľa teplotných požiadaviek.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s krvou.",
    "Ovládať správnu techniku odberu a časový limit na naplnenie kazety.",
    "Správne naplniť kazetu (95 µL) bez bublín a vložiť ju do prístroja.",
    "Interpretovať výsledky parametrov (Na⁺, K⁺, pH, PCO₂, PO₂, Hct, HCO₃⁻, tHb)."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Skontroloval, či je analyzátor i-STAT 1 zapnutý a v pohotovostnom režime."
        },
        {
          "id": "p3",
          "text": "Skontroloval exspiráciu a neporušenosť hliníkovej fólie kazety EG6+."
        },
        {
          "id": "p4",
          "text": "Nechal kazetu temperovať na izbovú teplotu (18–30 °C) – min. 5 minút pre jednu kazetu, 1 hodinu pre celú škatuľu."
        },
        {
          "id": "p5",
          "text": "Pripravil si odberový materiál (injekčnú striekačku bez antikoagulantu alebo s vyváženým heparínom, resp. kapiláru)."
        },
        {
          "id": "p6",
          "text": "Pripravil nádobu na biologický a ostrý odpad."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice."
        },
        {
          "id": "h3",
          "text": "Dezinfikoval miesto vpichu a nechal zaschnúť."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Odber a naplnenie kazety",
      "items": [
        {
          "id": "v1",
          "text": "Vykonal odber arteriálnej, venóznej alebo kapilárnej krvi podľa indikácie."
        },
        {
          "id": "v2",
          "text": "Dodržal časový limit na naplnenie kazety: do 3 minút (bez antikoagulantu) alebo do 10 minút (s vyváženým/lítiovým heparínom) pre pH, PCO₂, PO₂."
        },
        {
          "id": "v3",
          "text": "Pred naplnením kazetu položil na rovný povrch."
        },
        {
          "id": "v4",
          "text": "Dôkladne premiešal vzorku: skúmavku prevrátil 10x, alebo striekačku 5 s otáčal, 5 s váľal a 5 s otáčal."
        },
        {
          "id": "v5",
          "text": "Vytlačil prvé dve kvapky vzorky mimo kazety (pre odstránenie zvyškového objemu)."
        },
        {
          "id": "v6",
          "text": "Naplnil kazetu EG6+ presne 95 µL vzorky – bez vzduchových bublín."
        },
        {
          "id": "v7",
          "text": "Kazetu ihneď po naplnení vložil do analyzátora i-STAT 1."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Meranie a odčítanie výsledkov",
      "items": [
        {
          "id": "pv1",
          "text": "Zadal ID pacienta, ID operátora a typ vzorky (arteriálna / venózna / kapilárna)."
        },
        {
          "id": "pv2",
          "text": "Počas merania nezasahoval do prístroja."
        },
        {
          "id": "pv3",
          "text": "Po dokončení merania odčítal výsledky z displeja."
        },
        {
          "id": "pv4",
          "text": "Vybral kazetu a zlikvidoval ju do infekčného odpadu."
        },
        {
          "id": "pv5",
          "text": "Zlikvidoval odberový materiál do príslušného odpadu."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a interpretácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledky meraných parametrov (Na⁺, K⁺, pH, PCO₂, PO₂, Hct) do dokumentácie."
        },
        {
          "id": "k2",
          "text": "Zaznamenal vypočítané parametre (HCO₃⁻, tCO₂, EB, SO₂, tHb)."
        },
        {
          "id": "k3",
          "text": "Správne interpretoval patologické hodnoty (napr. acidóza/alkalóza, dysnatrémia, dyskaliémia)."
        },
        {
          "id": "k4",
          "text": "Nahlásil by kritické hodnoty lekárovi."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal hygienu rúk pred výkonom alebo po ňom.",
      "Použil kazetu po expirácii alebo s poškodenou fóliou.",
      "Nedodržal temperáciu kazety na izbovú teplotu.",
      "Nedodržal časový limit na naplnenie kazety (3 alebo 10 minút).",
      "Nenaplnil kazetu správnym objemom (95 µL) alebo s bublinami.",
      "Nepremiešal vzorku pred naplnením kazety.",
      "Nezadal správny typ vzorky do prístroja.",
      "Nesprávna likvidácia biologického odpadu.",
      "Neoveril totožnosť pacienta."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "kvasinky-mikroskopovanie-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Mikroskopovanie kvasiniek natívnym farbením – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „veľké množstvo bublín v preparáte“, „nesprávne zväčšenie“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili výsledok pozorovania."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Pripraviť mikroskop a všetky pomôcky pre natívne farbenie kvasiniek.",
    "Zhotoviť suspenziu kvasiniek a správne aplikovať farbivo (Lugolov roztok alebo metylénová modrá).",
    "Pripraviť natívny preparát bez vzduchových bublín a s vhodnou hrúbkou.",
    "Nastaviť mikroskop na správne zväčšenie (min. 400x) a osvetlenie.",
    "Identifikovať morfologické znaky kvasiniek (oválny tvar, pučanie, reťazce).",
    "Rozlíšiť živé a mŕtve bunky pri farbení metylénovou modrou."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava pomôcok a pracoviska",
      "items": [
        {
          "id": "p1",
          "text": "Skontroloval čistotu podložného a krycieho sklíčka (odmastené, bez prachu)."
        },
        {
          "id": "p2",
          "text": "Pripravil mikroskop, sklíčka, krycie sklíčka, preparačnú ihlu / špáradlo a kvapkadlo."
        },
        {
          "id": "p3",
          "text": "Pripravil suspenziu kvasiniek (napr. pivovarské kvasnice rozmixované vo vode alebo fyziologickom roztoku)."
        },
        {
          "id": "p4",
          "text": "Pripravil farbivo – Lugolov roztok (na dôkaz glykogénu) alebo metylénovú modrú (na rozlíšenie živých/mŕtvych buniek)."
        },
        {
          "id": "p5",
          "text": "Pripravil filtračný papier na odsatie prebytočnej kvapaliny."
        }
      ]
    },
    {
      "id": "zhotovenie",
      "title": "FÁZA 2 – Zhotovenie natívneho preparátu",
      "items": [
        {
          "id": "z1",
          "text": "Na podložné sklíčko kvapol kvapku suspenzie kvasiniek (alebo kvapku farbiva a do nej vniesol malé množstvo kvasiniek)."
        },
        {
          "id": "z2",
          "text": "Dôkladne premiešal suspenziu s farbivom (ak postup vyžaduje spoločnú kvapku)."
        },
        {
          "id": "z3",
          "text": "Prikryl kvapku krycím sklíčkom pod uhlom 45°, aby sa zabránilo vzniku vzduchových bublín."
        },
        {
          "id": "z4",
          "text": "Odsal prebytočnú kvapalinu filtračným papierom zo strany krycieho sklíčka."
        },
        {
          "id": "z5",
          "text": "Nechal preparát krátko ustáliť (podľa typu farbiva, napr. 3–5 minút)."
        }
      ]
    },
    {
      "id": "mikroskopovanie",
      "title": "FÁZA 3 – Mikroskopovanie a pozorovanie",
      "items": [
        {
          "id": "m1",
          "text": "Umiestnil preparát na stolík mikroskopu a zaistil ho svorkami."
        },
        {
          "id": "m2",
          "text": "Začal pozorovanie pri malom zväčšení (napr. 10x objektív) na zaostrenie preparátu."
        },
        {
          "id": "m3",
          "text": "Prešiel na stredné zväčšenie (40x objektív) – celkové zväčšenie min. 400x."
        },
        {
          "id": "m4",
          "text": "Správne nastavil osvetlenie (clona, kondenzor) pre optimálny kontrast."
        },
        {
          "id": "m5",
          "text": "Zaostril preparát a pozoroval morfológiu kvasiniek (oválny tvar, pučanie, reťazce)."
        },
        {
          "id": "m6",
          "text": "Pri metylénovej modrej rozlíšil živé (bezfarebné) a mŕtve (modré) bunky."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Postup po mikroskopovaní",
      "items": [
        {
          "id": "pv1",
          "text": "Odstránil preparát z mikroskopu a bezpečne ho zlikvidoval (biologický odpad)."
        },
        {
          "id": "pv2",
          "text": "Uviedol mikroskop do základného nastavenia (najmenší objektív, najnižšia intenzita svetla)."
        },
        {
          "id": "pv3",
          "text": "Očistil šošovky a stolík mikroskopu podľa pokynov (jemné utierky, čistiaci roztok)."
        },
        {
          "id": "pv4",
          "text": "UmyL a upratal pracovné sklíčka a pomôcky, vykonal dezinfekciu pracovnej plochy."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a interpretácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal zväčšenie a typ farbiva použitého pri pozorovaní."
        },
        {
          "id": "k2",
          "text": "Nakreslil alebo opísal morfologické znaky pozorovaných kvasiniek (tvar, pučanie, reťazce)."
        },
        {
          "id": "k3",
          "text": "Pri metylénovej modrej uviedol približný pomer živých a mŕtvych buniek (v %)."
        },
        {
          "id": "k4",
          "text": "Správne interpretoval výsledok farbenia (napr. prítomnosť glykogénu pri Lugolovom roztoku – hnedé sfarbenie)."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Použil znečistené alebo poškriabané podložné/krycie sklíčko.",
      "Nepodarilo sa prikryť preparát bez vzduchových bublín (bubliny znemožňujú pozorovanie).",
      "Použil príliš veľké množstvo farbiva alebo suspenzie (preparát je príliš hrubý).",
      "Nesprávne nastavil mikroskop (napr. pozoroval pri malom zväčšení bez možnosti identifikácie).",
      "Nedodržal zásady bezpečnej likvidácie biologického odpadu.",
      "Nezaznamenal výsledky pozorovania do protokolu."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na výsledok."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},


{
  "slug": "dychova-skusa-alkohol-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "POCT vyšetrenie alkoholu z dychu – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nedodržaný čas čakania“, „príliš krátky výdych“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a účel vyšetrenia (dychová skúška).",
    "Pripraviť alkohol tester, jednorazový náustok a skontrolovať kalibráciu.",
    "Dodržať hygienické zásady a bezpečnosť pri práci.",
    "Ovládať správny postup čakania pred meraním (15 minút).",
    "Vykonať správnu techniku dýchania do prístroja.",
    "Interpretovať výsledok a rozpoznať limity dychovej skúšky."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Oboznámil pacienta s postupom a získal ústny súhlas."
        },
        {
          "id": "p3",
          "text": "Skontroloval, či je prístroj kalibrovaný (dátum kalibrácie nie je starší ako 6–12 mesiacov)."
        },
        {
          "id": "p4",
          "text": "Skontroloval stav batérie a funkčnosť prístroja."
        },
        {
          "id": "p5",
          "text": "Pripravil nový, nepoužitý jednorazový náustok."
        },
        {
          "id": "p6",
          "text": "Overil, či pacient pred testom nekonzumoval alkohol, ústne spreje, lieky alebo jedlo (min. 15 minút)."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice (podľa štandardu pracoviska)."
        },
        {
          "id": "h3",
          "text": "Zabezpečil, aby nedošlo ku kontaminácii náustku ani prístroja."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – dychová skúška",
      "items": [
        {
          "id": "v1",
          "text": "Zapol prístroj a počkal na signalizáciu pripravenosti (napr. „BLO“ alebo zvukový signál)."
        },
        {
          "id": "v2",
          "text": "Nasledoval 15-minútový observačný interval pred samotným meraním (bez fajčenia, jedla, pitia, vracania)."
        },
        {
          "id": "v3",
          "text": "Vybral pacienta z pokoja a vyzval ho na hlboký nádych a zadržanie dychu."
        },
        {
          "id": "v4",
          "text": "Pacient plynulo a dostatočne silno fúkal do náustku (min. 1,2 l vzduchu, trvanie aspoň 2 sekundy)."
        },
        {
          "id": "v5",
          "text": "Sledoval, či prístroj prijal dostatočnú vzorku (zvukový signál alebo ukazovateľ objemu)."
        },
        {
          "id": "v6",
          "text": "Po dokončení merania odčítal výsledok z displeja."
        },
        {
          "id": "v7",
          "text": "V prípade potreby vykonal druhé meranie (s odstupom cca 2 minúty) na potvrdenie výsledku."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Postup po výkone",
      "items": [
        {
          "id": "pv1",
          "text": "Odstránil jednorazový náustok a zlikvidoval ho do biologického odpadu."
        },
        {
          "id": "pv2",
          "text": "Odstránil rukavice a vykonal hygienickú dezinfekciu rúk."
        },
        {
          "id": "pv3",
          "text": "Uviedol prístroj do pohotovostného režimu alebo ho vypol."
        },
        {
          "id": "pv4",
          "text": "Očistil prístroj podľa pokynov výrobcu."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a interpretácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledok do dokumentácie (hodnota v ‰ alebo mg/l, čas, podmienky)."
        },
        {
          "id": "k2",
          "text": "Správne interpretoval výsledok (napr. do 0,20 g/kg nie je priama známka požitia alkoholu)."
        },
        {
          "id": "k3",
          "text": "Uviedol, že dychová skúška je orientačná (skríningová) a na potvrdenie je potrebný odber krvi."
        },
        {
          "id": "k4",
          "text": "Informoval pacienta o výsledku a ďalšom postupe."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal 15-minútový čas čakania pred meraním.",
      "Použil prístroj s exspirovanou kalibráciou.",
      "Použil starý alebo znečistený náustok.",
      "Nedodržal správnu techniku dýchania (krátky alebo slabý výdych).",
      "Meranie vykonal priamo počas fajčenia, jedla alebo pitia pacienta.",
      "Neodčítal výsledok v správnom čase alebo ignoroval chybové hlásenie prístroja.",
      "Nesprávna likvidácia biologického odpadu.",
      "Neoveril totožnosť pacienta.",
      "Nezaznamenal výsledok do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "octova-kyselina-titracia-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie kyseliny octovej v octe odmernou analýzou – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „prekročený bod ekvivalencie“, „vzduchová bublina v byrete“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť princíp acidobázickej titrácie a prípravu roztokov.",
    "Pripraviť byretu, pipetu a titračnú aparatúru podľa zásad presnosti.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s žieravými látkami.",
    "Ovládať správnu techniku titrácie (kvapkanie, krúženie, odčítanie menisku).",
    "Správne identifikovať bod ekvivalencie (zmenu farby indikátora).",
    "Vypočítať koncentráciu a hmotnostný podiel kyseliny octovej v octe."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred titráciou)",
      "items": [
        {
          "id": "p1",
          "text": "Overil si zadanie a vypočítal potrebné riedenie octu (napr. 1:10)."
        },
        {
          "id": "p2",
          "text": "Skontroloval čistotu byrety a pipety (odmastené, bez vodného filmu na stenách)."
        },
        {
          "id": "p3",
          "text": "Prepláchol byretu malým množstvom odmerného roztoku NaOH (odstránenie zvyškov vody)."
        },
        {
          "id": "p4",
          "text": "Prepláchol pipetu malým množstvom pripraveného roztoku octu."
        },
        {
          "id": "p5",
          "text": "Pripravil si titračnú banku, indikátor (fenolftaleín 1%) a stojan s byretou."
        },
        {
          "id": "p6",
          "text": "Skontroloval, či byreta nemá poškodený kohútik alebo praskliny."
        }
      ]
    },
    {
      "id": "bezpecnost",
      "title": "FÁZA 2 – Bezpečnosť a hygiena",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk a nasadil si ochranné rukavice."
        },
        {
          "id": "h2",
          "text": "Použil ochranné okuliare (NaOH je žieravý, kyselina octová dráždivá)."
        },
        {
          "id": "h3",
          "text": "Pracoval tak, aby nedošlo k poleptaniu pokožky alebo vystrieknutiu roztoku."
        },
        {
          "id": "h4",
          "text": "Pripravil nádobu na chemický odpad (neutralizované zvyšky)."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – titrácia",
      "items": [
        {
          "id": "v1",
          "text": "Naplnil byretu roztokom NaOH a odstránil vzduchovú bublinu z hrotu (otvorením kohútika)."
        },
        {
          "id": "v2",
          "text": "Nastavil hladinu NaOH na nulovú značku (alebo si zapísal počiatočný objem)."
        },
        {
          "id": "v3",
          "text": "Pipetoval presný objem pripraveného roztoku octu (napr. 10 mL) do titračnej banky."
        },
        {
          "id": "v4",
          "text": "Pridal 2–3 kvapky fenolftaleínu (roztok zostal bezfarebný)."
        },
        {
          "id": "v5",
          "text": "Titroval pomaly, po kvapkách, za stáleho krúženia bankou."
        },
        {
          "id": "v6",
          "text": "Sledoval miesto dopadu kvapky – v blízkosti bodu ekvivalencie sa objavila ružová škvrna."
        },
        {
          "id": "v7",
          "text": "Ukončil titráciu pri prvom trvalom slabo ružovom sfarbení (trvajúcom aspoň 30 sekúnd)."
        },
        {
          "id": "v8",
          "text": "Odčítal konečný objem NaOH správne (dolný meniskus, oko v rovine hladiny)."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Postup po titrácii",
      "items": [
        {
          "id": "pv1",
          "text": "Zaznamenal spotrebu NaOH do laboratórneho protokolu."
        },
        {
          "id": "pv2",
          "text": "Vylial neutralizovaný roztok z banky do príslušného odpadu."
        },
        {
          "id": "pv3",
          "text": "Dôkladne prepláchol byretu a pipetu destilovanou vodou."
        },
        {
          "id": "pv4",
          "text": "Uviedol pracovné miesto do pôvodného stavu a vykonal dezinfekciu."
        }
      ]
    },
    {
      "id": "vysledky",
      "title": "FÁZA 5 – Výpočet a dokumentácia",
      "items": [
        {
          "id": "k1",
          "text": "Vypočítal koncentráciu kyseliny octovej podľa vzorca: c(CH3COOH) = (c(NaOH) * V(NaOH)) / V(vzorky)."
        },
        {
          "id": "k2",
          "text": "Zohľadnil riedenie vzorky (vynásobenie koncentrácie riediacim faktorom)."
        },
        {
          "id": "k3",
          "text": "Prepočítal výsledok na hmotnostný podiel v % (g/100 mL) a porovnal s údajom na etikete octu."
        },
        {
          "id": "k4",
          "text": "Zaznamenal výsledok do dokumentácie."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Neprepláchol byretu alebo pipetu odmerným roztokom (skreslenie koncentrácie).",
      "Nechal vzduchovú bublinu v hrote byrety (nepresný odčítaný objem).",
      "Nesprávne odčítanie menisku (napr. odčítanie horného menisku alebo z nesprávneho uhla).",
      "Neustále krúženie bankou pri titrácii (riziko vystrieknutia).",
      "Prekročenie bodu ekvivalencie (sýto ružové sfarbenie – pretitrované).",
      "Použitie nesprávneho indikátora alebo jeho zabudnutie.",
      "Nedodržanie bezpečnostných zásad pri práci s NaOH.",
      "Zabudnutie zohľadniť riediaci faktor pri výpočte.",
      "Nezaznamenanie výsledku do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "drogy-imunochromatografia-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "POCT vyšetrenie drog imunochromatografickou metódou – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nesprávny čas odčítania“, „neplatný test“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a účel vyšetrenia (screening drog).",
    "Pripraviť testovacie zariadenie, čistú odberovú nádobu a časovač.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s biologickým materiálom.",
    "Ovládať správny odber vzorky moču (stredný prúd) a manipuláciu s testom.",
    "Dodržať presný inkubačný čas a správne interpretovať výsledok (C a T čiara).",
    "Rozpoznať neplatný test a vedieť, kedy je potrebné test zopakovať."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred testovaním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Oboznámil pacienta s postupom odberu a získal súhlas."
        },
        {
          "id": "p3",
          "text": "Skontroloval exspiráciu a neporušenosť obalu testovacieho zariadenia."
        },
        {
          "id": "p4",
          "text": "Nechal testovacie zariadenie temperovať na izbovú teplotu (15–30 °C) pred otvorením obalu."
        },
        {
          "id": "p5",
          "text": "Pripravil čistú, suchú a nepoužitú odberovú nádobu."
        },
        {
          "id": "p6",
          "text": "Pripravil časovač (stopky alebo minútku) na presné meranie času."
        },
        {
          "id": "p7",
          "text": "Pripravil nádobu na biologický odpad a jednorazové rukavice."
        }
      ]
    },
    {
      "id": "hygiena",
      "title": "FÁZA 2 – Hygiena a bezpečnosť",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk pred výkonom."
        },
        {
          "id": "h2",
          "text": "Nasadil si jednorazové rukavice."
        },
        {
          "id": "h3",
          "text": "Pracoval tak, aby nedošlo ku kontaminácii vzorky ani pracovnej plochy."
        }
      ]
    },
    {
      "id": "vykon",
      "title": "FÁZA 3 – Vlastný výkon – odber a aplikácia vzorky",
      "items": [
        {
          "id": "v1",
          "text": "Poučil pacienta o odbere stredného prúdu moču do čistej nádoby."
        },
        {
          "id": "v2",
          "text": "Skontroloval, či objem vzorky dosahuje minimálnu požadovanú hranicu (napr. 30 mL)."
        },
        {
          "id": "v3",
          "text": "V prípade potreby nechal vzorku temperovať na izbovú teplotu (ak bola chladená)."
        },
        {
          "id": "v4",
          "text": "Odstránil testovacie zariadenie z ochranného obalu až tesne pred použitím."
        },
        {
          "id": "v5",
          "text": "Ponoril testovací prúžok / kazetu do vzorky moču po vyznačenú rysku (alebo aplikoval vzorku do jamky podľa typu testu)."
        },
        {
          "id": "v6",
          "text": "Dodržal presný čas ponorenia (zvyčajne 10–15 sekúnd, podľa pokynov výrobcu)."
        },
        {
          "id": "v7",
          "text": "Vybral testovacie zariadenie a položil ho na rovnú, suchú a čistú plochu."
        },
        {
          "id": "v8",
          "text": "Spustil časovač na presný inkubačný čas (zvyčajne 5 minút)."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 4 – Odčítanie a interpretácia výsledku",
      "items": [
        {
          "id": "pv1",
          "text": "Odčítal výsledok presne v stanovenom čase (zvyčajne 5 minút, najneskôr do 10 minút)."
        },
        {
          "id": "pv2",
          "text": "Skontroloval prítomnosť kontrolnej (C) čiary – ak chýba, test je neplatný."
        },
        {
          "id": "pv3",
          "text": "Interpretoval výsledok: prítomnosť T čiary = negatívny, neprítomnosť T čiary = predbežne pozitívny."
        },
        {
          "id": "pv4",
          "text": "Zaznamenal výsledok pre každú testovanú drogu (pozitívny / negatívny / neplatný)."
        },
        {
          "id": "pv5",
          "text": "Zlikvidoval testovacie zariadenie a vzorku do infekčného odpadu."
        }
      ]
    },
    {
      "id": "komunikacia",
      "title": "FÁZA 5 – Dokumentácia a komunikácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal výsledky do dokumentácie (typ testu, čas, výsledok)."
        },
        {
          "id": "k2",
          "text": "V prípade predbežne pozitívneho výsledku informoval o potrebe konfirmačného testu (GC-MS/LC-MS)."
        },
        {
          "id": "k3",
          "text": "Uviedol možné limity testu (cut-off hodnoty, falošne pozitívne/negatívne výsledky)."
        },
        {
          "id": "k4",
          "text": "Informoval pacienta o výsledku a ďalšom postupe."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nedodržal hygienu rúk pred výkonom alebo po ňom.",
      "Použil testovacie zariadenie po expirácii alebo s poškodeným obalom.",
      "Nedodržal správny objem vzorky (príliš málo alebo príliš veľa).",
      "Nesprávne ponorenie testovacieho prúžku (príliš dlhé alebo krátke).",
      "Neodčítal výsledok v správnom čase (pred alebo po stanovenom intervale).",
      "Interpretoval výsledok bez kontrolnej (C) čiary (neplatný test).",
      "Nesprávna likvidácia biologického odpadu.",
      "Neoveril totožnosť pacienta.",
      "Nezaznamenal výsledok do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "kreatinin-jaffe-spektrofotometria-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie kreatinínu Jaffého metódou spektrofotometricky – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nesprávna vlnová dĺžka“, „chýbajúci slepý vzorok“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a účel stanovenia kreatinínu (funkcia obličiek).",
    "Pripraviť spektrofotometer, kremenné kyvety a pracovné roztoky (kyselina pikrová, NaOH).",
    "Dodržať hygienické zásady a bezpečnosť pri práci s žieravými chemikáliami.",
    "Ovládať správny postup pipetovania vzorky, štandardu a slepého vzorku.",
    "Dodržať presný inkubačný čas a teplotu (37 °C) pre správny vývoj farby.",
    "Zmerať absorbanciu pri správnej vlnovej dĺžke a vypočítať koncentráciu kreatinínu."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Oboznámil sa s typom vzorky (sérum, plazma, moč) a jej riedením (moč 1:50 alebo 1:100)."
        },
        {
          "id": "p3",
          "text": "Skontroloval exspiráciu a vzhľad reagentov (kyselina pikrová, NaOH) – žiadny zákal ani častice."
        },
        {
          "id": "p4",
          "text": "Pripravil pracovný roztok zmiešaním R1 (NaOH) a R2 (kyselina pikrová) v pomere 1:1 (ak sa vyžaduje)."
        },
        {
          "id": "p5",
          "text": "Nechal pracovný roztok a kyvety temperovať na 37 °C."
        },
        {
          "id": "p6",
          "text": "Pripravil si kalibrované pipety, špičky a čisté kremenné kyvety (1 cm)."
        },
        {
          "id": "p7",
          "text": "Pripravil slepý vzorok (destilovaná voda) a štandard kreatinínu."
        }
      ]
    },
    {
      "id": "bezpecnost",
      "title": "FÁZA 2 – Bezpečnosť a hygiena",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk a nasadil si jednorazové rukavice."
        },
        {
          "id": "h2",
          "text": "Použil ochranné okuliare alebo štít (kyselina pikrová a NaOH sú žieravé)."
        },
        {
          "id": "h3",
          "text": "Pracoval v digestore alebo pri zapnutej ventilácii (kyselina pikrová je toxická)."
        },
        {
          "id": "h4",
          "text": "Pripravil nádobu na chemický odpad (nie do výlevky!)."
        }
      ]
    },
    {
      "id": "pipetovanie",
      "title": "FÁZA 3 – Pipetovanie a inkubácia",
      "items": [
        {
          "id": "v1",
          "text": "Označil si tri kyvety: Slepý (Blank), Štandard (Std), Vzorka (Sample)."
        },
        {
          "id": "v2",
          "text": "Do slepého vzorku pipetoval 100 µL destilovanej vody."
        },
        {
          "id": "v3",
          "text": "Do štandardu pipetoval 100 µL štandardu kreatinínu."
        },
        {
          "id": "v4",
          "text": "Do vzorky pipetoval 100 µL séra/plazmy alebo riedeného moču."
        },
        {
          "id": "v5",
          "text": "Do všetkých troch kyviet pridal rovnaké množstvo pracovného roztoku (napr. 1,0 mL)."
        },
        {
          "id": "v6",
          "text": "Kyvety jemne premiešal a ihneď vložil do spektrofotometra vyhriateho na 37 °C."
        },
        {
          "id": "v7",
          "text": "Spustil stopky a dodržal presný inkubačný čas (napr. 60 s a 120 s pre kinetickú metódu, alebo 15 min pre endpointovú metódu)."
        }
      ]
    },
    {
      "id": "meranie",
      "title": "FÁZA 4 – Spektrofotometrické meranie",
      "items": [
        {
          "id": "m1",
          "text": "Nastavil vlnovú dĺžku na 492 nm (alebo 500–510 nm podľa protokolu)."
        },
        {
          "id": "m2",
          "text": "Vynuloval prístroj (nastavil 0 Abs) na slepý vzorok alebo destilovanú vodu."
        },
        {
          "id": "m3",
          "text": "Odčítal absorbanciu štandardu v stanovenom čase."
        },
        {
          "id": "m4",
          "text": "Odčítal absorbanciu vzorky v stanovenom čase."
        },
        {
          "id": "m5",
          "text": "Ak je to potrebné, odčítal absorbanciu po druhom časovom intervale (kinetická metóda)."
        },
        {
          "id": "m6",
          "text": "Skontroloval, či hodnoty absorbancie sú v lineárnom rozsahu (napr. do 1,8)."
        }
      ]
    },
    {
      "id": "vysledky",
      "title": "FÁZA 5 – Výpočet a dokumentácia",
      "items": [
        {
          "id": "k1",
          "text": "Vypočítal koncentráciu kreatinínu podľa vzorca: (A_vzorka / A_štandard) × koncentrácia štandardu."
        },
        {
          "id": "k2",
          "text": "Zohľadnil riedenie vzorky (pri moči násobil riediacim faktorom, napr. 50 alebo 100)."
        },
        {
          "id": "k3",
          "text": "Prepočítal jednotky (mg/dL na µmol/L: × 88,4)."
        },
        {
          "id": "k4",
          "text": "Zaznamenal výsledok do dokumentácie a porovnal s referenčnými hodnotami (sérum: cca 60–110 µmol/L)."
        },
        {
          "id": "k5",
          "text": "Zlikvidoval zvyšky vzoriek a reagentov do príslušného odpadu."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nepoužil slepý vzorok alebo nevynuloval spektrofotometer.",
      "Nesprávna vlnová dĺžka (mimo rozsahu 490–510 nm).",
      "Nedodržal presný inkubačný čas alebo teplotu 37 °C.",
      "Nepripravil pracovný roztok v správnom pomere (R1:R2).",
      "Použil koagulovanú, hemolyzovanú alebo znečistenú vzorku.",
      "Nedodržal bezpečnostné zásady pri práci s kyselinou pikrovou a NaOH (žiieravé).",
      "Nezohľadnil riedenie vzorky pri výpočte.",
      "Nesprávna likvidácia chemického odpadu.",
      "Neoveril totožnosť pacienta alebo nezaznamenal výsledok."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "vapnik-ocpc-spektrofotometria-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie vápnika spektrofotometricky OCPC metódou – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nesprávny pomer R1:R2“, „chýbajúci štandard“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť totožnosť pacienta a účel stanovenia vápnika (kalcium).",
    "Pripraviť spektrofotometer, kyvety a pracovný OCPC roztok správnym zmiešaním R1 a R2.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s biologickým materiálom.",
    "Ovládať správny postup pipetovania vzorky, štandardu a slepého vzorku.",
    "Dodržať presný inkubačný čas a teplotu pre vývoj purpurového komplexu.",
    "Zmerať absorbanciu pri správnej vlnovej dĺžke a vypočítať koncentráciu vápnika."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Skontroloval typ vzorky – sérum, plazma (heparínová) alebo moč. Vylúčil citrátovú, EDTA alebo oxalátovú plazmu."
        },
        {
          "id": "p3",
          "text": "Skontroloval exspiráciu a vzhľad reagentov R1 (OCPC) a R2 (AMP pufor) – žiadny zákal ani častice."
        },
        {
          "id": "p4",
          "text": "Pripravil pracovný roztok zmiešaním R1 a R2 v pomere 1:1 (podľa pokynov výrobcu)."
        },
        {
          "id": "p5",
          "text": "Nechal pracovný roztok a kyvety temperovať na 37 °C."
        },
        {
          "id": "p6",
          "text": "Pripravil si kalibrované pipety, špičky a čisté kyvety (1 cm)."
        },
        {
          "id": "p7",
          "text": "Pripravil slepý vzorok (destilovaná voda) a štandard vápnika (napr. 10 mg/dL / 2,5 mmol/L)."
        }
      ]
    },
    {
      "id": "bezpecnost",
      "title": "FÁZA 2 – Bezpečnosť a hygiena",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk a nasadil si jednorazové rukavice."
        },
        {
          "id": "h2",
          "text": "Použil ochranné okuliare (reagencie sú alkalické a dráždivé)."
        },
        {
          "id": "h3",
          "text": "Pracoval pri zapnutej ventilácii (8-chinolínol je toxický)."
        },
        {
          "id": "h4",
          "text": "Pripravil nádobu na chemický odpad (nie do výlevky!)."
        }
      ]
    },
    {
      "id": "pipetovanie",
      "title": "FÁZA 3 – Pipetovanie a inkubácia",
      "items": [
        {
          "id": "v1",
          "text": "Označil si tri kyvety: Slepý (Blank), Štandard (Std), Vzorka (Sample)."
        },
        {
          "id": "v2",
          "text": "Do slepého vzorku pipetoval stanovený objem destilovanej vody (napr. 50 µL)."
        },
        {
          "id": "v3",
          "text": "Do štandardu pipetoval rovnaký objem štandardu vápnika."
        },
        {
          "id": "v4",
          "text": "Do vzorky pipetoval rovnaký objem séra/plazmy alebo riedeného moču."
        },
        {
          "id": "v5",
          "text": "Do všetkých troch kyviet pridal rovnaké množstvo pracovného OCPC roztoku (napr. 1,0 mL)."
        },
        {
          "id": "v6",
          "text": "Kyvety jemne premiešal a ihneď vložil do spektrofotometra vyhriateho na 37 °C."
        },
        {
          "id": "v7",
          "text": "Spustil stopky a dodržal presný inkubačný čas (napr. 2 minúty pri izbovej teplote alebo 5 minút pri 37 °C – podľa protokolu)."
        }
      ]
    },
    {
      "id": "meranie",
      "title": "FÁZA 4 – Spektrofotometrické meranie",
      "items": [
        {
          "id": "m1",
          "text": "Nastavil vlnovú dĺžku na 570 nm (rozsah 560–580 nm)."
        },
        {
          "id": "m2",
          "text": "Vynuloval prístroj (nastavil 0 Abs) na slepý vzorok."
        },
        {
          "id": "m3",
          "text": "Odčítal absorbanciu štandardu v stanovenom čase."
        },
        {
          "id": "m4",
          "text": "Odčítal absorbanciu vzorky v stanovenom čase."
        },
        {
          "id": "m5",
          "text": "Skontroloval, či hodnoty absorbancie sú v lineárnom rozsahu (napr. do 1,8)."
        }
      ]
    },
    {
      "id": "vysledky",
      "title": "FÁZA 5 – Výpočet a dokumentácia",
      "items": [
        {
          "id": "k1",
          "text": "Vypočítal koncentráciu vápnika podľa vzorca: (A_vzorka / A_štandard) × koncentrácia štandardu."
        },
        {
          "id": "k2",
          "text": "Zohľadnil riedenie vzorky (pri moči násobil riediacim faktorom)."
        },
        {
          "id": "k3",
          "text": "Prepočítal jednotky (mg/dL na mmol/L: × 0,25; alebo mmol/L na mg/dL: × 4,0)."
        },
        {
          "id": "k4",
          "text": "Zaznamenal výsledok do dokumentácie a porovnal s referenčnými hodnotami (sérum/plazma dospelí: 8,4–10,2 mg/dL; 2,1–2,5 mmol/L)."
        },
        {
          "id": "k5",
          "text": "Zlikvidoval zvyšky vzoriek a reagentov do príslušného odpadu."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nepoužil slepý vzorok alebo nevynuloval spektrofotometer.",
      "Nesprávna vlnová dĺžka (mimo rozsahu 560–580 nm).",
      "Nedodržal presný inkubačný čas alebo teplotu.",
      "Nepripravil pracovný roztok v správnom pomere R1:R2 (1:1).",
      "Použil citrátovú, EDTA alebo oxalátovú plazmu (chelátory viažu vápnik).",
      "Použil hemolyzovanú, lipemickú alebo znečistenú vzorku.",
      "Nedodržal bezpečnostné zásady pri práci s alkalickými reagentmi.",
      "Nezohľadnil riedenie vzorky pri výpočte.",
      "Nesprávna likvidácia chemického odpadu.",
      "Neoveril totožnosť pacienta alebo nezaznamenal výsledok."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "vitamin-c-metylénová-modrá-spektrofotometria-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie vitamínu C spektrofotometricky s metylénovou modrou – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „roztok nebol čerstvý“, „nesprávny čas inkubácie“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili pacienta ani výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť princíp redoxnej reakcie medzi kyselinou askorbovou a metylénovou modrou.",
    "Pripraviť čerstvé roztoky (vzorka, štandard, metylénová modrá) a spektrofotometer.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s farbivom a biologickým materiálom.",
    "Ovládať správny postup pipetovania a nastavenia reakčných podmienok (pH, teplota, čas).",
    "Zmerať pokles absorbancie pri správnej vlnovej dĺžke (660–665 nm).",
    "Vypočítať koncentráciu vitamínu C a interpretovať výsledok."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred meraním)",
      "items": [
        {
          "id": "p1",
          "text": "Overil totožnosť pacienta a účel vyšetrenia."
        },
        {
          "id": "p2",
          "text": "Oboznámil sa s princípom: kyselina askorbová redukuje metylénovú modrú na bezfarebný leukometylén."
        },
        {
          "id": "p3",
          "text": "Pripravil si čerstvý roztok kyseliny askorbovej (štandard) – roztoky nesmú byť staré, aby nedošlo k oxidácii vzdušným kyslíkom."
        },
        {
          "id": "p4",
          "text": "Pripravil si roztok metylénovej modrej v požadovanej koncentrácii."
        },
        {
          "id": "p5",
          "text": "Pripravil si tlmivý roztok na úpravu pH (podľa protokolu, napr. kyslý alebo alkalický)."
        },
        {
          "id": "p6",
          "text": "Skontroloval, či je spektrofotometer zapnutý a nastavený na vlnovú dĺžku 660–665 nm."
        },
        {
          "id": "p7",
          "text": "Pripravil si kalibrované pipety, špičky a čisté kyvety (1 cm)."
        },
        {
          "id": "p8",
          "text": "Pripravil slepý vzorok (destilovaná voda alebo tlmivý roztok bez vzorky)."
        }
      ]
    },
    {
      "id": "bezpecnost",
      "title": "FÁZA 2 – Bezpečnosť a hygiena",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk a nasadil si jednorazové rukavice."
        },
        {
          "id": "h2",
          "text": "Použil ochranné okuliare (metylénová modrá môže dráždiť oči a pokožku)."
        },
        {
          "id": "h3",
          "text": "Pracoval tak, aby nedošlo ku kontaminácii vzorky ani pracovnej plochy."
        },
        {
          "id": "h4",
          "text": "Pripravil nádobu na chemický a biologický odpad."
        }
      ]
    },
    {
      "id": "pipetovanie",
      "title": "FÁZA 3 – Pipetovanie a reakcia",
      "items": [
        {
          "id": "v1",
          "text": "Označil si kyvety: Slepý (Blank), Štandard (Std), Vzorka (Sample)."
        },
        {
          "id": "v2",
          "text": "Do slepého vzorku pipetoval tlmivý roztok alebo destilovanú vodu."
        },
        {
          "id": "v3",
          "text": "Do štandardu pipetoval známe množstvo čerstvého roztoku kyseliny askorbovej."
        },
        {
          "id": "v4",
          "text": "Do vzorky pipetoval rovnaký objem testovaného roztoku (napr. ovocná šťava, extrakt z tabletky)."
        },
        {
          "id": "v5",
          "text": "Do všetkých troch kyviet pridal rovnaké množstvo roztoku metylénovej modrej."
        },
        {
          "id": "v6",
          "text": "Kyvety jemne premiešal a ihneď vložil do spektrofotometra."
        },
        {
          "id": "v7",
          "text": "Spustil stopky a dodržal presný reakčný čas (napr. 1–5 minút podľa protokolu)."
        }
      ]
    },
    {
      "id": "meranie",
      "title": "FÁZA 4 – Spektrofotometrické meranie",
      "items": [
        {
          "id": "m1",
          "text": "Nastavil vlnovú dĺžku na 660–665 nm."
        },
        {
          "id": "m2",
          "text": "Vynuloval prístroj (nastavil 0 Abs) na slepý vzorok."
        },
        {
          "id": "m3",
          "text": "Odčítal absorbanciu štandardu v stanovenom čase."
        },
        {
          "id": "m4",
          "text": "Odčítal absorbanciu vzorky v stanovenom čase."
        },
        {
          "id": "m5",
          "text": "Skontroloval, či hodnoty absorbancie sú v lineárnom rozsahu."
        }
      ]
    },
    {
      "id": "vysledky",
      "title": "FÁZA 5 – Výpočet a dokumentácia",
      "items": [
        {
          "id": "k1",
          "text": "Vypočítal koncentráciu vitamínu C podľa vzorca alebo kalibračnej krivky."
        },
        {
          "id": "k2",
          "text": "Zohľadnil riedenie vzorky (ak bolo potrebné)."
        },
        {
          "id": "k3",
          "text": "Prepočítal jednotky (mg/100 g alebo mg/100 mL) podľa požiadaviek."
        },
        {
          "id": "k4",
          "text": "Zaznamenal výsledok do dokumentácie a porovnal s očakávanými hodnotami."
        },
        {
          "id": "k5",
          "text": "Zlikvidoval zvyšky vzoriek a reagentov do príslušného odpadu."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Použil starý alebo zoxidovaný roztok kyseliny askorbovej (skreslenie výsledku).",
      "Nedodržal presný reakčný čas alebo teplotu.",
      "Nesprávne pH reakčnej zmesi (metylénová modrá vyžaduje špecifické pH).",
      "Neochránil roztoky metylénovej modrej pred svetlom (fotosenzitivita).",
      "Nevynuloval spektrofotometer na slepý vzorok.",
      "Nesprávna vlnová dĺžka (mimo rozsahu 660–665 nm).",
      "Nesprávna likvidácia chemického odpadu.",
      "Neoveril totožnosť pacienta alebo nezaznamenal výsledok."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},

{
  "slug": "separacia-albuminu-mlieko-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Separácia albumínu z mlieka zrážaním a centrifugáciou – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nevyvážená centrifuga“, „nezmerané pH“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť princíp izoelektrického bodu caseínu (pH 4,6) a precipitácie albumínu (teplom/vysolením).",
    "Pripraviť centrifugu, skúmavky, zrážacie činidlá a pH meter.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s biologickým materiálom a kyselinami.",
    "Ovládať správnu techniku úpravy pH a vyváženia centrifugy.",
    "Správne oddeliť supernatant (srvátku) od precipitátu (kazeínu).",
    "Izolovať albumín druhou precipitáciou a centrifugáciou, zaznamenať výsledok."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava (pred prácou)",
      "items": [
        {
          "id": "p1",
          "text": "Pripravil si čerstvé alebo konzervované mlieko (odtučnené) a vytemperoval ho na izbovú teplotu."
        },
        {
          "id": "p2",
          "text": "Pripravil si zrážacie činidlá: zriedenú kyselinu octovú (10 %) alebo HCl na úpravu pH."
        },
        {
          "id": "p3",
          "text": "Skontroloval, či je centrifuga čistá, funkčná a správne nastavená (čas, otáčky)."
        },
        {
          "id": "p4",
          "text": "Pripravil si vyvážené centrifugačné skúmavky (rovnaký typ, hmotnosť)."
        },
        {
          "id": "p5",
          "text": "Pripravil si pH meter (skalibrovaný), kadičky, pipety a sklenenú tyčinku."
        },
        {
          "id": "p6",
          "text": "Pripravil si ľadový kúpeľ alebo chladiacu nádobu na udržanie vzorky."
        }
      ]
    },
    {
      "id": "bezpecnost",
      "title": "FÁZA 2 – Bezpečnosť a hygiena",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk a nasadil si jednorazové rukavice."
        },
        {
          "id": "h2",
          "text": "Použil ochranné okuliare a plášť (kyselina octová dráždi oči a pokožku)."
        },
        {
          "id": "h3",
          "text": "Pracoval tak, aby nedošlo ku kontaminácii pracovnej plochy."
        }
      ]
    },
    {
      "id": "precipitacia1",
      "title": "FÁZA 3 – Vlastný výkon – I. precipitácia (kazeín)",
      "items": [
        {
          "id": "v1",
          "text": "Odmеral presný objem mlieka (napr. 50 mL) do kadičky."
        },
        {
          "id": "v2",
          "text": "Zohrial mlieko na cca 40 °C (urýchľuje precipitáciu, ale neprehrieval)."
        },
        {
          "id": "v3",
          "text": "Za stáleho miešania pomaly pridával kyselinu octovú po kvapkách."
        },
        {
          "id": "v4",
          "text": "Priebežne kontroloval pH pomocou pH metra."
        },
        {
          "id": "v5",
          "text": "Zastavil pridávanie kyseliny presne pri pH 4,6 (izoelektrický bod caseínu)."
        },
        {
          "id": "v6",
          "text": "Nechal zmes stáť 10–15 minút pri izbovej teplote (alebo v chlade) na dokončenie zrážania."
        }
      ]
    },
    {
      "id": "centrifugacia1",
      "title": "FÁZA 4 – Centrifugácia a II. precipitácia (albumín)",
      "items": [
        {
          "id": "c1",
          "text": "Prelial zmes do centrifugačných skúmaviek (max. 2/3 objemu)."
        },
        {
          "id": "c2",
          "text": "Dôkladne vyvážil skúmavky na analytických váhach (rozdiel max. 0,1 g)."
        },
        {
          "id": "c3",
          "text": "Vložil skúmavky do centrifugy proti sebe a spustil centrifugáciu (napr. 3000–4000 rpm, 10 minút)."
        },
        {
          "id": "c4",
          "text": "Po zastavení centrifugy opatrne vybral skúmavky (bez otrasov)."
        },
        {
          "id": "c5",
          "text": "Opatrne oddelil supernatant (srvátku s albumínom) od sedimentu (kazeínu) pomocou pipety."
        },
        {
          "id": "c6",
          "text": "Prelial supernatant do čistej kadičky a zahrial ho na 90–95 °C (tepelné zrážanie albumínu) alebo pridal síran amónny (vysolenie)."
        },
        {
          "id": "c7",
          "text": "Pozoroval vznik zákalu a vločiek (vyzrážaný albumín/globulíny)."
        },
        {
          "id": "c8",
          "text": "Zmes znova prelial do čistých skúmaviek, vyvážil a centrifugoval (napr. 4000 rpm, 10 minút)."
        }
      ]
    },
    {
      "id": "po_vykone",
      "title": "FÁZA 5 – Dokumentácia a hodnotenie",
      "items": [
        {
          "id": "k1",
          "text": "Odstránil supernatant a získal pelet (sediment) albumínu na dne skúmavky."
        },
        {
          "id": "k2",
          "text": "Zaznamenal vzhľad, farbu a množstvo izolovaného albumínu."
        },
        {
          "id": "k3",
          "text": "Zlikvidoval biologický a chemický odpad podľa predpisov."
        },
        {
          "id": "k4",
          "text": "UmyL a upratal laboratórne sklo, vykonal dezinfekciu pracovnej plochy."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Nevyvážil centrifugačné skúmavky (riziko poškodenia rotora centrifugy).",
      "Nedodržal izoelektrický bod pH 4,6 (kazeín sa úplne nevyzráža alebo sa zráža aj albumín).",
      "Zle oddelil supernatant od sedimentu (kontaminácia albumínu kazeínom).",
      "Nesprávne nastavil parametre centrifugácie (otáčky, čas).",
      "Použil príliš agresívne miešanie pri zrážaní (deštrukcia bielkovín).",
      "Nedodržal bezpečnostné zásady pri práci s kyselinou.",
      "Nezaznamenal výsledky izolácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},


{
  "slug": "dusicnany-zelenina-simulacia-hodnotenie",
  "type": "pedagogue",
  "title": "Hodnotiaci checklist pre pedagóga",
  "subtitle": "Stanovenie dusičnanov v zelenine – observačný záznam",
  "identification": [
    [
      "Dátum:",
      "Meno študenta:"
    ],
    [
      "Čas hodnotenia:",
      "Ročník / skupina:"
    ],
    [
      "Meno hodnotiaceho (pedagóg):",
      "Číslo scenára / úlohy:"
    ]
  ],
  "instructions": [
    "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
    "Každé kritérium hodnotte podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
    "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nehomogénna vzorka“, „nesprávny čas ponorenia prúžku“).",
    "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
    "Po ukončení simulácie sčítajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
  ],
  "rating_scale": {
    "title": "Hodnotiaca škála",
    "levels": [
      {
        "points": 2,
        "label": "Splnil správne",
        "description": "Úplne správne, bezpečne, samostatne, bez nápovedy."
      },
      {
        "points": 1,
        "label": "Splnil s výhradou",
        "description": "Menšie nedostatky, ktoré neohrozili výsledok."
      },
      {
        "points": 0,
        "label": "Nesplnil",
        "description": "Vynechal, vykonal nesprávne, alebo potreboval nápovedu."
      }
    ]
  },
  "objectives": [
    "Overiť správny odber a homogenizáciu reprezentatívnej vzorky zeleniny.",
    "Pripraviť extrakčný roztok a získať číry filtrát pre analýzu.",
    "Dodržať hygienické zásady a bezpečnosť pri práci s nožmi, mixérom a chemikáliami.",
    "Ovládať správnu techniku merania pomocou testovacích prúžkov a reflektometra.",
    "Dodržať presné časy reakcie a správne odčítať výsledok.",
    "Vypočítať koncentráciu dusičnanov v mg/kg a porovnať s legislatívnymi limitmi."
  ],
  "phases": [
    {
      "id": "priprava",
      "title": "FÁZA 1 – Príprava vzorky",
      "items": [
        {
          "id": "p1",
          "text": "Overil druh zeleniny (napr. listová, koreňová) a jej pôvod."
        },
        {
          "id": "p2",
          "text": "Zeleninu dôkladne umyl a osušil (odstránenie zeminy a povrchových nečistôt)."
        },
        {
          "id": "p3",
          "text": "Odobral reprezentatívnu vzorku z rôznych častí zeleniny (napr. stopka, list, koreň)."
        },
        {
          "id": "p4",
          "text": "Vzorku dôkladne zhomogenizoval (nasekal alebo rozmixoval) na jemnú kašu."
        },
        {
          "id": "p5",
          "text": "Odvážil presné množstvo homogenizovanej vzorky (napr. 10 g) na analytických váhach."
        }
      ]
    },
    {
      "id": "bezpecnost",
      "title": "FÁZA 2 – Bezpečnosť a hygiena",
      "items": [
        {
          "id": "h1",
          "text": "Vykonal hygienickú dezinfekciu rúk a nasadil si jednorazové rukavice."
        },
        {
          "id": "h2",
          "text": "Skontroloval čistotu mixéra / noža a pracovnej dosky pred použitím."
        },
        {
          "id": "h3",
          "text": "Pracoval opatrne pri manipulácii s ostrými nástrojmi."
        },
        {
          "id": "h4",
          "text": "Použil ochranné okuliare pri práci s extrakčnými a zrážacími činidlami."
        }
      ]
    },
    {
      "id": "extrakcia",
      "title": "FÁZA 3 – Extrakcia a úprava vzorky",
      "items": [
        {
          "id": "v1",
          "text": "Pridal k naváženej vzorke presný objem extrakčného roztoku (napr. destilovaná voda alebo špecifický extrakčný pufor)."
        },
        {
          "id": "v2",
          "text": "Zmes dôkladne pretrepával alebo miešal po stanovený čas (napr. 10–15 minút)."
        },
        {
          "id": "v3",
          "text": "V prípade potreby pridal zrážacie činidlo (napr. Carrez I a II) na vyzrážanie bielkovín a zakalenia."
        },
        {
          "id": "v4",
          "text": "Zmes prefiltroval cez skládaný filter alebo odstredil, aby získal číry filtrát."
        },
        {
          "id": "v5",
          "text": "Filtrát podľa potreby zriedil destilovanou vodou (podľa očakávanej koncentrácie dusičnanov)."
        }
      ]
    },
    {
      "id": "meranie",
      "title": "FÁZA 4 – Meranie dusičnanov",
      "items": [
        {
          "id": "m1",
          "text": "Zapol reflektometer (alebo spektrofotometer) a nechal ho inicializovať."
        },
        {
          "id": "m2",
          "text": "Pripravil si testovací prúžok na dusičnany a skontroloval jeho exspiráciu."
        },
        {
          "id": "m3",
          "text": "Ponoril testovací prúžok do číreho filtrátu na presne stanovený čas (napr. 1–2 sekundy)."
        },
        {
          "id": "m4",
          "text": "Odstránil prebytočnú kvapalinu z prúžku podľa pokynov výrobcu (napr. jemným otrením)."
        },
        {
          "id": "m5",
          "text": "Nechal prúžok reagovať presne stanovený čas (napr. 60 sekúnd) mimo prístroja."
        },
        {
          "id": "m6",
          "text": "Vložil prúžok do reflektometra a odčítal nameranú hodnotu."
        }
      ]
    },
    {
      "id": "vysledky",
      "title": "FÁZA 5 – Výpočet a dokumentácia",
      "items": [
        {
          "id": "k1",
          "text": "Zaznamenal nameranú koncentráciu z prístroja (zvyčajne v mg/L)."
        },
        {
          "id": "k2",
          "text": "Vypočítal obsah dusičnanov vo vzorke s ohľadom na navážku a riedenie: (c_prístroj × V_extrakcie × faktor_riedenia) / m_vzorky."
        },
        {
          "id": "k3",
          "text": "Prepočítal výsledok na mg/kg čerstvej hmotnosti zeleniny."
        },
        {
          "id": "k4",
          "text": "Porovnal výsledok s legislatívnymi limitmi (napr. špenát, šalát majú prísne limity podľa EÚ)."
        },
        {
          "id": "k5",
          "text": "Zaznamenal výsledok do dokumentácie a zlikvidoval biologický odpad."
        }
      ]
    }
  ],
  "critical_errors": {
    "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“",
    "items": [
      "Vzorka nebola reprezentatívna (odobratá len z jednej časti rastliny).",
      "Nedostatočná homogenizácia vzorky (hrudky zeleniny skresľujú extrakciu).",
      "Nesprávne naváženie vzorky alebo nepresný objem extrakčného roztoku.",
      "Získaný filtrát nebol číry (zákal znemožňuje správne meranie).",
      "Nedodržanie presného času ponorenia prúžku alebo času reakcie.",
      "Použitie exspirovaného testovacieho prúžku.",
      "Nezohľadnenie riedenia pri výpočte (výsledok je nepresný).",
      "Nezaznamenanie výsledku do dokumentácie."
    ]
  },
  "grade_table": {
    "title": "Klasifikačná tabuľka (odporúčaná)",
    "headers": [
      "Úspešnosť",
      "Klasifikácia",
      "Slovné hodnotenie"
    ],
    "rows": [
      [
        "90 – 100 %",
        "1 (výborný)",
        "Samostatný, bezpečný výkon bez chýb."
      ],
      [
        "75 – 89 %",
        "2 (chválitebný)",
        "Drobné nedostatky, bez dopadu na presnosť."
      ],
      [
        "60 – 74 %",
        "3 (dobrý)",
        "Výkon zvládnutý s pomocou, potrebná ďalšia prax."
      ],
      [
        "menej ako 60 %",
        "4 (nevyhovel)",
        "Nutný nový nácvik pod vedením."
      ],
      [
        "akákoľvek kritická chyba",
        "4 (nevyhovel)",
        "Bezpečnostné riziko – nutná reedukácia."
      ]
    ]
  },
  "feedback_sections": [
    "Silné stránky študenta",
    "Oblasti na zlepšenie",
    "Odporúčania pre ďalší nácvik"
  ],
  "reflection": {
    "title": "Záverečné hodnotenie a odporúčanie",
    "questions": [
      "Celkový dojem z výkonu študenta",
      "Odporúčanie pre ďalšiu simuláciu / prax"
    ]
  },
  "signatures": [
    "Podpis hodnotiaceho (pedagóg):",
    "Podpis študenta (oboznámenie s výsledkom):"
  ],
  "footer": "Hodnotiaci checklist slúži na objektivizáciu hodnotenia v simulovanom prostredí. Vždy sa riaďte internými predpismi pracoviska a platnými štandardmi.",
  "scoring": {
    "max_points_per_item": 2
  }
},


  {
    "slug": "vazenie-simulacia-hodnotenie",
    "title": "Hodnotiaci checklist pre pedagóga",
    "subtitle": "Váženie na laboratórnych váhach – observačný záznam simulačného výkonu",
    "instructions": [
      "Pozorujte študenta počas celej simulácie bez zasahovania. Zasahujte len v prípade ohrozenia bezpečnosti.",
      "Každé kritérium hodnotiť podľa škály 2 / 1 / 0 – zakrúžkujte alebo zaškrtnite príslušné políčko.",
      "Do stĺpca „Poznámka“ zapíšte konkrétne pozorovanie (napr. „nevyťaroval váhu“, „vážil horúci predmet“).",
      "Kritické chyby označte okamžite pri pozorovaní – majú automatický dopad na výsledné hodnotenie.",
      "Po ukončení simulácie zrátajte body, vyplňte celkové skóre, klasifikáciu a spätnú väzbu."
    ],
    "objectives": [
      "Overiť typ váhy a jej správne umiestnenie (stabilita, bez prievanu).",
      "Oboznámiť sa s maximálnou kapacitou váhy a presnosťou (rozlíšením).",
      "Osvojiť si správny postup zapnutia, kalibrácie a vytárovania.",
      "Realizovať váženie bez kontaminácie a bez ovplyvnenia výsledku (teplota, statická elektrina).",
      "Správne odčítať a zaokrúhliť nameranú hmotnosť.",
      "Bezpečne vyčistiť váhu a uviesť pracovisko do pôvodného stavu."
    ],
    "phases": [
      { "id": "priprava", "title": "FÁZA 1 – Príprava (pred vážením)", "items": [ { "id": "p1", "text": "Overil typ váhy (analytická / technická) a jej presnosť vhodnú pre úlohu." }, { "id": "p2", "text": "Skontroloval, či je váha umiestnená na stabilnom mieste bez otrasov a prievanu." }, { "id": "p3", "text": "Skontroloval maximálnu kapacitu váhy (nepreťažovať)." }, { "id": "p4", "text": "Skontroloval čistotu vážiacej misky a priestoru pod ňou." }, { "id": "p5", "text": "Pripravil vhodnú nádobu / vážiacu loďku / alobal podľa povahy vzorky." }, { "id": "p6", "text": "Overil, či vzorka nie je príliš horúca alebo studená (riziko prúdenia vzduchu)." } ] },
      { "id": "hygiena", "title": "FÁZA 2 – Hygiena a bezpečnosť", "items": [ { "id": "h1", "text": "Vykonal hygienickú dezinfekciu rúk a pracovnej plochy." }, { "id": "h2", "text": "Nasadil si jednorazové rukavice (kvôli ochrane vzorky a prevencii statickej elektriny)." }, { "id": "h3", "text": "Pri práci s práškovými chemikáliami použil vhodné OOPP (maska, okuliare)." } ] },
      { "id": "vykon", "title": "FÁZA 3 – Vlastný výkon – váženie", "items": [ { "id": "v1", "text": "Zapol váhu a nechal ju dostatočne dlho ustáliť (podľa typu váhy)." }, { "id": "v2", "text": "Vynuloval displej (TARE / 0) bez predmetu na miske." }, { "id": "v3", "text": "Pri analytickej váhe otvoril dvierka, umiestnil nádobu do stredu misky a zavrel dvierka." }, { "id": "v4", "text": "Opätovne vynuloval váhu s prázdnou nádobou (vytárovanie)." }, { "id": "v5", "text": "Pridal vzorku opatrne (mimo váhy / v uzavretom priestore) pomocou vhodného nástroja (špachtľa)." }, { "id": "v6", "text": "Zabránil rozsypaniu vzorky na misku a do vnútra váhy." }, { "id": "v7", "text": "Po ustálení hodnoty (symbol stability) odčítal hmotnosť s príslušným počtom desatinných miest." }, { "id": "v8", "text": "Vybral vzorku a nádobu bez toho, aby sa dotkol misky holou rukou (použil pinzetu / rukavice)." } ] },
      { "id": "po_vykone", "title": "FÁZA 4 – Postup po výkone", "items": [ { "id": "pv1", "text": "Odstránil prípadné zvyšky vzorky z misky (jemne, bez poškriabania)." }, { "id": "pv2", "text": "Zatvoril dvierka (ak ide o analytickú váhu) a vypol / uviedol váhu do standby režimu." }, { "id": "pv3", "text": "Uviedol pracovné miesto do pôvodného stavu a vykonal dezinfekciu." }, { "id": "pv4", "text": "Zlikvidoval prebytočný materiál podľa pravidiel (chemický / komunálny odpad)." } ] },
      { "id": "komunikacia", "title": "FÁZA 5 – Dokumentácia a komunikácia", "items": [ { "id": "k1", "text": "Zaznamenal nameranú hmotnosť do protokolu / laboratórneho denníka." }, { "id": "k2", "text": "Správne zaokrúhlil výsledok podľa presnosti váhy a požiadaviek úlohy." }, { "id": "k3", "text": "V prípade odchýlky (napr. rozsypanie) postup zopakoval alebo nahlásil." } ] }
    ],
    "critical_errors": { "title": "KRITICKÉ CHYBY – automaticky hodnotenie „nevyhovel“", "items": [ "Prekročenie maximálnej kapacity váhy (riziko poškodenia senzora).", "Váženie horúcich alebo príliš studených predmetov (skreslenie výsledku).", "Manipulácia s váhou bez zapnutia a ustálenia.", "Použitie sily alebo ostrých predmetov na čistenie misky.", "Neuzavretie dvierok analytickej váhy počas váženia (prievan).", "Presypanie chemikálie do vnútra váhy bez okamžitého nahlásenia a vyčistenia.", "Neoverenie nulovej hodnoty (TARE) pred pridaním vzorky." ] },
    "scoring": { "max_points_per_item": 2 }
  }
];