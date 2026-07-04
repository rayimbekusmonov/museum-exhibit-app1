// exhibitsData.ts
// Static, ultra-fast mock data source — no database required.
// Content sourced directly from the museum's labeling document
// ("Этикетаж QR code"). Images are NOT included here as files: drop your
// photos into /public/assets/ using the exact filenames referenced below
// (exhibit1.jpg ... exhibit14.jpg) and everything will pick them up.

export interface ExhibitTranslation {
  /** Short label used in the top gallery rail, e.g. "Quran Manuscript" */
  shortTitle: string;
  /** Full display title */
  title: string;
  /** Body description */
  description: string;
  /** Dimensions / quantity string as printed on the physical label */
  dimensions: string;
}

export interface Exhibit {
  id: number;
  /** Path under /public — place your photo here later */
  image: string;
  uz: ExhibitTranslation;
  en: ExhibitTranslation;
  ar: ExhibitTranslation;
}

export const exhibitsData: Exhibit[] = [
  {
    id: 1,
    image: "/assets/exhibit1.jpg",
    uz: {
      shortTitle: "Qur'on (G'arbiy Afrika)",
      title: "Charm g'ilofli Qur'oni Karim",
      description:
        "Ushbu Qur'on XIX asrga oid. Qur'oni Karim charm g'ilofi bilan to'plam hisoblanadi. G'arbiy Afrika (ehtimol Nigeriya yoki Chad) mintaqasi bilan bog'liq. Ashyosi: qog'oz, siyoh va shaffof bo'lmagan akvarel bo'yoqlari hamda charmdan tayyorlangan g'ilof. Sahifalarining soni 614 varaqdan iborat.",
      dimensions: "19.5 × 12.5 sm"
    },
    en: {
      shortTitle: "Quran (West Africa)",
      title: "Quran with Leather Carrying Case",
      description:
        "This Qur'an dates to the 19th century and forms a set together with its leather carrying case. It originates from West Africa, probably from present-day Nigeria or Chad. Materials: paper, ink, opaque watercolors, and a leather carrying case. Number of folios: 614.",
      dimensions: "19.5 × 12.5 cm"
    },
    ar: {
      shortTitle: "مصحف (غرب أفريقيا)",
      title: "مصحف مع حقيبة من الجلد",
      description:
        "مصحف مع الحقيبة، غرب أفريقيا، غالباً نيجيريا أو تشاد، القرن 13 هـ. حبر وألوان مائية معتمة على ورق، وحافظة من الجلد لحمل المصحف والتنقل به. عدد الأوراق 614 ورقة.",
      dimensions: "19.5 × 12.5 سم"
    }
  },
  {
    id: 2,
    image: "/assets/exhibit2.jpg",
    uz: {
      shortTitle: "Dawlatabodiy Qur'oni",
      title: "Muhammad Taqi Dawlatabodiy qo'lyozmasi",
      description:
        "Qo'lyozma Qur'oni Karim. Ushbu Qur'oni Karim nusxasi 1670-yilga oid bo'lib, Hindistonda Mo'g'ullar davrida ko'chirilgan. Qo'lyozma buyuk eronlik xattot Muhammad Taqi ibn Muhammad Ali Dawlatabodiy tomonidan imzolangan. Mazkur asar islom qo'lyozma an'analari, xattotlik san'ati va Mo'g'ullar davri kitobat madaniyatining muhim namunasi hisoblanadi.",
      dimensions: "16.7 × 11 sm"
    },
    en: {
      shortTitle: "Dawlatabadi Quran",
      title: "Quran Signed by Muhammad Taqi Dawlatabadi",
      description:
        "Quran signed by Muhammad Taqi ibn Muhammad Ali Dawlatabadi. India, Mughal period, dated 1080 AH (1670 AD). Ink, opaque watercolors and gold on paper. Leather binding with stamped and gilded decorations.",
      dimensions: "16.7 × 11 cm"
    },
    ar: {
      shortTitle: "مصحف دولت آبادي",
      title: "مصحف بتوقيع محمد تقي دولت آبادي",
      description:
        "مصحف بتوقيع محمد تقي بن محمد علي دولت آبادي. الهند، العصر المغولي، بتاريخ الإثنين 17 شوال 1080هـ. حبر، ألوان مائية معتمة وذهب على ورق. غلاف من الجلد المدموغ.",
      dimensions: "16.7 × 11 سم"
    }
  },
  {
    id: 3,
    image: "/assets/exhibit3.jpg",
    uz: {
      shortTitle: "Qur'on, 1744-yil",
      title: "Lak qoplamali Qur'oni Karim",
      description:
        "Ushbu Qur'oni Karim nusxasi 1744-milodiy yilga oid. Qo'lyozma qog'oz ustiga siyoh, quyuq akvarel bo'yoqlari va oltin bezaklar bilan ishlangan. Muqova qismi lak qoplamasi ostida rangli bezaklar bilan bezatilgan bo'lib, u davr kitobat va bezak san'atining yuksak namunasini aks ettiradi.",
      dimensions: "16 × 9.5 sm"
    },
    en: {
      shortTitle: "Quran, 1744",
      title: "Quran with Lacquered Binding",
      description:
        "Quran dated 1157 AH / 1744 CE. Ink, opaque watercolors and gold on paper. Binding with colored decorations under a lacquer varnish.",
      dimensions: "16 × 9 cm"
    },
    ar: {
      shortTitle: "مصحف 1157هـ",
      title: "مصحف بغلاف مطلي باللك",
      description:
        "مصحف بتاريخ 1157هـ. حبر، ألوان مائية وذهب على ورق. غلاف مزخرف تحت طبقة لك (ورنيش).",
      dimensions: "16 × 9.5 سم"
    }
  },
  {
    id: 4,
    image: "/assets/exhibit4.jpg",
    uz: {
      shortTitle: "Kufiy xat sahifasi",
      title: "Qur'on sahifasi — sharqiy kufiy xat",
      description:
        "Ushbu Qur'oni Karim sahifasi XI asrga oid bo'lib, Fustat (Misr) mintaqasi bilan bog'liq. Sahifa sharqiy kufiy xat uslubida ko'chirilgan bo'lib, Toho surasidan oyatlar keltirilgan: «Qalbimni osoyishta qil va meni u bilan quvvatlantir». Ashyosi: siyoh va shaffof bo'lmagan akvarel bo'yoqlari, velyum (ishlov berilgan teri qog'oz).",
      dimensions: "14 × 10 sm"
    },
    en: {
      shortTitle: "Kufic Quran Folio",
      title: "Folio in Eastern Kufic Script",
      description:
        "A folio from a Quran, copied in Eastern Kufic script. Verses from Surah Ta-Ha (\"put my heart at ease and strengthen me with him\"). Fustat, Egypt, 11th century AD. Ink and opaque watercolors on vellum.",
      dimensions: "14 × 10 cm"
    },
    ar: {
      shortTitle: "صحيفة كوفية",
      title: "صحيفة قرآنية بالخط الكوفي",
      description:
        "صحيفة قرآنية مكتوبة بالخط الكوفي المتطور، جزء من سورة طه من قوله \"لي صدري\" إلى \"أشدد به\". الفسطاط، مصر، القرن الخامس للهجرة. مداد أسود وأصباغ على ورق أزري.",
      dimensions: "14 × 10 سم"
    }
  },
  {
    id: 5,
    image: "/assets/exhibit5.jpg",
    uz: {
      shortTitle: "Zumar — Sod sahifasi",
      title: "Ikki tomonlama Qur'on sahifasi",
      description:
        "Qur'oni Karim qo'lyozmasidan sahifa. Ushbu qo'lyozma sahifasining ikki tomonida ham Qur'oni Karim oyatlari bitilgan. Bir tomonida \"Zumar\" surasi (39:1) bilan boshlanib 39:7-oyatgacha, ikkinchi tomonida esa \"Sod\" surasi (38:62) bilan boshlanib 38:88-oyatgacha davom etadi.",
      dimensions: "34.5 × 26.5 sm"
    },
    en: {
      shortTitle: "Az-Zumar / Sad Folio",
      title: "Folio from a Quranic Manuscript",
      description:
        "A manuscript folio containing Quranic verses written on both sides. The recto begins with Surah Az-Zumar (39:1) through (39:7); the verso begins with Surah Sad (38:62) through (38:88).",
      dimensions: "34.5 × 26.5 cm"
    },
    ar: {
      shortTitle: "ورقة الزمر — ص",
      title: "ورقة من مخطوط قرآني",
      description:
        "ورقة مخطوطة بها آيات قرآنية من الوجهين. الوجه الأمامي يبدأ بسورة الزمر من الآية 1 إلى الآية 7، والوجه الخلفي يبدأ من سورة ص من الآية 62 إلى الآية 88.",
      dimensions: "34.5 × 26.5 سم"
    }
  },
  {
    id: 6,
    image: "/assets/exhibit6.jpg",
    uz: {
      shortTitle: "G'ubor xat lavhasi",
      title: "Kalligrafik lavha — g'ubor xat",
      description:
        "G'ubor xat uslubidagi xattotlik namunasidan lavha. Markaziy Osiyoga oid bo'lib, XIX asrga mansub. Ushbu kalligrafik lavhada: «Ey Alloh, Senga har bir ne'mating uchun hamdu sano aytaman», mazmunidagi ibora bitilgan.",
      dimensions: "48.5 × 18.2 sm"
    },
    en: {
      shortTitle: "Ghubar Calligraphy",
      title: "Calligraphic Panel in Ghubar Script",
      description:
        "Calligraphic panel in Ghubar script, featuring the phrase \"O Allah, I praise you for every blessing.\" Central Asia, 19th century. Ink on paper.",
      dimensions: "48.5 × 18.2 cm"
    },
    ar: {
      shortTitle: "لوحة خط الغبار",
      title: "لوحة خط بأسلوب الغبار",
      description:
        "لوحة خط كتبت بخط الغبار تحمل عبارة \"اللهم إني أحمدك من كل نعمة\". آسيا الوسطى، القرن الثالث عشر للهجرة. حبر على ورق.",
      dimensions: "48.5 × 18.2 سم"
    }
  },
  {
    id: 7,
    image: "/assets/exhibit7.jpg",
    uz: {
      shortTitle: "Dur an-Najaf toshlari",
      title: "115 dona Dur an-Najaf toshlari",
      description:
        "Dur an-Najaf toshlari to'plami. Ushbu to'plam 115 ta qo'lda o'yib naqshlangan toshdan iborat. Iroq mintaqasiga oid Dur an-Najaf nomli toshlardan ishlangan. Har bir tosh Qur'oni Karim suralari nomi bilan bezatilgan.",
      dimensions: "115 dona"
    },
    en: {
      shortTitle: "Dur Al-Najaf Stones",
      title: "Collection of 115 Dur Al-Najaf Stones",
      description:
        "A collection of 115 Dur Al-Najaf stones, made in Najaf Al-Ashraf, Iraq. Each is hand-engraved with the name of one of the chapters of the Holy Quran.",
      dimensions: "Quantity: 115"
    },
    ar: {
      shortTitle: "أحجار درّ النجف",
      title: "مجموعة من 115 حجراً من درّ النجف",
      description:
        "مجموعة مكونة من 115 حجراً من أحجار درّ النجف، كل حجر منقوش يدوياً بسورة من سور القرآن. مدينة النجف الأشرف، العراق.",
      dimensions: "العدد: 115"
    }
  },
  {
    id: 8,
    image: "/assets/exhibit8.jpg",
    uz: {
      shortTitle: "Mo'g'ul qulfi va kaliti",
      title: "Oltin inkrustatsiyali qulf va kalit",
      description:
        "Ushbu qulf va kalit XIX asrga oid. Hindiston, Mo'g'ullar davri bilan bog'liq. Ashyosi: metall qotishmasi, o'yma naqshlar va oltin inkrustatsiya.",
      dimensions: "18 × 13 sm"
    },
    en: {
      shortTitle: "Mughal Lock & Key",
      title: "Lock and Key with Gold Inlay",
      description:
        "A lock and key from India, Mughal period, 19th century. Metal alloy with engraved decorations and gold inlay.",
      dimensions: "18 × 13 cm"
    },
    ar: {
      shortTitle: "قفل ومفتاح مغولي",
      title: "قفل مع مفتاح مكفت بالذهب",
      description:
        "قفل مع مفتاح، الهند أو آسيا الوسطى، العصر المغولي أو القاجاري، القرن الثالث عشر للهجرة. معدن، زخارف محفورة ومفرغة، مكفت بالذهب.",
      dimensions: "18 × 13 سم"
    }
  },
  {
    id: 9,
    image: "/assets/exhibit9.jpg",
    uz: {
      shortTitle: "Harom mis parchasi",
      title: "Makka Haram masjididan mis parcha",
      description:
        "Ushbu mis parchasi Makka shahridagi Harom masjidi hududida 2013-2014-yillargacha ishlatilgan.",
      dimensions: "20 × 15 sm"
    },
    en: {
      shortTitle: "Haram Copper Piece",
      title: "Copper Piece from the Haram in Makkah",
      description:
        "A piece of copper used in the Haram in Makkah Al-Mukarramah, removed circa 2013–2014.",
      dimensions: "20 × 15 cm"
    },
    ar: {
      shortTitle: "قطعة نحاس الحرم",
      title: "قطعة نحاس من الحرم المكي الشريف",
      description:
        "قطعة من النحاس كانت تستخدم في الحرم المكي الشريف في المسعى قبل الإزالة، عام 1435هـ.",
      dimensions: "الطول 20، العرض 15 سم"
    }
  },
  {
    id: 10,
    image: "/assets/exhibit10.jpg",
    uz: {
      shortTitle: "Kitob muqovasi",
      title: "Lak qoplamali kitob muqovasi",
      description:
        "Ushbu kitob muqovasozligi XIX asrga oid. Markaziy Osiyo madaniy merosi tarixi bilan bog'liq. Ashyosi: charm va karton (pasteboard), lak qoplama ostida oltin va ranglar bilan bo'yalgan bezaklar.",
      dimensions: "37 × 23.5 sm"
    },
    en: {
      shortTitle: "Bookbinding",
      title: "Bookbinding under Lacquer Varnish",
      description:
        "Bookbinding from Central Asia, Qajar period, late 19th century AD. Leather and pasteboard, painted in gold and colors under a lacquer varnish.",
      dimensions: "37 × 23.5 cm"
    },
    ar: {
      shortTitle: "تجليد كتاب",
      title: "تجليد كتاب تحت طبقة لك",
      description:
        "تجليد كتاب، آسيا الوسطى، أواخر القرن الثالث عشر للهجرة. جلد وورق كرتوني، زخارف بالذهب والأصباغ تحت طبقة لك (ورنيش).",
      dimensions: "الطول 37، العرض 23.5 سم"
    }
  },
  {
    id: 11,
    image: "/assets/exhibit11.jpg",
    uz: {
      shortTitle: "Kiswa paneli",
      title: "Ka'ba yopqichi — \"Ixlos\" surasi kashtasi",
      description:
        "Ushbu Ka'ba muqaddas yopqichi — Kiswa matosining bir qismi XIX asrga oid bo'lib, Qohirada tayyorlangan. U ipak mato va oltin qoplangan kumush simlar bilan ishlangan bo'lib, unda \"Ixlos\" surasi oyatlari kashta qilingan.",
      dimensions: "94 × 78 sm"
    },
    en: {
      shortTitle: "Kiswah Panel",
      title: "Panel from the Kaaba Textile (Kiswah)",
      description:
        "A panel from the Kaaba textile (Kiswah), made in Cairo, Egypt, late 19th century. Silk and gold-plated silver wires, embroidered with Surah Al-Ikhlas.",
      dimensions: "94 × 78 cm"
    },
    ar: {
      shortTitle: "كسوة \"الإخلاص\"",
      title: "كردشية من كسوة الكعبة المشرفة",
      description:
        "كردشية \"صمدية\" من كسوة الكعبة المشرفة، صنعت في القاهرة، مصر، أواخر القرن الثالث عشر الهجري. حرير وأسلاك من فضة مطلية بالذهب، نقشت عليها سورة الإخلاص.",
      dimensions: "94 × 78 سم"
    }
  },
  {
    id: 12,
    image: "/assets/exhibit12.jpg",
    uz: {
      shortTitle: "Hujra qoplamasi",
      title: "Payg'ambar hujralari qoplamasidan parcha",
      description:
        "Ushbu Payg'ambar Muhammad alayhissalom hujralari qoplamasidan parcha XVII-XVIII asrlarga oid. Zarhallangan ramka ichiga joylashtirilgan yashil bo'yalgan ipak matoda: «Allohdan boshqa iloh yo'q, Muhammad Allohning Rasuli» yozuvi bitilgan.",
      dimensions: "17-18-asrlar"
    },
    en: {
      shortTitle: "Prophet's Chamber Textile",
      title: "Fragment from the Prophet's Chamber Covering",
      description:
        "A gilded frame housing a green-dyed silk textile bearing the inscription: \"There is no deity but Allah; Muhammad is the Messenger of Allah.\" 17th–18th century.",
      dimensions: "17th–18th century"
    },
    ar: {
      shortTitle: "كسوة الحجرة",
      title: "جزء من كسوة الحجرة النبوية",
      description:
        "جزء من كسوة الحجرة، برواز باللون الذهبي داخله قطعة نسيج حرير مصبوغ باللون الأخضر يحمل عبارة \"لا إله إلا الله محمد رسول الله\". القرن 17-18م.",
      dimensions: "القرن 17-18م"
    }
  },
  {
    id: 13,
    image: "/assets/exhibit13.jpg",
    uz: {
      shortTitle: "Kiswa kamari",
      title: "Ka'ba kisvasidan panel — Hijr surasi",
      description:
        "Ka'ba kisvasi (qoplamasi)dan panel. Ushbu eksponatda Qur'oni Karimning Hijr surasiga mansub quyidagi oyat bitilgan: «Bandalarimga xabar beringki, Men haqiqatan ham G'afur va Rahim Zotdirman».",
      dimensions: "Makka, 1427 h."
    },
    en: {
      shortTitle: "Kiswah Belt",
      title: "Panel from the Kiswah — Surah Al-Hijr",
      description:
        "A panel from the Kiswah of the Kaaba, bearing the inscription: \"Inform My servants that I am indeed the Most Forgiving, the Most Merciful\" (Surah Al-Hijr). Makkah Al-Mukarramah, 1427 AH.",
      dimensions: "Makkah, 1427 AH"
    },
    ar: {
      shortTitle: "حزام الكسوة",
      title: "حزام كسوة الكعبة — سورة الحجر",
      description:
        "حزام كسوة الكعبة المشرفة، قطعة تحمل نقشاً بالآية الكريمة: \"نبئ عبادي أني أنا الغفور الرحيم\" سورة الحجر. مكة المكرمة، 1427هـ.",
      dimensions: "مكة المكرمة، 1427هـ"
    }
  },
  {
    id: 14,
    image: "/assets/exhibit14.jpg",
    uz: {
      shortTitle: "Ka'ba eshigi pardasi",
      title: "\"Tavba eshigi\" pardasi",
      description:
        "Ka'ba ichki eshigining pardasi (Tavba eshigi). Qohira, Misr, 1949-yil, Faruq I podshoh hukmronligi davriga oid. Mato bo'yalgan ipak, kumush sim va paxtadan tayyorlangan.",
      dimensions: "Qohira, 1949-yil"
    },
    en: {
      shortTitle: "Kaaba Door Curtain",
      title: "Curtain of the Gate of Repentance",
      description:
        "Curtain of the inner door of the Kaaba (the Gate of Repentance). Made in Cairo, Egypt, during the reign of King Farouk I, 1368 AH (1949 CE). Color-dyed silk, silver wire, cotton.",
      dimensions: "Cairo, 1949"
    },
    ar: {
      shortTitle: "ستارة باب الكعبة",
      title: "ستارة باب التوبة",
      description:
        "ستارة الباب الداخلي للكعبة \"باب التوبة\"، صنعت في القاهرة، مصر، خلال عهد الملك فاروق الأول بن الملك فؤاد الأول. أهديت للكعبة بتاريخ 1368هـ. حرير مصبوغ بالألوان، أسلاك من الفضة، قطن.",
      dimensions: "القاهرة، 1368هـ"
    }
  },
  {
    id: 15,
    image: "/assets/exhibit15.jpg",
    uz: {
      shortTitle: "Ka'ba eshigi pardasi (Burqa')",
      title: "Metall iplar bilan tikilgan Burqa'",
      description:
        "Muqaddas Ka'ba eshigining metall iplar bilan tikilgan pardasi (Burqa'). 1880-yil.",
      dimensions: "280 × 570 sm"
    },
    en: {
      shortTitle: "Kaaba Door Curtain (Burqa')",
      title: "Curtain of the Sacred Kaaba Door (Burqa')",
      description:
        "The curtain of the sacred Kaaba door, embroidered with metallic threads (Burqa'). 1880.",
      dimensions: "280 × 570 cm"
    },
    ar: {
      shortTitle: "ستارة الكعبة (البرقع)",
      title: "ستارة باب الكعبة المشرفة المطرزة بخيوط معدنية",
      description:
        "ستارة باب الكعبة المشرفة، مطرزة بخيوط معدنية (البرقع). عام 1880.",
      dimensions: "280 × 570 سم"
    }
  },
  {
    id: 16,
    image: "/assets/exhibit16.jpg",
    uz: {
      shortTitle: "Kalligrafik panel (Hizam)",
      title: "Ka'ba kisvasidan kalligrafik panel (Hizam)",
      description:
        "Ka'ba kisvasidan olingan kalligrafik panel (Hizam). Makka, XIX-XX asrlar.",
      dimensions: "165 × 264 sm"
    },
    en: {
      shortTitle: "Calligraphic Panel (Hizam)",
      title: "Calligraphic Panel (Hizam) from the Kaaba Kiswah",
      description:
        "A calligraphic panel (Hizam) from the Kaaba Kiswah. Mecca, 19th-20th centuries.",
      dimensions: "165 × 264 cm"
    },
    ar: {
      shortTitle: "لوحة خطية (حزام)",
      title: "لوحة خطية (حزام) من كسوة الكعبة",
      description:
        "لوحة خطية (حزام) من كسوة الكعبة المشرفة. مكة المكرمة، القرن التاسع عشر - القرن العشرون.",
      dimensions: "165 × 264 سم"
    }
  },
  {
    id: 17,
    image: "/assets/exhibit17.jpg",
    uz: {
      shortTitle: "Payg'ambar maqbarasi yopinchig'i",
      title: "Yashil ipak yopinchiq — Payg'ambar maqbarasi",
      description:
        "Payg'ambar Muhammad (sollallohu alayhi vasallam) maqbarasining yashil ipak yopinchig'i. Madina, XIX asr. Ashyosi: ipak.",
      dimensions: "264 × 165 sm"
    },
    en: {
      shortTitle: "Prophet's Tomb Cover",
      title: "Green Silk Cover of the Tomb of the Prophet",
      description:
        "Green silk cover of the tomb of Prophet Muhammad (peace be upon him). Medina, 19th century. Material: silk.",
      dimensions: "264 × 165 cm"
    },
    ar: {
      shortTitle: "غطاء ضريح النبي",
      title: "غطاء ضريح النبي من الحرير الأخضر",
      description:
        "غطاء ضريح كبير مصنوع من الحرير الأخضر، مأخوذ من قبر النبي ﷺ. المدينة المنورة، القرن التاسع عشر.",
      dimensions: "165 × 264 سم"
    }
  },
  {
    id: 18,
    image: "/assets/exhibit18.jpg",
    uz: {
      shortTitle: "Ka'ba tarnovi",
      title: "Ka'ba tarnovi (Rahmat tarnovi)",
      description:
        "Ka'ba tarnovi (Rahmat tarnovi). Makka, XX asr. Ashyosi: zarhallangan latun.",
      dimensions: "260 × 29 × 28.6 sm"
    },
    en: {
      shortTitle: "Kaaba Water Spout",
      title: "Kaaba Water Spout (Mizab al-Rahma)",
      description:
        "Kaaba water spout (Mizab al-Rahma). Makkah, 20th century. Material: gilded brass.",
      dimensions: "260 × 29 × 28.6 cm"
    },
    ar: {
      shortTitle: "ميزاب الكعبة",
      title: "ميزاب الكعبة (ميزاب الرحمة)",
      description:
        "ميزاب الكعبة المشرفة. مكة المكرمة، القرن العشرون.",
      dimensions: "260 × 29 × 28.6 سم"
    }
  },
  {
    id: 19,
    image: "/assets/exhibit19.jpg",
    uz: {
      shortTitle: "\"Muhammad\" panno",
      title: "\"Muhammad\" yozuvli panno",
      description:
        "\"Muhammad\" yozuvli panno. Usmonlilar saltanati, XIX asr oxiri - XX asr boshi. Ashyosi: ipak va metall tolalar.",
      dimensions: "201 × 206 sm"
    },
    en: {
      shortTitle: "\"Muhammad\" Panel",
      title: "Panel with the Inscription \"Muhammad\"",
      description:
        "Panel with the inscription \"Muhammad\". Ottoman Empire, late 19th - early 20th century. Material: silk and metallic threads.",
      dimensions: "201 × 206 cm"
    },
    ar: {
      shortTitle: "لوحة \"محمد\"",
      title: "لوحة تحمل لفظ الجلالة \"محمد ﷺ\"",
      description:
        "لوحة تحمل لفظ الجلالة \"محمد ﷺ\". الدولة العثمانية، أواخر القرن التاسع عشر - أوائل القرن العشرين. المادة: حرير وخيوط معدنية.",
      dimensions: "201 × 206 سم"
    }
  },
  {
    id: 20,
    image: "/assets/exhibit20.jpg",
    uz: {
      shortTitle: "\"Alloh\" panno",
      title: "\"Alloh\" yozuvli panno",
      description:
        "\"Alloh\" yozuvli panno. Usmonlilar saltanati, XIX asr oxiri - XX asr boshi. Ashyosi: ipak va metall tolalar.",
      dimensions: "202 × 205 sm"
    },
    en: {
      shortTitle: "\"Allah\" Panel",
      title: "Panel with the Inscription \"Allah\"",
      description:
        "Panel with the inscription \"Allah\". Ottoman Empire, late 19th - early 20th century. Material: silk and metallic threads.",
      dimensions: "202 × 205 cm"
    },
    ar: {
      shortTitle: "لوحة \"الله\"",
      title: "لوحة تحمل لفظ الجلالة \"الله\"",
      description:
        "لوحة تحمل لفظ الجلالة \"الله\". الدولة العثمانية، أواخر القرن التاسع عشر - أوائل القرن العشرين. المادة: حرير وخيوط معدنية.",
      dimensions: "202 × 205 سم"
    }
  },
  {
    id: 21,
    image: "/assets/exhibit21.jpg",
    uz: {
      shortTitle: "Duo kitobi",
      title: "\"Dalāil al-xayrot\" va \"Al-hizb al-a'zam\"",
      description:
        "\"Dalāil al-xayrot\" va \"Al-hizb al-a'zam\" asarlaridan iborat duo kitobi. Muallif: Imomzoda al-Haj Muhammad. Yaratilgan davri: 1793-1795-yillar.",
      dimensions: "15.8 × 20.2 sm"
    },
    en: {
      shortTitle: "Prayer Book",
      title: "Prayer Book: Dala'il al-Khayrat & Al-Hizb al-A'zam",
      description:
        "Prayer book containing Dala'il al-Khayrat and Al-Hizb al-A'zam. Author: Imomzoda al-Hajj Muhammad. Date: 1793-1795.",
      dimensions: "15.8 × 20.2 cm"
    },
    ar: {
      shortTitle: "كتاب أدعية",
      title: "كتاب أدعية: دلائل الخيرات والحزب الأعظم",
      description:
        "كتاب أدعية يضم كتابي \"دلائل الخيرات\" و\"الحزب الأعظم\". المؤلف: الإمام زاده الحاج محمد. تاريخ النسخ: 1793-1795م.",
      dimensions: "15.8 × 20.2 سم"
    }
  }
];

export const getExhibitById = (id: number): Exhibit | undefined =>
  exhibitsData.find((e) => e.id === id);

export type Language = "uz" | "en" | "ar";

export const languageMeta: Record<Language, { label: string; dir: "ltr" | "rtl" }> = {
  en: { label: "EN", dir: "ltr" },
  uz: { label: "UZ", dir: "ltr" },
  ar: { label: "AR", dir: "rtl" }
};
