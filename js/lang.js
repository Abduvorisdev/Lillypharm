const langArr = {
    "motto" :  {
        "ru": "Живи сильным-Ты эдинственный",
        "uz": "Kuchli yashang - Siz yagonasiz ",
    }, 
    "home" :  {
        "ru": "Главная",
        "uz": "Bosh sahifa",
    }, 
    "about" :  {
        "ru": "О нас",
        "uz": "Biz haqimizda",
    }, 
    "service" :  {
        "ru": "Сервис",
        "uz": "Servis",
    }, 
    "blog" :  {
        "ru": "Блог",
        "uz": "Blog",
    }, 
    "s-blog" :  {
        "ru": "Блог",
        "uz": "Blog",
    }, 
    "contacts" :  {
        "ru": "Контакты",
        "uz": "Kontaktlar",
    }, 
    "contacts" :  {
        "ru": "Контакты",
        "uz": "Kontaktlar",
    }, 
    "begin" :  {
        "ru": "Начать",
        "uz": "Boshlash",
    }, 
    "begin-two" :  {
        "ru": "Начать",
        "uz": "Boshlash",
    }, 
    "vitamin" :  {
        "ru": "Витамин",
        "uz": "Vitamin",
    }, 
    "address" :  {
        "ru": "Ташкент улица Мукимий дом, 25-48",
        "uz": "Toshkent ko'chasi Muqimiy uyi, 25-48",
    }, 
    "address" :  {
        "ru": "Ташкент улица Мукимий дом, 25-48",
        "uz": "Toshkent ko'chasi Muqimiy uyi, 25-48",
    }, 
    "cure-info" :  {
        "ru": "INOXOL относятся к витаминов группы B. Иноксол необходим для нормальной синаптической передачи, здоровья мозга, а также для метаболизма жирных кислот в печени. Иноксол также необходим для здоровья мозга и нервной системы.B4 и B8 являются важными компонентами всех клеточных мембран",
        "uz": "INOXOL B guruhi vitaminlariga tegishli. Inoksol normal sinaptik uzatish, miya salomatligi va jigarda yog 'kislotalari almashinuvi uchun zarurdir. Inoksol miya va asab tizimining salomatligi uchun ham zarurdir.B4 va B8 barcha hujayra membranalarining muhim tarkibiy qismidir",
    }, 
    "cure-text" :  {
        "ru": "B4 используется для борьбы с высоким уровнем холестерина для улучшения памяти и защиты печени.При условии рекомендуемая дозировка B4 1 г в день.B8 - средство. Оно избавляет напряженности и снижает давление",
        "uz": "B4 xotirani yaxshilash va jigarni himoya qilish uchun yuqori xolesterin bilan kurashish uchun ishlatiladi.Muntazam mashg'ulotlar bilan B4 ning tavsiya etilgan dozasi kuniga taxminan 1 g ni tashkil qiladi.B8 ajoyib uyquga yordam beradi. U odamni zo'riqishdan xalos qiladi va yuqori qon bosimini pasaytiradi.",
    }, 
    "daily" :  {
        "ru": "Для ежедневного потребление",
        "uz": "Kundalik iste'mol qilish uchun",
    }, 
    "service-blog" :  {
        "ru": "Сервис",
        "uz": "Servis",
    }, 
    "nervous" :  {
        "ru": "Заболевания нервной системы",
        "uz": "Asab tizimining kasalliklarida",
    }, 
    "holestorin" :  {
        "ru": "Повышенный уровень холестерина",
        "uz": "Yuqori darajadagi  xolesterinda",
    }, 
    "parkinson" :  {
        "ru": "Болезни паркинсона",
        "uz": "Parkinson kasalligida",
    }, 
    "arteriosclerosis" :  {
        "ru": "Артериосклерозе",
        "uz": "Aterosklerozda",
    }, 
    "sclerosis" :  {
        "ru": "Рассеяном склерозе",
        "uz": "Skleroz paytida",
    }, 
    "dystrophy" :  {
        "ru": "Мышечной дистрофии",
        "uz": "Mushak distrofiyasi",
    }, 
    "pressure" :  {
        "ru": "Повышенном кровяном давлении",
        "uz": "Yuqori qon bosimida",
    }, 
    "baldness" :  {
        "ru": "Облысений ",
        "uz": "Soch to'kilishi (kallikda)"
    }, 
    "liver" :  {
        "ru": "Для поддержания печени",
        "uz": "Jigarni qo'llab quvvatlashda",
    }, 
    "gallbladder" :  {
        "ru": "Для поддержания желчного пузыря",
        "uz": "Jigar funksiyasini yahshilashda",
    }, 
    
    "bubble" :  {
        "ru": "Для поддержания желчного пузыря",
        "uz": "O't pufagni qo'llab quvvatlashda",
    }, 
    "weight" :  {
        "ru": "Нормализует обмен жиров и помогает снизить вес",
        "uz": "Yog'lar almashinuvini normallashtirishda",
    },
    "func-liver" :  {
        "ru": "Улучшает функцию печени",
        "uz": "Jigar faoliyatini yaxshilaydi",
    },
    "st" :  {
        "ru": "Препятствует образованию желчных камней",
        "uz": "O't pufagda toshlar hosil bo'lishini oldini olishda",
    },
    "s" :  {
        "ru": "Нормализует уровень сахара в крови",
        "uz": "Qondagi shakar miqdorini normallashtirishda",
    },
    "height" :  {
        "ru": "При замедлении роста",
        "uz": "Bo'y o'sishi sekin bo'lganda",
    },
    "h" :  {
        "ru": "Головная боль",
        "uz": "Bosh og'rig'ida",
    },
    "e" :  {
        "ru": "Шум в ушах",
        "uz": "Quloqlarda shovqin bolganda",
    },
    "t" :  {
        "ru": "Нормализаций уровня тестостерона",
        "uz": "Testosteron darajasini normallashtirishda",
    },
    "a" :  {
        "ru": "Аритмия",
        "uz": "Aritmiya",
    },
    "i" :  {
        "ru": "Повышает иммунитет ",
        "uz": "Immunitetni oshirishda va boshqalarda qo'llaniladi!",
    },
    "acc-title" :  {
        "ru": "Для каких процессов в организме нужен Иноксол:",
        "uz": "Inoksol tanaga qanday ta'sir qiladi:",
    },
    "acc-1" :  {
        "ru": "МЕТОБОЛИЗМ",
        "uz": "METOBOLIZMDA",
    },
    "text-1" :  {
        "ru": "Необходим для синтеза многих важных ферментов. Ускоряет обменные процессы, в том числе и жировой метаболизм, что сказывается на похудении в долгосрочной перспективе ",
        "uz": "Ko'pgina muhim fermentlarni sintez qilish uchun zarur. Metabolik jarayonlarni, shu jumladan yog'almashinuvini tezlashtiradi, bu kilogramm ya'ni ortiqcha vazn kamayishiga yordam beradi!",
    },
    "acc-2" :  {
        "ru": "  ГЕПАТОПРОТЕКТОРНЫЙ ЭФФЕКТ",
        "uz": "GEPATOPROTEKTOR TA'SIRI",
    },
    "text-2" :  {
        "ru": "Снижает риски жирового перерождения печени, улучшает печеночную функцию. Улучшает  выведение токсинов и других побочных продуктов из организма, поддерживает регенеративные свойства органа",
        "uz": "Jigarning yog'li degeneratsiyasi xavfini kamaytiradi, jigar faoliyatini yaxshilaydi. Toksinlar va boshqa yomon zararli moddalarni tanadan chiqib ketishiga yordam beradi.",
    },
    "acc-3" :  {
        "ru": "  ПИШЕВАРЕНИЕ",
        "uz": "HAZM QILISH",
    },
    "text-3" :  {
        "ru": "Вещество ускоряет перистальтику и моторику желудка, улучшает работу органов пищеварения. Снижает влияние стресса на ЖКТ",
        "uz": "Ushbu modda oshqozonning peristaltikasini va harakatini tezlashtiradi, ovqat hazm qilish organlarining faoliyatini yaxshilaydi. Stressning oshqozon-ichak traktiga ta'sirini kamaytiradi",
    },
    "acc-4" :  {
        "ru": "  СЕРДЕЧНО-СОСУДИСТАЯ СИСТЕМА",
        "uz": "YURAK-QON TOMIRI QON BOSIMGA TA'SIRI",
    },
    "text-4" :  {
        "ru": "Снижает уровень вредного холестерина, понижает риски развития сердечно-сосудистых  заболеваний. Инозитол B8 показан к применению для укрепления стенок сосудов,  разжижения крови и нормализации артериального давления",
        "uz": "Yomon xolesterin darajasini pasaytiradi, yurak-qon tomir kasalliklarini rivojlanish xavfini kamaytiradi kasalliklar. Inositol B8 qon tomirlari devorlarini mustahkamlash uchun  ko'rsatiladi, qonni suyultirish va qon bosimini normallashtirish",
    },
    "acc-5" :  {
        "ru": "   ЗДОРОВЬЕ ВОЛОС, НОГТЕЙ И КОЖИ",
        "uz": "SOCH TIRNOQ VA TERI SALOMATLIGIGA",
    },
    "text-5" :  {
        "ru": "Витамин улучшает состояние эпидермиса, устраняет накожные заболевания. Также усиливает рост волос и укрепляет их структуру",
        "uz": "Vitamin epidermisning holatini yaxshilaydi, teri kasalliklarini yo'q qiladi. Bundan tashqari, soch o'sishini kuchaytiradi va ularning tuzilishini mustahkamlaydi.",
    },
    "acc-6" :  {
        "ru": "ОПОРНО-ДВИГАТЕЛЬНЫЙ АППАРАТ",
        "uz": "MUSHAK-BO'G'IM VA SUYAKLARGA TA'SIRI",
    },
    "text-6" :  {
        "ru": "Укрепляет структуру и ускоряет восстановление костных и мышечных тканей. Потому   инозитол часто пьют для профилактики возникновения травм спорте (он обязательно  входит во все комплексные витаминные добавки)",
        "uz": "Suyaklar strukturasini mustahkamlaydi va mushak to'qimalarining tiklanishini tezlashtiradi. Sport jarohatlari paydo bo'lishining oldini olish uchun Inoksol qa'bul qilish kerak bo'ladi.",
    },
    "warn-info-1" :  {
        "ru": "Противопоказания",
        "uz": "Qo'llash mumkin bo'lmagan holatlar",
    },
    "warn-text-1" :  {
        "ru": " Индивидуальная непереносимость компонентов Хранить в недоступном для детей месте Хранить в оригинальной упаковке при температуре  не выше 25 °C. БАД не является лекарственным  средством!",
        "uz": "Komponentlarga individual yondashmaslik. Bolalar qo'li yetmaydigan joyda saqlansin. Preparat o'z o'ramida  25 ° C dan yugori bo'lmagan haroratda saqlansin. Homiladorlik va laktatsiya davrida foydalanish: Foydalanishdan oldin shifokor bilan maslahatlashing!",
    },
    "warn-info-2" :  {
        "ru": "Применение при беременности и кормлении грудью:",
        "uz": "Homiladorlik va laktatsiya davrida foydalanish:",
    },
    "warn-text-2" :  {
        "ru": "Перед применением рекомендуется проконсультироваться с врачом",
        "uz": " Foydalanishdan oldin shifokor bilan maslahatlashing!",
    },

 
    
    "blog-contacts" :  {
        "ru": "Контакты",
        "uz": "Kontakt",
    }, 
    "contact-details" :  {
        "ru": "Контактные данные",
        "uz": "Kontaktlar",
    }, 
    "send" :  {
        "ru": "Отправить",
        "uz": "Yuborish",
    }, 
    "socials" :  {
        "ru": "Социальные сети",
        "uz": "Ijtimoiy tarmoqlar",
    }, 
    "first" :  {
        "ru": "Подготовке к первому классу,",
        "uz": "Birinchi sinfga tayyorgarlik",
    }, 
    "second" :  {
        "ru": "Повышенных умственных нагрузках — контрольных, экзаменах, олимпиадах,",
        "uz": "Ruhiy stressning kuchayishida - testlar, imtihonlar, olimpiadalar,",
    }, 
    "third" :  {
        "ru": "Регулярных дополнительных занятиях — творческих или интеллектуальных,",
        "uz": "Doimiy qo'shimcha darslar - ijodiy yoki intellektual,",
    }, 
    "fourth" :  {
        "ru": "Трудностях с усвоением нового материала в школе или секциях.",
        "uz": "Maktabda yoki bo'limlarda yangi materialni o'zlashtirish bilan bog'liq qiyinchiliklar.",
    }, 
    "child-info" :  {
        "ru": " INOXOL отвечает за питание нервных клеток, защищает их от повреждений и разрушения, участвует в процессах образования новых нейронных связей. При дефиците B4 ухудшается кратковременная память. Новые знания и навыки усваиваются медленнее и хуже. Ребенок становится рассеянным, невнимательным, не может сконцентрироваться, «не слышит» учителей и родителей.B4 особенно нужен детям при:",
        "uz": "INOXOL nerv hujayralarining oziqlanishi uchun mas'ul bo'lib, ularni shikastlanish va yo'q qilishdan himoya qiladi va yangi neyron aloqalarni shakllantirishda ishtirok etadi. B4 etishmovchiligi bilan qisqa muddatli xotira yomonlashadi. Yangi bilim va ko'nikmalar sekinroq va yomonroq o'zlashtiriladi. Bola chalg'itadi, beparvo bo'ladi, diqqatni jamlay olmaydi, o'qituvchilar va ota-onalarni eshitmaydi.B4 ayniqsa bolalar uchun zarur:",
    },
    "child-function" :  {
        "ru": "Функции Иноксола ДЕТЯМ",
        "uz": "BOLALAR uchun Inoksolning vazifalari",
    }, 
    "links" :  {
        "ru": "Ссылки",
        "uz": "Havolalar",
    }, 
    "f-home" :  {
        "ru": "Главная",
        "uz": "Bosh sahifa",
    }, 
    "f-about" :  {
        "ru": "О нас",
        "uz": "Biz haqimizda",
    }, 
    "f-service" :  {
        "ru": "Сервис",
        "uz": "Servis",
    }, 
    "f-blog" :  {
        "ru": "Блог",
        "uz": "Blog",
    }, 
    "f-contacts" :  {
        "ru": "Контакты",
        "uz": "Kontaktlar",
    }, 
    "questions" :  {
        "ru": "Если есть вопросы?",
        "uz": "Savolar bo'lsa shu yerga yozing",
    }, 
    "location" :  {
        "ru": "Локация",
        "uz": "Manzil",
    }, 
    "f-address" :  {
        "ru": "Ташкент улица Мукимий дом, 25-48",
        "uz": "Toshkent ko'chasi Muqimiy uyi, 25-48",
    }, 
    
}