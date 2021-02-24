//Aneuk
var indexTextAneuk = [
    "Mulai baru", //0
    "Lanjutkan Pamainan",//1
    "Profil",
    "Kredit",
    "Gender",
    "Pilih gender kamu", //5
    "Laki-laki", //6
    "Padusi",
    "Ubah Bahaso",
    "Namo",
    "Masukkan Namo", //10
    "Baliek ka Manu Utamo",
]
var onloadTextAneuk = [
    //level 1
    "Salamaik datang dalam pamainan Surviving Covid Labyrinth. Dalam bamain, munak  akan bapetualang dalam situasi pandemi Covid-19." + "<br>" + "Salamo bapatualang munak harui mangikuti protokol kesehatan, sarupoi manjago jarak aman, mancuci tangan samo sabun, manggunokan cairan pambasih tangan, manggunokan masker, alah tu manajuhi karumunan.", //0
    "Di sabalah kanan di ateh layar, ada garis kasehatan yang manunjukkan tingkek kasehatan munak. Apobilo  garisnyo  habih, itu masonyo parmainan  barakhir dan munak harui mangulang dari patamo untuk level itu.", //1
    "Patualangan munak di level 1 alah salasai kalau munak salamaik pulang ke rumah munak di ujung hutan." + "<br>" + "Sabalum batualang, ado paralunyo munak minta izin samo kawan baik munak." + "<br>"+ "Salamaik bapatualang!", //2
    //level 2
    "Salamaik datang kambali. Di level ko, munak akan malanjutkan patualangan munak. Patualangan munak dimulai dengan percakapan samo umak munak.", //3
    "Jangan lupo untuk tatok mangikuti protokol kesehatan karano kito masih dalam maso pandemi Covid-19. Saamaik manampuh patualangan di level 2 iko.",//4
    //level 3
    "Salamek, munak alah sampai  level tarakhir. akhir petualangan. Di level iko munak  baru tibo di  kota untuak mangunjungi saudaro munak." + "<br>" + "Ba hati-hati saek manyabarang jalan. Tatok patuhi protokol kesehatan, tarutamo manjago jarak aman, salalu mamakai masker, alah itu jangan bakarumun.", //5
    "Sabalun munak sadonyo masuk ka kota, munak tunjukkan  Kartu Kewaspadaan Kesehatan punyo munak. Salameik batualang!", //6
    "Namo-namo  barang yang harui dibali:" + "<br>" + "<ul>" +"<li> lauk </li>" +"<li> Roti tawa </li>" + "<li> Masker </li>"+ "</ul>", //7
    //system
    "Pamainan barakhi. Munak tatabrak mobil.",
    "Pamainan berakhir. Tingkek kasehatan munak alah habih.",
]
var txt1Aneuk = [
    "Kawan: Hai,  mau ka mano? Ka siko daulu!", //0
    "Kawan: Hai, jangan lupo mancuci tangan samo sabun, yo!", //1
    "Kawan: Kalau kito alah mancuci tangan, kito dapek mamastikan tangan kito alah bersih dan aman dari virus.",
    "Kawan: buliah mancuci tangan di muko rumah ambo.",
    "Alhamdulillah, tangan alah tacuci!",
    "Pamudo: *Uhuk* Maaf yo, tenda ambo manghalangi jalan. Tapi, kau dapek lewat sitin.", //5
    "Panjago garbang: Mangapo indak mamakai masker? Iko maskernyo.", //6
    "Masker didapekkan",
    "Penjaga Gerbang: Rancak, Adek alah mamakai masker! Silakan lewat.",
    nama + ": Terimo kasih!" ,
    "Ingeklah untuk salalu manjago jarak aman, yo!", //10
    "*Uhuk* Apo Adek ado mancaliak cucu ambo? Inyo indak mamakai masker waktu pai.", //11
    nama + ": Oh, ambo ado mancaliaknyo di hutan.", 
    "Uci: Tolong bagikan masker iko ka inyo, Nak?", 
    nama + ": Tantu sajo.", 
    nama + ": Iko masker dari Uci. pakailah daulu!", //15
    "Iyo, terimo kasih!", // 16
    "Umak: Sayang, alah pulang nak. Tolong balikan sabun cuci tangan dulu, yo?", 
    nama + ": Di mano, Umak?", 
    "Umak: Di kadai Bu Ani.", 
    "Yani: Cari apo?", //20
    nama + ": Ambo Mau mambali sabun cuci tangan.", //21
    "Yani: Oh, langsung ka dalam ajo.", 
    "Ani: Mau bali apo?", 
    nama + ": Ado sabun cuci tangan?", 
    "Ani: Oh, tantu sajo. Iko kak!", //25
    "Sabun cuci tangan alah dapek!", //26
    "Umak: Tarima kasih, Sayang. Jangan lupo mancuci tangan sabalum masuk ka rumah, yo!",
    "Tangan alah tacuci!",
    "Alhamdulillah, level 1 alah salasai!",
    nama + ": Iko sabunnyo, Mak.", //30
]
var txt2Aneuk = [
    "Umak: Bisa hantekkan makan siang untuk Angku?", //0
nama + ": Iyo, Umak.", //1
"Hati-hati di jalan, yo!",
"Tatanggo: Hai, " + nama + " Apo iyo Ibuk Joko takanai Covid.",
"Anak ketek: Hosh...hosh…Ambo  harui pulang sapuluah manik lai.",
"Anak ketek: Hatsi...hatsi...", //5
nama + ": Ibu, mangapo anak Ibu?", //6
"Ibu-ibu: Inyo batuk, pilek, dan agak damam. Jadi kami mau rapid test.", 
nama + ": Oh. Mudah-mudahan bukan Covid yo, Buk.", 
"Ibu-ibu: Terimo kasih, Nak.",
"Angku: UHUK UHUK", //10
nama + ": (Aduh, ambo harui jago jarak ko)", //11
nama + ": (Ol Mak, ambo harui lakeh-lakeh mahantek makanan Angku)",
"Perawat: Kalau mau barubek, iko nomor antriannyo.",
nama + ": Maaf, ambo indak barubek. Terimo kasih.",
"Ibu-ibu: Tolong jago jarak, Nak.", //15
"Panjaja buah: Cari apo, Dek?",
nama + ": Indak, Pak. Terimo kasih.",
nama + ": (Bapak iko indak mamakek masker. Ambo indak mau mambali buah di siko.)",
"Ibu-ibu: Kamano painyo si Tukang roti tu?",
"Panjaja buah: Balilh, Dek. Buahnyo baru datang.", //20
nama + ": Maaf, indak dulu yo, Buk.",
"Panjaja sambako: Cari apo, Dek?",
nama + ": Oh, indak mancari apo-apo, Bu.",
nama + ": Assalamualaikum, ijin batanyo, jalan ka menara lewat mano, yo?",
"Pamudo: Oh, munak harui mamuta jalan dari patamo.", //25
"Alhamdulillah, tangan alah tacuci!", //26
"Angku: Halo, " +nama+ " Saingek ambo, umak ado manitipkan makanan untuk ambo.",
nama + ": Iyo, Angku!",
nama + ": Iko makanan dari Umak untuk Angku.",
"Angku: Oh, terimo kasih.", //30
"Angku: Biso tolong balikan sabotol sabun cair samo tomat untuk Uci?", //31
nama + ": Buliah, Ngku.",
"Angku: Terimo kasih. Iko kepengnyo.",
"Angku: Ingek salalu manjago jarak, yo!",
"Panjaja buah: Mari, Dek. Silakan dipiliah buahnyo.Buahnyo masih segar.", //35
nama + ": Ado tomat, Buk?", //36
"Panjaja buah: Ado, Dek. Yang iko baru datang.",
nama + ": Iyolah, Buk. Barapo Sabungkuiko?",
"Panjaja buah: Rp10.000  saja.",
nama + ": iyo, iko kepengnyo, Buk.", //40
"Panjaja buah: Tarimo kasih, Dek.", //41
"Panjaja sambako: Mau cari apo, Dek?",
nama + ": Sabun cair ado, Buk?",
"Panjaja sambako: Ado. Rp10.000 hargonyo.",
nama + ": Oke, iko kepengnyo.", //45
"Sabun cair alah tabali", //46
"Panjaja sambako: Terimo kasih.", 
"Tatanggo: Oh, alah gadang, yo. " + nama,
"Uci: Halo, " + nama +". Apo ado titipan dari Angku?",
nama + ": Ambo ka tampek Angku  dulu, Ci.", //50
"Alhamdulillah, tangan alah tacuci!", //51
nama + ": Iko sabun dan tomat dari pasar titipan Angku.", //52
"Uci: Terima kasih. " +nama + ". Tolong dicuci dulu, yo.",
"Tomat alah tacuci",
nama + ": Alah ambo cuci,Ci.", //55
"Uci: Terimo kasih. Masuklah daulu. Kito minum teh di dalam.",
nama + ": Iyo, Ngku.",
"Tomat alah tabali",
"Alhamdulillah, level 2 alah salasai.",
nama + ": (Ambo pakai cairan pambersih daulu).",
]
var txt3Aneuk = [
"Supir bus: Tarimo kasih alah manggunokan jaso kami.Tolonglah diparikso suhu badan di sitin sabalum masuk ka kota..",
"Pamudi: Kalau suhu badan munak di ateh  37,5 darajek Celsius, munak indak bulih masuk ka kota yoa.", //1
"Pamudi: Aduh, lamonyo.",
"Pamudo: Barapo suhu ambo, Kak?",
"Pamarikso suhu: 36,8 darajek Celsius. Masuklah.",
"Pamarikso suhu: Ambo parikso suhunya sabanta yo, Dek.", //5
"Pamarikso suhu: 36,2 darajek. Tolong  tunjukkan Kartu Kewaspadaan Kesehatan di sitin", //6
"Pamarikso suhu: Dek, parikso suhu daulu di siko!",
"Pamarikso KKK: Bulih calik Kartu Kewaspadaan Kesehatannyo, Dek?",
nama + ": Iko, Pak.",
"Pamarikso KKK: Yo lah, hasilnyo tes non-reaktif. Masuklah ka kota.", //10
 "Pamarikso KKK: Dek, tunjukkan Kartu Kewaspadaan Kesehatan daulu di siko!", //11
"Pambali: Buk, jadi barapo sadonyo harga jagung smo tomatnyo?",
"Panjaja sayur: sadonyo  Rp25.000, Buk.",
"Panjaja sayur: Cari apo, Dek?",
nama + ": (Alah mak, ibu iko indak mamakai  masker. Ambo indak mau balanjo samo inyo lah).", //15
 nama + ": Indak , Buk.", //16
"Ibu-ibu: Hmmm, kamano yang biasonyo bajaga sayur di siko?",
"Bapak-bapak: Alah, kamano ambo latakkan kunci gudang yo?",
"Panjaja pabrik: Ambo harus tatok bakarajo kareh walaupun masih pandemi.",
"Ibu-ibu: Ya Allah, mano yang manjapuik ko?", //20
"Tukang parkir: Iyah, iko yang parkir bus kamano painyo? Mangapo parkirnyo macam ko?.", //21
nama + ": Dek, ambo mau tanyo, tampek apo iko? Mangapo dijago?",
"Perawat: Oh, iko rumah karantina pasien Covid-19.",
"Perawat: Jago  kesehatan yo, Dek. Jangan sampai kakak masuik ka siko.",
"Dokter: Karanao pasien Covid-19 alah samakin banyak, kapasitas di rumah sakik pun samakin terbatas.", //25
"Dokter: Kalau munak sadonyo  damam, batuk kariang, atau pilek, capeklah  parikso ka rumah sakik, yo.", //26
"Pengusaho: Di maso pandemi ko, banyak pangusaho marasokan  dampaknyo.",
"Pamudi: Di maso pandemi, janganlah munak bakumpu-kumpu.",
"Satgas Covid: Di siko ado sakeluargo yang tangah isolasi mandiri karano Covid-19.",
"Pagawai: di maso pandemi macamko, banyak urang yang indak bakarajo lai", //30
"Anak-anak: Ambo  harus rajin baolahraga.", //31
"Uci: Nak, apo ada mancalik suami ambo?",
"Angku: Nak, apo ado mancalik bini ambo?",
"Uci: Waktu manyubarang jalan, bahati-hati munak, yo.",
"Wartawan: Apo yang nandak Bapak sampaikan kapado masyarakat supayo indak tatular Covid?", //35
"Walikota: Tatokah manjago jarak aman, salalu mamakai masker, alah tu jangan bakarumun.", //36
"Wartawan: Barapo dando untuk  yang malangga protokol Covid-19, Pak?", 
"Walikota: Ditampek kito Rp250.000.", 
"Patugas covid: Oi mak,  korban batambah tarui satiok harinya.",
"Patugas covid: Ado urusan apo, Dek? Mau ziarah, yo?", //40
nama + ": Ambo tasasek, Pak.", //41
"Patugas covid: Iko kuburan korban Covid-19.",
"Penjaga toko: Alah mak, lamo bana  sampai barangnyo.",
"Saudaro: Assalamualaiku! " + nama + " Alah lamo indak basuo!",
nama + ": Iyo, alah lamo indak basuo. Mangapo kalua indak mamakai masker?", //45
"Saudaro: Tanang ajolah, Cuma di muko rumah ajo! Oh iyo, adik ambo alah  menunggu.", //46
"Saudaro: Eh, alah sampai! Mangapo lamo bana? Ambo baru ajo mau mambalikan makanan.",
nama + ": Iyo, sabelum ka tarminal bis ambo rapid daulu. Jadi tadi katinggalan bus patamo.",
"Saudaro: Untuk apo rapid? Ambopun saring pai-pai indak mamakai  masker .",
nama + ": Jangan manganggap remeh! Samakin hari samakin banyak yang takanai tau!", //50
nama + ": Kalau indak mau mamakai masker, bia ambo sajolah yang mambali makan. Bek ko ambo balik lai ka siko.", //51
nama + ": (Hmmm, bek ko bia ambo yang mambali masker untuk urang tu).",
"Saudaro: Oh, tarimo kasih. Tolong sekalian balikan roti di Pasar Baru.",
"Panjaja barang: Iyo Kak, silakan dipiliah barangnyo, Nak.",
nama + ": (Hmmm, barang yang mau ambo beli indak ado di siko).", //55
"Ibu-ibu: Hmmm, bali apo, yo?", //56
"Panjaja: Cari masker yo, Dek? Toko di samping toko saudara ambo di Pasar Lama ado manjual masker.",
"Pembeli: Buk,  barapo harago kasadonyo ko sayur, daging, smo lauknyo?",
"Panjaja: Rp45.000, Buk.",
"Panjaja lauk dan sayur: Silakan dipiliah, Dek lauk samo sayurnyo.", //60
"Panjaja lauk dan sayur: Silakan dipilih, Dek sayur samo ikannyo.", //61
nama + ": Barapo lauk ko sakilo, Buk?",
"Penjual Ikan: Rp35.000.",
nama + ": Yo Lah, ambo bali sakilo ya, Buk. Iko kepengnyo.",
"Penjual Ikan: Terima kasih. Iko barangnyo.", //65
"Ibu-ibu: Kamano panjaga roti yang biaso di sitin?", //66
"Panjaja dagiang: Cari apo, Dek?",
nama + ": (Wah, bapak itu indak mamakai masker. Ambo indak mau balanjo inyo lah).", 
nama + ": Indak , Pak.", 
"Pambali: Pak, barapo harago buahko sadonyo?", //70
"Panjaja buah: Sadonyo Rp50.000, Buk.", //71
"Panjaja buah: Silakan dibali, Dek. Buahnyo sagar bana ko.",
"Ibu-ibu: Tukang roti yang di sitin, alah pindah ka Pasa Lamo, Dek.",
"Lauk alah tabali!",
"Pedagang kaki limo: Pasar? Oh, kakak cukuik jalan lurui dari siko ajo saja,.", //75
"Panjaja: Masker? Oh, bisa dibali di toko sabalah, Dek!", //76
"Petugas: Ambo  akan mangecekkan samo bapak yang indak mamakai masker itu.",
"Ibu-ibu: Buk, alah tau? Kabarnyo ado sabuah keluargao gadang di pusek kota yang diisolasi di rumah!",
"Ibu-ibu: Iyo, Buk. Jumlah orang yang takanai Covid-19 ko batambah tarui.",
"Pambali: Barapo harago duo masker ko, Buk?", //80
"Panjaja pakaian: Rp20.000, Buk.", //81
"Panjaja roti: Balilah rotinyo, Dek.",
"Panjaja roti: Balilah rotinyo, Dek. Mantang hangek lai ko.",
nama + ": Barapo tigo bungkui roti ko, Pak?",
"Panjaja roti: Rp30.000.", //85
nama + ": iyolah, iko kepengnyo, Pak.", //86
"Panjaja roti: Tarima kasih. Iko rotinya.", 
"Roti alah tabali!",
"Panjaja pakaian: Cari apo, Dek?",
"Panjaja pakaian: Cari apo, Dek? Maskernya rancak-rancak ko.", //90
nama + ": Barapo harago ampek masker, Buk?", //91
"Panjaja pakaian: Rp40.000.", 
nama + ": Iyolah, Ambo bali ampek masker, Buk. Iko kepengnyo.", 
"Panjaja pakaian: Tarimo kasih. Iko maskernyo.", 
"Masker alah tabali!", //95
nama + ": Ado apo iko?", //96
"Patugas covid: Kawan iko ambo bawok untuk diisolasi karano hasil tesnyo positif Covid.",
nama + ": Ai mak, kami baru basuo tadi.",
"Patugas covid: Kalau macamtu, Adek harui dites juo. Alat tesnyo ado samo kawan ambo.",
"Hasil tes: Non-reaktif!", //100
"Patugas covid: Adek harui isolasi mandiri salamo 14 hari. Sampai basuo lai!",
"Permainan alah salasi. Tarimo kasih alah mamainkan permainan iko.",  
"Kiri kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanan kota:" + "<br>" + "<ul>" +"<li> Tempat pemakaman </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lama </li>"+ "</ul>", //104
"Pamainan barakhi. Munak tatabrak mobil.",
]

//nias
var indexTextNias = [
    "Ta Beretaigö", //0
    "Be tafamai",//1
    "Hanata ndrauö?",
    "Keredi",
    "Gender",
    "Simatua nama Si'alawe ndraugö?",//5
    "Simatua",//6
    "Si'alawe",
    "La gati li nia",
    "Tei",
    "Sura Döiu", //10
    "Mavuli ba mbosi si oföna",
]
var onloadTextNias = [
    //level 1
    "Ya'ahowu, aine data famai ba  Surviving Covid Labyrinth. Ba permainan ha'a gö manörö-nörö ba ginötö fökhö Covid-9i" + "<br>" + "ba fanörö-nörö  mö, moguna ta amoniö ita ta ö'ö nifahöi samatörö : Ta 'amoni'ö gotalua jamö sana ita, Sasai tanau fama sabu, oguna'ö mbalu-mbalu mbawa, areuö ndraugö moroi ba gotalua sato, .", //0
    "Ba gabölö  layar, so tadra fa'abölö boto u.  Na ma'ahori tadra fa'abölö boto u, eluaha nia ma'awali permainan ha'a ba tola efuli ndraugö ba mbosimu sioföna ", //1
    "Fanörö-nörö mö ba mbosi si'oföna, ma awali, tola manavuli draugö ba nomou ba balö gatua " + "<br>" + "Fatua lönana mofanö ndraugö, tola manona ndraugö khö naveu ." + "<br>"+ "!", //2
    //level 2
    "Ya'ahowu, falakhi sui itta. Ba mbosi ha'a gö beretaigö fofanöro mö ga Fofanõ mö eberetaigõ me famanõ manõ-manõ draugõ khõ ninau.", //3
    "Bõi olifu draugõ mea õ amoni'õ draugõ, o'õ khoikhoi ba fa'abõlõ mboto bõrõ me so na ba vfõkhõ sahõli dõdõ ba padrõmi Covid-19.  Ya'ahowu mea õtõrõ lala vfanatarõ dõdõ ba mbosi si 2 (dombua) adra.",//4
    //level 3
    "Ta'adrō saohagölö, ma Ö rugi ba mbosi safuria fanöro- nörö Ba Mbösi safuria ha'a, avena ö rugi ba banua sebua fefalakhisi ira iwau. Faigi-faigi na ö ö'ötö lala." + "<br>" + ". Ta amoniö ita ta ö'ö nifahöi samatörö, töra-töra gotalua jamö sana ita, oguna'ö mbalu-mbalu mbawa ba, areuö ndraugö moroi ba gotalua sato", //5
    "Fatua löna e rugi ba banua sebua.,fareso faukhu mbotou . Faigi fanörö-nörö u!", //6
    "Halö-halö ni'öli :" + "<br>" + "<ul>" +"<li> I'a </li>" +"<li> Roti  </li>" + "<li> Mbalu-mbalu mbawa </li>"+ "</ul>", //7
    //system
    "Ma Avali Permaina, ma la tadru ndraugö moto.",
    "Ma Avali Permaina, Ma mamofokhö ndragö.",
]
var txt1Nias = [
    "Nave: He, haega gomöi? Aine wae!", //0
    "Nave: He, böi olifu ndraugö e sasai tanau fama sabu!", //1
    "Nave: Na ö sasai tanau, mea tola e ila löna tunö ba dana u.",
    "Nave : Tola ö sasai tanau ba nomo gu.",
    "Hore, tanau mala sasai !",
    "Ono matua *Uhuk* Bologu dödö u ma te taha ndraugö börö tedragu, Tola .ö törö gane ", //5
    "Sojago golu :He ono matua hava lönö ö oguna ö mbalu-mbalu mbawa ? Yai mbalu-mbalu mbawa khöu", //6
    "Ma isedra mbalu-mbalu mbawa",
    "Sojago golu: Baga, ma ö fake mbalu-mbalu mbawa! Tola ö törö.ga",
    nama + ": Saohagölö Bö olifu ndragö mi'amoniö gotalua jamö sana ita!", //10
    "*Uhuk* Ma öjira mauwu gu? Löna ifake mbalu-mbalu mbawa.", //11
    nama + ": Ma u ila ya ba gatua.", 
    "Gawe:: Tola u adrö tolo be khönia mbalu-mbalu mbawa ha'a, Nogu?", 
    nama + ": Tola gawe.", 
    nama + ": Yai mbalu-mbalu mbawa wu moroi khö gawe u, fake wae ", //15
    "Lau, saohagöö!", // 16
    "Ina: Ma manavuli ndraugö nogu. Öli wae sabu fanasai tana ?", 
    nama + ": Haega ina?", 
    "Ina: Ba lafo Inau Ani.", 
    "Yani: Haya ni'alui, Nakhi?", //20
    nama + ": gu möli sabu fanasa tana.", //21
    "Yani: Oh, faigi manö baka.", 
    "Ani: Ya'ahowu, haya gömoli?", 
    nama + ": So sabu fanasa tana?", 
    "Ani: Oh,  so, Nakhi!", //25
    "Ma la södra sabu fanasa tana!", //26
    "Ina Saohagölö nogu . Böi olifu e fesasai tanau fatua möi ndraugö baomo",
    "Huhuiiii, masumasai danagu!",
    "Hore, Mbosi sisoföna ma'awali",
    nama + ": Yai sabu nia, ina.", //30
]
var txt2Nias = [
    "Ina: Tola gõ vasao gõ duamo laluo adra?", //0
nama + ": Lau, Ina.", //1
"Fanasa ba lala, e!",
"Sifanai omo: Hai, " + nama + " Urono Bu Joko magõna ya Covid.",
"Iraoni side-ide: Hosh...hosh…Fulu minite tõ gumofanõ.",
"Iraono side-ide: Hatsi...hatsi...", //5
nama + ": Ina, hana khõ nono u adra?", //6
"Ina-ina: Mo'eha ya, mo'ino, ba manaukhu-naukhu mboto nia. Ba gamõi rapid test.", 
nama + ": Oh. Alakha mea tena Covid e, Ina.", 
"Ina-ina: Saohagõlõ, Nogu.",
"Duada: UHUK UHUK", //10
nama + ": (He, gujumago gotaluada ha)", //11
nama + ": (Wah, aõjõ-aõjõ drao ha'a gumõi modroro õ duagu laluo adra)",
"Matõri: Na gõ fareso õ ndraugö, adra nomoro nia",
nama + ": Lõna gu fareso õ ndrao.",
"Ina-ina: Tolo arõu'õ draugõ, Nogu.", //15
"Samawa mbua: Haya ni'alui, Nakhi?",
nama + ": Lõna Ama. Saohagõlõ.",
nama + ": (Amada dra löna ifake mbalu-mabalu. Löna gumõli ga mbua adra.)",
"Ina-ina: Samawa roti noma'e haega mõi ya?",
"Samawa mbua: Aine õli. Awena wa so mbua dra.", //20
nama + ": Bologõdõdõu, lõnana mana, Ina.",
"Samawa sebvako: Haya ni'alui, Nakhi?",
nama + ": Oh, lona ni'aluigu hayaya, Ina.",
nama + ": Sabata wae, Haega so lala simõi ba menara ba haega latõrõ?",
"Onomatua: Oh, fuli draugõ ba lala noma'e nitõrõu sofõna.", //25
"Huhuiiii, masumasai danagu!", //26
"Duada: Ya'ahowy, " +nama+ " Na'lõna fasala drao, so nifabe'egõ Inau gõgu laluo adra.",
nama + ": E wa, Dua!",
nama + ": Yae gõu noma'e nifabe'egõ  Ninagu, Dua.",
"Duada: Oho, saohagõlõ.", //30
"Duada: Tola gõmõli sambua boto jabu sanulu ba toma khõ Neneu?", //31
nama + ": Tola manõ, Dua.",
"Duada: Saohagõlõ. Yai gefe mbõli nia dania.",
"Duada: Bõi olifugõ draugõ jago gotaluau ba niha, e!",
"Samawa mbua: Aine, Nakhi. Be fili manõ.Mbua adra sibohou na.", //35
nama + ": So toma, Ina?", //36
"Samawa mbua: So, Nakhi. Ha'a avfena so.",
nama + ": Lau, Ina. Hauga sabuku ha'a?",
"Samawa mbua: Rp10.000 (fulu ribu) manõ.",
nama + ": Lau, Ya'e gefe, Ina.", //40
"Samawa mbua: Saohagõlõ, Nakhi.", //41
"Samawa sembvako: Haya ni'aluiu, Nakhi?",
nama + ": So khõda sabu sanulu dre wa, Ina?",
"Samawa sembvako: So. Mbõlinia Rp10.000  (fulu ribu).",
nama + ": Lau, yae gefe.", //45
"Sabu sanulu mate'õli ae", //46
"Samawa sembvako: Saohagõlõ.", 
"Sifasina'omo: Oh, ma'ebua ae draugõ no. " + nama,
"Gawe: Ya'ahowu, " + nama +". So nifabe'egõ Duau khõu wa?",
nama + ": Gumõi na gane khõ Duagu, awe.", //50
"Huhuiiii, danagu tesasai!", //51
nama + ": yae jabu ba toma moroi ba fasa nifabe'egõ Duagu.", //52
"Gawe: Saohagõlõ. " +nama + ". Tolo hõtõi wa'e sasai, e.",
"Matesasai toma",
nama + ": Moa ma'usasai, Awe.", //55
"Gawe: Saohagõlõ. Aine, ae baka, ae wa'e baomo. Ta'inu tesi.",
nama + ": Lau, Dua.",
"Moa, mate'õli toma noma'e",
"Huhuiiii, awali ba mbosi si dua.",
nama + ": (Dau fake wae fanasa dana vfamunu tunõ).",


]
var txt3Nias = [
    "Solohe moto : saohagölö me ma etehe tola matolo ndraugö. Fareso faukhu mbotou fatua löna e rugi ba banua sebua.",
"Ono alawe: Na faukhu ma irugi 37,5 Celsius, tobai gömöi ba banua sebua.", //1
"lawe: He, hava ara sibai ha'a.",
"Ono matua: Hauga faukhu mö, ga'a ?",
"Niha si fareso faukhu: 36,8  Celsius. Tola möi draugö baka .",
"Niha si fareso faukhu: Dau fareso wae faukhu mö sabata, Nakhi.", //5
"Niha si fareso faukhu: 36,2 derajat. Be wae Kartu Kewaspadaan Kesehatan gane", //6
"Niha si fareso faukhu: He Nakhi, fareso Ö faukhu mö wae ga!",
"si fareso  KKK: Tola u fegi  Kartu Kewaspadaan Kesehatannya, Nakhi?",
nama + ": Yai, Ama.",
"Si fareso KKK: lau, adre hasil nia non-reaktif. Tola möi draugö ba banua sebua .", //10
 "Si fareso KKK: He, Nakhi, faleme ö khögu wae Kartu Kewaspadaan Kesehatan ga!", //11
"Soweli: Ina, hauga fefu rigi-rigi ba toma nia?",
"Samawa: Fefu Dua fulu a lima Rp25.000, Ina.",
"Samawa Bulu geu: Haya ni alui u, Nakhi?",
nama + ": (Ae löna ifake mbalu-balu mbawa inada ha'a  löna gu möli khö inada ha'a).", //15
 nama + ": löna, Ina.", //16
"Ina: Hmmm, Hegaso samawa bulu geu ba ha'a ga ?" ,
"Ama: He, hega so ono kusi guda?",
"Sojago fabri:  Hewae ba ginötö fökhö ha'a ba moguna mohalewe gö ndrao.",
"Ina: He, hegaso moto si jamajujugö ndrao?", //20
"Sojago moto:  He, hanata si be moto ha'a. Hava löna ibagasi fame moto ha'a .", //21
nama + ": So nisofugu, Haya naha haga? Hava löna la jago?",
"Matöri: Oh, nomo pasien ha'a pasien Covid-19.",
"Matöri: Amaoniö boto u, Nakhi. Böi irugi möi ndraugö baga ga .",
"Doto: Börö monönö oya  so fökhö Covid-19, sabata tö ya ahori naha ba ruma saki.", //25
"Doto: Na mofa'aukhu boto mö, moeha ba lö na mbörö geha, ae ndarugö ba ruma saki ", //26
"Samavwa: Ba ginötö fökhö ha'a, Oya sibai samavwa si marase.",
"Ono alawe: Ba ginötö fökhö ha'a, böi manö agö ba gotalua niha sato",
"Sohalöwö ba Covid: So ga sabua omo lalau isolasi börö Covid-19.",
"Sohalöwö ba gödo: Ba ginötö fökhö ha'a, Faoya niha si löna e halöwö nia .", //30
"Iraono: Moguna olaraga ndrao  .", //31
"Gawe: Ma ö jiira fo'omo gu wa?",
"Dua: Ma ö jiira ndrona gu wa?",
"Gawe : faigi lala u na ö ötö lala u .",
"Wartawan: Haya si tola niwae u ama khö niha sato mea löna gõna ira fõkhõ covid ?", //35
"Walikota: Rõrogõ gotalua khõ niha bõ'õ, Mifake mbalu-mbalu mbawa, ba bõi agõ ba dalu niha sato.", //36
"Wartawan: Na so niha lõna i amoniö ya fe o'õ nifahöi samatörö, hauga yabe ama?", 
"Walikota: Ba naha da dua notu a lima vwulu ribu (Rp250.000).", 
"Sohalõwõ ba Covid:He Alai, monõnõ manõ niha si mo fõkhõ ero maõkhõ.",
"Sohalõwõ ba Covid: Haya halõwõ mõ, Nakhi? Gõmõi folovwi levwatõ wa?", //40
nama + ": Ma eluno ndrao, Ama.", //41
"Sohalõwõ ba Covid: Ha'a levwatõ so fõkhõ Covid-19.",
"Sojago Lafo: Hava ara'e irugi bara hõ'õ .",
"Iwa: Ya'ahowu! " + nama + " ara lõna falakhi ita!",
nama + ": e ma ara e ita lõna falakhi-lakhi. He hava lõna õ fake mbalu-mbalu mbawa?", //45
"Iwa: Bõi atausi, ha ba fena nomo manõ, He ma ibaseõ draufõ akhigu.", //46
"Saudara: He maso draugö wa ! Hava ara e ndraugö? Gu möli mea khöu gö.",
nama + ": E fatua lõnana mõi ita ba  naha moto, la rapid wa'e ita. Mea lõna larõi ita moto sisofõna .",
"Iwa: Haya guna rapid?  Lõna e ufake mbalu-mbalu mbawa ba manõrõ-nõrõ e ndrao .",
nama + ": Bõi aoha si ba dõdõ! Oya e mana si gõna fokhõ Covid !", //50
nama + ": Na lõna gõ fake mbalu-mbalu mbawa, ya'o manõ si õli gõ. Gumanavuli matõ.", //51
nama + ": (Hmmm, gumõli dania mbalu-mbalu mbawa khõra ).",
"Saudara: Oh, saohagõlõ. Õli Õsa roti khõgu roti ba fasa Tolong sekalian .",
"Samawa: be mifili manö, Nakhi.",
nama + ": (Hmmm, löna ga somasi ni öli gu ).", //55
"Ina-ina: Hmmm, haya gömöli?", //56
"Samawa: Mbalu-mbalu mbawa lö? Ba lafo sitawali lafoku la amawa mbalu-mbalu mbawa .",
"Samawa: Ina, hauga fefu bulu geu, nagole, ba i'a nia?",
"Samawa: Efa wulu lima ribu (Rp45.000), Ina.",
"Samawa i'a ba bulu geu: Be mi fili manö, Nakhi i'a ba bulu geu ha'a  .", //60
"Samawa i'a ba bulu geu: Be mi fili manö, Nakhi i'a ba bulu geu ha'a.", //61
nama + ": Hauga sakilo i'a ha'a?",
"Samawa i'a: Telu nafla lima Rp35.000.",
nama + ": Be sakilo ina. Yai gefe nia.",
"Samawa i'a: Saohagölö.", //65
"Ina-ina: Hegaso wae samawa roti ga?", //66
"Samawa Nagole: Haya ni alui mö, Nakhi ?",
nama + ": ((Amada dra na ifake mbalu-mabalu. Lona gumõli khö nia.).", 
nama + ": Lõna Ama.", 
"Soweli: Ama, hauga fefu mbua ndra?", //70
"Samawa: Fefu lima wulu ribu Rp50.000, ina.", //71
"Samawa: Mifili mbua ha'a. Avenaso mbua ha'a .",
"Ina-ina: Ma fidra samawa roti ga, Nakhi.",
"Ma la öli i'a!",
"Samawa ba jina lala : Fasa? Adölö manö moroi ga, Nakhi.", //75
"Samawa: Mbalu-mbalu mbawa? Oh, Ba lafo sitafali ha'a, Nakhi!", //76
"Sohalöwö: Gu mae khö ama-ama hö'ö löna ifake mbalu-mbalu mbawa.",
"Ina-ina: Ina, ma mirono? ? So sabua nomo ba mbanua sebua la isolasi ba nomora!",
"Ina-ina: Ma urono ina. Monönö manö niha si göna Covid19.",
"Samawa: Hauga mbalu-mbalu mbawa ha'a na dombua?", //80
"Samawa baru: Dua wulu ribu, Ina.", //81
"Samawa roti: Fili roti nia.",
"Samawa roti: , Fili roti nia. Avena asoso.",
nama + ": Bö khögu tölu ?",
"Samawa Roti: Tölu nafulu ribu Rp30.000.", //85
nama + ": Yai gefe nia, Ama.", //86
"Samawa Roti: Saohagölö. Yai  roti nia.", 
"Ma la öli roti!",
"Samawa baru: Haya nialui mö, Nakhi?",
"Samawa baru : Haya nialui mö, Ka? So mbalu-mbalu mbawa si baga-baga ga .", //90
nama + ": Hauga efa mbalu-mbalu mbawa, Ina?", //91
"Samawa baru: öfa wulu ribu Rp40.000.", 
nama + ": Gu möli efa mbalu-mbalu mbawa, Ina. Yai gefe nia.", 
"Samawa baru: Saohagölö, yai mbalu-mbalu mbawa nia.", 
"Ma la öli mbalu-mbalu mbawa!", //95
nama + ": Haya ha'a ?", //96
"Petugas Covid: Nave mö ha'a ma la dörö, mea tola la isolasi ya börö ma positif Covid ya .",
nama + ":He, avena falakhi ndrao khönia.",
"Sohalöwö ba Covid: Na simane, la fareso göi ndrao . So halö-halö tes ni khö nave gu.",
"Hasil tes: Non-reaktif!", //100
"Sohalöwo ba  Covid: Moguna la isolasi ndraugö fele'eva hari  !",
"Ma'awai permainan ha'a. Saohaögölö ma famai draugö khöma.",  
"kabera banua sebua :" + "<br>" + "<ul>" +"<li> Fasa Baru </li>" +"<li> Ruma Saki  </li>" + "<li> Nomo </li>"+ "</ul>", //103    
"kabölö banua sebua :" + "<br>" + "<ul>" +"<li> Lewatö </li>" +"<li> Gödo Walikota </li>" + "<li> Fasa Lama </li>"+ "</ul>", //104
"Ma Avali Permaina, ma la tadru ndraugö moto.",
]

//minang
var indexTextMinang = [
    "Mulai baru",
    "Taruiahan pamainan",
    "Profil",
    "Kredit",
    "Jenis kelamin",
    "Piliah jenis kelamin awak",
    "Laki-laki",
    "Padusi",
    "Ubah Bahaso",
    "Namo",
    "Masuakan namo awak",
    "Baliak ke Menu Samulo",
]
var onloadTextMinang = [
    //level1
    "Salamaik datang di permainan Surviving Covid Labyrinth ko. Di siko awak ka bapatualang dalam situasi pandemi Covid-19." + "<br>" + "salamo bapatualang awak harus patuah ikuik protokol kesehatan, co manjago jarak aman, mambasuah tangan jo sabun, pakai cairan pambarasiahan tangan, gunoan masker, dan mainda karumunan.", //0
    "Di subalah suok ateh layar, ado garih kesehatan nan manunjuakan dima posisi kesehatan awak. Bilo garih tu abih, lah ka salasai permainan ko dan awak harus maulang dari mulo liak untuak  level tu.", //1
    "Patualangan awak di level 1 salasai kalau awak salamaik baliak ka rumah awak nan di ujuang rimbo." + "<br>" + "Sabalum batualang, ado eloknyo awak mangecek ka konco palangkin tu dulu." + "<br>"+ "Salamaik bapatualang!", //2
    //level2
    "Salamaik datang baliak. Di level ko awak taruihan patualangan wak. Patualangan dimuloi jo mangecek jo amak wak.", //3
    "Jan lupo untuk taruih  maikuti protokol kesehatan dek kito masih dalam maso pandemi Covid-19. Salamaik  manampuah patualangan  di level 2 ko.",//4
    // level 3
    "Salamaik, awak alah sampai level terakhir patualangan ko. Di level ko awak baru tibo di kota untuak manyilau dunsanakwak." + "<br>" + "Hati-hati katiko  manyubarang jalan. Tetap patuah jo protokol kesehatan, tarutamo manjago jarak aman, taruih mamakai masker, jo mainda  karumunan.", //5
    "Sabalun awak masuak kota, awak musti cek suhu jo caliakan Kartu Kewaspadaan Kesehatan wak. Salamaik bapatualang!", //6
    "Daftar barang yang harus dibeli:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Roti tawar </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Pamainan salasai. Awak dilantak oto.",
    "Pamainan alah salasai. Tingkek kesehatan awak alah abih",
]
var txt1Minang = [
    "Konco: Oii, ka pai kama tu? Ka mari lah dulu!", //0
    "Konco: Oi, jan lupo basuah tangan tu jo sabun yo!", //1
    "Konco: Jo mambasuah tangan, awak memastikan tangan awak tu barasiah, aman dari virus.",
    "Konco: Awak bisa mambasuah tangan di muko rumah ambo.",
    "Ondeeh, tangan wak alah tabasuah!",
    "Anak bujang: *Uhuk* Maaf yo, tenda ambo mangalangi jalan wak. Tapi, awak bisa lewaik disinan.", //5
    "Panjago gerbang: nakan, baa kok indak pakai  pakai masker? Ko ah masker untuak nakan.", //6
    "Alah dapek masker",
    "Penjaga Gerbang: Rancak tu, alah ba masker kini! Nah lalu lah.",
    nama + ": mokasii!" ,
    "Ingek yo, jago jarak taruih!", //10
    "*Ndeh* Lai awak mancaliak cucu den? Inyo indak bamasker wakatu pai.", //11
    nama + ": Oitu, ambo mancaliak nyo di rimbo.", 
    "Enek : Tolong ciek dih nak, agiahan masker ko ka inyo?", 
    nama + ": Jadih nek.", 
    nama + ": Ko  masker dari nenek angku. pakailah dulu!", //15
    "Jadih, mokasi yo!", // 16
    "Amak: Sayang, alah pulang wak. Tolong balian sabun cuci tangan ciek, y0?", 
    nama + ": Dima mak?", 
    "Amak: Di lapau Bu Ani.", 
    "Yani: Cari apo, awak ko?", //20
    nama + ": Ka mambali sabun cuci tangan.", //21
    "Yani: Jadih, masuak se lah.", 
    "Ani: Salamaik datang, a nan ka ba bali?", 
    nama + ": Ado sabun cuci tangan?", 
    "Ani: Tantu lai, ko ha. Jadilah, ko diak!", //25
    "Alah dapek sabun cuci tangan!", //26
    "Amak: Mokasi yo, Sayang. Jan lupo cuci tangan sabalun  masuak ka rumah, yo!",
    "Tangan lah tabasuah!",
    "Hore, level 1 salasai!",
    nama + ": Ko sabunnyo, Mak.", //30
]
var txt2Minang = [
    "Amak: Lai bisa wak maantaan makan siang ka Pak gaek?", //0
nama + ": Jadih, Mak.", //1
"Ati-ati  di jalan, yo!",
"Tetangga: Oii, " + nama + " tadanga  Bu Joko kanai Covid.",
"Anak ketek: Hosh...hosh…Aden harus pulang sapuluah minik lai.",
"Anak ketek: Hatsi...hatsi...", //5
nama + ": Mak, anaknyo baa?", //6
"Amak-amak: Inyo batuak, pilek, jo agak demam.Tu kami ka rapid test.", 
nama + ": Oh. Semoga indak Covid yo, Mak.", 
"Amak-amak: Mokasi, Nak.",
"Gaek-gaek: UHUK UHUK", //10
nama + ": (Ondeh mande, aden musti jago jarak mah)", //11
nama + ": (Wah, aden musti capek-capek maantaan  makanan Kakek)",
"Perawat: Kalau ka baubek, ko nomor antriannyo.",
nama + ": Maaf, ambo indak barubek doh. Mokasi.",
"Amak-amak: Tolong jago jarak, Nak.", //15
"Padagang buah: Cari apo, awak?",
nama + ": Indak Pak. Mokasi.",
nama + ": (Apak ko indak pakai masker. Ambo indak mambali buah di siko doh.)",
"Amak-amak: Tukang rotinyo kama, yo?",
"Padagang buah: Marilah, balilah buah ko. Buahnyo baru tibo.", //20
nama + ": Maaf, indak dulu, Mak.",
"Panjua kalontong: Mancari apo awak?",
nama + ": Oh, indak mancari apo-apo, Mak.",
nama + ": Numpang batanyo, jalan ka menara lewaik ma, yo?",
"Anak bujang: Oh, awak harus muta  jalan dari mulo.", //25
"Hore, tangan alah tabasuah!", //26
"Pak gaek: Oii, " +nama+ " Saingek Pak gaek, amak wak  manitipan bekal untuak Kakek.",
nama + ": Iyo, Gaek!",
nama + ": Ko bekal dari Amak untuak gaek.",
"Pak gaek: Oh, mokasi.", //30
"Pak gaek: Buliah minta tolong balian saboto sabun caia jo tomaik  untuak Enek ?", //31
nama + ": Iyo lah, gaek.",
"Pak gaek: Mokasi. Ko pitih nyo.",
"Pak gaek: Ingek taruih jago jarak, yo!",
"Padagang buah: Kamarilah, Nak. Piliah buahnyo. Buahnyo masih segar.", //35
nama + ": Ado tomaik, Mak?", //36
"Padagang buah: Ado, Nak. Nan iko baru datang.",
nama + ": Jadih, Mak. Bara haragonyo sabungkuih, Mak?",
"Padagang buah: Rp10.000 sajo.",
nama + ": Jadih, ko pitih nyo, Mak.", //40
"Padagang buah: Mokasi, Nak.", //41
"Panjua kalontong: Ka mancari apo, Nak?",
nama + ": Sabun caia ado, Mak?",
"Panjua kalontong: Ado. Rp10.000 haragonyo.",
nama + ": Jadih, ko pitihnyo.", //45
"Sabun caia alah tabali", //46
"Panjua kalontong: Mokasi.", 
"Tetangga: Ndeh, alah gadang awak, yo. " + nama,
"Enek : Oii, " + nama +". Apo ado titipan dari Pak gaek wak?",
nama + ": Ambo  ka tampaik  Pak gaek dulu, Nek.", //50
"Hore, tangan alah tabasuah!", //51
nama + ": Ko sabun jo tomaik dari pasa titipan Pak gaek.", //52
"Enek : Mokasi. " +nama + ". Tolong dibasuah dulu, yo.",
"Tomat alah tabasuah",
nama + ": Alah ambo basuah, Nek.", //55
"Enek : Mokasi. Kamarilah, masuak dulu.Kito minum teh di dalam.",
nama + ": Jadih, Kek.",
"Tomaik alah tabali",
"Hore, level 2 salasai.",
nama + ": (Den pakai cairan pambarasiah ko dulu).",


]
var txt3Minang = [
    "Sopir oto: Mokasi alah mamakai jaso kami. Colah cek suhu tubuh di sinan sabalun masuak kota.",
"Anak gadih: Kalau suhu kamu di atas 37,5 derajat Celsius, kamu tidak boleh masuk kota ya.", //1
"Anak gadih: Ndeh, lamo nyo lai.",
"Anak bujang: Bara suhu ambo, Uni?",
"Pamareso suhu: 36,8 derajat Celsius. Masuaklah.",
"Pamareso suhu: Ambo cek suhunyo sabanta yo, Diak.", //5
"Pamareso suhu: 36,2 derajat. Co caliakan Kartu Kewaspadaan Kesehatan di sinan", //6
"Pamareso suhu: Diak, cek suhu dulu di siko!",
"Pamareso KKK: Buluih liek Kartu Kewaspadaan Kesehatannyo, Diak?",
nama + ": Iko, Pak.",
"Pamareso KKK: Jadih, hasil tes non-reaktif. Silakan masuak kota.", //10
 "Pamareso KKK: Diak, tunjukanlah Kartu Kewaspadaan Kesehatan di siko!", //11
"Pambali: Mak, jadi bara total jaguang dan tomaiknyo?",
"Tukang sayua: Totalnya Rp25.000.",
"Tukang sayua: Cari apo, diak?",
nama + ": (Ondeh, amak ko indak mamakai masker. Den indak balanjo ka inyo doh).", //15
 nama + ": Indak, Mak.", //16
"Amak-amak: Ndeh, nan manggaleh sayua di siko kama, yo?",
"Bapak-bapak: Ndeh, kunci gudang dima den latakan, yo?",
"Panjago pabirik: Aden musti tetap karajo kareh bia masih pandemi.",
"Amak-amak: Ndeeh, ma nanmanjapuik ko?", //20
"Tukang parkir: Ondeh mandeh, iko nan parkir bus ko kama,  yo? Baa  parkir sumbarangan.", //21
nama + ": Tanyo ciek, iko tampaik apo? Baa kok dijago?",
"Perawat: Oh, iko rumah karantina pasien Covid-19.",
"Perawat: Jago kesehatan ya, diak. Jan sampai masuak lo wak ka siko.",
"Doto: Karano pasien Covid-19 alah samakin banyak, kapasitas di rumah sakik alah ndak cukuik lo.", //25
"Doto: Kalau awak damam, batuak karing, atau pilek, capek  pareso  ka rumah sakik, yo.", //26
"Pengusaha: Di maso pandemi ko, banyak pengusaha nan  bisnisnya kanai.",
"Anak gadih: Katiko pandemi, indailah bakumpua jo urang-urang.",
"Satgas Covid: Di siko ado sakaluarga nan sadang isolasi mandiri karano Covid-19.",
"Pegawai: Katiko pandemi co iko banyak urang nan keilangan karajo.", //30
"Anak ketek: Aden musti rajin barolahraga.", //31
"Enek-enek: Nak, apo awak maliek suami ambo?",
"Gaek-gaek: Nak, apo awak mancaliak istri ambo?",
"Enek-enek: Katiko manyubarang jalan, mesti ati-ati, yo nak.",
"Wartawan: Apo  nan ka Apak kecekan ka  masyarakat supayo indak kanai  Covid?", //35
"Walikota: Tatoklah manjago jarak aman, taruih pakai masker, jo indak bakarumun.", //36
"Wartawan: Bara dando urang nan malangga protokol Covid-19, Pak?", 
"Walikota: Di tampaik  kito Rp250.000.", 
"Petugas Covid: Ondeh, jumlah korban batambah taruih tiok hari.",
"Petugas Covid: Ado urusan apo, diak? Ka mancaliak pusaro , yo?", //40
nama + ": Ambo sasek, Pak.", //41
"Petugas Covid: Iko pusaro korban Covid-19.",
"Penjago toko: Ondeh, lamo na barang tu sampai.",
"Dunsanak: Oiii! " + nama + " lamo indak basuo!",
nama + ": Yo, lamo indak basuo. Baa awak di lua indak pakai masker?", //45
"Dunsanak: Tanang selah, di muko rumah se nyo! Tuh, adik ambo alah  manunggu awak.", //46
"Dunsanak: Oii, awak alah tibo! Baa lamo nak? Ambo nio mambalian awak makan.",
nama + ": Iyo, sabalun ka terminal bis ambo rapid dulu. Jadi tadi tatingga bus partamo.",
"Dunsanak: Untuak apo rapid? Ambo jo acok indak ba  masker kalau pai-pai.",
nama + ": Jan anggap remeh! Samakin hari samakin banyak nan tatula tau!", //50
nama + ": Kalau awak indak amuah  pakai masker, bia ambo se nan  bali makan. Beko wak baliak liak.", //51
nama + ": (Hmmm, beko den balian masker untuak urang-urang tu).",
"Dunsanak: Oh, mokasi. Tolong sakalian bali roti di Pasa Baru.",
"Padagang barang: Yo, piliahlah barang tu, Diak.",
nama + ": (Hmmm, barang nan ka den bali indak ado di siko).", //55
"Amak-amak: Hmmm, bali apo, yo?", //56
"Penjual: Cari masker yo, Diak? Kadai di subalah kadai dunsanak ambo di Pasa Lamo manjua masker.",
"Pambali: Uni, jadi bara harago kasado sayua, dagiang, jo ikannyo?",
"Penjual: Rp45.000, Uni.",
"Padagang ikan jo sayua: Piliah-piliahlah, Diak ikan jo sayuanyo.", //60
"Padagang ikan jo sayua: Piliahlah, diak sayua jo ikannyoa.", //61
nama + ": Bara harago sakilo ikan, Uni?",
"Padagang Ikan: Rp35.000.",
nama + ": Jadih, bali sakilo yo, Bu. Iko pitihnyo.",
"Padagang Ikan: Mokasi. Iko balanjoaan awak yo.", //65
"Amak-amak: Tukang  roti nan biaso di sinan kama, yo?", //66
"Padagang dagiang: Cari apo, Diak?",
nama + ": (Ondeh, apak tu indak bamasker. Aden indak balanjo ka inyo doh).", 
nama + ": Indak, Pak.", 
"Pambali: Pak, harago buahnyo jadi bara sadonyo?", //70
"Padagang buah: Jadi sadonyo  Rp50.000, Uni.", //71
"Padagang buah: Balilah balilah, Diak. Buahnyo segar mah.",
"Amak-amak: Tukang roti di sinan, pindah ka Pasa Lamo, Diak.",
"Ikan tabalii!",
"Padagang kaki limo: Pasa? Oh, cukuik bajalan luruih dari siko se, Diak.", //75
"Padagang: Masker? Oh, bisa bali di kadai subalah, Diak!", //76
"Petugas: Ambo ka mangecek ka apak nan indak bamasker tu.",
"Amak-amak: Uni, alah mandanga? Kabanyo  ado sakeluarga besar di tangah  kota nan diisolasi di rumah mah!",
"Amak-amak: Iyo. Jumlah urang nan kanai Covid-19 batambah taruih.",
"Pambali: Bara harago duo masker ko, Mak?", //80
"Padagang baju: Rp20.000, Uni.", //81
"Panjua ruti: Bali balilah rotinyo, Diak.",
"Panjua ruti: Balilah bali, Diak. Rotinyo masih angek.",
nama + ": Tigo bungkuih roti ko bara, Pak?",
"Panjua ruti: Rp30.000, diak.", //85
nama + ": Jadih, ko pitihnyo, Pak.", //86
"Panjua ruti: Mokasi. Iko rotinyo.", 
"Roti tabalii!",
"Padagang baju: Cari apo, Diak?",
"Padagang baju: Cari apo, Diak? Maskernyo rancak-rancak mah.", //90
nama + ": Bara harago ampek masker, Uni?", //91
"Padagang baju: Rp40.000, Diak.", 
nama + ": Jadih, ambo bali ampek masker, Bu. Ko pitihnyo.", 
"Padagang baju: Tarimo kasih. Iko maskernyo.", 
"Masker tabalii!", //95
nama + ": Ado apo ko?", //96
"Petugas Covid: Kawan awak ko ambo bao  untuak isolasi karano hasil tesnyo positif Covid.",
nama + ": Ondeh, ambo baru basobok jo inyo tadi.",
"Petugas Covid: Kalau bitu sanak harus dites juo. Alat tesnyo ado di  kawan ambo.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Awak harus isolasi mandiri salamo 14 ari. Sampai basuo liak!",
"Permainan salasai. Tarino kasih alah mamainkan permainan ko.",  
"Kida kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Suok kota:" + "<br>" + "<ul>" +"<li> Pusaro  </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lama </li>"+ "</ul>", //104
"Pamainan salasai. Awak dilantak oto.",

]

// jambi 
var indexTextJambi= [
    "Mulai Maen",
    "Lanjutkan maen", //1
    "Data diri",
    "Kredit",
    "Jenis Kelamin",
    "Pilih jenis kelamin kau", //5
    "Lanang",//6
    "Betino",
    "Ubah Bahaso",
    "Namo",
    "Ketik namo", //10
    "Balek ke Menu utamo",
]
var onloadTextJambi = [
    // level 1
    "Selamat datang di permaenan Surviving Covid Labyrinth ni. Dalam permaenan ni, ceritonyo kau bertualang slamo pandemi Covid-19." + "<br>" + "Slamo betualang kau harus ngikuti protokol kesehatan, misalnyo jago jarak, cuci tangan pake sabun, pake cairan pembersih tangan, pake masker, samo hindari rame-rame.", //0
    "Di bagian kanan atas layar ado garis kesehatan kau. Kalau garis itu abis, permaenan abis jugo. Jadi, kau harus ngulang maen dari depan level tu.", //1
    "Petualangan kau di level 1 selesai kalu kau selamat balek ke rumah kau di ujung utan." + "<br>" + "Sebelum betualang, kau pamit dululah samo kawan baek kau." + "<br>"+ "Selamat betualang!", //2
    // level 2
    "Selamat datang . Di level ni kau melanjutkan petualangan kau. Petualangan ni kau mulai dengan becakap-cakap dulu samo mamak kau.", //3
    "Jangan lupo tetap ngikuti protokol kesehatan karno kito ni masih pandemi Covid-19.Selamat betualang di level 2.",//4
    // level 3
    "Selamat, kau la sudah sampe level terakhir petualangan kau. Di level ini kau baru tibo di kota, nak mengunjungi saudaro kau." + "<br>" + "Hati-hati kalau nyeberang jalan. Tetap patuhi protokol kesehatan, terutamo jago jarak aman, make masker, dan hindari rame-rame.", //5
    "Sebelum masuk kota, kau harus cek suhu badan samo nunjuki Kartu Kewaspadaan Kesehatan kau. Selamat bertualang!", //6
    "Daftar barang yang harus dibeli:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Roti </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Permaenan abis. Kau ditabrak mobil.",
    "Permaenan abis. Garis kesehatan kau abis.",
]
var txt1Jambi = [
    "Kawan: Hoy, nak ke mano kau? Sini dulu!", //0
    "Kawan: Hoy, jangan lupo cuci tangan pake sabun!", //1
    "Kawan: Kalu kau nyuci tangan kau, tangan kau bersih, aman dari virus.",
    "Kawan: Kau biso cuci tangan di depan rumah aku.",
    "Hore, tangan kau la tecuci!",
    "Pemudo: *Uhuk* Maap, tendo aku ni ngalangi jalan kau. Kau bisolah lewat jalan sano.", //5
    "Penjago  Gerbang: Ngapo pulak kau dak make masker? Ni masker untuk kau.", //6
    "Dapat maskernyo",
    "Penjago Gerbang: Bagus, kau la make maskernyo! Lewatlah!",
    nama + ": Mokasih!" ,
    "Ingat yo, jago jarak terus!", //10
    "*Uhuk* Kau nengok cucuku, dak? Waktu dio pegi tadi, dak pulak pake masker.", //11
    nama + ": Oh, sayo nengok dio di utan.", 
    "Nyai: Biso kau bantu Nyai bawa masker ni ke dio, Cung?", 
    nama + ": Bisolah, Nyai.", 
    nama + ": Masker ni dari nyai kau. Pakelah dulu!", //15
    "Yolah. Mokasih, yo!", // 16
    "Mamak: Kau la balek. Biso dak beli sabun cuci tangan dulu?", 
    nama + ": Di mano, Mak?", 
    "Mamak: Di warung  Nyai Ani be.", 
    "Yani: Nyari apo, Dek?", //20
    nama + ": Aku nak beli sabun cuci tangan.", //21
    "Yani: Oh, masuk dalam be.", 
    "Ani: Nak beli apo?", 
    nama + ": Ado sabun cuci tangan, dak?", 
    "Ani: Ado. Ni!", //25
    "Sabun cuci tangan la didapat!", //26
    "Mamak: Mokasih. Jangan lupo cuci tangan kau kalu nak masuk rumah, yo!",
    "Tangan la tercuci!",
    "Asyik, level 1 abis!",
    nama + ": Ni sabunnyo, Mak.", //30
]
var txt2Jambi = [
    "Mamak: Kau biso antar makan siang untuk Datuk, dak?", //0
nama + ": Iyo, Mak.", //1
"Hati-hati di jalan!",
"Tetanggo: Hoy, " + nama + " Aku dengar Bu Joko keno Covid.",
"Budak kecik: Hosh...hosh…10 menit lagi aku harus balek.",
"Budak kecik: Hatsi...hatsi...", //5
nama + ": Knapo anaknyo, Yuk?", //6
"Mak-mak: Dio batuk, pilek. Agak demam jugo. Jadi kami nak rapid test.", 
nama + ": Oh. Semoga  bukan Covid yo, Yuk .", 
"Mak-mak: Mokasih, Dek.",
"Datuk: UHUK UHUK", //10
nama + ": (Walah, aku harus jago jarak.)", //11
nama + ": (Waduh, aku harus cepat-cepat ngantar makanan Datuk",
"Perawat: Kalu nak berobat, ini nomor antriannyo.",
nama + ": Sayo dak berobat. Mokasih.",
"Mak-mak: Jago jarak, Dek.", //15
"Tukang buah: Cari apo, Dek?",
nama + ": Idak, Pak. Mokasih.",
nama + ": (Bapak ni idak make masker. Aku dak ndak beli buah samo dio)",
"Mak-mak: Tukang roti di siko ke mano yo?",
"Tukang buah: Ayo, dibeli, Dek. Baru datang buahnyo ni.", //20
nama + ": Idak dulu, Nyai.",
"Penjual sembako: Cari apo, Dek?",
nama + ": Oh, idak, Nyai.",
nama + ": Permisi, jalan ke menaro tu lewat mano,  yo?",
"Orang mudo: Oh, kau harus mutar jalan dari ujung sano.", //25
"Hore, tangan la tecuci!", //26
"Datuk: Halo, " +nama+ " Seingat Datuk, mamak kau nitip makanan untuk Datuk.",
nama + ": Iyo, Tuk!",
nama + ": Ni makanan dari Mamak untuk Datuk.",
"Datuk: Mokasih, Cung.", //30
"Datuk: Kau biso bantu belikan sebotol sabun cair samo tomat untuk Nyai?", //31
nama + ": Bisolah, Tuk.",
"Datuk: Mokasih. Ni duitnyo.",
"Datuk: Jangan lupo tetap jago jarak, yo!",
"Tukang buah: Payo, Dek. Dipilih buahnyo. Masih segar.", //35
nama + ": Ado tomat, Nyai?", //36
"Tukang buah: Ado, Dek. Yang ni baru be datang.",
nama + ": Baik, Nyai. Sebungkus ni berapo hargonyo?",
"Tukang buah: Rp10.000 bae.",
nama + ": Iyolah, ini duitnyo, Nyai.", //40
"Tukang buah: Terima kasih, Dek.", //41
"Penjual sembako: Cari apo, Dek?",
nama + ": Sabun cair ado, Nyai?",
"Penjual sembako: Ado, Dek. Rp10.000 hargonyo.",
nama + ": Yo, ni duitnyo.", //45
"Sabun cair la dibeli", //46
"Penjual sembako: Terimo kasih.", 
"Tetanggo: Oh, kau la besak, yo. " + nama,
"Nyai: Halo, " + nama +". Apo ado titipan dari datuk kau?",
nama + ": Sayo ke tempat Datuk dulu, Nyai.", //50
"Tangan la tecuci!", //51
nama + ": Ni sabun samo tomat dari pasar titipan Datuk.", //52
"Nyai: Terimo kasih. " +nama + ". Tolong dicuci dulu, yo.",
"Tomat la tecuci",
nama + ": La sudah sayo cuci, Nyai.", //55
"Nyai: Mokasih. Ayok, masuk. Kito minum teh di dalam.",
nama + ": Iyo, Tuk.",
"Tomat la tebeli",
"Asyik, level 2 abis!",
nama + ": (Aku pake cairan pembersih dulu).",


]
var txt3Jambi = [
"Sopir bis: Terimo kasih la pake bis kami. Cek dulu suhu badan di situ, sebelum masuk ke kota.",
"Pemudi: Kalu suhu kau di atas 37,5 derajat Celsius, kau tidak boleh masuk kota.", //1
"Pemudi: Aduh, lamo nian!",
"Pemudo: Berapo suhu sayo, Yuk?",
"Pemerikso suhu: 36,8 derajat Celsius. Payu, masuk.",
"Pemerikso suhu: Aku cek suhu kau sebentar yo, Dek.", //5
"Pemerikso suhu: 36,2 derajat Celsius. Tunjuki Kartu Kewaspadaan Kesehatan di sano", //6
"Pemerikso suhu: Cek suhu di sini dulu, Dek!",
"Pemerikso KKK: Boleh aku tengok Kartu Kewaspadaan Kesehatannyo, Dek?",
nama + ": Ni, Bang.",
"Pemerikso KKK: Hasil tes non-reaktip. Silakan masuk kota.", //10
 "Pemerikso KKK: Dek, tunjuki dulu Kartu Kewaspadaan Kesehatan kau di sini?", //11
"Pembeli: Bu, jadi berapo hargo jagung samo tomatnyo?",
"Penjual sayur: Galo-galo Rp25.000.",
"Penjual sayur: Cari apo, Dek?",
nama + ": (Wah, nyai ni dak make masker. Aku dak ndak belanjo samo diolah).", //15
 nama + ": Idak, Nyai.", //16
"Mak-mak: Hmmm, tukang sayur yang biaso di sini ke mano, yo?",
"Bapak-bapak: Hais, kunci gudangnyo aku taruh di mano pulak tadi?",
"Penjago pabrik: Aku harus tetap kerjo keras meski masih pandemi.",
"Mak-mak: Hais, yang jemput mano, yo?", //20
"Tukang parkir: Wah, yang parkir bis ni ke mano pulak? Markir sekehendaknyo bae.", //21
nama + ": Numpang tanyo, tempat apo ni? Ngapo dijago?",
"Perawat: Oh, rumah karantina untuk pasien Covid-19.",
"Perawat: Jago kesehatan, Dek. Jangan sampe kau masuk ke siko.",
"Dokter: Pasien Covid-19 la makin banyak. Rumah sakit jugo makin bekurang kapasitasnyo.", //25
"Dokter: Kalu kau demam, batuk kering, apo pilek, cepat-cepatlah perikso ke rumah sakit.", //26
"Pengusaho: Di maso pandemi ni banyak pengusahao yang usahanyo keno.",
"Pemudi: Maso pandemi macam ni, janganlah ngumpul-ngumpul samo orang.",
"Satgas Covid: Di sini ado sekeluargo yang lagi isolasi mandiri karno Covid-19.",
"Pegawai: La banyak orang berenti kerjo di maso pandemi ni.", //30
"Budak kecik: Aku harus rajin olahrago.", //31
"Nyai-nyai: Cung, apo kau nengok laki aku?",
"Datuk-datuk: Cung, apo kau nengok bini aku?",
"Nyai-nyai: Kalu nyeberang jalan, ati-ati.",
"Wartawan: Apo pesan Bapak untuk masyarakat biak dak tertular Covid?", //35
"Walikota: Tetap jago jarak aman, pake masker terus, samo jangan ngumpul rame-rame.", //36
"Wartawan: Kalu mlanggar protokol Covid-19, didendo berapo, Pak?", 
"Walikota: Di wilayah kito Rp250.000.", 
"Petugas Covid: Aduh, jumlah korban nambah terus tiap ari.",
"Petugas Covid: Ado urusan apo, Dek? Nak nyekar?", //40
nama + ": Sayo nyasar, Pak.", //41
"Petugas Covid: Ni kuburan korban Covid-19.",
"Penjago toko: Aduh, barangnyo lamo nian nyampenyo.",
"Saudaro: Hoy! " + nama + " la lamo dak jumpo kito!",
nama + ": Ya, lamo dak jumpo. Ngapo kau di luar dak pake masker?", //45
"Saudaro: Tenang bae. Aku di depan rumah be. O iyo, adek aku la nunggu kau.", //46
"Saudaro: Hoy, kau la sampe! Ngapo lamo nian? Aku baru nak pegi beli makanan kau.",
nama + ": Iyo. Aku tes rapid dulu sebelum ke terminal bis. Jadi tadi ketinggalan bis petamo.",
"Saudaro: Buat apo pulak kau tes rapid? Aku be sering dak pake masker kalu pegi-pegi.",
nama + ": Jangan anggap enteng! Makin ari, makin banyak yang tertular.", //50
nama + ": Kalu kau dak ndak make masker, aku belah yang pegi beli makan. Kagek aku balek lagi.", //51
nama + ": (Hmmm, kagek aku beli masker jugo untuk dio).",
"Saudaro: Oh, terimo kasih. Sekalian beli roti di Pasar Baru, yo?",
"Penjual barang: Payu dipilih barangnyo, Dek.",
nama + ": (Hmmm, barang yang nak kubeli dak tek di sini nampaknyo).", //55
"Mak-mak: Hmmm, beli apo, yo?", //56
"Penjual: Cari masker yo, Dek? Toko di samping toko saudaro aku di Pasar Lama ado jual masker.",
"Pembeli: Sayur, daging samo ikan ni berapo hargonyo galo?",
"Penjual: Rp45.000.",
"Penjual Ikan samo sayur: Payu, dipilih ikan samo sayurnyo, Dek.", //60
"Penjual Ikan samo sayur: Payu, dipilih ikan samo sayurnyo, Dek.", //61
nama + ": Berapo hargo ikan ni sekilo, Nyai?",
"Penjual Ikan: Rp35.000, Dek.",
nama + ": Oh, beli sekilo yo, Nyai. Ni duitnyo.",
"Penjual Ikan: Terimo kasih. Ni ikanyo.", //65
"Mak-mak: Penjual roti yang biaso di situ ke mano, yo?", //66
"Penjual daging: Cari apo, Dek?",
nama + ": (Waduh, bapak tu idak make masker. Aku dak belanjo samo diolah).", 
nama + ": Idak, Pak.", 
"Pembeli: Pak, jadinyo berapo hargo buahnyo galo?", //70
"Penjual buah: Galonyo Rp50.000.", //71
"Penjual buah: Dibeli buahnyo, Dek. Masih segar.",
"Mak-mak: Tukang roti di sano, la pindah ke Pasar Lama, Dek.",
"Ikan tebeli!",
"Pedagang kaki-limo: Pasar? Oh, jalan lurus dari sini bae, Dek.", //75
"Penjual: Masker? Oh, biso beli di toko samping, Dek!", //76
"Petugas: Aku nak negur bapak yang dak pake masker tu.",
"Mak-mak: Nyai la dengar? Ado sekeluargo besak di pusat kota yang diisolasi di rumah!",
"Nyai-nyai: Iyo. Orang yang keno Covid-19 nambah terus.",
"Pembeli: Berapo hargo dua masker ni?", //80
"Penjual baju: Rp20.000.", //81
"Penjual roti: Nak beli rotinyo, Dek?",
"Penjual roti: Payu, dibeli, Dek. Rotinyo masih angat.",
nama + ": Tigo bungkus roti ni berapo, Pak?",
"Penjual Roti: Rp30.000.", //85
nama + ": Ni uangnyo, Pak.", //86
"Penjual Roti: Terimo kasih. Ni rotinyo.", 
"Roti tebeli!",
"Penjual baju: Cari apo, Dek?",
"Penjual baju: Cari apo, Dek? Maskernyo bagus-bagus.", //90
nama + ": Berapo hargo empat masker ni, Nyai?", //91
"Penjual baju: Rp40.000, Dek.", 
nama + ": Yo, sayo beli, Nyai. Ni duitnyo.", 
"Penjual baju: Mokasih. Ni maskernyo.", 
"Masker tebeli!", //95
nama + ": Ado apo ni?", //96
"Petugas Covid: Kawan kau ni Bapak bawa isolasi. Hasil tes dio positif Covid.",
nama + ": Wah, tadi sayo baru ketemu dio.",
"Petugas Covid: Kalu gitu kau harus dites jugo. Kawan aku punyo alat tesnyo.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Kau harus isolasi mandiri selamo 14 ari. Sampe jumpo!",
"Permaenan abis. Terimo kasih la maen permaenan ni.",  
"Kiri kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanan kota:" + "<br>" + "<ul>" +"<li> Kuburan </li>" +"<li> Kantor walikota </li>" + "<li> Pasar lama </li>"+ "</ul>", //104
"Permaenan abis. Kau ditabrak mobil.",
]

// kerinci
var indexTextKerinci = [
    "Mulae Baheu",
    "Lanjut maae",
    "Profil",
    "Kredit",
    "Jantua/tinao",
    "Pilaih jantua/tinao",
    "Jantua",
    "Tinao",
    "Ubuah baso",
    "Namo",
    "Masauk namo ikao",
    "Baloik ka menu utama",
]
var onloadTextKerinci = [
    // level 1
    "Selamat datua kek permainan Surviving Covid Labyrinth. Kek permainan ineh, ikao berpetualang dalam situasi pandemi Covid-19." + "<br>" + "Salamo berpetualang ikao harus mengikuti protokol kesehatan, misal manjago jarak aman, masouh jahoi dingan sabeun, make cairan pembersih tangan, make masker, dan iduak baimpoiq-impoiq.", //0
    "Seloh kana ateh layar, adea garis kesehatan nge mageih taau tingkat kesehatan ikao. Kok garis toh aboih, mako permainan salesae, ikao harus ngulang lao dari awal untuk level itoh.", //1
    "Petualangan ikao di level 1 lah salesae kalo ikao salamaq baloik kumah kek ujun imbao." + "<br>" + "Sebelum bertualang, ilaoq lah ikao ngatao nguse kantei ikao." + "<br>"+ "Selamat berpetualang!", //2
    // level 2
    "Selamat datang kembali. Di level ineh ikao melanjutkan petualangan. Petualangan dimulae dingan bakicaek nge Mak.", //3
    "Mok kalupan protokol kesehatan. Kitao neh agih maso pandemi Covid-19. Selamat menempuh petualangan di level 2 ineh.",//4
    // level 3
    "Selamat, ikao lah sampae level terakhir petualangan ikao. Di level ineh ikao bahu tibea kek dusen, ndok nguse padik." + "<br>" + "Ati-ati nyaberon jalua. Tetap patuhi protokol kesehatan, apolagi jago jarak aman, make masker, mok bakumpau kek uha banyuak.", //5
    "Sebelum ikao masauk dusen, ikao harus cek suhu, magih  Kartu Kewaspadaan Kesehatan ikao. Selamat bertualang!", //6
    "Daftar baron nge ndok dibeloi:" + "<br>" + "<ul>" +"<li> Laauk </li>" +"<li> Rutei tawa </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Lah aboih. Ikao diarak uto.",
    "Lah aboih. Ikao iduak sihaq agih.",
]
var txt1Kerinci = [
    "Kantei: Hai, ikao ndoq kanao? Kahei duleu!", //0
    "Kantei: Hai, moq kalupan masouh jahoi nge saben yea!", //1
    "Kantei: Kalo ikao masouh jahoi, jahi ikao bersoih, lahai virus.",
    "Kantei: Ikao bisua masouh jahoi muko umoh akau.",
    "Hore, jahi kao suduah masuh!",
    "Pemuda: *Uhuk* Maaf yea, tendaku ngalan jalon ikao. Tapi, ikao bisua jalua itou.", //5
    "Satpam: Piyao ikao iduak make masker? Ineh masker untuk ikao.", //6
    "Dapuak masker",
    "Satpam: Haa itoh nyo, ikao lah make masker! Jalua lah inei.",
    nama + ": Tarimo kasih!" ,
    "Ingak yea! Jago jarak aman, yea!", //10
    "*Uhuk* Adea ikao ngimok cucou akeu? Nyo iduak make masker lalau tadeh.", //11
    nama + ": Oh, akau ngimok nyo kek imbao.", 
    "Tino: Bisua mintak tulau magih masker ineh ndok nyo?", 
    nama + ": Iyea lah.", 
    nama + ": Ineh masker dari tino ikao. Pakae lah!", //15
    "Oke, tarimo kasih!", // 16
    "Mak: Ikao lah baloik. Tulau beloi saben untuk masoih jahoi, yea?", 
    nama + ": Kek manao, Mak?", 
    "Mak: Kek kede Indouk Ani.", 
    "Yani: Ndok melei apo?", //20
    nama + ": Ndok melei sabun untuk masouh jahoi.", //21
    "Yani: Oh, masauk woa lah.", 
    "Ani: Selamat datang, ndok melei apo?", 
    nama + ": Adea sabun untuk masoih jahoi?", 
    "Ani: Oh, adea. Ineh!", //25
    "Dapuak sabun untuk masouh jahoi!", //26
    "Mak: Tarimo kasih. Mok kalupan masouh jahoi sebelum masauk kumah, yea!",
    "Jahoi bersoih!",
    "Hore, level 1 salesae!",
    nama + ": Ineh sabun, Mak.", //30
]
var txt2Kerinci = [
    "Mak: Isua ikao ngantak gule untuk nantan?", //0
nama + ": Iyea, Mak.", //1
"Ati-ati, yea!",
"Uha seloh umah: " + nama + " Adea ikao taau, Indouk Joko keno Covid.",
"Anok nek: Hosh...hosh… Akau ndok baloik sapuluh menit gih.",
"Anok nek: Hatsi...hatsi...", //5
nama + ": Itek, piyao anok, Tek?", //6
"Indouk-indouk: Nyo bateuk, pilek, agok kademon. Jadi kamai ndok rapid test.", 
nama + ": Oh. Semoga iduak Covid yea, Tek.", 
"Indouk-indouk: Tarimo kasih.",
"Nantan: UHUK UHUK", //10
nama + ": (Alah, akau harus jago jarak neh)", //11
nama + ": (Wah, akau harus cepak nganta gule nantan)",
"Perawat: Kalo ndok baubuak, ineh nomor antrian.",
nama + ": Maaf, akeu iduak baubuak. Tarimo kasih.",
"Indouk-indouk: Tulau jago jarak.", //15
"Uha bajago buwah: Nalok apo?",
nama + ": Iduak Pak. Tarimo kasih.",
nama + ": (Uha ineh iduak make masker. Akeu iduak melei buah inei.)",
"Indouk-indouk: Tukang rutei kanao, yea?",
"Uha bajago buwah: Ndok melei ineh. Buah neh bahu datua.", //20
nama + ": Maaf, iduak, Tek.",
"Uha bajago sembako: Nalok apo?",
nama + ": Oh, ijia, Tek.",
nama + ": Permisi, jalon ke menara manao, yea?",
"Pemuda: Oh, ikao harus baputa dari petamo.", //25
"Hore, jahoi lah bersoih!", //26
"Nantan: Halo, " +nama+ " Saingak nantan, Mak niteik gule ndok nantan.",
nama + ": Iyea, Ntan!",
nama + ": Ineh gule dari Mak untuk Nantan.",
"Nantan: Oh, tarimo kasih.", //30
"Nantan: Bisua tulau melei sabun cair nge tomat untuk Tino?", //31
nama + ": Iyea, Ntan.",
"Nantan: Tarimo kasih. Ineh kipe.",
"Nantan: Ingak, jago jarak, yea!",
"Uha bajago buwah: Mari. Dipileih woa buwoh neh. Buwoh gih segar.", //35
nama + ": Adea tomat, Tek?", //36
"Uha bajago buwah: Adea. Nge ineh baheu.",
nama + ": Iyea, Tek. Apea sabungkuh neh?",
"Uha bajago buwah: Rp10.000.",
nama + ": Ineh kipe, Tek.", //40
"Uha bajago buwah: Tarimo kasih.", //41
"Uha bajago sembako: Nalok apo?",
nama + ": Sabun cair adea, Tek?",
"Uha bajago sembako: Adea. Rp10.000 hargo.",
nama + ": Iyea lah, ineh kipe.", //45
"Suduah melei sabun cair", //46
"Uha bajago sembako: Tarimo kasih.", 
"Seloh umah: Oh, ikao lah gedua, yea. " + nama,
"Tino: " + nama +", Adea titipan dari nantan?",
nama + ": Akau ka tempek Nantan, Tino.", //50
"Hore, jahoi bersoih!", //51
nama + ": Ineh saben nge tomat dari pasa titipan Nantan.", //52
"Tino: Tarimo kasih. " +nama + ". Tulau dibasuh duleu, yea.",
"Tomat suduah masuh",
nama + ": Suduah akau masuh, Tino.", //55
"Tino: Tarimo kasih. Maae, masauk duleu. Kitao minun teh inei.",
nama + ": Iyea, Ntan.",
"Suduah melei tomat",
"Hore, level 2 salesae.",
nama + ": (Akau make cairan pembersih).",
]
var txt3Kerinci = [
    "Supir bus: Tarimo kasih lah make jaso kamai. Alau lah cek suhu tubuh itou sebelum masauk dusen.",
"Pemudi: Kalo suhu ikao dateh 37,5 derajat Celsius, ikao iduak buloih masauk kusen yea.", //1
"Pemudi: Alah, lamao nya.",
"Pemuda: Apea suhu akeu, Buk?",
"Uha mariso suhu: 36,8 derajat Celsius. Maae masauk.",
"Uha mariso suhu: Akau cek suhu duleu yea.", //5
"Uha mariso suhu: 36,2 derajat. Kimak ka Kartu Kewaspadaan Kesehatan itou", //6
"Uha mariso suhu: Cek suhu duleu inei!",
"Uha mariso KKK: Buloih ngimok Kartu Kewaspadaan Kesehatan?",
nama + ": Ineh, Pak.",
"Uha mariso KKK: Iyea lah, hasil tes non-reaktif. Deak papo masauk dusen.", //10
 "Uha mariso KKK: Kimak ka Kartu Kewaspadaan Kesehatan duleu inei!", //11
"Uha nge melei: Jadi apea total jagun nge tomat neh?",
"Uha bajago sayou: Totalnyo Rp25.000, Tek.",
"Uha bajago sayou: Nalok apo?",
nama + ": (Ndeh, uha neh iduak make masker. Akeu iduak jadoi balanjea inei).", //15
 nama + ": Iduak, Tek.", //16
"Indouk-indouk: Hmmm, tukan sayou nge biasea inei kanao, yea?",
"Uha janton: Alah, kuncei gudang kek manao aku ngapak?",
"Penjago: Akau harus kerjea maso pandemi.",
"Indouk-indouk: Alah, manao jemputannyo, yea?", //20
"Tukam parkir: Ineh nge parkir bus kanao, yea? Piyao parkir basin woa.", //21
nama + ": Akao ndok nuwek, ineh tempek apo? Piyao dijago uha?",
"Perawat: Oh, ineh umah karantina pasien Covid-19.",
"Perawat: Jago kesehatan yea. Jangua sampae ikao masauk inei.",
"Duto: pasien Covid-19 lah banyuak nya, lah penauh umah sakit.", //25
"Duto: Kalo ikao kademon, bateuk keran, pilek, alau lah mariso kek umah sakit, yea.", //26
"Pengusaha: Maso pandemi ineh, banyuak saudagua nge rugoi.",
"Pemudi: Maso pandemi, mok lah bakumpau ramae-ramae.",
"Satgas Covid: Inei adea sekeluarga nge isolasi mandiri kareno Covid-19.",
"Pegawai: Maso pandemi ineh banyuak uha nge pengangguran.", //30
"Anok nek: Akau harus rajin olahraga.", //31
"Tino: Adea ikao ngimok apok?",
"Nantan: Adea ikao ngimok indouk?",
"Tino: Ati-ati nyaberon jalua, yea.",
"Wartawan: Manan supayo iduak keno Covid?", //35
"Pak Wali: Jago jarak aman,  pakae masker, dan mok bakumpau-kumpau.", //36
"Wartawan: Apea dendo uha nge melanggar protokol Covid-19, Pak?", 
"Pak Wali: Kek wilayah kitao Rp250.000.", 
"Petugas Covid: Alah, batambah banyuak nge kenao.",
"Petugas Covid: Piyao ikao inei? Ndok sarah, yea?", //40
nama + ": Akeu tasesak, Pak.", //41
"Petugas Covid: Ineh kuburan korban Covid-19.",
"Uha bajagua: Alah, lamao nya sampae baron.",
"Saudara: Hai! " + nama + " lamao iduak nampak!",
nama + ": Yea, lamao iduak basuwao. Piyao ikao iduak make masker?", //45
"Saudara: Duak papo lah, muko umah lah! Adik akau nanteik ikao.", //46
"Saudara: Ikao lah tibea! Piyao lamao nya? Akau melei nasai.",
nama + ": Iyea, sebelum ke terminal bis akau rapid. Jadi duak dapuak bus pertamao.",
"Saudara: Untuk apo rapid? Akau kuwak iduak make masker alo kanao.",
nama + ": Mok nganggap remeh! Batambah banyuak nge kenao!", //50
nama + ": Kalo ikao iduak make masker, akao woa lah nge melei nasai. Sagin akao baloik lao inei", //51
nama + ": (Hmmm, sagin akao melei masker ndok nyo).",
"Saudara: Oh, tarimo kasih. Tulau melei rutei kek Pasa Baheu.",
"Uha bajagua: Yea, pileih lah.",
nama + ": (Hmmm, baron nge ndok dibeloi ijia inei).", //55
"Indouk-indouk: Hmmm, ndok melei apo?", //56
"Uha bajagua: Nalok masker yea? Kede sabeloh kede adik akeu, kek Pasa Lamao, adea uha nyuwon masker.",
"Uha nge melei: Tek, jadi apea galo sayou, dagon, laauk?",
"Uha bajagua: Rp45.000.",
"Uha bajago laauk nge sayou: Ikan dan sayur: Pilieh woa, laauk nge sayou.", //60
"Uha bajago laauk nge sayou: Pileih woa, sayou nge laauk.", //61
nama + ": Apea sakilo laauk, Tek?",
"Uha bajago laauk: Rp35.000.",
nama + ": Iyea lah, sakilo, Tek. Ineh kipe.",
"Uha bajago laauk: Tarimo kasih. Ineh.", //65
"Indouk-indouk: Uha nyuwon rutei itou toh kanao?", //66
"Uha bajago dagon: Nalok apo?",
nama + ": (Alah, uha toh iduak make masker. Akau iduak balanjea itou).", 
nama + ": Iduak, Pak.", 
"Uha nge melei: Pak, buwoh ineh apea galo?", //70
"Uha bajago buah: Jadi total Rp50.000, Tek.", //71
"Uha bajago buah: Pileih lah. Buwoh ilauk.",
"Indouk-indouk: Tukan rutei itou, pindah ka Pasa Lamao.",
"Laauk suduah melei!",
"Uha bajagua kek kaki limao: Pasa? Oh, jalua woa luhaih dari inei.", //75
"Uha bajago: Masker? Oh, beloi woa seloh ineh!", //76
"Petugas: Akau ndok ngatao uha nge iduak make masker toh.",
"Indouk-indouk: Ikao adea nengo? Uha ngatao adea sakeluarga kek dusen diisolasi dumuah.",
"Indouk-indouk: Iyea, Bu. Nge keno Covid-19 batambah terauh.",
"Uha nge melei: Apea hargo duwo masker neh?", //80
"Uha bajagua bajeu: Rp20.000.", //81
"Uha bajago rutei: Beloi lah rutei.",
"Uha bajago rutei: Beloi lah. Rutei gih angak.",
nama + ": Tigo bungkuh rutei neh apea?",
"Uha bajago rutei: Rp30.000.", //85
nama + ": Iyealah, ineh kipe, Pak.", //86
"Uha bajago rutei: Tarimo kasih. Ineh rutei.", 
"Rutei suduah melei!",
"Uha bajago bajeu: Nalok apo?",
"Uha bajago bajeu: Nalok apo? Masker ilauk ilauk.", //90
nama + ": Apea empak neh, Tek?", //91
"Uha bajagua bajeu: Rp40.000.", 
nama + ": Iyealah, akau melei empak masker, Tek. Ineh kipe.", 
"Uha bajagua bajeu: Tarimo kasih. Ineh masker.", 
"Masker sudah melei!", //95
nama + ": Adea apo neh?", //96
"Petugas Covid: Kantei ikao akeu buwea isolasi kareno hasil tesnyo positif Covid.",
nama + ": Alah, akeu bahu subeak nyo tadeh.",
"Petugas Covid: Kalo nitoh, ikao dites ugea. Alat tesnyo adea kek kantei akau.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Ikao harus isolasi mandiri salamo 14 hari!",
"Lah aboih. Tarimo kasih lah maae ineh.",  
"Seloh kihei dusen:" + "<br>" + "<ul>" +"<li> Pasa Baheu </li>" +"<li> Umoh sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Seloh kanan dusen:" + "<br>" + "<ul>" +"<li> Tempat pemakaman </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lamao </li>"+ "</ul>", //104
"Lah aboih. Ikao diarak uto.",
]

// palembang
var indexTextPalembang = [
    "Mulai Baru",
    "Lanjutke Permainan",
    "Propil",
    "Kredit",
    "Jenis Kelamin",
    "Pilih jenis kelamin kamok",
    "Lanang",
    "Betino",
    "Uba baso",
    "Namo",
    "Masukke namo kamok",
    "Balik ke Menu utama",
]
var onloadTextPalembang = [
    // level 1
    "Selamat datang jeru permainan Surviving Covid Labyrinth. Dalam permainan ini kamok nak bepelesiran dalem keadaan pandemi Covid-19." + "<br>" + "Selamo bepelesiran kamok musti nuruti protokol kesehatan, cak nyago jarak aman, masu tangan samo sabun, ngunoke cairan pembersih tangan, make penutup cungur samo mulut, serto ngindari wong rami.", //0
    "Di sebela kanan pucuk  layar, ado garis kesehatan yang nunjukke tingkat kesehatan kamok. Apobilo garis itu habis, mako permainan akan berakhir dan kamok musti ngulang dari awal untuk sampe level itu.", //1
    "Petualangan kamok di level 1 selesai kalu kamok selamat balek ke rumah kamok di ujung hutan." + "<br>" + "Sebelum bertualang, ado baiknyo kamok berpamitan dengan kawan baik kamok." + "<br>"+ "Selamat berpetualang!", //2
// level 2
"Selamat datang lagi. Di level ini komok akan neruske pelesiran kamok. Pelesiran kamok dimulai dengan percakapan samo ibu kamok.", //3
"Jangan lupa untuk tetep nuruti protokol kesehatan kerno kito masih dalem masa pandemi Covid-19. Selamat menempuh petualangan di level 2 ini.",//4
// level 3
"Selamat, kamok la sampe di tingkat terakhir pelesiran kamok. Di tingkat ini kamok  baru sampe di kota nak sanjo ke rumah dulur kamok." + "<br>" + "Hati-hati waktu nyeberang  tembokan. Tetep nuruti protokol kesehatan, terutamo nyogo jarak aman, nemen make penutup cungur samo mulut , samo ngindari wong rami.", //5
"Sebelum kamu masuk kota, kamu harus cek suhu dan tunjukkan Kartu Kewaspadaan Kesehatan kamu. Selamat bertualang!", //6
"ini catetan belenanan yang musti dibeli :" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> roti katik raso </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Permainan berakhir. Kamok tetumbur  mobil.",
    "Permainan berakhir. Tingkat kesehatan Kamok abis.",
]
var txt1Palembang = [
    "Kawan: Hai, awak nak ke mano? Ke sini dulu!", //0
    "Kawan: Oi, jangan lupa masu tangan samo sabun, yo!", //1
    "Kawan: Dengen masu tangan, awak mastiken tangan dewek  reseh dan aman dari virus.",
    "Kawan: Awak pacak masu tangan di jabo rumah aku.",
    "Hore, tangan Awak la dibasu!",
    "Budak mudo: *Uhuk* Maaf yo, tenda aku ngalangi jalan kamok. Tapi, kamok pacak lewat sebelah sano.", //5
    "Penjaga  Gerbang: Budak mudo, ngapo kamok idak make penutup cungur samo idung? Ini penutup cungur dan idung  untuk kamok.", //6
    "Penutup idung samo cungur la dienjukke",
    "Penjaga Gerbang:  Belagaknyo, kamok la make punutup cungur samo idung! Diaturi liwat.",
    nama + ": Mokasih!" ,
    "Enget untuk selalu nyago jarak aman, yo!", //10
    "*Uhuk* Apo kamok nyingok cucungku? Dia idak make penutup cungur samo mulut waktu pegi.", //11
    nama + ": Oh, Aku nyingok dio di utan.", 
    "Nyai: Pacak tolong enjukke penutup cungur samo mulut untuk dio, Nak?", 
    nama + ": Pacak bae.", 
    nama + ": Ini punutup cungur samo mulut  dari nyai awak. Pakelah dulu!", //15
    "Payu, mokasih!", // 16
    "Ibuk: Sayang, la balek. Tolong belikan sabun basu tangan dulu, yo?", 
    nama + ": Di mano, Buk?", 
    "Ibuk: Di warung Bu Ani.", 
    "Yani: Cari apa, Cek?", //20
    nama + ": Nak meli sabun basu tangan.", //21
    "Yani: Oh, langsung masuk ke jeru bae.", 
    "Ani: Selamat datang, nak meli apo?", 
    nama + ": Ado sabun masu tangan?", 
    "Ani: Ai, la pasti ado. Ini, Cek!", //25
    "Sabun basu tangan la didapatke!", //26
    "Ibuk: Mokasih, Sayang. Jangan lupa masu tangan sebelum masuk ke rumah, ya!",
    "Tangan sudah dibasu!",
    "Hore, level 1 la sudah!",
    nama + ": Ini sabunnyo, Buk.", //30
]
var txt2Palembang = [
    "Ibuk: Kamok pacak nganterke makan siang untuk Yai?", //0
nama + ": Iyo, Buk.", //1
"Ati-ati di jalan, yo!",
"Tetanggo: Hai, " + nama + " Denger-denger Bu Joko kena Covid.",
"Budak kecil: Hosh...hosh...Aku musti balek sepuluh menit lagi.",
"Budak kecil: Hatsi...hatsi...", //5
nama + ": Buk, anaknyo ngapo?", //6
"Ibuk-ibuk: Dio batuk, pilek, dan agak demem. Jadi kamek nak tes rapid.", 
nama + ": Oh. Mugo-mugo bukan Covid yo, Buk.", 
"Ibuk-ibuk: Mokasih, Nak.",
"Yai-yai: UHUK UHUK", //10
nama + ": (Waduh, aku nyago jarak jarak kalu mak ini)", //11
nama + ": (Nah, aku musti cepet-cepet nganterke makanan Yai)",
"Perawat: Kalu nak berobat, ini nomor antreannyo.",
nama + ": Maaf, aku idak berobat. Mokasih.",
"Ibuk-ibuk: Tolong nyago jarak, Nak.", //15
"Penjual buah: Cari apo, Cek?",
nama + ": Tidak Mang. Mokasih.",
nama + ": (Mamang ini idak make penutup cungur samo idung. Aku idak beli buah di sini.)",
"Ibuk-ibuk: Tukang rotinyo ke mano, yo?",
"Penjual buah: Payo dibeli, Cek. Buahnyo baru datang.", //20
nama + ": Maaf, idak dulu, Bik.",
"Penjual sembako: Cari apo, Cek?",
nama + ": Oh, tidak cari apa-apa, Bik.",
nama + ": Numpang nanyo, jalan ke menara liwat mano, ya?",
"Budak mudo: Oh, awak musti muter jalan dari awal.", //25
"Hore, tangan la dibasu!", //26
"Yai: Halo, " +nama+ " Seenget Yai, ibuk kamok ni nitipke  bekal untuk Yai.",
nama + ": Iya, Yai!",
nama + ": Ini bekal dari Ibuk untuk Yai.",
"Yai: Oh, Mokasih.", //30
"Yai: Pacak nolong melike sebotol sabun cair dan tomat untuk Nyai?", //31
nama + ": Pacak bae, Yai.",
"Yai: Mokasih. Ini duitnyo.",
"Yai: Enget musti nyago jarak, yo!",
"Penjual buah: Payo, Cek. Diaturi milih buahnyo. Buahnyo masih segar.", //35
nama + ": Ado tomat, Bik?", //36
"Penjual buah: Ado, Cek. Nah, yang ini baru be datang.",
nama + ": iyo, Bik. Sebungkus ni berapo regonyo?",
"Penjual buah: sepuluh ribu bae.",
nama + ": Baik, ini uangnya, Bik.", //40
"Penjual buah: Mokasih, Cek.", //41
"Penjual sembako: Nyari apo, Cek?",
nama + ": Sabun cair ado, Bik?",
"Penjual sembako: Ado. Sepuluh ribu regonyo.",
nama + ": Oke, ini duitnyo.", //45
"Sabun cair terbeli", //46
"Penjual sembako: Mokasih.", 
"Tetanggo: Oh, kamok la besak, yo. " + nama,
"Nyai: Halo, " + nama +". Apo ado titipan dari Yai kamok ni?",
nama + ": Aku nak ke tempat Yai dulu, Nyai.", //50
"Hore, tangan la dibasu!", //51
nama + ": Ini sabun dengen tomat dari pasar titipan Yai.", //52
"Nyai: Mokasih. " +nama + ". Tolong dibasu dulu, ya.",
"Tomat sudah dibasu",
nama + ": Sudah saya basu, Nyai.", //55
"Nyai: Mokasih. Payo, masuk dulu. Kita minum teh di dalam.",
nama + ": Iyo, Yai.",
"Tomat la dibeli",
"Hore, level 2 selesai.",
nama + ": (Aku make cairan pembersih dulu).",


]
var txt3Palembang = [
    "Supir bus: mokasih la make jasa kamek. diaturi cek suhu tubuk di sano sebelum masuk ke jeru kota.",
"Pemudi: kalu suhu kamok di pucuk 37,5 derajat Celsius, awakdak boleh masuk jeru  kota, oi.", //1
"Pemudi: alangke, lamo nian.",
"Budak mudo: Berapo suhu tubuk aku ni?",
"Pemeriksa suhu: 36,8 derajat Celsius. Diaturi masuk.",
"Pemeriksa suhu: Gagek ku perikso suhu tubuk kamok ni  ya, Cek.", //5
"Pemeriksa suhu: 36,2 derajat. Diaturi nunjukke Kartu Kewaspadaan Kesehatan di sano", //6
"Pemeriksa suhu:  Cek,  tolong perikso suhu tubuk dulu di sini!",
"Pemeriksa KKK: Mano Kartu Kewaspadaan Kesehatan, Cek?",
nama + ": Ini dio, Mang.",
"Pemeriksa KKK: Baik, la diperikso hasilnyo non-reaktif. Diaturi masuk jeru kota.", //10
 "Pemeriksa KKK: Cek, tunjukke Kartu Kewaspadaan Kesehatan dulu di sini!", //11
"Pembeli: Bik, jadi berapo  galonyo rego jagung dan tomatnyo?",
"Penjual sayur: Galonyo selawe ribu, Buk.",
"Penjual sayur: Cari apa, Cek?",
nama + ": (Nah, ibuk ini idak make penutup cungur samo mulut. Kulo idak belenan samo bae samo awak).", //15
 nama + ": idak, Buk.", //16
"Ibuk-ibuk: Hmmm, bibik sayur yang biaso ado di sini ke mano, ngapo katik?",
"Bapak-bapak: Wah, kunci gudang kulo taruk di mana, yo?",
"Penjaga pabrik: Aku ni masih harus begawe walaupun pandemi.",
"Ibuk-ibuk: Nah, mano pulok jemputan, ni?", //20
"Tukang parkir: Nah, ini yang parkir bus ke mano, yo? Ngapo parkir basing bae.", //21
nama + ": Cubo tanyo, ini tempat apo? Ngapo nak dijago?",
"Perawat: Oh, ini rumah  pasien yang tekeno Covid-19.",
"Perawat: Jago kesehatan ya, Cek. Jangan sampe kamok masuk jeru ini.",
"Dokter: Kerno pasien Covid-19 la makin banyak,  rumah sakit ini dak muat lagi kerno  la tebates.", //25
"Dokter: Kalau kamok cak la nak demem, watuk kering, apo pilek, becepetla perikso ke rumah sakit, yo.", //26
"Pengusaha: Musim pandemi mak ini, banyak pengusaha yang bisnisnya keno dampak.",
"Pemudi: waktu pandemi, ngindari nak bekumpul samo wong rami.",
"Satgas Covid: Di sini ado sekeluargo  la diisolasi mandiri kerno Covid-19.",
"Pegawai: Waktu pandemi cak ini banyak wong yang la idak begawe lagi.", //30
"Budak kecil:  Kulo musti nak rajin  gerak badan.", //31
"Nyai-nyai: Cung, awak nyingok dak laki Nyai?",
"Yai-Yai: Cung, awak nyingok dak bini Yai?",
"Nyai-nyai: Waktu nyeberang tembokan, Awak harus ati-ati, yo.",
"Wartawan: Apo yang nak Bapak sampeke samo masyarakat mako idak tetular Covid?", //35
"Walikota: musti nyago jarak aman, sering make punutp cungur samo idung, dan ngindari wong rami.", //36
"Wartawan: Berapa sen dendo pelanggar protokol Covid-19 ni, Pak?", 
"Walikota: Di wilayah kito ini dua ratus limo puluh ribu.", 
"Petugas Covid: Ya cacam, jumlah korban betambah terus saban harinyo.",
"Petugas Covid: Ado urusan apo, Cek? Nak ke kuburan apo?", //40
nama + ": Aku nyasar, Pak.", //41
"Petugas Covid: Ini kuburan korban keno Covid-19.",
"Penjaga toko:  Ya wa, alangke lamonyo barang sampe.",
"Saudara: Oi! " + nama + " la lamo kito idak betemu!",
nama + ": Yo, la lamo idak betemu. Nah, ngapo kamok metu idak make penutup cungur  samo mulut?", //45
"Saudara: Tenanglah, Cuma di jabo rumah bae! Oh y0, adik aku la  nunggu awak.", //46
"Saudara: Hey, kamok la sampe! Ngapo lamo nian? Aku baru nak minta belike awak makan.",
nama + ": Iya, sebelum ke terminal bis aku tes rapid dulu. Jadi tadi ketinggalan bus yang pertamo.",
"Saudara: Untuk apo tes rapid tu? Aku jugo nemen idak make penutup cungur samo mulut men pegi-pegi.",
nama + ": Jangan anggap remeh! Makin ari makin banyak wong yang tetular, tau dak awak ni!", //50
nama + ": Kalu awak idak make penutup cungur dan mulut, biar aku bae yang meli makan. Gagek aku balek lagi ke sini.", //51
nama + ": (naahhh, gagek aku meli penutup cungur samo mulut untuk wong-wong tu).",
"Saudara: Oh, mokasih. Tolong sekalian belike roti di Pasar Baru.",
"Penjual barang: Yo, payo dipilih barangnyo, Cek.",
nama + ": (Hmmm, barang yang nak  kubeli katik di sini).", //55
"Ibuk-ibuk: Hmmm, nak beli apo, yo?", //56
"Penjual: Nyari penutup cungur samo idung, Cek? Toko sebelah ini dulur aku di Pasar Lamo nyual penutup cungur samo idung.",
"Pembeli: Bik, jadi berapo rego  sayur, daging, dan iwak, galo-galonyo ni?",
"Penjual: Empat puluh limo ribu, Buk.",
"Penjual Ikan dan sayur: Diaturi, dipilih  Cek,  iwak dan sayurnyo.", //60
"Penjual Ikan dan sayur: Payo dipilih, Cek sayur dan ikannyo.", //61
nama + ": Berapo rego iwak sekilo, Bik?",
"Penjual Ikan: tigo puluh limo ribu.",
nama + ": Payo, meli  iwak ini sekilo ya, Bik. Nah, ini duitnyo.",
"Penjual Ikan: Mokasih. Ini belenanan, Ibuk.", //65
"Ibuk-ibuk: Penjual roti yang biaso di sano ke mano, yo?", //66
"Penjual daging: Nyari apo, Cek?",
nama + ": (Nah, bapak itu make penutup cungur samo mulut. Aku idak nak belenan samo dio tu).", 
nama + ": Idak, Pak.", 
"Pembeli: Pak, berapo rego buah ini galonyo?", //70
"Penjual buah: Jadi galonyo  limo puluh ribu, Buk.", //71
"Penjual buah: Payo dibeli, Cek. Buahnya seger galo.",
"Ibuk-ibuk: Tukang roti di sano,  la pindah ke Pasar Lamo, Kak.",
"Iwak tebeli!",
"Pedagang kaki-lima: Pasar? Oh,  jalan lurus  bae dari sini , Cek.", //75
"Penjual: Penutup cungur dan idung? Oh, pacak  beli di toko sebelah, Cek!", //76
"Petugas: Aku nak negur a bapak yang idak make penutup cungur samo idung itu.",
"Ibuk-ibuk: Buk, la nenger lum? Katanyo seberoyot di pusat kota yang diisolasi di rumah tu!",
"Ibuk-ibuk: Iya, Buk. Jumlah wong yang terpapar keno Covid-19 betambah terus.",
"Pembeli: Berapa rego duo ikok penutup cungur dan idung ni, Bik?", //80
"Penjual baju: duo puluh ribu, Buk.", //81
"Penjual roti: Payo dibeli rotinyo, Cek.",
"Penjual roti: payo dibeli, Cek. Rotinya masi angett.",
nama + ": Tigo ikok roti ni berapo, Pak?",
"Penjual Roti: tigo pulu ribu, Cek.", //85
nama + ": Nah, ini duitnyo, Pak.", //86
"Penjual Roti: Mokasih. Ini rotinyo.", 
"Roti tebeli!",
"Penjual baju: Cari apo, Cek?",
"Penjual baju: Cari apo, Cek? Penutup cungur samo mulut bagus-bagus nah.", //90
nama + ": Berapa rego penutup cungur samo mulut empat ikok, Bik?", //91
"Penjual baju: empat puluh ribu, Cek.", 
nama + ": Payo, Aku beli penutup cungur samo idung ni empat ikok, Bik. Ini duitnyo.", 
"Penjual baju: Mokasih. Ini penutup cungur samo idung.", 
"Masker tebeli!", //95
nama + ": Ado apo ini?", //96
"Petugas Covid: Kawan kamok ni aku bawa untuk isolasi kerno hasil tesnyo ni positif Covid.",
nama + ": Nah, aku baru bae betemu dio tadi.",
"Petugas Covid: Amen mak itu kamok ini musti dites jugo. Alat tesnya ada  samo kawan aku.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Kamok musti  isolasi mandiri selamo 14 hari. Sampe betemu lagi!",
"Permainan berakhir. Mokasih la mainke permainan ini.",  
"Kiri kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Sebelah Kanan kota:" + "<br>" + "<ul>" +"<li> Kuburan </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lamo </li>"+ "</ul>", //104
"Permainan berakhir. Kamok tetumbur  mobil.",

]

// besemah
var indexTextBesemah = [
    "Menu Baru",
    "Lajuka bemain",
    "Profil",
    "Kredit",
    "Jenis kelamin",
    "Pili jenis kelamin kaba",
    "Lanang",
    "Betine",
    "Ganti base",
    "Name",
    "Masukka name kaba",
    "Ngelipat ke menu utame."
]
var onloadTextBesemah = [
    // level 1
    "Selamat datang di puse'an Surviving Covid Labyrinth. di puse'an ini kaba kak bepejalanan dalam kondisi pandemi Covid-19." + "<br>" + "Selame bepejalanan kaba harus ngikuti protokol kesehatan, misale njage jarak, mbasoh tangan nga sabun, makai cairan pembersih tangan, makai masker, nga dide nak rugok rami.", //0
    "Di pucok kanan layar, ade gares kesehatan ye nunjukka tingkat kesehatan kaba. Ame gares tu la digek, berati puse'an ni la udem udem tu kaba ngulang agi san di muke kandek level itu.", //1
    "Pejalanan kaba di level 1 la udem ame kaba dide ngengape pas balek ke ghumah di ujong ghimbe." + "<br>" + "Sebelum bepejalanan, ilo'e kaba pamet kudai nga kance dampeng kaba." + "<br>"+ "Selamat bepejalanan!", //2
    // level 2
    "Betemu agi kite. Di level ini kaba kak ngelanjutka pejalanan. Pangkal pejalanan kaba kak dimulai san di kaba berumong nga umak kaba.", //3
    "Jangan dek teghingat ngai protokol kesehatan au kerne kite maseh dalam mase pandemi Covid-19. Mulailah bepejalanan di level 2 ni.",//4
    // level 3
    "Selamat Cek, kaba la sampai level terakher di pejalanan kaba. Di level ini empai sampai di kuta kandek nggaghi sanak kaba." + "<br>" + "ati-ati pas nyeberang jalan kele. Turuti protokol kesehatan, kususe jangan para'an, jangan paculi masker, nga dide nak reramian.", //5
    "Sebelum kaba masuk kuta, kaba cek suhu kudai, mangke tu ancakka Kartu Kewaspadaan Kesehatan kaba. Selamat bepejalanan!", //6
    "Daftar barang ye nak dibeli:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Ruti tawar </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Pepuse'an la udem. Kaba tetumbur mubel.",
    "Pepuse'an la udem. Tingkat kesehatan kaba la digek.",

]
var txt1Besemah = [
    "Kance: Oi cek, kaba nak ke mane? Sinila kudai!", //0
    "Kance: Oi, jangan dek teghingat bebasoh tangan tu nga sabun, ao!", //1
    "Kance: Ame mbasoh tangan, pacak dipastika tangan kaba berseh san di virus.",
    "Kance: Kaba pacak bebasoh tangan di muke ghumahku.",
    "Asek, tangak kaba la dibasoh!",
    "Bujang: *Uhuk* Maaf nian, tendaku ngalangi jalan kaba. Anye, kaba gi pacak lalu situ.", //5
    "Duaghe Gerbang: Oi sanak, ngape kaba dek makai masker? Nah ini masker kandek kaba.", //6
    "Ghuleh masker",
    "Penjage Gerbang: Kan alap, kaba la makai masker! Lalu lah.",
    nama + ": Mekaseh au!" ,
    "Jangan dek teghigat kandek njage jarak, au!", //10
    "*Uhuk* Kaba nginak cucongku, dide? Pas ngeluagh, die dide bemasker.", //11
    nama + ": O, aku tadi nginak die pangke di ghimbe.", 
    "Nineng: Pacak dide enjukka diket makser ni nga die?", 
    nama + ": Oi au, sini neng, engkala aku ngantatkanye.", 
    nama + ": Ce', ini masker san nineng kaba, pakaila kudai!", //15
    "Oi au, mekaseh!", // 16
    "Umak: Nak, la balek kaba. Tulong belika diket sabun, au?", 
    nama + ": Di mane, Mak?", 
    "Umak: Di warung Mak Ani.", 
    "Yani: Ncakagh tuape?", //20
    nama + ": Mbeli sabu batan mbasoh tangan.", //21
    "Yani: Oo, masok kia ke dalam.", 
    "Ani: Masokla, tuape nak dibeli?", 
    nama + ": Ade sabun kandek mbasoh tangan?", 
    "Ani: Oi, ade. Ini!", //25
    "La ghuleh sabun kandek basoh tangan!", //26
    "Ibu: Terime kaseh, Nak. Basoh kudai tangan tu ame kak masok ghumah, au!",
    "Tangan la dibasoh!",
    "Asek, level 1 la udem !",
    nama + ": Ini sabune, Mak.", //30

]
var txt2Besemah = [
    "Umak: Kaba pacak antatka diket nasi ibat ni kandek nineng lanang kaba?", //0
nama + ": Au, Mak.", //1
"Ati-ati di jalan, au!",
"Tetangge: oi ce', " + nama + " Pendengaghanku Umak Joko kene Covid, au?",
"Budak kecik: Hosh...hosh… Aku kak balek sepuluh menit agi.",
"Budak kecik: Hacim...hacim...", //5
nama + ": Ibungan, ngape anak kamu?", //6
"Kerbai: Die pangke iyak, selme, nga agak gering. Jadi kami nak rapid test.", 
nama + ": Oo. Mugela bukan Covid au, Bung.", 
"Kerbai: Terime kaseh.",
"Nineng-nineng lanang: UHUK UHUK", //10
nama + ": (Ndok ai, dide nak dampeng ige)", //11
nama + ": (Ai, aku nak gancang diket ngantatka pajuan nineng lanang)",
"Perawat: Ame nak beghubat, ini nomor antriane.",
nama + ": Maaf, aku dide nak beghubat. Terime kaseh.",
"Kerbai: Tulong dide nak dampeng ige.", //15
"Tukang buahan: Cakagh tuape?",
nama + ": Dide Mang. Terime kaseh.",
nama + ": (Mamang ini dide bemasker. Aku dide ka mbeli buah di sini.)",
"Kerbai: Mane tukang ruti tadi e?",
"Tukang buahan: Ambekla. Buah e empai sampai.", //20
nama + ": Maaf, lom kudai, Bek.",
"Tukang  jualan sembako: tuape dicakahi?",
nama + ": Oo, dide ncakagh tuape-tuape, Bek.",
nama + ": Numpang betanye diket, ame nak ke menara liwat mane, e?",
"Bujangan: Oo, kaba kitari kudai jalan ni san pertame.", //25
"Asek, tangan la dibasoh!", //26
"Nineng lanang: Oi cong, " +nama+ " Ame nineng dek salah, umak kaba nitipka ibatan kandek nineng, au.",
nama + ": Au, Neng!",
nama + ": Ini die ibatan san di umak kandek kamu, Neng.",
"Nineng lanang: Oo, terime kaseh.", //30
"Nineng lanang: Pacak dide tulong kaba belika diket sebotol sabun cair nga cung kedire kandek Nineng betine kaba?", //31
nama + ": Oi au, Neng.",
"Nineng lanang: Terime kaseh au. Ini duete.",
"Nineng lanang: Jangan dampeng ige nga jeme rami, au!",
"Tukang buahan: Nah pilihlah buahane. Buahane gi segar.", //35
nama + ": Ade cung kedire, Bek?", //36
"Tukang buahan: Ade. Ye ini na empai nyampai.",
nama + ": Nggok nian, Bek. Beghape regenye sebungkos?",
"Tukang buahan: Rp10.000 kia.",
nama + ": Ude ame lok itu, ini duete, Bek.", //40
"Tukang buahan: Trime kaseh.", //41
"Penjual sembako: Tuape dicakaghi?",
nama + ": Sabon cair ade dide, Bek?",
"Penjual sembako: Ade. Rp10.000 regenye.",
nama + ": Oi au, ini duete.", //45
"Sabun cair tebeli", //46
"Tukang jualan sembako: Trime kaseh.", 
"Tetangge: Ayay, kaba la besak benagh. " + nama,
"Nineng betine: Cong, " + nama +". Ade dide titipan san di nineng lanang kaba?",
nama + ": Aku ke bada nineng lanang kudai, Neng.", //50
"Asek, tangan la dibasoh!", //51
nama + ": Ini sabun nga cung kedire san pasar titipan nineng lanang.", //52
"Nineng betine: Terime kaseh. " +nama + ". Tulong basoh kudai, au.",
"Cung kedire la dibasuh",
nama + ": La kubasuh, Ning.", //55
"Nineng betine: Terime kaseh. Pala, masuk kudai. Kite minum teh di dalam.",
nama + ": Au, neng.",
"Cung kedire la dibeli",
"Hore, level 2 la udem.",
nama + ": (Aku makai cairan pembersih kudai).",


]
var txt3Besemah = [
    "Super mubel: Terime kaseh la ngguneka tenage kami. Cuka perikse kudai suhu tubuh di sane sebelum masuk kuta.",
"Bujangan: Ame suhu kaba di pucok 37,5 derajat Celsius, kaba dide bule masuk kuta au.", //1
"Bujangan: Ndok ai, alangka lamenye titu.",
"Bujangan: Beghape suhuku, Yuk?",
"Pemerikse suhu: 36,8 derajat Celsius. Masukla.",
"Pemerikse suhu: Aku kak merikse suhu badan kaba kudai au.", //5
"Pemerikse suhu: 36,2 derajat. Lajulah tunjukka Kartu Kewaspadaan Kesehatan di sane", //6
"Pemerikse suhu: Sini cek suhu kudai!",
"Pemerikse KKK: Cuka kinakka kudai Kartu Kewaspadaan Kesehatane?",
nama + ": Ini, Pak.",
"Pemerikse KKK: oi au, hasil tes-e non-reaktif. lajula ke kuta.", //10
 "Pemerikse KKK: Tunjukka Kartu Kewaspadaan Kesehatan kudai di sini!", //11
"Pembeli: Bek, jadi beghape jagung nga cong ni?",
"Tukang taghok: Segalenye jadi Rp25.000, Mak.",
"Tukang taghok: Cakagh tuape?",
nama + ": (Ai, ibong ini dide makai masker. Aku dindak belanje nga die e).", //15
 nama + ": dide, Bek.", //16
"Kerbai: Hmmm, manela tukang jualan taghok ye biase di sini, e?",
"Bapang-bapang: adoh, di manela aku nepekka kunci gudang tadi, e?",
"Tukang jage pabrik: Aku ni masih nak begawe giat juge mpok masih pandemi.",
"Kerbai: adak, mane die jemputan ni?", //20
"Tukang parkir: ai, ini ye markir bus ni ke mane? Ngape asak markir be.", //21
nama + ": Numpang betanye diket, tini bada tuape? Ngape dijage?",
"Perawat: O, ini ghumah bada karantina pasien Covid-19.",
"Perawat: Jage kesehatan au. Jangan sampai kamu masuk sini.",
"Dokter: Kerne pasien Covid-19 la tamba banyak, ghumah sakit ni la namba sempit.", //25
"Dokter: Ame kaba demam, iyak bedekel, atau selme, lasungkala perikseka ke ghumah sakit, au.", //26
"Pengusaha: Di mase pandemi lok ini, banyak pengusaha yang bisnise tekene.",
"Gadisan: Pas pandemi, dide nak bekumpul nga rugok jeme rami.",
"Satgas Covid: Di sini la ade sekeluarge ye dang isolasi mandiri kerne Covid-19.",
"Pegawai: Ame pandemi lok ini banyak jeme ye lengit penggawean.", //30
"Budak kecik: Aku nak rajin beularaga.", //31
"Nineng betine: Nak, kaba nginak lakiku dide?",
"Nineng lanang: Nak, kaba nginak biniku dide?",
"Nineng betine: Pas nyeberang jalan kele, kamu ati-ati, au.",
"Wartawan: Pak, tuape nak kamu sampaika nga masyarakat mangke dide tetular Covid?", //35
"Walikota: Tetapla njage jarak aman, jangan maculi masker, nga dide nak reramian kudai.", //36
"Wartawan: Beghape dende kandek jeme ye dide nuruti protokol Covid-19, Pak?", 
"Walikota: Di bada kite ni Rp250.000.", 
"Petugas Covid: Cacam, jumlah korban betambah saje idang aghinye.",
"Petugas Covid: Ade urusan tuape? Nak ziarah, au?", //40
nama + ": Aku ni dek keruan bada balek, Mang.", //41
"Petugas Covid: Ini penguburan jeme kene Covid-19.",
"Tukang jage toko: Ndoka ai, alangka lame sampai barang ni.",
"Sanak: oi cek! " + nama + " lame dek betemu kite!",
nama + ": au, lame dek tekinak. Ngape kak di luagh kuta dide bemasker?", //45
"Sanak: Tenang saje, gi di depan ghumah ni la! Oi au, adengku la nunggu kaba.", //46
"Sanak: oi, mpai sampai kamu! Ngape lame? Aku mpai mbelika kamu makan.",
nama + ": au, sate ndak ke terminal tadi aku rapid kudai. Laju tadi ketinggalan bus pertame.",
"Sanak: batan tuape rapid? Aku ghapat pule dek pakai masker ame bepejalanan.",
nama + ": Dek boleh lok itu! Mak ini idang aghi tamba banyak saje jeme ye tetular, keruan dide!", //50
nama + ": Ame kaba dindak pakai masker, engkala aku saja ye mbeli makan. Kele aku ngelipat agi.", //51
nama + ": (Hmmm, kele aku belika masker kandek rabanan tu).",
"Sanak: au, terime kaseh. Tulong belika pule ruti di Pasar Baru.",
"Tukang barang: Au, pililah nak ye mane barange.",
nama + ": (Hmmm, barang ye nak kubeli tu dide bedie di sini).", //55
"Kerbai: Hmmm, mbeli tuape, e?", //56
"Tukang: Cakagh masker au? Warung di sebelah warung sanakku di Pasar Lame njual masker.",
"Pembeli: Bek, jadi beghape segalenye, taghok, dageng, nga ikane?",
"Tukang jualan barang: Rp45.000, Yuk.",
"Tukang Ikan nga taghok: Pilelah, ikan nga taghok e.", //60
"Tukang Ikan dan taghok: Pilelah, taghok nga ikane.", //61
nama + ": Beghape rege sekilu ikane tu, Bek?",
"Tukang Ikan: Rp35.000.",
nama + ": Udeh ame lok, itu, aku kak ngambek sekilu, ini duete, Bek.",
"Tukang Ikan: Terime kaseh. Ini belanjeane.", //65
"Kerbai: Manelah e tukang ruti yang biasenye di sane?", //66
"Tukang daging: Cakagh tuape?",
nama + ": (Ai, Mamang itu dek makai masker. Aku dindak belanje nga die e).", 
nama + ": Dide, Mang.", 
"Pembeli: Mang, rege buahane jadi beghapa gegalenye?", //70
"Tukang buah: Gegalenye Rp50.000, Bek.", //71
"Tukang buah: Ambeklah. Buahane maseh segar.",
"Kerbai: Tukang ruti di sane, pindah ke Pasar Lame.",
"Ikan tebeli!",
"Pedagang kaki-lime: Pasar? Oh, bejalan lughus san sini kia.", //75
"Tukang jualan: Masker? Oh, pacak mbeli di toko sebelah!", //76
"Petugas: Aku kak nggawel mamang ye dek bemasker tu.",
"Kerbai: Bek, la ndengagh lom? Ujinye sekeluarge besak di tengah kuta ye diisolasi di ghumah!",
"Kerbai: oi au, Bek. Jumlah jeme ye la kene Covid-19 betambah saje.",
"Pembeli: Beghape rege due makser ni, Bek?", //80
"Tukang barot: Rp20.000, Buk.", //81
"Tukang Ruti: belilah rutinye.",
"Tukang Ruti: Beli. Rutinye maseh gi angat.",
nama + ": Tige bungkus ruti ini beghape, Mang?",
"Tukang Ruti: Rp30.000.", //85
nama + ": oi au, ini duite, Mang.", //86
"Tukang Ruti: Terime kaseh. Ini Rutie.", 
"Ruti tebeli!",
"Tukang barot: Cakagh tuape?",
"Tukang barot: Cakagh tuape? Maskere alap-alap.", //90
nama + ": Beghape rege empat masker, Bek?", //91
"Tukang barot: Rp40.000.", 
nama + ": Oi au, aku mbeli empat masker, Bek. Ini duite.", 
"Tukang barot: Terime kaseh. Ini maskere.", 
"Masker tebeli!", //95
nama + ": Ade tuape tini?", //96
"Petugas Covid: Kance kaba ni kak kubatak kandek isolasi kerne hasil tese positif Covid.",
nama + ": ayay, aku empai betemu nga die tadi.",
"Petugas Covid: Ame lok itu kaba ni harus dites pule. Alat tese ade di kantenku.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Kaba harus isolasi sughang selame 14 aghi. Sampai betemu agi au!",
"Pepuse'an la udem. Terime kaseh la mainka puse'an ini.",  
"Kidau kuta:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Ghumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanan kuta:" + "<br>" + "<ul>" +"<li> Bada penguburan </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lame </li>"+ "</ul>", //104
"Pepuse'an la udem. Kaba tetumbur mubel.",

]

// bangka
var indexTextBangka = [
    "Mulai baru",
    "Lanjutkan permainan",
    "Profil",
    "Kredit",
    "Jenis kelamin",
    "Pileh jenis kelamin ka",
    "Laki",
    "Bini",
    "Ubah bahasa",
    "Name",
    "Masukkin name ka",
    "Balik ke Menu Utama",
]
var onloadTextBangka = [
    // level 1
    "Selamat datang di dalem permainan  Surviving Covid Labyrinth. Dalem permainan ni ka akan berpetualang di dalem situasi pandemi Covid-19." + "<br>" + "Selame berpetualang ka harus ngikutin protokol kesehatan, kayak jage jarak aman, cuci tangan pakai sabun, pakai cairan pemberseh tangan, pakai masker, same menghindari kerumunan.", //0
    "Di sebelah kanan pucuk layar, ade garis kesehatan yang nunjukkin tingkat kesehatan ka. Hemen garis a tuh abis, permainan a selesai dan ka harus ngulang dari awal untuk level tu.", //1
    "Petualangan ka di level 1 selesai men ka selamat pulang ke rumah ka di ujung utan." + "<br>" + "Sebelum bertualang, ade baek a ka mada kik kawan baek ka dulu." + "<br>"+ "Selamat berpetualang!", //2
// level 2
"Selamat datang agik. Di level ni ka akan ngelanjutin petualangan ka. Petualangan ka dimulai dengan kongke che-che ibu ka.", //3
"Jangan lupa tetep mengikuti protokol kesehatan karene kite agik dalem masa pandemi Covid-19. Selamat menempuh petualangan di level 2 ni.",//4
// level 3
"Selamat, ka la sampai level terakhir petualangan ka. Di level ni ka baru sampai di kota buet ninggok seperadek ka.." + "<br>" + "Chai-chai pas nyebrang jalan a. Tetep ikuti protokol kesehatan, yang utama jage jarak aman, selalu pakai masker, same hindari kerumunan.", //5
"Sebelum ka masuk kota, ka harus cek suhu same nunjukin kartu Kewaspadaan Kesehatan ka. Selamat bertualang!", //6
"Daftar barang yang nek kene beli:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Roti tawar </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Permainan la sude. Ka ketabrak oto.",
    "Permainan la sude. Tingkat kesehatan ka la abis.",
]
var txt1Bangka = [
    "Kawan: Hai, ka nek gi mane? Sini luk!", //0
    "Kawan: Hai, jangan lupa cuci tangan pakai sabun,ok?", //1
    "Kawan: Dengan ka nyuci tangan, ka la mastiin tangan ka berseh kik aman dari virus.",
    "Kawan: Ka pacak nyuci tangan ka di depan rumahku.",
    "Hore, tangan ka la tecuci!",
    "Pemuda: *Uhuk* Maaf ok, tendaku ngalangin jalan ka. Ka tulung lewat dari sebelah sanin ok.", //5
    "Penjage  Gerbang: Ngape ka dak pakai masker? Ni masker kik ka.", //6
    "Masker la dapet",
    "Penjage Gerbang: Bagus, ka la pakai masker! Sekarang ka la jadi lewat.",
    nama + ": Sinmung!" ,
    "Inget, selalu jage jarak aman, ok!", //10
    "*Uhuk* Ka ade ninggok cucuku dak ? Je dak makai masker pas pegi.", //11
    nama + ": Oh, ku ninggok je di utan.", 
    "Nenek: Pacak dak tulung berin masker nih kik je, Nak?", 
    nama + ": Pacak, Nek.", 
    nama + ": Ni masker dari nenek ka. Pakai dulu!", //15
    "Oke, sinmung!", // 16
    "Ibu: Sayang, ka la pulang. Tulung beli sabun cuci tangan dulu, ok?", 
    nama + ": Di mane, Bu?", 
    "Ibu: Di tuko Bu Ani.", 
    "Yani: Cari ape, Dek?", //20
    nama + ": Nek meli sabun cuci tangan.", //21
    "Yani: Oh, langsung gi dalem bai.", 
    "Ani:  Nek meli ape, Dek?",
    nama + ": Ade sabun cuci tangan dak?", 
    "Ani: Oh, ade. Ni, dek!", //25
    "Sabun cuci tangan la dapet!", //26
    "Ibu: Sinmung, Sayang. Jangan lupa cuci tangan sebelum masuk gi rumah, ok!",
    "Tangan la tecuci!",
    "Hore, level 1 la sude!",
    nama + ": Ni sabun a, Bu.", //30

]
var txt2Bangka = [
    "Ibu: Ka pacak anter makan siang buet Kakek dak?", //0
nama + ": Oke, Bu.", //1
"Chai-chai di jalan, ok!",
"Tetangga: Hai, " + nama + " Denger-denger Bu Joko kene Covid.",
"Anak kecil: Hosh...hosh…Ku harus pulang sepuloh menit agik.",
"Anak kecil: Hatsi...hatsi...", //5
nama + ": Bu, ngape anak a?", //6
"Ibu-ibu: Je batuk, pilek, same agak demem. Jadi kami nek rapid test.", 
nama + ": Oh. Semoga ukan Covid ok, Bu.", 
"Ibu-ibu: Sinmung, Nak.",
"Kakek-kakek: UHUK UHUK", //10
nama + ": (Waduh, ku harus jage jarak nih)", //11
nama + ": (Wah, ku harus cepet-cepet nganter makanan Kakek)",
"Perawat: Kalau nek berubat, ni nomor antrian a.",
nama + ": Maaf, ku dak berubat. Sinmung.",
"Ibu-ibu: Tolong jage jarak, Nak.", //15
"Penjual buah: Cari ape, Dek?",
nama + ": Dak Pak. Sinmung.",
nama + ": (Bapak Ni dak pakai masker. Ku enggak lah meli buah di sini)",
"Ibu-ibu: Tukang roti a ke mane, ok?",
"Penjual buah: Dibeli, Dek. Buah a baru la datang a.", //20
nama + ": Maaf, dak dulu, Bu.",
"Penjual sembako: Cari ape, Dek?",
nama + ": Oh, dak cari ape-ape, Bu.",
nama + ": Permisi, jalan ke menara lewat mane, ok?",
"Pemuda: Oh, ka harus muter jalan a dari awal agik.", //25
"Hore, tangan la tecuci!", //26
"Kakek: Halo, " +nama+ " Seinget Kakek, Ibu ka nitip bekel untuk kakek.",
nama + ": Aok, Kek!",
nama + ": Ni bekel dari Ibu buet Kakek.",
"Kakek: Oh, sinmung.", //30
"Kakek: Pacak tulung beli sebutol sabun  cair kik tomat untuk Nenek dak?", //31
nama + ": Pacak, Kek.",
"Kakek: Sinmung. Ni duit a.",
"Kakek: Inget selalu jage jarak, ok!",
"Penjual buah: Silakan, Dek. Silakan kene pileh  buah a. Baru la datang a buah a ni.", //35
nama + ": Ade tomat, Bu?", //36
"Penjual buah: Ade, Dek. Yang ni baru la sampai a.",
nama + ": Oke, Bu. Sebungkus ni berape harge a?",
"Penjual buah: Rp10.000 jadilah.",
nama + ": Ok, Ni duit a, Bu.", //40
"Penjual buah: Sinmung, Dek.", //41
"Penjual sembako: Nek nyari ape, Dek?",
nama + ": Sabun cair ade, Bu?",
"Penjual sembako: Ade. Rp10.000 harge a.",
nama + ": Oke, ni duit a.", //45
"Sabun cair la tebeli", //46
"Penjual sembako: Sinmung.", 
"Tetangga: Oh, ka la besa, ok. " + nama,
"Nenek: Halo, " + nama +". Ade titipan dari kakek ka?",
nama + ": Ku gi mere tempet kakek dulu, nek.", //50
"Hore, tangan la tecuci!", //51
nama + ": Ni sabun kik tomat dari pasar titipan kakek.", //52
"Nenek: Sinmung. " +nama + ". Tulung cuci eh dulu, ok.",
"Tomat la tecuci",
nama + ": La ku cuci, Nek.", //55
"Nenek: Sinmung. Yo , masuk dulu. Kite minum cha di dalem.",
nama + ": Oke, Kek.",
"Tomat la tebeli",
"Hore, level 2 la sude.",
nama + ": (Ku pakai cairan pemberseh dulu).",
]
var txt3Bangka = [
    "Supir bus: Sinmung la makai jasa kami. Cek dulu suhu badan ikak di sanin sebelum masuk gi kota, ok.",
"Pemudi: Men suhu ka gi pucuk 37,4 derajat celcius. Ka dak jadi masuk gi kota wo..", //1
"Pemudi: Duh, lame a woh.",
"Pemuda: Berape suhu ku, Mbak?",
"Pemeriksa suhu: 36,8 derajat Celsius. La jadi masuk.",
"Pemeriksa suhu: Ku cek dulu suhu a jitha ok, Dek.", //5
"Pemeriksa suhu: 36,2 derajat. Tulung tunjukkin Kartu Kewaspadaan Kesehatan di sanin ok", //6
"Pemeriksa suhu: Dek, cek suhu a dulu gi sini!",
"Pemeriksa KKK: Jadi dak ku liet dulu Kartu Kewaspadaan Kesehatan a, Dek?",
nama + ": Ni, Pak.",
"Pemeriksa KKK: Oke, hasil tes a non-reaktif. Silakan masuk kota.", //10
 "Pemeriksa KKK: Dek,  Kartu Kewaspadaan Kesehatan a beri kami tinggok dulu ok di sini!", //11
"Pembeli: Bu, jadi berape total harge jagung same tomat a?",
"Penjual sayur: Total harge a Rp25.000, Bu.",
"Penjual sayur: Cari ape, Dek?",
nama + ": (Waduh, ibu neh dak bemasker. Ku enggak belanje gi je la).", //15
 nama + ": Endak, Bu.", //16
"Ibu-ibu: Hmmm, ke mane ok tukang jual sayur yang biasa a di sini nih?",
"Bapak-bapak: Manthit lah, kunci gudang ku tarok dimane, ok?",
"Penjage pabrik: Ku harus tetep begawe biarpun pandemi nih agik ade.",
"Ibu-ibu: Haduh, mane tukang jemput a neh, ok?", //20
"Tukang parkir: Waduh, tukang parkir bis a neh gimane ok? Ngape lik je parkir sekaput nih.", //21
nama + ": Numpang nanyak, ni tempet ape, ok? Ngape kene jage?",
"Perawat: Oh, Nih rumah kik karantina pasien Covid-19.",
"Perawat: Jage kesehatan ok, Dek. Jangan sampai akak masuk sini agik ok.",
"Dokter: Karene pasien Covid-19 la makin banyak, kapasitas gi rumah sakit nih ge makin dikit.", //25
"Dokter: Hemen ka demem, batuk kering, ape dak pilek, langsung cepet-cepet periksa di rumah sakit, ok.", //26
"Pengusaha: Tengah pandemi nih, penoh urang bejual yang bisnis a tekene dampak.",
"Pemudi: Tengah pandemi cemni nih, enggiak a bekumpul kik urang-urang banyak.",
"Satgas Covid: Gi sini ade sekeluarga yang tengah isolasi mandiri karene Covid-19.",
"Pegawai: Tengah pandemi nih penoh urang yang dak begawe.", //30
"Anak-anak: Ku harus rajin olahraga.", //31
"Nenek-nenek: Nak, ka ade ninggok laki ku dak?",
"Kakek-kakek: Nak, ka ade ninggok bini ku dak?",
"Nenek-nenek: tengah nyebrang jalan, ka harus chai-chai, woh.",
"Wartawan: Ape yang Bapak nek pada kik masyarakat nih biar dak tertular Covid?", //35
"Walikota: Tetep jage jarak aman, selalu pakai masker, same dak  berkerumun.", //36
"Wartawan: Berape dende buet pelanggar protokol Covid-19 Pak?", 
"Walikota: Gi daerah kite Rp250.000.", 
"Petugas Covid: Waduh, jumlah korban a nambah terus tiap ari.",
"Petugas Covid: Ade ape, Dek? Nek nyekar, ok?", //40
nama + ": Ku kesasar, Pak.", //41
"Petugas Covid: Ni kuburan orang tekene Covid-19.",
"Penjage toko: Aduh, lame wo barang a nih sampai.",
"Seperadek: Hai! " + nama + " la lame dak ketemu!",
nama + ": , la lame dak Aokketemu. Enduk ngape ka dak makai masker gi jabo neh?", //45
"Seperadek: Tenanglah, anye di depan rumah bai! Oh aok leh, adek ku la nunggu ka.", //46
"Seperadek: Oy, ka la sampai! Ngape lame a wo? Ku baru la nek gi meli makan buet ka. .",
nama + ": Aok, soal a sebelum ku ke terminal bis ku harus rapid dulu. Jadi, tadi ketinggelan bis yang pertama",
"Seperadek: Kik ape rapid? Ku ge sering dak bemasker hemen keluer-keluer.",
nama + ": Jangan anggep remeh! Semakin ari semakin banyak yang tertular tau dak!", //50
nama + ": Men ka engak pakai masker, biar ku bai lah yang meli makan. Kelak ku ngulek dudi.", //51
nama + ": (Hmmm, kelak ku meli masker kik jeorang).",
"Seperadek: Oh, sinmung. Tulung sekalian beli roti gi pasar baru ok.",
"Penjual barang: Aok, ambik la barang yang nek akak beli, Kak.",
nama + ": (Hmmm, barang yang nek ku beli dakde gi sini).", //55
"Ibu-ibu: Hmmm, meli ape, ok?", //56
"Penjual: Cari masker ok, Dek? Gi toko sebelah seperadek ku di pasar lame ade jual masker.",
"Pembeli: Bu, jadi berape harge semuin sayur, daging, same ikan a nih?",
"Penjual: Rp45.000, Bu.",
"Penjual Ikan same sayur: Dipilih, Dek ikan kik sayur a.", //60
"Penjual Ikan same sayur: Dipilih, Dek sayur same ikan a.", //61
nama + ": Berape harge sekilo ikan, Bu?",
"Penjual Ikan: Rp35.000.",
nama + ": Oke, beli sekilo ok, Bu. Ni duit a.",
"Penjual Ikan: Sinmung. ni belanje a ok.", //65
"Ibu-ibu: Tukang jual roti yang biasa di sanin tuh gimane, ok?", //66
"Penjual daging: Cari ape, Dek?",
nama + ": (Wah, bapak tuh dak bemasker. Ku enggiak lah belaje gi mere je).", 
nama + ": Endak, Pak.", 
"Pembeli: Pak, harge buah a jadi berape semuin a nih?", //70
"Penjual buah: Jadi total Rp50.000, Bu.", //71
"Penjual buah: Jo dibeli, Dek. Seger buah a nih agik a.",
"Ibu-ibu: Tukang roti di sanin, pindah ke Pasar Lame, Dek.",
"Ikan la tebeli!",
"Pedagang kaki-lima: Pasar? Oh, bejalan lurus dari sini bai, Dek.", //75
"Penjual: Masker? Oh, pacak meli di toko sebelah, Dek!", //76
"Petugas: Ku pacak negur bapak yang dak bemasker tuh..",
"Ibu-ibu: Bu, la nenger lum? Kate a satu keluarga besar di puset kota yang kene isolalsi di rumah woh!",
"Ibu-ibu: Aok, Bu. Jumlah urang yang tekene Covid-19 kin nambah terus.",
"Pembeli: Berape harge due masker ni, Bu?", //80
"Penjual baju: Rp20.000, Bu.", //81
"Penjual roti: Dibeli roti a, Dek.",
"Penjual roti: Dibeli, Dek. Agik anget roti a nih.",
nama + ": Tige bungkus roti ni berape, Pak?",
"Penjual Roti: Rp30.000, Dek.", //85
nama + ": Oke, ni duit a, Pak.", //86
"Penjual Roti: Sinmung. ni roti a.", 
"Roti la tebeli!",
"Penjual baju: Cari ape, Dek?",
"Penjual baju: Cari ape, Dek? Masker a bagus-bagus woh.", //90
nama + ": Berape harge empat masker, Bu?", //91
"Penjual baju: Rp40.000, Dek.", 
nama + ": Oke, Ku beli empat masker, Bu. Ni duit a.", 
"Penjual baju: Sinmung. Ni masker a.", 
"Masker la tebeli!", //95
nama + ": Ade ape ni?", //96
"Petugas Covid: Kawan ka nih ku bawa buet isolasi soal a hasil tes a positif Covid..",
nama + ": Waduh, ku baru lah sude ketemu je tadik.",
"Petugas Covid: Men cemtu ka ge harus kene tes. Alat kik ngetes a ade di kawan ku.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Ka harus isolasi mandiri selame 14 hari. Sampai jumpa!",
"Permainan la selesai. Sinmung la main permainan ni.",  
"Kiri kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanan kota:" + "<br>" + "<ul>" +"<li> Tempat pemakaman </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lame </li>"+ "</ul>", //104
"Permainan la sude. Ka ketabrak oto.",

]

// nasal
var indexTextNasal = [
    "Mulai Begukhau",
    "Lanjutkun penggukhauan",
    "Profil",
    "Kekhidit",
    "Ulas",
    "Pilih ulasmu",
    "Khagah",
    "Bai",
    "Genti baso",
    "Gelakh",
    "Kukhukkun Gelakhmu",
    "Nguluh ilung Menu Memulo",
]
var onloadTextNasal = [
    // level 1
    "Selamat khatung delum penggukhauan Surviving Covid Labyrinth. Delum penggukhauan sijo kau hago kelapahan delum keadaan pandemi Covid-19." + "<br>" + "Selamo kelapahan kau mesti nukhuti atukhan kesihatan, njuk-njuk njago jakhak aman, mbasuh culuk khan sabun, makai cayikhan pembekhesih culuk, makai masker, khadu ni jauhi khekhamian.", //0
    "Di sebelah kanan atas layakh, wat gakhis kesihatan sai nandokun tingkat kesihatanmu. Amun gakhis sudi kak belo, tando penggukhauan temat khan kau mesti ngulang njak pangkal luwut untuk tingkat sudi.", //1
    "Kelapahanmu di tingkat  1 khadu, amun kau selamat mulang ilung bahunmu di hujung khimbo." + "<br>" + "Semakkung kelapahan, sehelaunyo kau pamit pai khan indai akrabmu." + "<br>"+ "Selamat kelapahan!", //2
    // level 2
    "Selamat Khatung Agi. Di tingkat sijo kau hago nekhuskun Kelapahanmu. Kelapahanmu mulai njak puando khan Makmu.", //3
    "Ndang lupo tekhus tukhuti atukhan kesihatan kekheno kito masih delum keadaan pandemi Covid-19. Selamat ngelanjutkun Kelapahan di tingkat 2 sijo.",//4
    // level 3
    "Selamat, kau kak sampai di tingkat akhir Kelapahanmu. Di tingkat sijo kau mpai sampai di kota hago midukhi sanakmu." + "<br>" + "He-hati amun mbekhang tengekhan. Tetap tukhuti atukhan kesihatan, sai paling penting njago jakhak aman, tekhus makai masker, khadu ni jauhi khekhamian.", //5
    "Semakkung kau kukhuk kota, kau mesti cek suhu khadu ni jajakkun Kekhetu Kewaspadaan Kesihatanmu. Selamat Kelapahan!", //6
    "Catatan bakhang sai hago dibeli:" + "<br>" + "<ul>" +"<li> Iwo </li>" +"<li> Khuti tawakh </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Penggukhauan temat. Kau tumbukh setum.",
    "Penggukhauan temat. Tingkat kesihatanmu belo.",
]
var txt1Nasal = [
    "Indai: Wui, Hago dipo kau? dijo pai!", //0
    "Indai: Wui, ndang lupo basuh culuk khan sabun, yu!", //1
    "Indai: Amun Basuh culuk sudi, kau njago culukmu bekhesih khan aman njak virus.",
    "Indai: Kau dapuk mbasuh culuk di tengah teluhku.",
    "Na, Culukmu kak khadu basuh!",
    "Anak mudo: *Uhuk* Mehaf yu, tendaku ngehalangi tengekhanmu. Tapi, kau pandai liyu khan isan.", //5
    "Penjago  Khanguk: Anak mudo, ngapi kio kau meuwat makai masker? Ajo masker untukmu.", //6
    "Masker kak dapuk",
    "Penjago Khanguk: Helaunyo wui, kau kak makai masker! Liyudo.",
    nama + ": Tekhimo kasih!" ,
    "Inguk tekhus njago jakhak aman, yu!", //10
    "*Uhuk* wat kau ngeliyak cucungku? Yo meuwat makai masker mit jenu.", //11
    nama + ": O, kuliyak yo di khimbo jenu.", 
    "Sawo: pandai kinah tulung njukkun pai masker sijo lawan yo, Nak?", 
    nama + ": Na, Pandai.", 
    nama + ": ajo Masker njak sawomu. Pakaido pai!", //15
    "yu, tekhimo kasih!", // 16
    "Mak: nak, kak mulang kio kau. Tulung belikun pai sabun basuh culuk, yu?", 
    nama + ": Di dipo, Mak?", 
    "Mak: Di wakhung Ani.", 
    "Yani: hago mbeli api, Dek?", //20
    nama + ": Hago mbeli sabun basuh culuk.", //21
    "Yani: O, langsung kukhuk delum gawuh.", 
    "Ani: Selamat khatung, hago mbeli api?", 
    nama + ": wat sabun basuh culuk?", 
    "Ani: O, wat. Ajo, Kak!", //25
    "Sabun basuh culuk kak dapuk!", //26
    "Mak: Tekhimo kasih, nak. Ndang lupo basuh culuk semakkung kukhuk bahun, yu!",
    "Culuk Kak Khadu Basuh!",
    "na, Tingkat 1 kak khadu!",
    nama + ": Ajo sabunnyo, Mak.", //30
]
var txt2Nasal = [
    "Mak: Pandai kau ngantakkun mai gulai mangan khuwali Tamungmu?", //0
nama + ": yu, Mak.", //1
"He-hati di tengekhan, yu!",
"Tetanggo: wui, " + nama + " kute-tengis sawo Joko keno Covid.",
"sekhanak khenik: Hosh...hosh… nyak mak pandai mak mulang sepuluh menit agi.",
"sekhanak khenik: Hatcim...hatcim...", //5
nama + ": Ngapi anakmu, Ncu?", //6
"Bibai: Yo hiyuk bintuk lawan agak mekhiang. Jadi kam hago rapid test.", 
nama + ": O. kalau nido ayin keno Covid, Ncu.", 
"Bibai: Tekhimo kasih, Nak.",
"Tamung: UHUK UHUK", //10
nama + ": (ai, nyak mesti njago jakhak ajo)", //11
nama + ": (Wui, nyak hago cecepat ngantakkun mai gulai tamungku)",
"Pekhawat: Amun hago beubat, ajo numukh antriannyo.",
nama + ": Mehaf, nyak meuwat hago beubat. Tekhimo kasih.",
"Bibai: Tulung jago jakhak, Nak.", //15
"Tukang jual wah-wahan: ngilum api, Dek?",
nama + ": Meuwat Ncu. Tekhimo kasih.",
nama + ": (Khagah sijo meuwat makai masker. Nyak ngguk mbeli wah-wahan di dijo.)",
"Bibai: Dipo Tukang khuti sijo, adak?",
"Tukang jual wah-wahan: belido, Dek. Wah-wahannyo mpai khatung.", //20
nama + ": Mehaf, meuwat kung, Ncu.",
"Tukang Wakhung: Ngilum api, Dek?",
nama + ": O, Meuwat ngilum api-api, Ncu.",
nama + ": Pekhmisi, tengekhan hago ilung menara ni di dipo kio, wui?",
"Anak mudo: O, kau mesti mutakh tengekhan njak pangkal.", //25
"Na, Culuk kak khadu basuh!", //26
"Tamung: wui, " +nama+ " Pekhasoan Tamung, makmu jenu nitipkun tanci untuk Tamung.",
nama + ": Yedo nihan, Mung!",
nama + ": Ajo tanci njak mak untuk Tamung.",
"Tamung: yu, tekhimo kasih.", //30
"Tamung: Pandai kau nulung belikun pai segudu sabun cayikh lawan telung mendikho untuk sawomu?", //31
nama + ": Payu, Mung.",
"Tamung: Tekhimo kasih. Ajo tancinyo.",
"Tamung: Inguk tekhus njago jakhak, yu!",
"Tukang jual wah-wahan: Madah, Dek. Pilihdo wah-wahannyo. Wah-wahannyo agi segar.", //35
nama + ": Wat telung mendikho, Ncu?", //36
"Tukang jual wah-wahan: wat, Dek. Sai sijo mpai khatung.",
nama + ": Yu, Ncu. Pikho khegonyo secumpuk?",
"Tukang jual wah-wahan: Rp10.000 gawuh.",
nama + ": Yu, ajo tancinyo, Ncu.", //40
"Tukang jual wah-wahan: Tekhimo kasih, Dek.", //41
"Tukang Wakhung: Hago ngilum api, Dek?",
nama + ": Wat sabun cayikh, Ncu?",
"Tukang Wakhung: Wat. Khegonyo Rp10.000.",
nama + ": Yu, Ajo tancinyo.", //45
"Sabun Cayikh kak khadu dibeli", //46
"Tukang Wakhung: Tekhimo kasih.", 
"Tetanggo: Ai, kak balak kidah kau sijo, wui. " + nama,
"Sawo: Wui, " + nama +". Wat titipan njak tamungmu jenu?",
nama + ": nyak mit bahun tamung pai, sawo.", //50
"Na, kak khadu basuh culuk!", //51
nama + ": ajo sabun khan telung mendikho njak pekan jenu titipan tamung.", //52
"Sawo: Tekhimo kasih. " +nama + ". Tulung basuhi pai, yu.",
"Telung Menidkho kak khadu basuh",
nama + ": Kak khadu kubasuhi, sawo.", //55
"Sawo: Tekhimo kasih. Madah, kukhukdo pai. Kito nginum teh di delum.",
nama + ": Payu, Mung.",
"Telung Mendikho kak khadu dibeli",
"Na, Tingkat 2 Kak Khadu.",
nama + ": (Nyak hago makai cayikhan pembekhesih pai).",


]
var txt3Nasal = [
    "Supikh bis: Tekhimo kasih kak nggunokun jasa kam. Silahkun cek suhu badan di disan semakkung kukhuk kota.",
"Muli: Amun suhumu lebih njak 37,5 derajat Celsius, kau meuwat dapuk kukhuk kota ngio.", //1
"Muli: Ai, sakonyo kidah wui.",
"Mekhanai: Pikho suhuku, Mbak?",
"Pemekhikso suhu: 36,8 derajat Celsius. Kukhukdo.",
"Pemekhikso suhu: nyak ngecek suhunyo sekhebuk yu, Dek.", //5
"Pemekhikso suhu: 36,2 derajat. Mitdo jajakkun Kekhetu Kewaspadaan Kesihatan di disan", //6
"Pemekhikso suhu: Dek, cek suhu pai di dijo!",
"Pemekhikso KKK: Dapuk ngeliyak Kekhetu Kewaspadaan Kesihatannyo, Dek?",
nama + ": Ajo, Pak.",
"Pemekhikso KKK: Payu, hasil tes meuwat-reaktif. Mitdo kukhuk kota.", //10
 "Pemekhikso KKK: Dek, jajakkun Kekhetu Kewaspadaan Kesihatan pai di dijo!", //11
"Tukang beli: Ncu, jadi pikho ungin-ungin khegonyo jagung lawan telung mendikho sijo?",
"Tukang jual ngengukhoan: Ungin-unginnyo Rp25.000, Buk.",
"Tukang jual ngengukhoan: Ngilum api, Dek?",
nama + ": (Ai, bibai sijo meuwat makai masker. Nyak ngguk mbeli khan yo wui).", //15
 nama + ": Meuwat, Ncu.", //16
"Bibai: Hmmm, tukang jual ngengukhoan sai galak di dijo sijo dipodo yo?",
"Khagah: Ai, kunci gudang kupikkun di dipo, yo?",
"Tukang jago pabrik: Nyak tetap begawian senemun mpuk masih pandemi.",
"Bibai: Au, dipo kidah jemputannyo, gui?", //20
"Tukang parkir: Ai, sai markir bis sijo dipo, yo? Ngapi munih markir asak galak sijo.", //21
nama + ": Numpang betanyo, Khan api kio ajo? Ngapi sangkan dijagoi?",
"Pekhawat: O, Ajo bahun karantina pasien Covid-19.",
"Pekhawat: Jago kesihatan yu, Dek. Ndang sampai kau kukhuk delum sijo.",
"Doktokh: Kekheno pasien Covid-19 kak tambah duwik, khan di khumah sakit jugo kak tebatas.", //25
"Doktokh: Amun kau behaban, hiyuk hampo, atau bintuk, cepatdo pekhikso ilung khumah sakit, yu.", //26
"Pengusaho: Di waktu pandemi sijo, duwik pengusaha sai bisnisnyo keno pengakhuh.",
"Muli: Waktu pandemi, jauhi beke-kumpul khan hulun.",
"Petugas Covid: Di dijo sijo wat sekeluarga sai tengahan isolasi mandiri kekheno Covid-19.",
"Pegawai: waktu pandemi jeujo sijo duwik hulun sai kelebunan mato pencakhian.", //30
"Sekhe-khanak: Nyak mesti khajin olahraga.", //31
"Bibai tuho: Nak, wat kau ngeliyak khagahku?",
"Khagah Tuho: Nak, wat kau ngeliyak sawoku?",
"Bibai Tuho: Amun mbekhang tengekhan, kau he-hati, yu.",
"Wakhtawan: Api sai hago Bapak sampaikun lawan Adik sanak makhi meuwat tetular Covid?", //35
"Walikota: Tetapdo njago jakhak aman, tekhus makai masker, khadu ni ndang beke-kumpul.", //36
"Wakhtawan: Pikho dendo bagi sai ngelanggakh atukhan Covid-19, Pak?", 
"Walikota: Amun kito dijo Rp250.000.", 
"Petugas Covid: Ai, jumlah hulun sai keno nambah tekhus tiap walinyo.",
"Petugas Covid: Wat pekhelu api, Dek? Hago ziarah, uu?", //40
nama + ": Nyak tesesat, Pak.", //41
"Petugas Covid: Ajo kubukhan korban Covid-19.",
"Penjago toko: Au, bakhangnyo sako benukh sampainyo.",
"Sanak: Wui! " + nama + " Kak sako kito meuwat betunggo!",
nama + ": Uu, Kak sako kito meuwat betunggo. Ngapi kio kau luwah bahun meuwat bemasker?", //45
"Sanak: Tenang gawuh, hano di hadapan bahun sijodo ngio! Ai uu, adingku kak sako nunggu kau.", //46
"Sanak: Na, kak sampai kio kau! Ngapi kio sako benukh? Nyak mpai hago mbelikun kau kanikan.",
nama + ": Uu, Semakkung ilung terminal bis nyak rapid pai. Jadi jenu tinggalkun bis pekhtamo.",
"Sanak: Untuk api rapid? Nyak galak jugo ngio amun mit-mit meuwat makai masker.",
nama + ": Ndang dianggap khimih! Setiap wali tambah duwik ngio sai keno pandai kio kau!", //50
nama + ": Amun kau meuwat makai masker, Pandaido nyak mbeli kanikan. Kaenti nyak dijo luwut.", //51
nama + ": (Hmmm, kaenti kubelikun masker untuk tian).",
"Sanak: Yu, tekhimo kasih. Tulung sekalian belikun pai khuti di Pekan Mpai.",
"Tukang jual bakhang: Yu, pilihdo bakhangnyo, Dek.",
nama + ": (Hmmm, bakhang sai hago kubeli meuwat ngeduk di dijo).", //55
"Bibai: Hmmm, hago mbeli api kio?", //56
"Tukang jual: Ngilum masker Uu, Dek? Toko sai di sebelah toko sanakku di Pekan Sako sai njual masker.",
"Tukang beli: Ncu, pikho ungin-ungin khegonyo ngengukhoan, daging, khan iwo sijo?",
"Tukang jual: Rp45.000, Buk.",
"Tukang jual Iwo khan tukang jual ngengukhoan: pilihdo, Dek iwo lawan ngengukhoannyo.", //60
"Tukang jual Iwo khan tukang jual ngengukhoan: pilihdo, Dek ngengukhoan lawan iwonyo.", //61
nama + ": Pikho Khego iwo sekilo, Ncu?",
"Tukang jual Iwo: Rp35.000.",
nama + ": Jadi, mbeli sekilo yu, Ncu. Ajo tancinyo.",
"Tukang jual Iwo: Tekhimo kasih. Ajo belanjoannyo.", //65
"Bibai: Tukang jual khuti sai biaso di disan dipodo, adak?", //66
"Tukang jual daging: Ngilum api, Dek?",
nama + ": (Ai, Khagah sudi meuwat makai masker. Nyak ngguk mbeli khan yo wui).", 
nama + ": Meuwat, Ncu.", 
"Tukang beli: Ncu, khego wah-wahannyo pikho ungin-unginnyo?", //70
"Tukang jual wah-wahan: Jadi ungin-unginnyo Rp50.000, Buk.", //71
"Tukang jual wah-wahan: belido, Dek. Wah-wahannyo agi segar benukh.",
"Bibai: Tukang khuti sai di disan, kak pindah ilung Pekan sako, Dek.",
"Iwo kak khadu dibeli!",
"Tukang jual pinggikh tengekhan: Pekan? O, lapah khulus gawuh njak ijo, Dek.", //75
"Tukang jual: Masker? O, pandai mbeli di toko sebelah, Dek!", //76
"Petugas: Nyak hago nekhido khagah sai meuwat makai masker sudi.",
"Bebibaian: Buk, kak pandai kung? Lanyo hulun wat sekeluarga balak di tengah kota sai diisolasi di bahun ngio!",
"Bebibaian: Uu, Buk. Jumlah hulun sai keno Covid-19 nambah tekhus.",
"Tukang beli: Pikho khego khuwo mbigi masker sijo, Ncu?", //80
"Tukang bakhang kayin: Rp20.000, Buk.", //81
"Tukang jual khuti: belido khutinyo, Dek.",
"Tukang jual khuti: belido khutinyo, Dek. Khutinyo agi panas.",
nama + ": Telu bungkus khuti sijo pikho, Pak?",
"Tukang jual khuti: Rp30.000, Dek.", //85
nama + ": Yu, Ajo tancinyo, Ncu.", //86
"Tukang jual khuti: Tekhimo kasih. Ajo khutinyo.", 
"Khuti kak khadu dibeli!",
"Tukang bakhang kayin: Ngilum api, Dek?",
"Tukang bakhang kayin: Ngilum api, Dek? Maskernyo he-helau ngio.", //90
nama + ": Pikho khego pak mbigi masker, Ncu?", //91
"Tukang bakhang kayin: Rp40.000, Dek.", 
nama + ": Jadi, Nyak mbeli pak mbigi masker, Ncu. Ajo tancinyo.", 
"Tukang bakhang kayin: Tekhimo kasih. Ajo maskernyo.", 
"Masker kak khadu dibeli!", //95
nama + ": Ngapi ajo?", //96
"Petugas Covid: Indaimu sijo kubatuk hago isolasi kekheno hasil tesnyo positif Covid.",
nama + ": Ai, Nyak mpai khadu betunggo lawan yo jenu.",
"Petugas Covid: Amun jeusan kau hago dites jugo. khamuan tesnyo wat di Indaiku.",
"Hasil tes: Meuwat-reaktif!", //100
"Petugas Covid: Kau mesti isolasi mandiri selamo 14 wali. Sampai betunggo agi!",
"Penggukhaun temat. Tekhimo kasih kak nggukhaukun penggukhaun sijo.",  
"Sebelah Kikhi kota:" + "<br>" + "<ul>" +"<li> Pekan Mpai </li>" +"<li> Khumah Sakit </li>" + "<li> Pekhumahan apartemen </li>"+ "</ul>", //103    
"Sebelah Kanan kota:" + "<br>" + "<ul>" +"<li> Kubukhan </li>" +"<li> Kantukh Walikota </li>" + "<li> Pekan Sako </li>"+ "</ul>", //104
"Penggukhauan temat. Kau tumbukh setum.",
]

// rejang
var indexTextRejang = [
    "Muloi belau",
    "Lanjut main",
    "Profil",
    "Kredit",
    "Jenis Kelamin",
    "Kiliak jenis kelamin nu",
    "Smanei",
    "Slawei",
    "Ubeak baso",
    "Gen",
    "Nepek gen nu",
    "Belek moi menu pertamo",
]
var onloadTextRejang = [
    // level 1
    "Selamat teko neak lem permainan Surviving Covid Labyrinth. Lem permainan yo ko betualang neak lem keadaan pandemi Covid-19." + "<br>" + "Lem ko betualang ko harus temotoa cao kesehatan, awei jemago jarak aman, puk tangen ngen sabun, makei bioa pembersih tangen, makei masker, ngen milok kekopoa.", //0
    "Nak kanen das layar, ade gais kesehatan tmunjuk tiket kesehatan nu. Amen gais o abis, brartai permainan nu bi sudo ngen ko wajib mulang igai nak level o ano.", //1
    "Petualang nu nak level 1 sudo amen ko bi selamat belek moi umeak nu nak ujung imbo." + "<br>" + "Ayok betualang, de baik ne ko pamit kileak ngen kuat baik nu." + "<br>"+ "Selamat betualang!", //2
    // level 2
    "Selamat teko igai. Nak level yo ko melanjutkan petualang nu. Petualangan nu nemuloi miling ngen mak nu.", //3
    "Jibeak coa tinget utuk tep maneu cao kesehatan karno ite masiak lem pandemi Covid-19. Selamat tempuak petualang nak level 2 yo.",//4
    // level 3
    "Selamat, ko bi sapei level terakhir petualangannu. Nak level yo ko pei sapei nak kota utuk  temau pasuak nu." + "<br>" + "Atei-atei bi dong sembeang dalen. Tetep maneu cao kesehatan, de utamo jemago jarak aman, terus makei masker, ngen milok kekopoa.", //5
    "Ayok ko masuk kota, ko harus cek suhu ngen tmunjuk kartu Kewaspadaan Kesehatan nu. Selamat bepetualang!", //6
    "Daftar barang de harus tenukua:" + "<br>" + "<ul>" +"<li> Ikan </li>" +"<li> Ruti tawar </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Permainan bi abis. Ko tnumbua stom.",
    "Permainan bi abis. Tiket kesehatan nu bi abis.",
]
var txt1Rejang = [
    "Kuat: Hoi, ko lok moi ipe? Miyo kileak!", //0
    "Kuat: Hoi, jibeak coa tinget puk tangen ngen sabun, awu!", //1
    "Kuat: Ngen puk tangen, ko gi masti tangen nu bersih ngen aman kunei virus.",
    "Kuat: Ko nam puk tangen nak muko umeak ku.",
    "Ureee, tangen nu bi sudo mpuk!",
    "Smanei: *Uhuk* Maaf awu, tendaku mengalang dalennu. Tapi, ko masiak pacok liwet di o.", //5
    "Tun Jago  Gerbang: Hoi, gene ko coa makei masker? Dio masker gik nu.", //6
    "Dapet masker",
    "Tun Jago Gerbang: Padek, ko bi makei masker! Buliak liwet.",
    nama + ": Mokasiak!" ,
    "Kinget trus jemago jarak aman, awu!", //10
    "*Uhuk* Jano ko kemliak kepau ku? Si coa makei masker bi dong alau.", //11
    nama + ": Awu, uku kemliak si nak imbo.", 
    "Sebei: Pacok melei masker yo ngen si, Nok?", 
    nama + ": Awu pacok.", 
    nama + ": Dio masker kunei sebei nu. Kakei kileak!", //15
    "Awu, Mokasiak!", // 16
    "Mak: Anok, ko bi belek. Tulung tukua sabun utuk puk tangen kileak, awu?", 
    nama + ": Neak ipe, Mak?", 
    "Mak: Neak warung Bik Ani.", 
    "Yani: Mesoa jano?", //20
    nama + ": Lok tenukua sabun utuk puk tangen.", //21
    "Yani: Oh, masuk milem bae.", 
    "Ani: Selamat teko, lok tenukua jano?", 
    nama + ": Ade sabun puk tangen?", 
    "Ani: Oh, ade. Die, sabun puk tangen ne!", //25
    "Dapet sabun puk tangen!", //26
    "Mak: Mokasiak, Nok. Jibeak coa tinget puk tangen ayok masuk dasei, awu!",
    "Tangen bi nepuk!",
    "Ureee, level 1 sudo!",
    nama + ": Die sabun ne, Mak.", //30
]
var txt2Rejang = [
    "Mak: Ko pacok mbes mei bilai utuk Datuk?", //0
nama + ": Awu, Mak.", //1
"Atei-atei nak dalen, awu!",
"Tetanggo: Hoi, " + nama + " te teniuk ngenyan Joko keno Covid.",
"Anok Titik: Hosh...hosh...Uku harus belek puluak menit igai.",
"Anok Titik: Hatsi...hatsi...", //5
nama + ": Bik, anok kumu gene?", //6
"Mak-mak: Si botok, leak, ngen agok ta ang. Ijai keme lok rapid test.", 
nama + ": Oh. Kinoi te co si Covid, Bik.", 
"Mak-mak: Mokasiak, Nok.",
"Datuk-datuk: UHUK UHUK", //10
nama + ": (Woi, uku harus jemago jarak die)", //11
nama + ": (Woi, uku harus gegulut mbes kembuk Datuk)",
"Perawat: Amen lok bubet, dio nomor belembot ne.",
nama + ": Maaf, uku coa bubet. Mokasiak.",
"Mak-mak: Tulung jemago jarak, Nok.", //15
"Tun jagea buak: Mesoa jano?",
nama + ": Coa Pak. Mokasiak.",
nama + ": (Tiak yo coa makei masker. Coa ku lok tenukua buak nak ye.)",
"Mak-mak: Tukang ruti moi ipe, gi?",
"Tun jagea buak: Tukua ba. Buak yo pei sapei.", //20
nama + ": Maaf, coa kileak, Bik.",
"Tun jagea sembako: Mesoa jano?",
nama + ": Coa mesoa jejano, Bik.",
nama + ": Nupang liwet, dalen moi menara liwet ipe, gi?",
"Smanei: Oh, ko harus mutea dalen igai kunei pertamo.", //25
"Ureee, tangen bi mpuk", //26
"Datuk: Hoi, " +nama+ " Kinget Datuk, Mak nu tmitip kembuk utuk Datuk.",
nama + ": Awu, Tuk!",
nama + ": Die kembuk kunei Mak utuk Datuk.",
"Datuk: Awu, mokasiak.", //30
"Datuk: Pacok tnukua de kaco sabun cair ngen telung dira utuk Sebei?", //31
nama + ": Awu, Tuk.",
"Datuk: Mokasiak. Dio caci ne.",
"Datuk: Tinget terus jemago jarak, awu!",
"Tun Jagea Buak: Maroba. Miliak ba buak yo. Buak yo masiak belau.", //35
nama + ": Ade telung dira, Bik?", //36
"Tun jagea buak: Ade. De dio pei sapei.",
nama + ": Awu, Bik. De bukus yo kedau go ne?",
"Tun Jagea Buak: Rp10.000 bae.",
nama + ": Awu, dio caci ne, Bik.", //40
"Tun Jagea Buak: Mokasiak, awu.", //41
"Tun Jagea Sembako: Lok mesoa jano?",
nama + ": Sabun cair ade, Bik?",
"Tun Jagea Sembako: Ade. Rp10.000 go ne.",
nama + ": Awu, die caci ne.", //45
"Sabun cair bi tenukua", //46
"Tun Jagea Sembako: Mokasiak.", 
"Tetanggo: Oh, ko bi lai gi. " + nama,
"Sebei: Oii, " + nama +". Jano ade nelei Datuknu?",
nama + ": Uku alau moi kakea Datuk kileak, Sebei.", //50
"Ureee, tangen bi nepuk!", //51
nama + ": Dio sabun ngen telung dira kunei pasar tnitip Datuk.", //52
"Sebei: Mokasiak. " +nama + ". Tulung nepuk kileak, awu.",
"Telung dira bi nepuk",
nama + ": Sudo ku mpuk, Sebei.", //55
"Sebei: Mokasiak. Maro, masuk kileak. Ite mbuk bioa teh dasei.",
nama + ": Awu, Tuk.",
"Telung dira bi tenukua",
"Ureee, level 2 sudo",
nama + ": (Uku makei bioa pembersih kileak).",
]
var txt3Rejang = [
    "Supir stom: Mokasiak bi temupang stom keme. Alau ba kecek suhu awok nak di o ayok masuk kota .",
"Slawei: Amen suhu awok nu nak das 37,5 derajat Celsius, ko coa buliak masuk kota awu.", //1
"Slawei: Woi, an nien gi.",
"Smanei: Kedau suhu awokku, Yuk?",
"Tukang perikso suhu: 36,8 derajat Celsius. Masuk ba.",
"Tukang perikso suhu: Uku cek suhu ne tegoa, awu.", //5
"Tukang perikso suhu: 36,2 derajat. Alau ba tmunjuk Kartu Kewaspadaan Kesehatan nak di", //6
"Tukang perikso suhu: Cek kileak suhu nak yo!",
"Tukang Perikso KKK: Buliak kemliak Kartu Kewaspadaan Kesehatan ne?",
nama + ": Die, Pak.",
"Tukang Perikso KKK: Sudo, asea tes ne non-reaktif. Masuk ba kota.", //10
 "Tukang Perikso KKK: Tmunjuk Kartu Kewaspadaan Kesehatan kileak nak yo!", //11
"Tukang Nukua: Bik, ijai kedau tukua jagung ngen telung dira ne?",
"Tukang Jagea Pucuk: Kute ne Rp25.000, Bik.",
"Tukang Jagea Pucuk: Mesoa jano?",
nama + ": (Woi, mbei yo coa makei masker die. Coa ku lok temukua da).", //15
 nama + ": Coa, Bik.", //16
"Mak-mak: Hmmm, tun jagea pucuk biaso neak yo moi ipe, gi?",
"Tiak-tiak: Woi, kucai gudang ku nak ipe ku mpek gi?",
"Tukang Tunggau Pabrik: Uku harus tep kerjo keras kunyau pun masiak pandemi.",
"Mak-mak: Woi, ipe tukang de mapet yo, gi?", //20
"Tun Tukang Parkir: Woi, neak ipe tun temuan stom yo? Pek stom basing bae.", //21
nama + ": Nupang tanye, dio kakea jano? Gene jenago?",
"Perawat: Woi, dio kakea tun sakit Covid-19.",
"Perawat: Jago kesehatan, awu. Jibeak sapei ko masuk miyo.",
"Dokter: Karno tun sakit Covid-19 yo tambeak dau, mako kakea pek tun sakit Covid-19 o makin tebatas.", //25
"Dokter: Amen ko demem, botok keing, atau leak, gacang ba ko merikso umeak sakit, awu.", //26
"Pengusaho: Nak maso pandemi yo, dau pengusaho bangkrut.",
"Slawei: Bi dong pandemi yo, milok kekopoa ngen dau tun.",
"Satgas Covid: Nak yo ade de keluargo bi dong isolasi mandiri karno Covid-19.",
"Pegawai: Bi dong pandemi yo dau tun cigai kerjo.", //30
"Anok-anok: Uku harus rajin olahraga.", //31
"Sebei-sebei: Nok, jano ko ade kemliak smatenku?",
"Datuk-datuk: Nok, ade ko kemliak ngenyanku?",
"Sebei-sebei: Bi dong sembeang dalen, ko harus atei-atei,awu.",
"Wartawan: Jano de kelok Bapak semapai ngen masyarakat yo mako coa tetular Covid?", //35
"Walikota: Tetep ba jemago jarak, terus makei masker, ngen jibeak kerumun.", //36
"Wartawan: Kedau dendo amen tun melanggar protokol Covid-19, Pak?", 
"Walikota: Nak kakea te Rp250.000.", 
"Petugas Covid: Woi, jumlah tun keno Covid-19 yo tambeak terus tiep bilai.",
"Petugas Covid: Hoi, Ade jano uleak? Lok cmucua bioa, awu?", //40
nama + ": Uku limau, Pak.", //41
"Petugas Covid: Dio kubua tun Covid-19.",
"Tun jago toko: Woi, barang ne cendok nien sapei.",
"Pasuak: Hoi! " + nama + " bi an coa temau!",
nama + ": Awu, bi an coa temau. Gene ko nak lua coa makei masker?", //45
"Pasuak: Tenang bae, nak muko umeak yo ba! Awu, asuak ku bi mbot ko.", //46
"Pasuak: Hoi, ko bi sapei! Gene cendok nien? Uku pei lok tenukua kembuk nu.",
nama + ": Awu, ayok moi terminal bus o rapid kileak. Ijai ano ketinggea stom pertamo.",
"Pasuak: Jano gen guno rapid? Uku kenoi galok coa pakei masker amen bi dong alau.",
nama + ": Jibeak manggap remeh! Tambeak bilai tambeak dau de maliak ne uyo die!", //50
nama + ": Amen ko coa lok makei masker, kunyau uku bae tenukua kembuk ne. Be uku belek igai.", //51
nama + ": (Hmmm, be uku tenukua masker utuk tobo o).",
"Pasuak: Oh, mokasiak. Tulung tnukua ruti nak pasar belau.",
"Tukang Jagea Barang: Awu, miliak ba barang ne.",
nama + ": (Hmmm, barang de lok ku tenukua coa gen nak yo).", //55
"Mak-mak: Hmmm, tmukua jano, gi?", //56
"Tukang Jagea: Mesoa masker, awu? Toko nak depeak toko pasuak ku nak pasar an jagea masker.",
"Tukang Tukua: Bik, ijai kedau tukua kute pucuk, daging, ngen kan yo?",
"Tukang Jagea: Rp45.000, Bik.",
"Tukang Jagea Kan ngen Pucuk: Kiliak ba, kan ngen pucuk ne.", //60
"Tukang Jagea Kan ngen Pucuk: Kiliak ba, kan ngen pucuk ne.", //61
nama + ": Kedau go kan de kilo, Bik?",
"Tun Jagea Kan: Rp35.000.",
nama + ": Awu, tenukua de kilo awu, Bik. Dio caci ne.",
"Tukang jagea Kan: Mokasiak. Dio barang ne.", //65
"Mak-mak: Tukang Ruti biaso nak di nak ipe, gi?", //66
"Tukang Jagea daging: Mesoa jano?",
nama + ": (Woi, tiak o coa makei masker. Uku coa lok belanjo ngen si).", 
nama + ": Coa, Pak.", 
"Tukang Nukua: Pak, kedau go buak kekute ne?", //70
"Tukang Jagea Buak: Ijai kute ne Rp50.000, Bik.", //71
"Tukang Jagea Buak: Tukua ba. Buak ne belau.",
"Mak-mak: Tukang ruti nak di o, kaliak moi pasar an.",
"Kan bi sudo tenukua!",
"Pedagang kekea-lemo: Pasar? Oh, cukup dalen luus kunei yo bae.", //75
"Tukang Jagea: Masker? Oh, pacok tnukua nak toko depeak!", //76
"Petugas: Uku lok temgur tiak de coa pakei masker o.",
"Mak-mak: Bik, bi temiuk kumu? Nadeak ne do keluargo lai nak puset kuta isolasi nak umeak!",
"Mak-mak:Awu, Bik. Tun de keno Covid-19 tambeak terus.",
"Tukang nukua: Kedau go duai masker yo, Bik?", //80
"Tun Jagea Bajau : Rp20.000, Bik.", //81
"Tukang Jagea Ruti: Tukua ba ruti yo.",
"Tukang Jagea Ruti: Tukua ba. Ruti ne masiak panes.",
nama + ": Telau bukus ruti yo kedau go ne, Pak?",
"Tukang Jagea Ruti: Rp30.000.", //85
nama + ": Awu, dio caci ne, Pak.", //86
"Tukang Jagea Ruti: Mokasiak. Dio ruti ne.", 
"Ruti bi tenukua!",
"Tukang Jagea Bajau: Mesoa jano?",
"Tukang Jagea Bajau: Mesoa jano? Masker ne be baes ba.", //90
nama + ": Kedau go pat masker, Bik?", //91
"Tukang Jagea Bajau: Rp40.000.", 
nama + ": Awu, uku tenukua pat masker, Bik. Dio caci ne.", 
"Tukang Jagea Bajau: Mokasiak. Dio masker ne.", 
"Masker bi tenukua!", //95
nama + ": Gene dio?", //96
"Petugas Covid: Kuat nu yo ku mbin utuk isolasi karno asea tes ne positif Covid.",
nama + ": Woi, uku bi sudo temau si ano.",
"Petugas Covid: Amen awei o ko harus tes kulo. Alat tes ne ade ngen kuat ku.",
"Asea tes: Non-reaktif!", //100
"Petugas Covid: Ko harus isolasi mandiri selamo 14 bilai. Sapei temau igai!",
"Permainan gi sudo. Mokasiak sudo main permainan yo.",  
"Kideu kota:" + "<br>" + "<ul>" +"<li> Pasar Belau </li>" +"<li> Umeak sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanen kota:" + "<br>" + "<ul>" +"<li> Kakea Kubua </li>" +"<li> Kator Walikota </li>" + "<li> Pasar An </li>"+ "</ul>", //104
"Permainan bi abis. Ko tnumbua stom.",
]

// lampung
var indexTextLampung = [
    "Menu baru",
    "Lanjutko pekhmainan",
    "Propil",
    "Kredit",
    "Gender",
    "Pilih gender mu",
    "Bakas",
    "Bebai",
    "Ubah bahasa",
    "Gelakh",
    "Kukhukko gelakh mu",
    "Muloh mit Menu utama",
]
var onloadTextLampung = [
    // level 1
    "Selamat togok dilom pekhmainan Surviving Covid Labyrinth. Dilom pekhmainan sinji niku haga bekhpetualang dilom situasi pandemi Covid-19." + "<br>" + "Selama bekhpetualang niku hakhus nutukko protokol kesehatan, injuk ngejaga jarak aman, mbasuh culuk pakai sabun, makai caikhan pembekhsih culuk, makai masker, khik ngehindakhi kerumunan.", //0
    "Di sisi kanan atas layakh, wat gakhis kesehatan sai nunjukko tingkat kesehatanmu. Kik gakhis hinno bela, maka pekhmainan haga berakhikh khik niku hakhus ngulang jak awal pakai level hinno.", //1
    "Petualangan mu di level 1 selesai kik niku selamat mulang mit lambanmu di ujung pullan." + "<br>" + "Semakkung bekhtualang, wat helauni niku  nangguh guk khik betikmu." + "<br>"+ "Selamat bekhpetualang!", //2
    // level 2
    "Selamat khatong luwot. Di level inji niku haga ngelajuko petualanganmu. Petualanganmu dimulai dengan percakapan dengan ibumu.", //3
    "Dang lupa kik tetap nutukko protokol kesehatan ulih kham masih dilom masa pandemi Covid-19. Selamat menempuh petualangan di level 2 ini.",//4
    // level 3
    "Selamat, niku khadu sappai level terakhir lelapahanmu. Di level sinji niku ampai sappai di kota manjau puakhi." + "<br>" + "Hati-hati kik nyebekhang khelaya. Tetap tutukko protokol kesehatan, terutama ngejaga jarak aman, selalu pakai masker, guk hindari kerumunan.", //5
    "Semakkung niku kukhuk kota, niku hakhus cek suhu guk liyakko Kartu Kewaspadaan Kesehatanmu. Selamat bertualang!", //6
    "Daftar bakhang sai hakhus dibeli:" + "<br>" + "<ul>" +"<li> iwa </li>" +"<li> Roti tawar </li>" + "<li> Masker </li>"+ "</ul>", //7
    // system
    "Pekhmainan berahikh. Niku ketakhejang mubil.",
    "Pekhmainan berahikh. Tingkat kesehatanmu khadu bela.",

]
var txt1Lampung = [
    "Khik: Hai, niku haga mit dipa? Mit dija pai!", //0
    "Khik: Hai, dang lupa basuh culuk pakai sabun, yu!", //1
    "Khik: Guk mbasuh culuk, niku mastiko culukmu kecah khik aman jak virus.",
    "Khik: Niku mingan mbasuh culuk di depan lambanku.",
    "Hore, culukmu khadu ti basuh!",
    "Mekhanai: *Uhuk* Mahap yu, tendaku ngehalangi khelayamu. Tapi, niku mingan lewat disan.", //5
    "Penjaga  Gekhbang: Sanak ngukha, kenapi niku mak makai masker? Inji masker dimu.", //6
    "Masker khadu masa",
    "Penjaga Gekhbang: Helau, niku khadu makai masker! Payu liyu.",
    nama + ": Tekhima kasih!" ,
    "Ingok kik selalu jaga jarak aman, yu!", //10
    "*Uhuk* Api niku ngeliyak umpuku? Ya mak makai masker pas lijung.", //11
    nama + ": Oh, nyak ngeliyak ya di pullan.", 
    "Nenek: Mingan tulung keniko masker di ya, Nak?", 
    nama + ": Tettu khia.", 
    nama + ": Inji masker jak ajjongmu. Dipakai pai!", //15
    "Oke, terkhima kasih!", // 16
    "Emak: Kahut, niku khadu mulang. Tulung beliko sabun basuh culuk pai, yu?", 
    nama + ": Dipa, Mak?", 
    "Emak: Di warung Mak Ani.", 
    "Yani: Nyepok api, Kak?", //20
    nama + ": Haga mbeli sabun basuh culuk.", //21
    "Yani: Oh, langsung mit dilom khia.", 
    "Ani: Selamat khatong, haga mbeli api?", 
    nama + ": Wat sabun basuh culuk?", 
    "Ani: Oh, tattu khia. Inji, Kak!", //25
    "Sabun basuh culuk khadu masa!", //26
    "Ibu: Tekhima kasih, Sayang. Dang lupa basuh culuk semakkung kukhuk lamban, yu!",
    "Culuk tebasuh!",
    "Hore, level 1 selesai!",
    nama + ": Inji sabunni, Mak.", //30
]
var txt2Lampung = [
    "Emak: Niku mingan antakko mengan mawas makai Among/Ajjong?", //0
nama + ": Yu, Mak.", //1
"Hati-hati di khelaya, yu!",
"Tetangga: Hai, " + nama + " Tnengis kik Bu Joko kena Covid.",
"Anak kecil: Hosh...hosh...Aku harus pulang sepuluh menit lagi.",
"Sanak Lunik: Hatsi...hatsi...", //5
nama + ": Mak, anakni kenapi?", //6
"Emak-emak: Ya batuk, pilek, khik agak demam. Jadi kami mau rapid test.", 
nama + ": Oh. Semoga lain Covid yu, Mak.", 
"Emak-emak: Tekhima kasih, Nak.",
"Jema tuha: UHUK UHUK", //10
nama + ": (Waduh, nyak hakhus jaga jarak jo)", //11
nama + ": (Wah, nyak hakhus geluk-geluk ngantakko kanik an makai Among/Ajjong)",
"Perawat: Kik haga bubat, inji nomor antrianni.",
nama + ": Mahap, nyak mak bubat. Tekhima kasih.",
"Emak-emak: Tulung jaga jarak, Nak.", //15
"Penjual buah: Nyepok api, Kak?",
nama + ": Mawat Pak. Tekhima kasih.",
nama + ": (Bapak inji mak makai masker. Nyak mak mbeli beli buah dija.)",
"Emak-emak: Tukang khutini mit dipa, yu?",
"Penjual buah: Silahko dibeli, Kak. Buahni ampai sampai.", //20
nama + ": Mahap, mawat pai, Mak.",
"Penjual sembako: Nyepok api, Kak?",
nama + ": Oh, mawat nyepok api-api, Mak.",
nama + ": Pekhmisi, khelaya mit menara liwat dipa, yu?",
"Mekhanai: Oh, niku hakhus mutakh khelaya jak awal.", //25
"Hore, culuk tebasuh!", //26
"Among/Ajjong : Halo, " +nama+ " Ade titipan dari kakek ka, dak?",
nama + ": Iyu!",
nama + ": Inji bekal jak Emak pakai Among/Ajjong.",
"Among/Ajjong: Oh, tekhima kasih.", //30
"Among/Ajjong: Mingan tulung beliko sai botol sabun cair guk tomat pakai Among/Ajjong?", //31
nama + ": Tattu khia.",
"Among/Ajjong: Tekhima kasih. Inji duitni.",
"Among//Ajjong: Ingok selalu jaga jarak, yu!",
"Penjual buah: Payu, Kak. Silahko dipilih buahni. Buahni masih segar.", //35
nama + ": Uwat tomat, Mak?", //36
"Penjual buah: Uwat, Kak. Sai inji ampai sampai.",
nama + ": Iyu, Mak. Sebungkus inji pikha khegani?",
"Penjual buah: Rp10.000 khia.",
nama + ": Iyu, inji duitni, Mak.", //40
"Penjual buah: Tekhima kasih, Kak.", //41
"Penjual sembako: Haga nyepok api, Kak?",
nama + ": Sabun cair uwat, Mak?",
"Penjual sembako: Uwat. Rp10.000 hargani.",
nama + ": Oke, inji duitni.", //45
"Sabun cair tebeli", //46
"Penjual sembako: Tekhima kasih.", 
"Tetangga: Oh, niku khadu balak, yu. " + nama,
"Among/Ajjong: Halo, " + nama +". Api uwat titipan makai nyak?",
nama + ": Nyak mit apini Among/Ajjong pai.", //50
"Hore, Culuk tebasuh!", //51
nama + ": Inji sabun khik tomat jak pasakh titipan Among/Ajjong.", //52
"Among/Ajjong: Tekhima kasih. " +nama + ". Tulung dibasuh pai, yu.",
"Tomat khadu tebasuh",
nama + ": Khadu ku basuh.", //55
"Among/Ajjong: Tekhima kasih. Ayo, kukhuk pai. Kita minum teh di dalam.",
nama + ": Iyu.",
"Tomat khadu tebeli",
"Hore, level 2 selesai.",
nama + ": (Nyak makai caikhan pembekhsih pai).",

]
var txt3Lampung = [
    "Supir bus: Terima kasih khadu makai jasa sikam. Silakan cek suhu badan di udi semakkung kukhuk kota.",
"Mulli: Kik suhu mu di atas 37,5 derajat Celsius, niku mak mingan kukhuk kota yu.", //1
"Mulli: Duh, saka nihan.",
"Mekhanai: Pikha suhu ni, Ngah?",
"Pemekhiksa suhu: 36,8 derajat Celsius. Payu kukhuk.",
"Pemekhiksa suhu: Nyak cek suhuni sekhebok yu, Kak.", //5
"Pemeriksa suhu: 36,2 dekhajat. Payu liyakko pai Kakhtu Kewaspadaan Kesehatan diisan", //6
"Pemekhiksa suhu: Kak, cek suhu pai dija!",
"Pemekhiksa KKK: Ngasi kodo ngeliyak Kakhtu Kewaspadaan Kesehatanni, Kak?",
nama + ": Sinji, Pak.",
"Pemekhiksa KKK: Payu, hasil tes non-reaktif. Payu ngasi khukhuk kota.", //10
 "Pemekhiksa KKK: Kak, liyakko Kakhtu Kewaspadaan Kesehatan pai diija!", //11
"Pembeli: Mak, jadi pikha total jagung khik tomat ni?",
"Penjual sayur: Totalni Rp25.000, Mak.",
"Penjual sayur: Nyepok api, Kak?",
nama + ": (Wah, Emak inji mak makai masker. Nyak mak belanja guk ya).", //15
 nama + ": Mawat, Mak.", //16
"Emak-emak: Hmmm, penjual sayur sai biasa diija mit dipa, yu?",
"Bapak-bapak: Wah, kunci gudang ku pikko diipa, yu?",
"Penjaga pabrik: Nyak hakhus tetap kekhja senemon walaupun lagi pandemi.",
"Emak-Emak: Duh, dipa jemputanni, yu?", //20
"Tukang parkir: Wah, inji sai parkir bus mit dipa, yu? Kok parkir sembarangan.", //21
nama + ": Mohon tanya, inji tempat api? Kenapi dijaga?",
"Perawat: Oh, inji lamban karantina pasien Covid-19.",
"Perawat: Jaga kesehatan yu, Kak. Dang sampai niku kukhuk dija.",
"Dokter: Ulih pasien Covid-19 khadu semakin lamon, kapasitas di rumah sakit munih semakin tekhbatas.", //25
"Dokter: Kik niku demam, batuk kering, atau pilek, gelukko periksa mit rumah sakit, yu.", //26
"Pengusaha: Di masa pandemi kheji, lamon pengusaha sai bisnisni terdampak.",
"Mulli: Kik pandemi, hindakhi kuppul-kuppul guk jema-jema.",
"Satgas Covid: Diija wat sekeluarga sai lagi isolasi mandiri ulih Covid-19.",
"Pegawai: Saat pandemi kheji lamon jema sai kelebonan pekekhjaan.", //30
"Sanak: Nyak hakhus khajin olahraga.", //31
"Jema tuha: Nak, api niku ngeliyak bakasku?",
"Jema tuha: Nak, api niku ngeliyak bebaiku?",
"Jema tuha: Kik nyebekhang khelaya, niku hakhus hati-hati, yu.",
"Wartawan: Apa sai tekhok  Bapak sappaiko mit masyarakat nyin mawat tertular Covid?", //35
"Walikota: Tetap ngejaga jarak aman, selalu pakai masker, guk dang berkerumun.", //36
"Wartawan: Pikha denda makai pelanggar protokol Covid-19, Pak?", 
"Walikota: Di wilayah kham Rp250.000.", 
"Petugas Covid: Waduh, jumlah korban nambah tekhus tiap khanini.",
"Petugas Covid: Wat ukhusan api, Kak? Haga nyekar, yu?", //40
nama + ": Nyak kesasar, Pak.", //41
"Petugas Covid: Inji kubukhan korban Covid-19.",
"Penjaga toko: Aduh, bakhangni saka nihan sappaini.",
"Saudara: Hai! " + nama + " saka mak tungga!",
nama + ": Yu, saka mak tungga. Kok niku di luakh mak makai masker?", //45
"Puakhi: Tenang khia, ingkah di depan lamban khia kok! Oh yu, adekku khadu nunggu niku.", //46
"Puakhi: Hey,niku khadu sappai! Kenapi saka nihan? Nyak appai haga mbeliko niku mengan.",
nama + ": Iyu, semakkung mit terminal bis nyak rapid pai. Jadi kakhu ketinggalan bus pekhtama.",
"Puakhi: Hagapi rapid? Nyak juga khisok kok mak makai masker kik lijung-lijung.",
nama + ": Dang anggap remeh! Semakin khani semakin lamon sai tertular!", //50
nama + ": Kik niku mak makai masker, nyin nyak gawoh sai mbeli mengan. Kanah nyak muloh luwot.", //51
nama + ": (Hmmm, kanah nyak beli masker pakai tiyan).",
"Puakhi: Oh, tekhima kasih. Tulung sekalian beliko khuti di Pasar Baru.",
"Penjual bakhang: Yu, silakan dipilih bakhangni, Kak.",
nama + ": (Hmmm, bakhang sai tekhok kubeli mak ngedok dija).", //55
"Emak-Emak: Hmmm, beli api, yu?", //56
"Penjual: Nyepok masker yu, Kak? Toko di sebelah toko puakhiku di Pasar Lama jual masker.",
"Pembeli: Mak, jadi pikha harga unyin sayur, daging, khik iwani?",
"Penjual: Rp45.000, Mak.",
"Penjual Ikan dan sayur: Silakan dipilih, Kak iwa khik sayurni.", //60
"Penjual Ikan dan sayur: Silakan dipilih, Kak sayur khik iwani.", //61
nama + ": Pikha harga sekilo iwa, Mak?",
"Penjual Ikan: Rp35.000.",
nama + ": Tabik, beli sekilo yu, Mak. Inji duitni.",
"Penjual Ikan: Tekhima kasih. Inji belanjaanni.", //65
"Emak-emak: Penjual khuti sai biasa diisan mit dipa, yu?", //66
"Penjual daging: Nyepok api, Kak?",
nama + ": (Wah, bapak udi mak makai masker. Nyak mak belanja guk ya).", 
nama + ": Mawat, Pak.", 
"Pembeli: Pak, hakhga buahni jadi pikha unyinni?", //70
"Penjual buah: Jadi total Rp50.000, Mak.", //71
"Penjual buah: Silahko dibeli, Kak. Buahni segar loh.",
"Emak-emak: Tukang khuti dudi, pindah mit Pasar Lama, Kak.",
"Iwa kebeli!",
"Pedagang kaki-lima: Pasakh? Oh, cukuplapah lukhus jak ija gawoh, Kak.", //75
"Penjual: Masker? Oh, mingan beli di toko sebelah, Kak!", //76
"Petugas: Nyak haga negur bapak sai mak makai masker udi.",
"Emak-emak: Mak, khadu nengis? Hani sai keluakhga balak di pusat kota sai diisolasi di lamban loh!",
"Emak-emak: Iyu, Mak. Jumlah jema sai terpapar Covid-19 nambah tekhus.",
"Pembeli: Pikha hakhga khua masker inji, Mak?", //80
"Penjual baju: Rp20.000, Mak.", //81
"Penjual roti: Silahko dibeli khuti, Kak.",
"Penjual roti: Silahko dibeli, Kak. Khuti ni masih angat.",
nama + ": Telu bungkus khuti inji pikha, Pak?",
"Penjual Roti: Rp30.000, Kak.", //85
nama + ": Tabik, inji duitni, Pak.", //86
"Penjual Roti: Tekhima kasih. Inji khutini.", 
"Khuti kebeli!",
"Penjual kawai: Nyepok api, Kak?",
"Penjual kawai: Nyepok api, Kak? Maskerni helau-helau loh.", //90
nama + ": Pikha hakhga pak masker, Mak?", //91
"Penjual Kawai: Rp40.000, Kak.", 
nama + ": Tabik, nyak mbeli pak masker, Mak. Inji duitni.", 
"Penjual kawai: Terima kasih. Inji maskerni.", 
"Masker kebeli!", //95
nama + ": Wat api inji?", //96
"Petugas Covid: Khikmu inji ku usung haga isolasi ulih hasil tesni positif Covid.",
nama + ": Wah, nyak ampai ketemu ya kakhu.",
"Petugas Covid: Kik khenno niku hakhus dites juga. Alat tesni wat di khik ku.",
"Hasil tes: Non-reaktif!", //100
"Petugas Covid: Niku hakhus isolasi mandiri selama 14 khani. Sampai jumpa!",
"Pekhmainan selesai. Terima kasih khadu mainko pekhmainan inji.",  
"Kikhi kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103    
"Kanan kota:" + "<br>" + "<ul>" +"<li> Tempat pemakaman </li>" +"<li> Kantor Walikota </li>" + "<li> Pasar Lama </li>"+ "</ul>", //104
"Pekhmainan berahikh. Niku ketakhejang mubil.",

]