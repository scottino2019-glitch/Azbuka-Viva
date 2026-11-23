import { ExceptionFamily } from '../types/alphabet';

export const EXCEPTIONS_COMPENDIUM: ExceptionFamily[] = [
  {
    id: 'false-friends',
    title: '1. I 7 Falsi Amici (Sembrano latine, ma suonano diverso!)',
    subtitle: 'Lettere gemelle nella forma, ma con un suono completamente nuovo',
    teacherSummary:
      'Quando inizi a leggere il russo, il cervello prova a leggere queste lettere come in italiano. Impara questi 7 "travestimenti" e leggerai subito il 90% dei cartelli senza errori!',
    rules: [
      {
        id: 'ff-main',
        heading: 'La lista dei 7 Falsi Amici',
        lettersInvolved: ['В', 'Е', 'Н', 'Р', 'С', 'У', 'Х'],
        explanationIt:
          'В si legge V (non B) · Е si legge YE/E · Н si legge N (non H!) · Р si legge R (non P!) · С si legge S (non C!) · У si legge U (non Y!) · Х si legge KH aspirata (non X/ks!).',
        examples: [
          { written: 'Рестора́н', readAs: 'ri-sta-RÀN', meaningIt: 'Ristorante (Р=R, С=S, Н=N)', ttsRu: 'Ресторан' },
          { written: 'Вене́ция', readAs: 'vi-NÈ-tsy-ya', meaningIt: 'Venezia (В=V, Н=N)', ttsRu: 'Венеция' },
          { written: 'Су́п', readAs: 'sup', meaningIt: 'Zuppa (С=S, У=U)', ttsRu: 'Суп' },
          { written: 'Хорошо́', readAs: 'kha-ra-SHÒ', meaningIt: 'Bene (Х=KH)', ttsRu: 'Хорошо' }
        ]
      }
    ]
  },
  {
    id: 'vowel-reduction',
    title: '2. Riduzione delle Vocali (L\'accento comanda tutto!)',
    subtitle: 'Perché О si legge A e Е/Я si leggono I quando non sono accentate',
    teacherSummary:
      'In russo l\'accento è fortissimo: la vocale accentata brilla chiara e lunga, mentre О, Е e Я senza accento si rilassano e cambiano suono!',
    rules: [
      {
        id: 'akanye',
        heading: 'L\'Akan\'e: О atona diventa A',
        lettersInvolved: ['О', 'А'],
        explanationIt:
          'Ogni О che NON ha l\'accento si pronuncia come una A (più chiara subito prima dell\'accento, più breve nelle altre posizioni).',
        examples: [
          { written: 'молоко́', readAs: 'ma-la-KÒ', meaningIt: 'latte', ttsRu: 'молоко' },
          { written: 'окно́', readAs: 'ak-NÒ', meaningIt: 'finestra', ttsRu: 'окно' },
          { written: 'спаси́бо', readAs: 'spa-SÌ-ba', meaningIt: 'grazie', ttsRu: 'спасибо' }
        ]
      },
      {
        id: 'ikanye',
        heading: 'L\'Ikan\'e: Е e Я atone diventano I',
        lettersInvolved: ['Е', 'Я'],
        explanationIt:
          'Quando Е o Я non portano l\'accento (specialmente prima della sillaba tonica), scivolano verso il suono "i" o "yi".',
        examples: [
          { written: 'весна́', readAs: 'vis-NÀ', meaningIt: 'primavera', ttsRu: 'весна' },
          { written: 'язы́к', readAs: 'yi-ZÝK', meaningIt: 'lingua', ttsRu: 'язык' },
          { written: 'де́вять', readAs: 'DÈ-vit\'', meaningIt: 'nove', ttsRu: 'девять' }
        ]
      },
      {
        id: 'yo-always-stressed',
        heading: 'Il segreto di Ё: sempre accentata!',
        lettersInvolved: ['Ё'],
        explanationIt:
          'La Ё porta sempre l\'accento della parola e non si riduce mai. Attenzione: nei libri per adulti i due puntini spesso spariscono e viene stampata come Е!',
        examples: [
          { written: 'всё vs все', readAs: 'fs\'o / fse', meaningIt: 'tutto / tutti', ttsRu: 'всё, все' },
          { written: 'самолёт', readAs: 'sa-ma-L\'ÒT', meaningIt: 'aeroplano', ttsRu: 'самолёт' }
        ]
      }
    ]
  },
  {
    id: 'devoicing-assimilation',
    title: '3. Assordimento Finale e Assimilazione tra Consonanti',
    subtitle: 'Quando le consonanti sonore "spengono" o "accendono" la voce',
    teacherSummary:
      'In italiano diciamo "nord" con la D viva fino alla fine. In russo invece, in fondo alla parola la voce si spegne e le coppie gemelle cambiano suono!',
    rules: [
      {
        id: 'final-devoicing',
        heading: 'Le 6 coppie che si spengono in fine di parola',
        lettersInvolved: ['Б', 'В', 'Г', 'Д', 'Ж', 'З'],
        explanationIt:
          'Alla fine di una parola (o prima di una consonante sorda): Б→П · В→Ф · Г→К · Д→Т · Ж→Ш · З→С.',
        examples: [
          { written: 'хле́б', readAs: 'khlep (Б→П)', meaningIt: 'pane', ttsRu: 'хлеб' },
          { written: 'ле́в', readAs: 'lef (В→Ф)', meaningIt: 'leone', ttsRu: 'лев' },
          { written: 'сне́г', readAs: 'snek (Г→К)', meaningIt: 'neve', ttsRu: 'снег' },
          { written: 'са́д', readAs: 'sat (Д→Т)', meaningIt: 'giardino', ttsRu: 'сад' },
          { written: 'но́ж', readAs: 'nosh (Ж→Ш)', meaningIt: 'coltello', ttsRu: 'нож' },
          { written: 'гла́з', readAs: 'glas (З→С)', meaningIt: 'occhio', ttsRu: 'глаз' }
        ]
      },
      {
        id: 'regressive-voicing',
        heading: 'Contagio tra consonanti vicine (vince sempre la seconda!)',
        lettersInvolved: ['К', 'С', 'В', 'Б', 'Д'],
        explanationIt:
          'Se due consonanti si toccano, la seconda contagia la prima: una sorda prima di una sonora diventa sonora (вокзал → vag-ZÀL), una sonora prima di una sorda si spegne (вторник → FTÒR-nik).',
        examples: [
          { written: 'вокза́л', readAs: 'vag-ZÀL (К→Г)', meaningIt: 'stazione', ttsRu: 'вокзал' },
          { written: 'сде́лать', readAs: 'ZDÈ-lat\' (С→З)', meaningIt: 'fare', ttsRu: 'сделать' },
          { written: 'вто́рник', readAs: 'FTÒR-nik (В→Ф)', meaningIt: 'martedì', ttsRu: 'вторник' },
          { written: 'ло́дка', readAs: 'LÒT-ka (Д→Т)', meaningIt: 'barca', ttsRu: 'лодка' }
        ]
      }
    ]
  },
  {
    id: 'hard-soft-always',
    title: '4. Consonanti Sempre Dure (Ж, Ш, Ц) e Sempre Dolci (Й, Ч, Щ)',
    subtitle: 'Le 6 ribelli che non cambiano mai carattere, qualunque vocale ci sia dopo!',
    teacherSummary:
      'Quasi tutte le consonanti russe possono essere dure o dolci. Ma 3 restano dure per sempre e 3 restano dolci per sempre, creando famose eccezioni di lettura e scrittura.',
    rules: [
      {
        id: 'always-hard-rule',
        heading: 'Ж, Ш, Ц sempre dure: ЖИ/ШИ/ЦИ si leggono con Ы!',
        lettersInvolved: ['Ж', 'Ш', 'Ц', 'И'],
        explanationIt:
          'Anche se dopo Ж, Ш o Ц vedi scritta una И (o una Е o una Ь), non addolcirle mai! La И suona profonda come una Ы.',
        examples: [
          { written: 'жира́ф', readAs: 'zhy-RÀF', meaningIt: 'giraffa', ttsRu: 'жираф' },
          { written: 'маши́на', readAs: 'ma-SHÝ-na', meaningIt: 'automobile', ttsRu: 'машина' },
          { written: 'ци́рк', readAs: 'tsyrk', meaningIt: 'circo', ttsRu: 'цирк' },
          { written: 'мы́шь', readAs: 'mysh (la Ь non addolcisce Ш!)', meaningIt: 'topo', ttsRu: 'мышь' }
        ]
      },
      {
        id: 'always-soft-rule',
        heading: 'Й, Ч, Щ sempre dolci: regola ЧА-ЩА e ЧУ-ЩУ',
        lettersInvolved: ['Й', 'Ч', 'Щ', 'А', 'У'],
        explanationIt:
          'Poiché Ч e Щ sono già dolcissime di natura, l\'ortografia russa impone di scrivere sempre ЧА/ЩА e ЧУ/ЩУ (mai ЧЯ, ЩЯ, ЧЮ, ЩЮ).',
        examples: [
          { written: 'ча́шка', readAs: 'CHÀSH-ka', meaningIt: 'tazza', ttsRu: 'чашка' },
          { written: 'щу́ка', readAs: 'SHCHÙ-ka', meaningIt: 'luccio', ttsRu: 'щука' }
        ]
      }
    ]
  },
  {
    id: 'famous-irregularities',
    title: '5. Eccezioni Celebri e Lettere Mute da Sapere a Memoria',
    subtitle: 'Parole quotidiane che ogni vero insegnante ti fa cerchiare subito in rosso',
    teacherSummary:
      'Ci sono poche parole frequentissime in russo che hanno una pronuncia storica speciale. Imparandole subito sembrerai già molto più naturale!',
    rules: [
      {
        id: 'genitive-ogo',
        heading: 'Г si legge V nelle desinenze -ОГО / -ЕГО e in "сегодня"',
        lettersInvolved: ['Г', 'В'],
        explanationIt:
          'Nei pronomi, aggettivi al genitivo e nella parola "oggi" (сегодня), la Г suona come una V perfetta.',
        examples: [
          { written: 'сего́дня', readAs: 'si-VÒD-nya', meaningIt: 'oggi', ttsRu: 'сегодня' },
          { written: 'ничего́', readAs: 'ni-chi-VÒ', meaningIt: 'niente / tutto ok', ttsRu: 'ничего' },
          { written: 'кого́', readAs: 'ka-VÒ', meaningIt: 'chi (ogg.)', ttsRu: 'кого' }
        ]
      },
      {
        id: 'chto-konechno',
        heading: 'ЧТ → ШТ (что) e ЧН → ШН (конечно, скучно)',
        lettersInvolved: ['Ч', 'Ш'],
        explanationIt:
          'In "что" (cosa) e "чтобы" (affinché) si dice SHTO. In "конечно" (certo), "скучно" (noioso) e "яичница" si dice SHN.',
        examples: [
          { written: 'что́', readAs: 'shto', meaningIt: 'che cosa', ttsRu: 'что' },
          { written: 'коне́чно', readAs: 'ka-NÈSH-na', meaningIt: 'certamente', ttsRu: 'конечно' },
          { written: 'ску́чно', readAs: 'SKÙSH-na', meaningIt: 'noioso', ttsRu: 'скучно' }
        ]
      },
      {
        id: 'silent-clusters',
        heading: 'Consonanti mute nei gruppi affollati e -ТСЯ/-ТЬСЯ → ЦА',
        lettersInvolved: ['В', 'Д', 'Л', 'Т'],
        explanationIt:
          'Quando tre o quattro consonanti si ammassano insieme, una cade: Л in солнце, la prima В in здравствуйте, Д in сердце, Т in лестница/грустный. E i verbi in -тся/-ться si leggono -tsa!',
        examples: [
          { written: 'со́лнце', readAs: 'SÒN-tse (Л muta)', meaningIt: 'sole', ttsRu: 'солнце' },
          { written: 'здра́вствуйте', readAs: 'ZDRÀ-stvuy-tye (1ª В muta)', meaningIt: 'buongiorno', ttsRu: 'здравствуйте' },
          { written: 'се́рдце', readAs: 'SÈR-tse (Д muta)', meaningIt: 'cuore', ttsRu: 'сердце' },
          { written: 'ле́стница', readAs: 'LÈS-ni-tsa (Т muta)', meaningIt: 'scala', ttsRu: 'лестница' },
          { written: 'учи́ться', readAs: 'u-CHÌT-tsa', meaningIt: 'studiare', ttsRu: 'учиться' }
        ]
      }
    ]
  },
  {
    id: 'cursive-traps',
    title: '6. Le Trappole del Corsivo Russo (Пропись)',
    subtitle: 'Lettere che scritte a mano sembrano tutt\'altro!',
    teacherSummary:
      'Se leggi un biglietto scritto a mano, un\'insegna elegante o un font corsivo, fai molta attenzione a queste 5 lettere furbe!',
    rules: [
      {
        id: 'cursive-lookalikes',
        heading: 'Attenzione a т, п, д, г, и in corsivo!',
        lettersInvolved: ['Т', 'П', 'Д', 'Г', 'И'],
        explanationIt:
          'In corsivo: т minuscola sembra una "m" · п minuscola sembra una "n" · д minuscola sembra una "g" · г minuscola sembra una "r" · и minuscola sembra una "u"!',
        examples: [
          { written: 'приве́т', readAs: 'pri-VÈT (п=n, и=u, т=m!)', meaningIt: 'ciao', ttsRu: 'привет' },
          { written: 'дру́г', readAs: 'druk (д=g, г=r)', meaningIt: 'amico', ttsRu: 'друг' }
        ]
      }
    ]
  }
];
