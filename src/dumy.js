const dummy = [
    {
        id: 1,
        name: "Sushi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
        price: 50000,
        description: "Sushi adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk pauk seperti ikan mentah, telur, sayuran, atau rumput laut.",
    },
    {
        id: 2,
        name: "Ramen",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
        price: 30000,
        description:
            "Ramen adalah makanan Jepang berupa mie kuah yang berasal dari Tiongkok. Kuah ramen biasanya berbahan dasar kaldu ayam, daging babi, ikan, atau sayuran yang dibumbui dengan kecap asin, miso, atau garam. Ramen disajikan dengan berbagai topping seperti irisan daging babi, telur rebus, daun bawang, rumput laut, atau jagung.",
    },
    {
        id: 3,
        name: "Tempura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%E3%81%A4%E3%81%AA%E5%85%AB_%E7%9B%9B%E3%82%8A%E4%BB%98%E3%81%91_%2825086067202%29.jpg/1280px-%E3%81%A4%E3%81%AA%E5%85%AB_%E7%9B%9B%E3%82%8A%E4%BB%98%E3%81%91_%2825086067202%29.jpg",
        price: 40000,
        description:
            "Tempura adalah makanan Jepang yang terbuat dari bahan-bahan seperti udang, ikan, sayuran, atau jamur yang dicelup ke dalam adonan tepung dan digoreng dalam minyak panas. Tempura biasanya disajikan dengan saus khusus yang terbuat dari kaldu dashi, kecap asin, dan mirin.",
    },
    {
        id: 4,
        name: "Takoyaki",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Takoyaki_01.jpg/1200px-Takoyaki_01.jpg",
        price: 20000,
        description: "Takoyaki adalah makanan Jepang berupa bola-bola adonan tepung yang diisi dengan potongan gurita dan disajikan dengan saus takoyaki, mayones, katsuobushi, dan aonori. Takoyaki merupakan makanan khas kota Osaka.",
    },
    {
        id: 5,
        name: "Onigiri",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Onigiri_001.jpg/1200px-Onigiri_001.jpg?20200225215324",
        price: 10000,
        description: "Onigiri adalah makanan Jepang berupa nasi yang dibentuk menjadi segitiga atau bulat dan dibungkus dengan rumput laut. Onigiri biasanya diisi dengan berbagai bahan seperti tuna, salmon, umeboshi, atau teri kering.",
    },
    {
        id: 6,
        name: "Sashimi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sashimi.jpg/1200px-Sashimi.jpg?20060105101344",
        price: 60000,
        description:
            "Sashimi adalah makanan Jepang yang terdiri dari irisan tipis ikan mentah atau makanan laut lainnya yang disajikan dengan wasabi, kecap asin, dan jahe. Sashimi merupakan salah satu cara menikmati kesegaran dan rasa ikan mentah.",
    },
    {
        id: 7,
        name: "Okonomiyaki",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Okonomiyaki_Kansai.jpg",
        price: 25000,
        description:
            "Okonomiyaki adalah makanan Jepang berupa kue dadar tebal yang terbuat dari adonan tepung, telur, air, dan kubis yang dicampur dengan berbagai bahan seperti daging babi, udang, cumi, keju, atau kimchi. Okonomiyaki disajikan dengan saus okonomiyaki, mayones, katsuobushi, dan aonori. Okonomiyaki merupakan makanan khas kota Hiroshima dan Osaka.",
    },
    {
        id: 8,
        name: "Yakitori",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Yakitori.jpg/1131px-Yakitori.jpg?20190904130443",
        price: 15000,
        description:
            "Yakitori adalah makanan Jepang berupa tusuk sate yang terbuat dari potongan-potongan daging ayam yang dibumbui dengan garam atau saus tare dan dibakar di atas arang. Yakitori biasanya disajikan dengan daun bawang, paprika, atau jamur. Yakitori merupakan makanan populer di kalangan pekerja dan pelajar.",
    },
    {
        id: 9,
        name: "Udon",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Kakeudon.jpg?20050515081259",
        price: 20000,
        description:
            "Udon adalah makanan Jepang berupa mie tebal yang terbuat dari tepung terigu. Udon bisa disajikan dengan kuah panas atau dingin yang berasal dari kaldu dashi, kecap asin, dan mirin. Udon juga bisa disajikan dengan berbagai topping seperti tempura, katsuobushi, daun bawang, atau telur mentah.",
    },
    {
        id: 10,
        name: "Mochi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mochi_TelAviv.jpg/1920px-Mochi_TelAviv.jpg",
        price: 10000,
        description:
            "Mochi adalah makanan Jepang berupa kue yang terbuat dari beras ketan yang ditumbuk hingga lembut dan kenyal. Mochi bisa diisi dengan pasta kacang merah, kacang hijau, atau es krim. Mochi juga bisa ditaburi dengan gula halus, kinako, atau wijen. Mochi merupakan makanan tradisional yang sering dimakan saat perayaan tahun baru.",
    },
    {
        id: 11,
        name: "Dango",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/An_dango_002.jpg/1024px-An_dango_002.jpg",
        price: 5000,
        description:
            "Dango adalah makanan Jepang berupa bola-bola kecil yang terbuat dari tepung beras yang direbus dan ditusuk dengan tusuk sate. Dango bisa disajikan dengan berbagai saus seperti saus kacang manis, saus gula merah, atau saus teh hijau. Dango merupakan makanan ringan yang sering dijual di festival atau taman.",
    },
    {
        id: 12,
        name: "Yakiniku",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Yakiniku_002.jpg",
        price: 80000,
        description:
            "Yakiniku adalah makanan Jepang berupa daging sapi, ayam, atau babi yang dipotong tipis-tipis dan dibakar di atas panggangan. Yakiniku disajikan dengan saus khusus yang terbuat dari kecap asin, gula, bawang putih, jahe, wijen, dan mirin. Yakiniku merupakan makanan yang cocok untuk dimakan bersama teman atau keluarga.",
    },
    {
        id: 13,
        name: "Soba",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mori-soba_002.jpg/1024px-Mori-soba_002.jpg",
        price: 20000,
        description:
            "Soba adalah makanan Jepang berupa mie tipis yang terbuat dari tepung gandum buckwheat. Soba bisa disajikan dengan kuah panas atau dingin yang berasal dari kaldu dashi, kecap asin, dan mirin. Soba juga bisa disajikan dengan berbagai topping seperti tempura, katsuobushi, daun bawang, atau wasabi. Soba merupakan makanan sehat yang kaya akan serat dan protein.",
    },
    {
        id: 14,
        name: "Karaage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Karaage_frittiertes_H%C3%BChnchen.jpg/1024px-Karaage_frittiertes_H%C3%BChnchen.jpg",
        price: 25000,
        description:
            "Karaage adalah makanan Jepang berupa potongan-potongan daging ayam yang dibumbui dengan kecap asin, bawang putih, jahe, dan sake kemudian digoreng dalam minyak panas. Karaage biasanya disajikan dengan irisan lemon, daun bawang, atau mayones. Karaage merupakan makanan yang gurih dan renyah.",
    },
    {
        id: 15,
        name: "Gyudon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gyuu-don_003.jpg/1024px-Gyuu-don_003.jpg",
        price: 30000,
        description:
            "Gyudon adalah makanan Jepang berupa semangkuk nasi yang ditaburi dengan irisan daging sapi yang dimasak dengan bawang bombay, kecap asin, mirin, dan dashi. Gyudon biasanya disajikan dengan telur mentah, benishoga, atau miso sup. Gyudon merupakan makanan cepat saji yang murah dan mengenyangkan.",
    },
    {
        id: 16,
        name: "Oden",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Oden_by_Mori_Chan.jpg/800px-Oden_by_Mori_Chan.jpg",
        price: 35000,
        description:
            "Oden adalah makanan Jepang berupa berbagai bahan seperti telur rebus, tahu, konyaku, daikon, chikuwa, atau sosis yang direbus dalam kaldu dashi yang berasa. Oden biasanya disajikan dengan saus berwarna kuning yang terbuat dari mustard dan karashi. Oden merupakan makanan hangat yang cocok untuk musim dingin.",
    },
    {
        id: 17,
        name: "Tonkatsu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tonkatsu_of_Kimukatsu.jpg/1024px-Tonkatsu_of_Kimukatsu.jpg",
        price: 40000,
        description:
            "Tonkatsu adalah makanan Jepang berupa potongan daging babi yang dilapisi dengan tepung roti dan digoreng dalam minyak panas. Tonkatsu disajikan dengan saus tonkatsu, kubis cincang, nasi, dan miso sup. Tonkatsu merupakan makanan yang kaya akan protein dan lemak.",
    },
    {
        id: 18,
        name: "Curry Rice",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bamboo_shoot_curry_on_rice_%282446023942%29.jpg",
        price: 30000,
        description:
            "Curry Rice adalah makanan Jepang berupa semangkuk nasi yang disiram dengan kuah kari yang terbuat dari bumbu kari, kaldu daging, bawang bombay, wortel, dan kentang. Curry Rice bisa ditambahkan dengan daging sapi, ayam, atau babi. Curry Rice merupakan makanan yang pedas dan aromatik.",
    },
    {
        id: 19,
        name: "Shabu-shabu",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Shabu-shabu-01.jpg",
        price: 100000,
        description:
            "Shabu-shabu adalah makanan Jepang berupa daging sapi yang dipotong sangat tipis dan direbus dalam kaldu dashi yang mendidih di atas meja. Shabu-shabu disajikan dengan berbagai sayuran seperti kubis, jamur, tahu, atau daikon. Shabu-shabu bisa dicocol dengan saus ponzu atau saus goma. Shabu-shabu merupakan makanan yang sehat dan lezat.",
    },
    {
        id: 20,
        name: "Matcha Ice Cream",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Matcha_ice_cream_001.jpg/1024px-Matcha_ice_cream_001.jpg",
        price: 15000,
        description:
            "Matcha Ice Cream adalah makanan Jepang berupa es krim rasa teh hijau yang terbuat dari bubuk matcha. Matcha Ice Cream bisa disajikan dengan mochi, red bean paste, atau whipped cream. Matcha Ice Cream merupakan makanan penutup yang menyegarkan dan manis.",
    },
    {
        id: 21,
        name: "Miso Soup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Miso_Soup_001.jpg/1199px-Miso_Soup_001.jpg",
        price: 10000,
        description:
            "Miso Soup adalah makanan Jepang berupa sup yang terbuat dari kaldu dashi yang dicampur dengan pasta miso. Miso Soup bisa ditambahkan dengan berbagai bahan seperti tahu, daun bawang, wakame, atau jamur. Miso Soup merupakan makanan yang sering disajikan sebagai hidangan pembuka atau pelengkap nasi.",
    },
    {
        id: 22,
        name: "Omurice",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Omurice_by_Taimeiken.jpg/1024px-Omurice_by_Taimeiken.jpg",
        price: 25000,
        description:
            "Omurice adalah makanan Jepang berupa nasi goreng yang dibungkus dengan telur dadar dan disajikan dengan saus tomat. Omurice bisa diisi dengan berbagai bahan seperti daging ayam, udang, sosis, atau sayuran. Omurice merupakan makanan yang populer di kalangan anak-anak dan keluarga.",
    },
    {
        id: 23,
        name: "Gyoza",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Kyoto_Ohsho_Gyouza_Ag10.jpg/1024px-Kyoto_Ohsho_Gyouza_Ag10.jpg",
        price: 20000,
        description:
            "Gyoza adalah makanan Jepang berupa pangsit goreng yang terbuat dari kulit tipis yang diisi dengan daging babi cincang, bawang putih, jahe, dan sayuran. Gyoza disajikan dengan saus yang terbuat dari cuka, kecap asin, dan minyak wijen. Gyoza merupakan makanan yang berasal dari Tiongkok.",
    },
    {
        id: 24,
        name: "Nikuman",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Nikuman.jpg",
        price: 10000,
        description:
            "Nikuman adalah makanan Jepang berupa roti kukus yang diisi dengan daging babi cincang, bawang bombay, jahe, dan kecap asin. Nikuman biasanya dijual di toko roti atau mesin penjual otomatis. Nikuman merupakan makanan yang hangat dan lembut.",
    },
    {
        id: 25,
        name: "Chawanmushi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chawanmushi.JPG/1024px-Chawanmushi.JPG",
        price: 15000,
        description:
            "Chawanmushi adalah makanan Jepang berupa puding telur yang direbus dalam kaldu dashi yang berasa. Chawanmushi bisa ditambahkan dengan berbagai bahan seperti udang, ikan kamaboko, jamur shiitake, atau daun mitsuba. Chawanmushi merupakan makanan yang halus dan gurih.",
    },
    {
        id: 26,
        name: "Sukiyaki",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sukiyaki_001.jpg/1200px-Sukiyaki_001.jpg?20220515141441",
        price: 90000,
        description:
            "Sukiyaki adalah makanan Jepang berupa daging sapi yang dipotong tipis dan dimasak dalam panci besi dengan bumbu yang terbuat dari kecap asin, gula, dan mirin. Sukiyaki disajikan dengan berbagai sayuran seperti tahu, shirataki, daun bawang, atau enoki. Sukiyaki bisa dicocol dengan telur mentah. Sukiyaki merupakan makanan yang manis dan lezat.",
    },
    {
        id: 27,
        name: "Katsu Curry",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Katsu-curry_001.jpg/1024px-Katsu-curry_001.jpg",
        price: 40000,
        description: "Katsu Curry adalah makanan Jepang berupa semangkuk nasi yang disiram dengan kuah kari dan ditambahkan dengan potongan tonkatsu. Katsu Curry merupakan variasi dari curry rice yang lebih kaya akan rasa dan tekstur.",
    },
    {
        id: 28,
        name: "Yakimeshi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Asa_chahan_by_ayustety_in_Naha%2C_Okinawa.jpg/1024px-Asa_chahan_by_ayustety_in_Naha%2C_Okinawa.jpg",
        price: 20000,
        description:
            "Yakimeshi adalah makanan Jepang berupa nasi goreng yang dibumbui dengan kecap asin, garam, merica, dan minyak wijen. Yakimeshi bisa ditambahkan dengan berbagai bahan seperti daging ayam, udang, telur, daun bawang, atau wortel. Yakimeshi merupakan makanan sederhana yang mudah dibuat.",
    },
    {
        id: 29,
        name: "Taiyaki",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Taiyaki.jpg?20051015175328",
        price: 5000,
        description: "Taiyaki adalah makanan Jepang berupa kue yang dibentuk menyerupai ikan dan diisi dengan pasta kacang merah. Taiyaki biasanya dijual di toko kue atau gerobak jajanan. Taiyaki merupakan makanan yang manis dan hangat.",
    },
    {
        id: 30,
        name: "Onsen Tamago",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Onsen_tamago_at_minshuku_Korakuen%2C_Nagano_by_Blue_Lotus.jpg/1024px-Onsen_tamago_at_minshuku_Korakuen%2C_Nagano_by_Blue_Lotus.jpg",
        price: 10000,
        description:
            "Onsen Tamago adalah makanan Jepang berupa telur rebus yang dimasak dengan suhu rendah sehingga putih telurnya lembut dan kuning telurnya cair. Onsen Tamago biasanya disajikan dengan kaldu dashi, kecap asin, dan daun bawang. Onsen Tamago merupakan makanan yang berasal dari tradisi memasak telur di air panas alami.",
    },
    {
        id: 31,
        name: "Ramune",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ramune-lemonade%2Cjapan.JPG/800px-Ramune-lemonade%2Cjapan.JPG",
        price: 10000,
        description:
            "Ramune adalah minuman ringan berkarbonasi yang berasal dari Jepang. Ramune memiliki botol kaca khas dengan bola kaca yang berfungsi sebagai penutup. Ramune memiliki berbagai rasa, seperti anggur, melon, stroberi, dan lain-lain.",
    },
    {
        id: 32,
        name: "Matcha",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Powderedgreentea.jpg",
        price: 20000,
        description:
            "Matcha adalah teh hijau bubuk yang berasal dari Jepang. Matcha dibuat dengan menumbuk daun teh hijau yang dikeringkan. Matcha memiliki warna hijau cerah dan rasa pahit. Matcha biasanya diseduh dengan air panas dan dikocok dengan kuas bambu.",
    },
    {
        id: 33,
        name: "Calpis",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Calpis_karupisu.JPG/800px-Calpis_karupisu.JPG",
        price: 15000,
        description: "Calpis adalah minuman fermentasi susu yang berasal dari Jepang. Calpis memiliki rasa asam manis dan aroma susu. Calpis biasanya dicampur dengan air atau soda sebelum diminum.",
    },
    {
        id: 34,
        name: "Amazake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazake_by_emily_harbour_in_july.jpg/1280px-Amazake_by_emily_harbour_in_july.jpg",
        price: 25000,
        description: "Amazake adalah minuman tradisional Jepang yang dibuat dari beras ketan yang difermentasi dengan ragi beras. Amazake memiliki rasa manis dan tekstur kental. Amazake biasanya disajikan hangat dengan jahe parut.",
    },
    {
        id: 35,
        name: "Mugicha",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Boricha_%28barley_tea%29.jpg",
        price: 10000,
        description: "Mugicha adalah teh gandum panggang yang berasal dari Jepang. Mugicha memiliki rasa gurih dan aroma gandum. Mugicha biasanya diseduh dengan air dingin dan diminum sebagai minuman penyegar di musim panas.",
    },
    {
        id: 36,
        name: "Ume-shu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Umeshu_on_the_rocks.jpg/800px-Umeshu_on_the_rocks.jpg",
        price: 60000,
        description:
            "Ume-shu adalah minuman beralkohol yang dibuat dari buah plum Jepang (ume) yang direndam dalam alkohol dan gula. Ume-shu memiliki rasa asam manis dan aroma plum. Ume-shu biasanya diminum dingin dengan es atau dicampur dengan soda.",
    },
    {
        id: 37,
        name: "Kombucha",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Kombucha_Mature.jpg",
        price: 20000,
        description:
            "Kombucha adalah minuman fermentasi teh yang berasal dari Asia Timur. Kombucha dibuat dengan menambahkan kultur ragi dan bakteri ke dalam teh manis. Kombucha memiliki rasa asam dan sedikit berkarbonasi. Kombucha diklaim memiliki manfaat kesehatan, seperti meningkatkan sistem imun dan pencernaan.",
    },
    {
        id: 38,
        name: "Genmaicha",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Genmaicha_tea_brewed_and_unbrewed.jpg/800px-Genmaicha_tea_brewed_and_unbrewed.jpg",
        price: 15000,
        description: "Genmaicha adalah teh hijau yang dicampur dengan beras panggang. Genmaicha memiliki rasa gurih dan aroma beras. Genmaicha biasanya diseduh dengan air panas dan diminum tanpa gula.",
    },

    // {
    //     id: 1,
    //     name: "Okonomiyaki",
    //     image: "url",
    //     price: 80000,
    //     description: "Okonomiyaki adalah sejenis kue dadar tebal yang berisi berbagai bahan seperti kubis, tauge, daging, udang, atau keju. Okonomiyaki disajikan dengan saus khusus, mayones, bonito flakes, dan nori.",
    // },
    // {
    //     id: 2,
    //     name: "Takoyaki",
    //     image: "url",
    //     price: 50000,
    //     description: "Takoyaki adalah bola-bola adonan tepung yang diisi dengan potongan gurita dan dimasak dalam cetakan khusus. Takoyaki biasanya disajikan dengan saus takoyaki, mayones, bonito flakes, dan beni shoga (jahe merah asam).",
    // },
    // {
    //     id: 3,
    //     name: "Katsudon",
    //     image: "url",
    //     price: 100000,
    //     description:
    //         "Katsudon adalah hidangan nasi yang ditaburi dengan potongan daging babi yang digoreng tepung (tonkatsu), telur orak-arik, bawang bombay, dan kuah kaldu. Katsudon merupakan makanan populer di Jepang, terutama di kalangan pelajar dan atlet.",
    // },
    // {
    //     id: 4,
    //     name: "Udon",
    //     image: "url",
    //     price: 70000,
    //     description:
    //         "Udon adalah jenis mi tebal yang terbuat dari tepung terigu. Udon dapat disajikan dalam kuah panas atau dingin, atau digoreng dengan bumbu dan bahan lainnya. Udon juga dapat ditambahkan dengan topping seperti tempura, aburaage (tahu goreng), atau kamaboko (pasta ikan).",
    // },
    // {
    //     id: 5,
    //     name: "Soba",
    //     image: "url",
    //     price: 60000,
    //     description:
    //         "Soba adalah jenis mi tipis yang terbuat dari tepung gandum buckwheat. Soba dapat disajikan dalam kuah panas atau dingin, atau dimakan dengan saus tsuyu yang dicocolkan. Soba juga dapat ditambahkan dengan topping seperti wasabi, daun bawang, atau nori.",
    // },
    // {
    //     id: 6,
    //     name: "Kare Raisu",
    //     image: "url",
    //     price: 90000,
    //     description:
    //         "Kare Raisu adalah hidangan nasi yang disiram dengan saus kari yang kental dan gurih. Saus kari biasanya berisi daging sapi, ayam, atau babi, serta potongan wortel, kentang, dan bawang bombay. Kare Raisu merupakan salah satu makanan favorit di Jepang, baik di rumah maupun di restoran.",
    // },
    // {
    //     id: 7,
    //     name: "Tempura",
    //     image: "url",
    //     price: 120000,
    //     description:
    //         "Tempura adalah hidangan Jepang yang dibuat dari potongan daging, ikan, atau sayuran yang dicelup ke dalam adonan tepung terigu dan digoreng dalam minyak panas. Tempura biasanya disajikan dengan saus tentsuyu yang terbuat dari kaldu dashi, kecap asin, dan mirin.",
    // },
    // {
    //     id: 8,
    //     name: "Sukiyaki",
    //     image: "url",
    //     price: 150000,
    //     description:
    //         "Sukiyaki adalah hidangan Jepang yang terdiri dari daging sapi tipis dan sayuran yang direbus dalam panci besi dengan kuah manis dan gurih. Kuah sukiyaki terbuat dari kecap asin, gula, dan sake. Sukiyaki biasanya dimakan dengan mencelupkan potongan daging atau sayuran ke dalam mangkuk telur mentah yang dikocok.",
    // },
    // {
    //     id: 9,
    //     name: "Shabu-shabu",
    //     image: "url",
    //     price: 160000,
    //     description:
    //         "Shabu-shabu adalah hidangan Jepang yang terdiri dari daging sapi tipis dan sayuran yang direbus dalam panci dengan air atau kaldu dashi. Shabu-shabu dinamakan demikian karena suara yang dihasilkan saat daging atau sayuran digerakkan di dalam panci. Shabu-shabu biasanya disajikan dengan saus ponzu atau saus kacang.",
    // },
    // {
    //     id: 10,
    //     name: "Onigiri",
    //     image: "url",
    //     price: 30000,
    //     description:
    //         "Onigiri adalah bola nasi yang dibentuk tangan dan diisi dengan berbagai bahan seperti umeboshi (plum asam), okaka (bonito flakes), atau sake (salmon). Onigiri biasanya dibungkus dengan nori agar mudah dibawa dan dimakan. Onigiri merupakan makanan ringan yang populer di Jepang.",
    // },
    // {
    //     id: 11,
    //     name: "Gyudon",
    //     image: "url",
    //     price: 80000,
    //     description: "Gyudon adalah hidangan nasi yang ditaburi dengan irisan daging sapi yang dimasak dengan bawang bombay, kecap asin, mirin, dan dashi. Gyudon merupakan makanan cepat saji yang murah dan populer di Jepang.",
    // },
    // {
    //     id: 12,
    //     name: "Yakitori",
    //     image: "url",
    //     price: 50000,
    //     description:
    //         "Yakitori adalah tusuk sate yang terbuat dari potongan daging ayam yang dibumbui dengan garam atau saus tare (campuran kecap asin, gula, mirin, dan sake) dan dibakar di atas arang. Yakitori biasanya disajikan dengan daun bawang, paprika, atau jamur.",
    // },
    // {
    //     id: 13,
    //     name: "Yakiniku",
    //     image: "url",
    //     price: 150000,
    //     description:
    //         "Yakiniku adalah hidangan daging sapi atau babi yang dipotong tipis-tipis dan dibakar di atas panggangan. Yakiniku biasanya dimakan dengan mencelupkan daging ke dalam saus yakiniku yang terbuat dari kecap asin, gula, bawang putih, jahe, wijen, dan cabai. Yakiniku merupakan makanan yang cocok untuk acara bersama keluarga atau teman.",
    // },
    // {
    //     id: 14,
    //     name: "Sashimi",
    //     image: "url",
    //     price: 120000,
    //     description:
    //         "Sashimi adalah hidangan makanan laut mentah yang dipotong tipis-tipis dan disajikan dengan wasabi dan kecap asin. Sashimi dapat terbuat dari berbagai jenis ikan atau kerang, seperti tuna, salmon, ikan todak, cumi-cumi, atau kerang hijau. Sashimi merupakan salah satu hidangan khas Jepang yang paling terkenal di dunia.",
    // },
    // {
    //     id: 15,
    //     name: "Miso Shiru",
    //     image: "url",
    //     price: 30000,
    //     description:
    //         "Miso Shiru adalah sup kaldu dashi yang dicampur dengan pasta miso (fermentasi kedelai) dan ditambahkan dengan berbagai bahan seperti tahu, wakame (rumput laut), daun bawang, atau aburaage (tahu goreng). Miso Shiru biasanya disajikan sebagai hidangan pembuka atau pendamping nasi.",
    // },
    // {
    //     id: 16,
    //     name: "Chawanmushi",
    //     image: "url",
    //     price: 40000,
    //     description:
    //         "Chawanmushi adalah puding telur kukus yang dibuat dari telur yang dikocok dengan kaldu dashi dan ditambahkan dengan berbagai bahan seperti daging ayam, udang, kamaboko (pasta ikan), shiitake (jamur), atau ginkgo. Chawanmushi biasanya disajikan dalam mangkuk keramik khusus dengan tutup.",
    // },
    // {
    //     id: 17,
    //     name: "Oyakodon",
    //     image: "url",
    //     price: 80000,
    //     description:
    //         'Oyakodon adalah hidangan nasi yang ditaburi dengan potongan daging ayam dan telur orak-arik yang dimasak dengan bawang bombay, kecap asin, mirin, dan dashi. Nama oyakodon berarti "mangkuk induk dan anak", karena menggunakan ayam dan telur dalam satu hidangan.',
    // },
    // {
    //     id: 18,
    //     name: "Tonjiru",
    //     image: "url",
    //     price: 60000,
    //     description:
    //         "Tonjiru adalah sup kaldu miso yang dicampur dengan potongan daging babi dan sayuran seperti wortel, kentang, daikon (lobak putih), konnyaku (umbi-umbian), atau shirataki (mi konnyaku). Tonjiru biasanya disajikan sebagai hidangan penghangat tubuh di musim dingin.",
    // },
    // {
    //     id: 19,
    //     name: "Omurice",
    //     image: "url",
    //     price: 70000,
    //     description:
    //         "Omurice adalah hidangan nasi yang digoreng dengan kecap manis, saus tomat, atau saus demi-glace dan dibungkus dengan telur dadar. Omurice biasanya ditulis dengan saus tomat atau mayones di atasnya. Omurice merupakan makanan yang disukai oleh anak-anak dan orang dewasa.",
    // },
    // {
    //     id: 20,
    //     name: "Dorayaki",
    //     image: "url",
    //     price: 20000,
    //     description: "Dorayaki adalah kue manis yang terbuat dari dua lapis adonan mirip pancake yang diisi dengan pasta kacang merah manis. Dorayaki merupakan makanan kesukaan Doraemon, karakter kartun kucing robot biru dari Jepang.",
    // },
];

export { dummy };
