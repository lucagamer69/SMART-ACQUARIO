// FRASI DEI PESCI
// Per aggiungere una frase: scrivila tra virgolette, metti la virgola e salva.

const FRASI = {

  giulia: {
    normali: [
      "Facciamo una call?",
      "Aggiorniamoci a breve",
      "Questo pesce non è nel mio budget",
      "Ho un meeting tra 5 minuti",
      "Ti mando una mail di recap"
    ],
    mail: [
      "Un attimo, controllo le mail",
      "Solo 30 secondi, rispondo a una mail"
    ]
  },

  salvatore: {
    // Frasi dette quando passa vicino a un pesce sveglio (i tuoi titoli)
    incontro: [
      "Non Dormire",
      "Verano Zombie",
      "Zoo de Roma",
      "Attica",
      "Dope Boys",
      "My Love Song",
      "Game Over",
      "Mosche Nere",
      "Desperados",
      "Borotalco",
      "Puro Bogotà",
      "Mi Fist",
      "Note Killer",
      "All'ultimo respiro",
      "D.O.G.O.",
      "Spacco tutto",
      "Ciao proprio",
      "Chissenefrega",
      "Brucia ancora",
      "Una volta sola",
      "Brivido",
      "Eravamo re",
      "Mollami",
      "Lifestyle",
      "Le bimbe piangono",
      "Vero",
      "Tuta Maphia",
      "Chico",
      "Cookies N' Cream",
      "Lamborghini",
      "Leggenda",
      "Sempre grezzo",
      "Tutti quanti",
      "L'uscita",
      "Non basta",
      "A pieno titolo",
      "La gente",
      "Rock 'n' Roll",
      "Cose preziose",
      "La verità",
      "Bolo by Night",
      "Applausi per Fibra",
      "Badabum Cha Cha",
      "Terrone",
      "Pistorius",
      "Come ti fa",
      "Russell Crowe",
      "Il cielo nella stanza",
      "Una vita in vacanza",
      "King Kong"
    ],

    // Frasi a caso mentre dorme (inventate, modificale pure)
    sonno: [
      "...no, il cavo era verde...",
      "...cinque minuti ancora...",
      "...prendimi il panino...",
      "...ho già pagato io...",
      "...zzz... fratè, il treno...",
      "...no, la pizza senza cipolla..."
    ],

    // Frasi mentre pulisce l'acquario (inventate)
    pulizie: [
      "Ora sistemo qui",
      "Un po' di spray e torna come nuovo",
      "Questo vetro lo faccio brillare"
    ]
  },

  ciccio: {
    // Quando incontra un pesce qualsiasi
    xfactor: [
      "Ieri a X Factor ho sistemato un audio pazzesco...",
      "Sì, sto lavorando a X Factor, ma niente, tranquillo",
      "Ne parlavo con quelli di X Factor...",
      "Ti voglio bene, lo sai?",
      "Vieni qui che ti faccio sentire un mix"
    ],
    // Quando incontra Nemesi
    nemesi: [
      "Nemesi, sei un coglione",
      "Ancora tu? Sei un coglione",
      "Questo beat l'ho fatto io, non tu",
      "...vabbè, dai, ti voglio bene lo stesso"
    ],
    // Mentre sistema cavi e audio
    cavi: [
      "Questo rimbombo non lo sopporto",
      "Chi ha toccato i cavi?",
      "Un attimo, sistemo l'audio",
      "Troppo riverbero qui dentro",
      "Cavo a posto, acquario salvo"
    ]
  },

  nemesi: {
    // Frase preferita e frasi quando sale sulla modus:
    // incolla qui tu i versi che vuoi (io non scrivo testi di canzoni)
    preferita: [
      // "incolla qui la frase preferita",
    ],
    modus: [
      // "incolla qui la frase quando sale sulla modus",
    ],

    // Mentre nuota su e giù
    occhi: [
      "Ho il fumo negli occhi",
      "Fuoco negli occhi",
      "Guardami negli occhi"
    ],

    // Quando sta con Ciccio
    conCiccio: [
      "Ciccio, facciamo una j?",
      "Fra, ma l'acqua è bagnata?",
      "Aspetta, avevo un'idea... l'ho persa",
      "Questo beat mi sta parlando",
      "Ciccio, ti voglio bene solo a te"
    ],

    // Quando incontra Ciccio per litigare
    litigio: [
      "Ciccio, il beat l'ho fatto io",
      "Tu sistemi i cavi, io faccio la musica"
    ],

    // Raramente, quando incontra Salvatore
    bene: [
      "Ti voglio bene solo a Ciccio... e a Salvo"
    ]
  },

  gullotta: {
    // Frasi del sindaco mentre sfreccia
    sindaco: [
      "L'opposizione!!",
      "È tutta colpa dell'opposizione!!",
      "Ripareremo le buche!",
      "Le buche saranno sistemate... entro fine mandato",
      "Cittadini, vi ascolto (in bici)",
      "Domani taglio del nastro!",
      "Ho presentato una mozione",
      "Più piste ciclabili per tutti!",
      "La giunta ha deciso: si va più veloci",
      "Questa buca ha un nome e un cognome: l'opposizione"
    ],

    // Insulti dei pesci quando passa il sindaco (tutti i pesci)
    insultatoDa: [
      "Bruotti!",
      "Brutto ciclista!",
      "Scendi da quella bici!",
      "Ma ti sembra il posto per la bici?",
      "Rallenta, sindaco della domenica!",
      "Hai il campanello ma non la coscienza!",
      "Vai a pedalare in Olanda!",
      "E le buche le ripari tu, eh?",
      "Pedala, pedala, ma non ti vota nessuno",
      "Sindaco dei miei stivali!",
      "Chi ti ha dato la patente da ciclista?",
      "Torna sulla pista ciclabile!",
      "Din din din, dindolo da qui!",
      "Casco in testa e cervello in vacanza",
      "Ti piacciono le salite? Ti auguro solo quelle",
      "Ma chi ti conosce?",
      "Mi hai tagliato la strada, sindaco!",
      "Il Tour de France è un'altra cosa",
      "Ti manca solo il triciclo!",
      "Vergogna! Vergogna!"
    ]
  },

  // Frasi per giorno della settimana (0 = domenica ... 6 = sabato)
  giorni: {
    0: ["Domenica: oggi non si lavora (forse)", "Giornata calma in vasca...", "Pranzo della domenica!"],
    1: ["Lunedì... ancora lunedì", "Settimana nuova, stessi pesci", "Chi ha messo la sveglia?"],
    2: ["Martedì: la giornata ingrana", "Siamo a un terzo della settimana"],
    3: ["Mercoledì: metà settimana", "Gobba della settimana superata"],
    4: ["Giovedì: quasi quasi è venerdì", "Domani è venerdì!"],
    5: ["Venerdì! Aperitivo?", "Ultimo sforzo prima del weekend"],
    6: ["Sabato: si fa il bagno (sempre)", "Sabato sera in vasca"]
  },

  // Cosa fanno durante la giornata (da = ora di inizio, a = ora di fine)
  routine: {
    giulia: [
      {da: 9, a: 13, f: ["Riunione di allineamento", "Ho 3 call oggi", "Sto finendo il report"]},
      {da: 13, a: 14.5, f: ["Pranzo di lavoro (solo alghe)"]},
      {da: 15, a: 19, f: ["Call alle 16, non muovetevi", "Mail urgente!"]}
    ],
    salvatore: [
      {da: 6.5, a: 11, f: ["Troppo presto...", "Caffè... dov'è il caffè...", "Ancora cinque minuti..."]},
      {da: 14, a: 16, f: ["Pisolino strategico", "Ora di digestione..."]}
    ],
    ciccio: [
      {da: 9, a: 13, f: ["Soundcheck in corso", "Questo kick rimbomba!"]},
      {da: 15, a: 20, f: ["Sto mixando, non disturbare", "Ultimo cavo e ho finito"]}
    ],
    nemesi: [
      {da: 10, a: 19, f: ["Beat in lavorazione", "Ciccio, ascolta questo"]},
      {da: 19, a: 23, f: ["Sessione notturna", "Si registra stasera"]}
    ],
    gullotta: [
      {da: 8, a: 12, f: ["Inaugurazione di una buca!", "Consiglio comunale: l'opposizione!!"]},
      {da: 12, a: 19, f: ["Giro d'ispezione in bici", "Sopralluogo alle buche"]}
    ]
  },

  // Frasi quando arriva il cibo (tocca l'orologio, oppure alle 8, 13 e 20)
  pasto: {
    giulia: ["Pausa pranzo: 10 minuti", "Mangio e rispondo alle mail"],
    salvatore: ["...finalmente si mangia...", "Mangio e poi dormo"],
    ciccio: ["Stacco i cavi e mangio", "A tavola!"],
    nemesi: ["Ciccio, mangia anche tu", "Questa è musica per il mio stomaco"]
  },

  // Piccole conversazioni quando due pesci sono vicini: [chi, frase, chi risponde, risposta]
  dialoghi: [
    ["giulia", "Salvo, abbiamo una call!", "salvatore", "...cinque minuti ancora..."],
    ["ciccio", "Nemesi, hai toccato i cavi?", "nemesi", "No... forse..."],
    ["nemesi", "Ciccio, ascolta questo beat", "ciccio", "Troppo riverbero, rifallo"],
    ["giulia", "Facciamo un allineamento?", "ciccio", "Ho il soundcheck, mandami una mail"],
    ["salvatore", "Zzz... Giulia, il treno...", "giulia", "Salvo, sei in acqua"],
    ["gullotta", "Sistemeremo le buche!", "nemesi", "Sindaco, è l'acqua!"]
  ],

  // Messaggi nella bottiglia (easter egg)
  bottiglia: [
    "Ricordati di respirare (le branchie contano)",
    "Oggi è andata bene.",
    "Il tesoro è sotto la Modus",
    "Fai una pausa, l'acqua aspetta",
    "Ciao dal passato: va tutto bene",
    "Sei qui, e basta questo"
  ]
};
