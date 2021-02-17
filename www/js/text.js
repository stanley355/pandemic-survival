//textBox & pause
var tBox =  document.getElementById('textBox');
var t = document.getElementById("text");
var pause = false; //if pause = true, the player can't walk
var nama = document.getElementById('textBox').value;

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

// "{name} Hi.".replace("{name}", document.getElementById("").value)

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
		// document.getElementById('health1').value = '25000';
		// healthSpeed1 = 0;
		document.getElementById('obtainMaskImg').style.display = 'none';
		document.getElementById('obtainSanitImg').style.display = 'none';
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
        // health1.style.display = 'none';
        analog1.style.display = 'none';
        toggleBtn1.style.display = 'none';
        // health2.style.display = 'block';
        analog2.style.display = 'block';
        toggleBtn2.style.display = 'block';
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
   "Tetangga: Hai, " + nama + " Dengar-dengar bu Joko kena Covid.",
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
   "Penjual buah: Silakan dibeli, Dek. Buahnya baru datang.", //20
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
   "Tetangga: Oh, kamu sudah besar, ya. " + nama,
   "Nenek: Halo, " + nama +". Apa ada titipan dari kakekmu?",
   nama + ": Saya ke tempat Kakek dulu, Nek.", //50
   "Tangan tercuci!", //51
   nama + ": Ini sabun dan tomat dari pasar titipan Kakek.", //52
   "Nenek: Terima kasih " +nama + ". Tolong dicuci dulu, ya.",
   "Tomat sudah tercuci",
   nama + ": Sudah saya cuci, Nek.", //55
   "Nenek: Terima kasih. Ayo, masuk. Kita minum teh di dalam.",
   nama + ": Baik, Kek.",
   "Tomat sudah terbeli",
   "Hore, level 2 selesai.",
   nama + ": (Aku pakai cairan pembersih dulu)."   //60
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
			obtSanitImg.style.display = 'none';
		}
		else if (buySoap2 == true && buyTomato == true && washTomato == true) {t.innerHTML = txt2[56]; }
		else {t.innerHTML = txt2[50];}
	}
	else if (t.innerHTML === txt2[52]) { t.innerHTML = txt2[53]; txt2[51] = txt2[54];  }
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
		// healthSpeed2 = 0;
		// document.getElementById('health2').value = '40000';
        document.getElementById('screen2').style.display = 'none';
        document.getElementById('screen3').style.display = 'block';
        // health2.style.display = 'none';
        analog2.style.display = 'none';
        toggleBtn2.style.display = 'none';
        // health3.style.display = 'block';
        analog3.style.display = 'block';
        toggleBtn3.style.display = 'block';
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
		"Saudara: Hai " + nama + " lama tidak jumpa!",
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
		nama + ": Ada apa ini?", //96
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
		// healthSpeed3 = 0;
		// document.getElementById('health3').value = '60000';
		document.getElementById('screen3').style.display = 'none';
		document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('menuScreen').style.display = 'block';
		document.getElementById('obtainBreadImg').style.display = 'none';
		document.getElementById('obtainFishImg').style.display = 'none';
		document.getElementById('obtainMaskImg').style.display = 'none';
        // health3.style.display = 'none';
        analog3.style.display = 'none';
        toggleBtn3.style.display = 'none';

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

