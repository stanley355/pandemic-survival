// indonesia
var indexTextIndo = [
    "Mulai baru",
    "Lanjutkan permainan",
    "Profil",
    "Kredit",
    "Gender",
    "Pilih gender kamu",
    "Laki-laki",
    "Perempuan",
    "Ubah bahasa",
    "Nama",
    "Masukkan nama kamu",
    "Kembali ke Menu utama",
]
var onloadTextIndo = [
    // level 1
    "Selamat datang dalam permainan Surviving Covid Labyrinth. Dalam permainan ini kamu akan berpetualang dalam situasi pandemi Covid-19." + "<br>" + "Selama berpetualang kamu harus mengikuti protokol kesehatan, seperti menjaga jarak aman, mencuci tangan dengan sabun, menggunakan cairan pembersih tangan, menggunakan masker, dan menghindari kerumunan.", //0
    "Di sisi kanan atas layar, ada garis kesehatan yang menunjukkan tingkat kesehatanmu. Jika garis tersebut habis, maka permainan akan berakhir dan kamu harus mengulang dari awal untuk level itu.", //1
    "Petualangan kamu di level 1 selesai kalau kamu selamat pulang ke rumahmu di ujung hutan." + "<br>" + "Sebelum bertualang, ada baiknya kamu berpamitan dengan teman baikmu." + "<br>"+ "Selamat berpetualang!", //2
    // level 2
    "Selamat datang kembali. Di level ini kamu akan melanjutkan petualanganmu. Petualanganmu dimulai dengan percakapan dengan ibumu.", //3
    "Jangan lupa untuk tetap mengikuti protokol kesehatan karena kita masih dalam masa pandemi Covid-19. Selamat menempuh petualangan di level 2 ini.",//4
    // level 3
    "Selamat, kamu sudah sampai level terakhir petualanganmu. Di level ini kamu baru tiba di kota untuk mengunjungi saudaramu." + "<br>" + "Hati-hati saat menyeberang jalan. Tetap patuhi protokol kesehatan, terutama menjaga jarak aman, selalu memakai masker, dan hindari kerumunan.", //5
    "Sebelum kamu masuk kota, kamu harus cek suhu dan tunjukkan Kartu Kewaspadaan Kesehatan kamu. Selamat bertualang!", //6
    "Daftar barang yang harus dibeli:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Roti tawar </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Permainan berakhir. Anda tertabrak mobil.",
    "Permainan berakhir. Tingkat kesehatanmu Anda habis.",
]
var txt1Indo = [
    "Teman: Hai, kamu mau ke mana? Ke sini dulu!", //0
    "Teman: Hai, jangan lupa cuci tangan dengan sabun, ya!", //1
    "Teman: Dengan mencuci tangan, kamu memastikan tanganmu bersih dan aman dari virus.",
    "Teman: Kamu bisa mencuci tangan di depan rumahku.",
    "Hore, tanganmu sudah tercuci!",
    "Pemuda: *Uhuk* Maaf ya, tendaku menghalangi jalanmu. Tapi, kamu bisa lewat sana.", //5
    "Penjaga  Gerbang: Anak muda, kenapa kamu tidak pakai masker? Ini masker untukmu.", //6
    "Masker didapatkan",
    "Penjaga Gerbang: Bagus, kamu sudah pakai masker! Silakan lewat.",
    nama + ": Terima kasih!" ,
    "Ingat untuk selalu jaga jarak aman, ya!", //10
    "*Uhuk* Apa kamu melihat cucuku? Dia tidak pakai masker waktu pergi.", //11
    nama + ": Oh, saya lihat dia di hutan.", 
    "Nenek: Bisa tolong berikan masker ini ke dia, Nak?", 
    nama + ": Tentu saja.", 
    nama + ": Ini masker dari nenekmu. Dipakai dulu!", //15
    "Oke, terima kasih!", // 16
    "Ibu: Sayang, kamu sudah pulang. Tolong belikan sabun cuci tangan dulu, ya?", 
    nama + ": Di mana, Bu?", 
    "Ibu: Di warung Bu Ani.", 
    "Yani: Cari apa, Kak?", //20
    nama + ": Mau beli sabun cuci tangan.", //21
    "Yani: Oh, langsung ke dalam saja.", 
    "Ani: Selamat datang, mau beli apa?", 
    nama + ": Ada sabun cuci tangan?", 
    "Ani: Oh, tentu saja. Ini, Kak!", //25
    "Sabun cuci tangan didapatkan!", //26
    "Ibu: Terima kasih, Sayang. Jangan lupa cuci tangan sebelum masuk ke rumah, ya!",
    "Tangan tercuci!",
    "Hore, level 1 selesai!",
    nama + ": Ini sabunnya, Bu.", //30
]
var txt2Indo = [
    "Ibu: Kamu bisa antarkan makan siang untuk Kakek?", //0
nama + ": Baik, Bu.", //1
"Hati-hati di jalan, ya!",
"Tetangga: Hai, " + nama + " Dengar-dengar Bu Joko kena Covid.",
"Anak kecil: Hosh...hosh...Aku harus pulang sepuluh menit lagi.",
"Anak kecil: Hatsi...hatsi...", //5
nama + ": Bu, anaknya kenapa?", //6
"Ibu-ibu: Dia batuk, pilek, dan agak demam. Jadi kami mau rapid test.", 
nama + ": Oh. Semoga bukan Covid ya, Bu.", 
"Ibu-ibu: Terima kasih, Nak.",
"Kakek-kakek: UHUK UHUK", //10
nama + ": (Waduh, aku harus jaga jarak nih)", //11
nama + ": (Wah, aku harus buru-buru mengantar makanan Kakek)",
"Perawat: Kalau mau berobat, ini nomor antriannya.",
nama + ": Maaf, saya tidak berobat. Terima kasih.",
"Ibu-ibu: Tolong jaga jarak, Nak.", //15
"Penjual buah: Cari apa, Kak?",
nama + ": Tidak Pak. Terima kasih.",
nama + ": (Bapak ini tidak pake masker. Aku tidak beli buah di sini.)",
"Ibu-ibu: Tukang rotinya ke mana, ya?",
"Penjual buah: Silakan dibeli, Kak. Buahnya baru datang.", //20
nama + ": Maaf, tidak dulu, Bu.",
"Penjual sembako: Cari apa, Kak?",
nama + ": Oh, tidak cari apa-apa, Bu.",
nama + ": Permisi, jalan ke menara lewat mana, ya?",
"Pemuda: Oh, kamu harus memutar jalan dari awal.", //25
"Hore, tangan tercuci!", //26
"Kakek: Halo, " +nama+ " Seingat Kakek, ibumu menitipkan bekal untuk Kakek.",
nama + ": Iya, Kek!",
nama + ": Ini bekal dari Ibu untuk Kakek.",
"Kakek: Oh, terima kasih.", //30
"Kakek: Bisa tolong belikan satu botol sabun cair dan tomat untuk Nenek?", //31
nama + ": Tentu saja, Kek.",
"Kakek: Terima kasih. Ini uangnya.",
"Kakek: Ingat selalu jaga jarak, ya!",
"Penjual buah: Mari, Kak. Silakan dipilih buahnya. Buahnya masih segar.", //35
nama + ": Ada tomat, Bu?", //36
"Penjual buah: Ada, Kak. Yang ini baru datang.",
nama + ": Baik, Bu. Sebungkus ini berapa harganya?",
"Penjual buah: Rp10.000 saja.",
nama + ": Baik, ini uangnya, Bu.", //40
"Penjual buah: Terima kasih, Kak.", //41
"Penjual sembako: Mau cari apa, Kak?",
nama + ": Sabun cair ada, Bu?",
"Penjual sembako: Ada. Rp10.000 harganya.",
nama + ": Oke, ini uangnya.", //45
"Sabun cair terbeli", //46
"Penjual sembako: Terima kasih.", 
"Tetangga: Oh, kamu sudah besar, ya. " + nama,
"Nenek: Halo, " + nama +". Apa ada titipan dari kakekmu?",
nama + ": Saya ke tempat Kakek dulu, Nek.", //50
"Hore, tangan tercuci!", //51
nama + ": Ini sabun dan tomat dari pasar titipan Kakek.", //52
"Nenek: Terima kasih. " +nama + ". Tolong dicuci dulu, ya.",
"Tomat sudah tercuci",
nama + ": Sudah saya cuci, Nek.", //55
"Nenek: Terima kasih. Ayo, masuk dulu. Kita minum teh di dalam.",
nama + ": Baik, Kek.",
"Tomat sudah terbeli",
"Hore, level 2 selesai.",
nama + ": (Aku pakai cairan pembersih dulu).",
]
var txt3Indo = [
    "Supir bus: Terima kasih sudah menggunakan jasa kami. Silakan cek suhu tubuh di sana sebelum memasuki kota.",
"Pemudi: Kalau suhu kamu di atas 37,5 derajat Celsius, kamu tidak boleh masuk kota ya.", //1
"Pemudi: Duh, lama sekali sih.",
"Pemuda: Berapa suhu saya, Mbak?",
"Pemeriksa suhu: 36,8 derajat Celsius. Silakan masuk.",
"Pemeriksa suhu: Saya cek suhunya sebentar ya, Kak.", //5
"Pemeriksa suhu: 36,2 derajat. Silakan tunjukkan Kartu Kewaspadaan Kesehatan di sana", //6
"Pemeriksa suhu: Kak, cek suhu dulu di sini!",
"Pemeriksa KKK: Boleh lihat Kartu Kewaspadaan Kesehatannya, Kak?",
nama + ": Ini, Pak.",
"Pemeriksa KKK: Baik, hasil tes non-reaktif. Silakan masuk kota.", //10
 "Pemeriksa KKK: Kak, tunjukkan Kartu Kewaspadaan Kesehatan dulu di sini!", //11
"Pembeli: Bu, jadi berapa total jagung dan tomatnya?",
"Penjual sayur: Totalnya Rp25.000, Bu.",
"Penjual sayur: Cari apa, Kak?",
nama + ": (Wah, ibu ini tidak pakai masker. Aku tidak belanja sama dia deh).", //15
 nama + ": Nggak, Bu.", //16
"Ibu-ibu: Hmmm, penjual sayur yang biasa di sini ke mana, ya?",
"Bapak-bapak: Wah, kunci gudang aku taruh di mana, ya?",
"Penjaga pabrik: Aku harus tetap bekerja keras meskipun masih pandemi.",
"Ibu-ibu: Duh, mana jemputannya, ya?", //20
"Tukang parkir: Wah, ini yang parkir bus ke mana, ya? Kok parkir sembarangan.", //21
nama + ": Mohon tanya, ini tempat apa? Kenapa dijaga?",
"Perawat: Oh, ini rumah karantina pasien Covid-19.",
"Perawat: Jaga kesehatan ya, Kak. Jangan sampai kamu masuk ke sini.",
"Dokter: Karena pasien Covid-19 sudah semakin banyak, kapasitas di rumah sakit pun semakin terbatas.", //25
"Dokter: Kalau kamu demam, batuk kering, atau pilek, segeralah periksa ke rumah sakit, ya.", //26
"Pengusaha: Di masa pandemi ini, banyak pengusaha yang bisnisnya terdampak.",
"Pemudi: Saat pandemi, hindari kumpul-kumpul dengan orang-orang.",
"Satgas Covid: Di sini ada sekeluarga yang sedang isolasi mandiri karena Covid-19.",
"Pegawai: Saat pandemi begini banyak orang yang kehilangan pekerjaan.", //30
"Anak-anak: Aku harus rajin berolahraga.", //31
"Nenek-nenek: Nak, apakah kamu melihat suamiku?",
"Kakek-kakek: Nak, apakah kamu melihat istriku?",
"Nenek-nenek: Saat menyeberang jalan, kamu harus berhati-hati, ya.",
"Wartawan: Apa yang ingin Bapak sampaikan kepada masyarakat agar tidak tertular Covid?", //35
"Walikota: Tetaplah menjaga jarak aman, selalu pakai masker, dan tidak berkerumun.", //36
"Wartawan: Berapa denda bagi pelanggar protokol Covid-19, Pak?", 
"Walikota: Di wilayah kita Rp250.000.", 
"Petugas Covid: Waduh, jumlah korban bertambah terus setiap harinya.",
"Petugas Covid: Ada urusan apa, Kak? Mau nyekar, ya?", //40
nama + ": Saya kesasar, Pak.", //41
"Petugas Covid: Ini kuburan korban Covid-19.",
"Penjaga toko: Aduh, barangnya lama sekali sampainya.",
"Saudara: Hai! " + nama + " lama tidak jumpa!",
nama + ": Ya, lama tidak jumpa. Kok kamu di luar tidak pakai masker?", //45
"Saudara: Tenanglah, hanya di depan rumah saja kok! Oh ya, adikku sudah menunggumu.", //46
"Saudara: Hey, kamu sudah tiba! Kenapa lama sekali? Aku baru mau belikan kamu makan.",
nama + ": Iya, sebelum ke terminal bis aku rapid dulu. Jadi tadi ketinggalan bus pertama.",
"Saudara: Buat apa rapid? Aku juga sering kok tidak pakai masker kalau pergi-pergi.",
nama + ": Jangan anggap remeh! Semakin hari semakin banyak yang tertular tahu!", //50
nama + ": Kalau kamu tidak mau pakai masker, biar aku saja yang beli makan. Nanti aku kembali lagi.", //51
nama + ": (Hmmm, nanti aku beli masker untuk mereka).",
"Saudara: Oh, terima kasih. Tolong sekalian belikan roti di Pasar Baru.",
"Penjual barang: Ya, silakan dipilih barangnya, Kak.",
nama + ": (Hmmm, barang yang ingin kubeli tidak ada di sini).", //55
"Ibu-ibu: Hmmm, beli apa, ya?", //56
"Penjual: Cari masker ya, Kak? Toko di sebelah toko saudaraku di Pasar Lama jual masker.",
"Pembeli: Bu, jadi berapa harga semua sayur, daging, dan ikannya?",
"Penjual: Rp45.000, Bu.",
"Penjual Ikan dan sayur: Silakan dipilih, Kak ikan dan sayurnya.", //60
"Penjual Ikan dan sayur: Silakan dipilih, Kak sayur dan ikannya.", //61
nama + ": Berapa harga sekilo ikan, Bu?",
"Penjual Ikan: Rp35.000.",
nama + ": Baik, beli sekilo ya, Bu. Ini uangnya.",
"Penjual Ikan: Terima kasih. Ini belanjaannya.", //65
"Ibu-ibu: Penjual roti yang biasa di sana ke mana, ya?", //66
"Penjual daging: Cari apa, Kak?",
nama + ": (Wah, bapak itu tidak pakai masker. Aku tidak belanja sama dia deh).", 
nama + ": Tidak, Pak.", 
"Pembeli: Pak, harga buahnya jadi berapa semuanya?", //70
"Penjual buah: Jadi total Rp50.000, Bu.", //71
"Penjual buah: Silakan dibeli, Kak. Buahnya segar loh.",
"Ibu-ibu: Tukang roti di sana, pindah ke Pasar Lama, Kak.",
"Ikan terbeli!",
"Pedagang kaki-lima: Pasar? Oh, cukup jalan lurus dari sini saja, Kak.", //75
"Penjual: Masker? Oh, bisa beli di toko sebelah, Kak!", //76
"Petugas: Saya akan menegur bapak yang tidak memakai masker itu.",
"Ibu-ibu: Bu, sudah dengar? Katanya satu keluarga besar di pusat kota yang diisolasi di rumah loh!",
"Ibu-ibu: Iya, Bu. Jumlah orang yang terpapar Covid-19 bertambah terus.",
"Pembeli: Berapa harga dua masker ini, Bu?", //80
"Penjual baju: Rp20.000, Bu.", //81
"Penjual roti: Silakan dibeli rotinya, Kak.",
"Penjual roti: Silakan dibeli, Kak. Rotinya masih hangat.",
nama + ": Tiga bungkus roti ini berapa, Pak?",
"Penjual Roti: Rp30.000, Kak.", //85
nama + ": Baik, ini uangnya, Pak.", //86
"Penjual Roti: Terima kasih. Ini rotinya.", 
"Roti terbeli!",
"Penjual baju: Cari apa, Kak?",
"Penjual baju: Cari apa, Kak? Maskernya bagus-bagus loh.", //90
nama + ": Berapa harga empat masker, Bu?", //91
"Penjual baju: Rp40.000, Kak.", 
nama + ": Baik, saya beli empat masker, Bu. Ini uangnya.", 
"Penjual baju: Terima kasih. Ini maskernya.", 
"Masker terbeli!", //95
nama + ": Ada apa ini?", //96
"Petugas Covid: Temanmu ini saya bawa untuk isolasi karena hasil tesnya positif Covid.",
nama + ": Wah, saya baru ketemu dia tadi.",
"Petugas Covid: Kalau begitu kamu harus dites juga. Alat tesnya ada di teman saya.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Kamu harus isolasi mandiri selama 14 hari. Sampai jumpa!",
"Permainan berakhir. Terima kasih sudah memainkan permainan ini.",  
"Kiri kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanan kota:" + "<br>" + "<ul>" +"<li> Tempat pemakaman </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lama </li>"+ "</ul>", //104
"Permainan berakhir. Anda tertabrak mobil.",

]

// english
var indexTextEng = [
    "New Game",
    "Continue",
    "Profile",
    "Credits",
    "Gender",
    "Choose your Gender",
    "Male",
    "Female",
    "Change Language",
    "Name",
    "Enter your name",
    "Back to Main Menu",
]
var onloadTextEng = [
    // level 1
    "Welcome to Surviving Covid Labyrinth. In this game, you go on an adventure during the Covid-19 pandemic." + "<br>" + "IN your adventure, you have to keep safe distance, wash hands with soap, use hand sanitizer, wear a mask, and avoid crowds.", //0
    "On top right corner of the screen, there is a healthbar. If the healthbar turns zero the game is over and you have to start from the beginning of the level.", //1
    "You will finish your adventure in Level 1 if you can safely return to your home at the end of the forest." + "<br>" + "Before you start your adventure, don't forget to say good-bye to your best friend." + "<br>"+ "Happy Adventure!", //2
    // level 2
    "Welcome back! You will continue your adventure in this second level . Your adventure begins with a conversation with your mother.", //3
    "Do not forget that you still have to follow the health protocols because we are still in the Covid-19 pandemic. Good luck with your adventure in level 2!",//4
    // level 3
    "Congratulations! You have reached the final level of your adventure. In this level, you have just arrived to a city to visit your relatives." + "<br>" + "Be careful when crossing the road. Make sure you follow the health protocols, keep a safe distance from others, wear a mask, and avoid crowds.", //5
    "Before entering the city, you have to check your temperature and show your health alert card. Happy adventure!", //6
    "Shopping list:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Bread </li>" + "<li> Masks </li>"+ "</ul>", //7
    // system
    "Game over. You were hit by a car.",
    "Game over. You ran out of heath.",
]
var txt1Eng = [
    "Friend: Hey, where are you going? Come here!", //0
    "Friend: Hey, don't forget to wash your hands with soap!", //1
    "Friend: By washing your hands, it ensure that your hands are clean and free from viruses.",
    "Friend: You can wash your hands in front of my house.",
    "Hurray, your hands are washed!",
    "Young man: *hack* I'm sorry if my tent is in your way, but you can go through that way.", //5
    "Gatekeeper: Young man, why aren't you wearing a mask? This mask is for you.", //6
    "Mask obtained",
    "Gatekeeper: Great, you have the mask on. Please pass.",
    nama + ": Thank you!" ,
    "Gatekeeper: Do not forget to always keep a safe distance!", //10
    "*Hack* Have you seen my grandchild? He didn't wear a mask when he left our house.", //11
    nama + ": Oh, I saw him in the forest.", 
    "Nenek: Could you please give this mask to him??", 
    nama + ": Of course.", 
    nama + ": This mask is from your grandmother. Wear it!", //15
    "Okay, thank you!", // 16
    "Mother: Honey, you're finally back. Can you buy a bottle of hand soap?", 
    nama + ": Where should I buy it?", 
    "Ibu: At Bu Ani's stall.", 
    "Yani: What are you looking for?", //20
    nama + ": I want to buy a bottle of handsoap.", //21
    "Yani: Oh, just go in!", 
    "Ani: Welcome! What would you like to buy?", 
    nama + ": Do you sell handsoap?", 
    "Ani: Of course. Here it is!", //25
    "Hand soap obtained!", //26
    "Mother: Thank you, Honey. Do not forget to wash your hands before entering the house!",
    "Hands have been washed!",
    "Hurray, you have finished level 1!",
    nama + ": Here is the soap, Mom.", //30
]
var txt2Eng = [
    "Mom: Can you deliver this lunchbox to your grandfather?", //0
nama + ": Okay, Mom.", //1
"Be careful!",
"Neighbor: Hi, " + nama + " I heard Mrs. Joko contracted Covid.",
"Kid: Hosh...hosh...I gotta go home in ten minutes.",
"Kid: Atchoo...Atchoo...", //5
nama + ": What happened to your child, Ma'am?", //6
"Lady: He coughs, has a runny nose and a fever. So, we are taking a rapid test.", 
nama + ": Oh. I hope it is not Covid.", 
"Ibu-ibu: Thank you!",
"Old man: Hack, Hack", //10
nama + ": (Ugh, I have to keep my distance from him)", //11
nama + ": (Oh, I have to send this food to my grandfather soon.)",
"Nurse: If you want to see a doctor, here is the queue number.",
nama + ": I'm sorry, I don't need to see a doctor. Thank you!",
"Lady: Please keep the distance!", //15
"Fruit seller: What are you buying?",
nama + ": No, Sir. Thank you!",
nama + ": (This man isn't wearing a mask. I won't buy fruit from him.)",
"Lady: Where did the baker go?",
"Fruit seller: Come and buy the fruits. They have just arrived.", //20
nama + ": I'm sorry, not buying, Ma'am.",
"Grocery seller: What are you buying?",
nama + ": Oh, nothing, Ma'am.",
nama + ": Excuse me. How can I go to the tower?",
"Young man: Oh, you need to turn from the beginning of this rout.", //25
"Hurray, hands are washed!", //26
"Grandfather: Hello, " +nama+ " if I'm not mistaken, your mom asked you to deliver a lunch box for me.",
nama + ": Yes, Grandpa!",
nama + ": This lunch box is from Mom, grandpa.",
"Grandfather: Oh, thank you!", //30
"Grandfather: Could you please buy a bottle of liquid soap and tomatoes for Grandma?", //31
nama + ": Of course, Grandpa.",
"Grandfather: Thank you! Here is the money.",
"Grandfather: Do not forget to always keep a safe distance!",
"Fruit seller: Come on. Choose the fruits. The fruits are still fresh.", //35
nama + ": Do you sell tomotoes, Ma'am?", //36
"Fruit seller: Yes. They have just arrived.",
nama + ": Okay, Ma'am. How much does each package cost?",
"Fruit seller: only Rp10.000.",
nama + ": Okay, here is the money, Ma'am.", //40
"Fruit seller: Thank you!", //41
"Grocery seller: What are you looking for?",
nama + ": Do you sell liquid soap, Ma'am?",
"Groceries seller: Yes. Rp10.000 each.",
nama + ": Okay, here is the money.", //45
"Liquid soap bought", //46
"Grocery seller: Thank you!", 
"Neighbor: Oh, you've already grown up. " + nama,
"Grandmother: Hello, " + nama +". Did your grandfather ask you to bring something for me?",
nama + ": I will go to Grandpa's place first.", //50
"Hurray, hands are washed!", //51
nama + ": Here are the soap and tomatoes from the market that Grandpa asked me to deliver it to you.", //52
"Grandmother: Thank you, " +nama + "! Please wash them first!",
"Tomatoes are washed",
nama + ": I have washed them, Grandma.", //55
"Grandmother: Thank you! Come on in. Let us have a tea.",
nama + ": Okay, Grandpa.",
"Tomatoes obtained!",
"Yay, you have finished level 2.",
nama + ": (I'll use some hand sanitizer first).",
]
var txt3Eng = [
    "Bus driver: Thank you for using our service. Please check your temperature before entering the city.",
"Young lady: If your temperature is over 37.5 degrees Celcius, you are not allowed to enter the city.", //1
"Young lady: Ugh, it is taking so long.",
"Young man: What's my temperature?",
"Temperature checker: 36.8 degree Celcius. Please go in",
"Temperature checker: Excuse me. Let me take your temperature.", //5
"Temperature checker: 36.2 degree Celcius. Please show your Health Alert Card over there", //6
"Temperature checker: Hello, check your temperature here!",
"HAC checker: Can I see your Health Alert Card?",
 nama + ": Here it is.",
"HAC chcker: Okay, the test result is non-reactive. Go ahead and enter the city.", //10
 "HAC checker: Excuse me. Please show your Health Alert Card here!", //11
"Buyer: Ma'am, how much do the corn and tomatoes cost?",
"Seller: Rp25.000.",
"Seller: What are you buying?",
name+ ": (Ugh, this lady is not wearing a mask. I'm not buying anything from her).", //15
 nama + ": No, thanks!", //16
"Lady: Umm, where did the seller who sold vegetables here go?",
"Man: Oh, where did I put the key to the warehouse?",
"Factory guard: I need to work hard, even during the pandemic.",
"Lady: Ugh, where is the pick up??", //20
"Parking attendant: Ugh, where did the bus driver go? He parked so carelessly.", //21
nama + ": Excuse me. What is this place? Why is it guarded??",
"Nurse: Oh, this is a quarantine home for Covid-19 patients.",
"Nurse: Stay healthy. I hope you don't need to stay here.",
"Doctor: There are more and more Covid-19 patients and the hospitals are getting full.", //25
"Doctor: If you have a fever, dry cough, a runny nose, go and have yourself checked at a hospital.", //26
"Businessman: In this pandemic, many business have been affected.",
"Young lady: In this pandemic, avoid getting together with others.",
"Covid officer: A family is self isolating here because of Covid-19.",
"Worker: Many people have lost their jobs during this pandemic.", //30
"Child: I need to exercise regularly", //31
"Old lady: Did you see my husband?",
"Old man: Did you see my wife?",
"Old lady: Be careful when you cross the street.",
"Reporter: What would you like to suggest to people so that they can avoid catching Covid?", //35
"Mayor: Keep a safe distance, always wear a mask, and do not be in a crowd.", //36
"Reporter: How much is the fine for those who break the Covid-19 protocols, Sir?", 
"Mayor: It's Rp250.000 in our area.", 
"Covid officer: My goodness, the number of patients keeps increasing every day.",
"Covid officer: What are you doing here? Are you visiting your relative's grave?", //40
nama + ": I got lost, Sir.", //41
"Covid Officer: This is a cemetary for those who died of Covid-19.",
"Shopkeeper: Ugh, it's taking so long for package to arrive.",
"Relative: Hey!" + nama + " We haven't met for long!",
nama + ": Yeah, it has been a while. Why aren't you wearing a mask while outside?", //45
"Relative: Take it easy. I'm just walking in front my house. Oh, yeah, my younger brother has been waiting for you.", //46
"Relative: Hey, you are here! Why did it take you so long? I was just about to get you food.",
nama + ": Yeah, before going to the bus station, I took a rapid test. So, I missed the first bus.",
"Relative: What is the rapid test for? I often go out without a mask on.",
nama + ": Do not underestimate the disease. More and more people have been infected!", //50
nama + ": If you don't want to wear a mask, let me go and get the food. I'll be back.", //51
nama + ": (Umm, I'll also get a mask for them.).",
"Relative: Oh, thank you! Please get me some bread at Pasar Baru.",
"Seller: Come and buy here.",
nama + ": (Umm, I don't see what I need here).", //55
"Lady: Umm, what should I buy?", //56
"Seller: Are you looking for mask seller? The store next to my relative's at Pasar Lama sells masks.",
"Buyer: How much do the vegetables, meat, and fish cost altogether?",
"Seller: Rp45.000.",
"Fish seller: Come, choose the fish and vegetables you need.", //60
"Fish seller: Come, choose the fish and vegetables you need.", //61
nama + ": How much is a kilogram of fish, Ma'am?",
"Fish seller: Rp35.000.",
nama + ": Okay, I'll get a kilo. Here is the money.",
"Fish seller: Thank you! Here is the fish.", //65
"Lady: Where did the baker go?", //66
"Butcher: What are you looking for?",
nama + ": (Oh, that man isn't wearing a mask. I'm not going to buy anything from him.).", 
nama + ": No, thank you!", 
"Buyer: How much do all the fruits cost?", //70
"Fruit seller: The total is Rp50.000.", //71
"Fruit seller: Come and choose the fruits. They are fresh.",
"Lady: The baker moved to Pasar Lama.",
"Fish obtained!",
"Street seller: Pasar Lama? Oh, just go straight ahead from this road.", //75
"Seller: Masks? You can buy them at the store next door", //76
"Officer: I will reprimand the man for not wearing a mask.",
"Lady: Have you heard about this? A big family in centre of the city is being isolated at home.",
"Lady: Yes. The number of people contracted to Covid-19 keeps increasing.",
"Buyer: How much do these two masks cost?", //80
"Clothes seller: Rp20.000.", //81
"Bread seller: Go ahead and get the bread.",
"Bread seller: Go ahead and get the bread. They are still warm.",
nama + ": How much do these packages of bread cost?",
"Bread seller: Rp30.000.", //85
nama + ": Okay, here is the money.", //86
"Bread seller: Thank you! Here is the bread.", 
"Bread obtained!",
"Clothes seller: What are you looking for?",
"Clothes seller: What are you looking for? The masks are good ones.", //90
nama + ": How much do four masks cost?", //91
"Clothes seller: Rp40.000.", 
nama + ": Okay. I'll get them. Here is the money.", 
"Clothes seller: Thank you! Here are the masks.", 
"Masks obtained!", //95
nama + ": What is going on?", //96
"Covid officer: I need to take and isolate your friend. His test shows he is Covid-19 positive.",
nama + ": Oh, no! I have just met him.",
"Covid officer: You will also need a test. MY friend has the kit",
"Test result: Non-reactive!", //100
"Covid ofifcer: You need to isolate yourself for 14 days. Bye-bye!",
"Game over. Thank you for playing this game!",  
"West part of the city:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Hospital </li>" + "<li> Apartment </li>"+ "</ul>", //103    
"Eastern part of the city:" + "<br>" + "<ul>" +"<li> Cemetary </li>" +"<li> Mayor Office </li>" + "<li> Pasar lama </li>"+ "</ul>", //104
"Game over. You were hit by a car.",

]

// chinese
var indexTextChinese = [
"开始",
"继续",
"选项",
"游戏制作对",
"性别",
"性别选择",
"男人",
"女人",
"语言",
"名字",
"名字",
"回到主选单",
]
var onloadTextChinese = [
    // level 1
    "欢迎！在此Surviving Covid Labyrinth游戏中,你在冠状病毒疫情期间。" + "<br>" + "在冒险中,你要保持身体距离,用肥皂洗手,使用免洗洗手液,戴口罩,和避免人群。", // 0
    "在屏幕的右上方,有你的生命值。生命值用完之后,游戏就结束了,然后你应该从那级别的开头重新开始。",// 1
    "如果会安全地回到您森林尽头的屋子,这第一级别的冒险之旅就结束了。" +" <br>" +"此外,去冒险之前,别忘记向您的朋友告别." + "祝你一路顺风",// 2
    // level 2
    "恭喜你过了第一级别！在这第二级别,你再继续去冒险。去冒险之前,别忘记跟你母亲告别。",// 3
    "别忘记你仍然要遵守健康协议,因为你还在冠状病毒疫情期间。祝你在在这第二级别冒险之旅顺风！", // 4
    // level 3
    "恭喜！您冒险已经达到的最终级别。在此级别中,您刚刚到达一个城市拜访你亲戚。" +"<br>" + "过马路时要小心。你要遵守健康协议,比方说跟别人保持身体距离,戴口罩并避免人群。",// 5
    "进入城市之前,你要检查体温度和出示‘健康单’。祝您一路顺风！",// 6
    "购物清单："+ "<br>" + "<ul>" +"<li> 鱼 </li>" +"<li> 面包 </li>" + "<li> 口罩 </li>"+ "</ul>", //7
    // system
    "游戏结束。你被车撞死了！",
    "游戏结束。生命值用完了！",

]
var txt1Chinese = [
    "同志：嘿,你要去哪里？先来这里。",
"同志：你不要忘记用肥皂洗手。",
"同志：洗手即会确保你的手清洁又清除手上的冠状病毒。",
"同志：你可以在我家院前洗手。",
"手洗清洁了！",
"同志：*咳* 对不起,我的帐篷挡住了这条路,但你可以通过那条路吧。", //5
"门警：同志,你为什么没戴口罩呀？这块口罩给你吧。", //6
"口罩收到了",
"门警：好,有了口罩你可以通过么吧。",
nama + ": 谢谢！",
"门警：别忘记保持身体距离！", //10
"*咳* 你有看到我的孙子吗？他出门时没有戴口罩。",//11
nama + ":哦,我有看见他在森林里走走。",
"老婆婆：你可以替我把这块口罩送给他吗？",
nama + "：当然啦。",
nama + "：你婆婆叫你戴这块口罩呀。",//15
"好,多谢！",//16
"妈妈：哇,你回来了。你可以替我买免洗洗手液吗？",
nama + "：在哪里买啊？",
"妈妈：在安妮阿姨的店。",
"雅尼：欢迎,要找什么呀？",
nama + "：我要买一瓶洗水液。",//21
"雅尼：哦,进来吧！",
"安妮：欢迎！要买什么？",
nama + ":你有没有免洗洗水液？",
"安妮：当然有啊！",//25
"免洗洗手液买到了！",//26
"妈妈：谢谢。进到家里之前,别忘记吸收啊！",
"手洗清洁了！",
"恭喜你,第一级别完成了！",
nama + ":妈,我买了洗手液。",//30

]
var txt2Chinese = [
    "妈妈：你可以替我送这盒饭给你公公吗？",//0
nama + "：好啊。",//1
"小心！",
"林阿姨：嗨,"+nama+"听说梁阿姨生了冠状病。",
"小孩子：*喘气*过了十分钟我应该回家。",
"小孩子：啊涕,啊涕。",//5
nama + ":阿姨,你孩儿生什么病啊？",//6
"阿姨：他常常咳嗽、流鼻涕也有点感冒。因此,我们要去检查。",
nama + "：哦,希望不是冠状病啊。",
"阿姨：谢谢！",
"老伯伯：*咳*,*咳*.",//10
nama+ "：（唉,我应该保持身体距离）",//11
nama+":（唉,我应该快快地把这盒饭送给公公。）",
"护士：你要去检查吗？我先那登记号吧。",
nama+":对不起,我没有去检查。谢谢！",
"阿姨：嘿,保持身体距离啊！",//15
"果贩：要找什么呀？",
nama+":没有啊,老伯伯。谢谢！",
nama+"：（这老伯伯没有戴口罩。我不跟他买吧。）",
"阿姨：卖面包的人哪里去了呀？",
"果贩：来,来,来。这些水果是还很新鲜。",//20
nama+"：对不起,没有找水果啊,阿姨。",
"小贩：大哥,找什么呀？",
nama+ "：先看看啊,阿姨。",
nama+ "：请问,塔楼在哪里呀？",
"同志：哦,你要转到从林前的路呀。",//25
"手洗清洁了！",//26
"公公：你好,"+nama+ "妈妈有没有叫你带盒饭给我吗？",
nama + "：有啊！",
nama+ "：这盒饭是妈妈给你的。",
"公公：哦,谢谢！",//30
"公公：你可以替婆婆买一瓶肥皂和一斤番茄吗？",//31
nama + "：好把。",
"公公：多谢！钱我拿给你把。",
"公公：别忘记保持身体距离呀！",
"果贩：来,来,来。这些水果还很新鲜的。",//35
nama+ "：阿姨,有番茄吗？",//36
"果贩：有啊。刚刚来的。",
nama+ "：一斤番茄多少钱？",
"果贩：一万盾。",
nama+ "：好,买一斤吧。",//40
"果贩：谢谢！",//41
"小贩：欢迎,要买什么？",
nama+ "：有卖肥皂吗？",
"小贩：有啊。一万盾一瓶。",
nama+ "：好,买一瓶吧。",//45
"肥皂买到了",//46
"小贩：谢谢！",
"邻居：噢,你长大了。",
"婆婆：你好,"+nama+ "。公公有叫你买东西吗？",
nama+ "：我先去找公公把。",//50
"手洗清洁了！",//51
nama+ "：这个是公公叫我买给你的番茄和肥皂。",//52
"婆婆：谢谢！"+nama+ "。嫌隙它好吗！",
"番茄洗清洁了",
nama + "：洗好了呀。",//55
"婆婆：谢谢！进来喝茶吧。",
nama + "：好啊。",
"番茄买到了!",
"恭喜你,第二级别完成了！",
nama+ "：（我先用免洗洗手液洗手吧）。",


]
var txt3Chinese = [
    "巴士司机：感谢您使用我们的服务。 进入城们以前,请您先检查体温。",
"小姐：如果你的体温37.5°以上,你就不可以进城。",//1
"小姐：唉,等得太久了。",
"同志：我的体温有多高？",
"护士：36.8°。请继续。",
"护士：先查体温啊。",//5
"护士：36.2°。请在那儿出示&lsquo健康单&rsquo。",//6
"护士：喂,先检查体温啊！",
"检查员：请拿出'健康单'！",//11
nama+ "：好。",
"检查员：好,你没有生冠状病！请进城。",//10
"检查员：喂,先出示你的'健康单'呀！",//11
"阿姨：一斤玉蜀黍和一斤番茄总共多少钱？",
"菜贩：两万五盾。",
"菜饭：要买什么？",
nama+ "：（唉,这个阿姨没有戴口罩。不跟他买吧）。",//15
nama + "：不买啊,多谢！",//16
"阿姨：唉,卖菜的人哪里去了？",
"叔叔：锁匙我放在哪儿呀？",
"工人：虽然疫情正在发生时,我也要努力做工。",
"阿姨：唉,他们什么时候接我呢？",//20
"同志：这辆巴士的司机哪里去了？车为啥要乱放呢？",//21
nama+ "：请问,这是什么地方？为什么不可以进去？",
"护士：冠状病患者的隔离房啊。",
"护士：你要讲卫生。千万不要进入隔离房。",
"医生：冠状病患者每天越来越多,连医院都不能再收病人了。",//25
"医生：如果你有发烧,干咳,流鼻涕,要快快地去医院检查。",//26
"商人：在这冠状病疫情期间,很多国家的经济都衰退到落花流水啊。",
"小姐：在这冠状病疫情期间,要保持身体距离啊。",
"官员：这一家正在自我隔离。",
"工人：由于发生这种疫情,很多工人被解雇了呀。",//30
"小孩子：我要天天运动。",//31
"老公公：你有看见我老公吗？",
"老婆婆：你有看见我老婆吗？",
"老婆婆：过马路时要小心。",
"记者：马总督请问,我们怎么样能控制冠状病毒的传播？",//35
"马总督：要保持身体距离,戴口罩,和避免人群。",//36
"记者：马先生,不照健康协议的人,要付多少款？",
"马总督：在我们的区域中,应该付二十五万款。",
"医生：我的天呀,冠状病患者每天越来越多。",
"医生：你来这里来扫墓吗？",//40
nama+ "：我失路呀,先生。",//41
"医生：这是冠状病患者的墓地。",
"小贩：唉,东西送的太久了。",
"表兄：嘿！"+nama+ "好久不见！",
nama+ "：好久不见。你为什么出门没有戴口罩呢？",//45
"表兄：放心吧。我单单在我家前走走。我弟弟等你很久了。",//46
"表弟：你终于来了！为什么来得这样久呢？我刚刚要给你买食物。",
nama + "：对不起,去巴士站之前,我先去医生检查。因而,我太迟坐巴士。",
"标的：为什么要检查呢？我常常没有戴口罩出门。",
nama+ "：别看小这种病呀。由于这冠状病毒,每天去世的人越来越多！",//50
nama+ "：要是你不要戴口罩,我来给你买食物吧。等下我会到回来。",//51
nama+ "：（嗯,我应该给他们买口罩）。",
"表弟：多谢！请你在新巴杀替我买两块面包吧。",
"小贩：来,来,来,找什么呀？",
nama+ "：（嗯,看起来他没有卖食物。）",//55
"阿姨：嗯,我还要买什么呢？",//56
"小贩：你要找口罩吗？在旧巴沙,我姐姐店的隔壁有卖口罩。",
"阿姨：青菜,牛肉,和一条鱼总共多少钱？",
"小贩：四万五盾。",
"鱼贩：来,来,来,我的青菜和鱼都还很新鲜。",//60
"鱼贩：来,来,来,我的青菜和鱼都还很新鲜。",//61
nama + "：阿姨,这条鱼一斤多少钱呢？",
"鱼贩：三万五盾。",
nama+ "：好,我买一斤吧。",
"鱼贩：谢谢。",//65
"小姐：在这儿卖面包的贩子哪里去了呢？",//66
"肉贩：要什么呀？",
nama+ "：（他没有戴口罩,我不跟他买吧。）",
nama+ "：没有啊,谢谢。",
"阿姨：这些水果总共多少钱？",//70
"果贩：五万盾。",//71
"果贩：来, 来, 来。水果都还很新鲜。",
"小姐：卖面包的贩子已经搬到旧巴沙。",
"鱼买到了！",
"小贩：旧巴沙？沿着这条路向前走吧。",//75
"小贩：口罩？你可以在本店隔壁买口罩。",//76
"警察：我要劝导那个没戴口罩的贩子。",
"阿姨：你听到了吗？城市中有一家人正在自我隔离。",
"阿姨：听到了。生冠状病的病人每天越来越多。",//80
"小姐：这两块口罩一共多着钱？",//80
"布贩：两万盾。",//81
"面包贩：来, 来, 来。面包都很好吃啊。",
"面包贩：来, 来, 来。面包都很好吃啊。",
nama+ "：这一包面包多少钱？",
"面包贩：三万盾。",//85
nama+ "：好,买一包吧。",//86
"面包贩：谢谢！",
"面包买到了！",
"布贩：要找什么？这些口罩都很好看。",
"布贩：要找什么？这些口罩都很好看。",
nama+ "：四块口罩多少钱？",//91
"布贩：四万盾。",
nama+ "：好,买四块吧。",
"布贩：谢谢！",
"口罩买到了！",//95
nama+ "：发生什么事呀？",//96
"医生：我们要带你的朋友到隔离房。检查后,原来他们有生冠状病。",
nama+ "：哎呀！我才见到他们。",
"医生：那你应该去检查。黄医生请检查他一下。",
"黄医生：（检查后）哦,他没有生冠状病！",//100
"医生：同志,你要十四天自我隔离。千万不要出门。再见！",
"第三级别完成了！",
"西边:" + "<br>" + "<ul>" +"<li> 新巴杀 </li>" +"<li> 医院 </li>" + "<li> 公寓 </li>"+ "</ul>", //103    
"东边:" + "<br>" + "<ul>" +"<li> 墓地区 </li>" +"<li> 办公室 </li>" + "<li> 旧巴沙 </li>"+ "</ul>", //104
"游戏结束。你被车撞死了！",

]

// italian
var indexTextItalian = [
    "Ricomincia",
    "Riprendi il gioco",
    "Profilo",
    "Credit",
    "Sesso",
    "Scegli il tuo sesso",
    "Maschio",
    "Femmina",
    "Cambia lingua",
    "Nome",
    "Inserisci il tuo nome",
    "Torna al Menu principale",
]
var onloadTextItalian = [
    // level 1
    "Benvenuto nel  gioco Surviving Covid Labyrinth. In questo gioco stai per avventurarti nella situazione della pandemia  Covid-19." + "<br>" + "Durante questa avventura dovrai seguire le regole del protocollo sanitario come rispettare il distanziamento sociale, lavarsi le mani col sapone utilizzando i dispenser di igienizzante per le mani, utilizzare la mascherina ed evitare assembramenti.", //0
    "In alto a destra dello schermo trovi l'indicatore del livello di salute. Se dovesse finire il gioco teminerà e dovrai ricominciare il livello daccapo.", //1
    "La tua avventura nel primo livello sarà completa se riuscirai a tornare sano e salvo a casa tua nel cuore della foresta." + "<br>" + "Prima di partire faresti meglio a salutare i tuoi amici più cari." + "<br>"+ "Buona avventura!", //2
    // level 2
    "Bentornato. In questo livello continuerai la tua avventura. L'avventura inizierà con una conversaziona con tua madre", //3
    "Non dimentirare di seguire il protocollo sanitario, la pandemia da Covid-19 non è ancora passata. Buona continuazione di avventura nel livello 2.",//4
    // level 3
    "Salve, ben arrivato all'ultimo livello della tua avventura. In questo livello sei appena arrivato in città per far visita a un tuo parente" + "<br>" + "Fai attenzione quando attraversi la strada. Attieniti al protocollo sanitario, soprattutto rispetta il distanziamento sociale, indossa sempre la mascherina ed evita gli assembramenti.", //5
    "Prima di poter entrare in città devi controllare la tua temperatura e mostrare la tua tessera sanitaria. Buona avventura!", //6
    "Lista della spesa:" + "<br>" + "<ul>" +"<li> Pesce </li>" +"<li> Pane in cassetta </li>" + "<li> Mascherine </li>"+ "</ul>", //7
    // system
    "Partita finita. Sei stato investito da un'auto",
    "Partita finita! L'Indicatore del livello di salute è a zero. ",

]
var txt1Italian = [
    "Amico: Ciao, dove stai andando? Vieni un attimo qui!", //0
    "Amico: Ciao, non dimenticare di lavarti le col sapone, mi raccomando!", //1
    "Amico: Lavantodi le mani ti assicurerai che siano pulite e al lisucro dal virus .",
    "Amico: Puoi lavarti le mani davanti casa mia.",
    "Urra! Le tue mani sono pulite!",
    "Ragazzo: *COFF* Mi dispiace, la mia tenda ti impedisce il passaggio. Però, puoi passare da quel lato .", //5
    "Guardiano del cancello: Perché non hai la mascherina? Ecco, perndi questa.", //6
    "Mascherina presa",
    "Guardiano del cancello: Bene, adesso che hai a mascherina puoi passare!.",
    nama + ": Grazie!" ,
    "Mi raccomando, ricordati di rispettare sempre il distanziamento sociale", //10
    "*COFF* Hai visto mio nipote? Non aveva la maschera quando è uscito.", //11
    nama + ": Ah si, l'ho visto nella foresta.", 
    "Nonna:: Potresti portargli questa mascherina?", 
    nama + ": Certo.", 
    nama + ": Questa mascherina te la manda tua nonna. Indossala subito!", //15
    "Ok, grazie!", // 16
    "Mamma: Tesoro, sei tornato. Per favore vai a comprare il sapone per le mani, va bene?", 
    nama + ": Dove lo compro, Mamma?", 
   "Mamma: Al negozio della signora Ani.", 
    "Yani: Cosa cerchi?", //20
    nama + ": Vorrei comprare il sapone per le mani.", //21
    "Yani: Va bene, allora entra forza.", 
    "Ani: Benvenuto, cosa vuoi compare?", 
    nama + ": Avete il sapone per le mani?", 
    "Ani: Ma certo. Ecco, prendi!", //25
    "Sapone per le mani ottenuto!", //26
    "Mamma: Grazie tesoro! Non dimenticare di lavarti le mani prima di entrare in casa, mi raccomando!",
    "Mani pulite!",
    "Urra, livello 1 terminato!",
    nama + ": Ecco il sapone, Mamma.", //30

]
var txt2Italian = [
    "Mamma: Puoi portare il pranzo al Nonno?", //0
nama + ": Va bene, Mamma.", //1
"Fai attenzione per strada, mi raccomando!",
"Vicino: Ciao, " + nama + " Ho sentito che la signora Joko di è presa il Covid.",
"Bambino: Anf...Anf...Devo tornare a casa tra dieci minuti.",
"Bambino: Etciù…Etciù...", //5
nama + ": Signora, cos'ha suo figlio?", //6
"Signora: Ha la tosse, il raffreddore e un po' di febbre, così siamo venuti a fare il test rapido.", 
nama + ": Speriamo bene che non sia il Covid, Signora.", 
"Signora: Grazie.",
"Nonno: COFF COFF", //10
nama + ": (Accidenti, qui si che devo stare attendo a mantenere distanziamento sociale )", //11
nama + ": (Accidenti, devo sbrigarmi a portare il pranzo al Nonno)",
"Infermiera: Se vuole essere visitato, ecco il numero per la fila",
nama + ": Oh no, non devo farmi curare. Grazie",
"Signora: Per favore rispetta il distanziamento sociale.", //15
"Fruttivendolo: Cosa le serve?",
nama + ": Niente, la ringrazio",
nama + ": (Questo signore non indassa la mascherina, non la compro la frutta qui.)",
"Signora: Dov'è finito il signore che vende il pane?",
"Fruttivendolo: Frutta! Qui solo frutta freschissiima.", //20
nama + ": No, grazie signora.",
"Venditore di spezie: Cosa le serve?",
nama + ": Non mi serve niente, Signora.",
nama + ": Scusi, qual è la strada per il faro?",
"Ragazzo: Beh… deve tornare indietro e rifare la strada al contrario", //25
"Urrà, le mani sono pulite!", //26
"Nonno: Ciao, " +nama+ " Se ricordo bene, mamma ti ha dato qualcosa per me.",
nama + ": Si, Nonno!",
nama + ": Questo è il pacchetto da parte di mamma per te.",
"Nonno: Oh, Garzie.", //30
"Nonno: Puoi comprare del sapone liquido e dei pomodori per il Nonno?", //31
nama + ": Certo, Nonno!",
"Nonno: Grazie. Ecco i soldi.",
"Nonno: Mi raccomando, rispetta sempre il distanziamento sociale!",
"Fruttivendolo: Venga venga. La frutta qui è ancora fresca.", //35
nama + ": Ha dei pomodori, Signora?", //36
"Penjual buah: Si. Questi sono appena arrivati.",
nama + ": Bene. Quanto costa un pacchetto?",
"Fruttivendola: Solo 10.000 rupie .",
nama + ": Va bene, ecco i soldi, Signora.", //40
"Fruttivendola: Grazie.", //41
"Negoziante: Cosa cerca?",
nama + ": Ha del sapone linquido, Signora?",
"Negoziante: Si. Costa 10.000 Rupie",
nama + ": Ok, ecco i soldi.", //45
"Sapone liquido acquistato ", //46
"Negoziante: Grazie.", 
"Vicino: Oh, ma come sei cresciuta " + nama,
"Nonna: Mamma ti ha dato qualcosa per il Nonno?",
nama + ": Nonna, devo andare a casa del Nonno.", //50
"Urrà, mai pulite!", //51
nama + ": Questi sono il sapone liquido e i pomodori presi al mercato per il Nonno.", //52
"Nonna: Grazie. " +nama + ". Lavali prima, va bene?.",
"I pomodori sono stati lavati",
nama + ": Li ho lavati, Nonna.", //55
"Nonna: Grazie. Forza, entra. Beviamo un tè in casa.",
nama + ": Va bene, Nonno.",
"Pomodori acquistati",
"Urrà, livello 2 completato.",
nama + ": (è meglio usare l'igenizzante per le mani prima di tutto).",


]
var txt3Italian = [
    "Autista dell'autobus: Grazie per aver scelto di viaggiare con noi. La prego di controllare la sua temperatura da quella parte prima di entrare in città",
"Ragazza: Come sai, se la tua temperatura corporea è superiore a 37,5 gradi Celsius non ti sarà permesso entrare in città. ", //1
"Ragazza: Uff, Ma quanto ci vuole ancora?",
"Ragazzo: Mi scusi, quant'è la mia temperatura?",
"Operatrice: 36,8 gradi Celsius. Prego, si accomodi.",
"Operatrice: Ci penso io, ci vorrà solo un momento", //5
"Operatrice: 36,2 gradi. Prego, mi mostri la sua Autocertificazione sanitaria", //6
"Operatrice: Mi scusi, deve prima farsi controllare la temperatura!",
"Operatore di controllo autocertificazione: per favore, posso vedere la sua Autocertificazione sanitaria?",
nama + ": Ecco a lei.",
"Operatore di controllo autocertificazione: Bene, risulta negativo al test. Può entrare in città.", //10
 "Operatore di controllo autocertificazione: Mi mostri la sua Autocertificazione sanitaria!", //11
"Cliente: Signora, quanto le devo per il mais e i pomodori?",
"Fruttivendola: Viene 25.000 Rupie, Signora.",
"Fruttivendola: Cosa le serve?",
nama + ": (Incredibile, la signora non indossa la mascherina.E io la spesa qui non ce la faccio).", //15
 nama + ": Niente, grazie.", //16
"Signora: Vediamo... Dove può essere un fruttivendolo normale da queste parti?",
"Signore: Cavolo! Dove ho messo le chiavi del magazzino?",
"Guardia di una fabbrica: Devo lavorare sodo nonostante la pandemia non sia ancora passata.",
"Signora: Ehm, dov'è il mio taxi?", //20
"Parcheggiatore: E mai possibile? Dov'è quello che ha parcheggiato l'autobus in questo modo assurdo!?.", //21
nama + ": Posso chiederle che posto è questo? Perché è sorvegliato?",
"Infermiera: Questo, è un Covid hotel per la quarantena dei pazienti Covid-19.",
"Infermiera: Faccia attenzione alla sua salute. Cerchi di non ritrovarsi mai qui.",
"Dottore: A causa del continuo aumento dei pazienti affetti da Covid-19, tutti gli ospedali hanno sempre meno posti letto.", //25
"Dottore: Mi raccomando, se riscontra sintomi di febbre, tossa secca o raffreddore, vada immediatamente a farsi controllare in ospedale", //26
"Imprenditore: Durante la pandemia molti imprenditori hanno subito perdite nelle loro attività",
"Ragazza: Durante la pandemia evita di incontrare troppa gente.",
"Operatrice sanitaria: Qui c'è una famiglia intera che si trova in isolamento fiduciario a causa del Covid-19.",
"Impiegato: Durante questa pandemia tanti hanno perso il lavoro.", //30
"Bambino: Devo fare esercizio fisico regolarmente.", //31
"Vecchietta: Ehi tu, hai visto mio marito?",
"Vecchietto: Ehi tu, hai visto mia moglie?",
"Vecchietto: Quando attraversi la strada stai molto attento, eh?.",
"Giornalista: Signore, cosa vorrebbe dire ai suoi cittadine per evitare di contrarre il Covid?", //35
"Sindaco: Mantenete sempre il distanziamento sociale, utilizzate sempre le mascherine, ed evitate gli assembramenti.", //36
"Giornalista: A quanto ammonta la sanzione per le violazioni del protocollo  Covid-19, Signor Sindaco?", 
"Sindaco: Nella nostra regione a 250.000 rupie.", 
"Operatore Covid: Accidenti, il numero dei decessi aumenta di giorno in giorno.",
"Operatore Covid: Che ci fa qui? È venuta a far visita alle anime dei morti?", //40
nama + ": Mi sono persa.", //41
"Operatore Covid: Questa è il cimitero di vittime di Covid-19.",
"Negoziante: Accidenti, ma quanto tempo ci mette quest'ordine ad arrivare.",
"Parente: Hei! " + nama + "da quanto tempo non ci vediamo!",
nama + ": Si, da un sacco di tempo. Ma che fai, siamo fuori e non indossi la mascherina?", //45
"Parente: Tranquillo, siamo solo davanti casa! Comunque mia sorella ti sta aspettando.", //46
"Parente: Ehi finalmente sei arrivato! Perché ci hai messo tutto questo tempo? Stavo per comprarti qualcosa da mangiare.",
nama + ": Si, prima di andare alla stazione dei pulmann, ero andata a fare il test rapido. Per questo ho perso la prima corsa del pulmann.",
"Parente: Che hai fatto a fare il test rapido? Io spesso non mi metto nemmeno la mascherina quando vado in giro.",
nama + ": Non la prendere troppo alla leggera! Ti rendi conto che di giorno in giorno I contagi aumentano sempre di più!", //50
nama + ": Se non vuoi mettere la mascherina, ci vado io a comprare da mangiare. Torno tra poco.", //51
nama + ": (Hmmm, devo comprare le mascherine anche per loro).",
"Parente: Oh, grazie. Già che ci sei comprami il pane a Pasar Baru.",
"Negoziante: Si prego, prenda pure quello che le serve.",
nama + ": (Hmmm, quello che mi serve non c'è).", //55
"Signora: Hmmm, che devo comprare eh?", //56
"Venditore: Le servono mascherine, giusto? Il negozio di fianco a quello di mio fratello a Pasar Lama le vende.",
"Cliente: Quindi quanto le devo per le verdure, la carne e il pesce?",
"Negoziante: Sono 45.000 rupie.",
"Venditore di pesce e verdure: Scelga pure il pesce e le verdure che vuole", //60
"Venditore di pesce e verdure: Scelga pure le verdure e il pesce che vuole.", //61
nama + ": A quanto va il pesce, Signora?",
"Venditrice di pesce: a 35.000 rupie al chilo.",
nama + ": Va bene me ne dia un chilo signora. Ecco quanto le devo .",
"Venditrice di pesce: Grazie tante. Questa è la sua spesa.", //65
"Signora: Ma dove'è quello che vende il pane che di solito si mette là? Non lo vedo", //66
"Venditore di carne: Cosa le serve?",
nama + ": (Uffa, neanche lui indossa la macherina. Non mi compro niente da lui).", 
nama + ": Niente, grazie.", 
"Cliente: MI scusi quanto viene per la mia frutta?", //70
"Venditore di frutta: Il totale è 50.000 Rupie, Signora.", //71
"Venditore di frutta: Venga a comprare qui. Solo frutta freschissima.",
"Signora: Quello che si metteva là a vendere il pane, ora si è trasferito a  Pasar Lama.",
"Acquisto del pesce completato!",
"Venditore ambulante: Il mercato? Oh, basta che vai dritto da qui e ci arrivi.", //75
"Venditore: Le mascherine? Oh, Le trova al negozio di fianco!", //76
"Operatore: Ora vado a richiamare quel signore che non indossa la mascherina.",
"Signora: Ha sentito? Dicono che una famiglia intera in città è stata messa in isolamento domestico!",
"Signora: Si lo so. Il numero di persone che hanno contratto il  Covid-19 continua a crescere.",
"Cliente: Quanto vengono queste due mascherine, Signora?", //80
"Venditrice di abiti: 20.000 Rupie, Signora.", //81
"Venditore di pane: Venga qui a comprare il pane.",
"Venditore di pane: Venga qui a comprare il pane. È ancora caldo.",
nama + ": Queste tre confezioni di pane quanto vengono?",
"Venditore di pane:30.000 Rupie.", //85
nama + ": Bene, ecco a lei signore.", //86
"Venditore di pane: Grazie. Ecco a lei il suo pane.", 
"Acuqisto del pane completato!",
"Venditrice di abiti: Cosa cerca?",
"Venditrice di abiti: Che cerca? Ho delle maschere bellissime.", //90
nama + ": Quanto vengono quattro maschere, Signora?", //91
"Venditrice di abiti: 40.000 rupie.", 
nama + ": Bene, allora prendo quattro mascherine. Ecco a lei quanto le devo.", 
"Venditrice di abiti: Grazie. Ecco a lei le sue mascherine.", 
"Acquisto delle mascherine completato!", //95
nama + ": Che cos'è questo?", //96
"Operatore Covid: Devo portare questo tuo amico in isolamenteo perchè il è risultato positivo al Covid.",
nama + ": Oh no. L'ho appena incontrato poco fa.",
"Operatore Covid: In questo caso allora anche tu devi fare il test. Il mio collega ha gli strumenti per il test.",
"Risultato del test: Negativo!", //100
"Operatore Covid: Deve restare in isolamento fiduciario per 14 giorni. Arrivederci!",
"Il gioco è finito. Grazie per aver giocato a questo gioco.",  
"A sinistra della città:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Ospedale </li>" + "<li> Complesso di appartamenti </li>"+ "</ul>", //103    
"A destra della città:" + "<br>" + "<ul>" +"<li> Cimitero </li>" +"<li> Comune </li>" + "<li> Pasar Lama </li>"+ "</ul>", //104
"Partita finita. Sei stato investito da un'auto",
]

// japanese
var indexTextJapan = [
    "新しく始める",
    "つづきから始める",
    "プロフィール",
    "クレジット",
    "性別",
    "性別を選んでください",
    "男",
    "女",
    "言語を変更する",
    "nama",
    "名前を入力してください",
    "メインメニューに戻る",
]
var onloadTextJapan = [
    // level 1
    "コロナウィルスの迷宮Surviving Covid Labyrinthへようこそ. このゲームでは、新型コロナウィルスが蔓延する世界を冒険します." + "<br>" + "冒険の間は, 距離を保ったり、石鹸で手を洗ったり, マスクをしたり, 人が密集する場所を避けたりする必要があります.", //0怀
    "画面の右側に「健康レベル」ゲージがあります. このゲージがゼロになるとゲームオーバーになり, そのレベルの最初からやり直しです.", //1
    "森の奥にある家に帰ることができれば, レベル1クリアです." + "<br>" + "冒険の前に, お友だちへのあいさつを済ましておいてくださいね." + "<br>"+ "それでは, よい旅を!", //2

    // level 2
    "おかえりなさい. 新しいレベルで、冒険を続けましょう. 冒険はお母さんとの会話から始まります.", //3
    "まだコロナウィルスが流行っているから, しっかりと予防しなきゃだめよ. それではレベル2の冒険に, いってらっしゃい!",//4
    // level 3
    "おめでとう, 最後のレベルまでたどり着きましたね. このレベルでは, あなたが親戚の住む街に付いたところから冒険が始まります." + "<br>" + "道を渡るときはくれぐれも気をつけてください. 予防をしっかりと行い, 特に距離の確保, マスクの着用, 人の集まる場所を避けることは忘れないようにしましょう.", //5
    "街に入る前に, 体温を測り, 健康管理カードに記入を行いましょう. それは、良い旅を!", //6
    "買い物リスト:" + "<br>" + "<ul>" +"<li> 魚 </li>" +"<li> 食パン </li>" + "<li> マスク </li>"+ "</ul>", //7
    // system
    "ゲームオーバーです　車にひかれてしまいました.",
    "ゲームオーバーです　健康ゲージがゼロになりました",

]
var txt1Japan = [
    "友達: どこにいくの？ こっちにおいでよ.", //0
    "友達: 石けんで手を洗うのを忘れないようにね！", //1
    "友達: 手をちゃんと洗えば, ウィルスを防ぐことができるからね.",
    "友達: 家の前で手を洗えるよ.",
    "よし, きれいになったね！",
    "若者: *ゴホゴホ* こんな道の真ん中にテントを立ててしまってすみません. 通っても大丈夫です.", //5
    "門番: そこの君, なんでマスクをしていないんだい? このマスクを使いなさい.", //6
    "マスクを手に入れた",
    "門番: よし, もうマスクをつけたな. 通っていいぞ.",
    nama + ": ありがとうございます！" ,
    "距離を保つのを忘れないようにしましょう！", //10
    "*ゴホゴホ* 私の孫をみませんでしたか? 家を出るときにマスクをつけていかなかったのよ.", //11
    nama + ": その子なら, 森で見ましたよ.", 
    "おばあさん: あの子にマスクを届けてくれませんか?", 
    nama + ": もちろん.", 
    nama + ": これはあなたのおばあちゃんからのマスクです. どうぞ!", //15
    "ありがとう!", // 16
    "お母さん: おかえりなさい. ハンドソープを買ってきてくれない?", 
    nama + ": どこで買えばいい?", 
    "お母さん: Aniさんのお店にあると思うわ", 
    "Yani: なにをお探しですか?", //20
    nama + ": ハンドソープを買いに来ました.", //21
    "Yani: そうですか, さあ中に入って!", 
    "Ani: いらっしゃいませ. 何をお探しですか?", 
    nama + ": ハンドソープはありますか?", 
    "Ani: もちろんございます. こちらです.", //25
    "ハンドソープを手に入れた!", //26
    "お母さん: ありがとう. 家に入る前に手を洗うのを忘れないでね!",
    "手を洗った!",
    "レベル1クリア!",
    nama + ": ハンドソープ買ってきたよ", //30

]
var txt2Japan = [
    "お母さん: おじいちゃんにお昼ご飯をとどけてくれない?", //0
nama + ": わかった!", //1
"気をつけてね!",
"お隣さん: やあ, " + nama + "Jokoさんのところのお母さんがコロナウィルスにかかったってきいたよ.",
"子ども: はぁ…はぁ...もうあと10分で帰らなくちゃ.",
"子ども: ハクション…ハクション...", //5
nama + ": 何かあったんですか?", //6
"子どものお母さん: うちの子、咳と鼻水がとまらないの. 熱もあるわ. 検査を受けさせなきゃ.", 
nama + ": コロナウィルスじゃないといいですね.", 
"子どものお母さん: ありがとうございます.",
"おじいさん: ゴホゴホ", //10
nama + ": (わあ、近づかないようにしなきゃ)", //11
nama + ": (はやくおじいちゃんにお昼ご飯をとどけなきゃ)",
"看護師: もし診察をご希望であれば, 番号をお取りください.",
nama + ": すみません、違います. ありがとうございます!",
"女の人: しっかりと距離を保ってくださいね.", //15
"果物屋: なにかお探しかい?",
nama + ": なんでもありません.",
nama + ": (あの人, マスクをしていなかったな. あのお店では買い物したくないな)",
"女の人: パン屋がどこにあるか知ってますか?",
"果物屋: 買っていきなよ. さっき届いたばかりだよ.", //20
nama + ": 今は大丈夫です.",
"店員: なにかお探しかい?",
nama + ": なんでもありません.",
nama + ": すみません. あのタワーにはどうやっていけばいいですか?",
"若者: 最初からやり直しだよ.", //25
"手を洗った!", //26
"おじいちゃん: こんにちは, " +nama+ " お母さんがお昼ご飯を届けてくれるって聞いたよ",
nama + ": そうだよ!",
nama + ": これがそのお昼ご飯だよ.",
"おじいちゃん: おお、ありがとう.", //30
"おじいちゃん: ハンドソープとトマトをおばあちゃんに買って届けてくれないかい?", //31
nama + ": もちろん, おじいちゃん.",
"おじいちゃん: ありがとう, このお金を使いなさい.",
"おじいちゃん: 密を避けるのを忘れるんじゃないよ!",
"果物屋: 見ていきなよ. どれも新鮮だよ. ", //35
nama + ": トマトありますか?", //36
"果物屋: ありますよ. さっき届いたばかりのだよ.",
nama + ": 一袋いくらですか?",
"果物屋: たったの10.000ルピアだよ.",
nama + ": わかりました. これ代金です", //40
"果物屋: まいどあり.", //41
"店員: なにかお探しかい?",
nama + ": ハンドソープありますか?",
"店員: ありますよ. 10.000ルピアです.",
nama + ": わかりました, これ代金です.", //45
"ハンドソープを手に入れた", //46
"店員: ありがとうございました.", 
"お隣さん: あら、ずいぶん大きくなったね. " + nama,
"おばあちゃん: いらっやし, " + nama +". おじいちゃん, なにか言っていたかい?",
nama + ": 先におじいちゃんのところによって来たんだ.", //50
"手を洗った!", //51
nama + ": おじいちゃんから頼まれて、ハンドソープとトマトを買ってきたよ.", //52
"おばあちゃん: ありがとう. " +nama + ". 先に洗いましょうか.",
"トマトを洗った",
nama + ": 洗ったよ, おばあちゃん.", //55
"おばあちゃん: ありがとう. 中でお茶でも飲んでいきなさい.",
nama + ": もちろんだよ!",
"トマトを手に入れた",
"レベル2クリア.",
nama + ": (まず消毒しなくちゃ).",


]
var txt3Japan = [
    "バスの運転手: 当バスをご利用いただきありがとうございます. ご乗車の前の検温にご協力ください.",
"運転手: 体温が37.5度以上ある場合, 街に入ることはできません.", //1
"若い女性: ずいぶんと時間がかかりますね.",
"若い男性: 何度でした?",
"検査員: 36.8度ですね. どうぞお入りください",
"検査員: 熱を測りますね.", //5
"検査員: 36.2度ですね. あちらで健康管理カードを確認します.", //6
"検査員: ようこそ. こちらで体温を測ってください!",
"カード検査員: 健康管理カードを見せていただいてもいいですか?",
nama + ": はい、これです.",
"カード検査員: ありがとうございます. 陰性ですね. どうぞお入りください.", //10
 "カード検査員: こちらで健康管理カードを確認します!", //11
"客: すみません, このとうもろこしとトマトは合わせていくらですか?",
"八百屋: 全部で25,000ルピアです.",
"八百屋: 何をお探しですか?",
nama + ": (わあ, この人マスクをしていないや. ここでは買い物しないようにしよう).", //15
 nama + ": 特にありません.", //16
"女性: あれ。いつもの八百屋さん、どこに行ったんでしょう?",
"男性: 倉庫のカギどこに置いたっけ?",
"工場警備員: コロナウィルスが流行っているけれど、がんばって働き続けれければなりません.",
"女性: 迎えはどこにいるのかしら?", //20
"駐車場管理員: バスの運転手はだこに行ったんだ? 困ったもんだよ.", //21
nama + ": すみません, ここはどういったところですか? なぜ警備しているのですか?",
"看護師: ここは新型コロナウィルス専用の宿泊療養施設です.",
"看護師: お体に気を付けてください. くれぐれもここに入ることのないように.",
"医師: 新型コロナウィルスがますます増えているから, ベッドももうすぐうまってしまいそうだよ.", //25
"医師: 熱や咳や鼻水が出たら, すぐに病院に行ってくださいね.", //26
"経営者: コロナウィルスのせいで, 多くの企業が被害を受けているよ.",
"女性: コロナウィルスが流行っているので, 他の人と集まるのはやめましょう.",
"コロナ対応職員: ここの家族はコロナウィルスで自主隔離を行っています.",
"会社員: コロナウィルスのせいで、多くの人が職を失ってしまったよ.", //30
"子供: しっかり運動しなきゃ.", //31
"おばあさん: すみません、私の夫をみませんでしたか?",
"おじいさん: すみません、私の妻をみませんでしたか?",
"おばあさん: 道を渡るときは、気を付けてくださいね.",
"リポーター: コロナウィルスにかからないために、何かみなさんに伝えたいことはございますか?", //35
"市長: しっかりと人との距離を保ち, 常にマスクを着用し, 人込みに行かないようにしてください.", //36
"リポーター: 条例違反した人にはどれくらい罰金が科されるのでしょうか?", 
"市長: ここでは、250.000ルピアです.", 
"コロナ対応職員: 大変だ, コロナウィルスの患者数が毎日増えているよ.",
"コロナ対応職員: 何かご用ですか? どなたかのお墓参りですか?", //40
nama + ":道に迷ってしまったんです.", //41
"コロナ対応職員: ここはコロナウィルスによりなくなってしまった方たちの墓地です.",
"店員: 大変だ、商品がもうずっと来ていない.",
"親戚: やあ! " + nama + " 久しぶりだね!",
nama + ": やあ、久しぶり. 外なのにどうしてマスクをしていないの?", //45
"親戚: 気にするなって, 家の前だけなら大丈夫だよ! 弟が君を待っているよ.", //46
"親戚: やっと着いたんだね! どうしてこんな時間になったの? もうすぐで僕が代わりにご飯を買いに行くところだったよ.",
nama + ": バス乗り場に行く前に、簡易検査を受けてきたんだ. そしたらバスに乗り遅れちゃってさ.",
"親戚: なんで検査なんかうけたの? 僕なんかマスク付けないで外出してるよ.",
nama + ": コロナウィルスを甘く見ちゃいけないよ! 毎日感染者が増えているんだから!", //50
nama + ": もしマスクをしないなら, 食べ物だけ買って, すぐに帰らせてもらうよ.", //51
nama + ": (はあ, あとで彼らにマスクを買ってあげなきゃ).",
"親戚: ありがとう.新しい市場でパンを買ってきてくれないかな.",
"店員: いらっしゃい, 是非店内を見ていってよ.",
nama + ": (ここには欲しいものはなさそうだな).", //55
"女性: 何を買うべきかしら?", //56
"店員: マスクをお探しですか? マスクなら古い市場にある私の親戚がやっている店の近くの店にありますよ.",
"客: すみませんこの野菜と肉と魚, 全部でおいくらですか?",
"店員: 45,000ルピアです.",
"魚屋:　どうぞ、お好みの魚と野菜を選んでいってくださいね.", //60
"魚屋: どうぞ、お好みの魚と野菜を選んでいってくださいね.", //61
nama + ": この魚は一キロ当たりいくらですか?",
"魚屋: 35,000ルピアです",
nama + ": それでは、一キロください. こちら代金です",
"魚屋: ありがとうございます. こちらお買い上げの品です", //65
"女性: いつのパン屋さんはどこにいったのかしら?", //66
"肉屋: 何をお探しですか?",
nama + ": (わあ、この人マスクをしていないや. ここでは買い物をしないようにしよう).", 
nama + ": 特にありません.", 
"客: この果物、全部でおいくらですか?", //70
"果物屋: 全部で50,000ルピアです.", //71
"果物屋: どうぞ買っていってください.どれも新鮮ですよ.",
"女性: あそこのパン屋さんは古い市場に移動したみたいですよ.",
"魚を手に入れた!",
"屋台: Pasar Lamaだって? ここから真っすぐ歩けば付きますよ.", //75
"店員: マスク? 隣のお店で買えますよ!", //76
"会社員: あのマスクをしていない人に一言言わなければ.",
"女性: 聞きましたか? 中心街に住んでいるあの大家族、自宅隔離中らしいですよ!",
"女性: そうですね. コロナウィルスの感染者はますます増えています.",
"客: マスク二つでおいくらですか?", //80
"服屋: 20,000ルピアです.", //81
"パン屋: 好きなものを買っていってくださいね.",
"パン屋: いらっしゃい. 出来立てですよ.",
nama + ": ３袋でいくらになりますか?",
"パン屋: 30,000ルピアです.", //85
nama + ": わかりました. こちら代金です", //86
"パン屋: ありがとうございます. こちらパンです", 
"パンを手に入れた!",
"服屋: 何をお探しですか?",
"服屋: 何をお探しですか? こちらのマスクはおすすめですよ.", //90
nama + ": マスク４枚でいくらになりますか?", //91
"服屋: 40,000ルピアです.", 
nama + ": わかりました, ４枚ください. こちら代金です.", 
"服屋: ありがとうございます. こちらマスクです.", 
"マスクを手に入れた!", //95
nama + ": 何があったんですか?", //96
"コロナ対応職員: あなたのお友達が陽性となったため, 隔離しなければなりません.",
nama + ": 本当ですか, 彼にさっきあったばかりです.",
"コロナ対応職員: それでしたら、あなたも検査を受けなくてはなりません. 私の友人が検査キットを持っています.",
"検査結果: 陰性!", //100
"コロナ対応職員: 14日間の自宅待機をお願いします. お大事にしてください!",
"以上でゲーム終了です. ここまでプレイしていただきありがとうございました.",  
"西区:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> 病院 </li>" + "<li> アパート </li>"+ "</ul>", //103    
"東区:" + "<br>" + "<ul>" +"<li> 墓地 </li>" +"<li> 市役所 </li>" + "<li> Pasar Lama </li>"+ "</ul>", //104
"ゲームオーバーです　車にひかれてしまいました.",

]