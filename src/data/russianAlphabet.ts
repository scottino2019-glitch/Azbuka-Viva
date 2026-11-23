import { RussianLetter } from '../types/alphabet';

export const RUSSIAN_ALPHABET: RussianLetter[] = [
  {
    index: 1,
    uppercase: 'А',
    lowercase: 'а',
    nameRu: 'А',
    nameTtsRu: 'а',
    namePhoneticIt: 'a',
    soundTtsRu: 'ааа',
    category: 'vowel',
    hardness: 'hard-indicator',
    hardnessLabel: 'Vocale dura',
    isFalseFriend: false,
    soundIt: 'A aperta e limpida, come in "casa" o "mare"',
    ipa: '[a]',
    cursiveNote: 'Identica alla nostra A corsiva maiuscola e minuscola.',
    mnemonic: {
      wordRu: 'Арбуз',
      wordStressed: 'Арбу́з',
      ttsRu: 'Арбуз',
      phoneticIt: 'ar-BÙS',
      wordIt: 'Anguria',
      visualTrick: 'Guarda la А maiuscola: sembra proprio una fetta triangolare di anguria rossa o una tenda da campeggio!'
    },
    teacherLesson: {
      intro: 'Benvenuto alla prima lettera! La А russa è la nostra migliore amica: si scrive e si legge proprio come la A italiana.',
      mouthTip: 'Apri bene la bocca e lascia uscire la voce libera: Aaa! Quando non ha l\'accento diventa un pochino più corta e rilassata, ma resta sempre una A.',
      comparisonIt: 'Identica alla A di "albero" e "mamma".'
    },
    syllables: [
      { syllable: 'МА', ttsRu: 'ма', phoneticIt: 'ma' },
      { syllable: 'ПА', ttsRu: 'па', phoneticIt: 'pa' },
      { syllable: 'БА', ttsRu: 'ба', phoneticIt: 'ba' },
      { syllable: 'ДА', ttsRu: 'да', phoneticIt: 'da (sì!)' },
      { syllable: 'НА', ttsRu: 'на', phoneticIt: 'na' }
    ],
    examples: [
      {
        displayRu: 'Арбу́з',
        ttsRu: 'Арбуз',
        phoneticIt: 'ar-BÙS',
        meaningIt: 'Anguria',
        noteIt: 'Nota la З finale che si legge S!'
      },
      {
        displayRu: 'А́ист',
        ttsRu: 'Аист',
        phoneticIt: 'À-ist',
        meaningIt: 'Cicogna'
      },
      {
        displayRu: 'Анана́с',
        ttsRu: 'Ананас',
        phoneticIt: 'a-na-NÀS',
        meaningIt: 'Ananas',
        noteIt: 'Le prime due А sono atone (brevi), l\'ultima è accentata.'
      }
    ],
    miniPhrase: {
      displayRu: 'У ма́мы вку́сный арбу́з.',
      ttsRu: 'У мамы вкусный арбуз.',
      phoneticIt: 'u MÀ-my VKÙS-nyy ar-BÙS',
      meaningIt: 'La mamma ha una buona anguria.'
    },
    exceptions: [
      {
        title: 'La А dopo le sibilanti Ч e Щ (regola di scrittura)',
        ruleSummary: 'Si scrive sempre ЧА e ЩА, mai ЧЯ o ЩЯ',
        explanationIt: 'In russo le consonanti Ч (ci) e Щ (sc lunga) sono sempre morbide, quindi per legge ortografica si scrivono solo con la А (e mai con Я). Il suono resta morbido.',
        examples: [
          {
            written: 'чашка',
            stressed: 'ча́шка',
            readAs: 'CHÀSH-ka',
            meaningIt: 'tazza',
            ttsRu: 'чашка'
          },
          {
            written: 'часы',
            stressed: 'часы́',
            readAs: 'chi-SÝ',
            meaningIt: 'orologio (A atona dopo Ч tende a "i"!)',
            ttsRu: 'часы'
          }
        ]
      },
      {
        title: 'А atona dopo Ж, Ш, Ч, Щ',
        ruleSummary: 'Quando non è accentata dopo Ж, Ш, Ч, Щ suona leggermente chiusa',
        explanationIt: 'In parole come "часы" (orologio) o "жалеть" (dispiacersi), la А non accentata si avvicina a un suono breve tra "i" ed "e" (dopo Ч/Щ) o verso "y" (dopo Ж/Ш).',
        examples: [
          {
            written: 'часы',
            stressed: 'часы́',
            readAs: 'chi-SÝ',
            meaningIt: 'orologio',
            ttsRu: 'часы'
          },
          {
            written: 'лошадей',
            stressed: 'лошаде́й',
            readAs: 'la-shy-DÈY',
            meaningIt: 'dei cavalli',
            ttsRu: 'лошадей'
          }
        ]
      }
    ]
  },
  {
    index: 2,
    uppercase: 'Б',
    lowercase: 'б',
    nameRu: 'Бэ',
    nameTtsRu: 'бэ',
    namePhoneticIt: 'bè',
    soundTtsRu: 'б',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'B come in "bambino" — attenzione, non è la В!',
    ipa: '[b] / [bʲ]',
    cursiveNote: 'La maiuscola ha un ricciolo superiore elegante; la minuscola sembra una "d" con la coda piegata in su a destra.',
    mnemonic: {
      wordRu: 'Бабочка',
      wordStressed: 'Ба́бочка',
      ttsRu: 'Бабочка',
      phoneticIt: 'BÀ-bach-ka',
      wordIt: 'Farfalla',
      visualTrick: 'La Б ha un bel pancione rotondo in basso e un tettuccio sopra, proprio come una farfalla con le ali aperte!'
    },
    teacherLesson: {
      intro: 'Ecco la Б, la vera lettera B del russo! Molti principianti la confondono con la В che viene subito dopo, ma la Б è quella col pancione solo in basso.',
      mouthTip: 'Chiudi entrambe le labbra e poi aprile di colpo facendo vibrare la voce: B-b-b!',
      comparisonIt: 'Identica alla B italiana di "barca" e "banana".'
    },
    syllables: [
      { syllable: 'БА', ttsRu: 'ба', phoneticIt: 'ba' },
      { syllable: 'БО', ttsRu: 'бо', phoneticIt: 'bo' },
      { syllable: 'БУ', ttsRu: 'бу', phoneticIt: 'bu' },
      { syllable: 'БЫ', ttsRu: 'бы', phoneticIt: 'by' },
      { syllable: 'БЯ', ttsRu: 'бя', phoneticIt: 'bja (B dolce!)' }
    ],
    examples: [
      {
        displayRu: 'Ба́бочка',
        ttsRu: 'Бабочка',
        phoneticIt: 'BÀ-bach-ka',
        meaningIt: 'Farfalla'
      },
      {
        displayRu: 'Бана́н',
        ttsRu: 'Банан',
        phoneticIt: 'ba-NÀN',
        meaningIt: 'Banana'
      },
      {
        displayRu: 'Бе́лка',
        ttsRu: 'Белка',
        phoneticIt: 'BÈL-ka',
        meaningIt: 'Scoiattolo',
        noteIt: 'Qui la Е ammorbidisce la Б.'
      }
    ],
    miniPhrase: {
      displayRu: 'Бе́лая ба́бочка лети́т.',
      ttsRu: 'Белая бабочка летит.',
      phoneticIt: 'BÈ-la-ya BÀ-bach-ka li-TÌT',
      meaningIt: 'La farfalla bianca vola.'
    },
    exceptions: [
      {
        title: 'Assordimento finale: Б diventa П!',
        ruleSummary: 'In fine di parola la Б perde la vibrazione e si legge П (P)',
        explanationIt: 'Regola fondamentale del russo: le consonanti sonore alla fine di una parola si spengono. Quindi se una parola finisce con Б, si scrive Б ma si pronuncia P!',
        examples: [
          {
            written: 'хлеб',
            stressed: 'хле́б',
            readAs: 'khlep (NON khleb!)',
            meaningIt: 'pane',
            ttsRu: 'хлеб'
          },
          {
            written: 'дуб',
            stressed: 'ду́б',
            readAs: 'dup',
            meaningIt: 'quercia',
            ttsRu: 'дуб'
          },
          {
            written: 'зуб',
            stressed: 'зу́б',
            readAs: 'zup',
            meaningIt: 'dente',
            ttsRu: 'зуб'
          }
        ]
      },
      {
        title: 'Assimilazione davanti a consonante sorda',
        ruleSummary: 'Davanti a К, П, Т, С, Ш, Ф la Б suona come П',
        explanationIt: 'Se dopo la Б c\'è subito una consonante "sorda" (senza vibrazione), la Б si trasforma in una P per facilitare la pronuncia.',
        examples: [
          {
            written: 'рыбка',
            stressed: 'ры́бка',
            readAs: 'RÝP-ka',
            meaningIt: 'pesciolino',
            ttsRu: 'рыбка'
          },
          {
            written: 'юбка',
            stressed: 'ю́бка',
            readAs: 'YÙP-ka',
            meaningIt: 'gonna',
            ttsRu: 'юбка'
          }
        ]
      }
    ]
  },
  {
    index: 3,
    uppercase: 'В',
    lowercase: 'в',
    nameRu: 'Вэ',
    nameTtsRu: 'вэ',
    namePhoneticIt: 'vè',
    soundTtsRu: 'в',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: true,
    falseFriendWarning: 'Falso amico! Sembra una B latina, ma si legge V come "vela"!',
    soundIt: 'V come in "vento" o "vino" (MAI B!)',
    ipa: '[v] / [vʲ]',
    cursiveNote: 'La В corsiva maiuscola sembra una B; la minuscola ha un occhiello in alto come una piccola "b" sinuosa.',
    mnemonic: {
      wordRu: 'Волк',
      wordStressed: 'Во́лк',
      ttsRu: 'Волк',
      phoneticIt: 'volk',
      wordIt: 'Lupo',
      visualTrick: 'Pensa a due V arrotondate una sopra l\'altra: soffia il Vento tra i denti come un lupo che ulula: Vvv!'
    },
    teacherLesson: {
      intro: 'Attenzione, ecco il nostro primo "falso amico"! La lettera В sembra identica alla nostra B, vero? Invece in russo si legge V, come "vela" o "verde"!',
      mouthTip: 'Appoggia leggermente i denti superiori sul labbro inferiore e fai uscire l\'aria vibrando: Vvvv!',
      comparisonIt: 'Come la V italiana di "vaso", mai come la B di "barca".'
    },
    syllables: [
      { syllable: 'ВА', ttsRu: 'ва', phoneticIt: 'va' },
      { syllable: 'ВО', ttsRu: 'во', phoneticIt: 'vo' },
      { syllable: 'ВУ', ttsRu: 'ву', phoneticIt: 'vu' },
      { syllable: 'ВЫ', ttsRu: 'вы', phoneticIt: 'vy (voi!)' },
      { syllable: 'ВИ', ttsRu: 'ви', phoneticIt: 'vi (V dolce)' }
    ],
    examples: [
      {
        displayRu: 'Во́лк',
        ttsRu: 'Волк',
        phoneticIt: 'volk',
        meaningIt: 'Lupo'
      },
      {
        displayRu: 'Вода́',
        ttsRu: 'Вода',
        phoneticIt: 'va-DÀ',
        meaningIt: 'Acqua',
        noteIt: 'Ricorda: la О senza accento diventa A!'
      },
      {
        displayRu: 'Ви́шня',
        ttsRu: 'Вишня',
        phoneticIt: 'VÌSH-nya',
        meaningIt: 'Ciliegia'
      }
    ],
    miniPhrase: {
      displayRu: 'Во́лк пьёт хо́лодную во́ду.',
      ttsRu: 'Волк пьёт холодную воду.',
      phoneticIt: 'volk p\'yot kha-LÒD-nu-yu VÒ-du',
      meaningIt: 'Il lupo beve acqua fredda.'
    },
    exceptions: [
      {
        title: 'Assordimento: В diventa Ф (F)!',
        ruleSummary: 'In fine di parola o davanti a consonante sorda si legge Ф (F)',
        explanationIt: 'Proprio come la Б diventa П, la В alla fine della parola o prima di una consonante sorda (П, Т, К, С, Ш) si trasforma in F!',
        examples: [
          {
            written: 'лев',
            stressed: 'ле́в',
            readAs: 'lef (NON lev!)',
            meaningIt: 'leone',
            ttsRu: 'лев'
          },
          {
            written: 'вторник',
            stressed: 'вто́рник',
            readAs: 'FTÒR-nik',
            meaningIt: 'martedì',
            ttsRu: 'вторник'
          },
          {
            written: 'завтрак',
            stressed: 'за́втрак',
            readAs: 'ZÀF-trak',
            meaningIt: 'colazione',
            ttsRu: 'завтрак'
          }
        ]
      },
      {
        title: 'La В muta in "здравствуйте"',
        ruleSummary: 'Nella parola "здравствуйте" la prima В non si pronuncia!',
        explanationIt: 'Nel saluto formale russo più famoso, ci sono troppe consonanti vicine (вств): i russi per comodità non pronunciano mai la prima В.',
        examples: [
          {
            written: 'здравствуйте',
            stressed: 'здра́вствуйте',
            readAs: 'ZDRÀ-stvuy-tye',
            meaningIt: 'buongiorno / salve',
            ttsRu: 'здравствуйте'
          }
        ]
      }
    ]
  },
  {
    index: 4,
    uppercase: 'Г',
    lowercase: 'г',
    nameRu: 'Гэ',
    nameTtsRu: 'гэ',
    namePhoneticIt: 'ghè',
    soundTtsRu: 'г',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'G dura come in "gatto" o "ghiro" (MAI dolce come "gelato"!)',
    ipa: '[ɡ] / [ɡʲ]',
    cursiveNote: 'Attenzione al corsivo: la г minuscola corsiva sembra una piccola "r" arrotondata o una piccola onda!',
    cursiveTrap: 'In corsivo la minuscola г assomiglia a una piccola "r" italiana!',
    mnemonic: {
      wordRu: 'Гриб',
      wordStressed: 'Гри́б',
      ttsRu: 'Гриб',
      phoneticIt: 'grip',
      wordIt: 'Fungo',
      visualTrick: 'La Г sembra proprio il gambo dritto con mezzo cappello di un fungo nel bosco!'
    },
    teacherLesson: {
      intro: 'La Г è semplicissima: suona SEMPRE dura, come nella parola italiana "gatto" o "ghiaccio", anche quando incontra la Е o la И!',
      mouthTip: 'Alza il dorso della lingua verso il palato posteriore e pronuncia "Gh", mai "Gi".',
      comparisonIt: 'Come "gatto", "gola", "ghiro" (mai "gelo").'
    },
    syllables: [
      { syllable: 'ГА', ttsRu: 'га', phoneticIt: 'ga' },
      { syllable: 'ГО', ttsRu: 'го', phoneticIt: 'go' },
      { syllable: 'ГУ', ttsRu: 'гу', phoneticIt: 'gu' },
      { syllable: 'ГЕ', ttsRu: 'ге', phoneticIt: 'ghe (NON ge!)' },
      { syllable: 'ГИ', ttsRu: 'ги', phoneticIt: 'ghi (NON gi!)' }
    ],
    examples: [
      {
        displayRu: 'Гри́б',
        ttsRu: 'Гриб',
        phoneticIt: 'grip',
        meaningIt: 'Fungo',
        noteIt: 'Nota: sia Г che Б finale (si legge grip!)'
      },
      {
        displayRu: 'Го́род',
        ttsRu: 'Город',
        phoneticIt: 'GÒ-rat',
        meaningIt: 'Città'
      },
      {
        displayRu: 'Гита́ра',
        ttsRu: 'Гитара',
        phoneticIt: 'ghi-TÀ-ra',
        meaningIt: 'Chitarra'
      }
    ],
    miniPhrase: {
      displayRu: 'В лесу́ растёт большо́й гри́б.',
      ttsRu: 'В лесу растёт большой гриб.',
      phoneticIt: 'v li-SÙ ras-T\'YÒT bal\'-SHÒY grip',
      meaningIt: 'Nel bosco cresce un grande fungo.'
    },
    exceptions: [
      {
        title: 'Eccezione celebre: nei suffissi -ОГО / -ЕГО si legge V!',
        ruleSummary: 'Nei finali -ого, -его (e in "сегодня") la Г si pronuncia V!',
        explanationIt: 'Questa è l\'eccezione più famosa del russo: nelle desinenze del genitivo (-ого, -его) e nella parola "сегодня" (oggi), la lettera Г si legge esattamente come una V!',
        examples: [
          {
            written: 'сегодня',
            stressed: 'сего́дня',
            readAs: 'si-VÒD-nya (NON segodnya!)',
            meaningIt: 'oggi',
            ttsRu: 'сегодня'
          },
          {
            written: 'кого',
            stressed: 'кого́',
            readAs: 'ka-VÒ',
            meaningIt: 'chi (complemento)',
            ttsRu: 'кого'
          },
          {
            written: 'красного',
            stressed: 'кра́сного',
            readAs: 'KRÀS-na-va',
            meaningIt: 'del rosso',
            ttsRu: 'красного'
          }
        ]
      },
      {
        title: 'Assordimento finale: Г diventa К (e in "Бог" diventa Х!)',
        ruleSummary: 'Alla fine della parola Г si legge К; nella parola "Бог" si legge Х (kh)',
        explanationIt: 'In parole come "друг" (amico) o "снег" (neve), la Г finale suona come una K. Unica parola speciale: "Бог" (Dio), dove la Г finale si legge aspirated KH ("Bokh")!',
        examples: [
          {
            written: 'снег',
            stressed: 'сне́г',
            readAs: 'snek',
            meaningIt: 'neve',
            ttsRu: 'снег'
          },
          {
            written: 'друг',
            stressed: 'дру́г',
            readAs: 'druk',
            meaningIt: 'amico',
            ttsRu: 'друг'
          },
          {
            written: 'Бог',
            stressed: 'Бо́г',
            readAs: 'Bokh (con H aspirata!)',
            meaningIt: 'Dio',
            ttsRu: 'Бог'
          }
        ]
      }
    ]
  },
  {
    index: 5,
    uppercase: 'Д',
    lowercase: 'д',
    nameRu: 'Дэ',
    nameTtsRu: 'дэ',
    namePhoneticIt: 'dè',
    soundTtsRu: 'д',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'D come in "dente" o "casa" (Дом)',
    ipa: '[d] / [dʲ]',
    cursiveNote: 'Attenzione! La Д corsiva maiuscola sembra una nostra D, ma la minuscola corsiva sembra una "g" o una "d" con la coda verso il basso!',
    cursiveTrap: 'In corsivo la minuscola д assomiglia a una "g" latina!',
    mnemonic: {
      wordRu: 'Дом',
      wordStressed: 'До́м',
      ttsRu: 'Дом',
      phoneticIt: 'dom',
      wordIt: 'Casa',
      visualTrick: 'La Д ha un tetto spiovente e due zampette sotto come una casetta di legno russa!'
    },
    teacherLesson: {
      intro: 'Guarda la Д: non ti sembra proprio una piccola casa con il tetto e le fondamenta? Infatti la parola più facile è "Дом", casa!',
      mouthTip: 'Appoggia la punta della lingua dietro i denti superiori (un po\' più sul bordo dei denti rispetto all\'inglese) e pronuncia una bella D decisa.',
      comparisonIt: 'Identica alla D italiana di "dado" e "domani".'
    },
    syllables: [
      { syllable: 'ДА', ttsRu: 'да', phoneticIt: 'da (sì!)' },
      { syllable: 'ДО', ttsRu: 'до', phoneticIt: 'do' },
      { syllable: 'ДУ', ttsRu: 'ду', phoneticIt: 'du' },
      { syllable: 'ДЫ', ttsRu: 'ды', phoneticIt: 'dy' },
      { syllable: 'ДИ', ttsRu: 'ди', phoneticIt: 'di (D dolce)' }
    ],
    examples: [
      {
        displayRu: 'До́м',
        ttsRu: 'Дом',
        phoneticIt: 'dom',
        meaningIt: 'Casa'
      },
      {
        displayRu: 'Де́рево',
        ttsRu: 'Дерево',
        phoneticIt: 'DÈ-ri-va',
        meaningIt: 'Albero'
      },
      {
        displayRu: 'Дру́г',
        ttsRu: 'Друг',
        phoneticIt: 'druk',
        meaningIt: 'Amico'
      }
    ],
    miniPhrase: {
      displayRu: 'Э́то на́ш большо́й до́м.',
      ttsRu: 'Это наш большой дом.',
      phoneticIt: 'È-ta nash bal\'-SHÒY dom',
      meaningIt: 'Questa è la nostra grande casa.'
    },
    exceptions: [
      {
        title: 'Assordimento finale: Д diventa Т!',
        ruleSummary: 'Alla fine della parola o davanti a sorde, la Д si legge T',
        explanationIt: 'Se una parola termina con Д, si trasforma in T! E anche davanti a consonanti sorde come К o С diventa T.',
        examples: [
          {
            written: 'сад',
            stressed: 'са́д',
            readAs: 'sat (NON sad!)',
            meaningIt: 'giardino / frutteto',
            ttsRu: 'сад'
          },
          {
            written: 'город',
            stressed: 'го́род',
            readAs: 'GÒ-rat',
            meaningIt: 'città',
            ttsRu: 'город'
          },
          {
            written: 'лодка',
            stressed: 'ло́дка',
            readAs: 'LÒT-ka',
            meaningIt: 'barca',
            ttsRu: 'лодка'
          }
        ]
      },
      {
        title: 'Д muta nei gruppi consonantici (-рдц-)',
        ruleSummary: 'In "сердце" (cuore) la Д non si pronuncia',
        explanationIt: 'Nel gruppo difficile РДЦ, i russi lasciano cadere la Д centrale.',
        examples: [
          {
            written: 'сердце',
            stressed: 'се́рдце',
            readAs: 'SÈR-tse',
            meaningIt: 'cuore',
            ttsRu: 'сердце'
          }
        ]
      }
    ]
  },
  {
    index: 6,
    uppercase: 'Е',
    lowercase: 'е',
    nameRu: 'Е',
    nameTtsRu: 'е',
    namePhoneticIt: 'yè',
    soundTtsRu: 'е',
    category: 'vowel',
    hardness: 'soft-indicator',
    hardnessLabel: 'Vocale dolce (iotizzata)',
    isFalseFriend: true,
    falseFriendWarning: 'Attenzione: non è sempre una semplice E! All\'inizio o dopo vocale si legge YE (ie)!',
    soundIt: 'YE (come "ieri") all\'inizio; dopo consonante è E e rende dolce la consonante',
    ipa: '[je] / [ʲe] / [ɪ]',
    cursiveNote: 'Identica alla nostra "e" corsiva elegante!',
    mnemonic: {
      wordRu: 'Енот',
      wordStressed: 'Ено́т',
      ttsRu: 'Енот',
      phoneticIt: 'yi-NÒT',
      wordIt: 'Procione',
      visualTrick: 'Pensa al piccolo Enot (procione) con i suoi 3 baffetti a pettine proprio come le tre stanghette della Е!'
    },
    teacherLesson: {
      intro: 'Ecco la prima vocale "magica"! La Е non è una E qualunque: ha una doppia personalità! All\'inizio di parola o dopo un\'altra vocale si legge YE ("ie"), mentre dopo una consonante si legge E e la addolcisce.',
      mouthTip: 'Per dire YE, sorridi leggermente come se stessi per dire una I veloce subito seguita da È: yè!',
      comparisonIt: 'All\'inizio è come "ieri" (ye), dopo consonante è come "mela" ma con la consonante precedente ammorbidita.'
    },
    syllables: [
      { syllable: 'МЕ', ttsRu: 'ме', phoneticIt: 'm\'e (M dolce)' },
      { syllable: 'НЕ', ttsRu: 'не', phoneticIt: 'n\'e (come "gn")' },
      { syllable: 'ЛЕ', ttsRu: 'ле', phoneticIt: 'l\'e (L dolce)' },
      { syllable: 'ЖЕ', ttsRu: 'же', phoneticIt: 'zhe (DURA!)', isTrap: true, trapNote: 'Ж resta sempre dura!' },
      { syllable: 'ШЕ', ttsRu: 'ше', phoneticIt: 'she (DURA!)', isTrap: true, trapNote: 'Ш resta sempre dura!' }
    ],
    examples: [
      {
        displayRu: 'Е́ль',
        ttsRu: 'Ель',
        phoneticIt: 'yel\'',
        meaningIt: 'Abete',
        noteIt: 'All\'inizio della parola = YE!'
      },
      {
        displayRu: 'Ле́с',
        ttsRu: 'Лес',
        phoneticIt: 'l\'es',
        meaningIt: 'Bosco',
        noteIt: 'Dopo Л si legge E e ammorbidisce la Л.'
      },
      {
        displayRu: 'Ено́т',
        ttsRu: 'Енот',
        phoneticIt: 'yi-NÒT',
        meaningIt: 'Procione',
        noteIt: 'Qui la Е non è accentata: suona quasi YI!'
      }
    ],
    miniPhrase: {
      displayRu: 'Ено́т живёт в лесу́.',
      ttsRu: 'Енот живёт в лесу.',
      phoneticIt: 'yi-NÒT zhy-V\'YÒT v li-SÙ',
      meaningIt: 'Il procione vive nel bosco.'
    },
    exceptions: [
      {
        title: 'Е atona: diventa I (Ikan\'e)!',
        ruleSummary: 'Quando la Е NON ha l\'accento, non si legge E ma suona molto simile a una I!',
        explanationIt: 'Ricorda questa regola d\'oro: se la Е non è accentata, scivola verso il suono "i" (o "yi" all\'inizio di parola).',
        examples: [
          {
            written: 'весна',
            stressed: 'весна́',
            readAs: 'vis-NÀ (NON vesna!)',
            meaningIt: 'primavera',
            ttsRu: 'весна'
          },
          {
            written: 'телефон',
            stressed: 'телефо́н',
            readAs: 'ti-li-FÒN',
            meaningIt: 'telefono',
            ttsRu: 'телефон'
          },
          {
            written: 'еда',
            stressed: 'еда́',
            readAs: 'yi-DÀ',
            meaningIt: 'cibo',
            ttsRu: 'еда'
          }
        ]
      },
      {
        title: 'Е dopo Ж, Ш, Ц resta sempre DURA',
        ruleSummary: 'Ж, Ш e Ц non si ammorbidiscono mai: dopo di loro la Е suona come una Э dura (o Ы se atona)',
        explanationIt: 'Anche se la Е di solito addolcisce le consonanti, Ж, Ш e Ц sono testarde e restano dure.',
        examples: [
          {
            written: 'шесть',
            stressed: 'ше́сть',
            readAs: 'shest\' (con SH dura)',
            meaningIt: 'sei (numero)',
            ttsRu: 'шесть'
          },
          {
            written: 'цена',
            stressed: 'цена́',
            readAs: 'tsy-NÀ',
            meaningIt: 'prezzo',
            ttsRu: 'цена'
          }
        ]
      }
    ]
  },
  {
    index: 7,
    uppercase: 'Ё',
    lowercase: 'ё',
    nameRu: 'Ё',
    nameTtsRu: 'ё',
    namePhoneticIt: 'yò',
    soundTtsRu: 'ё',
    category: 'vowel',
    hardness: 'soft-indicator',
    hardnessLabel: 'Vocale dolce (sempre accentata!)',
    isFalseFriend: false,
    soundIt: 'YO (come "yogurt") all\'inizio; dopo consonante è O e la addolcisce',
    ipa: '[jo] / [ʲo]',
    cursiveNote: 'Identica alla Е corsiva ma con i due simpatici puntini sopra!',
    mnemonic: {
      wordRu: 'Ёжик',
      wordStressed: 'Ёжик',
      ttsRu: 'Ёжик',
      phoneticIt: 'YÒ-zhyk',
      wordIt: 'Riccio',
      visualTrick: 'I due puntini sopra la Ё sono proprio gli aculei o gli occhietti del piccolo riccio Ёжик!'
    },
    teacherLesson: {
      intro: 'La Ё è la lettera più simpatica dell\'alfabeto! Ha due puntini sulla testa e un superpotere segreto: nelle parole russe è SEMPRE lei la lettera accentata!',
      mouthTip: 'Inizia con un sorriso da "i" veloce e arrotonda subito le labbra in una O bella tonda: yò!',
      comparisonIt: 'All\'inizio suona come "yo" in "yogurt" o "Ionio"; dopo una consonante suona O ammorbidendo la consonante prima.'
    },
    syllables: [
      { syllable: 'МЁ', ttsRu: 'мё', phoneticIt: 'm\'o' },
      { syllable: 'ЛЁ', ttsRu: 'лё', phoneticIt: 'l\'o' },
      { syllable: 'НЁ', ttsRu: 'нё', phoneticIt: 'n\'o (gno)' },
      { syllable: 'ВСЁ', ttsRu: 'всё', phoneticIt: 'fs\'o (tutto!)' },
      { syllable: 'ЖЁ', ttsRu: 'жё', phoneticIt: 'zho (dura!)', isTrap: true }
    ],
    examples: [
      {
        displayRu: 'Ёжик',
        ttsRu: 'Ёжик',
        phoneticIt: 'YÒ-zhyk',
        meaningIt: 'Riccio'
      },
      {
        displayRu: 'Ёлка',
        ttsRu: 'Ёлка',
        phoneticIt: 'YÒL-ka',
        meaningIt: 'Albero di Natale / Abete'
      },
      {
        displayRu: 'Мёд',
        ttsRu: 'Мёд',
        phoneticIt: 'm\'ot',
        meaningIt: 'Miele',
        noteIt: 'Nota la Д finale che si legge T!'
      }
    ],
    miniPhrase: {
      displayRu: 'Ёжик лю́бит сла́дкий мёд.',
      ttsRu: 'Ёжик любит сладкий мёд.',
      phoneticIt: 'YÒ-zhyk L\'Ù-bit SLÀT-kiy m\'ot',
      meaningIt: 'Il riccio ama il miele dolce.'
    },
    exceptions: [
      {
        title: 'La trappola dei libri stampati: i puntini scompaiono!',
        ruleSummary: 'Nei giornali e nei libri per adulti, i russi spesso scrivono Е invece di Ё!',
        explanationIt: 'Nei libri per bambini e per stranieri la Ё ha sempre i puntini. Ma nei giornali russi i puntini spesso si omettono e vedrai scritto "ежик" o "все": devi sapere a memoria che lì si legge YO!',
        examples: [
          {
            written: 'все / всё',
            stressed: 'всё',
            readAs: 'fs\'o (tutto) vs vse (tutti = fse)',
            meaningIt: 'tutto (con Ё) vs tutti (con Е)',
            ttsRu: 'всё'
          },
          {
            written: 'елка / ёлка',
            stressed: 'ёлка',
            readAs: 'YÒL-ka',
            meaningIt: 'albero di Natale',
            ttsRu: 'ёлка'
          }
        ]
      },
      {
        title: 'Regola d\'oro: la Ё ha SEMPRE l\'accento!',
        ruleSummary: 'Se vedi una Ё in una parola russa nativa, l\'accento cade sicuramente lì!',
        explanationIt: 'Non dovrai mai indovinare dove cade l\'accento se c\'è una Ё (unica rarissima eccezione: parole composte come трёхэтажный).',
        examples: [
          {
            written: 'самолёт',
            stressed: 'самолёт',
            readAs: 'sa-ma-L\'ÒT',
            meaningIt: 'aeroplano',
            ttsRu: 'самолёт'
          }
        ]
      }
    ]
  },
  {
    index: 8,
    uppercase: 'Ж',
    lowercase: 'ж',
    nameRu: 'Жэ',
    nameTtsRu: 'жэ',
    namePhoneticIt: 'zhè',
    soundTtsRu: 'жжж',
    category: 'consonant',
    hardness: 'always-hard',
    hardnessLabel: 'Consonante SEMPRE dura',
    isFalseFriend: false,
    soundIt: 'Come la J francese di "bonjour" o "garage", ma sempre dura e ronzante!',
    ipa: '[ʐ]',
    cursiveNote: 'Si scrive con tre curve morbide unite, come uno scarabeo elegante.',
    mnemonic: {
      wordRu: 'Жираф',
      wordStressed: 'Жира́ф',
      ttsRu: 'Жираф',
      phoneticIt: 'zhy-RÀF',
      wordIt: 'Giraffa',
      visualTrick: 'La Ж sembra un simpatico scarafaggio (Жук) con sei zampette che fa zzz-jjj!'
    },
    teacherLesson: {
      intro: 'La Ж ha un suono bellissimo e ronzante, come una grossa ape! In italiano standard non l\'abbiamo, ma la conosci benissimo dal francese "bonjour" o "garage"!',
      mouthTip: 'Metti la bocca come per dire "sc" di "scena", poi tira un po\' indietro la lingua e fai vibrare la gola: Zhhhh!',
      comparisonIt: 'Come la J di "jour" o la G toscana in "ragione" (ma più dura e profonda).'
    },
    syllables: [
      { syllable: 'ЖА', ttsRu: 'жа', phoneticIt: 'zha' },
      { syllable: 'ЖО', ttsRu: 'жо', phoneticIt: 'zho' },
      { syllable: 'ЖУ', ttsRu: 'жу', phoneticIt: 'zhu' },
      { syllable: 'ЖИ', ttsRu: 'жи', phoneticIt: 'zhy (NON zhi!)', isTrap: true, trapNote: 'Si scrive ЖИ ma si legge ЖЫ!' },
      { syllable: 'ЖЕ', ttsRu: 'же', phoneticIt: 'zhe (dura!)', isTrap: true }
    ],
    examples: [
      {
        displayRu: 'Жира́ф',
        ttsRu: 'Жираф',
        phoneticIt: 'zhy-RÀF',
        meaningIt: 'Giraffa',
        noteIt: 'Si scrive ЖИ ma si pronuncia ZHY!'
      },
      {
        displayRu: 'Жу́к',
        ttsRu: 'Жук',
        phoneticIt: 'zhuk',
        meaningIt: 'Scarabeo / Coleottero'
      },
      {
        displayRu: 'Жа́ба',
        ttsRu: 'Жаба',
        phoneticIt: 'ZHÀ-ba',
        meaningIt: 'Rospo'
      }
    ],
    miniPhrase: {
      displayRu: 'Жира́ф живёт в А́фрике.',
      ttsRu: 'Жираф живёт в Африке.',
      phoneticIt: 'zhy-RÀF zhy-V\'YÒT v ÀF-ri-kye',
      meaningIt: 'La giraffa vive in Africa.'
    },
    exceptions: [
      {
        title: 'Regola sacra: ЖИ si scrive con И, ma si legge ЖЫ!',
        ruleSummary: 'La Ж è SEMPRE dura: anche se scritta con И, Е o Ь, non si addolcisce mai!',
        explanationIt: 'Tutti i bambini russi imparano a memoria: "ЖИ e ШИ si scrivono sempre con И!" Ma nella pronuncia la И dopo Ж suona profonda come una Ы.',
        examples: [
          {
            written: 'жизнь',
            stressed: 'жи́знь',
            readAs: 'zhyzn\' (NON zhizn!)',
            meaningIt: 'vita',
            ttsRu: 'жизнь'
          },
          {
            written: 'жить',
            stressed: 'жи́ть',
            readAs: 'zhyt\'',
            meaningIt: 'vivere',
            ttsRu: 'жить'
          }
        ]
      },
      {
        title: 'Assordimento finale: Ж diventa Ш (SH)!',
        ruleSummary: 'In fine di parola o prima di consonanti sorde, Ж si legge Ш',
        explanationIt: 'Se la Ж è alla fine di una parola, smette di ronzare e diventa il suo gemello sordo Ш (sh)!',
        examples: [
          {
            written: 'нож',
            stressed: 'но́ж',
            readAs: 'nosh (NON nozh!)',
            meaningIt: 'coltello',
            ttsRu: 'нож'
          },
          {
            written: 'ёж',
            stressed: 'ёж',
            readAs: 'yosh',
            meaningIt: 'riccio',
            ttsRu: 'ёж'
          },
          {
            written: 'ложка',
            stressed: 'ло́жка',
            readAs: 'LÒSH-ka',
            meaningIt: 'cucchiaio',
            ttsRu: 'ложка'
          }
        ]
      }
    ]
  },
  {
    index: 9,
    uppercase: 'З',
    lowercase: 'з',
    nameRu: 'Зэ',
    nameTtsRu: 'зэ',
    namePhoneticIt: 'zè',
    soundTtsRu: 'ззз',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'S sonora come in "rosa" o "zanzara" che ronza (MAI "dz" di "pizza"!)',
    ipa: '[z] / [zʲ]',
    cursiveNote: 'Attenzione: sembra il numero 3! In corsivo la minuscola ha un occhiello in basso come una "z" sinuosa o una "g" senza gambo superiore.',
    mnemonic: {
      wordRu: 'Зебра',
      wordStressed: 'Зе́бра',
      ttsRu: 'Зебра',
      phoneticIt: 'ZÈB-ra',
      wordIt: 'Zebra',
      visualTrick: 'Sembra il numero 3 o una zanzarina sinuosa che ronza: zzzzz!'
    },
    teacherLesson: {
      intro: 'Non confonderla con il numero 3! Questa è la lettera З e il suo suono è la S dolce e ronzante della parola italiana "rosa" o "sveglia".',
      mouthTip: 'Metti la lingua come per dire "sss", ma accendi la voce nella gola come una zanzara: Zzzz! Attenzione: non è mai la "z" di "pizza" (quella in russo è Ц).',
      comparisonIt: 'Come la S di "rosa", "casa" (al Nord) o "zero" inglese.'
    },
    syllables: [
      { syllable: 'ЗА', ttsRu: 'за', phoneticIt: 'za (come rò-sa)' },
      { syllable: 'ЗО', ttsRu: 'зо', phoneticIt: 'zo' },
      { syllable: 'ЗУ', ttsRu: 'зу', phoneticIt: 'zu' },
      { syllable: 'ЗЫ', ttsRu: 'зы', phoneticIt: 'zy' },
      { syllable: 'ЗИ', ttsRu: 'зи', phoneticIt: 'zi (З dolce)' }
    ],
    examples: [
      {
        displayRu: 'Зе́бра',
        ttsRu: 'Зебра',
        phoneticIt: 'ZÈB-ra',
        meaningIt: 'Zebra'
      },
      {
        displayRu: 'Зима́',
        ttsRu: 'Зима',
        phoneticIt: 'zi-MÀ',
        meaningIt: 'Inverno'
      },
      {
        displayRu: 'Зонт',
        ttsRu: 'Зо́нт',
        phoneticIt: 'zont',
        meaningIt: 'Ombrello'
      }
    ],
    miniPhrase: {
      displayRu: 'Зимо́й вы́пал бе́лый сне́г.',
      ttsRu: 'Зимой выпал белый снег.',
      phoneticIt: 'zi-MÒY VÝ-pal BÈ-lyy snek',
      meaningIt: 'D\'inverno è scesa la neve bianca.'
    },
    exceptions: [
      {
        title: 'Assordimento finale: З diventa С (S sorda)!',
        ruleSummary: 'Alla fine della parola o davanti a consonante sorda, la З si legge S sorda',
        explanationIt: 'La coppia sorella è З (ronzante) e С (sibilante). A fine parola, la З perde la vibrazione e diventa una normale S!',
        examples: [
          {
            written: 'глаз',
            stressed: 'гла́з',
            readAs: 'glas (NON glaz!)',
            meaningIt: 'occhio',
            ttsRu: 'глаз'
          },
          {
            written: 'арбуз',
            stressed: 'арбу́з',
            readAs: 'ar-BÙS',
            meaningIt: 'anguria',
            ttsRu: 'арбуз'
          },
          {
            written: 'сказка',
            stressed: 'ска́зка',
            readAs: 'SKÀS-ka',
            meaningIt: 'fiaba',
            ttsRu: 'сказка'
          }
        ]
      }
    ]
  },
  {
    index: 10,
    uppercase: 'И',
    lowercase: 'и',
    nameRu: 'И',
    nameTtsRu: 'и',
    namePhoneticIt: 'i',
    soundTtsRu: 'иии',
    category: 'vowel',
    hardness: 'soft-indicator',
    hardnessLabel: 'Vocale dolce',
    isFalseFriend: false,
    soundIt: 'I sorridente e chiara, come in "isola" — ammorbidisce la consonante prima!',
    ipa: '[i]',
    cursiveNote: 'Attenzione enorme in corsivo! La minuscola corsiva "и" si scrive esattamente come una "u" latina!',
    cursiveTrap: 'In corsivo la и sembra una "u" italiana!',
    mnemonic: {
      wordRu: 'Игрушка',
      wordStressed: 'Игру́шка',
      ttsRu: 'Игрушка',
      phoneticIt: 'i-GRÙSH-ka',
      wordIt: 'Giocattolo',
      visualTrick: 'Guarda la N al contrario: due paletti uniti da una scala inclinata per arrampicarsi verso i giocattoli!'
    },
    teacherLesson: {
      intro: 'Questa è la I russa! Sembra una N messa allo specchio. Ricorda bene: quando sta dopo una consonante normale, la rende dolce e sorridente.',
      mouthTip: 'Tira gli angoli della bocca in un bel sorriso e di\' "Iii!" tenendo la lingua in alto e in avanti.',
      comparisonIt: 'Come la I italiana di "isola" e "piccolo".'
    },
    syllables: [
      { syllable: 'МИ', ttsRu: 'ми', phoneticIt: 'mi' },
      { syllable: 'НИ', ttsRu: 'ни', phoneticIt: 'ni (dolce)' },
      { syllable: 'ЛИ', ttsRu: 'ли', phoneticIt: 'li' },
      { syllable: 'ЖИ', ttsRu: 'жи', phoneticIt: 'zhy!', isTrap: true, trapNote: 'Dopo Ж, la И si legge Ы!' },
      { syllable: 'ШИ', ttsRu: 'ши', phoneticIt: 'shy!', isTrap: true, trapNote: 'Dopo Ш, la И si legge Ы!' },
      { syllable: 'ЦИ', ttsRu: 'ци', phoneticIt: 'tsy!', isTrap: true, trapNote: 'Dopo Ц, la И si legge Ы!' }
    ],
    examples: [
      {
        displayRu: 'Игру́шка',
        ttsRu: 'Игрушка',
        phoneticIt: 'i-GRÙSH-ka',
        meaningIt: 'Giocattolo'
      },
      {
        displayRu: 'И́мя',
        ttsRu: 'Имя',
        phoneticIt: 'Ì-m\'ya',
        meaningIt: 'Nome'
      },
      {
        displayRu: 'Ми́р',
        ttsRu: 'Мир',
        phoneticIt: 'mir',
        meaningIt: 'Pace / Mondo'
      }
    ],
    miniPhrase: {
      displayRu: 'У бра́та но́вая игру́шка.',
      ttsRu: 'У брата новая игрушка.',
      phoneticIt: 'u BRÀ-ta NÒ-va-ya i-GRÙSH-ka',
      meaningIt: 'Il fratello ha un giocattolo nuovo.'
    },
    exceptions: [
      {
        title: 'La grande eccezione dopo Ж, Ш, Ц!',
        ruleSummary: 'Dopo le tre consonanti sempre dure (Ж, Ш, Ц), la И si legge Ы!',
        explanationIt: 'La lingua russa non riesce a pronunciare "zhi", "shi", "tsi" morbide: perciò, anche se vedi scritta una И dopo Ж, Ш o Ц, devi tirare indietro la lingua e pronunciare Ы!',
        examples: [
          {
            written: 'машина',
            stressed: 'маши́на',
            readAs: 'ma-SHÝ-na (NON mashina!)',
            meaningIt: 'automobile',
            ttsRu: 'машина'
          },
          {
            written: 'цирк',
            stressed: 'ци́рк',
            readAs: 'tsyrk',
            meaningIt: 'circo',
            ttsRu: 'цирк'
          },
          {
            written: 'живот',
            stressed: 'живо́т',
            readAs: 'zhy-VÒT',
            meaningIt: 'pancia',
            ttsRu: 'живот'
          }
        ]
      }
    ]
  },
  {
    index: 11,
    uppercase: 'Й',
    lowercase: 'й',
    nameRu: 'И кра́ткое',
    nameTtsRu: 'И краткое',
    namePhoneticIt: 'i KRÀT-ka-ye (I breve)',
    soundTtsRu: 'й',
    category: 'consonant',
    hardness: 'always-soft',
    hardnessLabel: 'Consonante (semivocale SEMPRE dolce)',
    isFalseFriend: false,
    soundIt: 'Y velocissima, come la I dentro "mai", "poi", "yogurt"',
    ipa: '[j]',
    cursiveNote: 'Uguale alla "и" corsiva (sembra una u) ma con un piccolo cappellino curvo sopra!',
    mnemonic: {
      wordRu: 'Йогурт',
      wordStressed: 'Йо́гурт',
      ttsRu: 'Йогурт',
      phoneticIt: 'YÒ-gurt',
      wordIt: 'Yogurt',
      visualTrick: 'È la sorellina veloce della И con un piccolo cappellino sopra che la fa saltare: "y"!'
    },
    teacherLesson: {
      intro: 'In russo si chiama "И краткое", cioè "I breve". Non è una vocale! È una consonante leggerissima e veloce che si appoggia alle vocali vicine come la "i" di "dai" o "poi".',
      mouthTip: 'Pronuncia una "i" rapidissima senza mai appoggiarvi la voce sopra: "a-y" (май), "o-y" (мой).',
      comparisonIt: 'Esattamente come la I finale di "mai", "noi", "caffè" — veloce e leggera.'
    },
    syllables: [
      { syllable: 'АЙ', ttsRu: 'ай', phoneticIt: 'ay (come "dai")' },
      { syllable: 'ОЙ', ttsRu: 'ой', phoneticIt: 'oy (come "poi")' },
      { syllable: 'ЕЙ', ttsRu: 'ей', phoneticIt: 'ey (come "lei")' },
      { syllable: 'УЙ', ttsRu: 'уй', phoneticIt: 'uy (come "lui")' },
      { syllable: 'ЙО', ttsRu: 'йо', phoneticIt: 'yo' }
    ],
    examples: [
      {
        displayRu: 'Йо́гурт',
        ttsRu: 'Йогурт',
        phoneticIt: 'YÒ-gurt',
        meaningIt: 'Yogurt'
      },
      {
        displayRu: 'Ча́й',
        ttsRu: 'Чай',
        phoneticIt: 'chay',
        meaningIt: 'Tè'
      },
      {
        displayRu: 'Трамва́й',
        ttsRu: 'Трамвай',
        phoneticIt: 'tram-VÀY',
        meaningIt: 'Tram'
      }
    ],
    miniPhrase: {
      displayRu: 'Мо́й па́па пьёт горя́чий ча́й.',
      ttsRu: 'Мой папа пьёт горячий чай.',
      phoneticIt: 'moy PÀ-pa p\'yot ga-R\'À-chiy chay',
      meaningIt: 'Mio papà beve tè caldo.'
    },
    exceptions: [
      {
        title: 'Non confondere И con Й!',
        ruleSummary: 'И forma una sillaba (ма-и); Й si fonde alla vocale (май = una sola sillaba!)',
        explanationIt: 'Se togli il cappellino alla Й, cambia completamente la parola e il numero di sillabe! Ad esempio "мой" (mio) ha una sillaba, mentre "мои" (miei) ne ha due.',
        examples: [
          {
            written: 'мой vs мои',
            stressed: 'мо́й / мои́',
            readAs: 'moy (1 sillaba) / ma-Ì (2 sillabe)',
            meaningIt: 'mio / miei',
            ttsRu: 'мой, мои'
          }
        ]
      },
      {
        title: 'ЙО all\'inizio solo nelle parole straniere',
        ruleSummary: 'Per i suoni russi nativi si usa Ё, mentre ЙО appare nei prestiti',
        explanationIt: 'In parole internazionali come йогурт (yogurt) o йод (iodio) si usa Й+О anziché Ё.',
        examples: [
          {
            written: 'йод',
            stressed: 'йо́д',
            readAs: 'yot',
            meaningIt: 'iodio',
            ttsRu: 'йод'
          }
        ]
      }
    ]
  },
  {
    index: 12,
    uppercase: 'К',
    lowercase: 'к',
    nameRu: 'Ка',
    nameTtsRu: 'ка',
    namePhoneticIt: 'ka',
    soundTtsRu: 'к',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'C dura come in "casa" o "cane"',
    ipa: '[k] / [kʲ]',
    cursiveNote: 'La maiuscola e la minuscola corsiva sono molto simili alla K latina elegante.',
    mnemonic: {
      wordRu: 'Кот',
      wordStressed: 'Ко́т',
      ttsRu: 'Кот',
      phoneticIt: 'kot',
      wordIt: 'Gatto',
      visualTrick: 'La К sembra un gattino curioso che stende le due zampette in avanti!'
    },
    teacherLesson: {
      intro: 'Che sollievo: la К russa è facilissima! Si scrive come la nostra K e si legge sempre dura come la C di "cane" o "cuore", mai dolce!',
      mouthTip: 'Stacca secca la parte posteriore della lingua dal palato: K! Come il verso di una piccola noce che si rompe.',
      comparisonIt: 'Come la C dura di "casa", "chiesa", "cuore".'
    },
    syllables: [
      { syllable: 'КА', ttsRu: 'ка', phoneticIt: 'ka' },
      { syllable: 'КО', ttsRu: 'ко', phoneticIt: 'ko' },
      { syllable: 'КУ', ttsRu: 'ку', phoneticIt: 'ku' },
      { syllable: 'КЕ', ttsRu: 'ке', phoneticIt: 'k\'e (che di "chiesa")' },
      { syllable: 'КИ', ttsRu: 'ки', phoneticIt: 'k\'i (chi di "chilo")' }
    ],
    examples: [
      {
        displayRu: 'Ко́т',
        ttsRu: 'Кот',
        phoneticIt: 'kot',
        meaningIt: 'Gatto'
      },
      {
        displayRu: 'Кни́га',
        ttsRu: 'Книга',
        phoneticIt: 'KNÌ-ga',
        meaningIt: 'Libro'
      },
      {
        displayRu: 'Кино́',
        ttsRu: 'Кино',
        phoneticIt: 'ki-NÒ',
        meaningIt: 'Cinema'
      }
    ],
    miniPhrase: {
      displayRu: 'Ры́жий ко́т спи́т на окне́.',
      ttsRu: 'Рыжий кот спит на окне.',
      phoneticIt: 'RÝ-zhyy kot spit na ak-NÈ',
      meaningIt: 'Il gatto rosso dorme sulla finestra.'
    },
    exceptions: [
      {
        title: 'Sonorizzazione davanti a consonante sonora: К diventa Г!',
        ruleSummary: 'Davanti a Б, Д, Г, Ж, З la К suona come una G dura!',
        explanationIt: 'La regola funziona anche al contrario! Se una consonante sorda come К si trova subito prima di una consonante sonora (come З o Б), prende voce e si legge G.',
        examples: [
          {
            written: 'вокзал',
            stressed: 'вокза́л',
            readAs: 'vag-ZÀL (NON vokzal!)',
            meaningIt: 'stazione ferroviaria',
            ttsRu: 'вокзал'
          },
          {
            written: 'рюкзак',
            stressed: 'рюкза́к',
            readAs: 'r\'ug-ZÀK',
            meaningIt: 'zaino',
            ttsRu: 'рюкзак'
          }
        ]
      },
      {
        title: 'К in "кто" resta sempre К',
        ruleSummary: 'In "кто" (chi) si legge K, a differenza di "что" (che si legge shto)!',
        explanationIt: 'Molti confondono кто (chi) con что (cosa): кто si legge normalmente "kto", mentre solo что cambia in "shto".',
        examples: [
          {
            written: 'кто',
            stressed: 'кто́',
            readAs: 'kto',
            meaningIt: 'chi',
            ttsRu: 'кто'
          }
        ]
      }
    ]
  },
  {
    index: 13,
    uppercase: 'Л',
    lowercase: 'л',
    nameRu: 'Эль',
    nameTtsRu: 'эль',
    namePhoneticIt: 'el\'',
    soundTtsRu: 'л',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'L come in "luna", ma quando è dura è più profonda e "scura"',
    ipa: '[ɫ] / [lʲ]',
    cursiveNote: 'Attenzione: inizia con un piccolo gancetto in basso a sinistra, sia maiuscola che minuscola, altrimenti si confonde con la М!',
    cursiveTrap: 'Ha un piccolo gancetto iniziale obbligatorio in corsivo per non confonderla con la М!',
    mnemonic: {
      wordRu: 'Лев',
      wordStressed: 'Ле́в',
      ttsRu: 'Лев',
      phoneticIt: 'l\'ef',
      wordIt: 'Leone',
      visualTrick: 'Sembra una tenda da safari appuntita o la criniera a punta del Leone!'
    },
    teacherLesson: {
      intro: 'La Л è la L russa! Fai attenzione alla sua forma: nei libri moderni a volte ha la punta a triangolo e a volte il tetto piatto, ma sono la stessa lettera.',
      mouthTip: 'Per la Л DURA (ла, ло, лу), schiaccia la punta della lingua contro i denti superiori abbassando il centro della lingua, come una L molto profonda. Per la Л DOLCE (ля, ли, ль), sorridi mentre la dici!',
      comparisonIt: 'La Л dolce è vicina alla L italiana; la Л dura assomiglia alla L finale dell\'inglese "ball".'
    },
    syllables: [
      { syllable: 'ЛА', ttsRu: 'ла', phoneticIt: 'la (L profonda)' },
      { syllable: 'ЛО', ttsRu: 'ло', phoneticIt: 'lo' },
      { syllable: 'ЛУ', ttsRu: 'лу', phoneticIt: 'lu' },
      { syllable: 'ЛИ', ttsRu: 'ли', phoneticIt: 'l\'i (L dolce)' },
      { syllable: 'ЛЯ', ttsRu: 'ля', phoneticIt: 'l\'a (L dolce)' }
    ],
    examples: [
      {
        displayRu: 'Ле́в',
        ttsRu: 'Лев',
        phoneticIt: 'l\'ef',
        meaningIt: 'Leone',
        noteIt: 'Ricorda: la В finale diventa F!'
      },
      {
        displayRu: 'Луна́',
        ttsRu: 'Луна',
        phoneticIt: 'lu-NÀ',
        meaningIt: 'Luna'
      },
      {
        displayRu: 'Лимо́н',
        ttsRu: 'Лимон',
        phoneticIt: 'li-MÒN',
        meaningIt: 'Limone'
      }
    ],
    miniPhrase: {
      displayRu: 'Но́чью свети́ла я́ркая луна́.',
      ttsRu: 'Ночью светила яркая луна.',
      phoneticIt: 'NÒCH-yu svi-TÌ-la YÀR-ka-ya lu-NÀ',
      meaningIt: 'Di notte splendeva la luna luminosa.'
    },
    exceptions: [
      {
        title: 'La Л muta in "солнце" (sole)!',
        ruleSummary: 'Nella parola "солнце" (sole) la Л non si pronuncia mai!',
        explanationIt: 'Nel gruppo di consonanti ЛНЦ è quasi impossibile pronunciare la Л: i russi dicono semplicemente "SÒN-tse".',
        examples: [
          {
            written: 'солнце',
            stressed: 'со́лнце',
            readAs: 'SÒN-tse (la Л sparisce!)',
            meaningIt: 'sole',
            ttsRu: 'солнце'
          }
        ]
      }
    ]
  },
  {
    index: 14,
    uppercase: 'М',
    lowercase: 'м',
    nameRu: 'Эм',
    nameTtsRu: 'эм',
    namePhoneticIt: 'em',
    soundTtsRu: 'м',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'M come in "mamma" o "miele"',
    ipa: '[m] / [mʲ]',
    cursiveNote: 'Proprio come in italiano, inizia con un piccolo gancio in basso a sinistra!',
    mnemonic: {
      wordRu: 'Медведь',
      wordStressed: 'Медве́дь',
      ttsRu: 'Медведь',
      phoneticIt: 'mid-VÈT\'',
      wordIt: 'Orso',
      visualTrick: 'Le due punte della М sembrano proprio le due orecchie tonde di un orsacchiotto goloso di miele: Mmm!'
    },
    teacherLesson: {
      intro: 'La М è una delle lettere più dolci e facili di tutto l\'alfabeto! È identica alla nostra M e ti permette subito di leggere tantissime parole russe, inclusa "мама"!',
      mouthTip: 'Stringi dolcemente le labbra e fai ronzare il naso: Mmmm!',
      comparisonIt: 'Identica alla M italiana di "mamma" e "mare".'
    },
    syllables: [
      { syllable: 'МА', ttsRu: 'ма', phoneticIt: 'ma' },
      { syllable: 'МО', ttsRu: 'мо', phoneticIt: 'mo' },
      { syllable: 'МУ', ttsRu: 'му', phoneticIt: 'mu (verso della mucca!)' },
      { syllable: 'МЫ', ttsRu: 'мы', phoneticIt: 'my (noi!)' },
      { syllable: 'МЯ', ttsRu: 'мя', phoneticIt: 'm\'a (M dolce)' }
    ],
    examples: [
      {
        displayRu: 'Ма́ма',
        ttsRu: 'Мама',
        phoneticIt: 'MÀ-ma',
        meaningIt: 'Mamma'
      },
      {
        displayRu: 'Медве́дь',
        ttsRu: 'Медведь',
        phoneticIt: 'mid-VÈT\'',
        meaningIt: 'Orso'
      },
      {
        displayRu: 'Молоко́',
        ttsRu: 'Молоко',
        phoneticIt: 'ma-la-KÒ',
        meaningIt: 'Latte',
        noteIt: 'Le prime due О si leggono A!'
      }
    ],
    miniPhrase: {
      displayRu: 'Ма́ма дала́ мне́ тёплое молоко́.',
      ttsRu: 'Мама дала мне тёплое молоко.',
      phoneticIt: 'MÀ-ma da-LÀ mn\'e T\'ÒP-la-ye ma-la-KÒ',
      meaningIt: 'La mamma mi ha dato del latte caldo.'
    },
    exceptions: [
      {
        title: 'М dura vs М dolce (мяч vs мат)',
        ruleSummary: 'Davanti a Я, Е, Ё, Ю, И, Ь la М si ammorbidisce sorridendo',
        explanationIt: 'La М non subisce mai assordimento (resta sempre sonora anche in fine di parola come "дом" o "там"). Devi solo fare attenzione ad ammorbidirla quando è seguita da vocali dolci, come in "мяч" (palla).',
        examples: [
          {
            written: 'мяч',
            stressed: 'мя́ч',
            readAs: 'm\'ach (con una leggera sfumatura dolce)',
            meaningIt: 'palla',
            ttsRu: 'мяч'
          },
          {
            written: 'семь',
            stressed: 'се́мь',
            readAs: 'sem\' (М finale morbida!)',
            meaningIt: 'sette',
            ttsRu: 'семь'
          }
        ]
      }
    ]
  },
  {
    index: 15,
    uppercase: 'Н',
    lowercase: 'н',
    nameRu: 'Эн',
    nameTtsRu: 'эн',
    namePhoneticIt: 'en',
    soundTtsRu: 'н',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: true,
    falseFriendWarning: 'Falso amico! Sembra una H, ma si legge N come "nave"!',
    soundIt: 'N come in "notte" o "nave" (MAI muta come la H!)',
    ipa: '[n] / [nʲ]',
    cursiveNote: 'In corsivo la minuscola н è identica a una "n" latina? NO! In corsivo la minuscola "н" sembra una piccola "h" o una "n" con l\'asta a sinistra!',
    mnemonic: {
      wordRu: 'Носорог',
      wordStressed: 'Носоро́г',
      ttsRu: 'Носорог',
      phoneticIt: 'na-sa-RÒK',
      wordIt: 'Rinoceronte',
      visualTrick: 'Pensa al ponte della Н: collega i due lati del Naso, proprio come la lettera N!'
    },
    teacherLesson: {
      intro: 'Ecco un altro famosissimo "falso amico"! La Н russa sembra una H, ma non è mai muta e si legge esattamente come la nostra N di "nonna"!',
      mouthTip: 'Appoggia la punta della lingua dietro i denti superiori: Nnn! Quando è seguita da Я, Е, Ё, Ю, И o Ь diventa morbidissima, quasi come la "gn" di "gnomo".',
      comparisonIt: 'Come la N italiana di "neve". Quando è dolce (не, ни, ня, нь) assomiglia alla "gn" di "ragno"!'
    },
    syllables: [
      { syllable: 'НА', ttsRu: 'на', phoneticIt: 'na' },
      { syllable: 'НО', ttsRu: 'но', phoneticIt: 'no (ma!)' },
      { syllable: 'НУ', ttsRu: 'ну', phoneticIt: 'nu' },
      { syllable: 'НЕТ', ttsRu: 'нет', phoneticIt: 'n\'et (no!)' },
      { syllable: 'НЯ', ttsRu: 'ня', phoneticIt: 'nya / gna' }
    ],
    examples: [
      {
        displayRu: 'Носоро́г',
        ttsRu: 'Носорог',
        phoneticIt: 'na-sa-RÒK',
        meaningIt: 'Rinoceronte'
      },
      {
        displayRu: 'Не́бо',
        ttsRu: 'Небо',
        phoneticIt: 'NÈ-ba',
        meaningIt: 'Cielo'
      },
      {
        displayRu: 'Но́с',
        ttsRu: 'Нос',
        phoneticIt: 'nos',
        meaningIt: 'Naso'
      }
    ],
    miniPhrase: {
      displayRu: 'У носоро́га большо́й но́с.',
      ttsRu: 'У носорога большой нос.',
      phoneticIt: 'u na-sa-RÒ-ga bal\'-SHÒY nos',
      meaningIt: 'Il rinoceronte ha un grande naso.'
    },
    exceptions: [
      {
        title: 'Н dolce suona quasi come "GN" italiana',
        ruleSummary: 'Н + Е / И / Я / Ё / Ю / Ь produce una N palatalizzata dolcissima',
        explanationIt: 'Attenzione a non staccare "n-i": in russo "няня" (tata) si fonde quasi come "gnagna", ma più leggera con la punta della lingua.',
        examples: [
          {
            written: 'няня',
            stressed: 'ня́ня',
            readAs: 'N\'À-n\'a (quasi gna-gna)',
            meaningIt: 'tata / bambinaia',
            ttsRu: 'няня'
          },
          {
            written: 'конь',
            stressed: 'ко́нь',
            readAs: 'kon\' (con N finale dolce)',
            meaningIt: 'destriero / cavallo',
            ttsRu: 'конь'
          }
        ]
      }
    ]
  },
  {
    index: 16,
    uppercase: 'О',
    lowercase: 'о',
    nameRu: 'О',
    nameTtsRu: 'о',
    namePhoneticIt: 'o',
    soundTtsRu: 'ооо',
    category: 'vowel',
    hardness: 'hard-indicator',
    hardnessLabel: 'Vocale dura (cambia senza accento!)',
    isFalseFriend: false,
    soundIt: 'O chiusa/tonda se ACCENTATA; diventa A se NON accentata!',
    ipa: '[o] / [ɐ] / [ə]',
    cursiveNote: 'Identica alla nostra O sia maiuscola che minuscola.',
    mnemonic: {
      wordRu: 'Облако',
      wordStressed: 'О́блако',
      ttsRu: 'Облако',
      phoneticIt: 'ÒB-la-ka',
      wordIt: 'Nuvola',
      visualTrick: 'La О è tonda tonda come una nuvoletta soffice o la tua bocca quando fa "Oooo" dallo stupore!'
    },
    teacherLesson: {
      intro: 'Fermati un secondo su questa lettera, perché la О nasconde IL segreto numero uno per parlare un russo autentico! Si scrive come la nostra O, ma cambia suono in base all\'accento.',
      mouthTip: 'Se l\'accento cade sulla О, arrotonda bene le labbra: O! Se invece la О è lontana dall\'accento, rilassa la bocca e dì semplicemente A!',
      comparisonIt: 'Accentata = O di "otto"; non accentata = A di "mamma".'
    },
    syllables: [
      { syllable: 'МО', ttsRu: 'мо', phoneticIt: 'mo (se accentata)' },
      { syllable: 'ДОМ', ttsRu: 'дом', phoneticIt: 'dom (accentata = O)' },
      { syllable: 'ОНА́', ttsRu: 'она', phoneticIt: 'a-NÀ (atona = A!)', isTrap: true, trapNote: 'Si scrive ОНА ma si legge АНА!' },
      { syllable: 'ОНИ́', ttsRu: 'они', phoneticIt: 'a-NÌ (atona = A!)', isTrap: true }
    ],
    examples: [
      {
        displayRu: 'О́блако',
        ttsRu: 'Облако',
        phoneticIt: 'ÒB-la-ka',
        meaningIt: 'Nuvola',
        noteIt: 'La prima О è accentata (= O), la seconda è atona (= A)!'
      },
      {
        displayRu: 'Окно́',
        ttsRu: 'Окно',
        phoneticIt: 'ak-NÒ',
        meaningIt: 'Finestra',
        noteIt: 'Prima О = A, seconda О = O!'
      },
      {
        displayRu: 'Молоко́',
        ttsRu: 'Молоко',
        phoneticIt: 'ma-la-KÒ',
        meaningIt: 'Latte',
        noteIt: 'Tre O scritte, ma solo l\'ultima suona O!'
      }
    ],
    miniPhrase: {
      displayRu: 'В окне́ ви́дно бе́лое о́блако.',
      ttsRu: 'В окне видно белое облако.',
      phoneticIt: 'v ak-NÈ VÌD-na BÈ-la-ye ÒB-la-ka',
      meaningIt: 'Dalla finestra si vede una nuvola bianca.'
    },
    exceptions: [
      {
        title: 'L\'Akan\'e: la legge ferrea della О non accentata!',
        ruleSummary: 'Ogni О che NON porta l\'accento della parola si pronuncia A!',
        explanationIt: 'È la regola che distingue subito chi conosce il russo vero! In russo standard (moscovita) le vocali О non accentate si aprono in "a": la prima sillaba prima dell\'accento è una "a" chiara, le altre sono ancora più brevi.',
        examples: [
          {
            written: 'хорошо',
            stressed: 'хорошо́',
            readAs: 'kha-ra-SHÒ (si legge con due A!)',
            meaningIt: 'bene / va bene',
            ttsRu: 'хорошо'
          },
          {
            written: 'спасибо',
            stressed: 'спаси́бо',
            readAs: 'spa-SÌ-ba',
            meaningIt: 'grazie',
            ttsRu: 'спасибо'
          },
          {
            written: 'до свидания',
            stressed: 'до свида́ния',
            readAs: 'da svi-DÀ-ni-ya',
            meaningIt: 'arrivederci',
            ttsRu: 'до свидания'
          }
        ]
      },
      {
        title: 'Eccezione nelle parole straniere: иногда resta О!',
        ruleSummary: 'In pochissimi prestiti internazionali (радио, какао, боа) la О atona resta quasi O',
        explanationIt: 'In alcune parole straniere o nomi propri non adattati (come какао, трио, радио), si può sentire ancora una O leggera anche senza accento.',
        examples: [
          {
            written: 'радио',
            stressed: 'ра́дио',
            readAs: 'RÀ-di-o',
            meaningIt: 'radio',
            ttsRu: 'радио'
          }
        ]
      }
    ]
  },
  {
    index: 17,
    uppercase: 'П',
    lowercase: 'п',
    nameRu: 'Пэ',
    nameTtsRu: 'пэ',
    namePhoneticIt: 'pè',
    soundTtsRu: 'п',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'P come in "papà" o "pane" (è il Pi greco!)',
    ipa: '[p] / [pʲ]',
    cursiveNote: 'Attenzione in corsivo! La п minuscola corsiva è IDENTICA alla nostra "n" latina minuscola!',
    cursiveTrap: 'In corsivo la п minuscola si scrive esattamente come una "n" italiana!',
    mnemonic: {
      wordRu: 'Пингвин',
      wordStressed: 'Пингви́н',
      ttsRu: 'Пингвин',
      phoneticIt: 'pin-GVÌN',
      wordIt: 'Pinguino',
      visualTrick: 'Guarda la П: è proprio una porta o un arco su due piedi, proprio come il nome "Porta" (P)!'
    },
    teacherLesson: {
      intro: 'Forse riconosci questa forma dalla matematica: è il Pi greco! E suona proprio come una P italiana di "papà" o "pinguino".',
      mouthTip: 'Chiudi bene le labbra e fai un piccolo scoppio d\'aria senza usare la voce: P! Molto più dolce e meno aspirata dell\'inglese.',
      comparisonIt: 'Identica alla P italiana di "palla" e "pizza".'
    },
    syllables: [
      { syllable: 'ПА', ttsRu: 'па', phoneticIt: 'pa' },
      { syllable: 'ПО', ttsRu: 'по', phoneticIt: 'po' },
      { syllable: 'ПУ', ttsRu: 'пу', phoneticIt: 'pu' },
      { syllable: 'ПЫ', ttsRu: 'пы', phoneticIt: 'py' },
      { syllable: 'ПИ', ttsRu: 'пи', phoneticIt: 'p\'i (P dolce)' }
    ],
    examples: [
      {
        displayRu: 'Пингви́н',
        ttsRu: 'Пингвин',
        phoneticIt: 'pin-GVÌN',
        meaningIt: 'Pinguino'
      },
      {
        displayRu: 'Па́па',
        ttsRu: 'Папа',
        phoneticIt: 'PÀ-pa',
        meaningIt: 'Papà'
      },
      {
        displayRu: 'По́езд',
        ttsRu: 'Поезд',
        phoneticIt: 'PÒ-yest',
        meaningIt: 'Treno'
      }
    ],
    miniPhrase: {
      displayRu: 'Ма́ленький пингви́н лю́бит ры́бу.',
      ttsRu: 'Маленький пингвин любит рыбу.',
      phoneticIt: 'MÀ-lin\'-kiy pin-GVÌN L\'Ù-bit RÝ-bu',
      meaningIt: 'Il piccolo pinguino ama il pesce.'
    },
    exceptions: [
      {
        title: 'La grande trappola del corsivo: п = n!',
        ruleSummary: 'Nella scrittura a mano russa, "п" minuscola sembra una "n" e "т" sembra una "m"',
        explanationIt: 'Ricordatelo sempre quando leggi cartelli o biglietti scritti a mano o in corsivo (anche su menu dei ristoranti!): una piccola "n" in realtà è una П!',
        examples: [
          {
            written: 'привет',
            stressed: 'приве́т',
            readAs: 'pri-VÈT',
            meaningIt: 'ciao',
            ttsRu: 'привет'
          }
        ]
      }
    ]
  },
  {
    index: 18,
    uppercase: 'Р',
    lowercase: 'р',
    nameRu: 'Эр',
    nameTtsRu: 'эр',
    namePhoneticIt: 'er',
    soundTtsRu: 'ррр',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: true,
    falseFriendWarning: 'Falso amico! Sembra una P latina, ma si legge R arrotata come in italiano!',
    soundIt: 'R vibrante e bella arrotata come in "roma" o "rana" (MAI P!)',
    ipa: '[r] / [rʲ]',
    cursiveNote: 'Si scrive esattamente come una "p" corsiva italiana!',
    mnemonic: {
      wordRu: 'Рыба',
      wordStressed: 'Ры́ба',
      ttsRu: 'Рыба',
      phoneticIt: 'RÝ-ba',
      wordIt: 'Pesce',
      visualTrick: 'Immagina che la Р sia una bandierina al vento che sventola facendo Rrrrr!'
    },
    teacherLesson: {
      intro: 'Un altro "falso amico", ma per noi italiani ha una bellissima sorpresa: si scrive come una P, ma si legge R arrotata esattamente come in italiano!',
      mouthTip: 'Fai vibrare la punta della lingua contro il palato dietro i denti: Rrrr! Noi italiani siamo fortunati perché questo suono ci viene naturale!',
      comparisonIt: 'Identica alla R italiana di "rana" e "mare".'
    },
    syllables: [
      { syllable: 'РА', ttsRu: 'ра', phoneticIt: 'ra' },
      { syllable: 'РО', ttsRu: 'ро', phoneticIt: 'ro' },
      { syllable: 'РУ', ttsRu: 'ру', phoneticIt: 'ru' },
      { syllable: 'РЫ', ttsRu: 'ры', phoneticIt: 'ry' },
      { syllable: 'РЯ', ttsRu: 'ря', phoneticIt: 'r\'a (R dolce)' }
    ],
    examples: [
      {
        displayRu: 'Ры́ба',
        ttsRu: 'Рыба',
        phoneticIt: 'RÝ-ba',
        meaningIt: 'Pesce'
      },
      {
        displayRu: 'Рука́',
        ttsRu: 'Рука',
        phoneticIt: 'ru-KÀ',
        meaningIt: 'Mano / Braccio'
      },
      {
        displayRu: 'Ра́дуга',
        ttsRu: 'Радуга',
        phoneticIt: 'RÀ-du-ga',
        meaningIt: 'Arcobaleno'
      }
    ],
    miniPhrase: {
      displayRu: 'Золота́я ры́ба плывёт в мо́ре.',
      ttsRu: 'Золотая рыба плывёт в море.',
      phoneticIt: 'za-la-TÀ-ya RÝ-ba ply-V\'YÒT v MÒ-rye',
      meaningIt: 'Il pesce dorato nuota nel mare.'
    },
    exceptions: [
      {
        title: 'Р dolce (ря, ре, рё, рю, ри, рь)',
        ruleSummary: 'Quando è seguita da vocali dolci, la Р ha un solo tocco vibrante morbido',
        explanationIt: 'A differenza della R dura (che vibra forte), la Р dolce in parole come "море" (mare) o "дверь" (porta) vibra un attimo con la lingua leggermente sollevata verso il palato.',
        examples: [
          {
            written: 'море',
            stressed: 'мо́ре',
            readAs: 'MÒ-r\'e',
            meaningIt: 'mare',
            ttsRu: 'море'
          },
          {
            written: 'дверь',
            stressed: 'две́рь',
            readAs: 'dver\'',
            meaningIt: 'porta',
            ttsRu: 'дверь'
          }
        ]
      }
    ]
  },
  {
    index: 19,
    uppercase: 'С',
    lowercase: 'с',
    nameRu: 'Эс',
    nameTtsRu: 'эс',
    namePhoneticIt: 'es',
    soundTtsRu: 'ссс',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: true,
    falseFriendWarning: 'Falso amico! Sembra una C, ma si legge sempre S sibilante come "sole"!',
    soundIt: 'S sorda come un serpente in "sole" o "sasso" (MAI C o K!)',
    ipa: '[s] / [sʲ]',
    cursiveNote: 'Identica alla nostra C corsiva!',
    mnemonic: {
      wordRu: 'Солнце',
      wordStressed: 'Со́лнце',
      ttsRu: 'Солнце',
      phoneticIt: 'SÒN-tse',
      wordIt: 'Sole',
      visualTrick: 'La С sembra uno spicchio di luna o un mezzo Sole brillante che sibila: Ssss!'
    },
    teacherLesson: {
      intro: 'Ecco un falso amico che trae sempre in inganno all\'inizio: la С russa sembra proprio una C, ma si legge sempre S come "sole"!',
      mouthTip: 'Avvicina i denti e lascia uscire un filo d\'aria come un piccolo serpente: Ssss!',
      comparisonIt: 'Come la S di "sole" e "sedia". Quando è dolce (ся, се, си) suona come la S di "sì" molto sorridente.'
    },
    syllables: [
      { syllable: 'СА', ttsRu: 'са', phoneticIt: 'sa' },
      { syllable: 'СО', ttsRu: 'со', phoneticIt: 'so' },
      { syllable: 'СУ', ttsRu: 'су', phoneticIt: 'su' },
      { syllable: 'СЫ', ttsRu: 'сы', phoneticIt: 'sy' },
      { syllable: 'СЯ', ttsRu: 'ся', phoneticIt: 's\'a' }
    ],
    examples: [
      {
        displayRu: 'Со́лнце',
        ttsRu: 'Солнце',
        phoneticIt: 'SÒN-tse',
        meaningIt: 'Sole',
        noteIt: 'Ricorda: la Л qui è muta!'
      },
      {
        displayRu: 'Соба́ка',
        ttsRu: 'Собака',
        phoneticIt: 'sa-BÀ-ka',
        meaningIt: 'Cane'
      },
      {
        displayRu: 'Сы́р',
        ttsRu: 'Сыр',
        phoneticIt: 'syr',
        meaningIt: 'Formaggio'
      }
    ],
    miniPhrase: {
      displayRu: 'У́тром све́тит я́ркое со́лнце.',
      ttsRu: 'Утром светит яркое солнце.',
      phoneticIt: 'ÙT-ram SVÈ-tit YÀR-ka-ye SÒN-tse',
      meaningIt: 'Al mattino splende un sole luminoso.'
    },
    exceptions: [
      {
        title: 'Sonorizzazione: С diventa З davanti a consonanti sonore!',
        ruleSummary: 'Davanti a Б, Д, Г, Ж, З la С inizia a vibrare e si legge З (S di rosa)!',
        explanationIt: 'Se la preposizione "с" o il prefisso "с-" incontra una consonante sonora come Д o Б, si trasforma subito in una З ronzante!',
        examples: [
          {
            written: 'сделать',
            stressed: 'сде́лать',
            readAs: 'ZDÈ-lat\' (NON sdelat!)',
            meaningIt: 'fare / completare',
            ttsRu: 'сделать'
          },
          {
            written: 'сбор',
            stressed: 'сбо́р',
            readAs: 'zbor',
            meaningIt: 'raccolta / raduno',
            ttsRu: 'сбор'
          }
        ]
      },
      {
        title: 'Assimilazione speciale: СЧ suona Щ!',
        ruleSummary: 'Le lettere С+Ч insieme si fondono in un unico suono Щ (sc lunga morbida)',
        explanationIt: 'Quando vedi СЧ una dopo l\'altra (come in "счастье", felicità, o "счёт", conto), si fondono in una morbida "shch"!',
        examples: [
          {
            written: 'счастье',
            stressed: 'сча́стье',
            readAs: 'SHCHÀS-t\'ye',
            meaningIt: 'felicità',
            ttsRu: 'счастье'
          },
          {
            written: 'счёт',
            stressed: 'счёт',
            readAs: 'shchot',
            meaningIt: 'conto (al ristorante)',
            ttsRu: 'счёт'
          }
        ]
      }
    ]
  },
  {
    index: 20,
    uppercase: 'Т',
    lowercase: 'т',
    nameRu: 'Тэ',
    nameTtsRu: 'тэ',
    namePhoneticIt: 'tè',
    soundTtsRu: 'т',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'T secca e precisa come in "tavolo" o "tigre"',
    ipa: '[t] / [tʲ]',
    cursiveNote: 'ALLERTA MASSIMA in corsivo! La minuscola corsiva "т" ha tre gambette e si scrive esattamente come la nostra "m" latina!',
    cursiveTrap: 'In corsivo la minuscola т sembra identica alla nostra "m" italiana!',
    mnemonic: {
      wordRu: 'Тигр',
      wordStressed: 'Ти́гр',
      ttsRu: 'Тигр',
      phoneticIt: 'tigr',
      wordIt: 'Tigre',
      visualTrick: 'La Т è uguale alla T italiana, come un tavolino robusto o le strisce dritte di una Tigre!'
    },
    teacherLesson: {
      intro: 'In stampatello la Т è identica alla nostra T! Però da maestra devo darti subito un avvertimento d\'oro per quando leggerai il corsivo russo: la "т" minuscola scritta a mano sembra una "m"!',
      mouthTip: 'Tocca i denti superiori con la punta della lingua e staccala secca: T! Senza soffiare come in inglese.',
      comparisonIt: 'Identica alla T italiana di "treno" e "torta".'
    },
    syllables: [
      { syllable: 'ТА', ttsRu: 'та', phoneticIt: 'ta' },
      { syllable: 'ТО', ttsRu: 'то', phoneticIt: 'to' },
      { syllable: 'ТУ', ttsRu: 'ту', phoneticIt: 'tu' },
      { syllable: 'ТЫ', ttsRu: 'ты', phoneticIt: 'ty (tu!)' },
      { syllable: 'ТИ', ttsRu: 'ти', phoneticIt: 't\'i (T dolce)' }
    ],
    examples: [
      {
        displayRu: 'Ти́гр',
        ttsRu: 'Тигр',
        phoneticIt: 'tigr',
        meaningIt: 'Tigre'
      },
      {
        displayRu: 'Торт',
        ttsRu: 'То́рт',
        phoneticIt: 'tort',
        meaningIt: 'Torta'
      },
      {
        displayRu: 'Те́традь',
        ttsRu: 'Тетрадь',
        phoneticIt: 'tit-RÀT\'',
        meaningIt: 'Quaderno'
      }
    ],
    miniPhrase: {
      displayRu: 'На столе́ стои́т вкусны́й то́рт.',
      ttsRu: 'На столе стоит вкусный торт.',
      phoneticIt: 'na sta-LÈ sta-ÌT VKÙS-nyy tort',
      meaningIt: 'Sul tavolo c\'è una torta deliziosa.'
    },
    exceptions: [
      {
        title: 'La Т muta nei gruppi СТН e СТЛ!',
        ruleSummary: 'In mezzo a СТН o СТЛ la Т scompare nella pronuncia!',
        explanationIt: 'Per rendere più fluido il parlato, quando la Т è schiacciata tra С e Н (o Л) non si pronuncia affatto.',
        examples: [
          {
            written: 'лестница',
            stressed: 'ле́стница',
            readAs: 'LÈS-ni-tsa (la Т è muta!)',
            meaningIt: 'scala',
            ttsRu: 'лестница'
          },
          {
            written: 'грустный',
            stressed: 'гру́стный',
            readAs: 'GRÙS-nyy',
            meaningIt: 'triste',
            ttsRu: 'грустный'
          },
          {
            written: 'счастливый',
            stressed: 'счастли́вый',
            readAs: 'shchis-LÌ-vyy',
            meaningIt: 'felice',
            ttsRu: 'счастливый'
          }
        ]
      },
      {
        title: 'Finali verbali -ТСЯ / -ТЬСЯ si leggono ЦА!',
        ruleSummary: 'I verbi riflessivi che finiscono in -тся o -ться si pronunciano sempre "ца" (tsa)',
        explanationIt: 'Non cercare di dire "t-sya"! In tutto il russo, -тся e -ться alla fine dei verbi si fondono in una secca "ЦА" (come la Z di pizza + A).',
        examples: [
          {
            written: 'учиться',
            stressed: 'учи́ться',
            readAs: 'u-CHÌT-tsa',
            meaningIt: 'studiare / imparare',
            ttsRu: 'учиться'
          },
          {
            written: 'нравится',
            stressed: 'нра́вится',
            readAs: 'NRÀ-vit-tsa',
            meaningIt: 'piace',
            ttsRu: 'нравится'
          }
        ]
      }
    ]
  },
  {
    index: 21,
    uppercase: 'У',
    lowercase: 'у',
    nameRu: 'У',
    nameTtsRu: 'у',
    namePhoneticIt: 'u',
    soundTtsRu: 'ууу',
    category: 'vowel',
    hardness: 'hard-indicator',
    hardnessLabel: 'Vocale dura',
    isFalseFriend: true,
    falseFriendWarning: 'Falso amico! Sembra una Y latina, ma si legge sempre U come "uva"!',
    soundIt: 'U tonda e chiusa come in "uva" o "luna" (MAI I o Y!)',
    ipa: '[u]',
    cursiveNote: 'La minuscola corsiva è identica a una "y" corsiva italiana!',
    mnemonic: {
      wordRu: 'Утка',
      wordStressed: 'У́тка',
      ttsRu: 'Утка',
      phoneticIt: 'ÙT-ka',
      wordIt: 'Anatra',
      visualTrick: 'La У sembra il becco simpatico di un\'anatroccola o il verso del gufo: Uuu-uuu!'
    },
    teacherLesson: {
      intro: 'Fai attenzione a questo falso amico divertente: la У sembra una Y dell\'alfabeto inglese, ma in russo è una nostra vecchia conoscenza: la vocale U!',
      mouthTip: 'Spingi bene in fuori le labbra a forma di piccolo bacio o di fischietto: Uuu!',
      comparisonIt: 'Identica alla U italiana di "uva" e "uno".'
    },
    syllables: [
      { syllable: 'МУ', ttsRu: 'му', phoneticIt: 'mu' },
      { syllable: 'СУ', ttsRu: 'су', phoneticIt: 'su' },
      { syllable: 'ЛУ', ttsRu: 'лу', phoneticIt: 'lu' },
      { syllable: 'КУ', ttsRu: 'ку', phoneticIt: 'ku' },
      { syllable: 'УТ', ttsRu: 'ут', phoneticIt: 'ut' }
    ],
    examples: [
      {
        displayRu: 'У́тка',
        ttsRu: 'Утка',
        phoneticIt: 'ÙT-ka',
        meaningIt: 'Anatra'
      },
      {
        displayRu: 'У́тро',
        ttsRu: 'Утро',
        phoneticIt: 'ÙT-ra',
        meaningIt: 'Mattina'
      },
      {
        displayRu: 'Ули́тка',
        ttsRu: 'Улитка',
        phoneticIt: 'u-LÌT-ka',
        meaningIt: 'Lumaca'
      }
    ],
    miniPhrase: {
      displayRu: 'У́тка пла́вает в пруду́.',
      ttsRu: 'Утка плавает в пруду.',
      phoneticIt: 'ÙT-ka PLÀ-va-yit v pru-DÙ',
      meaningIt: 'L\'anatra nuota nello stagno.'
    },
    exceptions: [
      {
        title: 'La У non cambia MAI timbro!',
        ruleSummary: 'A differenza di О ed Е, la У atona resta sempre U (solo più breve)',
        explanationIt: 'Una buona notizia: la У non si trasforma in "a" né in "i" quando perde l\'accento! Resta sempre una U chiara, proprio come la nostra.',
        examples: [
          {
            written: 'улыбка',
            stressed: 'улы́бка',
            readAs: 'u-LÝP-ka',
            meaningIt: 'sorriso',
            ttsRu: 'улыбка'
          },
          {
            written: 'учитель',
            stressed: 'учи́тель',
            readAs: 'u-CHÌ-til\'',
            meaningIt: 'insegnante / maestro',
            ttsRu: 'учитель'
          }
        ]
      }
    ]
  },
  {
    index: 22,
    uppercase: 'Ф',
    lowercase: 'ф',
    nameRu: 'Эф',
    nameTtsRu: 'эф',
    namePhoneticIt: 'ef',
    soundTtsRu: 'ффф',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: false,
    soundIt: 'F come in "fiore" o "farfalla"',
    ipa: '[f] / [fʲ]',
    cursiveNote: 'Due eleganti cerchietti separati da una stanghetta verticale lunga, come un fiocco!',
    mnemonic: {
      wordRu: 'Фламинго',
      wordStressed: 'Флами́нго',
      ttsRu: 'Фламинго',
      phoneticIt: 'fla-MÌN-ga',
      wordIt: 'Fenicottero',
      visualTrick: 'Sembra un fenicottero elegante che sta in equilibrio su una zampa sola, oppure un gufetto con due grandi occhiali!'
    },
    teacherLesson: {
      intro: 'Guarda com\'è elegante la Ф: una riga dritta con due cerchi ai lati! È molto rara nelle antiche parole slave, ma frequentissima in tutte le parole internazionali come "телефон" o "кофе"!',
      mouthTip: 'Appoggia i denti superiori sul labbro inferiore e soffia solo aria senza voce: Ffff!',
      comparisonIt: 'Identica alla F italiana di "festa" e "foto".'
    },
    syllables: [
      { syllable: 'ФА', ttsRu: 'фа', phoneticIt: 'fa' },
      { syllable: 'ФО', ttsRu: 'фо', phoneticIt: 'fo' },
      { syllable: 'ФУ', ttsRu: 'фу', phoneticIt: 'fu' },
      { syllable: 'ФИ', ttsRu: 'фи', phoneticIt: 'fi' },
      { syllable: 'ФЕ', ttsRu: 'фе', phoneticIt: 'fe' }
    ],
    examples: [
      {
        displayRu: 'Флами́нго',
        ttsRu: 'Фламинго',
        phoneticIt: 'fla-MÌN-ga',
        meaningIt: 'Fenicottero'
      },
      {
        displayRu: 'Фона́рь',
        ttsRu: 'Фонарь',
        phoneticIt: 'fa-NÀR\'',
        meaningIt: 'Lanterna / Lampione'
      },
      {
        displayRu: 'Ко́фе',
        ttsRu: 'Кофе',
        phoneticIt: 'KÒ-fye',
        meaningIt: 'Caffè'
      }
    ],
    miniPhrase: {
      displayRu: 'Ро́зовый флами́нго стои́т у воды́.',
      ttsRu: 'Розовый фламинго стоит у воды.',
      phoneticIt: 'RÒ-za-vyy fla-MÌN-ga sta-ÌT u va-DÝ',
      meaningIt: 'Il fenicottero rosa sta vicino all\'acqua.'
    },
    exceptions: [
      {
        title: 'Ф e В sono gemelle (sorda / sonora)',
        ruleSummary: 'La В finale diventa Ф; raramente la Ф davanti a sonora diventa В',
        explanationIt: 'La Ф quasi non cambia mai suono; al massimo ricorda che molte parole che senti finire in "-f" (come лев, остров, шкаф) si scrivono invece con la В o con la Ф!',
        examples: [
          {
            written: 'шкаф',
            stressed: 'шка́ф',
            readAs: 'shkaf',
            meaningIt: 'armadio',
            ttsRu: 'шкаф'
          },
          {
            written: 'остров',
            stressed: 'о́стров',
            readAs: 'ÒS-traf (si scrive В, si legge F!)',
            meaningIt: 'isola',
            ttsRu: 'остров'
          }
        ]
      }
    ]
  },
  {
    index: 23,
    uppercase: 'Х',
    lowercase: 'х',
    nameRu: 'Ха',
    nameTtsRu: 'ха',
    namePhoneticIt: 'kha',
    soundTtsRu: 'ххх',
    category: 'consonant',
    hardness: 'paired',
    hardnessLabel: 'Consonante (dura o dolce)',
    isFalseFriend: true,
    falseFriendWarning: 'Falso amico! Sembra una X, ma si legge KH aspirata (MAI "ks"!)',
    soundIt: 'H fortemente aspirata dal fondo della gola (come "Bach" in tedesco o "J" spagnola)',
    ipa: '[x] / [xʲ]',
    cursiveNote: 'Due parentesi curve che si toccano al centro, esattamente come una "x" elegante scritta con due semicerchi.',
    mnemonic: {
      wordRu: 'Хлеб',
      wordStressed: 'Хле́б',
      ttsRu: 'Хлеб',
      phoneticIt: 'khlep',
      wordIt: 'Pane',
      visualTrick: 'Immagina di alitare sui vetri freddi d\'inverno per appannarli prima di disegnarci una X: Khhh!'
    },
    teacherLesson: {
      intro: 'Attenzione a quest\'altro falso amico: la Х NON si legge mai "ics" (ks)! È un soffio caldo dal fondo della gola, proprio come quando aliti su uno specchio o sul vetro freddo!',
      mouthTip: 'Avvicina la parte posteriore della lingua al palato (come per dire "K"), ma invece di chiudere lascia passare un forte soffio d\'aria: Khhh! Più dolce della "c" toscana, simile alla "ch" tedesca di "Bach".',
      comparisonIt: 'Come una H molto soffiata e ruvida dalla gola; davanti a Е o И diventa più leggera (come una H inglese di "hi").'
    },
    syllables: [
      { syllable: 'ХА', ttsRu: 'ха', phoneticIt: 'kha (risata: ха-ха!)' },
      { syllable: 'ХО', ttsRu: 'хо', phoneticIt: 'kho' },
      { syllable: 'ХУ', ttsRu: 'ху', phoneticIt: 'khu' },
      { syllable: 'ХИ', ttsRu: 'хи', phoneticIt: 'khi (leggera)' },
      { syllable: 'ХЕ', ttsRu: 'хе', phoneticIt: 'khe' }
    ],
    examples: [
      {
        displayRu: 'Хле́б',
        ttsRu: 'Хлеб',
        phoneticIt: 'khlep',
        meaningIt: 'Pane',
        noteIt: 'Ricorda anche la Б finale che diventa П!'
      },
      {
        displayRu: 'Хорошо́',
        ttsRu: 'Хорошо',
        phoneticIt: 'kha-ra-SHÒ',
        meaningIt: 'Bene / Va bene'
      },
      {
        displayRu: 'Хо́лодно',
        ttsRu: 'Холодно',
        phoneticIt: 'KHÒ-lad-na',
        meaningIt: 'Fa freddo'
      }
    ],
    miniPhrase: {
      displayRu: 'Све́жий хле́б па́хнет о́чень хорошо́.',
      ttsRu: 'Свежий хлеб пахнет очень хорошо.',
      phoneticIt: 'SVÈ-zhyy khlep PÀKH-nit Ò-chin\' kha-ra-SHÒ',
      meaningIt: 'Il pane fresco profuma molto bene.'
    },
    exceptions: [
      {
        title: 'Х davanti a И/Е vs davanti a А/О/У',
        ruleSummary: 'Con А, О, У è forte dalla gola; con И, Е diventa soffice e anteriore',
        explanationIt: 'In parole come "химия" (chimica) o "хитрый" (furbo), la Х diventa molto più leggera e morbida rispetto a "хорошо".',
        examples: [
          {
            written: 'химия',
            stressed: 'хи́мия',
            readAs: 'KHÌ-mi-ya (H leggera)',
            meaningIt: 'chimica',
            ttsRu: 'химия'
          }
        ]
      }
    ]
  },
  {
    index: 24,
    uppercase: 'Ц',
    lowercase: 'ц',
    nameRu: 'Цэ',
    nameTtsRu: 'цэ',
    namePhoneticIt: 'tsè',
    soundTtsRu: 'ц',
    category: 'consonant',
    hardness: 'always-hard',
    hardnessLabel: 'Consonante SEMPRE dura',
    isFalseFriend: false,
    soundIt: 'TS secca e dura come la ZZ di "pizza" o "ragazzo"!',
    ipa: '[t͡s]',
    cursiveNote: 'Sembra una И corsiva (che ricorda una "u") con un piccolo occhiello che scende sotto il rigo a destra.',
    mnemonic: {
      wordRu: 'Цветок',
      wordStressed: 'Цвето́к',
      ttsRu: 'Цветок',
      phoneticIt: 'tsvi-TÒK',
      wordIt: 'Fiore',
      visualTrick: 'Sembra un piccolo vaso rettangolare con una radice che spunta in basso a destra: è il vaso del Fiore (Цветок)!'
    },
    teacherLesson: {
      intro: 'Questa lettera con la codina in giù a destra è facilissima per noi italiani: suona esattamente come la doppia Z sorda della parola "pizza" o "zio" (al Nord)!',
      mouthTip: 'Metti la punta della lingua dietro i denti come per fare "T" e falla esplodere subito in una "S": T-S! È sempre una lettera secca e dura.',
      comparisonIt: 'Identica alla ZZ di "pizza", "tazza", "prezzo".'
    },
    syllables: [
      { syllable: 'ЦА', ttsRu: 'ца', phoneticIt: 'tsa' },
      { syllable: 'ЦО', ttsRu: 'цо', phoneticIt: 'tso' },
      { syllable: 'ЦУ', ttsRu: 'цу', phoneticIt: 'tsu' },
      { syllable: 'ЦЫ', ttsRu: 'цы', phoneticIt: 'tsy' },
      { syllable: 'ЦИ', ttsRu: 'ци', phoneticIt: 'tsy (suona ЦЫ!)', isTrap: true, trapNote: 'Si scrive ЦИ ma suona ЦЫ!' }
    ],
    examples: [
      {
        displayRu: 'Цвето́к',
        ttsRu: 'Цветок',
        phoneticIt: 'tsvi-TÒK',
        meaningIt: 'Fiore'
      },
      {
        displayRu: 'Ци́рк',
        ttsRu: 'Цирк',
        phoneticIt: 'tsyrk',
        meaningIt: 'Circo',
        noteIt: 'Si scrive ЦИ ma suona TSY!'
      },
      {
        displayRu: 'Цыплёнок',
        ttsRu: 'Цыплёнок',
        phoneticIt: 'tsyp-L\'Ò-nak',
        meaningIt: 'Pulcino'
      }
    ],
    miniPhrase: {
      displayRu: 'В саду́ расцвёл краси́вый цвето́к.',
      ttsRu: 'В саду расцвёл красивый цветок.',
      phoneticIt: 'v sa-DÙ ras-TSV\'ÒL kra-SÌ-vyy tsvi-TÒK',
      meaningIt: 'Nel giardino è sbocciato un bel fiore.'
    },
    exceptions: [
      {
        title: 'La regola ЦИ vs ЦЫ (l\'eccezione dei 4 amici!)',
        ruleSummary: 'Si scrive quasi sempre ЦИ (tranne nelle desinenze e in 4 parole storiche), ma si legge SEMPRE ЦЫ!',
        explanationIt: 'La Ц è sempre dura! Nelle radici delle parole si scrive quasi sempre ЦИ (es. цирк, цифра, медицина) anche se si legge "tsy". Ma i bambini russi imparano questa filastrocca con le eccezioni famose che si scrivono con la Ы: "цыган на цыпочках цыплёнку цыкнул цыц!"',
        examples: [
          {
            written: 'цифра',
            stressed: 'ци́фра',
            readAs: 'TSÝF-ra (scritta И, letta Ы!)',
            meaningIt: 'cifra / numero',
            ttsRu: 'цифра'
          },
          {
            written: 'цыплёнок',
            stressed: 'цыплёнок',
            readAs: 'tsyp-L\'Ò-nak (eccezione scritta con Ы)',
            meaningIt: 'pulcino',
            ttsRu: 'цыплёнок'
          },
          {
            written: 'цыпочки',
            stressed: 'цы́почки',
            readAs: 'TSÝ-pach-ki',
            meaningIt: 'punta dei piedi',
            ttsRu: 'цыпочки'
          }
        ]
      }
    ]
  },
  {
    index: 25,
    uppercase: 'Ч',
    lowercase: 'ч',
    nameRu: 'Че',
    nameTtsRu: 'че',
    namePhoneticIt: 'ch’è',
    soundTtsRu: 'ч',
    category: 'consonant',
    hardness: 'always-soft',
    hardnessLabel: 'Consonante SEMPRE dolce',
    isFalseFriend: false,
    soundIt: 'C dolce come in "ciao" o "cena", ma ancora più soffice!',
    ipa: '[t͡ɕ]',
    cursiveNote: 'Sembra il numero 4 scritto a mano con la curva morbida in alto!',
    mnemonic: {
      wordRu: 'Чайник',
      wordStressed: 'Ча́йник',
      ttsRu: 'Чайник',
      phoneticIt: 'CHÀY-nik',
      wordIt: 'Teiera',
      visualTrick: 'Guarda la Ч: sembra proprio una piccola tazza con il manico o un mestolo visto di lato!'
    },
    teacherLesson: {
      intro: 'La Ч è la nostra "C" dolce di "ciao" e "cioccolato", ma fatta con un bel sorriso! È una consonante SEMPRE morbida: non diventa mai dura nemmeno davanti ad А o У.',
      mouthTip: 'Appoggia il centro della lingua al palato e sorridi leggermente dicendo "Ci": Ciao, Чай!',
      comparisonIt: 'Come la C di "ciao", "cena", "ciambella".'
    },
    syllables: [
      { syllable: 'ЧА', ttsRu: 'ча', phoneticIt: 'cha (ciao)' },
      { syllable: 'ЧО', ttsRu: 'чо', phoneticIt: 'cho' },
      { syllable: 'ЧУ', ttsRu: 'чу', phoneticIt: 'chu' },
      { syllable: 'ЧИ', ttsRu: 'чи', phoneticIt: 'chi (ci di "cinema")' },
      { syllable: 'ЧЕ', ttsRu: 'че', phoneticIt: 'che (ce di "cena")' }
    ],
    examples: [
      {
        displayRu: 'Ча́йник',
        ttsRu: 'Чайник',
        phoneticIt: 'CHÀY-nik',
        meaningIt: 'Teiera / Bollitore'
      },
      {
        displayRu: 'Часы́',
        ttsRu: 'Часы',
        phoneticIt: 'chi-SÝ',
        meaningIt: 'Orologio'
      },
      {
        displayRu: 'Черепа́ха',
        ttsRu: 'Черепаха',
        phoneticIt: 'chi-ri-PÀ-kha',
        meaningIt: 'Tartaruga'
      }
    ],
    miniPhrase: {
      displayRu: 'На столе́ стои́т горя́чий ча́йник.',
      ttsRu: 'На столе стоит горячий чайник.',
      phoneticIt: 'na sta-LÈ sta-ÌT ga-R\'À-chiy CHÀY-nik',
      meaningIt: 'Sul tavolo c\'è una teiera calda.'
    },
    exceptions: [
      {
        title: 'Eccezione famosissima: ЧТ in "что" si legge ШТ (SH)!',
        ruleSummary: 'Nella parola "что" (cosa/che) e "чтобы", ЧТ si pronuncia ШТ (shto)!',
        explanationIt: 'È forse la parola più usata in tutta la lingua russa: "что" (cosa/che). NON si legge mai "chto"! Si pronuncia esattamente "SHTO"!',
        examples: [
          {
            written: 'что',
            stressed: 'что́',
            readAs: 'shto (NON chto!)',
            meaningIt: 'che cosa / che',
            ttsRu: 'что'
          },
          {
            written: 'чтобы',
            stressed: 'что́бы',
            readAs: 'SHTÒ-by',
            meaningIt: 'affinché / per',
            ttsRu: 'чтобы'
          },
          {
            written: 'ничего',
            stressed: 'ничего́',
            readAs: 'ni-chi-VÒ (qui Ч resta CH, ma Г = V!)',
            meaningIt: 'niente / tutto bene',
            ttsRu: 'ничего'
          }
        ]
      },
      {
        title: 'Eccezione: ЧН in "конечно" e "скучно" si legge ШН!',
        ruleSummary: 'In alcune parole comuni, ЧН si trasforma in ШН (shn)',
        explanationIt: 'Per comodità nella lingua di tutti i giorni, "конечно" (certamente), "скучно" (noioso) e "яичница" (uovo al tegamino) si leggono con SH invece di CH.',
        examples: [
          {
            written: 'конечно',
            stressed: 'коне́чно',
            readAs: 'ka-NÈSH-na (NON konechno!)',
            meaningIt: 'certamente / certo',
            ttsRu: 'конечно'
          },
          {
            written: 'скучно',
            stressed: 'ску́чно',
            readAs: 'SKÙSH-na',
            meaningIt: 'noioso',
            ttsRu: 'скучно'
          },
          {
            written: 'яичница',
            stressed: 'яи́чница',
            readAs: 'yi-ÌSH-ni-tsa',
            meaningIt: 'uova strapazzate / al tegamino',
            ttsRu: 'яичница'
          }
        ]
      },
      {
        title: 'Regola ortografica: sempre ЧА e ЧУ!',
        ruleSummary: 'Dopo Ч si scrive sempre А e У (mai Я né Ю)',
        explanationIt: 'Anche se il suono è morbido come "cia" e "ciu", l\'ortografia vieta ЧЯ e ЧЮ: si scrive sempre ЧА e ЧУ.',
        examples: [
          {
            written: 'чудо',
            stressed: 'чу́до',
            readAs: 'CHÙ-da',
            meaningIt: 'miracolo / meraviglia',
            ttsRu: 'чудо'
          }
        ]
      }
    ]
  },
  {
    index: 26,
    uppercase: 'Ш',
    lowercase: 'ш',
    nameRu: 'Ша',
    nameTtsRu: 'ша',
    namePhoneticIt: 'sha',
    soundTtsRu: 'шшш',
    category: 'consonant',
    hardness: 'always-hard',
    hardnessLabel: 'Consonante SEMPRE dura',
    isFalseFriend: false,
    soundIt: 'SH dura e piena (come "sc" di "scena", ma con la lingua tirata un po\' indietro)',
    ipa: '[ʂ]',
    cursiveNote: 'Tre gambette unite in basso; attenzione in corsivo a mettere una leggera stanghetta o chiarezza rispetto alla и e alla щ!',
    mnemonic: {
      wordRu: 'Шар',
      wordStressed: 'Ша́р',
      ttsRu: 'Шар',
      phoneticIt: 'shar',
      wordIt: 'Palloncino / Sfera',
      visualTrick: 'Sembra il vento tra le fronde di tre alberelli o l\'erba alta che fruscia: Shhhhh!'
    },
    teacherLesson: {
      intro: 'Fai silenzio in classe: Shhhh! Ecco la Ш! È molto simile al nostro suono "sc" di "sciarpa", ma in russo questa consonante è SEMPRE dura e profonda.',
      mouthTip: 'Arrotonda leggermente le labbra, tira un po\' indietro la punta della lingua verso il centro del palato e soffia: Shhh! Più grave del nostro "sc".',
      comparisonIt: 'Simile a "sciarpa" o "pesce", ma pronunciata più in profondità nella bocca.'
    },
    syllables: [
      { syllable: 'ША', ttsRu: 'ша', phoneticIt: 'sha' },
      { syllable: 'ШО', ttsRu: 'шо', phoneticIt: 'sho' },
      { syllable: 'ШУ', ttsRu: 'шу', phoneticIt: 'shu' },
      { syllable: 'ШИ', ttsRu: 'ши', phoneticIt: 'shy (suona ШЫ!)', isTrap: true, trapNote: 'Si scrive ШИ ma si legge ШЫ!' },
      { syllable: 'ШЕ', ttsRu: 'ше', phoneticIt: 'she (dura!)', isTrap: true }
    ],
    examples: [
      {
        displayRu: 'Ша́р',
        ttsRu: 'Шар',
        phoneticIt: 'shar',
        meaningIt: 'Palloncino / Sfera'
      },
      {
        displayRu: 'Ша́пка',
        ttsRu: 'Шапка',
        phoneticIt: 'SHÀP-ka',
        meaningIt: 'Cappello / Berretto'
      },
      {
        displayRu: 'Шко́ла',
        ttsRu: 'Школа',
        phoneticIt: 'SHKÒ-la',
        meaningIt: 'Scuola'
      }
    ],
    miniPhrase: {
      displayRu: 'Кра́сный ша́р лети́т высоко́.',
      ttsRu: 'Красный шар летит высоко.',
      phoneticIt: 'KRÀS-nyy shar li-TÌT vy-sa-KÒ',
      meaningIt: 'Il palloncino rosso vola in alto.'
    },
    exceptions: [
      {
        title: 'Regola sacra: ШИ si legge ШЫ!',
        ruleSummary: 'Anche dopo Ш, la И si legge Ы (profonda e dura)',
        explanationIt: 'Come per la Ж, in russo non si scrive mai ШЫ: si scrive sempre ШИ (es. машина, шишка), ma si pronuncia con il suono profondo della Ы!',
        examples: [
          {
            written: 'шишка',
            stressed: 'ши́шка',
            readAs: 'SHÝSH-ka (NON shishka!)',
            meaningIt: 'pigna',
            ttsRu: 'шишка'
          },
          {
            written: 'большой',
            stressed: 'большо́й',
            readAs: 'bal\'-SHÒY',
            meaningIt: 'grande',
            ttsRu: 'большой'
          }
        ]
      },
      {
        title: 'Ш + Ь è puramente grammaticale!',
        ruleSummary: 'La Ь dopo Ш (es. мышь, пишешь) NON ammorbidisce la Ш!',
        explanationIt: 'Se vedi un segno dolce (Ь) dopo la Ш, serve solo per indicare il genere femminile o la seconda persona del verbo: la Ш resta dura al 100%!',
        examples: [
          {
            written: 'мышь',
            stressed: 'мы́шь',
            readAs: 'mysh (la Ш resta dura!)',
            meaningIt: 'topo',
            ttsRu: 'мышь'
          }
        ]
      }
    ]
  },
  {
    index: 27,
    uppercase: 'Щ',
    lowercase: 'щ',
    nameRu: 'Ща',
    nameTtsRu: 'ща',
    namePhoneticIt: 'shcha',
    soundTtsRu: 'щщщ',
    category: 'consonant',
    hardness: 'always-soft',
    hardnessLabel: 'Consonante SEMPRE dolce e lunga',
    isFalseFriend: false,
    soundIt: 'SC dolce e LUNGA, come la "sc" di "scena" o "pesce" tenuta per il doppio del tempo!',
    ipa: '[ɕː]',
    cursiveNote: 'Uguale alla ш corsiva ma con un piccolo occhiello che scende sotto il rigo a destra (come la ц).',
    mnemonic: {
      wordRu: 'Щётка',
      wordStressed: 'Щётка',
      ttsRu: 'Щётка',
      phoneticIt: 'SHCHÒT-ka',
      wordIt: 'Spazzola',
      visualTrick: 'È identica alla Ш ma con una piccola coda di spazzola che pulisce il pavimento: Shch-shch!'
    },
    teacherLesson: {
      intro: 'Ecco la sorella sorridente della Ш! Molti libri la trascrivono "shch", ma io da maestra ti do un trucco segreto semplicissimo per dirla subito bene da italiano: è la nostra "SC" di "scena" o "sci" pronunciata con un bel sorriso e tenuta un po\' più a lungo!',
      mouthTip: 'Sorridi leggermente, porta la lingua in avanti verso i denti (al contrario della Ш!) e tieni il suono dolce: Sssscii! Non aggiungere una "c" dura o una "t" in mezzo.',
      comparisonIt: 'Come "sc" di "lascia" o "scena" raddoppiata e molto dolce.'
    },
    syllables: [
      { syllable: 'ЩА', ttsRu: 'ща', phoneticIt: 'shcha (scia lunga)' },
      { syllable: 'ЩУ', ttsRu: 'щу', phoneticIt: 'shchu (sciu lunga)' },
      { syllable: 'ЩИ', ttsRu: 'щи', phoneticIt: 'shchi (sci lunga)' },
      { syllable: 'ЩЕ', ttsRu: 'ще', phoneticIt: 'shche (sce lunga)' },
      { syllable: 'ЩЁ', ttsRu: 'щё', phoneticIt: 'shcho (scio lunga)' }
    ],
    examples: [
      {
        displayRu: 'Щётка',
        ttsRu: 'Щётка',
        phoneticIt: 'SHCHÒT-ka',
        meaningIt: 'Spazzola'
      },
      {
        displayRu: 'Щу́ка',
        ttsRu: 'Щука',
        phoneticIt: 'SHCHÙ-ka',
        meaningIt: 'Luccio (pesce)'
      },
      {
        displayRu: 'Щено́к',
        ttsRu: 'Щенок',
        phoneticIt: 'shchi-NÒK',
        meaningIt: 'Cucciolo di cane'
      }
    ],
    miniPhrase: {
      displayRu: 'Ма́ленький щено́к игра́ет со щёткой.',
      ttsRu: 'Маленький щенок играет со щёткой.',
      phoneticIt: 'MÀ-lin\'-kiy shchi-NÒK ig-RÀ-yit sa SHCHÒT-kay',
      meaningIt: 'Il piccolo cucciolo gioca con la spazzola.'
    },
    exceptions: [
      {
        title: 'Ш vs Щ: la differenza che cambia le parole!',
        ruleSummary: 'Ш è corta e dura (lingua indietro); Щ è lunga e dolce (lingua in avanti)',
        explanationIt: 'Ascolta bene le due parole "шар" (palloncino) e "щи" (zuppa di cavoli). Anche se l\'italiano non distingue tra sc dura e sc dolce, in russo cambiare Ш con Щ può cambiare parola!',
        examples: [
          {
            written: 'защита',
            stressed: 'защи́та',
            readAs: 'za-SHCHÌ-ta',
            meaningIt: 'protezione / difesa',
            ttsRu: 'защита'
          },
          {
            written: 'борщ',
            stressed: 'бо́рщ',
            readAs: 'borshch (con coda sc lunga e dolce!)',
            meaningIt: 'borscht (zuppa di barbabietole)',
            ttsRu: 'борщ'
          }
        ]
      },
      {
        title: 'Regola ortografica: sempre ЩА e ЩУ!',
        ruleSummary: 'Come per Ч, dopo Щ non si scrivono mai Я e Ю — sempre ЩА e ЩУ',
        explanationIt: 'La Щ è già morbidissima di natura, quindi si scrive sempre con А e У (es. площадь = piazza, щука = luccio).',
        examples: [
          {
            written: 'площадь',
            stressed: 'пло́щадь',
            readAs: 'PLÒ-shchat\'',
            meaningIt: 'piazza',
            ttsRu: 'площадь'
          }
        ]
      }
    ]
  },
  {
    index: 28,
    uppercase: 'Ъ',
    lowercase: 'ъ',
    nameRu: 'Твёрдый зна́к',
    nameTtsRu: 'твёрдый знак',
    namePhoneticIt: 'TV\'ÒR-dyy znak (Segno duro)',
    soundTtsRu: 'твёрдый знак',
    category: 'sign',
    hardness: 'modifier',
    hardnessLabel: 'Segno muto divisore',
    isFalseFriend: false,
    soundIt: 'MUTO! Non ha suono proprio: fa fare una mini-pausa prima di Е, Ё, Ю, Я',
    ipa: '[-] (separatore duro)',
    cursiveNote: 'Inizia con un trattino in alto a sinistra, scende e chiude un piccolo cerchio in basso (a differenza di ь che non ha il trattino in alto!).',
    mnemonic: {
      wordRu: 'Объект',
      wordStressed: 'Объе́кт',
      ttsRu: 'Объект',
      phoneticIt: 'ab-YÈKT',
      wordIt: 'Oggetto / Edificio (muro divisore)',
      visualTrick: 'Ha un piccolo tetto sporgente a sinistra come un muro rigido che separa la consonante dalla vocale dopo!'
    },
    teacherLesson: {
      intro: 'Ecco il primo dei due "segni magici muti": il Твёрдый знак (Segno Duro)! Non ha una sua voce, ma fa il vigile urbano: mette un piccolo muro tra una consonante e le vocali Е, Ё, Ю, Я!',
      mouthTip: 'Non pronunciare nulla sulla Ъ, ma fai una piccolissima pausa secca e poi pronuncia chiaramente "ye / yo / yu / ya" staccata!',
      comparisonIt: 'Immagina un piccolo apostrofo rigido che impedisce alle due lettere di fondersi insieme: съесть = s-yest\' (non s\'est\'!).'
    },
    syllables: [
      { syllable: 'СЪЕ', ttsRu: 'съе', phoneticIt: 's-ye (staccato!)' },
      { syllable: 'ОБЪЕ', ttsRu: 'объе', phoneticIt: 'ab-ye' },
      { syllable: 'ПОДЪЕ', ttsRu: 'подъе', phoneticIt: 'pad-ye' },
      { syllable: 'ВЪЕ', ttsRu: 'въе', phoneticIt: 'v-ye' }
    ],
    examples: [
      {
        displayRu: 'Съе́сть',
        ttsRu: 'Съесть',
        phoneticIt: 's-YÈST\'',
        meaningIt: 'Mangiare tutto',
        noteIt: 'Senza Ъ sarebbe "сесть" (sedersi)!'
      },
      {
        displayRu: 'Подъе́зд',
        ttsRu: 'Подъезд',
        phoneticIt: 'pad-YÈST',
        meaningIt: 'Ingresso / Portone'
      },
      {
        displayRu: 'Объе́кт',
        ttsRu: 'Объект',
        phoneticIt: 'ab-YÈKT',
        meaningIt: 'Oggetto / Struttura'
      }
    ],
    miniPhrase: {
      displayRu: 'Я хочу́ съе́сть вкусны́й банан.',
      ttsRu: 'Я хочу съесть вкусный банан.',
      phoneticIt: 'ya kha-CHÙ s-YÈST\' VKÙS-nyy ba-NÀN',
      meaningIt: 'Voglio mangiare una buona banana.'
    },
    exceptions: [
      {
        title: 'СЪЕСТЬ vs СЕСТЬ: cambia completamente il significato!',
        ruleSummary: 'Senza il segno duro, la С si ammorbidisce e cambia parola!',
        explanationIt: 'Questo esempio fa capire subito perché esiste la Ъ: "сесть" (s\'est\') significa sedersi, mentre "съесть" (s-yest\') significa mangiare tutto!',
        examples: [
          {
            written: 'сесть vs съесть',
            stressed: 'се́сть / съе́сть',
            readAs: 's\'est\' (sedersi) / s-yest\' (mangiare)',
            meaningIt: 'sedersi vs mangiare',
            ttsRu: 'сесть, съесть'
          },
          {
            written: 'объявление',
            stressed: 'объявле́ние',
            readAs: 'ab-yiv-LÈ-ni-ye',
            meaningIt: 'annuncio / avviso',
            ttsRu: 'объявление'
          }
        ]
      }
    ]
  },
  {
    index: 29,
    uppercase: 'Ы',
    lowercase: 'ы',
    nameRu: 'Ы',
    nameTtsRu: 'ы',
    namePhoneticIt: 'y (gutturale)',
    soundTtsRu: 'ыыы',
    category: 'vowel',
    hardness: 'hard-indicator',
    hardnessLabel: 'Vocale dura speciale',
    isFalseFriend: false,
    soundIt: 'Suono profondo tra U e I: dì "I" tirando indietro la lingua!',
    ipa: '[ɨ]',
    cursiveNote: 'Un piccolo segno morbido "ь" unito a una riga verticale "l".',
    mnemonic: {
      wordRu: 'Сыр',
      wordStressed: 'Сы́р',
      ttsRu: 'Сыр',
      phoneticIt: 'syr',
      wordIt: 'Formaggio',
      visualTrick: 'Sembra un topolino paffuto (ь) con un bel bastoncino vicino a un pezzo di Formaggio (Сыр)!'
    },
    teacherLesson: {
      intro: 'Ecco la famosa vocale russa che spaventa tutti, ma con il trucco giusto della maestra la imparerai in dieci secondi! Nessuna parola russa nativa inizia con la Ы, ma sta sempre dentro o alla fine delle parole.',
      mouthTip: 'Trucco magico per riuscirci subito: metti una matita immaginaria tra i denti per sorridere largo come una I, ma invece di dire "i" prova a dire "U" dal fondo della gola! Oppure dì "u-i" velocissimo senza muovere le labbra: Ыыы!',
      comparisonIt: 'Non esiste in italiano: sta esattamente a metà strada tra una U non arrotondata e una I profonda.'
    },
    syllables: [
      { syllable: 'МЫ', ttsRu: 'мы', phoneticIt: 'my (noi!)' },
      { syllable: 'ТЫ', ttsRu: 'ты', phoneticIt: 'ty (tu!)' },
      { syllable: 'ВЫ', ttsRu: 'вы', phoneticIt: 'vy (voi!)' },
      { syllable: 'СЫ', ttsRu: 'сы', phoneticIt: 'sy' },
      { syllable: 'РЫ', ttsRu: 'ры', phoneticIt: 'ry' }
    ],
    examples: [
      {
        displayRu: 'Сы́р',
        ttsRu: 'Сыр',
        phoneticIt: 'syr',
        meaningIt: 'Formaggio'
      },
      {
        displayRu: 'Мы́ло',
        ttsRu: 'Мыло',
        phoneticIt: 'MÝ-la',
        meaningIt: 'Sapone'
      },
      {
        displayRu: 'Ры́ба',
        ttsRu: 'Рыба',
        phoneticIt: 'RÝ-ba',
        meaningIt: 'Pesce'
      }
    ],
    miniPhrase: {
      displayRu: 'Мы́ лю́бим вку́сный сы́р.',
      ttsRu: 'Мы любим вкусный сыр.',
      phoneticIt: 'my L\'Ù-bim VKÙS-nyy syr',
      meaningIt: 'Noi amiamo il formaggio buono.'
    },
    exceptions: [
      {
        title: 'La regola d\'oro delle 7 lettere: mai Ы dopo Г, К, Х, Ж, Ч, Ш, Щ!',
        ruleSummary: 'Dopo queste 7 consonanti non si scrive MAI Ы — si scrive sempre И!',
        explanationIt: 'Per fare il plurale in russo si aggiunge spesso Ы (стол -> столы). Ma dopo Г, К, Х, Ж, Ч, Ш, Щ è vietato scrivere Ы: bisogna cambiare in И! Esempio: книга -> книги, яблоко -> яблоки.',
        examples: [
          {
            written: 'яблоки',
            stressed: 'я́блоки',
            readAs: 'YÀB-la-ki (NON яблоky!)',
            meaningIt: 'mele',
            ttsRu: 'яблоки'
          },
          {
            written: 'ножи',
            stressed: 'ножи́',
            readAs: 'na-ZHÝ (si scrive И ma suona Ы!)',
            meaningIt: 'coltelli',
            ttsRu: 'ножи'
          }
        ]
      },
      {
        title: 'La differenza che salva: БЫТЬ vs БИТЬ',
        ruleSummary: 'Sbagliare tra Ы e И cambia completamente il significato delle parole!',
        explanationIt: 'Ascolta la differenza tra "быть" (essere, profonda e dura) e "бить" (colpire/battere, acuta e morbida).',
        examples: [
          {
            written: 'быть vs бить',
            stressed: 'бы́ть / би́ть',
            readAs: 'byt\' (essere) / bit\' (battere)',
            meaningIt: 'essere vs battere',
            ttsRu: 'быть, бить'
          }
        ]
      }
    ]
  },
  {
    index: 30,
    uppercase: 'Ь',
    lowercase: 'ь',
    nameRu: 'Мя́гкий зна́к',
    nameTtsRu: 'мягкий знак',
    namePhoneticIt: 'M\'ÀKH-kiy znak (Segno dolce)',
    soundTtsRu: 'мягкий знак',
    category: 'sign',
    hardness: 'modifier',
    hardnessLabel: 'Segno muto addolcente',
    isFalseFriend: false,
    soundIt: 'MUTO! Ma addolcisce (palatalizza) come un sorriso la consonante prima!',
    ipa: '[ʲ] (palatalizzazione)',
    cursiveNote: 'Sembra una minuscola "b" col gambo corto o un piccolo gancio rotondo senza asta sopra.',
    mnemonic: {
      wordRu: 'Мышь',
      wordStressed: 'Мы́шь',
      ttsRu: 'Мышь',
      phoneticIt: 'mysh',
      wordIt: 'Topolino (soffice e silenzioso)',
      visualTrick: 'Guarda la Ь: sembra una piccola piuma soffice o la codina morbida del topolino che rende tutto più dolce!'
    },
    teacherLesson: {
      intro: 'Ecco il secondo segno muto, ed è importantissimo: il Мягкий знак (Segno Dolce)! Non si legge da solo, ma trasforma la consonante che lo precede rendendola soffice e sorridente.',
      mouthTip: 'Quando vedi la Ь alla fine di una parola (come "брат" -> "брать"), pronuncia l\'ultima consonante schiacciando il centro della lingua verso il palato come se stessi per dire una piccolissima "i" muta!',
      comparisonIt: 'È come il passaggio da "l" dura a una "l" molto morbida (o da "n" a "gn") alla fine della parola.'
    },
    syllables: [
      { syllable: 'ЛЬ', ttsRu: 'ль', phoneticIt: 'l\' (L dolce)' },
      { syllable: 'НЬ', ttsRu: 'нь', phoneticIt: 'n\' (N dolce, quasi gn)' },
      { syllable: 'ТЬ', ttsRu: 'ть', phoneticIt: 't\' (T morbida)' },
      { syllable: 'ДЬ', ttsRu: 'дь', phoneticIt: 'd\' (D morbida)' },
      { syllable: 'ПЬЮ', ttsRu: 'пью', phoneticIt: 'p\'yu (separatore dolce!)' }
    ],
    examples: [
      {
        displayRu: 'Ма́ть',
        ttsRu: 'Мать',
        phoneticIt: 'mat\'',
        meaningIt: 'Madre',
        noteIt: 'Con la Ь finale, Т è dolce!'
      },
      {
        displayRu: 'Тетра́дь',
        ttsRu: 'Тетрадь',
        phoneticIt: 'tit-RÀT\'',
        meaningIt: 'Quaderno'
      },
      {
        displayRu: 'Семья́',
        ttsRu: 'Семья',
        phoneticIt: 'sim\'-YÀ',
        meaningIt: 'Famiglia',
        noteIt: 'In mezzo alle parole fa da separatore morbido prima di Я/Е/Ё/Ю/И!'
      }
    ],
    miniPhrase: {
      displayRu: 'Моя́ семья́ о́чень дру́жная.',
      ttsRu: 'Моя семья очень дружная.',
      phoneticIt: 'ma-YÀ sim\'-YÀ Ò-chin\' DRÙZH-na-ya',
      meaningIt: 'La mia famiglia è molto unita.'
    },
    exceptions: [
      {
        title: 'Coppie minime: la Ь cambia tutto il significato!',
        ruleSummary: 'Una piccola Ь in fondo trasforma "fratello" in "prendere" e "angolo" in "carbone"!',
        explanationIt: 'Per questo non devi mai ignorare la Ь finale: distingue tantissime parole importanti della vita quotidiana.',
        examples: [
          {
            written: 'брат vs брать',
            stressed: 'бра́т / бра́ть',
            readAs: 'brat (dura) / brat\' (dolce)',
            meaningIt: 'fratello vs prendere',
            ttsRu: 'брат, брать'
          },
          {
            written: 'угол vs уголь',
            stressed: 'у́гол / у́голь',
            readAs: 'Ù-gal / Ù-gal\'',
            meaningIt: 'angolo vs carbone',
            ttsRu: 'угол, уголь'
          }
        ]
      },
      {
        title: 'Eccezione: dopo Ж e Ш la Ь è MUTO grammaticale!',
        ruleSummary: 'Dopo Ж e Ш, anche con la Ь, il suono resta sempre DURO!',
        explanationIt: 'In parole come "мышь" (topo) o "рожь" (segale), la Ь serve solo a segnalare che il nome è femminile, ma non cambia il suono di Ж e Ш.',
        examples: [
          {
            written: 'мышь',
            stressed: 'мы́шь',
            readAs: 'mysh (Ш sempre dura!)',
            meaningIt: 'topo',
            ttsRu: 'мышь'
          }
        ]
      }
    ]
  },
  {
    index: 31,
    uppercase: 'Э',
    lowercase: 'э',
    nameRu: 'Э',
    nameTtsRu: 'э',
    namePhoneticIt: 'è (aperta)',
    soundTtsRu: 'эээ',
    category: 'vowel',
    hardness: 'hard-indicator',
    hardnessLabel: 'Vocale dura',
    isFalseFriend: false,
    soundIt: 'E aperta e diretta come in "erba" o "elmo" — MAI "ye"!',
    ipa: '[ɛ]',
    cursiveNote: 'Una "C" specchiata con una stanghetta orizzontale al centro.',
    mnemonic: {
      wordRu: 'Экскаватор',
      wordStressed: 'Экскава́тор',
      ttsRu: 'Экскаватор',
      phoneticIt: 'eks-ka-VÀ-tar',
      wordIt: 'Escavatore',
      visualTrick: 'Sembra una benna da escavatore aperta con un dente al centro che grida: Eee!'
    },
    teacherLesson: {
      intro: 'Ti ricordi della Е che all\'inizio della parola si leggeva "YE"? Ecco la sua sorella dura e decisa: la Э! La Э si legge SEMPRE come una semplice E aperta italiana, mai "ye" e senza ammorbidire niente!',
      mouthTip: 'Apri la bocca a metà, senza sorridere come per la И, e dì una bella È chiara: Èto!',
      comparisonIt: 'Come la È aperta italiana di "erba", "caffè", "eco".'
    },
    syllables: [
      { syllable: 'ЭТ', ttsRu: 'эт', phoneticIt: 'et' },
      { syllable: 'ЭХ', ttsRu: 'эх', phoneticIt: 'ekh' },
      { syllable: 'МЭ', ttsRu: 'мэ', phoneticIt: 'mè (M dura)' },
      { syllable: 'СЭ', ttsRu: 'сэ', phoneticIt: 'sè (S dura)' },
      { syllable: 'ТЭ', ttsRu: 'тэ', phoneticIt: 'tè (T dura)' }
    ],
    examples: [
      {
        displayRu: 'Э́то',
        ttsRu: 'Это',
        phoneticIt: 'È-ta',
        meaningIt: 'Questo è / Questo'
      },
      {
        displayRu: 'Э́хо',
        ttsRu: 'Эхо',
        phoneticIt: 'È-kha',
        meaningIt: 'Eco'
      },
      {
        displayRu: 'Экскава́тор',
        ttsRu: 'Экскаватор',
        phoneticIt: 'eks-ka-VÀ-tar',
        meaningIt: 'Escavatore'
      }
    ],
    miniPhrase: {
      displayRu: 'Э́то мо́й но́вый энциклопеди́ческий слова́рь.',
      ttsRu: 'Это мой новый словарь.',
      phoneticIt: 'È-ta moy NÒ-vyy sla-VÀR\'',
      meaningIt: 'Questo è il mio nuovo dizionario.'
    },
    exceptions: [
      {
        title: 'Э vs Е nelle parole straniere',
        ruleSummary: 'Molte parole straniere si scrivono con Е ma si leggono dure come Э!',
        explanationIt: 'Curiosità interessante: parole moderne come "интернет" (internet) o "кафе" (bar/caffetteria) si scrivono con la Е, ma molti russi le pronunciano dure come se ci fosse la Э (in-ter-nèt, ka-fè)!',
        examples: [
          {
            written: 'кафе',
            stressed: 'кафе́',
            readAs: 'ka-FÈ (F dura!)',
            meaningIt: 'caffetteria / bar',
            ttsRu: 'кафе'
          },
          {
            written: 'мэр',
            stressed: 'мэ́р',
            readAs: 'mer (scritta con Э)',
            meaningIt: 'sindaco',
            ttsRu: 'мэр'
          }
        ]
      }
    ]
  },
  {
    index: 32,
    uppercase: 'Ю',
    lowercase: 'ю',
    nameRu: 'Ю',
    nameTtsRu: 'ю',
    namePhoneticIt: 'yù',
    soundTtsRu: 'ююю',
    category: 'vowel',
    hardness: 'soft-indicator',
    hardnessLabel: 'Vocale dolce (iotizzata)',
    isFalseFriend: false,
    soundIt: 'YU (come "iu" in "più" o inglese "you") all\'inizio; dopo consonante è U e la addolcisce',
    ipa: '[ju] / [ʲu]',
    cursiveNote: 'Una "i" collegata a una "o" con un piccolo tratto orizzontale al centro.',
    mnemonic: {
      wordRu: 'Юла',
      wordStressed: 'Юла́',
      ttsRu: 'Юла',
      phoneticIt: 'yu-LÀ',
      wordIt: 'Trottola',
      visualTrick: 'Guarda la Ю: un paletto (I) tenuto per mano a un cerchio che gira (O) come una trottola colorata!'
    },
    teacherLesson: {
      intro: 'Siamo quasi alla fine dell\'alfabeto! Guarda com\'è disegnata la Ю: è proprio una I che dà la mano a una O! All\'inizio di parola suona YU (come l\'inglese "you"); dopo una consonante suona U e la fa sorridere.',
      mouthTip: 'Fai prima un piccolo sorriso da "i" veloce e subito spingi in fuori le labbra per una U: yù!',
      comparisonIt: 'All\'inizio è come "iu" in "aiuola" o "you" in inglese; dopo consonante è come "più" o "fiume".'
    },
    syllables: [
      { syllable: 'ЛЮ', ttsRu: 'лю', phoneticIt: 'l\'u (L dolce)' },
      { syllable: 'МЮ', ttsRu: 'мю', phoneticIt: 'm\'u' },
      { syllable: 'НЮ', ttsRu: 'ню', phoneticIt: 'n\'u (gnu)' },
      { syllable: 'ТЮ', ttsRu: 'тю', phoneticIt: 't\'u' },
      { syllable: 'ЮГ', ttsRu: 'юг', phoneticIt: 'yuk (sud!)' }
    ],
    examples: [
      {
        displayRu: 'Юла́',
        ttsRu: 'Юла',
        phoneticIt: 'yu-LÀ',
        meaningIt: 'Trottola'
      },
      {
        displayRu: 'Ю́бка',
        ttsRu: 'Юбка',
        phoneticIt: 'YÙP-ka',
        meaningIt: 'Gonna',
        noteIt: 'Nota: la Б prima di К diventa П!'
      },
      {
        displayRu: 'Любо́вь',
        ttsRu: 'Любовь',
        phoneticIt: 'l\'u-BÒF\'',
        meaningIt: 'Amore',
        noteIt: 'Dopo Л si legge L morbida + U!'
      }
    ],
    miniPhrase: {
      displayRu: 'Я люблю́ крути́ть разноцве́тную юлу́.',
      ttsRu: 'Я люблю крутить разноцветную юлу.',
      phoneticIt: 'ya l\'ub-L\'Ù kru-TÌT\' raz-na-TSVÈT-nu-yu yu-LÙ',
      meaningIt: 'Amo far girare la trottola colorata.'
    },
    exceptions: [
      {
        title: 'La Ю è immune alla riduzione!',
        ruleSummary: 'Anche quando NON è accentata, la Ю non diventa mai "i" né "a": resta sempre yu/u!',
        explanationIt: 'Proprio come la У, anche la sua gemella dolce Ю mantiene intatto il suo suono anche senza accento (es. люблю = l\'ub-L\'Ù). Ricorda solo che dopo Ж, Ш, Ч, Щ, Ц praticamente non si usa mai!',
        examples: [
          {
            written: 'люди',
            stressed: 'лю́ди',
            readAs: 'L\'Ù-di',
            meaningIt: 'persone / gente',
            ttsRu: 'люди'
          },
          {
            written: 'жюри',
            stressed: 'жюри́',
            readAs: 'zhu-RÌ (rara eccezione francese!)',
            meaningIt: 'giuria',
            ttsRu: 'жюри'
          }
        ]
      }
    ]
  },
  {
    index: 33,
    uppercase: 'Я',
    lowercase: 'я',
    nameRu: 'Я',
    nameTtsRu: 'я',
    namePhoneticIt: 'yà',
    soundTtsRu: 'яяя',
    category: 'vowel',
    hardness: 'soft-indicator',
    hardnessLabel: 'Vocale dolce (iotizzata)',
    isFalseFriend: false,
    soundIt: 'YA (come "ia" di "piano") all\'inizio; dopo consonante è A e la addolcisce',
    ipa: '[ja] / [ʲa] / [ɪ]',
    cursiveNote: 'Come una "R" al contrario con un piccolo gancio iniziale a sinistra (che non bisogna dimenticare!).',
    mnemonic: {
      wordRu: 'Яблоко',
      wordStressed: 'Я́блоко',
      ttsRu: 'Яблоко',
      phoneticIt: 'YÀB-la-ka',
      wordIt: 'Mela',
      visualTrick: 'È l\'ultima lettera e significa proprio "IO"! Sembra una persona orgogliosa con una mano sul fianco che indica una bella Mela rossa!'
    },
    teacherLesson: {
      intro: 'Bravissimo! Sei arrivato alla 33ª e ultima lettera dell\'alfabeto russo: la Я! Ed è una parola importantissima già da sola, perché "Я" in russo significa "IO"!',
      mouthTip: 'All\'inizio di parola o dopo vocale pronuncia una "i" veloce seguita da una A aperta: Yà! Dopo una consonante (come in "мяч", palla), dì "A" ammorbidendo la consonante prima.',
      comparisonIt: 'Come "ia" in "chiaro" o "piano" (ma fuso insieme senza separarlo).'
    },
    syllables: [
      { syllable: 'Я', ttsRu: 'я', phoneticIt: 'ya (io!)' },
      { syllable: 'МЯ', ttsRu: 'мя', phoneticIt: 'm\'a' },
      { syllable: 'ЛЯ', ttsRu: 'ля', phoneticIt: 'l\'a (nota musicale!)' },
      { syllable: 'НЯ', ttsRu: 'ня', phoneticIt: 'n\'a / gna' },
      { syllable: 'ТЯ', ttsRu: 'тя', phoneticIt: 't\'a' }
    ],
    examples: [
      {
        displayRu: 'Я́блоко',
        ttsRu: 'Яблоко',
        phoneticIt: 'YÀB-la-ka',
        meaningIt: 'Mela',
        noteIt: 'Le due О finali atone si leggono A!'
      },
      {
        displayRu: 'Я́щерица',
        ttsRu: 'Ящерица',
        phoneticIt: 'YÀ-shchi-ri-tsa',
        meaningIt: 'Lucertola'
      },
      {
        displayRu: 'Мя́ч',
        ttsRu: 'Мяч',
        phoneticIt: 'm\'ach',
        meaningIt: 'Palla'
      }
    ],
    miniPhrase: {
      displayRu: 'Я́ ем спе́лое кра́сное я́блоко.',
      ttsRu: 'Я ем спелое красное яблоко.',
      phoneticIt: 'ya yem SPÈ-la-ye KRÀS-na-ye YÀB-la-ka',
      meaningIt: 'Io mangio una mela rossa matura.'
    },
    exceptions: [
      {
        title: 'Я atona: scivola verso I (Ikan\'e)!',
        ruleSummary: 'Quando NON ha l\'accento (prima dell\'accento), la Я suona quasi "yi" o "i"!',
        explanationIt: 'Attenzione a parole famosissime come "язык" (lingua) o "девять" (nove): poiché l\'accento NON è sulla Я, non si legge "ya-zyk", ma "yi-ZÝK"!',
        examples: [
          {
            written: 'язык',
            stressed: 'язы́к',
            readAs: 'yi-ZÝK (NON ya-zyk!)',
            meaningIt: 'lingua (organo o idioma)',
            ttsRu: 'язык'
          },
          {
            written: 'пятьдесят',
            stressed: 'пятьдеся́т',
            readAs: 'pi-di-S\'ÀT',
            meaningIt: 'cinquanta',
            ttsRu: 'пятьдесят'
          },
          {
            written: 'девять',
            stressed: 'де́вять',
            readAs: 'DÈ-vit\' (in fine parola suona leggera "i/e")',
            meaningIt: 'nove',
            ttsRu: 'девять'
          }
        ]
      }
    ]
  }
];
