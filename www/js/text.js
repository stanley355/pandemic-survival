//textBox & pause
var tBox =  document.getElementById('textBox');
var t = document.getElementById("text");
var pause = false; //if pause = true, the player can't walk

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");

//obtained items images
var obtItemList = document.getElementById('obtainItemList');
var obtMaskImg = document.getElementById('obtainMaskImg');
var obtSanitImg = document.getElementById('obtainSanitImg');
var obtFoodboxImg = document.getElementById('obtainFoodboxImg');
var obtTomatoImg = document.getElementById('obtainTomatoImg');
var obtBreadImg = document.getElementById('obtainBreadImg');
var obtFishImg = document.getElementById('obtainFishImg');

//pop out images
var imgList = document.getElementById("imgList");
var handWashImg = document.getElementById("handWashImg");
var tomatoImg = document.getElementById("tomatoImg");
var maskImg = document.getElementById("maskImg");
var sanitImg = document.getElementById("sanitImg");
var breadImg = document.getElementById('breadImg');
var fishImg = document.getElementById('fishImg');
var virusImg = document.getElementById("virusImg");
var carCrashImg = document.getElementById("carCrashImg");

var indoLang = false;
var aneuk = false;
var nias = false;
var minang = false;
var jambi = false;
var kerinci = false;
var palembang = false;
var besemah = false;
var bangka = false;
var nasal = false;
var rejang = false;
var lampung = false;
var betawi = false;
var sunda = false;
var cirebon = false;
var jawa = false;
var pemalang = false;
var osing = false;
var madura = false;
var bali = false;
var ngaju = false;
var kanayan = false;
var maanyan = false;
var lebang = false;
var manado = false;
var bugis = false;
var tolaki = false;
var ciacia = false;
var sasak = false;
var kupang = false;
var uab = false;
var amarasi = false;
var helong = false;
var fataluku = false;
var sabu = false;
var lamaholot = false;
var mangBar = false;
var mangTeng = false;
var papua = false;
var biak = false;
var lani = false;
var english = false;
var chinese = false;
var italian = false;
var japan = false;

var nama = document.getElementById('nameBox').value;
var enterName = document.getElementById("enterName"); //string telling the user to enter their name
var nameBox = document.getElementById('nameBox').value; //the name input box
var getNameBtn = document.getElementById("getName"); //the button showing to get the value of the name
var namaBaru;
getNameBtn.onclick = function() {changeName();}
function changeName(){
  	namaBaru =  nama.replace(nama, document.getElementById('nameBox').value);
  	nama = namaBaru;
	// indo
	if (indoLang === true){
        // text1
		txt1[9] = nama + ": Terima kasih!" ;
		txt1[12] = nama + ": Oh, saya lihat dia di hutan.";
		txt1[14] = nama + ": Tentu saja, Nek.";
		txt1[15] = nama + ": Ini masker dari nenekmu. Dipakai dulu!";
		txt1[18] = nama + ": Di mana, Bu?";
		txt1[21] = nama + ": Mau beli sabun cuci tangan.";
		txt1[24] = nama + ": Ada sabun cuci tangan?";
		txt1[30] = nama + ": Ini sabunnya, Bu.";
        // txt2
        txt2[1] = nama + ": Baik, Bu.";
        txt2[6] = nama + ": Bu, anaknya kenapa?";
        txt2[8] = nama + ": Oh. Semoga bukan Covid ya, Bu.";
        txt2[11] = nama + ": (Waduh, aku harus jaga jarak nih)";
        txt2[12] = nama + ": (Wah, aku harus buru-buru mengantar makanan Kakek)";
        txt2[14] = nama + ": Maaf, saya tidak berobat. Terima kasih.";
        txt2[17] = nama + ": Tidak Pak. Terima kasih.";
        txt2[18] = nama + ": (Bapak ini tidak pake masker. Aku tidak beli buah di sini.)";
        txt2[21] = nama + ": Maaf, tidak dulu, Bu.";
        txt2[23] = nama + ": Oh, tidak cari apa-apa, Bu.";
        txt2[24] = nama + ": Permisi, jalan ke menara lewat mana, ya?";
        txt2[27] = "Kakek: Halo, " +nama+ " Seingat Kakek, ibu menitipmu bekal untuk Kakek.";
        txt2[28] = nama + ": Oh, iya!";
        txt2[29] = nama + ": Ini bekal dari Ibu untuk Kakek.";
        txt2[32] = nama + ": Tentu saja, Kek.";
        txt2[36] = nama + ": Ada tomat, Bu?";
        txt2[38] = nama + ": Baik, Bu. Sebungkus ini berapa harganya?";
        txt2[40] = nama + ": Baik, ini uangnya, Bu.";
        txt2[43] = nama + ": Sabun cair ada, Bu?";
        txt2[45] = nama + ": Oke, ini uangnya.";
        txt2[49] = "Nenek: Halo, " + nama +". Apa ada titipan dari kakekmu?";
        txt2[50] = nama + ": Saya ke tempat Kakek dulu, Nek.";
        txt2[52] = nama + ": Ini sabun dan tomat dari pasar titipan Kakek.";
        txt2[55] = nama + ": Sudah saya cuci, Nek.";
        txt2[57] = nama + ": Baik, Kek.";
        txt2[60] = nama + ": (Aku pakai cairan pembersih dulu).";
        // txt3
        txt3[9] = nama + ": Silakan, Pak.";
        txt3[15] = nama + ": (Wah, ibu ini tidak pakai masker. Aku tidak beli di sini deh).";
        txt3[16] = nama + ": Nggak, Bu.";
        txt3[22] = nama + ": Mohon tanya, ini tempat apa? Kenapa dijaga?";
        txt3[41] = nama + ": Saya kesasar, Pak.";
        txt3[45] = nama + ": Ya, lama tidak jumpa. Kok kamu di luar tidak pakai masker?";
        txt3[48] = nama + ": Iya, sebelum ke terminal aku rapid dulu. Jadi tadi ketinggalan bus pertama.";
        txt3[50] = nama + ": Jangan anggap remeh, semakin hari banyak yang tertular tahu!";
        txt3[51] = nama + ": Kalau kamu tidak mau pakai masker, biar aku saja yang beli makan. Nanti aku kembali lagi.";
        txt3[52] = nama + ": (Hmmm, nanti aku beli masker untuk mereka).";
        txt3[55] = nama + ": (Hmmm, barang yang ingin kubeli tidak ada di sini).";
        txt3[62] = nama + ": Berapa harga sekilo ikan, Bu?";
        txt3[64] = nama + ": Baik, beli sekilo ya, Bu. Ini uangnya.";
        txt3[68] = nama + ": (Wah bapak itu tidak pakai masker, aku tidak belanja sama dia deh).";
        txt3[69] = nama + ": Tidak, Pak.";
        txt3[84] = nama + ": Tiga bungkus roti ini berapa, Pak?";
        txt3[86] = nama + ": Baik, ini uangnya, Pak.";
        txt3[91] = nama + ": Berapa harga empat masker, Bu?";
        txt3[93] = nama + ": Baik, saya beli empat masker, Bu. Ini uangnya.";
        txt3[96] = nama + ": Ada apa ini!?";
        txt3[98] = nama + ": Wah, saya baru ketemu dia tadi.";
	} 
    // sumat lang
    else if (aneuk === true){
        // text1
		txt1[9] = nama + ": Terimo kasih!";
		txt1[12] = nama + ": Oh, ambo ado mancaliaknyo di hutan.";
		txt1[14] = nama + ": Tantu sajo.";
		txt1[15] = nama + ": Iko masker dari Uci. pakailah daulu!";
		txt1[18] = nama + ": Di mano, Umak?";
		txt1[21] = nama + ": Ambo Mau mambali sabun cuci tangan.";
		txt1[24] = nama + ": Ado sabun cuci tangan?";
		txt1[30] = nama + ": Iko sabunnyo, Mak.";
        // txt2
        txt2[1] =nama + ": Iyo, Umak.";
        txt2[6] = nama + ": Ibu, mangapo anak Ibu?";
        txt2[8] = nama + ": Oh. Mudah-mudahan bukan Covid yo, Buk.";
        txt2[11] = nama + ": (Aduh, ambo harui jago jarak ko)";
        txt2[12] = nama + ": (Ol Mak, ambo harui lakeh-lakeh mahantek makanan Angku)";
        txt2[14] = nama + ": Maaf, ambo indak barubek. Terimo kasih.";
        txt2[17] = nama + ": Indak, Pak. Terimo kasih.";
        txt2[18] = nama + ": (Bapak iko indak mamakek masker. Ambo indak mau mambali buah di siko.)";
        txt2[21] = nama + ": Maaf, indak dulu yo, Buk.";
        txt2[23] = nama + ": Oh, indak mancari apo-apo, Bu.";
        txt2[24] = nama + ": Assalamualaikum, ijin batanyo, jalan ka menara lewat mano, yo?";
        txt2[27] = "Angku: Halo, " +nama+ " Saingek ambo, umak ado manitipkan makanan untuk ambo.";
        txt2[28] = nama + ": Iyo, Angku!";
        txt2[29] = nama + ": Iko makanan dari Umak untuk Angku.";
        txt2[32] = nama + ": Buliah, Ngku.";
        txt2[36] = nama + ": Ado tomat, Buk?";
        txt2[38] = nama + ": Iyolah, Buk. Barapo Sabungkuiko?";
        txt2[40] = nama + ": iyo, iko kepengnyo, Buk.";
        txt2[43] = nama + ": Sabun cair ado, Buk?";
        txt2[45] = nama + ": Oke, iko kepengnyo.";
        txt2[49] = "Uci: Halo, " + nama +". Apo ado titipan dari Angku?";
        txt2[50] = nama + ": Ambo ka tampek Angku  dulu, Ci.";
        txt2[52] = nama + ": Iko sabun dan tomat dari pasar titipan Angku.";
        txt2[55] = nama + ": Alah ambo cuci,Ci.";
        txt2[57] = nama + ": Iyo, Ngku.";
        txt2[60] = nama + ": (Ambo pakai cairan pambersih daulu).";
        // txt3
        txt3[9] = nama + ": Iko, Pak.";
        txt3[15] = nama + ": (Alah mak, ibu iko indak mamakai  masker. Ambo indak mau balanjo samo inyo lah).";
        txt3[16] = nama + ": Indak , Buk.";
        txt3[22] = nama + ": Dek, ambo mau tanyo, tampek apo iko? Mangapo dijago?";
        txt3[41] = nama + ": Ambo tasasek, Pak.";
        txt3[45] = nama + ": Iyo, alah lamo indak basuo. Mangapo kalua indak mamakai masker?";
        txt3[48] = nama + ": Iyo, sabelum ka tarminal bis ambo rapid daulu. Jadi tadi katinggalan bus patamo.";
        txt3[50] = nama + ": Jangan manganggap remeh! Samakin hari samakin banyak yang takanai tau!";
        txt3[51] = nama + ": Kalau indak mau mamakai masker, bia ambo sajolah yang mambali makan. Bek ko ambo balik lai ka siko.";
        txt3[52] = nama + ": (Hmmm, bek ko bia ambo yang mambali masker untuk urang tu).";
        txt3[55] = nama + ": (Hmmm, barang yang mau ambo beli indak ado di siko).";
        txt3[62] = nama + ": Barapo lauk ko sakilo, Buk?";
        txt3[64] = nama + ": Yo Lah, ambo bali sakilo ya, Buk. Iko kepengnyo.";
        txt3[68] = nama + ": (Wah, bapak itu indak mamakai masker. Ambo indak mau balanjo inyo lah).";
        txt3[69] = nama + ": Indak , Pak.";
        txt3[84] = nama + ": Barapo tigo bungkui roti ko, Pak?";
        txt3[86] = nama + ": iyolah, iko kepengnyo, Pak.";
        txt3[91] = nama + ": Barapo harago ampek masker, Buk?";
        txt3[93] = nama + ": Iyolah, Ambo bali ampek masker, Buk. Iko kepengnyo.";
        txt3[96] = nama + ": Ado apo iko?";
        txt3[98] = nama + ": Ai mak, kami baru basuo tadi.";
	}
    else if (nias === true){
        // text1
		txt1[12] = nama + ": Ma u ila ya ba gatua.";
		txt1[14] = nama + ": Tola gawe.";
		txt1[15] = nama + ": Yai mbalu-mbalu mbawa wu moroi khö gawe u, fake wae";
		txt1[18] = nama + ": Haega ina?";
		txt1[21] = nama + ": gu möli sabu fanasa tana.";
		txt1[24] = nama + ": So sabu fanasa tana?";
		txt1[30] = nama + ": Yai sabu nia, ina.";
        // txt2
        txt2[1] =nama + ": Lau, Ina.";
        txt2[6] = nama + ": Ina, hana khõ nono u adra?";
        txt2[8] = nama + ": Oh. Alakha mea tena Covid e, Ina.";
        txt2[11] = nama + ": (He, gujumago gotaluada ha)";
        txt2[12] = nama + ": (Wah, aõjõ-aõjõ drao ha'a gumõi modroro õ duagu laluo adra)";
        txt2[14] = nama + ": Lõna gu fareso õ ndrao.";
        txt2[17] = nama + ": Lõna Ama. Saohagõlõ.";
        txt2[18] = nama + ": (Amada dra löna ifake mbalu-mabalu. Löna gumõli ga mbua adra.)";
        txt2[21] = nama + ": Bologõdõdõu, lõnana mana, Ina.";
        txt2[23] = nama + ": Oh, lona ni'aluigu hayaya, Ina.";
        txt2[24] = nama + ": Sabata wae, Haega so lala simõi ba menara ba haega latõrõ?";
        txt2[27] = "Duada: Ya'ahowy, " +nama+ " Na'lõna fasala drao, so nifabe'egõ Inau gõgu laluo adra.";
        txt2[28] = nama + ": E wa, Dua!";
        txt2[29] = nama + ": Yae gõu noma'e nifabe'egõ  Ninagu, Dua.";
        txt2[32] = nama + ": Tola manõ, Dua.";
        txt2[36] = nama + ": So toma, Ina?";
        txt2[38] = nama + ": Lau, Ina. Hauga sabuku ha'a?";
        txt2[40] = nama + ": Lau, Ya'e gefe, Ina.";
        txt2[43] = nama + ": So khõda sabu sanulu dre wa, Ina?";
        txt2[45] = nama + ": Lau, yae gefe.";
        txt2[49] = "Gawe: Ya'ahowu, " + nama +". So nifabe'egõ Duau khõu wa?";
        txt2[50] = nama + ": Gumõi na gane khõ Duagu, awe.";
        txt2[52] = nama + ": yae jabu ba toma moroi ba fasa nifabe'egõ Duagu.";
        txt2[55] = nama + ": Moa ma'usasai, Awe.";
        txt2[57] = nama + ": Lau, Dua.";
        txt2[60] = nama + ": (Dau fake wae fanasa dana vfamunu tunõ).";
        // txt3
        txt3[9] = nama + ": Yai, Ama.";
        txt3[15] = nama + ": (Ae löna ifake mbalu-balu mbawa inada ha'a  löna gu möli khö inada ha'a).";
        txt3[16] = nama + ": löna, Ina.";
        txt3[22] = nama + ": So nisofugu, Haya naha haga? Hava löna la jago?";
        txt3[41] = nama + ": Ma eluno ndrao, Ama.";
        txt3[45] = nama + ": e ma ara e ita lõna falakhi-lakhi. He hava lõna õ fake mbalu-mbalu mbawa?";
        txt3[48] = nama + ": E fatua lõnana mõi ita ba  naha moto, la rapid wa'e ita. Mea lõna larõi ita moto sisofõna .";
        txt3[50] = nama + ": Bõi aoha si ba dõdõ! Oya e mana si gõna fokhõ Covid !";
        txt3[51] = nama + ": Na lõna gõ fake mbalu-mbalu mbawa, ya'o manõ si õli gõ. Gumanavuli matõ.";
        txt3[52] = nama + ": (Hmmm, gumõli dania mbalu-mbalu mbawa khõra ).";
        txt3[55] = nama + ": (Hmmm, löna ga somasi ni öli gu ).";
        txt3[62] = nama + ": Hauga sakilo i'a ha'a?";
        txt3[64] = nama + ": Be sakilo ina. Yai gefe nia.";
        txt3[68] = nama + ": (Amada dra na ifake mbalu-mabalu. Lona gumõli khö nia.).";
        txt3[69] = nama + ": Lõna Ama.";
        txt3[84] = nama + ": Bö khögu tölu ?";
        txt3[86] = nama + ": Yai gefe nia, Ama.";
        txt3[91] = nama + ": Hauga efa mbalu-mbalu mbawa, Ina?";
        txt3[93] = nama + ": Gu möli efa mbalu-mbalu mbawa, Ina. Yai gefe nia.";
        txt3[96] = nama + ": Haya ha'a ?";
        txt3[98] = nama + ": He, avena falakhi ndrao khönia.";
	}  
    else if (minang === true){
        // text1
        txt1[9] = nama + ": Mokasii!";
		txt1[12] = nama + ": Oitu, ambo mancaliak nyo di rimbo.";
		txt1[14] = nama + ": Jadih nek.";
		txt1[15] = nama + ": Ko  masker dari nenek angku. pakailah dulu!";
		txt1[18] = nama + ": Dima mak?";
		txt1[21] = nama + ": Ka mambali sabun cuci tangan.";
		txt1[24] = nama + ": Ado sabun cuci tangan?";
		txt1[30] = nama + ": Ko sabunnyo, Mak.";
        // txt2
        txt2[1] = nama + ": Jadih, Mak.";
        txt2[6] = nama + ": Mak, anaknyo baa?";
        txt2[8] = nama + ": Oh. Semoga indak Covid yo, Mak.";
        txt2[11] = nama + ": (Ondeh mande, aden musti jago jarak mah)";
        txt2[12] = nama + ": (Wah, aden musti capek-capek maantaan  makanan Kakek)";
        txt2[14] = nama + ": Maaf, ambo indak barubek doh. Mokasi.";
        txt2[17] = nama + ": Indak Pak. Mokasi.";
        txt2[18] = nama + ": (Apak ko indak pakai masker. Ambo indak mambali buah di siko doh.)";
        txt2[21] = nama + ": Maaf, indak dulu, Mak.";
        txt2[23] = nama + ": Oh, indak mancari apo-apo, Mak.";
        txt2[24] = nama + ": Numpang batanyo, jalan ka menara lewaik ma, yo?";
        txt2[27] = "Pak gaek: Oii, " +nama+ " Saingek Pak gaek, amak wak  manitipan bekal untuak Kakek.";
        txt2[28] = nama + ": Iyo, Gaek!";
        txt2[29] = nama + ": Ko bekal dari Amak untuak gaek.";
        txt2[32] = nama + ": Iyo lah, gaek.";
        txt2[36] = nama + ": Ado tomaik, Mak?";
        txt2[38] = nama + ": Jadih, Mak. Bara haragonyo sabungkuih, Mak?";
        txt2[40] = nama + ": Jadih, ko pitih nyo, Mak.";
        txt2[43] = nama + ": Sabun caia ado, Mak?";
        txt2[45] = nama + ": Jadih, ko pitihnyo.";
        txt2[49] = "Enek : Oii, " + nama +". Apo ado titipan dari Pak gaek wak?";
        txt2[50] = nama + ": Ambo  ka tampaik  Pak gaek dulu, Nek.";
        txt2[52] = nama + ": Ko sabun jo tomaik dari pasa titipan Pak gaek.";
        txt2[55] = nama + ": Alahambo basuah, Nek.";
        txt2[57] = nama + ": Jadih, Kek.";
        txt2[60] = nama + ": (Den pakai cairan pambarasiah ko dulu).";
        // txt3
        txt3[9] = nama + ": Iko, Pak.";
        txt3[15] = nama + ": (Ondeh, amak ko indak mamakai masker. Den indak balanjo ka inyo doh).";
        txt3[16] = nama + ": Indak, Mak.";
        txt3[22] = nama + ": Tanyo ciek, iko tampaik apo? Baa kok dijago?";
        txt3[41] = nama + ": Ambo sasek, Pak.";
        txt3[45] = nama + ": Yo, lamo indak basuo. Baa awak di lua indak pakai masker?";
        txt3[48] = nama + ": Iyo, sabalun ka terminal bis ambo rapid dulu. Jadi tadi tatingga bus partamo.";
        txt3[50] = nama + ": Jan anggap remeh! Samakin hari samakin banyak nan tatula tau!";
        txt3[51] = nama + ": Kalau awak indak amuah  pakai masker, bia ambo se nan  bali makan. Beko wak baliak liak.";
        txt3[52] = nama + ": (Hmmm, beko den balian masker untuak urang-urang tu).";
        txt3[55] = nama + ": (Hmmm, barang nan ka den bali indak ado di siko).";
        txt3[62] = nama + ": Bara harago sakilo ikan, Uni?";
        txt3[64] = nama + ": Jadih, bali sakilo yo, Bu. Iko pitihnyo.";
        txt3[68] = nama + ": (Ondeh, apak tu indak bamasker. Aden indak balanjo ka inyo doh).";
        txt3[69] = nama + ": Indak, Pak.";
        txt3[84] = nama + ": Tigo bungkuih roti ko bara, Pak?";
        txt3[86] = nama + ": Jadih, ko pitihnyo, Pak.";
        txt3[91] = nama + ": Bara harago ampek masker, Uni?";
        txt3[93] = nama + ": Jadih, ambo bali ampek masker, Bu. Ko pitihnyo.";
        txt3[96] = nama + ": Ado apo ko?";
        txt3[98] = nama + ": Ondeh, ambo baru basobok jo inyo tadi.";
	}  
    else if (jambi === true){
        // text1
        txt1[9] = nama + ": Mokasih!"; 
		txt1[12] = nama + ": Oh, sayo nengok dio di utan.";
		txt1[14] = nama + ": Bisolah, Nyai.";
		txt1[15] = nama + ": Masker ni dari nyai kau. Pakelah dulu!";
		txt1[18] = nama + ": Di mano, Mak?";
		txt1[21] = nama + ": Aku nak beli sabun cuci tangan.";
		txt1[24] = nama + ": Ado sabun cuci tangan, dak?";
		txt1[30] = nama + ": Ni sabunnyo, Mak.";
        // txt2 
        txt2[1] = nama + ": Iyo, Mak.";
        txt2[6] = nama + ": Knapo anaknyo, Yuk?";
        txt2[8] = nama + ": Oh. Semoga  bukan Covid yo, Yuk .";
        txt2[11] = nama + ": (Walah, aku harus jago jarak.)";
        txt2[12] = nama + ": (Waduh, aku harus cepat-cepat ngantar makanan Datuk";
        txt2[14] = nama + ": Sayo dak berobat. Mokasih.";
        txt2[17] = nama + ": Idak, Pak. Mokasih.";
        txt2[18] = nama + ": (Bapak ni idak make masker. Aku dak ndak beli buah samo dio)";
        txt2[21] = nama + ": Idak dulu, Nyai.";
        txt2[23] = nama + ": Oh, idak, Nyai.";
        txt2[24] = nama + ": Permisi, jalan ke menaro tu lewat mano,  yo?";
        txt2[27] = "Datuk: Halo, " +nama+ " Seingat Datuk, mamak kau nitip makanan untuk Datuk.";
        txt2[28] = nama + ": Iyo, Tuk!";
        txt2[29] = nama + ": Ni makanan dari Mamak untuk Datuk.";
        txt2[32] = nama + ": Bisolah, Tuk.";
        txt2[36] = nama + ": Ado tomat, Nyai?";
        txt2[38] = nama + ": Baik, Nyai. Sebungkus ni berapo hargonyo?";
        txt2[40] = nama + ": Iyolah, ini duitnyo, Nyai.";
        txt2[43] = nama + ": Sabun cair ado, Nyai?";
        txt2[45] = nama + ": Yo, ni duitnyo.";
        txt2[49] = "Nyai: Halo, " + nama +". Apo ado titipan dari datuk kau?";
        txt2[50] = nama + ": Sayo ke tempat Datuk dulu, Nyai.";
        txt2[52] = nama + ": Ni sabun samo tomat dari pasar titipan Datuk.";
        txt2[55] = nama + ": La sudah sayo cuci, Nyai.";
        txt2[57] = nama + ": Iyo, Tuk.";
        txt2[60] = nama + ": (Aku pake cairan pembersih dulu).";
        // txt3
        txt3[9] = nama + ": Ni, Bang.";
        txt3[15] = nama + ": (Wah, nyai ni dak make masker. Aku dak ndak belanjo samo diolah).";
        txt3[16] = nama + ": Idak, Nyai.";
        txt3[22] = nama + ": Numpang tanyo, tempat apo ni? Ngapo dijago?";
        txt3[41] = nama + ": Sayo nyasar, Pak.";
        txt3[45] = nama + ": Ya, lamo dak jumpo. Ngapo kau di luar dak pake masker?";
        txt3[48] = nama + ": Iyo. Aku tes rapid dulu sebelum ke terminal bis. Jadi tadi ketinggalan bis petamo.";
        txt3[50] = nama + ": Jangan anggap enteng! Makin ari, makin banyak yang tertular.";
        txt3[51] = nama + ": Kalu kau dak ndak make masker, aku belah yang pegi beli makan. Kagek aku balek lagi.";
        txt3[52] = nama + ": (Hmmm, kagek aku beli masker jugo untuk dio).";
        txt3[55] = nama + ": (Hmmm, barang yang nak kubeli dak tek di sini nampaknyo).";
        txt3[62] = nama + ": Berapo hargo ikan ni sekilo, Nyai?";
        txt3[64] = nama + ": Oh, beli sekilo yo, Nyai. Ni duitnyo.";
        txt3[68] = nama + ": (Waduh, bapak tu idak make masker. Aku dak belanjo samo diolah).";
        txt3[69] = nama + ": Idak, Pak.";
        txt3[84] = nama + ": Tigo bungkus roti ni berapo, Pak?";
        txt3[86] = nama + ": Ni uangnyo, Pak.";
        txt3[91] = nama + ": Berapo hargo empat masker ni, Nyai?";
        txt3[93] = nama + ": Yo, sayo beli, Nyai. Ni duitnyo.";
        txt3[96] = nama + ": Ado apo ni?";
        txt3[98] = nama + ": Wah, tadi sayo baru ketemu dio.";
	}
    else if (kerinci === true){
        // text1
        txt1[9] = nama + ": Tarimo kasih!"; 
		txt1[12] = nama + ": Oh, akau ngimok nyo kek imbao.";
		txt1[14] = nama + ": Iyea lah.";
		txt1[15] = nama + ": Ineh masker dari tino ikao. Pakae lah!";
		txt1[18] = nama + ": Kek manao, Mak?";
		txt1[21] = nama + ": Ndok melei sabun untuk masouh jahoi.";
		txt1[24] = nama + ": Adea sabun untuk masoih jahoi?";
		txt1[30] = nama + ": Ineh sabun, Mak.";
        // txt2 
        txt2[1] = nama + ": Iyea, Mak.";
        txt2[6] = nama + ": Itek, piyao anok, Tek?";
        txt2[8] = nama + ": Oh. Semoga iduak Covid yea, Tek.";
        txt2[11] = nama + ": (Alah, akau harus jago jarak neh)";
        txt2[12] = nama + ": (Wah, akau harus cepak nganta gule nantan)";
        txt2[14] = nama + ": Maaf, akeu iduak baubuak. Tarimo kasih.";
        txt2[17] = nama + ": Iduak Pak. Tarimo kasih.";
        txt2[18] = nama + ": (Uha ineh iduak make masker. Akeu iduak melei buah inei.)";
        txt2[21] = nama + ": Maaf, iduak, Tek.";
        txt2[23] = nama + ": Oh, ijia, Tek.";
        txt2[24] = nama + ": Permisi, jalon ke menara manao, yea?";
        txt2[27] = "Nantan: Halo, " +nama+ " Saingak nantan, Mak niteik gule ndok nantan.";
        txt2[28] = nama + ": Iyea, Ntan!";
        txt2[29] = nama + ": Ineh gule dari Mak untuk Nantan.";
        txt2[32] = nama + ": Iyea, Ntan.";
        txt2[36] = nama + ": Adea tomat, Tek?";
        txt2[38] = nama + ": Iyea, Tek. Apea sabungkuh neh?";
        txt2[40] = nama + ": Ineh kipe, Tek.";
        txt2[43] = nama + ": Sabun cair adea, Tek?";
        txt2[45] = nama + ": Iyea lah, ineh kipe.";
        txt2[49] = "Tino: " + nama +", Adea titipan dari nantan?";
        txt2[50] = nama + ": Akau ka tempek Nantan, Tino.";
        txt2[52] = nama + ": Ineh saben nge tomat dari pasa titipan Nantan.";
        txt2[55] = nama + ": Suduah akau masuh, Tino.";
        txt2[57] = nama + ": Iyea, Ntan.";
        txt2[60] = nama + ": (Akau make cairan pembersih).";
        // txt3
        txt3[9] = nama + ": Ineh, Pak.";
        txt3[15] = nama + ": (Ndeh, uha neh iduak make masker. Akeu iduak jadoi balanjea inei).";
        txt3[16] = nama + ": Iduak, Tek.";
        txt3[22] = nama + ": Akao ndok nuwek, ineh tempek apo? Piyao dijago uha?";
        txt3[41] = nama + ": Akeu tasesak, Pak.";
        txt3[45] = nama + ": Yea, lamao iduak basuwao. Piyao ikao iduak make masker?";
        txt3[48] = nama + ": Iyea, sebelum ke terminal bis akau rapid. Jadi duak dapuak bus pertamao.";
        txt3[50] = nama + ": Mok nganggap remeh! Batambah banyuak nge kenao!";
        txt3[51] = nama + ": Kalo ikao iduak make masker, akao woa lah nge melei nasai. Sagin akao baloik lao inei";
        txt3[52] = nama + ": (Hmmm, sagin akao melei masker ndok nyo).";
        txt3[55] = nama + ": (Hmmm, baron nge ndok dibeloi ijia inei).";
        txt3[62] = nama + ": Apea sakilo laauk, Tek?";
        txt3[64] = nama + ": Iyea lah, sakilo, Tek. Ineh kipe.";
        txt3[68] = nama + ": (Alah, uha toh iduak make masker. Akau iduak balanjea itou).";
        txt3[69] = nama + ": Iduak, Pak.";
        txt3[84] = nama + ": Tigo bungkuh rutei neh apea?";
        txt3[86] = nama + ": Iyealah, ineh kipe, Pak.";
        txt3[91] = nama + ": Apea empak neh, Tek?";
        txt3[93] = nama + ": Iyealah, akau melei empak masker, Tek. Ineh kipe.";
        txt3[96] = nama + ": Adea apo neh?";
        txt3[98] = nama + ": Alah, akeu bahu subeak nyo tadeh.";
	}    
    else if (palembang === true){
        // text1
        txt1[9] = nama + ": Mokasih!"; 
		txt1[12] = nama + ": Oh, Aku nyingok dio di utan.";
		txt1[14] = nama + ": Pacak bae.";
		txt1[15] = nama + ": Ini punutup cungur samo mulut  dari nyai awak. Pakelah dulu!";
		txt1[18] = nama + ": Di mano, Buk?";
		txt1[21] = nama + ": Nak meli sabun basu tangan.";
		txt1[24] = nama + ": Ado sabun masu tangan?";
		txt1[30] = nama + ": Ini sabunnyo, Buk.";
        // txt2 
        txt2[1] = nama + ": Iyo, Buk.";
        txt2[6] = nama + ": Buk, anaknyo ngapo?";
        txt2[8] = nama + ": Oh. Mugo-mugo bukan Covid yo, Buk.";
        txt2[11] = nama + ": (Waduh, aku nyago jarak jarak kalu mak ini)";
        txt2[12] = nama + ": (Nah, aku musti cepet-cepet nganterke makanan Yai)";
        txt2[14] = nama + ": Maaf, aku idak berobat. Mokasih.";
        txt2[17] = nama + ": Tidak Mang. Mokasih.";
        txt2[18] = nama + ": (Mamang ini idak make penutup cungur samo idung. Aku idak beli buah di sini.)";
        txt2[21] = nama + ": Maaf, idak dulu, Bik.";
        txt2[23] = nama + ": Oh, tidak cari apa-apa, Bik.";
        txt2[24] = nama + ": Numpang nanyo, jalan ke menara liwat mano, ya?";
        txt2[27] = "Yai: Halo, " +nama+ " Seenget Yai, ibuk kamok ni nitipke  bekal untuk Yai.";
        txt2[28] = nama + ": Iya, Yai!";
        txt2[29] = nama + ": Ini bekal dari Ibuk untuk Yai.";
        txt2[32] = nama + ": Pacak bae, Yai.";
        txt2[36] = nama + ": Ado tomat, Bik?";
        txt2[38] = nama + ": iyo, Bik. Sebungkus ni berapo regonyo?";
        txt2[40] = nama + ": Baik, ini uangnya, Bik.";
        txt2[43] = nama + ": Sabun cair ado, Bik?";
        txt2[45] = nama + ": Oke, ini duitnyo.";
        txt2[49] = "Nyai: Halo, " + nama +". Apo ado titipan dari Yai kamok ni?";
        txt2[50] = nama + ": Aku nak ke tempat Yai dulu, Nyai.";
        txt2[52] = nama + ": Ini sabun dengen tomat dari pasar titipan Yai.";
        txt2[55] = nama + ": Sudah saya basu, Nyai.";
        txt2[57] = nama + ": Iyo, Yai.";
        txt2[60] = nama + ": (Aku make cairan pembersih dulu).";
        // txt3.........................
        txt3[9] = nama + ": Ini dio, Mang.";
        txt3[15] = nama + ": (Nah, ibuk ini idak make penutup cungur samo mulut. Kulo idak belenan samo bae samo awak).";
        txt3[16] = nama + ": idak, Buk.";
        txt3[22] = nama + ": Cubo tanyo, ini tempat apo? Ngapo nak dijago?";
        txt3[41] = nama + ": Aku nyasar, Pak.";
        txt3[45] = nama + ": Yo, la lamo idak betemu. Nah, ngapo kamok metu idak make penutup cungur  samo mulut?";
        txt3[48] = nama + ": Iya, sebelum ke terminal bis aku tes rapid dulu. Jadi tadi ketinggalan bus yang pertamo.";
        txt3[50] = nama + ": Jangan anggap remeh! Makin ari makin banyak wong yang tetular, tau dak awak ni!";
        txt3[51] = nama + ": Kalu awak idak make penutup cungur dan mulut, biar aku bae yang meli makan. Gagek aku balek lagi ke sini.";
        txt3[52] = nama + ": (naahhh, gagek aku meli penutup cungur samo mulut untuk wong-wong tu).";
        txt3[55] = nama + ": (Hmmm, barang yang nak  kubeli katik di sini).";
        txt3[62] = nama + ": Berapo rego iwak sekilo, Bik?";
        txt3[64] = nama + ": Payo, meli  iwak ini sekilo ya, Bik. Nah, ini duitnyo.";
        txt3[68] = nama + ": (Nah, bapak itu make penutup cungur samo mulut. Aku idak nak belenan samo dio tu).";
        txt3[69] = nama + ": Idak, Pak.";
        txt3[84] = nama + ": Tigo ikok roti ni berapo, Pak?";
        txt3[86] = nama + ": Nah, ini duitnyo, Pak.";
        txt3[91] = nama + ": Berapa rego penutup cungur samo mulut empat ikok, Bik?";
        txt3[93] = nama + ": Payo, Aku beli penutup cungur samo idung ni empat ikok, Bik. Ini duitnyo.";
        txt3[96] = nama + ": Ado apo ini?";
        txt3[98] = nama + ": Nah, aku baru bae betemu dio tadi.";
	}
    else if (besemah === true){
        // text1
        txt1[9] = nama + ": Mekaseh au!"; 
		txt1[12] = nama + ": O, aku tadi nginak die pangke di ghimbe.";
		txt1[14] = nama + ": Oi au, sini neng, engkala aku ngantatkanye.";
		txt1[15] = nama + ": Ce', ini masker san nineng kaba, pakaila kudai!";
		txt1[18] = nama + ": Di mane, Mak?";
		txt1[21] = nama + ": Mbeli sabu batan mbasoh tangan.";
		txt1[24] = nama + ": Ade sabun kandek mbasoh tangan?";
		txt1[30] = nama + ": Ini sabune, Mak.";
        // txt2 
        txt2[1] = nama + ": Au, Mak.";
        txt2[6] = nama + ": Ibungan, ngape anak kamu?";
        txt2[8] = nama + ": Oo. Mugela bukan Covid au, Bung.";
        txt2[11] = nama + ": (Ndok ai, dide nak dampeng ige)";
        txt2[12] = nama + ": (Ai, aku nak gancang diket ngantatka pajuan nineng lanang)";
        txt2[14] = nama + ": Maaf, aku dide nak beghubat. Terime kaseh.";
        txt2[17] = nama + ": Dide Mang. Terime kaseh.";
        txt2[18] = nama + ": (Mamang ini dide bemasker. Aku dide ka mbeli buah di sini.)";
        txt2[21] = nama + ": Maaf, lom kudai, Bek.";
        txt2[23] = nama + ": Oo, dide ncakagh tuape-tuape, Bek.";
        txt2[24] = nama + ": Numpang betanye diket, ame nak ke menara liwat mane, e?";
        txt2[27] = "Nineng lanang: Oi cong, " +nama+ " Ame nineng dek salah, umak kaba nitipka ibatan kandek nineng, au.";
        txt2[28] = nama + ": Au, Neng!";
        txt2[29] = nama + ": Ini die ibatan san di umak kandek kamu, Neng.";
        txt2[32] = nama + ": Oi au, Neng.";
        txt2[36] = nama + ": Ade cung kedire, Bek?";
        txt2[38] = nama + ": Nggok nian, Bek. Beghape regenye sebungkos?";
        txt2[40] = nama + ": Ude ame lok itu, ini duete, Bek.";
        txt2[43] = nama + ": Sabon cair ade dide, Bek?";
        txt2[45] = nama + ": Oi au, ini duete.";
        txt2[49] = "Nineng betine: Cong, " + nama +". Ade dide titipan san di nineng lanang kaba?";
        txt2[50] = nama + ": Aku ke bada nineng lanang kudai, Neng.";
        txt2[52] = nama + ": Ini sabun nga cung kedire san pasar titipan nineng lanang.";
        txt2[55] = nama + ": La kubasuh, Ning.";
        txt2[57] = nama + ": Au, neng.";
        txt2[60] = nama + ": (Aku makai cairan pembersih kudai).";
        // txt3.........................
        txt3[9] = nama + ": Ini, Pak.";
        txt3[15] = nama + ": (Ai, ibong ini dide makai masker. Aku dindak belanje nga die e).";
        txt3[16] = nama + ": Dide, Bek.";
        txt3[22] = nama + ": Numpang betanye diket, tini bada tuape? Ngape dijage?";
        txt3[41] = nama + ": Aku ni dek keruan bada balek, Mang.";
        txt3[45] = nama + ": au, lame dek tekinak. Ngape kak di luagh kuta dide bemasker?";
        txt3[48] = nama + ": au, sate ndak ke terminal tadi aku rapid kudai. Laju tadi ketinggalan bus pertame.";
        txt3[50] = nama + ": Dek boleh lok itu! Mak ini idang aghi tamba banyak saje jeme ye tetular, keruan dide!";
        txt3[51] = nama + ": Ame kaba dindak pakai masker, engkala aku saja ye mbeli makan. Kele aku ngelipat agi.";
        txt3[52] = nama + ": (Hmmm, kele aku belika masker kandek rabanan tu).";
        txt3[55] = nama + ": (Hmmm, barang ye nak kubeli tu dide bedie di sini).";
        txt3[62] = nama + ": Beghape rege sekilu ikane tu, Bek?";
        txt3[64] = nama + ": Udeh ame lok, itu, aku kak ngambek sekilu, ini duete, Bek.";
        txt3[68] = nama + ": (Ai, Mamang itu dek makai masker. Aku dindak belanje nga die e).";
        txt3[69] = nama + ": Dide, Mang.";
        txt3[84] = nama + ": Tige bungkus ruti ini beghape, Mang?";
        txt3[86] = nama + ": oi au, ini duite, Mang.";
        txt3[91] = nama + ": Beghape rege empat masker, Bek?";
        txt3[93] = nama + ": Oi au, aku mbeli empat masker, Bek. Ini duite.";
        txt3[96] = nama + ": Ade tuape tini?";
        txt3[98] = nama + ": ayay, aku empai betemu nga die tadi.";
	} 
    else if (bangka === true){
        // text1
        txt1[9] = nama + ": Sinmung!"; 
		txt1[12] = nama + ": Oh, ku ninggok je di utan.";
		txt1[14] = nama + ": Pacak, Nek.";
		txt1[15] = nama + ": Ni masker dari nenek ka. Pakai dulu!";
		txt1[18] = nama + ": Di mane, Bu?";
		txt1[21] = nama + ": Nek meli sabun cuci tangan.";
		txt1[24] = nama + ": Ade sabun cuci tangan dak?";
		txt1[30] = nama + ": Ni sabun a, Bu.";
        // txt2 
        txt2[1] = nama + ": Oke, Bu.";
        txt2[6] = nama + ": Bu, ngape anak a?";
        txt2[8] = nama + ": Oh. Semoga ukan Covid ok, Bu.";
        txt2[11] = nama + ": (Waduh, ku harus jage jarak nih)";
        txt2[12] = nama + ": (Wah, ku harus cepet-cepet nganter makanan Kakek)";
        txt2[14] = nama + ": Maaf, ku dak berubat. Sinmung.";
        txt2[17] = nama + ": Dak Pak. Sinmung.";
        txt2[18] = nama + ": (Bapak Ni dak pakai masker. Ku enggak lah meli buah di sini)";
        txt2[21] = nama + ": Maaf, dak dulu, Bu.";
        txt2[23] = nama + ": Oh, dak cari ape-ape, Bu.";
        txt2[24] = nama + ": Permisi, jalan ke menara lewat mane, ok?";
        txt2[27] = "Kakek: Halo, " +nama+ " Seinget Kakek, Ibu ka nitip bekel untuk kakek.";
        txt2[28] = nama + ": Aok, Kek!";
        txt2[29] = nama + ": Ni bekel dari Ibu buet Kakek.";
        txt2[32] = nama + ": Pacak, Kek.";
        txt2[36] = nama + ": Ade tomat, Bu?";
        txt2[38] = nama + ": Oke, Bu. Sebungkus ni berape harge a?";
        txt2[40] = nama + ": Ok, Ni duit a, Bu.";
        txt2[43] = nama + ": Sabun cair ade, Bu?";
        txt2[45] = nama + ": Oke, ni duit a.";
        txt2[49] = "Nenek: Halo, " + nama +". Ade titipan dari kakek ka?";
        txt2[50] = nama + ": Ku gi mere tempet kakek dulu, nek.";
        txt2[52] = nama + ": Ni sabun kik tomat dari pasar titipan kakek.";
        txt2[55] = nama + ": La ku cuci, Nek.";
        txt2[57] = nama + ": Oke, Kek.";
        txt2[60] = nama + ": (Ku pakai cairan pemberseh dulu).";
        // txt3
        txt3[9] = nama + ": Ni, Pak.";
        txt3[15] = nama + ": (Waduh, ibu neh dak bemasker. Ku enggak belanje gi je la).";
        txt3[16] = nama + ": Endak, Bu.";
        txt3[22] = nama + ": Numpang nanyak, ni tempet ape, ok? Ngape kene jage?";
        txt3[41] = nama + ": Ku kesasar, Pak.";
        txt3[45] = nama + ": la lame dak Aokketemu. Enduk ngape ka dak makai masker gi jabo neh?";
        txt3[48] = nama + ": Aok, soal a sebelum ku ke terminal bis ku harus rapid dulu. Jadi, tadi ketinggelan bis yang pertama";
        txt3[50] = nama + ": Jangan anggep remeh! Semakin ari semakin banyak yang tertular tau dak!";
        txt3[51] = nama + ": Men ka engak pakai masker, biar ku bai lah yang meli makan. Kelak ku ngulek dudi.";
        txt3[52] = nama + ": (Hmmm, kelak ku meli masker kik jeorang).";
        txt3[55] = nama + ": (Hmmm, barang yang nek ku beli dakde gi sini).";
        txt3[62] = nama + ": Berape harge sekilo ikan, Bu?";
        txt3[64] = nama + ": Oke, beli sekilo ok, Bu. Ni duit a.";
        txt3[68] = nama + ": (Wah, bapak tuh dak bemasker. Ku enggiak lah belaje gi mere je).";
        txt3[69] = nama + ": Endak, Pak.";
        txt3[84] = nama + ": Tige bungkus roti ni berape, Pak?";
        txt3[86] = nama + ": Oke, ni duit a, Pak.";
        txt3[91] = nama + ": Berape harge empat masker, Bu?";
        txt3[93] = nama + ": Oke, Ku beli empat masker, Bu. Ni duit a.";
        txt3[96] = nama + ": Ade ape ni?";
        txt3[98] = nama + ": Waduh, ku baru lah sude ketemu je tadik.";
	}   
    else if (nasal === true){ 
        // text1
        txt1[9] = nama + ": Tekhimo kasih!" ; 
		txt1[12] = nama + ": O, kuliyak yo di khimbo jenu.";
		txt1[14] = nama + ": Na, Pandai.";
		txt1[15] = nama + ": ajo Masker njak sawomu. Pakaido pai!";
		txt1[18] = nama + ": Di dipo, Mak?";
		txt1[21] = nama + ": Hago mbeli sabun basuh culuk.";
		txt1[24] = nama + ": wat sabun basuh culuk?";
		txt1[30] = nama + ": Ajo sabunnyo, Mak.";
        // txt2 
        txt2[1] = nama + ": yu, Mak.";
        txt2[3] = "Tetanggo: wui, " + nama + " kute-tengis sawo Joko keno Covid.";
        txt2[6] = nama + ": Ngapi anakmu, Ncu?";
        txt2[8] = nama + ": O. kalau nido ayin keno Covid, Ncu.";
        txt2[11] = nama + ": (ai, nyak mesti njago jakhak ajo)";
        txt2[12] = nama + ": (Wui, nyak hago cecepat ngantakkun mai gulai tamungku)";
        txt2[14] = nama + ": Mehaf, nyak meuwat hago beubat. Tekhimo kasih.";
        txt2[17] = nama + ": Meuwat Ncu. Tekhimo kasih.";
        txt2[18] = nama + ": (Khagah sijo meuwat makai masker. Nyak ngguk mbeli wah-wahan di dijo.)";
        txt2[21] = nama + ": Mehaf, meuwat kung, Ncu.";
        txt2[23] = nama + ": O, Meuwat ngilum api-api, Ncu.";
        txt2[24] = nama + ": Pekhmisi, tengekhan hago ilung menara ni di dipo kio, wui?";
        txt2[27] = "Tamung: wui, " +nama+ " Pekhasoan Tamung, makmu jenu nitipkun tanci untuk Tamung.";
        txt2[28] = nama + ": Yedo nihan, Mung!";
        txt2[29] = nama + ": Ajo tanci njak mak untuk Tamung.";
        txt2[32] = nama + ": Payu, Mung.";
        txt2[36] = nama + ": Wat telung mendikho, Ncu?";
        txt2[38] = nama + ": Yu, Ncu. Pikho khegonyo secumpuk?";
        txt2[40] = nama + ": Yu, ajo tancinyo, Ncu.";
        txt2[43] = nama + ": Wat sabun cayikh, Ncu?";
        txt2[45] = nama + ": Yu, Ajo tancinyo.";
        txt2[48] = "Tetanggo: Ai, kak balak kidah kau sijo, wui. " + nama;
        txt2[49] = "Sawo: Wui, " + nama +". Wat titipan njak tamungmu jenu?";
        txt2[50] = nama + ": nyak mit bahun tamung pai, sawo.";
        txt2[52] = nama + ": ajo sabun khan telung mendikho njak pekan jenu titipan tamung.";
        txt2[53] = "Sawo: Tekhimo kasih. " +nama + ". Tulung basuhi pai, yu.";
        txt2[55] = nama + ": Kak khadu kubasuhi, sawo.";
        txt2[57] = nama + ": Payu, Mung.";
        txt2[60] = nama + ": (Nyak hago makai cayikhan pembekhesih pai).";
        // txt3
        txt3[9] = nama + ": Ajo, Pak.";
        txt3[15] = nama + ": (Ai, bibai sijo meuwat makai masker. Nyak ngguk mbeli khan yo wui).";
        txt3[16] = nama + ": Meuwat, Ncu.";
        txt3[22] = nama + ": Numpang betanyo, Khan api kio ajo? Ngapi sangkan dijagoi?";
        txt3[41] = nama + ": Nyak tesesat, Pak.";
        txt3[44] = "Sanak: Wui! " + nama + " Kak sako kito meuwat betunggo!";
        txt3[45] = nama + ": Uu, Kak sako kito meuwat betunggo. Ngapi kio kau luwah bahun meuwat bemasker?";
        txt3[48] = nama + ": Uu, Semakkung ilung terminal bis nyak rapid pai. Jadi jenu tinggalkun bis pekhtamo.";
        txt3[50] = nama + ": Ndang dianggap khimih! Setiap wali tambah duwik ngio sai keno pandai kio kau!";
        txt3[51] = nama + ": Amun kau meuwat makai masker, Pandaido nyak mbeli kanikan. Kaenti nyak dijo luwut.";
        txt3[52] = nama + ": (Hmmm, kaenti kubelikun masker untuk tian).";
        txt3[55] = nama + ": (Hmmm, bakhang sai hago kubeli meuwat ngeduk di dijo).";
        txt3[62] = nama + ": Pikho Khego iwo sekilo, Ncu?";
        txt3[64] = nama + ": Jadi, mbeli sekilo yu, Ncu. Ajo tancinyo.";
        txt3[68] = nama + ": (Ai, Khagah sudi meuwat makai masker. Nyak ngguk mbeli khan yo wui).";
        txt3[69] = nama + ": Meuwat, Ncu.";
        txt3[84] = nama + ": Telu bungkus khuti sijo pikho, Pak?";
        txt3[86] = nama + ": Yu, Ajo tancinyo, Ncu.";
        txt3[91] = nama + ": Pikho khego pak mbigi masker, Ncu?";
        txt3[93] = nama + ": Jadi, Nyak mbeli pak mbigi masker, Ncu. Ajo tancinyo.";
        txt3[96] = nama + ": Ngapi ajo?";
        txt3[98] = nama + ": Ai, Nyak mpai khadu betunggo lawan yo jenu.";
	}
    else if (rejang === true){ 
        // text1
        txt1[9] = nama + ": Mokasiak!" ; 
		txt1[12] = nama + ": Awu, uku kemliak si nak imbo.";
		txt1[14] = nama + ": Awu pacok.";
		txt1[15] = nama + ": Dio masker kunei sebei nu. Kakei kileak!";
		txt1[18] = nama + ": Neak ipe, Mak?";
		txt1[21] = nama + ": Lok tenukua sabun utuk puk tangen.";
		txt1[24] = nama + ": Ade sabun puk tangen?";
		txt1[30] = nama + ": Die sabun ne, Mak.";
        // txt2 
        txt2[1] = nama + ": Awu, Mak.";
        txt2[3] = "Tetanggo: Hoi, " + nama + " te teniuk ngenyan Joko keno Covid.";
        txt2[6] = nama + ": Bik, anok kumu gene?";
        txt2[8] = nama + ": Oh. Kinoi te co si Covid, Bik.";
        txt2[11] = nama + ": (Woi, uku harus jemago jarak die)";
        txt2[12] = nama + ": (Woi, uku harus gegulut mbes kembuk Datuk)";
        txt2[14] = nama + ": Maaf, uku coa bubet. Mokasiak.";
        txt2[17] = nama + ": (Tiak yo coa makei masker. Coa ku lok tenukua buak nak ye.)";
        txt2[18] = nama + ": (Khagah sijo meuwat makai masker. Nyak ngguk mbeli wah-wahan di dijo.)";
        txt2[21] = nama + ": Maaf, coa kileak, Bik.";
        txt2[23] = nama + ": Coa mesoa jejano, Bik.";
        txt2[24] = nama + ": Nupang liwet, dalen moi menara liwet ipe, gi?";
        txt2[27] = "Datuk: Hoi, " +nama+ " Kinget Datuk, Mak nu tmitip kembuk utuk Datuk.";
        txt2[28] = nama + ": Awu, Tuk!";
        txt2[29] = nama + ": Die kembuk kunei Mak utuk Datuk.";
        txt2[32] = nama + ": Awu, Tuk.";
        txt2[36] = nama + ": Ade telung dira, Bik?";
        txt2[38] = nama + ": Awu, Bik. De bukus yo kedau go ne?";
        txt2[40] = nama + ": Awu, dio caci ne, Bik.";
        txt2[43] = nama + ": Sabun cair ade, Bik?";
        txt2[45] = nama + ": Awu, die caci ne.";
        txt2[48] = "Tetanggo: Oh, ko bi lai gi. " + nama;
        txt2[49] = "Sebei: Oii, " + nama +". Jano ade nelei Datuknu?";
        txt2[50] = nama + ": Uku alau moi kakea Datuk kileak, Sebei.";
        txt2[52] = nama + ": Dio sabun ngen telung dira kunei pasar tnitip Datuk.";
        txt2[53] = "Sebei: Mokasiak. " +nama + ". Tulung nepuk kileak, awu.";
        txt2[55] = nama + ": Sudo ku mpuk, Sebei.";
        txt2[57] = nama + ": Awu, Tuk.";
        txt2[60] = nama + ": (Uku makei bioa pembersih kileak).";
        // txt3
        txt3[9] = nama + ": Die, Pak.";
        txt3[15] = nama + ": (Woi, mbei yo coa makei masker die. Coa ku lok temukua da).";
        txt3[16] = nama + ": Coa, Bik.";
        txt3[22] = nama + ": Nupang tanye, dio kakea jano? Gene jenago?";
        txt3[41] = nama + ": Uku limau, Pak.";
        txt3[44] = "Pasuak: Hoi! " + nama + " bi an coa temau!";
        txt3[45] = nama + ": Awu, bi an coa temau. Gene ko nak lua coa makei masker?";
        txt3[48] = nama + ": Awu, ayok moi terminal bus o rapid kileak. Ijai ano ketinggea stom pertamo.";
        txt3[50] = nama + ": Jibeak manggap remeh! Tambeak bilai tambeak dau de maliak ne uyo die!";
        txt3[51] = nama + ": Amen ko coa lok makei masker, kunyau uku bae tenukua kembuk ne. Be uku belek igai.";
        txt3[52] = nama + ": (Hmmm, be uku tenukua masker utuk tobo o).";
        txt3[55] = nama + ": (Hmmm, barang de lok ku tenukua coa gen nak yo).";
        txt3[62] = nama + ": Kedau go kan de kilo, Bik?";
        txt3[64] = nama + ": Awu, tenukua de kilo awu, Bik. Dio caci ne.";
        txt3[68] = nama + ": (Ai, Khagah sudi meuwat makai masker. Nyak ngguk mbeli khan yo wui).";
        txt3[69] = nama + ": Coa, Pak.";
        txt3[84] = nama + ": Telau bukus ruti yo kedau go ne, Pak?";
        txt3[86] = nama + ": Awu, dio caci ne, Pak.";
        txt3[91] = nama + ": Kedau go pat masker, Bik?";
        txt3[93] = nama + ": Awu, uku tenukua pat masker, Bik. Dio caci ne.";
        txt3[96] = nama + ": Gene dio?";
        txt3[98] = nama + ": Woi, uku bi sudo temau si ano.";
	}
    else if (lampung === true){ 
        // text1
        txt1[9] = nama + ": Tekhima kasih!" ; 
		txt1[12] = nama + ": Oh, nyak ngeliyak ya di pullan.";
		txt1[14] = nama + ": Tettu khia.";
		txt1[15] = nama + ": Inji masker jak ajjongmu. Dipakai pai!";
		txt1[18] = nama + ": Dipa, Mak?";
		txt1[21] = nama + ": Haga mbeli sabun basuh culuk.";
		txt1[24] = nama + ": Wat sabun basuh culuk?";
		txt1[30] = nama + ": Inji sabunni, Mak.";
        // txt2 
        txt2[1] = nama + ": Yu, Mak.";
        txt2[3] = "Tetangga: Hai, " + nama + " Tenengisku kik Bu Joko kena Covid.";
        txt2[6] = nama + ": Mak, anakni kenapi?";
        txt2[8] = nama + ": Oh. Semoga lain Covid yu, Mak.";
        txt2[11] = nama + ": (Waduh, nyak hakhus jaga jarak jo)";
        txt2[12] = nama + ": (Wah, nyak hakhus geluk-geluk ngantakko kanik an makai Among/Ajjong)";
        txt2[14] = nama + ": Mahap, nyak mak bubat. Tekhima kasih.";
        txt2[17] = nama + ": Mawat Pak. Tekhima kasih.";
        txt2[18] = nama + ": (Bapak inji mak makai masker. Nyak mak mbeli beli buah dija.)";
        txt2[21] = nama + ": Mahap, mawat pai, Mak.";
        txt2[23] = nama + ": Oh, mawat nyepok api-api, Mak.";
        txt2[24] = nama + ": Pekhmisi, khelaya mit menara liwat dipa, yu?";
        txt2[27] = "Among/Ajjong : Halo, " +nama+ " Ade titipan dari kakek ka, dak?";
        txt2[28] = nama + ": Iyu!";
        txt2[29] = nama + ": Inji bekal jak Emak pakai Among/Ajjong.";
        txt2[32] = nama + ": Tattu khia.";
        txt2[36] = nama + ": Uwat tomat, Mak?";
        txt2[38] = nama + ": Iyu, Mak. Sebungkus inji pikha khegani?";
        txt2[40] = nama + ": Iyu, inji duitni, Mak.";
        txt2[43] = nama + ": Sabun cair uwat, Mak?";
        txt2[45] = nama + ": Oke, inji duitni.";
        txt2[48] = "Tetangga: Oh, niku khadu balak, yu. " + nama;
        txt2[49] = "Among/Ajjong: Halo, " + nama +". Api uwat titipan makai nyak?";
        txt2[50] = nama + ": Nyak mit apini Among/Ajjong pai.";
        txt2[52] = nama + ": Dio sabun ngen telung dira kunei pasar tnitip Datuk.";
        txt2[53] = "Among/Ajjong: Tekhima kasih. " +nama + ". Tulung dibasuh pai, yu.";
        txt2[55] = nama + ": Khadu ku basuh.";
        txt2[57] = nama + ": Iyu.";
        txt2[60] = nama + ": (Nyak makai caikhan pembekhsih pai).";
        // txt3
        txt3[9] = nama + ": Sinji, Pak.";
        txt3[15] = nama + ": (Wah, Emak inji mak makai masker. Nyak mak belanja guk ya).";
        txt3[16] = nama + ": Mawat, Mak.";
        txt3[22] = nama + ": Mohon tanya, inji tempat api? Kenapi dijaga?";
        txt3[41] = nama + ": Nyak kesasar, Pak.";
        txt3[44] = "Saudara: Hai! " + nama + " saka mak tungga!";
        txt3[45] = nama + ": Yu, saka mak tungga. Kok niku di luakh mak makai masker?";
        txt3[48] = nama + ": Iyu, semakkung mit terminal bis nyak rapid pai. Jadi kakhu ketinggalan bus pekhtama.";
        txt3[50] = nama + ": Dang anggap remeh! Semakin khani semakin lamon sai tertular!";
        txt3[51] = nama + ": Kik niku mak makai masker, nyin nyak gawoh sai mbeli mengan. Kanah nyak muloh luwot.";
        txt3[52] = nama + ": (Hmmm, kanah nyak beli masker pakai tiyan).";
        txt3[55] = nama + ": (Hmmm, bakhang sai tekhok kubeli mak ngedok dija).";
        txt3[62] = nama + ": Pikha harga sekilo iwa, Mak?";
        txt3[64] = nama + ": Tabik, beli sekilo yu, Mak. Inji duitni.";
        txt3[68] = nama + ": (Wah, bapak udi mak makai masker. Nyak mak belanja guk ya).";
        txt3[69] = nama + ": Mawat, Pak.";
        txt3[84] = nama + ": Telu bungkus khuti inji pikha, Pak?";
        txt3[86] = nama + ": Tabik, inji duitni, Pak.";
        txt3[91] = nama + ": Pikha hakhga pak masker, Mak?";
        txt3[93] = nama + ": Tabik, nyak mbeli pak masker, Mak. Inji duitni.";
        txt3[96] = nama + ": Wat api inji?";
        txt3[98] = nama + ": Wah, nyak ampai ketemu ya kakhu.";
	}
    // jawa
    else if (betawi === true){ 
        // text1
        txt1[9] = nama + ": Makasih!"; 
		txt1[12] = nama + ": Oh, aye liat die di utan.";
		txt1[14] = nama + ": Iye.";
		txt1[15] = nama + ": Ini masker dari nyailu. Dipake dulu!";
		txt1[18] = nama + ": Di mane, Nyak?";
		txt1[21] = nama + ": Mo beli sabun cuci tangan.";
		txt1[24] = nama + ": Ada sabun cuci tangan?";
		txt1[30] = nama + ": Ini sabunnye, Nyak.";
        // txt2 
        txt2[1] = nama + ": Iye, Nyak.";
        txt2[3] = "Tetangga: Hey, " + nama + " Dengar-dengar Bu Joko kena Covid.";
        txt2[6] = nama + ": Bu, anaknye kenape?";
        txt2[8] = nama + ": Oh. Moga-moga bukan Covid ye, Bu.";
        txt2[11] = nama + ": (Waduh, gue kudu jage jarak nih)";
        txt2[12] = nama + ": (Wah, gue kudu buru-buru nganter makanan Engkong)";
        txt2[14] = nama + ": Maap, gue kagak berobat. Makasi.";
        txt2[17] = nama + ": Kagak Pak. makasih.";
        txt2[18] = nama + ": (Bapak ini kagak pake masker. Gue kagak beli buah di sini.)";
        txt2[21] = nama + ": Maap, kagak dulu, Bu.";
        txt2[23] = nama + ": Oh, kagak cari ape-ape, Bu.";
        txt2[24] = nama + ": Permisi, jalan ke menara lewat mane, ya?";
        txt2[27] = "Engkong: Woy, " +nama+ " Seinget Engkong, enyaklu nitipin bekel bakal Engkong.";
        txt2[28] = nama + ": Iye, Kong!";
        txt2[29] = nama + ": Ini bekel dari Enyak bakal Engkong.";
        txt2[32] = nama + ": Iye, Kong.";
        txt2[36] = nama + ": Ade tomat, Bu?";
        txt2[38] = nama + ": Iye, Bu. Sebungkus ini berape harganye?";
        txt2[40] = nama + ": Iye, ini uangnye, Bu.";
        txt2[43] = nama + ": Sabun caer ade, Bu?";
        txt2[45] = nama + ": Iye, ini uangnye.";
        txt2[48] = "Tetangga: Oh, lu udah gede, ye. " + nama;
        txt2[49] = "Nyai: Woy, " + nama +". Apa ada titipan dari engkonglu?";
        txt2[50] = nama + ": Gue ke tempat Engkong dulu, Nyi.";
        txt2[52] = nama + ": Ini sabun ame tomat dari pasar titipan Engkong.";
        txt2[53] = "Nyai: Makasih. " +nama + ". Tolong dicuci dulu, ye.";
        txt2[55] = nama + ": Udah gue cuci, Nyi.";
        txt2[57] = nama + ": Iye, Kong.";
        txt2[60] = nama + ": (Gue pake caeran pembersih dulu).";
        // txt3
        txt3[9] = nama + ": Ini, Pak.";
        txt3[15] = nama + ": (Wah, ibu ini kagak make masker. Gua kagak belanje ame die deh).";
        txt3[16] = nama + ": Kagak, Bu.";
        txt3[22] = nama + ": Numpang nanye, ini tempat ape? Kenape dijage?";
        txt3[41] = nama + ": Gue nyasar, Pak.";
        txt3[44] = "Sodara: Woy! " + nama + " lama kagak ketemu!";
        txt3[45] = nama + ": Ya, lama kagak ketemu. Kok lu di luar kagak pake masker?";
        txt3[48] = nama + ": Iya, sebelom ke terminal bis gue rapid dulu. Jadi tadi ketinggalan bus pertama.";
        txt3[50] = nama + ": Jangan anggap remeh! Makin ari makin banyak yang ketularan tau!";
        txt3[51] = nama + ": Kalo lu kagak mo pake masker, biar gue aje yang beli makan. Nanti gue balik lagi.";
        txt3[52] = nama + ": (Hmmm, nanti gue beli masker bakal tu orang-orang).";
        txt3[55] = nama + ": (Hmmm, barang yang pengen gue beli kagak ada di mari).";
        txt3[62] = nama + ": Berape harga sekilo ikan, Bu?";
        txt3[64] = nama + ": Iye, beli sekilo ye, Bu. Ini uangnye.";
        txt3[68] = nama + ": (Wah, bapak itu kagak pake masker. Gue kagak belanje ame die deh).";
        txt3[69] = nama + ": Kagak, Pak.";
        txt3[84] = nama + ": Tige bungkus roti ini berape, Pak?";
        txt3[86] = nama + ": Iye, ini uangnye, Pak.";
        txt3[91] = nama + ": Berape harga empat masker, Bu?";
        txt3[93] = nama + ": Iye, gue beli empat masker, Bu. Ini uangnye.";
        txt3[96] = nama + ": Ade ape ini?";
        txt3[98] = nama + ": Wah, gue baru ketemu dia tadi.";
	}
    else if (sunda === true){ 
        // text1
        txt1[9] = nama + ": Nuhun!"; 
		txt1[12] = nama + ": Oh, kuring ningali manéhna di leuweung.";
		txt1[14] = nama + ": Mangga, Ni.";
		txt1[15] = nama + ": Ieu masker ti nini anjeun. Sok paké heula!";
		txt1[18] = nama + ": Di mana, Ma?";
		txt1[21] = nama + ": Badé mésér sabun kanggo ngawasuh panangan.";
		txt1[24] = nama + ": Aya sabun kanggo ngumbah panangan?";
		txt1[30] = nama + ": Ieu sabunna, Ma.";
        // txt2 
        txt2[1] = nama + ": Enya, Ma.";
        txt2[3] = "Tatangga: Hei, " + nama + " Cenah mah Bu Joko keuna ku Covid.";
        txt2[6] = nama + ": Bu, éta murangkalih kunaon?";
        txt2[8] = nama + ": Oh. Mudah-mudahan sanés Covid nya, Bu.";
        txt2[11] = nama + ": (Waduh, kuring kudu jaga jarak yeuh)";
        txt2[12] = nama + ": (Wah, kudu buru-buru nganteuran tuangeun si Aki)";
        txt2[14] = nama + ": Punten, abdi moal lalandong. Nuhun.";
        txt2[17] = nama + ": Henteu Pa. Nuhun.";
        txt2[18] = nama + ": (Si Bapa teu maké masker. Kuring moal meuli buah didieu.)";
        txt2[21] = nama + ": Punten, moal meser, Bu.";
        txt2[23] = nama + ": Oh, henteu, Bu.";
        txt2[24] = nama + ": Punten, jalan ka manara ka palih mana, nya?";
        txt2[27] = "Aki: Halo, " +nama+ " Sakainget Aki, indung manéh nitipkeun bekel keur Aki .";
        txt2[28] = nama + ": Enya, Ki!";
        txt2[29] = nama + ": Ieu bekel ti Ema kanggo Aki.";
        txt2[32] = nama + ": Tiasa, Ki.";
        txt2[36] = nama + ": Aya tomat, Bu?";
        txt2[38] = nama + ": Enya, Bu. Sabungkus ieu sabaraha pangaosna?";
        txt2[40] = nama + ": Enya,ieu artosna, Bu.";
        txt2[43] = nama + ": Sabun cair aya, Bu?";
        txt2[45] = nama + ": Enya, ini artosna.";
        txt2[48] = "Tetangga: Oh, anjeun geus gede, nya. " + nama;
        txt2[49] = "Nini: Hei, " + nama +". Sugan aya titipan ti Aki manéh?";
        txt2[50] = nama + ": Abdi ka tempat Aki heula nya, Ni.";
        txt2[52] = nama + ": Leu sabun sareng tomat titipan ti Aki.";
        txt2[53] = "Nini: Nuhun. " +nama + ". Pang ngumbahkeun heula, nya.";
        txt2[55] = nama + ": Tos diwasuh, Ni.";
        txt2[57] = nama + ": Muhun, Ki.";
        txt2[60] = nama + ": (Kuring maké cairan beberesih heula).";
        // txt3
        txt3[9] = nama + ": Ieu, Pa.";
        txt3[15] = nama + ": (Wah, ibu ieu teu maké masker. Kuring moal balanja didinya ah).";
        txt3[16] = nama + ": Henteu, Bu.";
        txt3[22] = nama + ": Punten, ieu tempat naon? Kunaon dijagaan?";
        txt3[41] = nama + ": Abdi nyasar, Pa.";
        txt3[44] = "Wargi: Hai! " + nama + " Lami teu tepang!";
        txt3[45] = nama + ": Muhun, lami teu pendak. Kunaon teu nganggo masker?";
        txt3[48] = nama + ": Enya, sateuacan ka terminal beus, abdi rapid heula. Jadi tadi katinggaleun beus kahiji.";
        txt3[50] = nama + ": Entong nganggap énténg! Beuki seu'eur jalmi anu katépaan";
        txt3[51] = nama + ": Lamun anjeun alim dimasker, keun wé abdi nu mésér tuangeun. Engké abdi uih deui.";
        txt3[52] = nama + ": (Hmmm, engké abdi badé mésér masker kanggo aranjeuna).";
        txt3[55] = nama + ": (Hmmm, barang anu badé dipésér téh teu aya di dieu).";
        txt3[62] = nama + ": Lauk sabaraha sakilona, Bu?";
        txt3[64] = nama + ": Muhun, mésér sakilo nya, Bu. Ieu artosna.";
        txt3[68] = nama + ": (Wah, bapa éta teu maké masker. Kuring moal balanja di dinya ah).";
        txt3[69] = nama + ": Henteu, Pa.";
        txt3[84] = nama + ": Tilu bungkus roti ieu sabaraha, Pa?";
        txt3[86] = nama + ": Muhun, ieu artosna, Pa.";
        txt3[91] = nama + ": Sabaraha pangaos opat masker, Bu?";
        txt3[93] = nama + ": Muhun, abdi mésér opat masker, Bu. Ieu artosna.";
        txt3[96] = nama + ": Aya naon ieu?";
        txt3[98] = nama + ": Wah, tadi abdi nembé tepang.";
	}
    else if (cirebon === true){ 
        // text1
        txt1[9] = nama + ": Kesuwun!" ; 
		txt1[12] = nama + ": Oh, isun deleng ning alas.";
		txt1[14] = nama + ": Bisa, Mbok.";
		txt1[15] = nama + ": Iki masker sing mbok tuae ira. Dienggo dikit!";
		txt1[18] = nama + ": Ning endi, Mi?";
		txt1[21] = nama + ": Tuku sabun cuci tangan.";
		txt1[24] = nama + ": Ana sabun cuci tangan bli, Bi?";
		txt1[30] = nama + ": Iki sabune, Mi.";
        // txt2 
        txt2[1] = nama + ": Nggih, Mi.";
        txt2[3] = "Tangga: He, " + nama + " Jare e Bu Joko kena Covid, bener bli cah?.";
        txt2[6] = nama + ": Bi, anake napa?";
        txt2[8] = nama + ": Oh. Moga dudu Covid ya, Bi.";
        txt2[11] = nama + ": (Waduh, isun kudu jaga jarak kih)";
        txt2[12] = nama + ": (Wah, isun kudu gage nganter panganan kanggo bapo)";
        txt2[14] = nama + ": Punten, isun bli berobat. Kesuwun.";
        txt2[17] = nama + ": Bli, Mang. Kesuwun.";
        txt2[18] = nama + ": (Mamange bli ngenggo masker. Isun mong tuku buahe ning kene ah.)";
        txt2[21] = nama + ": Punten, lain kali bae, Bi.";
        txt2[23] = nama + ": Oh, bli luru apa-apa, Bi.";
        txt2[24] = nama + ": Punten, dalan marani menara lewat mendi, ya?";
        txt2[27] = "Kakek: He, " +nama+ " Jare e mimi nitip bekel kanggo bapo.";
        txt2[28] = nama + ": Oh iya!";
        txt2[29] = nama + ": Iki bekel kanggo Bapo.";
        txt2[32] = nama + ": Bisa.";
        txt2[36] = nama + ": Ana tomat bli, Bi?";
        txt2[38] = nama + ": Nggih. Sebungkuse pira, Bi?";
        txt2[40] = nama + ": Nggih,Iki duite, Bi.";
        txt2[43] = nama + ": Sabun cair ana bli, Bi?";
        txt2[45] = nama + ": Oke, iki duite, Bi.";
        txt2[48] = "Tangga: Wah, ira wis gede ya. " + nama;
        txt2[49] = "Mbok: He, " + nama +". Ana titipan sing bapo bli?";
        txt2[50] = nama + ": Isun ning Bapo dikit ya, Mbok.";
        txt2[52] = nama + ": Iki sabun karo tomat sing pasar titipane Bapo.";
        txt2[53] = "Mbok: Kesuwun " +nama + ". Tulung dibasu dikit, ya.";
        txt2[55] = nama + ": Wis dibasu, Mbok.";
        txt2[57] = nama + ": Iya, Bapo.";
        txt2[60] = nama + ": (Isun ngenggo cairan pembersih dikit).";
        // txt3
        txt3[9] = nama + ": Mangga, Pak.";
        txt3[15] = nama + ": (Wah, ibu kien bli ngenggo masker. Isun mong tuku ning kene ah).";
        txt3[16] = nama + ": Bli, Bi.";
        txt3[22] = nama + ": Punten, kien tempat apa ya? Napa dijaga?";
        txt3[41] = nama + ": Isun kesasar, Pak.";
        txt3[44] = "Sedulur: He! " + nama + " wis suwe bli deleng raie ira!";
        txt3[45] = nama + ": Iya ya. Lah kok ira bli ngenggo masker sih?";
        txt3[48] = nama + ": Iya, sedurunge ning terminal rapid dikit asale. Dadi ketinggalan bis pertama.";
        txt3[50] = nama + ": Aja nganggep remeh ira! Enggal dina wong kang ketular nambah ake bae.";
        txt3[51] = nama + ": Lamun ira bli gelem ngenggo masker, isun bae wis kang tuku panganane. Engko isun balik maning.";
        txt3[52] = nama + ": (Hmmm, engko isun tuku masker kanggo bocah-bocah kuen lah).";
        txt3[55] = nama + ": (Hmmm, barang kang pengen dituku langka cah ning kene e).";
        txt3[62] = nama + ": Sekiloe pira, Bi?";
        txt3[64] = nama + ": Tuku sekilo ya, Bi. Punten, iki duite.";
        txt3[68] = nama + ": (Dih, mamang e bli ngenggo masker cah. Isun bli tuku ning kono lah).";
        txt3[69] = nama + ": Bli, Mang.";
        txt3[84] = nama + ": Telung bungkus roti pira jeh, Mang?";
        txt3[86] = nama + ": Kih duite, Mang.";
        txt3[91] = nama + ": Patang masker pira jeh, Bi?";
        txt3[93] = nama + ": Tuku maskere, Bi. Kih duite.";
        txt3[96] = nama + ": Ana apa iki?";
        txt3[98] = nama + ": Wah, isun nembe ketemu mau.";
	}
    else if (jawa === true){ 
        // text1
        txt1[9] = nama + ": Nuwun!"; 
		txt1[12] = nama + ": Oh, aku weruh dheweke mau neng alas.";
		txt1[14] = nama + ": Inggih mbah.";
		txt1[15] = nama + ": Iki masker seka mbahmu. Dinggo sik yo!";
		txt1[18] = nama + ": Nangdi, Bu?";
		txt1[21] = nama + ": Arep tuku sabun nggo wisuh.";
		txt1[24] = nama + ": Ono sabun wisuh?";
		txt1[30] = nama + ": Iki sabunne, Bu.";
        // txt2 
        txt2[1] = nama + ": Inggih, Bu.";
        txt2[3] = "Tangga: He, " + nama + " aku krungu nek bu Joko kena Covid.";
        txt2[6] = nama + ": Bu, anak e kena opo?";
        txt2[8] = nama + ": Oh. Muga-muga dudu Covid yo bu.";
        txt2[11] = nama + ": (Waduh, aku kudu jaga jarak iki)";
        txt2[12] = nama + ": (Aku kudu cepet-cepet ngeterke panganan nggo simbah kakung)";
        txt2[14] = nama + ": Sepurane, aku ora arep periksa. Nuwun.";
        txt2[17] = nama + ":  Ora pak. nuwun.";
        txt2[18] = nama + ": (Bapak iki ora nganggo masker. Aku ora arep tuku buah neng kene.)";
        txt2[21] = nama + ": Sepurane, ora sik bu.";
        txt2[23] = nama + ": Ora golek opo-opo bu.";
        txt2[24] = nama + ": Nuwun sewu, dalan neng menara lewat ngendi yo?";
        txt2[27] = "Simbah kakung: " +nama+ " Sak elinge simbah, ibumu nitip panganan nggo simbah.";
        txt2[28] = nama + ": Inggih, Mbah!";
        txt2[29] = nama + ": Iki panganan seka ibu nggo simbah.";
        txt2[32] = nama + ": Inggih, Mbah.";
        txt2[36] = nama + ": Ono tomat,  Bu?";
        txt2[38] = nama + ": Inggih, Bu. Sebungkus iki pira regane?";
        txt2[40] = nama + ":  Nggih, nuwun, Bu.";
        txt2[43] = nama + ": Sabun cair ono, Bu?";
        txt2[45] = nama + ": Yo, iki duite.";
        txt2[48] = "Tetangga: Wah, kowe wis gede, yo. " + nama;
        txt2[49] = "Simbah putri: " + nama +". Opo ono titipan seka mbahmu?";
        txt2[50] = nama + ": Aku nenggone simbah kakung sik , Mbah.";
        txt2[52] = nama + ": Iki sabun lan tomat seka pasar titipan seka simbah kakung.";
        txt2[53] = "Simbah: Nuwun. " +nama + ". Tulung dikumbah dhisik, yo.";
        txt2[55] = nama + ": Wis tak kumbah, Mbah.";
        txt2[57] = nama + ": Inggih, Mbak.";
        txt2[60] = nama + ": (Aku nganggo cairan pembersih sik).";
        // txt3
        txt3[9] = nama + ": Iki, Pak.";
        txt3[15] = nama + ": (Wah, ibu iki ora nganggo masker.  Aku ora arep blanja karo dheweke meneh).";
        txt3[16] = nama + ": Ora, Bu.";
        txt3[22] = nama + ": Nuwun sewu, iki panggonan opo? Kok dijogo?";
        txt3[41] = nama + ": Aku kesasar, Pak.";
        txt3[44] = "Sedulur: He! " + nama + " suwe ora ketemu!";
        txt3[45] = nama + ": Yo, suwe ora ketemu. Kok sampeyan neng njaba ora nganggo masker?";
        txt3[48] = nama + ": Iyo, sak durunge neng terminal bis, aku rapid tes sik. Dadi aku ketinggalan bis nomer siji.";
        txt3[50] = nama + ":Ojo dianggap remeh! soyo akeh sing ketularan, ngerti ora!";
        txt3[51] = nama + ": Nek kowe ora nganggo masker, ben aku wae sing tuku panganan. Mengko aku balik meneh.";
        txt3[52] = nama + ": (Hmmm, mengko aku tak tuku masker nggo wong-wong kui).";
        txt3[55] = nama + ": (Hmmm, barang sing tak pengin tuku ora ono neng kene).";
        txt3[62] = nama + ": Pira rega sekilo iwak banyu, Bu?";
        txt3[64] = nama + ": Nggih, tuku sekilo, Bu. Iki duite.";
        txt3[68] = nama + ": (Wah, bapak kuwi ora nganggo masker. Aku ora arep belanja neng nggone dheweke, ah).";
        txt3[69] = nama + ": Ora, Pak.";
        txt3[84] = nama + ": Roti telung wungkus iki pira, Pak?";
        txt3[86] = nama + ": Inggih, iki duite, Pak.";
        txt3[91] = nama + ": Regane masker papat pira, Bu?";
        txt3[93] = nama + ": Nggih, aku tuku masker papat, Bu. Iki duite.";
        txt3[96] = nama + ": Ono apa iki?";
        txt3[98] = nama + ": Wah, aku bar ketemu deweke mau.";
	}
    else if (pemalang === true){ 
        // text1
        txt1[9] = nama + ": Matur suwun!" ; 
		txt1[12] = nama + ": Oh, enyong ndeleng bocahe esih nang utan.";
		txt1[14] = nama + ": Bise rah.";
		txt1[15] = nama + ": Kiye masker sing mbah putri ne kowen. Dinggo ndisit!";
		txt1[18] = nama + ": Nang endi, Bu?";
		txt1[21] = nama + ": Apan tuku sabun ngo wisuh tangan.";
		txt1[24] = nama + ": Ana sabun ngo wisuh tangan?";
		txt1[30] = nama + ": Kiye sabunne, Bu.";
        // txt2 
        txt2[1] = nama + ": Iye, Bu.";
        txt2[3] = "Tenggene: Hai, " + nama + " Krungu-krungu Bu Joko kena Covid.";
        txt2[6] = nama + ": Bu, anake kenapa?";
        txt2[8] = nama + ": Oh. Semoge dudu Covid ya, Bu.";
        txt2[11] = nama + ": (Waduh, enyong kudu jege jarak kiye)";
        txt2[12] = nama + ": (Wah, enyong kudu cepetan ngeterna panganane Mbah kakung)";
        txt2[14] = nama + ": Ngapurane, enyong ora berobat. Matur suwun.";
        txt2[17] = nama + ": Ora Pak. Matur suwun.";
        txt2[18] = nama + ": (Bapak kiye ora atik masker. Enyong ora side tuku buah nang kene.)";
        txt2[21] = nama + ": Ngapurane, ora ndisit, Bu.";
        txt2[23] = nama + ": Oh, ora luruh apa-apa, Bu.";
        txt2[24] = nama + ": Permisi, dalan maring menara lewate endi, ya?";
        txt2[27] = "Mbah kakung: Halo, " +nama+ "Se emute Mbah kakung, ibune kowen nitipna sangune kanggo Mbah kakung.";
        txt2[28] = nama + ": Iye, Mbah!";
        txt2[29] = nama + ": Kiye sangune sing ibu kanggo Mbah kakung.";
        txt2[32] = nama + ": Bise rah, Mbah.";
        txt2[36] = nama + ": Ana tomat, Bu?";
        txt2[38] = nama + ": Ye wis, Bu. Sebungkus kiye regene pire?";
        txt2[40] = nama + ": Iye, kiye duite, Bu.";
        txt2[43] = nama + ": Sabun encere ana, Bu?";
        txt2[45] = nama + ": Oke, kiye duite.";
        txt2[48] = "Tetangga: Wah, kowe wis gede, yo. " + nama;
        txt2[49] = "Mbah putri: Halo, " + nama +". Apa ana titipan sing Mbah kakung kowen?";
        txt2[50] = nama + ": Enyong maring tempate Mbah kakung ndisit ya, Mbah putri.";
        txt2[52] = nama + ": Kiye sabun kambe tomate sing pasar titipane Mbah kakung.";
        txt2[53] = "Mbah putri: Matur suwun. " +nama + ". Tulung dikumbah ndisit, ya.";
        txt2[55] = nama + ": Wis enyong kumbah ya, Mbah putri.";
        txt2[57] = nama + ": Iye, Mbah.";
        txt2[60] = nama + ": (Enyong nganggo cairan pembersih ndisit ya).";
        // txt3
        txt3[9] = nama + ": Kie, Pak.";
        txt3[15] = nama + ": (Wah, ibu kie ora atik masker. Enyong ora side tuku karo kae lah).";
        txt3[16] = nama + ": Ora, Bu.";
        txt3[22] = nama + ": Tulung takon, kiye tempat apa? Bisene dijege?";
        txt3[41] = nama + ": Enyong kesasar, Pak.";
        txt3[44] = "Sedulur: Hei! " + nama + " suwe ora ketemu!";
        txt3[45] = nama + ": Iye, suwe ora ketemu. Daning kowen nang njaba ora nganggo masker?";
        txt3[48] = nama + ": Iye, sedurunge maring terminal bis enyong rapid ndisit. Dadi ketinggelen bis pertama.";
        txt3[50] = nama + ": Eje anggep remeh! Saya suwe saya akeh sih ketularan ngerti!";
        txt3[51] = nama + ": Angger kowen ora gelem nganggo masker, enyong bae lah sing tuku pangan. Mengko enyong balik maning.";
        txt3[52] = nama + ": (Hmmm, mengko enyong tuku masker nggo kae).";
        txt3[55] = nama + ": (Hmmm, barang sing pengin tak tuku langka nang kene).";
        txt3[62] = nama + ": Pire regene sekilo iwak, Bu?";
        txt3[64] = nama + ": Ye wis, tuku sekilo ya, Bu. Kiye duite.";
        txt3[68] = nama + ": (Wah, bapak kae ora nganggo masker. Enyong ora side tuku karo kae lah).";
        txt3[69] = nama + ": Ora, Pak.";
        txt3[84] = nama + ": Telung bungkus roti kiye pire, Pak?";
        txt3[86] = nama + ": Ye wis, kiye duite, Pak.";
        txt3[91] = nama + ": Masker papat pire regane, Bu?";
        txt3[93] = nama + ": Ye wis, enyong tuku papat maskere, Bu. Kiye duite.";
        txt3[96] = nama + ": Ana apa kiye?";
        txt3[98] = nama + ": Wah, enyong miki nembe ketemu kae.";
	}
    else if (osing === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Kesuwun!";
        txt1[12] = nama + ": Oh, isun deleng riko neng alas.";
        txt1[14] =  nama + ":  Mesti .";
        txt1[15] = nama + ": Iki masker teko adon isun. Enggonen sulung!";
        txt1[18] = nama + ": Nong endi, Mak?";
        txt1[21] = nama + ": Arep tuku sabun wesuh tangan.";
        txt1[24] = nama + ": Ono sabun wesuh tangan?";
        txt1[30] = nama + ": Iki sabune, Mak.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Enggeh, Mak.";
        txt2[3] = nama + ": Enggeh, Mak.";
        txt2[6] = nama + ": Mak, yugone apuo?";
        txt2[8] = nama + ": Oh. Mugo-mugo dudu Covid yo, Mak.";
        txt2[11] = nama + ": (Waduh, isun kudu jogo jarak iki)";
        txt2[12] = nama + ": (Wah, isun  kesusu ngeterakaken panganane Anang)";
        txt2[14] = nama + ": Sepurone, isun using berobat. kesuwun.";
        txt2[17] = nama + ": Using Pak. Kesuwun.";
        txt2[18] = nama + ": (Bapak iki sing nganggo masker. Isun sing  tuku woh - wohan  ring kene.)";
        txt2[21] = nama + ": sepurone, mboten sulung, Mak.";
        txt2[23] = nama + ": Oh, Using goleet paran-parang, Mak.";
        txt2[24] = nama + ": Amit, dalan arep nang menoro liwat ning ndi, yo?";
        txt2[27] = "Anang:  Halo, "+nama+ " Anang enget, emak riko titip sangu kanggo anang.";
        txt2[28] = nama + ": Enggeh, Nang!";
        txt2[29] = nama + ": Iki sangune teko Emak enggo Anang.";
        txt2[32] = nama + ": Enggeh, Nang.";
        txt2[36] = nama + ": Onok tomat, Mak?";
        txt2[38] = nama + ": Enggeh, Mak. Sak bungkuse piro regane?";
        txt2[40] = nama + ": Enggeh, niki picise, Mak.";
        txt2[43] = nama + ": Sabun encer enten, Mak?";
        txt2[45] = nama + ": Enggeh, niki picise.";
        txt2[48] = nama + ": Enggeh, niki picise.";
        txt2[49] = "Adon: Hei, "+ nama +". Ono titipan teko anang riko ?";
        txt2[50] = nama + ": Isun ning panggone anang sulung, Don.";
        txt2[52] = nama + ": Iki sabun lan tomat teko pasar  titipane Anang .";
        txt2[53] = nama + ": Iki sabun lan tomat teko pasar  titipane Anang .";
        txt2[55] = nama + ": Sampun kulo kumbyah, Don.";
        txt2[57] = nama + ": Nggeh, Nang.";
        txt2[60] = nama + ": (Isun ngenggo cairan pembersih sulung).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Niki, Pak.";
        txt3[15] = nama + ": (Wah, Emak iki sing nganggo masker. Isung wurung blonjo ambi Ndiko).";
        txt3[16] = nama + ": Using, mak.";
        txt3[22] = nama + ": Arep takon, iki papan paran? Apuo dijogo?";
        txt3[41] = nama + ": Isun kesasar, Pak.";
        txt3[44] = nama + ": Isun kesasar, Pak.";
        txt3[45] = nama + ": Yo, suwi hing kecaruk. Kok riko ning luar kuto osing nganggo masker?";
        txt3[48] = nama + ": Iyo, sakdurunge menyang terminal bis isun rapid sulung. Dadi mau ketingalan bus pertama.";
        txt3[50] = nama + ": Ojok anggep remeh! Tambah dino tambah akeh hang kerularan!";
        txt3[51] = nama + ": Kadung riko osing gelem nganggo masker, myakne isun hang tuku panganan. Engko isun balek maneng.";
        txt3[52] = nama + ": (Hmmm, engko isun tuku masker enggo riko).";
        txt3[55] = nama + ": (Hmmm, barang hang kepingin isun tuku using ono ning kene).";
        txt3[62] = nama + ": Piro regone sekilo iwak, Mak?";
        txt3[64] = nama + ": Iyo, tuku sekilo yo, Mak. Iki picise";
        txt3[68] = nama + ": (Wah, bapak iku using nganggo masker. Isung wurung belonjo nang kono).";
        txt3[69] = nama + ": Osing, Pak.";
        txt3[84] = nama + ": Telung bungkus roti iki piro, Pak?";
        txt3[86] = nama + ": Iyo, iki picise, Pak";
        txt3[91] = nama + ": Piro regane papat masker, Mak?";
        txt3[93] = nama + ": Iyo wes, isun tuku  masker papat iki. Iki picise.";
        txt3[96] = nama + ": Ono paran iki?";
        txt3[98] = nama + ": Wah, isun buru ketemu lare iku mau.";
    }
    else if (madura === true){ 
        // text1
        txt1[9] = nama + ": Keso'on!" ; 
		txt1[12] = nama + ": Bâh, engko' ngatèla' bâdâh neng alas.";
		txt1[14] = nama + ": Èngghi.";
		txt1[15] = nama + ": Rèya masker dâri nyainnah. Angghuy nghelluh!";
		txt1[18] = nama + ": Neng dimmah, Ma'?";
		txt1[21] = nama + ": Mellèyah sabon.";
		txt1[24] = nama + ": Bâdâ sabon?";
		txt1[30] = nama + ": Nèka sabonnah, Ma'.";
        // txt2 
        txt2[1] = nama + ": Èngghi , Ma'.";
        txt2[3] = "Tetangghâh: Hèh, " + nama + " Ding-ngiding Bè' Joko kennèng Covid.";
        txt2[6] = nama + ": Bè', ana'en arapa?";
        txt2[8] = nama + ": O. Maddher bânnè Covid yâh, Bè'.";
        txt2[11] = nama + ": (Abbâ, engko' kodhujhâ’ ma'-semma' ka orèng rèya)";
        txt2[12] = nama + ": (Bâ, engko' kabhuru ngaterraghinah nasè'en Jai).";
        txt2[14] = nama + ": Saporanah, engko' ta' asontèkkah. Keso'on.";
        txt2[17] = nama + ": Enten Pak. Keso'on.";
        txt2[18] = nama + ": (Bapak rèya ta' ngangghuy masker. Engko' ta' dhâddhih mellèyah buwâ dinna'.)";
        txt2[21] = nama + ": Saporanah, enten, Bè'.";
        txt2[23] = nama + ": Oh, ora luruh apa-apa, Bu.";
        txt2[24] = nama + ": Parmisi, jhâlân ka menara lèbât ka'emmah, ghi?";
        txt2[27] = "Jai: Hèh, " +nama+ " Nga'-ènga'en, emma'en metoro' nasè' ka Jai.";
        txt2[28] = nama + ":Èngghi, Jai!";
        txt2[29] = nama + ":  Nèka nasè'en Jai dâri Emma' .";
        txt2[32] = nama + ": Èngghi, Jai.";
        txt2[36] = nama + ": Bâdâ tomat, Bè'?";
        txt2[38] = nama + ": Èngghi, Bè'. Regghânah bârâmpa sabungkos?";
        txt2[40] = nama + ":Èngghi , Nèka pèssènah, Bè'.";
        txt2[43] = nama + ": Bâdâ sabon caèr, Be'?";
        txt2[45] = nama + ": Èngghi, Nèka pèssènnah.";
        txt2[48] = "Tetanggheh: O, kakè la rajâ, yâh. " + nama;
        txt2[49] = "Nyai: Hèh, " + nama +". Bâdâ tètèpan dâri jaimu?";
        txt2[50] = nama + ": Engko' entarrah ka kenengnah jai ghâllu, Nyi.";
        txt2[52] = nama + ": Nèka sabon bân tomat tètèpan Jainnah dâri pasar.";
        txt2[53] = "Nyai: Keso'on. " +nama + ". Becco ghâllu, yâh";
        txt2[55] = nama + ": Marèh èbecco lah, Nyai.";
        txt2[57] = nama + ":Èngghi, Jai.";
        txt2[60] = nama + ": (engko' ngangghui caèran kangghuy mersè'èn tanang ghâllu).";
        // txt3
        txt3[9] = nama + ": Rèya , Pak.";
        txt3[15] = nama + ": (Bâh, bèbè' rèya mi' ta' ngangghuy masker. Engko' ta' dhâddhih abâlânjhâ la).";
        txt3[16] = nama + ": Enten, Bè'.";
        txt3[22] = nama + ": Nya'-tanya'ah, Rèya kenengan apa? Arapah mi' èjâgâ?";
        txt3[41] = nama + ": Engko' kesasar, Pak.";
        txt3[44] = "Trètan: Hèh! " + nama + " mè’ abit ta' katemmon!";
        txt3[45] = nama + ": Yâh, Abit ta' ketemun. Kakè kaluwar mi' ta' ngangghuy masker?";
        txt3[48] = nama + ": Yâh, sebelummah ka terminal ebbès, engko' arapittah ghâllu. Ghuru'en ebbèssah jhâlân kadâ. Dhâddhih, engko' cèccèr";
        txt3[50] = nama + ": Jhâ' anggheb rèmè! Sabbhennarèh tamba bânynya’ sè èperrè !";
        txt3[51] = nama + ": Mon kakè ta' endâ’ ngangghuy masker, lè engko' bhâih sè mellè'aghinah kakanan. Dâgghi' engko' abâliyâh polè.";
        txt3[52] = nama + ": (Hmmm, engko' dâgghi' sè mellè'aghinah masker).";
        txt3[55] = nama + ": (Hmmm, bhârâng sè èbâlliyâh engko' tadâ' dinna').";
        txt3[62] = nama + ":  Bârâmpa regghânah jhuko'en sakilo, Bè'?";
        txt3[64] = nama + ": Èngghi , Mellèyah sakilo, Bè'. Nèka pèssènnah.";
        txt3[68] = nama + ": (Bâ, bapak rowa ta' ngangghuy masker. Engko' ta' bâlânjhâ'eh ka jârèya lah).";
        txt3[69] = nama + ":Enten, Pak.";
        txt3[84] = nama + ": Tello bhungkos roti rèya bârâmpa, Pak?";
        txt3[86] = nama + ": Èngghi, Nèka pèssènnah, Pak.";
        txt3[91] = nama + ":Empa' masker bârâmpa regghânah, Bè'?";
        txt3[93] = nama + ": Èngghi, Engko' mellèyah empa', Bè'. Nèka pèssènnah.";
        txt3[96] = nama + ": Bâdâ napah rèya?";
        txt3[98] = nama + ": Bâ, engko' ghuruwen ketemon bi' jârèya.";
	}
    else if (bali === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Matur suksma!";
        txt1[12] = nama + ": Oh, panggihin titiang ring alase.";
        txt1[14] =  nama + ": Ngih Prasida.";
        txt1[15] = nama + ": Niki masker saking nini awae. Anggen dumun!";
        txt1[18] = nama + ": Ring dija, Me?";
        txt1[21] = nama + ": Jagi numbas sabun cuci tangan.";
        txt1[24] = nama + ": Wenten sabun cuci tangan?";
        txt1[30] = nama + ": Niki sanbune, Me.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Inggih, Me.";
        txt2[3] = nama + ": Inggih, Me.";
        txt2[6] = nama + ": Bu, pianakne kenapi?";
        txt2[8] = nama + ": Oh. Dumogi nenten Covid ngih, Bu.";
        txt2[11] = nama + ": (Badah, tiang harus nyaga jarak)";
        txt2[12] = nama + ": (Wah, tiang enggal-enggal niki makta ajengane pekak)";
        txt2[14] = nama + ": Sinampura, titiang nenten maubad. Suksma.";
        txt2[17] = nama + ": Nenten Pak. Suksma.";
        txt2[18] = nama + ": ((Bapak niki wenten masker. Titiang nenten numbas wohwohan driki.)";
        txt2[21] = nama + ": Sinampura, nenten, Bu.";
        txt2[23] = nama + ": Oh, nenten ngerereh napi, Bu.";
        txt2[24] = nama + ": Nawegan, margi ke menara kija nika, ngih?";
        txt2[27] = " Pekak: Halo, "+nama+" Ingetan Pekak, memen ceninge mapetan bekel banga pekak.";
        txt2[28] = nama + ": Ngih, Kak!";
        txt2[29] = nama + ": Niki bekel uli meme banga Pekak.";
        txt2[32] = nama + ": Ngih, Pekak.";
        txt2[36] = nama + ": Wenten tomat, Bu?";
        txt2[38] = nama + ": Ngih, Bu. abungkus aji kuda pangargane?";
        txt2[40] = nama + ": Ngih, niki jinahne, Bu.";
        txt2[43] = nama + ": Sabun cair wenten, Bu?";
        txt2[45] = nama + ": Ngih, niki jinahne.";
        txt2[48] = nama + ": Ngih, niki jinahne.";
        txt2[49] = "Nini: Halo, "+nama+". Wenten titipan saking pekak?";
        txt2[50] = nama + ": Titiang ketongosne pekak dumun, Ni.";
        txt2[52] = nama + ": Niki sabun lan tomat saking pasar sane kapapetan Pekak.";
        txt2[53] = nama + ": Niki sabun lan tomat saking pasar sane kapapetan Pekak.";
        txt2[55] = nama + ": Sampun tiang umbah, Ni.";
        txt2[57] = nama + ": Ngih, Pekak.";
        txt2[60] = nama + ": (Titiang ngangen cairan pembersih dumun).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Niki, Pak.";
        txt3[15] = nama + ": (Wah, ibu niki nenten nganggen masker. Titiang nenten matumbasan drika).";
        txt3[16] = nama + ": Nenten, Bu.";
        txt3[22] = nama + ": Nunas takenin, niki genah napi? Dados jagae?";
        txt3[41] = nama + ": Titiang paling, Pak.";
        txt3[44] = nama + ": Titiang paling, Pak.";
        txt3[45] = nama + ": Ngih, sue ten kecunduk. Dados awae disisi nenten nganggen masker?";
        txt3[48] = nama + ": Ngih, sedereng ke terminal bis tiang rapid dumun. Dadosne kalahina sareng bus kapertama.";
        txt3[50] = nama + ": Sampunan campah! Nyabran rahina akeh sane keni tularina!";
        txt3[51] = nama + ": Yening awake nenten ngangge masker , banggiang tiang kemanten sane numbas ajengan. Malih jebos tiang mawali mriki.";
        txt3[52] = nama + ": (Hmmm, malih jebos tiang numbas masker majeng makasami).";
        txt3[55] = nama + ": (Hmmm, barang sane meled titiang tumbas nenten wenten driki).";
        txt3[62] = nama + ": ajikuda akilo jair, Bu?";
        txt3[64] = nama + ": ngih, numbas akilo , Bu. Niki jinahne.";
        txt3[68] = nama + ": (Wah, bapak nika nenten ngangge masker. Tiang nenten matumbasan drika).";
        txt3[69] = nama + ": Nenten, Pak.";
        txt3[84] = nama + ": Tigang bungkus roti niki aji kuda, Pak?";
        txt3[86] = nama + ": Ngih, niki jinahnyane, Pak.";
        txt3[91] = nama + ": Aji kuda pengarga papat masker, Bu?";
        txt3[93] = nama + ": Ngih, tiang numbas papat masker, Bu. Niki jinah nyane.";
        txt3[96] = nama + ": Wenten napi niki?";
        txt3[98] = nama + ": Wah, saya baru ketemu dia tadi.";
 

    }
    // kalSul
    else if (ngaju === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Tarima kasih!";
        txt1[12] = nama + ": Oh, iyoh aku nampayah iye melai himba.";
        txt1[14] = nama + ": Tau bewei.";
        txt1[15] = nama + ": Tuh masker bara tambim muh. Hapan helu!";
        txt1[18] = nama + ": Hong kueh, Mai?";
        txt1[21] = nama + ": Handak mili sabun akan menyau lenge.";
        txt1[24] = nama + ": Tege sabun akan menyau lenge lah?";
        txt1[30] = nama + ": Tuh sabun ah, Mai.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Yoh, Mai.";
        txt2[3] = nama + ": Yoh, Mai.";
        txt2[6] = nama + ": Mina, mbuhen anak ah?";
        txt2[8] = nama + ": Oh. Samoga beken Covid lah, Na.";
        txt2[11] = nama + ": (Waduh, aku harus mejaga jarak tuh)";
        txt2[12] = nama + ": (Wah, aku harus capat-capat ih magah panginan Bue)";
        txt2[14] = nama + ": Maaf, aku dia berobat. Tarima kasih.";
        txt2[17] = nama + ": Jatun Ma. Tarima kasih.";
        txt2[18] = nama + ": (Mama jituh dia mehapan masker. Aku dia handak mili bua melai hetuh.)";
        txt2[21] = nama + ": Maaf, dia helu, Na.";
        txt2[23] = nama + ": Oh, jatun ih, mina.";
        txt2[24] = nama + ": Permisi, jalan akan guang menara nahalau kueh, lah?";
        txt2[27] = "Bue: Halo, "+nama+" Seingat bue, indum mu menitipkan bahata akan Bue.";
        txt2[28] = nama + ": Iyoh, Bue!";
        txt2[29] = nama + ": Tuh bahata akan bue bara umai.";
        txt2[32] = nama + ": Tau ih, Bue.";
        txt2[36] = nama + ": Tege tomat, Na?";
        txt2[38] = nama + ": Yoh, Na. Ije bungkus tuh pire rega?";
        txt2[40] = nama + ": Baik, ini uangnya, Na.";
        txt2[43] = nama + ": Sabun cair tegelah, Na?";
        txt2[45] = nama + ": Oke, tuh duit ah.";
        txt2[48] = nama + ": Oke, tuh duit ah.";
        txt2[49] = "Tambi: Halo, "+ nama +". Tege titipan kah bara buemmu?";
        txt2[50] = nama + ": Aku guang eka Bue helu, Mbi.";
        txt2[52] = nama + ": Tuh sabun dengan tomat bara pasar titipan Bue.";
        txt2[53] = nama + ": Tuh sabun dengan tomat bara pasar titipan Bue.";
        txt2[55] = nama + ": Jadi kumenyau ah, Mbi.";
        txt2[57] = nama + ": Yoh, Bue.";
        txt2[60] = nama + ": (Aku mehapan cairan pembersih helu).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Tuh, Ma.";
        txt3[15] = nama + ": (Wah, Mina jituh dia mehapan masker. Aku dia belanja denga gin).";
        txt3[16] = nama + ": Dia, Na.";
        txt3[22] = nama + ": Maaf handak misek, tuh eka narai? Mbuhen kana jaga?";
        txt3[41] = nama + ": Aku sala jalan, Ma.";
        txt3[44] = nama + ": Aku sala jalan, Ma.";
        txt3[45] = nama + ": Yoh, tahi dia supa. Mbuhen ikau melai luar dia hapan masker?";
        txt3[48] = nama + ": Iyoh, sebelum guang terminal bis aku rapid helu. Jadi endau balihi bus je sulak.";
        txt3[50] = nama + ": Ela anggap remeh! Tiap andau semakin are je jangkit katawam!";
        txt3[51] = nama + ": Amun ikau dia handak mehapan masker, kareh aku ih je m,ili panginan. Kareh aku mules hindai.";
        txt3[52] = nama + ": (Hmmm, kareh aku mili masker akan ewen).";
        txt3[55] = nama + ": (Hmmm, ramu je handak mili kuh jatun hetuh).";
        txt3[62] = nama + ": Pire regan sekilo laok, Na?";
        txt3[64] = nama + ": Yoh, mili sekilo lah, Na. Tuh duit ah.";
        txt3[68] = nama + ": (Wah, mama jite dia mehapan masker. Aku dia belanja denga gin).";
        txt3[69] = nama + ": Dia, Ma.";
        txt3[84] = nama + ": Telu kabungkus roti tuh pire, Ma?";
        txt3[86] = nama + ": Yoh, tuh duit ah, Ma.";
        txt3[91] = nama + ": Pire regan masker, Na?";
        txt3[93] = nama + ": Yoh, aku mili epat masker, Na. Tuh duit ah.";
        txt3[96] = nama + ": Mbuhen tuh?";
        txt3[98] = nama + ": Wah, aku harun supa iye endau.";

    }
    else if (kanayan === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Tarima kasih!";
        txt1[12] = nama + ": Oh, aku nelenya ka abut-abut.";
        txt1[14] = nama + ": Aok pane.";
        txt1[15] = nama + ": Nian masker dari eneknyu. Pake dolo!";
        txt1[18] = nama + ": Kamae, Wek?";
        txt1[21] = nama + ": Malia sabon panyasah kokot.";
        txt1[24] = nama + ": Ada sabon panyasah kokot?";
        txt1[30] = nama + ": Nian sabonya, Wek.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Baik, Bu.";
        txt2[3] = nama + ": Baik, Bu.";
        txt2[6] = nama + ": Bu, diahe anaknyu?";
        txt2[8] = nama + ": Oh. Samoga buke Covid boh, Bu.";
        txt2[11] = nama + ": (Wadoh, aku harus jaga jarak nian)";
        txt2[12] = nama + ": (Wah, aku harus bijak-bijak ngantat pamakanan Ene)";
        txt2[14] = nama + ": Maaf, aku nanak barobat. Tarima kasih.";
        txt2[17] = nama + ": Nanak Pak. Tarima kasih.";
        txt2[18] = nama + ": (Bapak nian nanak make  masker. Aku nanak malia buat kakean)";
        txt2[21] = nama + ": Maaf, nanak dolok, Bu.";
        txt2[23] = nama + ": Oh, nanak ngago ahe-ahe, Bu.";
        txt2[24] = nama + ": Permisi, maraga ka menara lewat kamae, auk?";
        txt2[27] = "KakekEne: Halo, " +nama+ " saingat enk, uweknyu nitipan bekal  untuk Ene.";
        txt2[28] = nama + ": Aok, Ne!";
        txt2[29] = nama + ": nian bekal dari Uwek untuk Ene.";
        txt2[32] = nama + ": Aok pasti, Ne.";
        txt2[36] = nama + ": Ada tomat gek, Bu?";
        txt2[38] = nama + ": Aok, Bu. Sabungkus nian sangahe raganya?";
        txt2[40] = nama + ": Baik, nian duitnya, Bu.";
        txt2[43] = nama + ": Sabon cair ada gek, Bu?";
        txt2[45] = nama + ": Oke, nian duitnya.";
        txt2[48] = nama + ": Oke, nian duitnya.";
        txt2[49] = "Ene: Halo, " + nama +". Ada gek titipan dari enenyu?";
        txt2[50] = nama + ": Aku maok ka tampat Ene dolo, Nek.";
        txt2[52] = nama + ": Nian sabon man tomat dari pasar titipan Ene.";
        txt2[53] = nama + ": Nian sabon man tomat dari pasar titipan Ene.";
        txt2[55] = nama + ": Udah kunyasah, Nek.";
        txt2[57] = nama + ": Aok, Ne.";
        txt2[60] = nama + ": (Aku make cairan pembersih dolo).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Nian, Pak.";
        txt3[15] = nama + ": (Wah, ibu nian nanak make masker. Aku nanak balanja ka ia lah).";
        txt3[16] = nama + ": Nanak, Bu.";
        txt3[22] = nama + ": Mohon batanya, nian tampat ahe? ngahe dijaga?";
        txt3[41] = nama + ": Aku sasat, Pak.";
        txt3[44] = nama + ": Aku sasat, Pak.";
        txt3[45] = nama + ": Aok, lama nanak batamu. Kok kao kaluar nanak make masker?";
        txt3[48] = nama + ": Aok, sanape aku ka terminal, aku rapid dolo. Jadi tadi katinggalan bus pertama.";
        txt3[50] = nama + ": Ame anggap remeh! Samakin ari samakin manyak nang tatular nuan!";
        txt3[51] = nama + ": Kade kao bai make masker, biar aku maan nang mali pamakanan. Nae aku mulank agi.";
        txt3[52] = nama + ": (Hmmm, nae aku mali masker untuk mereka).";
        txt3[55] = nama + ": (Hmmm, barang nang ingin kubali nanak ada kakean).";
        txt3[62] = nama + ": Sangahe raga sakilo ikan, Bu?";
        txt3[64] = nama + ": Aoklah, mali sakilo boh, Bu. Nian duitnya.";
        txt3[68] = nama + ": (Wah, Bapak koa nanak make masker. Aku nanak balanjaa ka ia dah).";
        txt3[69] = nama + ": Nanak, Pak.";
        txt3[84] = nama + ": Talu bungkus roti nian sangahe, Pak?";
        txt3[86] = nama + ": Aoklah, nian duitnya, Pak.";
        txt3[91] = nama + ": Berapa harga empat masker, Bu?";
        txt3[93] = nama + ": Aoklah, aku mali ampat masker, Bu. Nian duitnya.";
        txt3[96] = nama + ": Ada ahe nian?";
        txt3[98] = nama + ": Ade ah, aku baru batamu ia tadi.";

    }
    else if (maanyan === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Terime Kasis!";
        txt1[12] = nama + ": Oh, naan aku kadinung hang wuang jumpun.";
        txt1[14] = nama + ": Tau tu'u.";
        txt1[15] = nama + ": Ina masker tika itaknu. napakai dulu!";
        txt1[18] = nama + ": Hang awe, Ineh?";
        txt1[21] = nama + ": Aku hamen midi sabun cuci tangan.";
        txt1[24] = nama + ": Naan sabun cuci tangan?";
        txt1[30] = nama + ": Iri sabun ni, Ineh.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Baik, Ineh.";
        txt2[3] = nama + ": Baik, Ineh.";
        txt2[6] = nama + ": Bu, dainun anaknu?";
        txt2[8] = nama + ": Oh. Gere lain Covid lah, Bu.";
        txt2[11] = nama + ": (Nah Nah, aku harus jaga jarak ina)";
        txt2[12] = nama + ": (Wah, aku harus hinang ngatet luen Kakah)";
        txt2[14] = nama + ": Maaf, aku puang baobat. Terime kasis.";
        txt2[17] = nama + ": Puang Pak. Terime kasis.";
        txt2[18] = nama + ": (Bapak ina puang makai masker. Aku pahakun midi wua hang ina.)";
        txt2[21] = nama + ": Maaf, puang dulu, Bu.";
        txt2[23] = nama + ": Oh, puang ngantara inun inun, Bu.";
        txt2[24] = nama + ": Permisi, lalan ma menara mitah awe sah?";
        txt2[27] = " Kakah: Halo, " +nama+ " itung kakah, inehmu nitip bekal makai Kakah.";
        txt2[28] = nama + ": Hyai, Kah!";
        txt2[29] = nama + ": Ina bekal tika Ineh makai Kakah.";
        txt2[32] = nama + ": Tau tu'u, Kah.";
        txt2[36] = nama + ": Naan tomat, Bu?";
        txt2[38] = nama + ": Baik, Bu. Sebungkus ina pire harga ni?";
        txt2[40] = nama + ": Baik, ini duit ni, Bu.";
        txt2[43] = nama + ": Sabun cair naan, Bu?";
        txt2[45] = nama + ": Oke, ina duit ni.";
        txt2[48] = nama + ": Oke, ina duit ni.";
        txt2[49] = " Itak: Halo, " + nama +". Naan titipan tika Kakahmu sah?";
        txt2[50] = nama + ": Aku ma uneng Kakah dulu, tak.";
        txt2[52] = nama + ": Ina sabun baya tomat tika pasar titipan Kakah.";
        txt2[53] = nama + ": Ina sabun baya tomat tika pasar titipan Kakah.";
        txt2[55] = nama + ": Haut wui ku tak.";
        txt2[57] = nama + ": Hyai, Kah.";
        txt2[60] = nama + ": (Aku makai cairan pembersih dulu).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Ina, Pak.";
        txt3[15] = nama + ": (Wah, ibu ina ngaan makai masker. Aku puang belanja baya hanye gin).";
        txt3[16] = nama + ": Puang, Bu.";
        txt3[22] = nama + ": Ijin nunti, ina unengan inun? Dainun na jaga?";
        txt3[41] = nama + ": Aku tawang, Pak.";
        txt3[44] = nama + ": Aku tawang, Pak.";
        txt3[45] = nama + ": Hyai, lawah ngaan panalu. Inun hanyu hg luar ngaan makai masker?";
        txt3[48] = nama + ": Hyai, sehuan ma terminal bis aku rapid dulu. Jari nien patanan bus pertama.";
        txt3[50] = nama + ": Ada na anggap remeh! makin andrau makin rama sa tatular tunu!";
        txt3[51] = nama + ": Amun hanyu puang hakun makai masker elah aku leh sa midi luen. Die aku mulek lagi.";
        txt3[52] = nama + ": (Hmmm, die aku midi masker makai here).";
        txt3[55] = nama + ": (Hmmm, barang sa hamen na widi ku mahi hang ina).";
        txt3[62] = nama + ": Pire haraga sakilo ikan, Bu?";
        txt3[64] = nama + ": Baik, midi sakilo ya, Bu. Ina duit ni.";
        txt3[68] = nama + ": (Wah, bapak iru puang makai masker. Aku puang belanja baya hanye gin).";
        txt3[69] = nama + ": Puang, Pak.";
        txt3[84] = nama + ": Telu bungkus roti ina pire, Pak?";
        txt3[86] = nama + ": Baik, ina duitni, Pak.";
        txt3[91] = nama + ": Pire haraga epat masker, Bu?";
        txt3[93] = nama + ": Baik, aku midi epat masker, Bu. Ina duit ni.";
        txt3[96] = nama + ": Dainun ina?";
        txt3[98] = nama + ": Wah, aku wau panalu hanye nien.";
    }
    else if (lebang === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Terimo kasieh!";
        txt1[12] = nama + ": Oh auk, aku ngilau hidok de utan.";
        txt1[14] = nama + ": Bihik jek.";
        txt1[15] = nama + ": Ituk masker ari Inik kitok. Pakai meh dulu!";
        txt1[18] = nama + ": De mene, Nai?";
        txt1[21] = nama + ": Nak meli habon bahuak jari.";
        txt1[24] = nama + ": Bihik habon bahuak jari?";
        txt1[30] = nama + ": Ituk habonnya, Nai.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Auk, Nai.";
        txt2[3] = nama + ": Auk, Nai.";
        txt2[6] = nama + ": Buk, anak ibu ngapai?";
        txt2[8] = nama + ": Oh. Semoga meh bukan Covid tuk, Bu.";
        txt2[11] = nama + ": (Waduh, aku arun nyejo jarak tuk)";
        txt2[12] = nama + ": (Wah, aku arun buru-buru nganyor hemekan Akik)";
        txt2[14] = nama + ": Maaf, aku no berobat. Terimo kasieh.";
        txt2[17] = nama + ": Nohik Pak. Terimo kasieh.";
        txt2[18] = nama + ": (Bapak ituk no makai masker. Aku engai meli buah di tuk.)";
        txt2[21] = nama + ": Maaf, no dulu, Bu.";
        txt2[23] = nama + ": Oh, nohik ngegok apai-apai, Bu.";
        txt2[24] = nama + ": Permisi, jalan ke menara lewat mene, ya?";
        txt2[27] = "Akik: Halo, " +nama+ " Seingat Akik, Inai menitipkan bekal untuk Akik.";
        txt2[28] = nama + ": Aok, Kik!";
        txt2[29] = nama + ": Ituk bekal ari Inai untuk Akik.";
        txt2[32] = nama + ": Tentu saja, Kik.";
        txt2[36] = nama + ": Bihik tomat, Bu?";
        txt2[38] = nama + ": Aok, Mak. Sebungkus ini berapa harganya?";
        txt2[40] = nama + ": Aok, ituk uangnya, Bu.";
        txt2[43] = nama + ": habun cair ada, Bu?";
        txt2[45] = nama + ": Oke, ituk uangnya.";
        txt2[48] = nama + ": Oke, ituk uangnya.";
        txt2[49] = "Inik: Halo, " + nama +". Apai bihik titipan ari Akik?";
        txt2[50] = nama + ": Aku ke tempat Akik dulu, Nik.";
        txt2[52] = nama + ": Ini habon dan tomat dari pasar titipan Akik.";
        txt2[53] = nama + ": Ini habon dan tomat dari pasar titipan Akik.";
        txt2[55] = nama + ": Udah aku bahuak, Nik.";
        txt2[57] = nama + ": Aok, Kik.";
        txt2[60] = nama + ": (Aku pakai cairan pembersih dulu).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Ituk, Pak.";
        txt3[15] = nama + ": (Wah, umak ituk no makai masker. Aku no belenyo agik dengan huai).";
        txt3[16] = nama + ": Eno, Bu.";
        txt3[22] = nama + ": Nak betenyok, ituk awak apai? Ngapai dijego?";
        txt3[41] = nama + ": Aku tesesat, Pak.";
        txt3[44] = nama + ": Aku tesesat, Pak.";
        txt3[45] = nama + ": Auk, lamat no bekemeto. Ngapai kitok di luar no makai masker?";
        txt3[48] = nama + ": Auk, sebelum ke terminal bis aku rapid dulu. Jadi tadi ketinggalan bus pertama.";
        txt3[50] = nama + ": Nang no ningo iyok! Semakin ari semakin banyak neng tekenok ketau no!";
        txt3[51] = nama + ": Atik Kitok no nak nguno masker, biar aku geno neng meli makan. Nanok aku kituk agik.";
        txt3[52] = nama + ": (Hmmm, nanok aku meli masker baya hidok).";
        txt3[55] = nama + ": (Hmmm, barang neng nak aku meli nohik dituk).";
        txt3[62] = nama + ": Berapai rego hekilo ikan, Mak?";
        txt3[64] = nama + ": Auk, meli hekilo pe, Mak. Ituk duet e ba.";
        txt3[68] = nama + ": (Wai, apak ituk no makai masker. Aku no nak belanyo agik dengan iyo).";
        txt3[69] = nama + ": Eno, Pak.";
        txt3[84] = nama + ": Tigo bungkun roti ituk berapai, Pak?";
        txt3[86] = nama + ": Auk, ituk duet e, Pak.";
        txt3[91] = nama + ": Berapai rego empat masker, Bu?";
        txt3[93] = nama + ": Auk, aku meli empat masker, Bu. Ituk duet e.";
        txt3[96] = nama + ": Ada apai ituk?";
        txt3[98] = nama + ": Wah, aku aruk ketemu Hidok tadi.";

    }
    else if (bugis === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Terima kasih!" ;
        txt1[12] = nama + ": Oiyye witai engkai di ale'e.";
        txt1[14] = nama + ": Iyye bah.";
        txt1[15] = nama + ": Engkae masker pole rinenemu. Pake jolo!";
        txt1[18] = nama + ": Kotegai, Ma?";
        txt1[21] = nama + ": Loka melli sabung pabbissa jari.";
        txt1[24] = nama + ": Engka sabutta?";
        txt1[30] = nama + ": Engkanie sabutta ma.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Iyye, Ma.";
        txt2[3] = nama + ": Iyye, Ma.";
        txt2[6] = nama + ": Bu, magai anakta?";
        txt2[8] = nama + ": Oh. Tennapodo tennia to korona, Bu.";
        txt2[11] = nama + ": (Wah, haruska jaga jara yede)";
        txt2[12] = nama + ": (Wah, haruska lokka gatti tiwirang nanre latokku)";
        txt2[14] = nama + ": Iyye, terimakasih deto welo mabbura.";
        txt2[17] = nama + ": Ye deto. Terima kasih.";
        txt2[18] = nama + ": (Yede Bapak'e dennamasker. Dena welli koyyede.)";
        txt2[21] = nama + ": elliki Ndi', silalona tu engka ye, Bu";
        txt2[23] = nama + ": Iyye deto, Bu.";
        txt2[24] = nama + ": Tabe, lalenge lokka dimenarae yetega?";
        txt2[27] = "Kakek: Halo, "+nama+ " Kodeusala parengerang, nasuruki sedding emmamu malakka anre.";
        txt2[28] = nama + ": Iya, Lato'!";
        txt2[29] = nama + ": Engkae nanre pole diemmakku.";
        txt2[32] = nama + ": Bah, Lato'.";
        txt2[36] = nama + ": Engka lambaceta, Bu?";
        txt2[38] = nama + ": Iyye, Bu,. Sikantong-kantong siaga ellinna?";
        txt2[40] = nama + ": Oiyye, tabe pale kahe duita.";
        txt2[43] = nama + ": Sabung, Bu?";
        txt2[45] = nama + ": Oke, tabe kahe duita.";
        txt2[48] = nama + ": Oke, tabe kahe duita.";
        txt2[49] = "Nene: Hei, " + nama +". Engka napalaloang pole latokmu?";
        txt2[50] = nama + ": Pole dionronnaka latokku dolo, Nek.";
        txt2[52] = nama + ": Engkahe sabung sibawa lambace pole dilatokku.";
        txt2[53] = nama + ": Engkahe sabung sibawa lambace pole dilatokku.";
        txt2[55] = nama + ": Purani ubbissai, Nek.";
        txt2[57] = nama + ": Iyye, Lato'.";
        txt2[60] = nama + ": (Palato'a dolo cairang pappepaccing).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Tabe engkae, Pak.";
        txt3[15] = nama + ": (Wah, yede ibue denapake masker. Au dewelo melli koalena).";
        txt3[16] = nama + ": Deto, Bu.";
        txt3[22] = nama + ": Tabe loka makkutana, onrong aga yede? Manengka dijagai?";
        txt3[41] = nama + ": Kesasarka, Pak.";
        txt3[44] = nama + ": Kesasarka, Pak.";
        txt3[45] = nama + ": Ya, metta tongeng nappaki siruntu. Manengka de dipake masker na engkaki disaliweng?";
        txt3[48] = nama + ": Iya, teska korona jolo nappa lokka diterminal'e. Jadi nasalaka oto bis pammulange.";
        txt3[50] = nama + ": Aja mumacapa! Pde essoi pade megai tu nakenna korona!";
        txt3[51] = nama + ": Ko demulo pake masker iyyana lokka mellia nau dianre. Cina ulisu paimeng.";
        txt3[52] = nama + ": (Hmmm, cina wellingang maneng masker).";
        txt3[55] = nama + ": (Hmmm, ye lo wellie deaga mbo koe).";
        txt3[62] = nama + ": Siaga ellina sikolo, Bu?";
        txt3[64] = nama + ": Tapabbellika sikolo, Bu. Kahe duina.";
        txt3[68] = nama + ": (Wah, yero bapak'e denapake masker. Dewelo melli koalena).";
        txt3[69] = nama + ": Deto, Pak.";
        txt3[84] = nama + ": Siaaga ellinna tellu bukku rotitta, Pak?";
        txt3[86] = nama + ": Tabe engkae duita, Pak.";
        txt3[91] = nama + ": Siaga ellinna ko 4 maskerta, Bu?";
        txt3[93] = nama + ": Ok, 4 welli maskerta Bu. Tabe engkae duita.";
        txt3[96] = nama + ": Aga kajajiang?";
        txt3[98] = nama + ": Wah, silaloku siruntu.";
    }
    else if (manado === true){ 
        // text1
        txt1[9] = nama + ": Makaseh!" ; 
		txt1[12] = nama + ": Oo, kita da lia pa dia di utang.";
		txt1[14] = nama + ": Boleh.";
		txt1[15] = nama + ": Napa masker dari nga pe oma. Pake jo dulu!";
		txt1[18] = nama + ": Mo pi bli dimana, Ma'?";
		txt1[21] = nama + ": Mo bli sabong cuci tangan.";
		txt1[24] = nama + ": Ada sabong cuci tangan?";
		txt1[30] = nama + ": Napa Ma' tu sabong.";
        // txt2 
        txt2[1] = nama + ": Iyo, Ma'.";
        txt2[3] = "Birman: Hei, " + nama + " Nga so tau, tu tanta Joko da kena Covid kata, kang.";
        txt2[6] = nama + ": Tanta, kyapa tu ade?";
        txt2[8] = nama + ": Aduh tanta, semoga bukang covid, neh.";
        txt2[11] = nama + ": (Adoh, musti ba jaoh kita)";
        txt2[12] = nama + ": (Aduh, so musti pi antar ni Opa pe makanan)";
        txt2[14] = nama + ":Sori, kita nya mo ba priksa. Makaseh, ses.";
        txt2[17] = nama + ": Nda Om, makaseh..";
        txt2[18] = nama + ": (Ni Om nyanda pake masker. Ta nimau mo ba bli sini.)";
        txt2[21] = nama + ": Sori neh, nda mo ba bli kita.";
        txt2[23] = nama + ": Nyanda cari apa-apa, Tanta.";
        txt2[24] = nama + ": Permisi, kalo mo pi menara mo lewat jalang mana, kang?";
        txt2[27] = "Opa: Halo, " +nama+ "Opa inga, nga pe mama da titip makanan pa ngana for Opa.";
        txt2[28] = nama + ":Iyo, Opa!";
        txt2[29] = nama + ": Napa tu makanan dari mama for Opa.";
        txt2[32] = nama + ": Iyo, Opa.";
        txt2[36] = nama + ": Ada tomat, Tanta?";
        txt2[38] = nama + ": Satu tampa brapa, Tanta?";
        txt2[40] = nama + ": Napa tanta depe doi.";
        txt2[43] = nama + ": Ada sabong cair, Tanta?";
        txt2[45] = nama + ": Oke, napa depe doi.";
        txt2[48] = "Tetangga: Aduh, so besar ngana, kang. " + nama;
        txt2[49] = "Oma: Halo, " + nama +". Opa da ba titip pa ngana?";
        txt2[50] = nama + ": Oma, kita mo pi pa opa pe tampa dulu, neh.";
        txt2[52] = nama + ": Napa tu sabong deng tomat da bli di pasar, yang tu Opa da titip dang.";
        txt2[53] = "Oma: makaseh banya, neh. " +nama + ". Ngana pi cuci akang dulu.";
        txt2[55] = nama + ": Oma, sudah kita so cuci.";
        txt2[57] = nama + ": Iyo, Opa.";
        txt2[60] = nama + ": (Ta mo pake cairan anti kuman for ja se bersih tangan dulu).";
        // txt3
        txt3[9] = nama + ": Napa, Om.";
        txt3[15] = nama + ": (Adoh, ni tanta nya pake masker. Ta nimau ah, ba bli pa dia).";
        txt3[16] = nama + ": Nda, Tanta.";
        txt3[22] = nama + ": Mo tanya dang. Ini tampa apa kang? Kyapa da jaga bagini?";
        txt3[41] = nama + ": Ilang jalang kita, Om.";
        txt3[44] = "Sudara: Hei! " + nama + " so lamanya bakudapa torang!";
        txt3[45] = nama + ": Iyo, lama nyanda bakudapa torang. Kyapa ngana da di luar bagini kong nya pake masker, dang?";
        txt3[48] = nama + ":  Iyo, tadi kwa sebelum pi terminal kita da pi ba rapid dulu, so itu ta tinggal oto pertama.";
        txt3[50] = nama + ": Hi, jang pandang enteng ngana. Nga tau ini lebe hari so lebe banya yang ta jangke. Suka stow!";
        txt3[51] = nama + ": Kalo ngana mo kaluar pi ba bli bagini kong nimau pake masker, biar jo dang nanti kita yang pi bli nasi. Nanti ta ba bale ulang kamari, no.";
        txt3[52] = nama + ": (Hmmm, biar jo nanti kita jo tre yang bli akang masker for dorang).";
        txt3[55] = nama + ": (Hmmm, nda ada disini le tu yang kita da cari).";
        txt3[62] = nama + ":  Ni ikang brapa Satu kilo, tanta?";
        txt3[64] = nama + ": se kamari 1 kilo jo, tanta. Napa depe doi.";
        txt3[68] = nama + ": (Duh, tu om nda pake masker. Mau' jo ba bli pa dia).";
        txt3[69] = nama + ": Nda, Om.";
        txt3[84] = nama + ": Brapa ni roti tiga bungkus, Om?";
        txt3[86] = nama + ": Bli tiga jo. Napa depe doi, Om.";
        txt3[91] = nama + ": Ampa masker, brapa tanta?";
        txt3[93] = nama + ": Berarti kita bli ampa jo, Tanta. Napa depe doi.";
        txt3[96] = nama + ": Kyapa ini, dang?";
        txt3[98] = nama + ": Ya astaga, tadi torang dua baru bakudapa.";
	}
    else if (tolaki === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Tarima kasih!";
        txt1[12] = nama + ": Oo kukii iandoolo.";
        txt1[14] = nama + ": Iyeito, hendenggituto.";
        txt1[15] = nama + ": Niino pondudutu mbondu ari nepuemu. Pakeito leesu!";
        txt1[18] = nama + ": Nihawo, Ina?";
        txt1[21] = nama + ": Nggo mooli sabu nggae.";
        txt1[24] = nama + ": Laai sabu nggae?";
        txt1[30] = nama + ": Niino sabuno, Ina.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Iye, Ina.";
        txt2[3] = nama + ": Iye, Ina.";
        txt2[6] = nama + ": Ina, anano mbakoi?";
        txt2[8] = nama + ": Oh. Mongoni- ngoni iyamo ni covid eto, Ina.";
        txt2[11] = nama + ": (Waduh, nggo dumagai jarak)";
        txt2[12] = nama + ": (Wah, nggoo modadasi mowawokee kinaa puenggu)";
        txt2[14] = nama + ": Ongoni ambo, oki kuonggo mepakuli. Tarima kasih.";
        txt2[17] = nama + ": Oki Ama. Tarima kasih.";
        txt2[18] = nama + ": (Ama ino oki nopetutumbondu. Oki kekupooli wuah ikeni.)";
        txt2[21] = nama + ": Mongoni ambo, oki leesu Ina.";
        txt2[23] = nama + ": Oh, oki kulaa meopolaha, Ina.";
        txt2[24] = nama + ": Taabe, sala nggo lako nemenara meruku nehawo?";
        txt2[27] = "Pue langgai: Halo, " +nama+ "Pombehawanggu,inamu monanggona kinaanggu.";
        txt2[28] = nama + ": Iye, Pue!";
        txt2[29] = nama + ": Niino kinaamiu ari kei ina.";
        txt2[32] = nama + ": Iye kutulei, Pue.";
        txt2[36] = nama + ": La tamate, Ina?";
        txt2[38] = nama + ": Oho, teopio aso bunggusu?";
        txt2[40] = nama + ": Oho taude, ino doino.";
        txt2[43] = nama + ": La osabu, Ina?";
        txt2[45] = nama + ": Weakuto, ino doino.";
        txt2[48] = nama + ": Weakuto, ino doino.";
        txt2[49] = "Pue: Halo, " + nama +". Lai pera oliwino pue langgaimu?";
        txt2[50] = nama + ": Kulako leesu ke pue langgai, Pue.";
        txt2[52] = nama + ": Ino osabu ronga tamate ari idaoa.";
        txt2[53] = nama + ": Ino osabu ronga tamate ari idaoa.";
        txt2[55] = nama + ": Ariakuto wohiki'i, Pue.";
        txt2[57] = nama + ": Iye, Pue.";
        txt2[60] = nama + ": (Ku pombake leesu osabu).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Inono ma'ama.";
        txt3[15] = nama + ": (Wah, Inaina okino pemasker. Adenggu mo'oli ke ie).";
        txt3[16] = nama + ": Oki, Naina.";
        txt3[22] = nama + ": Nggo mesuko, nihawo ino? Mbakoe no nidagai?";
        txt3[41] = nama + ": Ku mopua deela ma'ama.";
        txt3[44] = nama + ": Ku mopua deela ma'ama.";
        txt3[45] = nama + ": Oho dauko, menggau ketoto ta teposua. Mbakoe auta pemasker?";
        txt3[48] = nama + ": Sobolum kulako ine terminal ku nirapid leesu. Ieto ku kotinggala bus portama.";
        txt3[50] = nama + ": Iyamo pesawa! Tuduoleo adio to'ono kinono o Covid!";
        txt3[51] = nama + ": Keuta ehenggi memasker, inaku toka'a nggo lako mo'oli keeto kinokaa. Akuika'a mbule mendua.";
        txt3[52] = nama + ": (Hmmm, nggo mo'oli keroika ino masker).";
        txt3[55] = nama + ": (Hmmm, mbuiki ikeni nggo niolinggu).";
        txt3[62] = nama + ": Teopio oika aso kilo, Naina?";
        txt3[64] = nama + ": Nggo, mo'oli teaso kilo naina, ino doino.";
        txt3[68] = nama + ": (Wah, okino pemasker nggiro ima'ama. Adenggu mo'oli ke ie).";
        txt3[69] = nama + ": Oki, Ma'ama.";
        txt3[84] = nama + ": Teopio ino tolu bunggusu oroti?";
        txt3[86] = nama + ": Bunggusiito, ino doino, ma'ama.";
        txt3[91] = nama + ": Teopio ino o'omba masker, Naina?";
        txt3[93] = nama + ": Oho, nggo umolito ino naombano, naina ino doino.";
        txt3[96] = nama + ": Mbakoe ino?";
        txt3[98] = nama + ": Wah, epoka ku teposuangge ingoni.";
    }
    else if (ciacia === true){
        // (LEVEL 1) text1
        txt1[9] = nama + ": Ee tarimakasi ee!";
        txt1[12] = nama + ": Oh,indau oita iya i hamota.";
        txt1[14] = nama + ": So jelasimo,ceh.";
        txt1[15] = nama + ": Inee maskere minaaso ompumiu. Pakeepo hake!";
        txt1[18] = nama + ": I kaumpaa, Ina?";
        txt1[21] = nama + ": Indau abalupo sabo kapohonaino lima.";
        txt1[24] = nama + ": Anee sabo kapohonaino lima ka?";
        txt1[30] = nama + ": Ningkenomo sabono wa, Ina.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Ombe, Ina.";
        txt2[3] = nama + ": Ombe, Ina.";
        txt2[6] = nama + ": Ina, Anamiu nomoapa cuke?";
        txt2[8] = nama + ": Oh. Masangia mincuano Covid ya, Ina.";
        txt2[11] = nama + ": (Waduh, indau tabe ajumaga polepia nih)";
        txt2[12] = nama + ": (Wah, indau tabe aburu-buru amantara mengantar kamaano Ompu)";
        txt2[14] = nama + ": Maafusau, indau cia amikombi. Tarima kasi.";
        txt2[17] = nama + ": Cia Ama . Tarima kasi.";
        txt2[18] = nama + ": (Amana cia cupake maskere. Indau cia abhalu wua ka ina.)";
        txt2[21] = nama + ": Maafusau, pohake, Ina.";
        txt2[23] = nama + ": Oh, cia amikamata paparaa, Ina.";
        txt2[24] = nama + ": Tabea, lalano i menara tolewati I kaumpaa, la?";
        txt2[27] = "Ompu: Halo, " +nama+ " Opindandaiemo, inamiumu notitipu winalu ngose Ompu.";
        txt2[28] = nama + ": Ombe, Mpu!";
        txt2[29] = nama + ": Inee winalu minaaso i wa Ina ngaso Ompu.";
        txt2[32] = nama + ": Ombe, Mpu.";
        txt2[36] = nama + ": Anee tamate, Ina?";
        txt2[38] = nama + ": Omela, Ina. abungkusiana aparaa hargaano?";
        txt2[40] = nama + ": Ombe, inee dhoeno, Ina.";
        txt2[43] = nama + ": Sabo cumairi anee, Ina?";
        txt2[45] = nama + ": Ombe, inee dhoeno.";
        txt2[48] = nama + ": Ombe, inee dhoeno.";
        txt2[49] = "Nene: Halo, " + nama +". Anee kalambokono minaaso i Ompumiu?";
        txt2[50] = nama + ": Indau amintepo i tampano Ompu, Ne.";
        txt2[52] = nama + ": Inee sabo dhori tamate mina i dhaoa kalambokono Ompu.";
        txt2[53] = nama + ": Inee sabo dhori tamate mina i dhaoa kalambokono Ompu.";
        txt2[55] = nama + ": Poolimo indau ohonaiye, Ne.";
        txt2[57] = nama + ": Ombe, Mpu.";
        txt2[60] = nama + ": (Indau opake wee pabarasipo hake).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Inee, Ama.";
        txt3[15] = nama + ": (Wah, Inauana cia cupake maskere. Indau cia abhalanja wa ia deh).";
        txt3[16] = nama + ": Cia, Ina.";
        txt3[22] = nama + ": Amgumeapo, ningkee tampano paraa? Moapa nojagae?";
        txt3[41] = nama + ": Indau omolingu, Ama.";
        txt3[44] = nama + ": Indau omolingu, Ama.";
        txt3[45] = nama + ": Ombe, molenge cia tamotabu. Mopa isoo i luara cia cupake maskere?";
        txt3[48] = nama + ": Ombe, hawane ciapo cuminte i terminala bisi indau arumapidpo kahe. Jari haleo ocibhokoli bisi pertama.";
        txt3[50] = nama + ": Kolie mopanda entee ! Bhita-bhita notambaki tarusu mia, mokonie!";
        txt3[51] = nama + ": Hawane isoo cia cupake maskere, padhiamo indau ngaso bhaluno minaa. Dhampo indau abale uka mindua.";
        txt3[52] = nama + ": (Hmmm, dhampo indau bhaluno maskere ngaso moia).";
        txt3[55] = nama + ": (Hmmm, bhara ngaso tabhalu cia namanee ka ina).";
        txt3[62] = nama + ": Popia hargano akilo isa, Ina?";
        txt3[64] = nama + ": Ombe, abhalu akilo ya, Ina. Inee dhoeno.";
        txt3[68] = nama + ": (Wah,amancu cia napake maskere. Indau cia abhalanja wa imoia nde).";
        txt3[69] = nama + ": Cia, Ama.";
        txt3[84] = nama + ": Tolu bungkusi rotiana popia, Ama?";
        txt3[86] = nama + ": Ombe, inee dhoeno, Ama.";
        txt3[91] = nama + ": Popia hargano popaa maskere iyana ierapa harga empat masker, Ina?";
        txt3[93] = nama + ": Umbe, indau abalue popaa masker, Ina. Inee dhoeno.";
        txt3[96] = nama + ": Paraeanomoningke?";
        txt3[98] = nama + ": Wee, indau bithamo opotabu iya haleo.";
    }
    // NTT dan NTB
    else if (sasak === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Terima kasi!";
        txt1[12] = nama + ": Oh, Muq gitaq e leq gawah.";
        txt1[14] = nama + ": Oh bau gati.";
        txt1[15] = nama + ": Ni masker oleq papuq o. Kadue juluq!";
        txt1[18] = nama + ": Leq Mbe, Naq?";
        txt1[21] = nama + ": Eaq ko beli sabun bisoq ime.";
        txt1[24] = nama + ": Araq sabun bisoq ime?";
        txt1[30] = nama + ": Ni sabun o, Inaq.";

        // LEVEL 2 text2
        txt2[1] = nama + ": O nggih, Inaq.";
        txt2[3] = nama + ": O nggih, Inaq.";
        txt2[6] = nama + ": Naq, kembeng anaq o?";
        txt2[8] = nama + ": Oh. Semogeng ndeq covid nggih, Inaq.";
        txt2[11] = nama + ": (Waduh, harus ko jagaq bates ni)";
        txt2[12] = nama + ": (Wah, harus ko becat-becat atong kakenan Papuq Mame)";
        txt2[14] = nama + ": Maaf, ndeq eak beroat .";
        txt2[17] = nama + ": Ndeq  Maq.";
        txt2[18] = nama + ": (Amaq ni ndeqng kadu masker. Ndeq eaq beli buaq leq te.)";
        txt2[21] = nama + ": Maaf, Ndeq, Naq.";
        txt2[23] = nama + ": Oh, Ndeq ko boyak ape ape, Naq.";
        txt2[24] = nama + ": Ee,  Mbe jalan te jok menare, ah?";
        txt2[27] = "Papuq Mame: Ee, " +nama+ " Seinget Papuq mame, inaq o sempaitan sango umaq Papuq mame.";
        txt2[28] = nama + ": , Nggih, Puq!";
        txt2[29] = nama + ": Ni sango oleq inaq ko umaq Papuq.";
        txt2[32] = nama + ": Taoq ko noh , Puq.";
        txt2[36] = nama + ": Araq Terong aceh, Naq?";
        txt2[38] = nama + ": Nggih, Naq. Sebungkus ni pire ajing?";
        txt2[40] = nama + ": Nggih, ni kepeng , Naq.";
        txt2[43] = nama + ": Sabun encer, Naq?";
        txt2[45] = nama + ": O nggih, ni  kepeng.";
        txt2[48] = nama + ": O nggih, ni  kepeng.";
        txt2[49] = "Papuq Nine: Halo, " + nama +". Araq sempaitan oleq papuq mame o?";
        txt2[50] = nama + ": Eaq ko jok papuq mame juluk , Puq.";
        txt2[52] = nama + ": Ni sabun kance terong aceh sempaitan Papuq Mame.";
        txt2[53] = "Papuq Nine: oo aoq. " +nama + ". Tulung bisoq e juluq, aoq";
        txt2[55] = nama + ": Uah ko bisoq, Puq.";
        txt2[57] = nama + ": Nggih, Puq.";
        txt2[60] = nama + ": (Eaq ko kadu sabun encer pembersih juluq)";

        // LEVEL 3 text3
        txt3[9] = nama + ": Ni, Maq.";
        txt3[15] = nama + ": (Wah, inaq ne ndekng kadu masker. Ndek jak belanje leq nie aneh ).";
        txt3[16] =  nama + ": Ndek, Naq.";
        txt3[22] = nama + ": Maaf eaq beketuan, taoq ape ni? Angkaqng tejagaq?";
        txt3[41] = nama + ": Aku salaq lai.";
        txt3[44] = "Semeton: Hai! " + nama + " ngoneq ndek bedait!";
        txt3[45] = nama + ": Nggih, ngoneq ndek bedait. Angkaq o leq luah ndek kadu masker?";
        txt3[48] = nama + ": Nggih sendekman jok stamplat bis muq rapid juluq.Iye muq tebilin siq bis pertame.";
        txt3[50] = nama + ": Dendeq seleah! Mu o ketaon sere lueq tetular bilang jelo !";
        txt3[51] = nama + ": Mu o ndeq mele kadu masker, adeq e aku saq beli kakenan. Bareh ko tulaq malik.";
        txt3[52] = nama + ": (Hmmm, bareh ko beli masker umaq nie pade).";
        txt3[55] = nama + ": (Hmmm, barang saq eaq ko beli ndeqng araq leq te).";
        txt3[62] = nama + ": Pire ajing sekilo empaq ni, Inaq?";
        txt3[64] = nama + ":Nggih, beli sekilo nggih, Inaq. Ne kepeng ko.";
        txt3[68] = nama + ": (Wah, amaq nu ndeqng kadu masker. Ndeq eak belanje leq nie aneh).";
        txt3[69] = nama + ": Ndeq, Maq.";
        txt3[84] = nama + ": Telu bungkus ruti ne pire, Mak?";
        txt3[86] = nama + ": Nggih, ne kepeng ko, Maq.";
        txt3[91] = nama + ":  Pire aji empat masker, Naq?";
        txt3[93] = nama + ":Nggih, eaq beli empat maskerm, Naq. Ne kepengq.";
        txt3[96] = nama + ": Araq ape ne?";
        txt3[98] = nama + ": Wah, baruq saq bedait kance e.";
    }
    else if (kupang === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Makasih!";
        txt1[12] = nama + ": Iyo, tadi beta liat dia ada di hutan.";
        txt1[14] = nama + ": Bisa.";
        txt1[15] = nama + ": Ini lu pung nene kasi masker. Pake su!";
        txt1[18] = nama + ": Di mana?";
        txt1[21] = nama + ": Mau beli sabun cuci tangan.";
        txt1[24] = nama + ": Ada sabun cuci tangan?";
        txt1[30] =     nama + ": Mama, Ini sabun ni.";

        // LEVEL 2 text2
        txt2[1] = nama + ": Iyo, ma.";
        txt2[3] = nama + ": Iyo, ma.";
        txt2[6] = nama + ": Ibu, itu ana kenapa?";
        txt2[8] = nama + ": Oh. Semoga sa sonde Covid ee, Ibu.";
        txt2[11] = nama + ": (Adue, beta musti jaga jarak ni ma)";
        txt2[12] = nama + ": (Beta ju harus cepat ko pi antar Ba'i pung makanan)";
        txt2[14] = nama + ": Maaf, beta sonde berobat. Terima kasih.";
        txt2[17] = nama + ": Sonde, Pak. Terima kasih.";
        txt2[18] = nama + ": (Ini Pak sonde pake masker. Baru beta tadi pi beli buah di sini.)";
        txt2[21] = nama + ": Maaf, sonde dolo, mama.";
        txt2[23] = nama + ": Sonde cari apa-apa, Ibu.";
        txt2[24] = nama + ": Permisi, jalan pi menara lewat mana, ee?";
        txt2[27] = "Ba'i: kaka, " +nama+ " kalo sonde salah, lu pung mama ada titip makanan kasi Ba'i ee.";
        txt2[28] = nama + ": Iyo, Ba'i!";
        txt2[29] = nama + ": Ini makanan yang mama buat kasi Ba'i.";
        txt2[32] = nama + ": Bisa, Ba'i.";
        txt2[36] = nama + ": Ada tomat ko, mama?";
        txt2[38] = nama + ": Iyo, mama. Ini satu bungkus harga berapa?";
        txt2[40] = nama + ": Baik, ini uang ni, Mama.";
        txt2[43] = nama + ": Ada sabun cair ada ko, Ibu?";
        txt2[45] = nama + ": Oke, ini uang ni.";
        txt2[48] = nama + ": Oke, ini uang ni.";
        txt2[49] = "Nene: Kaka, " + nama +". Ba'i ada titip sesuatu kah?";
        txt2[50] = nama + ": Nene, beta pi Ba'i pung tempat dolo ee.";
        txt2[52] = nama + ": Ini sabun deng tomat dari pasar yang Ba'i titip tadi.";
        txt2[53] = "Nenek: Terima kasih. " +nama + ". Tolong dicuci dulu, ya.";
        txt2[55] = nama + ": Neta su cuci habis, Nek.";
        txt2[57] = nama + ": Iyo, Ba'i.";
        txt2[60] = nama + ": (Beta pakai cairan pembersih dolo).";

        // LEVEL 3 text3
        txt3[9] = nama + ": Ini, Pak.";
        txt3[15] = nama + ": (Adue, ini mama sonde pake masker. Beta sonde jadi belanja di dia).";
        txt3[16] = nama + ": Sonde, Mama.";
        txt3[22] = nama + ": Mau tanya do, ini tempat apa, ee? Kanapa dijaga?";
        txt3[41] = nama + ": Beta kasasar, Pak.";
        txt3[44] = "Saudara: Halo! " + nama + " lama sonde katumu!";
        txt3[45] = nama + ": Iyo, lama sonde katumu. Ko lu di luar kenapa sonde pake masker?";
        txt3[48] = nama + ": Iya, sebelum pi terminal bis beta rapid dolo na. Jadi tadi bis pertama jalan kastenga.";
        txt3[50] = nama + ": Jang anggap enteng oo! Makin hari makin banyak orang yang kena supaya lu tahu!";
        txt3[51] = nama + ": Kalo lu sonde mau pake masker, biar beta sa yang pi beli makan. Nanti beta kembali lai.";
        txt3[52] = nama + ": (Hmmm, nanti beta ju mau beli masker kasi dong).";
        txt3[55] = nama + ": (Hmmm, barang yang beta mau beli sonde ada di sini).";
        txt3[62] = nama + ": Ikan satu kumpul berapa, Ma'?";
        txt3[64] = nama + ": Bae, beta beli satu kilo ee, Ma'. Ini uang ni.";
        txt3[68] = nama + ": (Aduh, itu bapak sonde pake masker. Beta sonde jadi belanja di dia le).";
        txt3[69] = nama + ": Sonde, Pak.";
        txt3[84] = nama + ": Ini roti tiga bungkus berapa, Pak?";
        txt3[86] = nama + ": Baik, ini uang ni, Pak.";
        txt3[91] = nama + ":Ini masker empat berapa, Ibu?";
        txt3[93] = nama + ": Baik, beta beli empat masker, Bu. Ini uang ni.";
        txt3[96] = nama + ": Ada apa ini?";
        txt3[98] = nama + ": Aduh, beta baru katemu dia tadi.";
    }
    else if (uab === true){ 
        // text1
        txt1[9] = nama + ": Makasih!" ; 
		txt1[12] = nama + ": Oh, au ite es mepat.";
		txt1[14] = nama + ": Leko.";
		txt1[15] = nama + ": Ian masker nako ho bi nasi'. Ampake fe'!";
		txt1[18] = nama + ": Es me, Ain?";
        txt2[19] = nama + ": Maem sa'?";
		txt1[21] = nama + ": He' sos sabu nukuf.";
		txt1[24] = nama + ": An mui sabu fanu' nukuf?";
		txt1[30] = nama + ": Sabu es ian.";
        // txt2 
        txt2[1] = nama + ": Leko.";
        txt2[3] = "Atoni ume bian: Hole, " + nama + " Au' nenat na' Joko ainaf napen Covid.";
        txt2[6] = nama + ": Ain, ho an he nansa?";
        txt2[8] = nama + ": Oh. At onen he nati hasil-e kai' Covid he, Ain.";
        txt2[11] = nama + ": (Oeno, Au he panat au tuake na'lo nako in)";
        txt2[12] = nama + ": (Wah, au musti lab-lab he nao at an au baif in amnahat-)";
        txt2[14] = nama + ": Au toet maaf, au ka' pariksa fa.";
        txt2[15] = nama + ": Ole' nati hem panat ho tuame he mu'lo nako atone mfaun.";
        txt2[17] = nama + ": Kahaf, Tua. Makasih.";
        txt2[18] = nama + ": (Au ka' sosaf fua mbi atoni le ian te in kan pakef masker . )";
        txt2[21] = nama + ":Au toit maaf, au fe' ka ait fa fe', ain.";
        txt2[23] = nama + ": Eh, kah, auk amif sa' sa', ain.";
        txt2[24] = nama + ": Palmis, lalan het nao on menara tatuin mele, he?";
        txt2[27] = "Baif: Hole, " +nama+ " Au umnau kal ho aina mbela au mnahat mbi ian .";
        txt2[28] = nama + ": Leko, Am!";
        txt2[29] = nama + ": Iane mnahat nako aina' untuk ho.";
        txt2[32] = nama + ": leko, Am.";
        txt2[36] = nama + ": Anmui' kaulili, Ain?";
        txt2[38] = nama + ": Leko, Ain. Bungkus esat fauk?";
        txt2[40] = nama + ": Leko, loite es ian, Ain.";
        txt2[43] = nama + ": Anmui Sabu, Ain?";
        txt2[45] = nama + ": Leko, loite es ain.";
        txt2[48] = "Atoni ume bian: Au, ho mu'naelen, o. " + nama;
        txt2[49] = "Bi nasi: Hole, " + nama +". Ai ho baif anfe kau sa?";
        txt2[50] = nama + ": Au nao fe on Baif, Ain .";
        txt2[52] = nama + ": Ian baif an fe sabu nok kaulili nako' masa' .";
        txt2[53] = "Bi nasi: Makasih. " +nama + ". Amboe man-sin, he.";
        txt2[55] = nama + ": Nasi' au boe sin-en.";
        txt2[57] = nama + ": leko, Am.";
        txt2[60] = nama + ": (Au Paek an saub pemutih fe').";
        // txt3
        txt3[9] = nama + ": Es ian, Tua.";
        txt3[15] = nama + ": (Auu, bife ian kan pakef masker. Au ka' jalif a'sos ina' sos-in).";
        txt3[16] = nama + ": Kaha', Ain.";
        txt3[22] = nama + ": Au toet an, in bale' sa' he? Nansa him pao ge?";
        txt3[41] = nama + ": Au' sek', Tua.";
        txt3[44] = "Ba-e: Hae! " + nama + " Hit logen kat ta-ekof!";
        txt3[45] = nama + ": Batul, hom poe mas ho kam paek masker fa?";
        txt3[48] = nama + ": Tua, lelon fe au he' nao on terminal au pariksa rapid fe'. Mak au ka upen fa bis ahunut.";
        txt3[50] = nama + ": Kaisam tao onan! Neno-neno te apen menas ansaeng kon he!";
        txt3[51] = nama + ": Kal ho kam paek masker fa, maut he au' mes amsoskit amnahat. Okat na' au fain aum.";
        txt3[52] = nama + ": (Hmmm, okat au sos masker neu sin ).";
        txt3[55] = nama + ": (Hmmm, bale' au he' sose katitfa es ian).";
        txt3[62] = nama + ": Ika'kiulges fauk?";
        txt3[64] = nama + ": Leko, Au ait kiulges he. Loite es ian.";
        txt3[68] = nama + ": (Au, Anaef ian kam paek fa masker. Au ka' sos fa neu ne).";
        txt3[69] = nama + ": Kaha', Tua.";
        txt3[84] = nama + ": Rote teun ian fauk, Tua?";
        txt3[86] = nama + ": Leko, ian loete, Am.";
        txt3[91] = nama + ": Masker hat fauk, Ain?";
        txt3[93] = nama + ": Leko, Au ait masker ian ha, Ain. Loete es ian.";
        txt3[96] = nama + ": Nansa' es ian?";
        txt3[98] = nama + ": Wah, au fe' u-eko fe'a.";
	}
    else if (amarasi === true){
        // LEVEL 1 text1
        txt1[9] = nama + ": Toit Terima kasih!" ;
        txt1[12] = nama + ": Oh, au kite et nasje.";
        txt1[14] = nama + ": Reko.";
        txt1[15] = nama + ": Ia masker noko ho Fem nasi. Ampaek je fe !";
        txt1[18] = nama + ": Etme, Aina'?";
        txt1[21] = nama + ": Nu sos saub saef nimik.";
        txt1[24] = nama + ": Mui saub saef nimik?";
        txt1[30] = nama + ": Ia saubgua, Aina.";
        // LEVEL 2 text2
        txt2[1] = nama + ": Reko, Aina.";
        txt2[3] = nama + ": Reko, Aina.";
        txt2[6] = nama + ": Aina', ho anam namen sa?";
        txt2[8] = nama + ": Oh. At oenne he kais napen he menes Covid nan.";
        txt2[11] = nama + ": (au harus makrona  kreo)";
        txt2[12] = nama + ": (Au manap nu nao katan atoinim mnasi nae mnahat)";
        txt2[14] = nama + ": Suster au  Toit maaf, au bisa  berobat mae ek uim menes ia. Toit terima kasih.";
        txt2[17] = nama + ": Mae tua. Haim toit makasih.";
        txt2[18] = nama + ": (Atoni ain paek masker mae. Au sos fuf ek kai mae'.)";
        txt2[21] = nama + ": Au toit maaf, Aina'  kaisa' fe', .";
        txt2[23] = nama + ": Oh, kaim sasaamae, Aina'.";
        txt2[24] = nama + ": Permisi, ranan nut nao en menara peo me, he?";
        txt2[27] = "Naef: Halo, " +nama+ " Naef au kumnau nu mama an titip ko mnahat nu muah.";
        txt2[28] = nama + ": Tua, atonimnasi'!";
        txt2[29] = nama + ": Ai mnahat he aina' an titip nu Naef .";
        txt2[32] = nama + ": Onan, Ama.";
        txt2[36] = nama + ": Ain an Mui keriri,?";
        txt2[38] = nama + ": Reko, Aina'. Amgoes te  nifu fauk ?";
        txt2[40] = nama + ": Reko, ai  au roitin esen he ia, Aina'.";
        txt2[43] = nama + ": Ain an mui saub ma-oe , ?";
        txt2[45] = nama + ": Ia au  roitin esen he ia.";
        txt2[48] = nama + ": Ia au  roitin esen he ia.";
        txt2[49] = "Fem nasi': Halo, " + nama +". Ai bai an feko sa?";
        txt2[50] = nama + ": Au nao en bai nae , Fe .";
        txt2[52] = nama + ": Bai anfekit saaina nok kaurir in na .";
        txt2[53] = "Fem nasi': Toit makasi. " +nama + ". Am saef mangkit sin .";
        txt2[55] = nama + ": Au boerarsin hen, Ina.";
        txt2[57] = nama + ": Reko, Naef.";
        txt2[60] = nama + ": (Au nu paek oe kninu' ek au nimki ni ).";

        // LEVEL 3 text3
        txt3[9] = nama + ": Esai, Tua.";
        txt3[15] = nama + ": (Wah, bife nae paek masker mae au roim nu sos kokne mae).";
        txt3[16] = nama + ": Mae, Aina'.";
        txt3[22] = nama + ": Toit parmisi nukatan, aI baer sana? Nansa numpao?";
        txt3[41] = nama + ": Au naosan, Tua.";
        txt3[44] = nama + ": Au naosan, Tua.";
        txt3[45] = nama + ": Ya, rohen mui maktena mae. Nansa es hom paek masker mae ek mone ?";
        txt3[48] = nama + ": Tua, mui mnao ek terminal oto maefe.au rapit tes kainko.";
        txt3[50] = nama + ": Kais mubae nok menes ia. Nengoes te tambah namfau es napen !";
        txt3[51] = nama + ": Karu hom roim num paek masker mae, mbain au es nao sos mnahat.  Au fainkum teni.";
        txt3[52] = nama + ": (Hmmm, au soson sin masker ).";
        txt3[55] = nama + ": (Hmmm, bare he au sosgoe tite mae etai  ).";
        txt3[62] = nama + ": Ika kirgoes fauk, Aina'?";
        txt3[64] = nama + ": Reko ai au roitin. Sos kirgoes.";
        txt3[68] = nama + ": (Atoni nae an paek masker mae, au sos en nae mae ).";
        txt3[69] = nama + ": Mae, Tua.";
        txt3[84] = nama + ": Koiksin amu teun teun nifu fauk?";
        txt3[86] = nama + ": Reko, roitin esen ai.";
        txt3[91] = nama + ": Masker mana ha'a fauk ?";
        txt3[93] = nama + ": Reko au sos masker mana ha'a ai roitin ni.";
        txt3[96] = nama + ": Nait nansa?";
        txt3[98] = nama + ": Au fe'en ne kutefe.";
    }
    else if (helong === true){ 
        // text1
        txt1[9] = nama + ": Noran mamo!" ; 
		txt1[12] = nama + ": Eh, auk ngat net un ne alas sua.";
		txt1[14] = nama + ": Ta.";
		txt1[15] = nama + ": Masker ria de auk nene. Pake le!";
		txt1[18] = nama + ": Se ola, Ina?";
		txt1[21] = nama + ": Le sos sabun in boe ima le.";
		txt1[24] = nama + ": Muik sabun in boe ima ke?";
		txt1[30] = nama + ": Sabun nia, Ina.";
        // txt2 
        txt2[1] = nama + ": Ia, Ina.";
        txt2[3] = "Um halin: Hoe, " + nama + " Ming le noan ina joko tom ngasing ota.";
        txt2[6] = nama + ": Ina, anam ma tasao ka?";
        txt2[8] = nama + ": Wi. Sari ngasing ota deken ai, Ina.";
        txt2[11] = nama + ": (Iduh, dilim katang apa le)";
        txt2[12] = nama + ": (Eh, auk bur le kil bel auk bai in kaa)";
        txt2[14] = nama + ": Maaf, auk taih lo. Noran mamo.";
        txt2[17] = nama + ": Lo Ama. Noran mamo.";
        txt2[18] = nama + ": (Balan bekoeb ia pake masker lo. Auk sos kai isin se ia lo.)";
        txt2[23] = nama + ": Eh, nuting sasa lo, Ina.";
        txt2[24] = nama + ": Diang le, lalan le laok menara lua lam de ola, ka? ";
        txt2[27] = "Bai: Hoe, " +nama+ " Ku inam tani bai in kaa ngas ne ku talo.";
        txt2[28] = nama + ": Iya, Bai!";
        txt2[29] = nama + ": Ina tani bel bai in kaa ngas ian.";
        txt2[32] = nama + ": Maa, Bai.";
        txt2[36] = nama + ": Muik matin ne, Ina?";
        txt2[38] = nama + ": Ela le, Ina. Unus mesam osa ka ila?";
        txt2[40] = nama + ": Ian, duit tia ian, Ina.";
        txt2[43] = nama + ": Sabun uin muki le, Ina?";
        txt2[45] = nama + ": Ian, duit tia ian.";
        txt2[48] = "Um halin: Eh, ku tene son nia, ai?. " + nama;
        txt2[49] = "Nene: Hoe, " + nama +". Ku bai tani sasa bel nene tam?";
        txt2[50] = nama + ": Auk laok bai kua le, Nene.";
        txt2[52] = nama + ": Bai un in tani kia sabun nia nol matin nia .";
        txt2[53] = "Nene: Noran mamo. " +nama + ". Boe ku imam ma le, he.";
        txt2[55] = nama + ": Auk boen son, Nene.";
        txt2[57] = nama + ": Ia, Bai.";
        txt2[60] = nama + ": (Auk boe nol saub uin nia le).";
        // txt3
        txt3[9] = nama + ": Ian, Ama.";
        txt3[15] = nama + ": (Amah, balan behatang ngia pake masker lo. Auk sos se un lo inah).";
        txt3[16] = nama + ": loo, Ina.";
        txt3[22] = nama + ": Auk keket bu-buit le, ia man sa? Tasao le dohan nia?";
        txt3[41] = nama + ": Auk liu, Ama.";
        txt3[44] = "Kaka-pali: Hoe! " + nama + " tut nal ku lo nesang son!";
        txt3[45] = nama + ": Hao, nesang isi son. Tasao le ku puit likun nam ku pake masker lo kia?";
        txt3[48] = nama + ": Hao, laok terminal lua bi kam auk kapas napat ulung ngia le. Ta apin oto partama lail da-dai.";
        txt3[50] = nama + ": Boel kahin lo ela deken! Lelon-lelon nam mamo atuli nobang apa ili lia, tana tam!";
        txt3[51] = nama + ": Eta ku kom le pake masker lo, nang le auk man laok sos in ka lia. Mam auk pait mang.";
        txt3[52] = nama + ": (Hmmm, tiam auk sos beles masker).";
        txt3[55] = nama + ": (Hmmm, kai-baut auk in nuting nga ne ia lo).";
        txt3[62] = nama + ": ikan kilu mesam osa ka ila la, Ina?";
        txt3[64] = nama + ": Elam, sos kilu mesa, ina, duit tia.";
        txt3[68] = nama + ": (Amah, balan nua pake masker lo. Auk laok sos se un lo).";
        txt3[69] = nama + ": Lo, Ama.";
        txt3[84] = nama + ": Ruti unus tiul ias osa kia ila, Ama?";
        txt3[86] = nama + ": Elam, ian duit tia, Ama.";
        txt3[91] = nama + ": Masker at tam osa ka ila, Ina?";
        txt3[93] = nama + ": Elam, auk sos masker at, ina. Duit tia.";
        txt3[96] = nama + ": Tasao ian na?";
        txt3[98] = nama + ": Amah lo, auk halas tutnalan apin.";
	}
    else if (fataluku === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Obrigado!";
        txt1[12] = nama + ": Oh, ana aci tava irin nae.";
        txt1[14] = nama + ": Rau.";
        txt1[15] = nama + ": Enu masker en e vovo tupur naen mau. Uza tini!";
        txt1[18] = nama + ": Tenae, nalu?";
        txt1[21] = nama + ": Savan tana vahu hini tapule hinua.";
        txt1[24] = nama + ": Savan em tana vahu hini ane?";
        txt1[30] = nama + ": Enu savani, Nalu.";

        // LEVEL 2 text2
        txt2[1] = nama + ": Rau, Nalu.";
        txt2[3] = nama + ": Rau, Nalu.";
        txt2[6] = nama + ": Nalu, e moco teane?";
        txt2[8] = nama + ": Oh. Semoga akam Covid i, nalu.";
        txt2[11] = nama + ": (Ohh, a harus cone tapa nita karune)";
        txt2[12] = nama + ": (Wah, ana harus valalen vovo nami i macen emela)";
        txt2[14] = nama + ": Disculpa,ana akam foromasi. Obrigado.";
        txt2[17] = nama + ": Umpe Palu. Obrigado.";
        txt2[18] = nama + ": (Maar katuasi en akam masker uza. Ana akam enaen etemana tapule.)";
        txt2[21] = nama + ": Desculpa, akaono, Nalu.";
        txt2[23] = nama + ": Oh, aka nacun anahe, Nalu.";
        txt2[24] = nama + ": Lisensa, iyat la menara mara te nere, e?";
        txt2[27] = "Vovo nami  Halo, " +nama+ " Avo eceremu, e nalu macen titipen em avo ina.";
        txt2[28] = nama + ": Ho, Avo!";
        txt2[29] = nama + ": En Nalu macen em Avo ina.";
        txt2[32] = nama + ": rau, Avo.";
        txt2[36] = nama + ": Tomate ane, nalu?";
        txt2[38] = nama + ": Rau, Nalu. Bungkus ukani i hira tarupaha?";
        txt2[40] = nama + ": Rau, en i lawani, Nalu.";
        txt2[43] = nama + ": Savan i ira ane, Nalu?";
        txt2[45] = nama + ": Oke, en i lavani.";
        txt2[48] = nama + ": Oke, en i lavani.";
        txt2[49] = "Vovo tupur: Halo, " + nama +". E vovo nami ten nacun titipe ?";
        txt2[50] = nama + ": Ana la Vovo nami i haliwana tini, Avo.";
        txt2[52] = nama + ": En savan ho tomate merkado naen mau Vovo nami it ten titipe.";
        txt2[53] = "Vovo tupur: Obrigado. " +nama + ". Vahu tini, la.";
        txt2[55] = nama + ": Ana hai vahu, Avo.";
        txt2[57] = nama + ": Rau, Avo.",
        txt2[60] = nama + ": (ana ira varesen uza tini).",

        // LEVEL 3 text3
        txt3[9] = nama + ": Eni, Palu.";
        txt3[15] = nama + ": (Wah, nalu akam masker uza. Ana keluhen akam tawa hini tapule).";
        txt3[16] = nama + ": Umpe, Nalu.";
        txt3[22] = nama + ": Atane tini, en ina haliwana? Teant jaga fai?",
        txt3[41] = nama + ": Ana aka iya naware, Palu.";
        txt3[44] = nama + ": Ana aka iya naware, Palu.";
        txt3[45] = nama + ": Ho, hai rata akam nita ci. Teant a malupela kam masker uza ?";
        txt3[48] = nama + ": Iya, antes la terminal bis mara ana rapid tini. Hinta akam bis emerana tali.";
        txt3[50] = nama + ": Tapa iwane! Muahara-muahara maar lavanen oco po!";
        txt3[51] = nama + ": Kalau a keluhen akam masker uza, hair anirit la macen tapule. Kois ana ali mau.";
        txt3[52] = nama + ": (Hmmm, kois ana masker talupen em tavar ina).",
        txt3[55] = nama + ": (Hmmm, upatat ana eluhen tapule akam enae).";
        txt3[62] = nama + ": Api kilo ukanitarupaha, Nalu?";
        txt3[64] = nama + ": Rau, kilo ukani tapule olay, Nalu. En ilavani.",
        txt3[68] = nama + ": (Wah, maar katuasi iwa akam masker uza. Ana akam tava hini tapule).";
        txt3[69] = nama + ": Umpe, Palu."; 
        txt3[84] = nama + ": Paun masa utue eb tarupaha, Palu?";
        txt3[86] = nama + ": Rau, en i lavani, Palu.";
        txt3[91] = nama + ": Masker fate tarupaha, Nalu?";
        txt3[93] = nama + ": Rau, masker fate tapule, Nalu. En i lawani.";
        txt3[96] = nama + ": Inait enae ?";
        txt3[98] = nama + ": Wah, ana tenta tava aci.";
    }
    else if (sabu === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Terima kasih!";
        txt1[12] = nama + ": Oh, saya lihat dia di hutan.";
        txt1[14] = nama + ": Owe ne.";
        txt1[15] = nama + ": Nad'e b'èla wutu ub'a hewènga ngati èpu bèni ou. Pake ko uru!";
        txt1[18] = nama + ": Pa mii, Ina?"
        txt1[21] = nama + ": Ta wèli hab'u lonye kae ko.";
        txt1[24] = nama + ": Era hab'u lonye kae?";
        txt1[30] = nama + ": nad'e ne hab'u ne, Bu.";

        // LEVEL 2 text2
        txt2[1] = nama + ": Owe, Ina.";
        txt2[3] = nama + ": Owe, Ina."; 
        txt2[6] = nama + ": Ina, ta ngaa naiki nanne?";
        txt2[8] = nama + ": Owe. Henao ri yaa ta ad'o Covid, ina ee.";
        txt2[11] = nama + ": (B'ote ke, ta pej'èu èni)";
        txt2[12] = nama + ": (B'ote ke, nee do ta hewèka-wèka la pengèdu nga'a unu èpu mone)";
        txt2[14] = nama + ": Ami huba, ad'o yaa ta ma ami ruaj'u. Terima kasih.";
        txt2[17] = nama + ": Ad'o Ama. Terima kasih.";
        txt2[18] = nama + ": (Dou nad'e ad'o do wutu ub'a hewènga. Wèli d'o yaa woaj'u pa d'e.)";
        txt2[21] = nama + ": B'ole b'ani, ad'o de, Ina.";
        txt2[23] = nama + ": Oh, kale ngaa d'o, ina.";
        txt2[24] = nama + ": La mii ne ruj'ara la menara ne?";
        txt2[27] = "Èpu mone : Halo, " +nama+ " Henge ri yaa, ina ou ne do j'ani nga'a wie èpu mone.";
        txt2[28] = nama + ": Owe, Èpu!";
        txt2[29] = nama + ": Nad'e ne nga'a ngati ina wie èpu mone.";
        txt2[32] = nama + ": Owe, èpu.";
        txt2[36] = nama + ": Era womatab'ale, Ina?";
        txt2[38] = nama + ": Owe, Ina. Hengaa ke hewutu ne keb'ue ne?";
        txt2[40] = nama + ": Owe, nad'e ne doi ne, Ina.";
        txt2[43] = nama + ": Era hab'u ei ko Ina?";
        txt2[45] = nama + ": Owe, nad'e ne doi ne.";
        txt2[48] = nama + ": Owe, nad'e ne doi ne.";
        txt2[49] = "Èpu bèni: Halo, " + nama +". Nee b'ara wie ri èpu mone ou?";
        txt2[50] = nama + ": ta la èmu èpu mone ko yaa, Èpu bèni.";
        txt2[52] = nama + ": Nad'e me hab'u nga womatab'ale do lii ta wèle ngati paha ne èpu.";
        txt2[53] = "Èpu bèni: Terima kasih. " +nama + ". Lonye ko we ne womatab'ale d'e.";
        txt2[55] = nama + ": Moko ke yaa ne lonye kae èpu ee.";
        txt2[57] = nama + ": Oo, èpu ee.";
        txt2[60] = nama + ": (Ta pake ei lonye kae ko yaa).";

        // LEVEL 3 text3
        txt3[9] = nama + ": Nad'e, Ama.";
        txt3[15] = nama + ": (B'ote ke, ina nad'e ad'o do wutu ub'a hewènga. Wae d'o yaa ta wèli pa noo).";
        txt3[16] = nama + ": Ad'o, Ina.";
        txt3[22] = nama + ": Nee ta keb'ali ko yaa, era nad'e nengaa ne ngara? Tangaa hakku ta jage we?",
        txt3[41] = nama + ": Ta huli yaa, Ama.";
        txt3[44] = "A'a ari: Hai! " + nama + " Tui dii j'e do peabu!";
        txt3[45] = nama + ": Petuu, tui tèra dii ne do d'o peabu. Tangaa ou ta do d'o wutu ub'a hewènga do nee pa tele ma?";
        txt3[48] = nama + ": Owe, nga do d'o d'ai de ou la tirmenal, pereha uru ko ou. Ngine ne abo d'o ke ne oto ne.";
        txt3[50] = nama + ": B'ole rihi ne pereke ta do pi'a ngaa-ngaa! Juu lod'o juu ae dou do lèka mita toi ri ou!";
        txt3[51] = nama + ": Kinga do d'o wae ou ta wutu ub'a hewènga, j'ane yaa we la wèli nga'a. Ta b'ale ri ma yaa.";
        txt3[52] = nama + ": (Hmmm, ta wèli ma yaa wie roo b'èla wutu ub'a hewènga).";
        txt3[55] = nama + ": (Hmmm, Pi'a d'o b'ara do ta wèli yaa pa d'e).";
        txt3[62] = nama + ": Hengaa kinga hekilo ne nadu'u d'e, Ina?";
        txt3[64] = nama + ": Wèli hekilo we, Ina. Nad'e ne doi ne.";
        txt3[68] = nama + ": (B'ote ke, ama nanni ad'o do wutu ub'a hewènga. Wae d'o yaa ta wèli pa noo).";
        txt3[69] = nama + ": Ad'o, Ama.";
        txt3[84] = nama + ": Tèlu wutu hengaa ne roti nad'e, Ama?";
        txt3[86] = nama + ": Owe, nad'e ne doi ne, Ama.";
        txt3[91] = nama + ": Hengaa keb'ue èpa b'ue b'èla wutu ub'a hewènga nahed'e, Ina?";
        txt3[93] = nama + ":Owe, wèli èpa b'ue b'èla wutu ub'a hewènga, Ina. Nad'e ne doi ne.";
        txt3[96] = nama + ": Era ngaa?";
        txt3[98] = nama + ": B'ote ke, ngine ne peabu ko yaa nga noo.";
    }
    else if (lamaholot === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Terima kasih!";
        txt1[12] = nama + ": Oh, go tede na'e di peneone onẽ neku.";
        txt1[14] = nama + ": He'ẽ.";
        txt1[15] = nama + ": Masker pi nene mo'ẽ sorõ. Mo pake kia!";
        txt1[18] = nama + ": Di ga ne,ema ?";
        txt1[21] = nama + ": Go meri hope sabõ untuk pu'o limate.";
        txt1[24] = nama + ": Sabõ untuk pu'o limate no'õ ka?";
        txt1[30] = nama + ": Pi sabõ pi, ema.";

        // LEVEL 2 text2
        txt2[1] = nama + ": He'ẽ, ema.";
        txt2[3] = nama + ": He'ẽ, ema.";
        txt2[6] = nama + ": ema, ne ana mo'ẽ pe pukẽ a?";
        txt2[8] = nama + ": Oh. Semoga gere Covid la e, ema.";
        txt2[11] = nama + ": (Be, go harus de'ĩ doã-doã pi)";
        txt2[12] = nama + ": (Go mesti klea kete wata sorõ nene)";
        txt2[14] = nama + ": Maaf, go gere hope oba la. Terima kasih.";
        txt2[17] = nama + ": Amu, Bapa. Terima kasih.";
        txt2[18] = nama + ": (Bapa pi gere na'ã masker la pi. Go  gere  hope kayo uã di pi la.)",
        txt2[21] = nama + ": Maaf, go hope la kia, ema.";
        txt2[23] = nama + ": Oh, go gere seba a a di la, ema.";
        txt2[24] = nama + ": Permisi, larã ta'it menara pe tele ga?",
        txt2[27] = "Nene: Halo, " +nama+ " ema moẽ genato wata untuk nene to.";
        txt2[28] = nama + ": He'ẽ, Nene!";
        txt2[29] = nama + ": Pi wata mama sorõ untuk nene.",
        txt2[32] = nama + ": He'ẽ, Nene.";
        txt2[36] = nama + ": Kemati no'õ ka, ema?";
        txt2[38] = nama + ": He'ẽ, ema. Bungkus to'u pira?";
        txt2[40] = nama + ": He'ẽ, pi doi pi, ema.";
        txt2[43] = nama + ": Sabõ wa'ĩ no'õ ka, ema?";
        txt2[45] = nama + ":  He'ẽ, pi doi pi.";
        txt2[48] = "Tetangga: Oh, mo bele kae i. " + nama,
        txt2[49] = "Nene: Halo, " + nama +". Nene mo knato no'õ le take?";
        txt2[50] = nama + ":Go ka'ik nene kia e.";
        txt2[52] = nama + ": Pi sabõ ne kemati nene genato.";
        txt2[53] = "Nene: Terima kasih. " +nama + ". Mo pu'o kia e.";
        txt2[55] = nama + ": Go pu'oro kae, Nene.";
        txt2[57] = nama + ": He'ẽ, Nene.";
        txt2[60] = nama + ": (Go pake sabõ wa'ĩ pi kia).";

        // LEVEL 3 text3
        txt3[9] = nama + ": Pi, Pak.";
        txt3[15] = nama + ": (ema pi gere na'ã masker la. Go gere hope di na'e la).";
        txt3[16] = nama + ": Amu, ema.";
        txt3[22] = nama + ": Go gete kia, pi tempat a? Pukẽ a ne rebe yaga?";
        txt3[41] = nama + ": Go bahã ne ke, Pak.";
        txt3[44] = nama + ": Go bahã ne ke, Pak.";
        txt3[45] = nama + ": He'ẽ i. Ne mo'e pi loẽ di ma'ã masker la?";
        txt3[48] = nama + ": He'ẽ, sebelum ka'ik terminal pe go rapid kia neku. Jadi go ai oto pertama hala neku.";
        txt3[50] = nama + ": eke anggap remeh! Mete lerõ mete aya yang teka penyake pe!";
        txt3[51] = nama + ": Kalu mo'e ma'ã masker la pe, biar go'e yang ka'ik hope wata. Miã baru go balik muri.";
        txt3[52] = nama + ": (Hmmm, pali go hope ne masker untuk ra'e).";
        txt3[55] = nama + ": (Hmmm, ekã yang go mo hope pe di pi amu).";
        txt3[62] = nama + ": Ikã kilo to'u pira ne, ema?";
        txt3[64] = nama + ": He'ẽ, go hope kilo to'u, ema. Pi doi pi.",
        txt3[68] = nama + ": ( Be, bapa pe na'ã masker la ge. Go gere hope di na'e la).";
        txt3[69] = nama + ": Amu, Bapa.";
        txt3[84] = nama + ": Bolo bungkus telo pi ne pira pi, Bapa?";
        txt3[86] = nama + ": He'ẽ. Pi doi na'ẽ pi, Bapa.";
        txt3[91] = nama + ": Masker pa pi ne pira, ema?";
        txt3[93] = nama + ": He'ẽ. Go hope masker pa e, ema. Pi doi na'ẽ pi.";
        txt3[96] = nama + ": Ne a kae pi?";
        txt3[98] = nama + ": Be, go bene herũro neku pera pe.";
    }
    else if (mangBar === true){ 
        // text1
        txt1[9] = nama + ": Terimakasih ge!" ; 
		txt1[12] = nama + ": Eng, ita sina puar hia laku bo.";
		txt1[14] = nama + ": Eng ta ende.";
		txt1[15] = nama + ": Ho masker one mau nene dehau bo. Pake ga!";
		txt1[18] = nama + ": Nia wan, Ende?";
		txt1[21] = nama + ": Kudut weli sabun cuci lime.";
		txt1[24] = nama + ": Mangga sabun cuci lime?";
		txt1[30] = nama + ": Ho sabun cuci lime, Ende.";
        // txt2 
        txt2[1] = nama + ": Iyo ende.";
        txt2[3] = "At supu mai: Oe, " + nama + " Denge-denge, hia ended joko hena covid.";
        txt2[6] = nama + ": Ende, ata co mantar dite?";
        txt2[8] = nama + ": Oh. Porong toe covid, e ende.";
        txt2[11] = nama + ": (Ole, tadang koe kaeng agu ga)";
        txt2[12] = nama + ": (Ole, kudu gelang koe kudut ngo ba hang diha empo lopo di aku e";
        txt2[14] = nama + ": Neka rabo, toe kudut rewos aku. Terimakasih.";
        txt2[17] = nama + ": Toe mangan ema. Terimakasih.";
        txt2[18] = nama + ": (Hi ema ho toe pake masker. Toe ngoeng weli wua ce'e ho'o aku)";
        txt2[21] = nama + ": Neka rabo ende, toe di weli.";
        txt2[23] = nama + ": Oh, toe manga kawe apa ende.";
        txt2[24] = nama + ": Neka rabo, nia salang nger sina menara e?";
        txt2[27] = "Ema lopo: Halo, " +nama+ " Ome neho nuk laku, ende de hau mangga teing bekal latangempo lopom.";
        txt2[28] = nama + ": Eng, Empo!";
        txt2[29] = nama + ": Ho hang latang ite one mai hia ende.";
        txt2[32] = nama + ": Eng ta, Empo.";
        txt2[36] = nama + ": Manga tomat ende?";
        txt2[38] = nama + ": Iyo ende. Pisa harga ce bungkus?";
        txt2[40] = nama + ": Ngitun, ho seng koen.";
        txt2[43] = nama + ": Mangga sabung cair ko ende?";
        txt2[45] = nama + ": Iyo. Ho'o seng koen.";
        txt2[48] = "At supu mai: Oh, tua kaut hau ga. " + nama;
        txt2[49] = "Ende lopo: Halo, " + nama +". Calam manga titipan one mai empo lopom bo?";
        txt2[50] = nama + ": Kudut ngo sina mbaru diha empo di aku.";
        txt2[52] = nama + ": Ho'o sabun agu tomat sina mai pasar titipan diha empo lopo.";
        txt2[53] = "Ende lopo: Terima kasih. " +nama + ". Samo koe lime di.";
        txt2[55] = nama + ": Poli laku wasad ge empo.";
        txt2[57] = nama + ": Eng, empo.";
        txt2[60] = nama + ": (Aku pake sabun cair di e).";
        // txt3
        txt3[9] = nama + ": Ho'o e, Ema.";
        txt3[15] = nama + ": (Ole, ata tua ende ho to pake masker . Ogo aku weli agu hia e).";
        txt3[16] = nama + ": Toe, Ende.";
        txt3[22] = nama + ": Tempat apo ho? Co tara lamin keta?";
        txt3[41] = nama + ": Aku salah lako bo.";
        txt3[44] = "Asekae: Oe! " + nama + " danong to sumang ge!";
        txt3[45] = nama + ": Eng e, danong toe sumang ga. Co toe tara weki masker do lako pe'ang e?";
        txt3[48] = nama + ": Iyo, eme kudu ngo sina termina  rapid di laku di. Kong neka ledong le oto ata pertaman keta.";
        txt3[50] = nama + ": Neka ngitu e! Kong bae le hau, neteng leso do ata hena nemba ho!";
        txt3[51] = nama + ": Eme ogo hau weki  masker, kong aku ked ata weli hang hitu ga. Manga ket kole se aku tong.";
        txt3[52] = nama + ": (Asa keta, aku kudut weli masker latang ise tong).";
        txt3[55] = nama + ": (Hmmm, barang hot nanang weli daku toe mangga no).";
        txt3[62] = nama + ": Pisa harga ikang so, Ende?";
        txt3[64] = nama + ": Oh ngitun, welin sekilon ked Ende, ho seng koen.";
        txt3[68] = nama + ": (Ole, ata tua ema hio toe weki masker. Ogok weli agu hia ae).";
        txt3[69] = nama + ": Toe, Ema.";
        txt3[84] = nama + ": Pisa harga telu bungkus roti so , Ema?";
        txt3[86] = nama + ": Oh ngitun, ho song de Ema.";
        txt3[91] = nama + ": Pisa harga pat masker, Ende?";
        txt3[93] = nama + ": Ngitun, aku weli pat masker so, ho'os seng koen.";
        txt3[96] = nama + ": Ata so bo ga?";
        txt3[98] = nama + ": Ole, aku ho di sumang iha bao.";
	}
    else if (mangTeng === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Terima kasih!";
        txt1[12] = nama + ": Oh, ita sina puar laku.";
        txt1[14] = nama + ": Io nganceng.";
        txt1[15] = nama + ": Ho'o masker one mai nenek dite. Pake ga!";
        txt1[18] = nama + ": Nia wan , Ende?"
        txt1[21] = nama + ": Kut weli sabun cuci lime.";
        txt1[24] = nama + ": Manga sabun samo lime?";
        txt1[30] = nama + ": Ho'o sabun, Ende.";

        // LEVEL 2 text2
        txt2[1] = nama + ": Ioo, Ende.";
        txt2[3] = nama + ": Ioo, Ende.";
        txt2[6] = nama + ": Ende, ata co'o anak hitu?";
        txt2[8] = nama + ": Oh. Semoga toe Covid e, Ende.";
        txt2[11] = nama + ": (Waduh, aku paka neka di ruis tau e)";
        txt2[12] = nama + ": (Wah, aku paka gelang-gelang podo hang de ema lopo )";
        txt2[14] = nama + ": Neka rabo, aku toe kut berobat. Terima kasih.";
        txt2[17] = nama + ": Toe Pak. Terima kasih.";
        txt2[18] = nama + ": (Ema ho'o toe pake masker. Aku toe weli wuah no'o.)";
        txt2[21] = nama + ": Neka rabo, toen di, Ende.";
        txt2[23] = nama + ": Oh, toe manga apa-apa, Ende.";
        txt2[24] = nama + ": Tabe, salang nger sina menara lewat nia, e?"
        txt2[27] = "Ema Lopo: Halo, " +nama+ " Nuk de Ema , Endem ma titip bokong latang ema lopom.";
        txt2[28] = nama + ": Iyo, Ema Lopo!";
        txt2[29] = nama + ": Ho'os bokong latang ite Ema Lopo.";
        txt2[32] = nama + ": Io nganceng, Ema.";
        txt2[36] = nama + ": Manga tomat ko, Ende?"
        txt2[38] = nama + ": Di'a, Ende. Pisas ce bungkus?";
        txt2[40] = nama + ": Ho'o sengn, Ende.";
        txt2[43] = nama + ": Mangan sabun cair, Ende?";
        txt2[45] = nama + ": Oke, ho'o sengn.";
        txt2[48] = nama + ": Oke, ho'o sengn.";
        txt2[49] = "Ende Lopo: Halo, " + nama +". Cala manga titipan one mai Ema Lopom?";
        txt2[50] = nama + ": Aku ngo sina tempat de Ema Lopo di, Ende.";
        txt2[52] = nama + ": ho'os sabun agu tomat sina mai pasar titip de Ema Lopo.";
        txt2[53] = "Ende Lopo: Terima kasih. " +nama + ". Tolong cucis di, e.";
        txt2[55] = nama + ": Poli cucin laku, Ende.";
        txt2[57] = nama + ": Di'a ge, Ema.";
        txt2[60] = nama + ": (Aku pake cairan pembersih dulu).";

        // LEVEL 3 text3
        txt3[9] = nama + ": Ho'o, Pak.";
        txt3[15] = nama + ": (Ole, Ende ho'o toe pake masker. Aku toe weli agu hia e).";
        txt3[16] = nama + ": Toe, Ende.";
        txt3[22] = nama + ": Cala ngaceng rei, tempat apa ho'o? Co'o tara ma ata jaga?";
        txt3[41] = nama + ": Aku weleng, Pak.";
        txt3[44] = "Saudara: Hai! " + nama + " beheng toe ma cumang!";
        txt3[45] = nama + ": Io, beheng toe cumang ga. Cala be peang ite toe pake masker??";
        txt3[48] = nama + ": Iyo, sebelum ngo ne terminal aku rapid di bo. Jadin ledong le bus te olon.";
        txt3[50] = nama + ": Neka anggap remeh! Kut baen neteng leso tambang terus hot tertular!";
        txt3[51] = nama + ": Eme toe ngoeng pake masker dite, kong aku kaut ata ngo weli hang. Kembali kole aku tong.";
        txt3[52] = nama + ": (Hmmm, aku weli masker kut ise tong).";
        txt3[55] = nama + ": (Hmmm, toe ma no'on barang hot kut weli laku).";
        txt3[62] = nama + ": Pisa hargan ce kilo ikang so'o, Ende?";
        txt3[64] = nama + ": Weli ce kilon e, Ende. Ho'os sengn.";
        txt3[68] = nama + ": (Ole, toe ma pake masker ema hio. Aku toe ma belanja one hia e).";
        txt3[69] = nama + ": Toe, Ema.";
        txt3[84] = nama + ": Pisa hargan telu bungkus roti so'o, Ema?";
        txt3[86] = nama + ": Ho'os sengn, Ema.";
        txt3[91] = nama + ": Pisa hargan pat masker, Ende?";
        txt3[93] = nama + ": Aku weli pat masker, Ende. Ho'os sengn.";
        txt3[96] = nama + ": Ata co'o ho'o?";
        txt3[98] = nama + ": Ole, bao di cumang hia aku.";
    }
    // ambon & papua
    else if (papua === true){
                // (LEVEL 1) text1
        txt1[9] = nama + ": Terima kasih!" ;
        txt1[12] = nama + ": Oh, sa liat de di hutan.";
        txt1[14] = nama + ": Yombex.";
        txt1[15] = nama + ": Ini masker dari ko pu nenek. Pake dulu!";
        txt1[18] = nama + ": Di mana, Mama?";
        txt1[21] = nama + ": Mo beli sabun cuci tangan.";
        txt1[24] = nama + ": Ada sabun cuci tangan kah?";
        txt1[30] = nama + ": Ini sabun, Mama.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Oke, Mama.";
        txt2[3] = nama + ": Oke, Mama.";
        txt2[6] = nama + ": Mama, anaknya kenapa?";
        txt2[8] = nama + ": Oh. Semoga bukan Covid e, Mama.";
        txt2[11] = nama + ": (Waduh, sa harus jaga jarak ni)";
        txt2[12] = nama + ": (Aduh, sa harus cepat-cepat antar Tete pu makanan)";
        txt2[14] = nama + ": Maaf, sa tra berobat. Terima kasih.";
        txt2[17] = nama + ": Tidak Bapa. Terima kasih.";
        txt2[18] = nama + ": (Bapa ini tra pake masker. Sa tra mau beli buah di sini.)";
        txt2[21] = nama + ": Minta maaf, tidak beli dulu, Mama.";
        txt2[23] = nama + ": Oh, tra cari apa-apa, Mama.";
        txt2[24] = nama + ": Permisi, jalan ke menara lewat mana e?";
        txt2[27] = "Kakek: Halo, " +nama+ " Tete ingat, ko pu mama ada titipkan bekal untuk Tete.";
        txt2[28] = nama + ": Iyo, Tete!";
        txt2[29] = nama + ": Ini bekal dari Mama untuk Tete.";
        txt2[32] = nama + ": Yombex, Tete.";
        txt2[36] = nama + ": Ada tomat, Mama?";
        txt2[38] = nama + ": Oke, Mama. 1 bungkus ini berapa e?";
        txt2[40] = nama + ": Oke, ini uangnya, Mama.";
        txt2[43] = nama + ": Sabun cair ada kah, Mama?";
        txt2[45] = nama + ": Oke, ini uangnya.";
        txt2[48] = nama + ": Oke, ini uangnya.";
        txt2[49] = "Nenek: Halo, " + nama +". Apa ada titipan dari kakekmu?";
        txt2[50] = nama + ": Sa pergi ke Tete pu tempat dulu, Nene.";
        txt2[52] = nama + ":  Ini tete pu titipan sabun dan tomat dari pasar.";
        txt2[53] = nama + ":  Ini tete pu titipan sabun dan tomat dari pasar.";
        txt2[55] = nama + ": Sa su cuci, Nene.";
        txt2[57] = nama + ": Siap, Tete.";
        txt2[60] = nama + ": (Sa pake cairan pembersih dulu).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Ini, bapa.";
        txt3[15] = nama + ": (Wah, Mama ni de tra pake masker. Sa tra akan belanja di dia sudah).";
        txt3[16] = nama + ": tidak, Mama.";
        txt3[22] = nama + ": Permisi mau tanya, ini tempat apa kah? Kenapa dijaga?";
        txt3[41] = nama + ": Saya tersasar, Bapa.";
        txt3[44] = nama + ": Saya tersasar, Bapa.";
        txt3[45] = nama + ": Ya, lama tra jumpa. Bah Ko di luar baru tra pake masker?";
        txt3[48] = nama + ": Iya, sebelum ke terminal bis sa rapid dulu. Jadi tadi sa ketinggalan bus pertama.";
        txt3[50] = nama + ": Jangan Jangan anggap enteng! Makin hari Makin banyak yang kena penyakit ini!";
        txt3[51] = nama + ": Kalo ko tra mau pake masker, biar sa saja yang beli makan. Nanti sa kembali lagi.";
        txt3[52] = nama + ": (Hmmm, nanti sa beli masker untuk dorang).";
        txt3[55] = nama + ": (Hmmm, barang yang sa mo beli tra ada di sini).";
        txt3[62] = nama + ": Berapa harga 1 kilo ikan, Mama?";
        txt3[64] = nama + ": Oke, beli satu kilo e, Mama. Ini uangnya.";
        txt3[68] = nama + ": (Wah, bapa itu tra pake masker. Sa tra mau belanja di dia).";
        txt3[69] = nama + ": Tidak, Bapa.";
        txt3[84] = nama + ": Tiga bungkus roti ini berapa kah, Kaka?";
        txt3[86] = nama + ": Baik, ini uangnya, bapa.";
        txt3[91] = nama + ": Berapa harga empat masker, Mama?";
        txt3[93] = nama + ": Oke, sa beli empat masker, Mama. Ini uangnya.";
        txt3[96] = nama + ": Ada apa kah?";
        txt3[98] = nama + ": Aduh, sa baru ketemu dia tadi.";
    }
    else if (biak === true){
                // (LEVEL 1) text1
        txt1[9] = nama + ": Kasu masa!";
        txt1[12] = nama + ": Woh, ya manu i ro sup.";
        txt1[14] = nama + ": Imbo injado.";
        txt1[15] = nama + ": Ine masker kpum byuk isine, be pakai resari!";
        txt1[18] = nama + ": Mob ri sari, Bin syowi?";
        txt1[21] = nama + ": Yabe yakobs sabun beban bramin.";
        txt1[24] = nama + ": Sabun beban bramin nasya?";
        txt1[30] = nama + ": Sabun ine, Bin syowi.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Imbo, Bin syowi.";
        txt2[3] = nama + ": Imbo, Bin syowi.";
        txt2[6] = nama + ": Bin syowi, Rowaya rosa befawi?";
        txt2[8] = nama + ": Yeh komgakwariro Covid ine, Bin syowi.";
        txt2[11] = nama + ": (Aye, ayakako yokman warku swafe ine!)";
        txt2[12] = nama + ": (Who, yasau sawe yun pyam anan apus byena)";
        txt2[14] = nama + ": Yormaf, yun aryBin syowi ba. Kasu masa.";
        txt2[17] = nama + ": Aroba, Amber. Kasu masa";
        txt2[18] = nama + ": (Inon ine bye pake maskerba.  Yakobs aibon ro di neba.)";
        txt2[21] = nama + ": Yormaf, aroba Bin syowi.";
        txt2[23] = nama + ": Mbo, ramoboba, Bin syowi.";
        txt2[24] = nama + ": Permisi, jamraso menara ya ra so?";
        txt2[27] = "Apus: Be rarso, " +nama+ " yafawi, snanu bye robeyan yenafa aupyana.";
        txt2[28] = nama + ": Imbo, Apus!";
        txt2[29] = nama + ": Au nasnane  Bin syowi byuk be Mansar au.";
        txt2[32] = nama + ": Imbo, injado Mansar.";
        txt2[36] = nama + ": Tomat ro siswaya, Bin syowi?";
        txt2[38] = nama + ": Ipyum, Bin syowi. Kan kbane ine fis?";
        txt2[40] = nama + ": Imboi, Samfur ine, Bin syowi.";
        txt2[43] = nama + ": Sabun bebe war-war ro naysake, Bin syowi?";
        txt2[45] = nama + ": Ipyum kaku, samfur ine.";
        txt2[48] = nama + ": Ipyum kaku, samfur ine.";
        txt2[49] = "Insar: Rarso, " + nama +". Faremno nraker Mansar?";
        txt2[50] = nama + ": Yarabe rum Apus rosari, insar.";
        txt2[52] = nama + ": Ini  Ine sabun ma tomat apus fyarem ro pasar mua.";
        txt2[53] = nama + ":  Ine sabun ma tomat apus fyarem ro pasar mua.";
        txt2[55] = nama + ": Yabansi kwar, Insar.";
        txt2[57] = nama + ": Imbo, Mansar.";
        txt2[60] = nama + ": (Yaban brasi kuker sabun bebe).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Isone, Amber.";
        txt3[15] = nama + ": (Wah, Bin syowi ine bye pakaia masker ba. Ya, fababyan ro iba).";
        txt3[16] = nama + ": Aroba, Bin syowi.";
        txt3[22] = nama + ": Mgo fuken , ine mob risarine? Rosa befnafa sman warki?";
        txt3[41] = nama + ": Yabar, Amber.";
        txt3[44] = nama + ": Yabar, Amber.";
        txt3[45] = nama + ": Mboi, fro kwar kas row kaba, be ro bandi mgo ya mo pakai masker robae?";
        txt3[48] = nama + ": Ne, ro fyor mgo rabe rum yabe rapid mgo resari.Insanja yabe raryeru bus beponi.";
        txt3[50] = nama + ": Mandri awer!Ras be ras bedufsy sibore wafawi kwar!";
        txt3[51] = nama + ": Imboi mgo meiru mgo pakai masker baido.";
        txt3[52] = nama + ": (Hmmm, nyakobsu masker nobesko).";
        txt3[55] = nama + ": (Hmmm, barang yabe yakobes ya ryo dineba).";
        txt3[62] = nama + ": Ine sine kilo eser ido fis binsyowi?";
        txt3[64] = nama + ": Ipyum syadi, kwobs kilo eser monda, bin syowi.";
        txt3[68] = nama + ": (Yeh sinan iwa dakbe pakai maskerba. Yakobes ro ryoriba).";
        txt3[69] = nama + ": Aroba, Amber.";
        txt3[84] = nama + ": Kanggban dikior mamami naine fis, Amber?";
        txt3[86] = nama + ": Isow kwar kumpan ine, Naek.";
        txt3[91] = nama + ": Masker difiak ido fis, Bin syowi?";
        txt3[93] = nama + ": Isrow kwar, yakobs masker difiak, Bin syowi.";
        txt3[96] = nama + ": Rosari syawer?";
        txt3[98] = nama + ": Boo, insanja yasrow baboi.";
    }
    else if (lani === true){
                // (LEVEL 1) text1
        txt1[9] = nama + ": Keyage waaa yoriyak!";	
        txt1[12] = nama + ": Hoo, Ebe eyonggame time nenegen kagarak.";
        txt1[14] = nama + ": Endak aret.";
        txt1[15] = nama + ": Inetenggen paga nabeka yi kat kowogogelo nen pagagerak. Yiru nduk'waak!";
        txt1[18] = nama + ": Ngeme ngwe, Nagalo?";
        txt1[21] = nama + ": Top inenggi koka kuniwagarak.";
        txt1[24] = nama + ": Top inenggi koka ambi agarik?";
        txt1[30] = nama + ": Nagalo, top enogo ebe yi.";
        // (LEVEL 2) text2
        txt2[1] = nama + ": Nagalo, Opp aret oo.";
        txt2[3] = nama + ": Nagalo, Opp aret oo.";
        txt2[6] = nama + ": Elege ti nonggop ekerak, Nagalo?";
        txt2[8] = nama + ": Eyeee. Nagalo, Kungi andi Covid nogo leek aruak ooo.";
        txt2[11] = nama + ": (Eyaaa, togop keenok an nebe abu tayo ikit ooo)";
        txt2[12] = nama + ": (Aeee, an mondok kwee anggok ambi mbet-mbet waganombanok nakir)";
        txt2[14] = nama + ": Aeee an maluk ekirak ooo, an andibaga nolik ekirak. Waaa kaonak.";
        txt2[17] = nama + ": Leek oo nogoba. Waa kaonak.";
        txt2[18] = nama + ": (App yi nogo inetenggen nabeka naberulik. An eyonggen mbanak yime kuniwage leek.)";
        txt2[21] = nama + ": Aeee waaa, Nagalo. Yogondak ambi kuniyak leek ooo. ";
        txt2[23] = nama + ": Aee, Nagal. An ambi korarit nege leek ooo.";
        txt2[24] = nama + ": Aee norewi, tuu oo ngorek wurik me time  norak ngebaga?";
        txt2[27] = "Narombo nen: kolaga yi wae, " +nama+ " An karombo nenu tii, kaat Kagalo nen. Karombo namendek katt paga napiwagarak.";
        txt2[28] = nama + ": Obet aret, nowogogwelo!";
        txt2[29] = nama + ": An nagalo nen kamedek pagagerak nogo yio.";
        txt2[32] = nama + ": Endak aret, Narombo.";
        txt2[36] = nama + ": Nagalo, Tomatto ambi agarik?";
        txt2[38] = nama + ": Opp aret, Nagalo. Lingginik yogopp keenok onggo mande?";
        txt2[40] = nama + ": Opp aret, Mani abbe yi nde, Nagalo.";
        txt2[43] = nama + ": Top amburu yenggenak  wonage, Nagalo?";
        txt2[45] = nama + ": Opp aret, manni ebbe yii.";
        txt2[48] = nama + ": Opp aret, manni ebbe yii.";
        txt2[49] = "Ninowogogwelo  nen: kolaga, " + nama +". Nonggop kat karombo ambi panegerak kagan?";
        txt2[50] = nama + ": An Narombo wonageme ndukak naa, Nowogogwelo.",
        txt2[52] = nama + ": Top inom tomatto inom pegerak yio Narombo.";
        txt2[53] = nama + ": Top inom tomatto inom pegerak yio Narombo.";
        txt2[55] = nama + ": An abbok yii kokirak, nowogogwelo.";
        txt2[57] = nama + ": Nowogogwelo, Opp aret.";
        txt2[60] = nama + ": (An amburu inenggi mbelengga ambi ndukak erikit).";
        // (LEVEL 3) text3
        txt3[9] = nama + ": Abe yii, Nogoba.";
        txt3[15] = nama + ": (Eyee, Kwe yii inetenggen paga nabeka yirulik ekerak. An aat nimbirak kuninorak nebi ooh).";
        txt3[16] = nama + ": leek, Nagalo.";
        txt3[22] = nama + ": Yime nonggopp ekomengganom? Tinuk nonggopp nduk irum wenage, yinuk kiin abbu wanaburak?";
        txt3[41] = nama + ": Nogobba, An tuu kobbak agarak.";
        txt3[44] = nama + ": Nogobba, An tuu kobbak agarak.";
        txt3[45] = nama + ": Yaa, Maantogon abbu lambunggalek wonogorak. Eyaa kiit endekem yime mondok inetenggen paga nabeka naberalek aret nugwi?";
        txt3[48] = nama + ": Eyaa nore, mobin kolegalo ko'wakemeggenom aoo'nagalek logonet kamiya ndukak pekorak. Mobin kolegalo paga norak elambirik agarak paga neen yagi ooo.";
        txt3[50] = nama + ": Wee yuggwi mbakak erugun oo! Kungwi andi nogo ambi obba agak kollu-kimme abugwa agge kenu!";
        txt3[51] = nama + ": Ndi kaat inetenggen paga nabeka naberiyak kebbi keenok, opp aret an mban mbi aret kunikit. Tinuk an melanuk weragin.";
        txt3[52] = nama + ": (Hmmm, An nen inetenggen paga nabeka kundirakit).";
        txt3[55] = nama + ": (Hmmm, an kuniyak mbakirak ebbe yime leek ooo).";
        txt3[62] = nama + ": Nagalo, Yikkwe aninggin ambitak keenok mande?";
        txt3[64] = nama + ": Opp aret, aniggin ambiret keero wakit, Nagalo. Ndee manni ebbe.";
        txt3[68] = nama + ": (Eyaa, App tii inetenggen paga nabeka naberarulik. An app tii nimbirak kuninorak nebi).";
        txt3[69] = nama + ": Leek, Nogoba.";
        txt3[84] = nama + ": Nogoba, Rotti werarak kenagandak lingginik kenok onggo mande?";
        txt3[86] = nama + ": Opp aret, manni ebbe yii, Nogoba.";
        txt3[91] = nama + ": Nagalo, inetenggen pagga nabeka mbere linggik-mbere linggik keenok onggo mande?";
        txt3[93] = nama + ": Opp aret, an inetenggen pagga nabeka mbere linggik-mbere linggik kerro kuniyak, Nagalo. Manni ebbe yii.";
        txt3[96] = nama + ": Nano wonage yii?";
        txt3[98] = nama + ": Eyahh, An nimbirak awoo aret lambunggirak bee.";
    }
    // nasional dan asing
    else if (english === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Thank you!"; 
        txt1[12] = nama + ": Oh, I saw him in the forest."; 
        txt1[14] = nama + ": Of course.";
        txt1[15] = nama + ": This mask is from your grandmother. Wear it!"; 
        txt1[18] = nama + ": Where should I buy it?"; 
        txt1[21] = nama + ": I want to buy a bottle of handsoap."; 
        txt1[24] = nama + ": Do you sell handsoap?"; 
        txt1[30] = nama + ": Here is the soap, Mom."; 

        // LEVEL 2 text2
        txt2[1] = nama + ": Okay, Mom.";
        txt2[3] = nama + ": Okay, Mom.";
        txt2[6] = nama + ": What happened to your child, Ma'am?";
        txt2[8] = nama + ": Oh. I hope it is not Covid.";
        txt2[11] = nama + ": (Ugh, I have to keep my distance from him)";
        txt2[12] = nama + ": (Oh, I have to send this food to my grandfather soon.)";
        txt2[14] = nama + ": I'm sorry, I don't need to see a doctor. Thank you!";
        txt2[17] = nama + ": No, Sir. Thank you!";
        txt2[18] = nama + ": (This man isn't wearing a mask. I won't buy fruit from him.)";
        txt2[21] = nama + ": I'm sorry, not buying, Ma'am.";
        txt2[23] = nama + ": Oh, nothing,  Ma'am.";
        txt2[24] = nama + ": Excuse me. How can I go to the tower?";
        txt2[27] = "Grandfather: Hello, " +nama+ " if I'm not mistaken, your mom asked you to deliver a lunch box for me.";
        txt2[28] = nama + ": Yes, Grandpa!";
        txt2[29] = nama + ": This lunch box is from Mom, grandpa.";
        txt2[32] = nama + ": Of course, Grandpa.";
        txt2[36] = nama + ": Do you sell tomotoes, Ma'am?";
        txt2[38] = nama + ": Okay, Ma'am. How much does each package cost?";
        txt2[40] = nama + ": Okay, here is the money, Ma'am.";
        txt2[43] = nama + ": Do you sell liquid soap, Ma'am?";
        txt2[45] = nama + ": Okay, here is the money.";
        txt2[48] = nama + ": Okay, here is the money.";
        txt2[49] = "Grandmother: Hello, " + nama +". Did your grandfather ask you to bring something for me?";
        txt2[50] = nama + ": I will go to Grandpa's place first.";
        txt2[52] = nama + ": Here are the soap and tomatoes from the market that Grandpa asked me to deliver it to you.";
        txt2[53] = "Grandmother: Thank you, " +nama + "! Please wash them first!";
        txt2[55] = nama + ": I have washed them, Grandma.";
        txt2[57] = nama + ": Okay, Grandpa.";
        txt2[60] = nama + ": (I'll use some hand sanitizer first).";

        // LEVEL 3 text3
        txt3[9] =  nama + ": Here it is.";
        txt3[15] = name+ ": (Ugh, this lady is not wearing a mask. I'm not buying anything from her).";
        txt3[16] =  nama + ": No, thanks!";
        txt3[22] = nama + ": Excuse me. What is this place? Why is it guarded??";
        txt3[41] = nama + ": I got lost, Sir.";
        txt3[44] = nama + ": I got lost, Sir.";
        txt3[45] = nama + ": Yeah, it has been a while. Why aren't you wearing a mask while outside?";
        txt3[48] = nama + ": Yeah, before going to the bus station, I took a rapid test. So, I missed the first bus.";
        txt3[50] = nama + ": Do not underestimate the disease. More and more people have been infected!";
        txt3[51] = nama + ": If you don't want to wear a mask, let me go and get the food. I'll be back.";
        txt3[52] = nama + ": (Umm, I'll also get a mask for them.).";
        txt3[55] = nama + ": (Umm, I don't see what I need here).";
        txt3[62] = nama + ": How much is a kilogram of fish, Ma'am?";
        txt3[64] = nama + ": Okay, I'll get a kilo. Here is the money.";
        txt3[68] = nama + ": (Oh, that man isn't wearing a mask. I'm not going to buy anything from him.).";
        txt3[69] = nama + ": No, thank you!";
        txt3[84] = nama + ": How much do these packages of bread cost?";
        txt3[86] = nama + ": Okay, here is the money.";
        txt3[91] = nama + ": How much do four masks cost?";
        txt3[93] = nama + ": Okay. I'll get them. Here is the money.";
        txt3[96] = nama + ": What is going on?";
        txt3[98] = nama + ": Oh, no! I have just met him.";
    }
    else if (chinese === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": 谢谢！";
        txt1[12] = nama + ":哦，我有看见他在森林里走走。";
        txt1[14] = nama + "：当然啦。"; 
        txt1[15] = nama + "：你婆婆叫你戴这块口罩呀。";
        txt1[18] = nama + "：在哪里买啊？";
        txt1[21] = nama + "：我要买一瓶洗水液。";
        txt1[24] = nama + ":你有没有免洗洗水液？";
        txt1[30] = nama + ":妈，我买了洗手液。";

        // LEVEL 2 text2
        txt2[1] = nama + "：好啊。";
        txt2[3] = nama + "：好啊。";
        txt2[6] = nama + ":阿姨，你孩儿生什么病啊？";
        txt2[8] = nama + "：哦，希望不是冠状病啊。";
        txt2[11] = nama+ "：（唉，我应该保持身体距离）";
        txt2[12] = nama+":（唉,我应该快快地把这盒饭送给公公。）";
        txt2[14] = nama+":对不起，我没有去检查。谢谢！";
        txt2[17] = nama+":没有啊，老伯伯。谢谢！";
        txt2[18] = nama+"：（这老伯伯没有戴口罩。我不跟他买吧。）";
        txt2[21] = nama+"：对不起，没有找水果啊，阿姨。";
        txt2[23] = nama+ "：先看看啊，阿姨。";
        txt2[24] = nama+ "：请问，塔楼在哪里呀？"
        txt2[27] = "公公：你好，"+nama+ "妈妈有没有叫你带盒饭给我吗？";
        txt2[28] = nama + "：有啊！";
        txt2[29] = nama+ "：这盒饭是妈妈给你的。";
        txt2[32] = nama + "：好把。";
        txt2[36] = nama+ "：阿姨，有番茄吗？";
        txt2[38] = nama+ "：一斤番茄多少钱？";
        txt2[40] = nama+ "：好，买一斤吧。";
        txt2[43] = nama+ "：有卖肥皂吗？";
        txt2[45] = nama+ "：好，买一瓶吧。";
        txt2[48] = nama+ "：好，买一瓶吧。";
        txt2[49] = "婆婆：你好，"+nama+ "。公公有叫你买东西吗？";
        txt2[50] = nama+ "：我先去找公公把。";
        txt2[52] = nama+ "：这个是公公叫我买给你的番茄和肥皂。";
        txt2[53] = "婆婆：谢谢！"+nama+ "。嫌隙它好吗！";
        txt2[55] = nama + "：洗好了呀。";
        txt2[57] = nama + "：好啊。";
        txt2[60] = nama+ "：（我先用免洗洗手液洗手吧）。";

        // LEVEL 3 text3
        txt3[9] = nama+ "：好。";
        txt3[15] = nama+ "：（唉，这个阿姨没有戴口罩。不跟他买吧）。";
        txt3[16] = nama + "：不买啊，多谢！";
        txt3[22] = nama+ "：请问，这是什么地方？为什么不可以进去？";
        txt3[41] = nama+ "：我失路呀，先生。";
        txt3[44] = nama+ "：我失路呀，先生。";
        txt3[45] = nama+ "：好久不见。你为什么出门没有戴口罩呢？";
        txt3[48] = nama + "：对不起，去巴士站之前，我先去医生检查。因而，我太迟坐巴士。";
        txt3[50] = nama+ "：别看小这种病呀。由于这冠状病毒，每天去世的人越来越多！";
        txt3[51] = nama+ "：要是你不要戴口罩，我来给你买食物吧。等下我会到回来。";
        txt3[52] = nama+ "：（嗯，我应该给他们买口罩）。";
        txt3[55] = nama+ "：（嗯，看起来他没有卖食物。）";
        txt3[62] = nama + "：阿姨，这条鱼一斤多少钱呢？";
        txt3[64] = nama+ "：好，我买一斤吧。";
        txt3[68] = nama+ "：（他没有戴口罩，我不跟他买吧。）";
        txt3[69] = nama+ "：没有啊，谢谢。";
        txt3[84] = nama+ "：这一包面包多少钱？";
        txt3[86] = nama+ "：好，买一包吧。";
        txt3[91] = nama+ "：四块口罩多少钱？";
        txt3[93] = nama+ "：好，买四块吧。"
        txt3[96] = nama+ "：发生什么事呀？";
        txt3[98] = nama+ "：哎呀！我才见到他们。";
    }
    else if (italia === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": Grazie!";
        txt1[12] = nama + ": Ah si, l'ho visto nella foresta.";
        txt1[14] = nama + ": Certo."
        txt1[15] = nama + ": Questa mascherina te la manda tua nonna. Indossala subito!";
        txt1[18] = nama + ": Dove lo compro, Mamma?";
        txt1[21] = nama + ": Vorrei comprare il sapone per le mani.";
        txt1[24] = nama + ": Avete il sapone per le mani?";
        txt1[30] = nama + ": Ecco il sapone, Mamma.";

        // LEVEL 2 text2
        txt2[1] = nama + ": Va bene, Mamma.";
        txt2[3] = nama + ": Va bene, Mamma.";
        txt2[6] = nama + ": Signora, cos'ha suo figlio?";
        txt2[8] = nama + ": Speriamo bene che non sia il Covid, Signora.";
        txt2[11] = nama + ": (Accidenti, qui si che devo stare attendo a mantenere distanziamento sociale )";
        txt2[12] = nama + ": (Accidenti, devo sbrigarmi a portare il pranzo al Nonno)";
        txt2[14] = nama + ": Oh no, non devo farmi curare. Grazie";
        txt2[17] = nama + ": Niente, la ringrazio"
        txt2[18] = nama + ": (Questo signore non indassa la mascherina, non la compro la frutta qui.)";
        txt2[21] = nama + ": No, grazie signora.";
        txt2[23] = nama + ": Non mi serve niente, Signora.";
        txt2[24] = nama + ": Scusi, qual è la strada per il faro?";
        txt2[27] = "Nonno: Ciao, " +nama+ " Se ricordo bene, mamma ti ha dato qualcosa per me.";
        txt2[28] = nama + ": Si, Nonno!";
        txt2[29] = nama + ": Questo è il pacchetto da parte di mamma per te.";
        txt2[32] = nama + ": Certo, Nonno!";
        txt2[36] = nama + ": Ha dei pomodori, Signora?";
        txt2[38] = nama + ": Bene. Quanto costa un pacchetto?";
        txt2[40] = nama + ": Va bene, ecco i soldi, Signora.";
        txt2[43] = nama + ": Ha del sapone linquido, Signora?";
        txt2[45] = nama + ": Ok, ecco i soldi.";
        txt2[48] = nama + ": Ok, ecco i soldi.";
        txt2[49] = "Nonna: Mamma ti ha dato qualcosa per il Nonno?";
        txt2[50] = nama + ": Nonna, devo andare a casa del Nonno.";
        txt2[52] = nama + ": Questi sono il sapone liquido e i pomodori presi al mercato per il Nonno.";
        txt2[53] = "Nonna: Grazie. " +nama + ". Lavali prima, va bene?."
        txt2[55] = nama + ": Li ho lavati, Nonna.";
        txt2[57] = nama + ": Va bene, Nonno.";
        txt2[60] = nama + ": (è meglio usare l'igenizzante per le mani prima di tutto).";

        // LEVEL 3 text3
        txt3[9] = nama + ": Ecco a lei.";
        txt3[15] = nama + ": (Incredibile, la signora non indossa la mascherina.E io la spesa qui non ce la faccio).";
        txt3[16] = nama + ": Niente, grazie.";
        txt3[22] = nama + ": Posso chiederle che posto è questo? Perché è sorvegliato?";
        txt3[41] = nama + ": Mi sono persa.";
        txt3[44] = "Parente: Hei! " + nama + "da quanto tempo non ci vediamo!";
        txt3[45] = nama + ": Si, da un sacco di tempo. Ma che fai, siamo fuori e non indossi la mascherina?";
        txt3[48] = nama + ": Si, prima di andare alla stazione dei pulmann, ero andata a fare il test rapido. Per questo ho perso la prima corsa del pulmann.";
        txt3[50] = nama + ": Non la prendere troppo alla leggera! Ti rendi conto che di giorno in giorno I contagi aumentano sempre di più!";
        txt3[51] = nama + ": Se non vuoi mettere la mascherina, ci vado io a comprare da mangiare. Torno tra poco.";
        txt3[52] = nama + ": (Hmmm, devo comprare le mascherine anche per loro).";
        txt3[55] = nama + ": (Hmmm, quello che mi serve non c'è).";
        txt3[62] = nama + ": A quanto va il pesce, Signora?";
        txt3[64] = nama + ": Va bene me ne dia un chilo signora. Ecco quanto le devo .";
        txt3[68] = nama + ": (Uffa, neanche lui indossa la macherina. Non mi compro niente da lui).";
        txt3[69] = nama + ": Niente, grazie.";
        txt3[84] = nama + ": Queste tre confezioni di pane quanto vengono?";
        txt3[86] = nama + ": Bene, ecco a lei signore.";
        txt3[91] = nama + ": Quanto vengono quattro maschere, Signora?";
        txt3[93] = nama + ": Bene, allora prendo quattro mascherine. Ecco a lei quanto le devo.";
        txt3[96] = nama + ": Che cos'è questo?";
        txt3[98] = nama + ": Oh no. L'ho appena incontrato poco fa.";
    }
    else if (jepang === true){
                // LEVEL 1 text1
        txt1[9] = nama + ": ありがとうございます！" ;
        txt1[12] = nama + ": その子なら, 森で見ましたよ.";
        txt1[14] = nama + ": もちろん.";
        txt1[15] = nama + ": これはあなたのおばあちゃんからのマスクです. どうぞ!";
        txt1[18] = nama + ": どこで買えばいい?";
        txt1[21] = nama + ": ハンドソープを買いに来ました.";
        txt1[24] = nama + ": ハンドソープはありますか?";
        txt1[30] = nama + ": ハンドソープ買ってきたよ";

        // LEVEL 2 text2
        txt2[1] = nama + ": わかった!";
        txt2[3] = nama + ": わかった!";
        txt2[6] = nama + ": 何かあったんですか?";
        txt2[8] = nama + ": コロナウィルスじゃないといいですね.";
        txt2[11] = nama + ": (わあ、近づかないようにしなきゃ)";
        txt2[12] = nama + ": (はやくおじいちゃんにお昼ご飯をとどけなきゃ)";
        txt2[14] = nama + ": すみません、違います. ありがとうございます!";
        txt2[17] = nama + ": なんでもありません.";
        txt2[18] = nama + ": (あの人, マスクをしていなかったな. あのお店では買い物したくないな)";
        txt2[21] = nama + ": 今は大丈夫です.";
        txt2[23] = nama + ": なんでもありません.";
        txt2[24] = nama + ": すみません. あのタワーにはどうやっていけばいいですか?";
        txt2[27] = "おじいちゃん: こんにちは, " +nama+ " お母さんがお昼ご飯を届けてくれるって聞いたよ";
        txt2[28] = nama + ": そうだよ!";
        txt2[29] = nama + ": これがそのお昼ご飯だよ.";
        txt2[32] = nama + ": もちろん, おじいちゃん.";
        txt2[36] = nama + ": トマトありますか?";
        txt2[38] = nama + ": 一袋いくらですか?";
        txt2[40] = nama + ": わかりました. これ代金です";
        txt2[43] = nama + ": ハンドソープありますか?";
        txt2[45] = nama + ": わかりました, これ代金です.";
        txt2[48] = nama + ": わかりました, これ代金です.";
        txt2[49] = "おばあちゃん: いらっやし, " + nama +". おじいちゃん, なにか言っていたかい?";
        txt2[50] = nama + ": 先におじいちゃんのところによって来たんだ.";
        txt2[52] = nama + ": おじいちゃんから頼まれて、ハンドソープとトマトを買ってきたよ.";
        txt2[53] = "おばあちゃん: ありがとう. " +nama + ". 先に洗いましょうか.";
        txt2[55] = nama + ": 洗ったよ, おばあちゃん.";
        txt2[57] = nama + ": もちろんだよ!";
        txt2[60] = nama + ": (まず消毒しなくちゃ).";

        // LEVEL 3 text3
        txt3[9] = nama + ": はい、これです.";
        txt3[15] = nama + ": (わあ, この人マスクをしていないや. ここでは買い物しないようにしよう).";
        txt3[16] =  nama + ": 特にありません.";
        txt3[22] = nama + ": すみません, ここはどういったところですか? なぜ警備しているのですか?";
        txt3[41] = nama + ":道に迷ってしまったんです.";
        txt3[44] = "親戚: やあ! " + nama + " 久しぶりだね!";
        txt3[45] = nama + ": やあ、久しぶり. 外なのにどうしてマスクをしていないの?";
        txt3[48] = nama + ": バス乗り場に行く前に、簡易検査を受けてきたんだ. そしたらバスに乗り遅れちゃってさ.";
        txt3[50] = nama + ": コロナウィルスを甘く見ちゃいけないよ! 毎日感染者が増えているんだから!";
        txt3[51] = nama + ": もしマスクをしないなら, 食べ物だけ買って, すぐに帰らせてもらうよ.";
        txt3[52] = nama + ": (はあ, あとで彼らにマスクを買ってあげなきゃ).";
        txt3[55] = nama + ": (ここには欲しいものはなさそうだな).";
        txt3[62] = nama + ": この魚は一キロ当たりいくらですか?";
        txt3[64] = nama + ": それでは、一キロください. こちら代金です";
        txt3[68] = nama + ": (わあ、この人マスクをしていないや. ここでは買い物をしないようにしよう).";
        txt3[69] = nama + ": 特にありません.";
        txt3[84] = nama + ": ３袋でいくらになりますか?";
        txt3[86] = nama + ": わかりました. こちら代金です";
        txt3[91] = nama + ": マスク４枚でいくらになりますか?";
        txt3[93] = nama + ": わかりました, ４枚ください. こちら代金です.";
        txt3[96] = nama + ": 何があったんですか?";
        txt3[98] = nama + ": 本当ですか, 彼にさっきあったばかりです.";
    }
    closeProfNav();
}

function whatLang(lang){
    switch(lang){
        case 'indonesia':
            indoLang = true;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'aneuk':
            indoLang = false;
            aneuk = true;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'nias':
            indoLang = false;
            aneuk = false;
            nias = true;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'minang':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = true;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'jambi':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = true;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'kerinci':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = true;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'palembang':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = true;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'besemah':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = true;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'bangka':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = true;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'nasal':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = true;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'rejang':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = true;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'lampung':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = true;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'betawi':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = true;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'sunda':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = true;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'cirebon':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = true;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'jawa':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = true;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'pemalang':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = true;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'osing':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = true;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'madura':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = true;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'bali':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = true;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'ngaju':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = true;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'kanayan':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = true;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'maanyan':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = true;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'lebang':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = true;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'manado':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = true;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'bugis':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = true;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'tolaki':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = true;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'ciacia':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = true;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'sasak':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = true;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'kupang':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = true;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'uab':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = true;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'amarasi':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = true;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'helong':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = true;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'fataluku':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = true;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'sabu':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = true;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'lamaholot':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = true;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'mangBar':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = true;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'mangTeng':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = true;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'papua':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = true;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'biak':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = true;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'lani':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = true;
            english = false;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'english':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = true;
            chinese = false;
            italian = false;
            japan = false;
        break;
        case 'chinese':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = true;
            italian = false;
            japan = false;
        break;
        case 'italian':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = true;
            japan = false;
        break;
        case 'japan':
            indoLang = false;
            aneuk = false;
            nias = false;
            minang = false;
            jambi = false;
            kerinci = false;
            palembang = false;
            besemah = false;
            bangka = false;
            nasal = false;
            rejang = false;
            lampung = false;
            betawi = false;
            sunda = false;
            cirebon = false;
            jawa = false;
            pemalang = false;
            osing = false;
            madura = false;
            bali = false;
            ngaju = false;
            kanayan = false;
            maanyan = false;
            lebang = false;
            manado = false;
            bugis = false;
            tolaki = false;
            ciacia = false;
            sasak = false;
            kupang = false;
            uab = false;
            amarasi = false;
            helong = false;
            fataluku = false;
            sabu = false;
            lamaholot = false;
            mangBar = false;
            mangTeng = false;
            papua = false;
            biak = false;
            lani = false;
            english = false;
            chinese = false;
            italian = false;
            japan = true;
        break;
    }
}

// mainMenu texts list
var indexTextList = [
    "Mulai baru", //0
    "Lanjutkan permainan", //1
    "Profil",
    "Kredit",
    "Gender",
    "Pilih gender kamu", //5
    "Laki-laki", //6
    "Perempuan",
    "Ubah bahasa",
    "Nama",
    "Masukkan nama kamu", //10
    "Kembali ke Menu utama",
];

//onload texts list
var onloadText = document.getElementById("onloadText"); //text pops on the first game onload
var onloadTextList = [
    // level 1
    "Selamat datang dalam permainan Pandemic Survival. Dalam permainan ini kamu akan berpetualang dalam situasi pandemi Covid-19." + "<br>" + "Selama berpetualang kamu harus mengikuti protokol kesehatan, seperti menjaga jarak aman, mencuci tangan dengan sabun, menggunakan cairan pembersih tangan, menggunakan masker, dan menghindari kerumunan.", //0
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
];

//pop the onload text after the game opens
function renderOnloadText(num){
    document.getElementById('onloadTextBox').style.display = 'block';
	onloadText.innerHTML = onloadTextList[num];
	pause = true;
}

function toggleOnloadText(){
	//onloadtext level 1
	if (onloadText.innerHTML === onloadTextList[0]) { onloadText.innerHTML = onloadTextList[1];}
	else if (onloadText.innerHTML === onloadTextList[1]){onloadText.innerHTML = onloadTextList[2];}
	else if (onloadText.innerHTML === onloadTextList[2]){ document.getElementById("onloadTextBox").style.display = "none"; pause = false; healthSpeed = 0.5;}
	//onloadtext level 2
	else if (onloadText.innerHTML === onloadTextList[3]){onloadText.innerHTML = onloadTextList[4];}
	else if (onloadText.innerHTML === onloadTextList[4]){document.getElementById("onloadTextBox").style.display = "none"; pause = false;}
	//onloadtext level 3
	else if (onloadText.innerHTML === onloadTextList[5]){onloadText.innerHTML = onloadTextList[6];}
	else if (onloadText.innerHTML === onloadTextList[6]){document.getElementById("onloadTextBox").style.display = "none"; pause = false;}
	else if (onloadText.innerHTML === onloadTextList[7]){document.getElementById("onloadTextBox").style.display = "none"; pause = false;}
	//sign at level 3
	else if (onloadText.innerHTML === txt3[103]){document.getElementById("onloadTextBox").style.display = "none"; pause = false;}
	else if (onloadText.innerHTML === txt3[104]){document.getElementById("onloadTextBox").style.display = "none"; pause = false;}
}

//level 1 task list 
var talkSprites1A = false; 
var firstWash = false; 
var talkGatekeeper = false;
var talkToGranny = false;
var buySoap = false;
var giveMomSoap = false;

//level 1 text list
var txt1 = [
    "Teman: Hai, kamu mau ke mana? Ke sini dulu!", //0
    "Teman: Hai, jangan lupa cuci tangan dengan sabun, ya!", //1
    "Teman: Dengan mencuci tangan, kamu memastikan tanganmu bersih dan kamu aman dari virus.",
    "Teman: Kamu bisa mencuci tangan di depan rumahku.",
    "Hore, tanganmu sudah tercuci!",
    "Pemuda: *Uhuk* Maaf ya, tendaku menghalangi jalanmu. Namun, kamu bisa lewat sana.", //5
    "Penjaga  Gerbang: Anak muda, kenapa kamu tidak pakai masker? Ini masker untukmu.", //6
    "Masker didapatkan",
    "Penjaga Gerbang: Bagus, kamu sudah pakai masker! Silakan lewat.",
    nama + ": Terima kasih!" ,
    "Ingat untuk selalu jaga jarak aman, ya!", //10
    "*Uhuk* Apa kamu melihat cucuku? Dia tidak pakai masker waktu pergi.", //11
    nama + ": Oh, saya lihat dia di hutan.", 
    "Nenek: Bisa tolong berikan masker ini ke dia, Nak?", 
    nama + ": Tentu saja, Nek.", 
    nama + ": Ini masker dari nenekmu. Dipakai dulu!", //15
    "Oke, terima kasih!", // 16
    "Ibu: Sayang, kamu sudah pulang. Tolong belikan sabun cuci tangan dulu, ya?", 
    nama + ": Di mana, Bu?", 
    "Ibu: Di warung bu Ani.", 
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
];

function typeText(txtNum) {
	pause = true;
	tBox.style.display = 'block';
	t.innerHTML = txt1[txtNum];
}

function toggleText(){
	//talk to sprites1A
	if (t.innerHTML === txt1[1]){ t.innerHTML = txt1[2];} 
	else if (t.innerHTML === txt1[2]){ 
		healthSpeed1 = healthSpeed1 + 1;
		t.innerHTML = txt1[3]; 
		talkSprites1A = true;
	}
	//if handWasImg is shown, close it
	else if (t.innerHTML === txt1[4] || t.innerHTML === txt1[28] ){
		if (buySoap == true && giveMomSoap == true) {
			handWashImg.style.display = 'none';
			tBox.style.backgroundColor = '#99ff99';
			t.innerHTML = txt1[29]; //game ends here
		} else {
			handWashImg.style.display = 'none';
			tBox.style.display = 'none';
			tBox.style.backgroundColor = '#99ff99';
			tBox.style.opacity = '1';
			healthSpeed1 = 3;
			firstWash = true;
			pause = false;
		}
	}
	//sprites near tent
	else if (t.innerHTML === txt1[5]){
		//if the player has talked to granny the player will give mask to the sprite
		if (talkToGranny == true) { 
			t.innerHTML = txt1[15]; 
		}
		else { //if the player hasn't talked to granny, the text will close
			tBox.style.display = 'none';
			healthSpeed1 = healthSpeed1 + 2;
			pause = false;
		}
	} 
	else if (t.innerHTML === txt1[15]) {
		healthSpeed1 = healthSpeed1 + 2;
		t.innerHTML = txt1[16];
	}
	//talk to gatekeeper
	else if (t.innerHTML === txt1[6]){
		if (talkGatekeeper == false){ //if the player hasn't talked to gatekeeper, he will receive a mask
			player1.picX = 192;
			maskImg.style.display = 'block';
			obtMaskImg.style.display = 'inline';
			tBox.style.backgroundColor = '#f2f2f2';
			tBox.style.opacity ='0.8';
			t.innerHTML = txt1[7];
		} else { //if the player has talked to gatekeeper, and they talk again the healthSpeed will increase
			healthSpeed1 = healthSpeed1 + 1;
			tBox.style.display = 'none';
			tBox.style.backgroundColor = '#99ff99';
			tBox.style.opacity = '1'; 
			pause = false;
		}
	}
	else if (t.innerHTML === txt1[7]){
		maskImg.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		t.innerHTML = txt1[8];	
	}
	else if (t.innerHTML === txt1[8]){
		setInterval(animate1a, 500); //open gate animation
		t.innerHTML = txt1[9];
		txt1[6] = txt1[10]
		healthSpeed1 = healthSpeed1 - 1;
		talkGatekeeper = true;
	}
	//talk to granny
	else if (t.innerHTML === txt1[11]){ t.innerHTML = txt1[12];}
	else if (t.innerHTML === txt1[12]){ 
		imgList.style.display = 'block';
		maskImg.style.display = 'block';
		t.innerHTML = txt1[13];
	}  
	else if (t.innerHTML === txt1[13]){ 
		healthSpeed1 = healthSpeed1 + 2;
		imgList.style.display = 'none';
		maskImg.style.display = 'none';
		t.innerHTML = txt1[14]; 
		talkToGranny = true; 
	}
	//talk to mom
	else if (t.innerHTML === txt1[17]) {
		t.innerHTML = txt1[18];
		if (buySoap == true) { t.innerHTML = txt1[27]; giveMomSoap = true;}
	}
	else if (t.innerHTML === txt1[18]) {t.innerHTML = txt1[19];}
	//talk to twin outside the shop
	else if (t.innerHTML === txt1[20]) {t.innerHTML = txt1[21];}
	else if (t.innerHTML === txt1[21]) {
		healthSpeed1 = healthSpeed1 + 1;
		t.innerHTML = txt1[22];
	}
	//talk to shopkeeper
	else if (t.innerHTML === txt1[23]) {t.innerHTML = txt1[24];}
	else if (t.innerHTML === txt1[24]) {t.innerHTML = txt1[25];}
	else if (t.innerHTML === txt1[25]) {
		imgList.style.display = 'block';
		sanitImg.style.display = 'block';
		obtSanitImg.style.display = 'inline';
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity ='0.8';
		t.innerHTML = txt1[26];
	}
	else if (t.innerHTML === txt1[26]) {
		txt1[17] = txt1[30];
		imgList.style.display = 'none';
		sanitImg.style.display = 'none';
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		buySoap = true; 
		pause = false;
	}
	//transfer to level 2
	else if (t.innerHTML === txt1[29]) {
        tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		document.getElementById('health1').value = '35000';
		healthSpeed1 = 0;
		document.getElementById('obtainMaskImg').style.display = 'none';
		document.getElementById('obtainSanitImg').style.display = 'none';
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
        health1.style.display = 'none';
        analog1.style.display = 'none';
        toggleBtn1.style.display = 'none';
        health2.style.display = 'block';
        analog2.style.display = 'block';
        toggleBtn2.style.display = 'block';
		audio1.pause();
		audio2.play();
        initGame2();
    }
    else {
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		pause = false;
	}
	//dead
	if (t.innerHTML === onloadTextList[9]) {location.reload();}
}

//level 2 task list and typing
var talkToMom = false;
var talkToGrandpa = false;
var buyTomato = false;
var buySoap2 = false;
var washTomato = false;

var txt2 = [
   "Ibu: Kamu bisa antarkan makan siang untuk Kakek?", //0
   nama + ": Baik, Bu.", //1
   "Hati-hati di jalan, ya!",
   "Tetangga: Hai, dengar-dengar bu Joko kena Covid.",
   "Anak kecil: Hosh...hosh… Aku harus pulang sepuluh menit lagi.",
   "Anak kecil: Hatsi...hatsi...", //5
   nama + ": Bu, anaknya kenapa?", //6
   "Ibu-ibu: Dia batuk, pilek, dan agak demam. Jadi kami mau rapid test.", 
   nama + ": Oh. Semoga bukan Covid ya, Bu.", 
   "Ibu-ibu: Terima kasih, Nak.",
   "Kakek-kakek: UHUK UHUK", //10
   nama + ": (Waduh, aku harus jaga jarak nih)", //11
   nama + ": (Wah, aku harus buru-buru mengantar makanan Kakek)",
   "Suster: Kalau mau berobat, ini nomor antriannya.",
   nama + ": Maaf, saya tidak berobat. Terima kasih.",
   "Ibu-ibu: Tolong jaga jarak, Nak.", //15
   "Penjual buah: Cari apa, Kak?",
   nama + ": Tidak Pak. Terima kasih.",
   nama + ": (Bapak ini tidak pake masker. Aku tidak beli buah di sini.)",
   "Ibu-ibu: Tukang rotinya ke mana, ya?",
   "Penjual buah: Silakan dibeli. Buahnya baru datang.", //20
   nama + ": Maaf, tidak dulu, Bu.",
   "Penjual sembako: Cari apa, Kak?",
   nama + ": Oh, tidak cari apa-apa, Bu.",
   nama + ": Permisi, jalan ke menara lewat mana, ya?",
   "Pemuda: Oh, kamu harus memutar jalan dari awal.", //25
   "Hore, tangan tercuci!", //26
   "Kakek: Halo, " +nama+ " Seingat Kakek, ibu menitipmu bekal untuk Kakek.",
   nama + ": Oh, iya!",
   nama + ": Ini bekal dari Ibu untuk Kakek.",
   "Kakek: Oh, terima kasih.", //30
   "Kakek: Kamu bisa tolong belikan satu botol sabun cair dan tomat untuk Nenek?", //31
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
   "Penjual sembako: Ada, Kak. Rp10.000 harganya.",
   nama + ": Oke, ini uangnya.", //45
   "Sabun cair didapatkan", //46
   "Penjual sembako: Terima kasih.", 
   "Tetangga: Oh, kamu sudah besar, ya. ",
   "Nenek: Halo, " + nama +". Apa ada titipan dari kakekmu?",
   nama + ": Saya ke tempat Kakek dulu, Nek.", //50
   "Tangan tercuci!", //51
   nama + ": Ini sabun dan tomat dari pasar titipan Kakek.", //52
   "Nenek: Terima kasih. Tolong dicuci dulu, ya.",
   "Tomat sudah tercuci",
   nama + ": Sudah saya cuci, Nek.", //55
   "Nenek: Terima kasih. Ayo, masuk. Kita minum teh di dalam.",
   nama + ": Baik, Kek.",
   "Tomat sudah terbeli",
   "Hore, level 2 selesai.",
   nama + ": (Aku pakai cairan pembersih dulu).",   //60
] 

function typeText2(txtNum){
	pause = true;
	tBox.style.display = 'block';
	t.innerHTML = txt2[txtNum];
}

function toggleText2(){
	//talk to mom
	if (t.innerHTML === txt2[0]) {
		obtFoodboxImg.style.display ='inline';
		t.innerHTML = txt2[1];
		txt2[0] = txt2[2];
		txt2[27] = txt2[29];
		talkToMom = true;	
	}
	//if handWasImg is shown, close it
	else if (t.innerHTML === txt1[26] || t.innerHTML === txt1[51] ){
		handWashImg.style.display = 'none';
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		healthSpeed2 = 2;
		pause = false;
	}
	//percakapan ibu dan anak dket puskesmas
	else if (t.innerHTML === txt2[5]){
		healthSpeed2 = healthSpeed2 + 4;
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		pause = false; 
	}
	else if (t.innerHTML === txt2[6]) {t.innerHTML = txt2[7];}
	else if (t.innerHTML === txt2[7]) {t.innerHTML = txt2[8];}
	else if (t.innerHTML === txt2[8]) {
		t.innerHTML = txt2[9];
		healthSpeed2 = healthSpeed2 + 2;
	}
	//talk to kakek near puskesmas
	else if (t.innerHTML === txt2[10]) {
		setInterval(animate2b, 20);
		healthSpeed2 = healthSpeed2 + 4;
		t.innerHTML = txt2[11];
	} 
	//talk to clothes shop buyer
	else if (t.innerHTML === txt2[13]) {
		healthSpeed2 = healthSpeed2 + 2;
		t.innerHTML = txt2[14];
	}
	//talk to fruit shop
	else if (t.innerHTML === txt2[16]) {
		if (talkToGrandpa == true){ 
			healthSpeed2 = healthSpeed2 + 1;
			tBox.style.display = 'none'; pause = false; 
		}
		else {
			healthSpeed2 = healthSpeed2 + 3;
			t.innerHTML = txt2[17];
		}
	}
	//talk to fruit hawker 
	else if (t.innerHTML === txt2[20]) { 
		if (talkToGrandpa == true){ 
			t.innerHTML = txt2[36]; 
		}
		else {
			healthSpeed2 = healthSpeed2 + 2;
			t.innerHTML = txt2[21];
		}
	}
	else if (t.innerHTML === txt2[36]) {t.innerHTML = txt2[37];}
	else if (t.innerHTML === txt2[37]) {t.innerHTML = txt2[38];}
	else if (t.innerHTML === txt2[38]) {t.innerHTML = txt2[39];}
	else if (t.innerHTML === txt2[39]) {t.innerHTML = txt2[40];}
	else if (t.innerHTML === txt2[40]) {
		obtTomatoImg.style.display ='inline';
		tomatoImg.style.display = 'block';
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity ='0.8';
		t.innerHTML = txt2[58];
	 }
	else if (t.innerHTML === txt2[58]) {
		tomatoImg.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		t.innerHTML = txt2[41];
	}
	else if (t.innerHTML === txt2[41]) {
		healthSpeed2 = healthSpeed2 + 2;
		tBox.style.display = 'none';
		buyTomato = true; 
		pause = false;
	}
	//talk to props shop
	else if (t.innerHTML === txt2[22]) {
		if (talkToGrandpa == true){ t.innerHTML = txt2[43]; }
		else {
			healthSpeed2 = healthSpeed2 + 2;
			t.innerHTML = txt2[23];
		}
	}
	else if (t.innerHTML === txt2[43]) {t.innerHTML = txt2[44];}
	else if (t.innerHTML === txt2[44]) {t.innerHTML = txt2[45];}
	else if (t.innerHTML === txt2[45]) {
		obtSanitImg.style.display = 'inline';
		sanitImg.style.display = 'block';
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity ='0.8';
		t.innerHTML = txt2[46];
	}
	else if (t.innerHTML === txt2[46]) {
		healthSpeed2 = healthSpeed2 + 2;
		sanitImg.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity ='1';
		t.innerHTML = txt2[47]; 
		buySoap2 = true;
	}
	else if (t.innerHTML === txt2[47]) {t.innerHTML = txt2[60];}

	//talk to scout boy
	else if (t.innerHTML === txt2[24]) {
		healthSpeed2 = healthSpeed2 + 2;
		t.innerHTML = txt2[25];
	}
	//talk to grandpa
	else if (t.innerHTML === txt2[27]) {
		if (talkToMom == true && talkToGrandpa == false) {
			obtFoodboxImg.style.display ='none';
			t.innerHTML = txt2[30];
		}
		else if (talkToMom == true && talkToGrandpa == true) {t.innerHTML = txt2[57];}
		else {
			tBox.style.display = 'none';
			tBox.style.backgroundColor = '#99ff99';
			tBox.style.opacity = '1';
			pause = false;
		}
	}
	else if (t.innerHTML === txt2[30]) {t.innerHTML = txt2[31];}
	else if (t.innerHTML === txt2[31]) {t.innerHTML = txt2[32];}
	else if (t.innerHTML === txt2[32]) {
		t.innerHTML = txt2[33];
		txt2[16] = txt2[18]; //fruit shop
		txt2[20] = txt2[35]; //fruit hawker
		txt2[22] = txt2[42];
		txt2[27] = txt2[34]; //kakek mengingatkan jaga jarak
		talkToGrandpa = true;
	}
	//talk to grandma
	else if (t.innerHTML === txt2[49]) {
		if (buySoap2 == true && buyTomato == true && washTomato == false) {
			obtSanitImg.style.display ='none';
			obtTomatoImg.style.display ='none';
			t.innerHTML = txt2[52]; 
		}
		else if (buySoap2 == true && buyTomato == true && washTomato == true) {t.innerHTML = txt2[56]; }
		else {t.innerHTML = txt2[50];}
	}
	else if (t.innerHTML === txt2[52]) { 
		t.innerHTML = txt2[53]; 
		txt2[51] = txt2[54];  
	}
	//wash tomato
	else if (t.innerHTML === txt2[54]) {
		tBox.style.display = 'none';
		handWashImg.style.display = 'none';
		pause = false;
		washTomato = true;
		txt2[49] = txt2[55];
	 }
	 //ending
	else if (t.innerHTML === txt2[56]) {t.innerHTML = txt2[59];}
	else if (t.innerHTML === txt2[59]) { //transfer to level 3
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		healthSpeed2 = 0;
		document.getElementById('health2').value = '60000';
        document.getElementById('screen2').style.display = 'none';
        document.getElementById('screen3').style.display = 'block';
        health2.style.display = 'none';
        analog2.style.display = 'none';
        toggleBtn2.style.display = 'none';
        health3.style.display = 'block';
        analog3.style.display = 'block';
        toggleBtn3.style.display = 'block';
		audio2.pause();
		audio3.play();
        initGame3();
	}
	else {
		handWashImg.style.display = 'none';
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		pause = false;
	}
	//dead
	if (t.innerHTML === onloadTextList[9]) {location.reload();}
}

//level 3 task list and typing
var tempCheck = false;
var KKKcheck = false;
var talkToRelative = false;
var buyFish = false;
var buyBread = false;
var buyMask = false;
var txt3 = [
		"Supir bus: Terima kasih sudah menggunakan jasa kami. Silakan cek suhu tubuh di sana sebelum memasuki kota.",
		"Pemudi: Kalau suhu kamu di atas 37,5 derajat, kamu tidak boleh masuk kota ya.", //1
		"Pemudi: Duh lama sekali sih.",
		"Pemuda: Berapa suhu saya, Mbak?",
		"Pemeriksa suhu: 36,8 derajat silakan masuk.",
		"Pemeriksa suhu: Saya cek suhunya sebentar ya, Kak.", //5
		"Pemeriksa suhu: 36,2 derajat. Silakan tunjukkan Kartu Kewaspadaan Kesehatan di sana", //6
		"Pemeriksa suhu: Kak, cek suhu dulu di sini!",
		"Pemeriksa KKK: Boleh lihat Kartu Kewaspadaan Kesehatannya, Kak?",
		nama + ": Silakan, Pak.",
		"Pemeriksa KKK: Baik, hasil tes non-reaktif. Silakan masuk kota.", //10
		"Pemeriksa KKK: Kak, periksa Kartu Kewaspadaan Kesehatan dulu di sini!", //11
		"Pembeli: Bu, jadi berapa total jagung dan tomatnya?",
		"Penyual sayur: Totalnya Rp25.000, Bu.",
		"Penyual sayur: Cari apa, Kak?",
		nama + ": (Wah, ibu ini tidak pakai masker. Aku tidak beli di sini deh).", //15
		nama + ": Nggak, Bu.", //16
		"Ibu-ibu: Hmmm, penjual sayur yang biasa di sini ke mana, ya?",
		"Bapak-bapak: Wah, kunci gudang aku taruh di mana, ya?",
		"Penjaga pabrik: Aku harus tetap bekerja keras meskipun masih pandemi.",
		"Ibu-ibu: Duh, mana jemputannya, ya?", //20
		"Tukang parkir: Wah, ini yang parkir bus ke mana, ya? Kok parkir sembarangan.", //21
		nama + ": Mohon tanya, ini tempat apa? Kenapa dijaga?",
		"Suster: Oh, ini rumah karantina pasien Covid-19.",
		"Suster: Jaga kesehatan ya, Kak. Jangan sampai kamu masuk ke sini.",
		"Dokter: Karena pasien Covid-19 sudah semakin banyak, kapasitas di rumah sakit pun semakin terbatas.", //25
		"Dokter: Kalau kamu merasa demam, batuk kering, atau pilek, segeralah periksa ke rumah sakit, ya.", //26
		"Pengusaha: Di masa pandemi ini, banyak pengusaha yang bisnisnya terdampak.",
		"Pemudi: Saat pandemi, hindari kumpul-kumpul di luar.",
		"Petugas Covid: Di sini ada sekeluarga yang sedang isolasi mandiri karena Covid.",
		"Pegawai: Saat pandemi banyak orang yang kehilangan pekerjaan.", //30
		"Anak-anak: Aku harus rajin berolahraga!", //31
		"Nenek-nenek: Nak, apakah kamu melihat suamiku?",
		"Kakek-kakek: Nak, apakah kamu melihat istriku?",
		"Nenek-nenek: Saat menyeberang jalan, kamu harus berhati-hati, ya.",
		"Wartawan: Apa yang ingin Bapak sampaikan kepada masyarakat agar tidak tertular Covid?", //35
		"Walikota: Tetaplah menjaga jarak aman, pakai masker, dan tidak berkerumun.", //36
		"Wartawan: Berapa denda bagi pelanggar protokol Covid-19, Pak?", 
		"Walikota: Di wilayah kita Rp250.000.", 
		"Petugas Covid: Waduh, jumlah korban bertambah terus setiap harinya.",
		"Petugas Covid: Ada urusan apa, Kak? Mau nyekar, ya?", //40
		nama + ": Saya kesasar, Pak.", //41
		"Petugas COVID: Ini kuburan korban Covid-19.",
		"Penjaga toko: Aduh, barangnya lama sekali sampainya.",
		"Saudara: Hai, lama tidak jumpa!",
		nama + ": Ya, lama tidak jumpa. Kok kamu di luar tidak pakai masker?", //45
		"Saudara: Tenanglah, hanya di depan rumah saja kok! Oh ya, adikku sudah menunggumu.", //46
		"Saudara: Hey, kamu sudah tiba! Kenapa lama sekali? Aku baru mau belikan kamu makan.",
		nama + ": Iya, sebelum ke terminal aku rapid dulu. Jadi tadi ketinggalan bus pertama.",
		"Saudara: Buat apa rapid? Aku sering kok tidak pakai masker kalau pergi-pergi.",
		nama + ": Jangan anggap remeh, semakin hari banyak yang tertular tahu!", //50
		nama + ": Kalau kamu tidak mau pakai masker, biar aku saja yang beli makan. Nanti aku kembali lagi.", //51
		nama + ": (Hmmm, nanti aku beli masker untuk mereka).",
		"Saudara: Oh, terima kasih, sekaligus tolong belikan roti di Pasar Baru.",
		"Penjual barang: Ya, silakan dipilih barangnya, Kak.",
		nama + ": (Hmmm, barang yang ingin kubeli tidak ada di sini).", //55
		"Ibu-ibu: Hmmm, beli apa, ya?", //56
		"Penjual: Cari masker ya, Kak? Sebelah toko saudaraku ada jual di Pasar Lama.",
		"Pembeli: Bu, jadi berapa harga semua sayur, daging, dan ikannya?",
		"Penjual: Rp45.000, Bu.",
		"Penjual Ikan: Silakan dipilih, Kak ikan dan sayurnya.", //60
		"Penjual Ikan: Silakan dipilih, Kak sayur dan ikannya.", //61
		nama + ": Berapa harga sekilo ikan, Bu?",
		"Penjual Ikan: Rp35.000, Kak.",
		nama + ": Baik, beli sekilo ya, Bu. Ini uangnya.",
		"Penjual Ikan: Terima kasih. Ini belanjaannya.", //65
		"Ibu-ibu: Numpang tanya, penjual roti yang biasa di sana ke mana, ya?", //66
		"Penjual daging: Cari apa, Kak?",
		nama + ": (Wah bapak itu tidak pakai masker, aku tidak belanja sama dia deh).", 
		nama + ": Tidak, Pak.", 
		"Pembeli: Pak, harga buahnya jadi berapa semuanya?", //70
		"Penjual buah: Jadi total Rp50.000, Bu.", //71
		"Penjual buah: Silakan dibeli, Kak. Buahnya segar loh.",
		"Ibu-ibu: Tukang roti di sana, pindah ke pasar, Kak.",
		"Ikan terbeli!",
		"Pedagang kaki-lima: Pasar? Oh, cukup jalan lurus dari sini saja, Kak.", //75
		"Penjual: Masker? Oh, bisa beli di toko sebelah, Kak!", //76
		"Petugas: Saya akan menegur bapak yang tidak memakai masker itu.",
		"Ibu-ibu: Bu, sudah dengar? Katanya satu keluarga besar di pusat kota yang diisolasi di rumah loh!",
		"Ibu-ibu: Iya, Bu. Jumlah orang yang terpapar Covid-19 bertambah terus.",
		"Pembeli: Jadi berapa harga dua masker ini, Bu?", //80
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
		"Penjual Roti: Terima kasih. Ini maskernya.", 
		"Masker terbeli!", //95
		nama + ": Ada apa ini!?", //96
		"Petugas Covid: Temanmu ini saya bawa untuk isolasi karena hasil tesnya positif Covid.",
		nama + ": Wah, saya baru ketemu dia tadi.",
		"Petugas Covid: Kalau begitu kamu harus dites juga. Alat tesnya ada di teman saya.",
		"Tes...Hasil: Non-reaktif!", //100
		"Petugas Covid: Kamu harus isolasi mandiri selama 14 hari. Sampai jumpa!",
		"Permainan berakhir, terima kasih sudah memainkan permainan ini.",
		"Kiri kota:" + "<br>" + "<ul>" +"<li> Pasar Baru </li>" +"<li> Rumah sakit </li>" + "<li> Perumahan apartemen </li>"+ "</ul>", //103	
		"Kanan kota:" + "<br>" + "<ul>" +"<li> Tempat pemakaman </li>" +"<li> Kantor walikota </li>" + "<li> Pasar lama </li>"+ "</ul>", //104
		"Permainan berakhir, Anda tertabrak mobil.", //105
];

function typeText3(txtNum){
	pause = true;
	tBox.style.display = 'block';
	t.innerHTML = txt3[txtNum];
}

function toggleText3(){
	//pemuda yang bertanya pada pemeriksaan suhu
	if (t.innerHTML === txt3[3]) { t.innerHTML = txt3[4];}
	//cek suhu
	else if (t.innerHTML === txt3[5]) {t.innerHTML = txt3[6]; tempCheck = true;}
	//cek KKK
	else if (t.innerHTML === txt3[8]) {t.innerHTML = txt3[9];}
	else if (t.innerHTML === txt3[9]) {t.innerHTML = txt3[10]; KKKcheck = true;}
	//conversation of vegetable buyer and seller (stand3a)
	else if (t.innerHTML === txt3[12]) {t.innerHTML = txt3[13]; healthSpeed3 = healthSpeed3 + 1;}
	//conversation when talking with vegetable seller (stand3b)
	else if (t.innerHTML === txt3[14]) {t.innerHTML = txt3[15]}
	else if (t.innerHTML === txt3[15]) {t.innerHTML = txt3[16]; healthSpeed3 = healthSpeed3 + 1;}
	//nurse in front of quarantine house
	else if (t.innerHTML === txt3[22]) {t.innerHTML = txt3[23]; healthSpeed3 = healthSpeed3 + 1;}
	//walikota and wartawan
	else if (t.innerHTML === txt3[35]) {t.innerHTML = txt3[36]}
	else if (t.innerHTML === txt3[37]) {t.innerHTML = txt3[38]; healthSpeed3 = healthSpeed3 + 1;}
	//COVID tombkeeper
	else if (t.innerHTML === txt3[40]) {t.innerHTML = txt3[41]; healthSpeed3 = healthSpeed3 + 1;}
	//saudara 1
	else if (t.innerHTML === txt3[44]) {t.innerHTML = txt3[45]}
	else if (t.innerHTML === txt3[45]) {t.innerHTML = txt3[46]; healthSpeed3 = healthSpeed3 + 2;}
	//saudara 2
	else if (t.innerHTML === txt3[47]) {t.innerHTML = txt3[48]}
	else if (t.innerHTML === txt3[48]) {t.innerHTML = txt3[49]}
	else if (t.innerHTML === txt3[49]) {t.innerHTML = txt3[50]}
	else if (t.innerHTML === txt3[50]) {t.innerHTML = txt3[51]}
	else if (t.innerHTML === txt3[51]) {t.innerHTML = txt3[52]}
	else if (t.innerHTML === txt3[52]) {
		t.innerHTML = txt3[53]; 
		txt3[60] = txt3[61]; //change vegetable seller text
		txt3[82] = txt3[83]; //change bread seller text
		txt3[89] = txt3[90]; //change mask seller text
		talkToRelative = true;
	}
	else if (t.innerHTML === txt3[53]) {
		tBox.style.display = 'none';
		onloadTextBox.style.display = 'block';
		onloadText.innerHTML = onloadTextList[7];
		healthSpeed3 = healthSpeed3 + 2;
		pause = true;
	}
	//pasar barat 
	//vertical stand
	else if (t.innerHTML === txt3[54]) {t.innerHTML = txt3[55]}
	//vegetable and fish buyer
	else if (t.innerHTML === txt3[58]) {t.innerHTML = txt3[59]; healthSpeed3 = healthSpeed3 + 1;}
	//vegetable and fish seller
	else if (t.innerHTML === txt3[61]) {t.innerHTML = txt3[62]}
	else if (t.innerHTML === txt3[62]) {t.innerHTML = txt3[63]}
	else if (t.innerHTML === txt3[63]) {t.innerHTML = txt3[64]}
	else if (t.innerHTML === txt3[64]) {t.innerHTML = txt3[65];}
	else if (t.innerHTML === txt3[65]) {
		t.innerHTML = txt3[74]; 
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity ='0.8';
		obtFishImg.style.display = 'inline';
		fishImg.style.display = 'block';
	}
	else if (t.innerHTML === txt3[74]){
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		fishImg.style.display = 'none';
		buyFish = true;
		healthSpeed3 = healthSpeed3 + 1;
		pause = false;
	}
	//meat seller
	else if (t.innerHTML === txt3[67]) {t.innerHTML = txt3[68]}
	else if (t.innerHTML === txt3[68]) {t.innerHTML = txt3[69]; healthSpeed3 = healthSpeed3 + 2;}
	//fruit buyer
	else if (t.innerHTML === txt3[70]) {t.innerHTML = txt3[71]; healthSpeed3 = healthSpeed3 + 1;}
	//ibu-ibu ngerumpi
	else if (t.innerHTML === txt3[78]) {t.innerHTML = txt3[79]; healthSpeed3 = healthSpeed3 + 2;}
	//mask buyer
	else if (t.innerHTML === txt3[80]) {t.innerHTML = txt3[81]; healthSpeed3 = healthSpeed3 + 1;}
	//bread seller
	else if (t.innerHTML === txt3[83]) {t.innerHTML = txt3[84]}
	else if (t.innerHTML === txt3[84]) {t.innerHTML = txt3[85]}
	else if (t.innerHTML === txt3[85]) {t.innerHTML = txt3[86]}
	else if (t.innerHTML === txt3[86]) {t.innerHTML = txt3[87]}
	else if (t.innerHTML === txt3[87]) {
		t.innerHTML = txt3[88]; 
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity ='0.8';
		obtBreadImg.style.display = 'inline';
		breadImg.style.display = 'block';
	}
	else if (t.innerHTML === txt3[88]) {
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		breadImg.style.display = 'none';
		buyBread = true;
		healthSpeed3 = healthSpeed3 + 1;
		pause = false;
	}
	//cloth seller
	else if (t.innerHTML === txt3[90]) {t.innerHTML = txt3[91]}
	else if (t.innerHTML === txt3[91]) {t.innerHTML = txt3[92]}
	else if (t.innerHTML === txt3[92]) {t.innerHTML = txt3[93]}
	else if (t.innerHTML === txt3[93]) {t.innerHTML = txt3[94]}
	else if (t.innerHTML === txt3[94]) {
		t.innerHTML = txt3[95]; 
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity ='0.8';
		obtMaskImg.style.display = 'inline';
		maskImg.style.display = 'block';
	}
	else if (t.innerHTML === txt3[95]) {
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		maskImg.style.display = 'none';
		buyMask = true;
		healthSpeed3 = healthSpeed3 + 1;
		pause = false;
	}
	//APD endgame
	else if (t.innerHTML === txt3[96]) {t.innerHTML = txt3[97]}
	else if (t.innerHTML === txt3[97]) {t.innerHTML = txt3[98]}
	else if (t.innerHTML === txt3[98]) {t.innerHTML = txt3[99]}
	else if (t.innerHTML === txt3[99]) {t.innerHTML = txt3[100]}
	else if (t.innerHTML === txt3[100]) {t.innerHTML = txt3[101]}
	else if (t.innerHTML === txt3[101]) {t.innerHTML = txt3[102]}
	else if (t.innerHTML === txt3[102]) {
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		healthSpeed3 = 0;
		document.getElementById('health3').value = '90000';
		document.getElementById('screen3').style.display = 'none';
		document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('menuScreen').style.display = 'block';
		document.getElementById('obtainBreadImg').style.display = 'none';
		document.getElementById('obtainFishImg').style.display = 'none';
		document.getElementById('obtainMaskImg').style.display = 'none';
        health3.style.display = 'none';
        analog3.style.display = 'none';
        toggleBtn3.style.display = 'none';
		audio3.pause();
	}
	//carCrash
	else if (t.innerHTML === txt3[105]) {location.reload();}
	else {
		handWashImg.style.display = 'none';
		tBox.style.display = 'none';
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
		pause = false;
	}
}

// language change
function changeLang(lang) {
    switch(lang){
      case 'indonesia':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextIndo[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextIndo[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Indo[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Indo[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Indo[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        indoLang = true;
        whatLang(lang);
        changeName();
        closeAsingNav();
        closeLangNav();
      break;
      // sumatra lang
      case 'aneuk':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextAneuk[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextAneuk[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Aneuk[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Aneuk[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Aneuk[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'nias':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextNias[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextNias[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Nias[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Nias[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Nias[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'minang':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextMinang[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextMinang[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Minang[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Minang[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Minang[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'jambi':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextJambi[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextJambi[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Jambi[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Jambi[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Jambi[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'kerinci':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextKerinci[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextKerinci[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Kerinci[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Kerinci[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Kerinci[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'palembang':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextPalembang[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextPalembang[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Palembang[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Palembang[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Palembang[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'besemah':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextBesemah[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextBesemah[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Besemah[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Besemah[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Besemah[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'bangka':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextBangka[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextBangka[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Bangka[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Bangka[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Bangka[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'nasal':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextNasal[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextNasal[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Nasal[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Nasal[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Nasal[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      case 'rejang':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextRejang[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextRejang[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Rejang[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Rejang[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Rejang[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        closeSumNav();
        closeLangNav();
      break;
      case 'lampung':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextLampung[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextLampung[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Lampung[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Lampung[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Lampung[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeSumNav();
        closeLangNav();
      break;
      // jawa lang
      case 'betawi':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextBetawi[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextBetawi[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Betawi[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Betawi[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Betawi[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'sunda':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextSunda[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextSunda[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Sunda[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Sunda[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Sunda[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'cirebon':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextCirebon[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextCirebon[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Cirebon[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Cirebon[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Cirebon[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'jawa':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextJawa[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextJawa[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Jawa[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Jawa[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Jawa[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'pemalang':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextPemalang[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextPemalang[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Pemalang[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Pemalang[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Pemalang[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'osing':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextOsing[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextOsing[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Osing[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Osing[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Osing[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'madura':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextMadura[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextMadura[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Madura[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Madura[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Madura[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      case 'bali':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextBali[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextBali[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Bali[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Bali[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Bali[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeJawaNav();
        closeLangNav();
      break;
      // kalSul Lang
      case 'ngaju':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextNgaju[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextNgaju[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Ngaju[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Ngaju[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Ngaju[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'kanayan':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextKanayan[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextKanayan[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Kanayan[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Kanayan[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Kanayan[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'maanyan':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextMaanyan[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextMaanyan[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Maanyan[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Maanyan[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Maanyan[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'lebang':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextLebang[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextLebang[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Lebang[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Lebang[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Lebang[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'manado':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextManado[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextManado[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Manado[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Manado[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Manado[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'bugis':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextBugis[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextBugis[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Bugis[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Bugis[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Bugis[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'tolaki':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextTolaki[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextTolaki[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Tolaki[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Tolaki[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Tolaki[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      case 'ciacia':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextCiacia[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextCiacia[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Ciacia[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Ciacia[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Ciacia[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeKalSulNav();
        closeLangNav();
      break;
      // NTT & NTB
      case 'sasak':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextSasak[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextSasak[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Sasak[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Sasak[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Sasak[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'kupang':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextKupang[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextKupang[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Kupang[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Kupang[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Kupang[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'uab':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextUab[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextUab[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Uab[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Uab[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Uab[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'amarasi':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextAmarasi[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextAmarasi[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Amarasi[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Amarasi[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Amarasi[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'helong':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextHelong[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextHelong[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Helong[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Helong[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Helong[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'fataluku':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextFataluku[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextFataluku[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Fataluku[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Fataluku[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Fataluku[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'sabu':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextSabu[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextSabu[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Sabu[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Sabu[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Sabu[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'lamaholot':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextLamaholot[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextLamaholot[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Lamaholot[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Lamaholot[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Lamaholot[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'mangBar':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextMangBar[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextMangBar[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1MangBar[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2MangBar[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3MangBar[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      case 'mangTeng':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextMangTeng[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextMangTeng[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1MangTeng[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2MangTeng[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3MangTeng[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeNTNav();
        closeLangNav();
      break;
      // amPa
      case 'papua':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextPapua[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextPapua[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Papua[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Papua[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Papua[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAmPaNav();
        closeLangNav();
      break;
      case 'biak':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextBiak[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextBiak[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Biak[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Biak[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Biak[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAmPaNav();
        closeLangNav();
      break;
      case 'lani':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextLani[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextLani[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Lani[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Lani[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Lani[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAmPaNav();
        closeLangNav();
      break;
      // asing & nasional
      case 'english':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextEng[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextEng[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Eng[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Eng[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Eng[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAsingNav();
        closeLangNav();
      break;
      case 'chinese':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextChinese[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextChinese[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Chinese[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Chinese[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Chinese[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAsingNav();
        closeLangNav();
      break;
      case 'italian':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextItalian[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextItalian[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Italian[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Italian[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Italian[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAsingNav();
        closeLangNav();
      break;
      case 'japan':
        for (let i = 0; i < indexTextList.length; i++) {indexTextList[i]= indexTextJapan[i];}
        for (let i = 0; i < onloadTextList.length; i++) {onloadTextList[i]= onloadTextJapan[i];}
        for (let i = 0; i < txt1.length; i++) {txt1[i]= txt1Japan[i];}
        for (let i = 0; i < txt2.length; i++) {txt2[i]= txt2Japan[i];}
        for (let i = 0; i < txt3.length; i++) {txt3[i]= txt3Japan[i];}
        newGameBtn.innerHTML = indexTextList[0];
        contBtn.innerHTML = indexTextList[1];
        langBtn.innerHTML = indexTextList[8];
        chooseLang.innerHTML = indexTextList[8];
        profBtn.innerHTML = indexTextList[2];
        enterName.innerHTML = indexTextList[10];
        chooseGender.innerHTML = indexTextList[5];
        maleBtn.innerHTML = indexTextList[6];
        femaleBtn.innerHTML = indexTextList[7];
        creditBtn.innerHTML = indexTextList[3];
        sideNavNewGame.innerHTML = indexTextList[0];
        sideNavBack.innerHTML= indexTextList[11];
        whatLang(lang);
        changeName();
        closeAsingNav();
        closeLangNav();
      break;
  }
}