// loadGame on first time
var loadGame;

function loadGameFunction() {
  loadGame = setTimeout(showScreen, 1000);
}

function showScreen() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderText").style.display = "none";
  document.getElementById("menuScreen").style.display = "block";
}

document.body.onload = function(){ loadGameFunction(); changeLang('Default');}

// main menu
var menuScreen = document.getElementById("menuScreen");
var gameScreen = document.getElementById("gameScreen");


// New game button
var newGameBtn = document.getElementById('newGameBtn');

newGameBtn.onclick= function(){ 
  closeContNav();
  closeLangNav();
  closeProfNav();
  closeCreditNav();
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  document.getElementById("screen1").style.display = 'block';
  document.getElementById("analog1").style.display = 'block';
  document.getElementById("toggleBtn1").style.display = 'block';
  audio1.play();
  initGame();
};

// Continue button
var contBtn = document.getElementById('contBtn'); //continue button on main menu
var contNav = document.getElementById('contNav');  //the contNav
var closeContNavBtn = document.getElementById("closeContNavBtn"); // 'X' button on contNav
var lvl1Btn = document.getElementById('lvl1Btn');
var lvl2Btn = document.getElementById('lvl2Btn');
var lvl3Btn = document.getElementById('lvl3Btn');

function openContNav(){
  contNav.style.display = 'block';
  contNav.style.width = "300px";
}

function closeContNav(){
  contNav.style.display = 'none';
  contNav.style.width = "0";
}

contBtn.onclick= function(){ openContNav()}; //open contNav
closeContNavBtn.onclick= function(){ closeContNav()}; //close contNav

lvl1Btn.onclick= function(){ 
  closeContNav();
  closeLangNav();
  closeProfNav();
  closeCreditNav();
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  document.getElementById("screen1").style.display = 'block';
  document.getElementById("analog1").style.display = 'block';
  document.getElementById("toggleBtn1").style.display = 'block';
  audio1.play();
  initGame();
};

lvl2Btn.onclick= function(){ 
  closeContNav();
  closeLangNav();
  closeProfNav();
  closeCreditNav();
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  document.getElementById("screen2").style.display = 'block';
  document.getElementById("analog2").style.display = 'block';
  document.getElementById("toggleBtn2").style.display = 'block';
  audio2.play();
  initGame2();
};

lvl3Btn.onclick= function(){ 
  closeContNav();
  closeLangNav();
  closeProfNav();
  closeCreditNav();
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  document.getElementById("screen3").style.display = 'block';
  document.getElementById("analog3").style.display = 'block';
  document.getElementById("toggleBtn3").style.display = 'block';
  audio3.play();
  initGame3();
};

//..................................................................


// Language Button
var langBtn = document.getElementById("langBtn");     
var langNav = document.getElementById('langNav');  
var chooseLang = document.getElementById("chooseLang");
var closeLangNavBtn = document.getElementById("closeLangNavBtn");
function openLangNav(){
  langNav.style.display = 'block';
  langNav.style.width = "300px";
}
function closeLangNav(){
  langNav.style.display = 'none';
  langNav.style.width = "0";
}
langBtn.onclick= function(){ openLangNav()};
closeLangNavBtn.onclick= function(){ closeLangNav()};

// language sub section
// sumatera lang
var sumLang = document.getElementById("sumLang");
var closeSumNavBtn = document.getElementById("closeSumNavBtn");
function openSumNav() {
  document.getElementById("sumLangNav").style.display = 'block';
  document.getElementById("sumLangNav").style.width = "300px";
}
function closeSumNav() {
  document.getElementById("sumLangNav").style.display = 'none';
  document.getElementById("sumLangNav").style.width = "0";
}
sumLang.onclick= function(){ openSumNav();}
closeSumNavBtn.onclick= function(){ closeSumNav(); }
document.getElementById("aneuk").onclick= function(){ changeLang('aneuk')};
document.getElementById("nias").onclick= function(){ changeLang('nias')};
document.getElementById("minang").onclick= function(){ changeLang('minang')};
document.getElementById("jambi").onclick= function(){ changeLang('jambi')};
document.getElementById("kerinci").onclick= function(){ changeLang('kerinci')};
document.getElementById("palembang").onclick= function(){ changeLang('palembang')};
document.getElementById("besemah").onclick= function(){ changeLang('besemah')};
document.getElementById("bangka").onclick= function(){ changeLang('bangka')};
document.getElementById("nasal").onclick= function(){ changeLang('nasal')};
document.getElementById("rejang").onclick= function(){ changeLang('rejang')};
document.getElementById("lampung").onclick= function(){ changeLang('lampung')};

// jawa lang
var jawaLang = document.getElementById("jawaLang");
var closeSumNavBtn = document.getElementById("closeJawaNavBtn");
function openJawaNav() {
  document.getElementById("jawaLangNav").style.display = 'block';
  document.getElementById("jawaLangNav").style.width = "300px";
}
function closeJawaNav() {
  document.getElementById("jawaLangNav").style.display = 'none';
  document.getElementById("jawaLangNav").style.width = "0";
}
jawaLang.onclick= function(){ openJawaNav();}
closeJawaNavBtn.onclick= function(){ closeJawaNav(); }
document.getElementById("betawi").onclick= function(){ changeLang('betawi')};
document.getElementById("sunda").onclick= function(){ changeLang('sunda')};
document.getElementById("cirebon").onclick= function(){ changeLang('cirebon')};
document.getElementById("jawa").onclick= function(){ changeLang('jawa')};
document.getElementById("pemalang").onclick= function(){ changeLang('pemalang')};
document.getElementById("osing").onclick= function(){ changeLang('osing')};
document.getElementById("madura").onclick= function(){ changeLang('madura')};
document.getElementById("bali").onclick= function(){ changeLang('bali')};

// kalSul lang
var kalSulLang = document.getElementById("kalSulLang");
var closeKalSulNavBtn = document.getElementById("closeKalSulNavBtn");

function openKalSulNav() {
  document.getElementById("kalSulLangNav").style.display = 'block';
  document.getElementById("kalSulLangNav").style.width = "300px";
}

function closeKalSulNav() {
  document.getElementById("kalSulLangNav").style.display = 'none';
  document.getElementById("kalSulLangNav").style.width = "0";
}

kalSulLang.onclick= function(){ openKalSulNav();}
closeKalSulNavBtn.onclick= function(){ closeKalSulNav(); }
document.getElementById("ngaju").onclick= function(){ changeLang('ngaju')};
document.getElementById("kanayan").onclick= function(){ changeLang('kanayan')};
document.getElementById("maanyan").onclick= function(){ changeLang('maanyan')};
document.getElementById("lebang").onclick= function(){ changeLang('lebang')};
document.getElementById("manado").onclick= function(){ changeLang('manado')};
document.getElementById("bugis").onclick= function(){ changeLang('bugis')};
document.getElementById("tolaki").onclick= function(){ changeLang('tolaki')};
document.getElementById("ciacia").onclick= function(){ changeLang('ciacia')};

// NTlang
var NTLang = document.getElementById("NTLang");
var closeNTNavBtn = document.getElementById("closeNTNavBtn");

function openNTNav() {
  document.getElementById("NTLangNav").style.display = 'block';
  document.getElementById("NTLangNav").style.width = "300px";
}

function closeNTNav() {
  document.getElementById("NTLangNav").style.display = 'none';
  document.getElementById("NTLangNav").style.width = "0";
}

NTLang.onclick= function(){ openNTNav();}
closeNTNavBtn.onclick= function(){ closeNTNav(); }
document.getElementById("sasak").onclick= function(){ changeLang('sasak')};
document.getElementById("kupang").onclick= function(){ changeLang('kupang')};
document.getElementById("uab").onclick= function(){ changeLang('uab')};
document.getElementById("amarasi").onclick= function(){ changeLang('amarasi')};
document.getElementById("helong").onclick= function(){ changeLang('helong')};
document.getElementById("fataluku").onclick= function(){ changeLang('fataluku')};
document.getElementById("sabu").onclick= function(){ changeLang('sabu')};
document.getElementById("lamaholot").onclick= function(){ changeLang('lamaholot')};
document.getElementById("mangBar").onclick= function(){ changeLang('mangBar')};
document.getElementById("mangTeng").onclick= function(){ changeLang('mangTeng')};

// ambon & papualang
var amPaLang = document.getElementById("amPaLang");
var closeAmPaNavBtn = document.getElementById("closeAmPaNavBtn");

function openAmPaNav() {
  document.getElementById("amPaLangNav").style.display = 'block';
  document.getElementById("amPaLangNav").style.width = "300px";
}

function closeAmPaNav() {
  document.getElementById("amPaLangNav").style.display = 'none';
  document.getElementById("amPaLangNav").style.width = "0";
}

amPaLang.onclick= function(){ openAmPaNav();}
closeAmPaNavBtn.onclick= function(){ closeAmPaNav(); }
document.getElementById("papua").onclick= function(){ changeLang('papua')};
document.getElementById("biak").onclick= function(){ changeLang('biak')};
document.getElementById("lani").onclick= function(){ changeLang('lani')};

// asing lang
var asingLang = document.getElementById("asingLang");
var closeAsingNavBtn = document.getElementById("closeAsingNavBtn");

function openAsingNav() {
  document.getElementById("asingLangNav").style.display = 'block';
  document.getElementById("asingLangNav").style.width = "300px";
}

function closeAsingNav() {
  document.getElementById("asingLangNav").style.display = 'none';
  document.getElementById("asingLangNav").style.width = "0";
}

asingLang.onclick= function(){ openAsingNav();}
closeAsingNavBtn.onclick= function(){ closeAsingNav(); }
document.getElementById("indonesia").onclick= function(){ changeLang('indonesia')};
document.getElementById("english").onclick= function(){ changeLang('english')};
document.getElementById("chinese").onclick= function(){ changeLang('chinese')};
document.getElementById("italian").onclick= function(){ changeLang('italian')};
document.getElementById("japan").onclick= function(){ changeLang('japan')};
//..................................................................


// Profile Button
var profBtn = document.getElementById("profBtn");
var closeProfNavBtn = document.getElementById("closeProfNavBtn");
function openProfNav(){
  profNav.style.display = 'block';
  profNav.style.width = "300px";
}
function closeProfNav(){
  profNav.style.display = 'none';
  profNav.style.width = "0";
}
profBtn.onclick= function(){ openProfNav()};
closeProfNavBtn.onclick= function(){ closeProfNav()};

var enterName = document.getElementById("enterName"); //string telling the user to enter their name
var nameBox = document.getElementById('nameBox').value; //the name input box
var getNameBtn = document.getElementById("getName"); //the button showing to get the value of the name
var namaBaru;
getNameBtn.onclick = function (){
  namaBaru = nama.replace('Dwi', nameBox);
  nama = namaBaru;
  closeProfNav();
}

var chooseGender = document.getElementById("chooseGender");
var maleBtn = document.getElementById("male");
var femaleBtn = document.getElementById("female");

maleBtn.onclick = function() {changeGender('Male'); closeProfNav();}
femaleBtn.onclick = function() {changeGender('Female'); closeProfNav();}

function changeGender(gender) {
  if (gender === 'Male') {
    ismaleplayer = true;
  }
  else if (gender === 'Female') {
    ismaleplayer = false;
  }
  return true;
}
//..................................................................


// Credit Button
var creditBtn = document.getElementById("creditBtn");
var closeCreditNavBtn = document.getElementById("closeCreditNavBtn");
function openCreditNav(){
  creditNav.style.display = 'block';
  creditNav.style.width = "80%";
}
function closeCreditNav(){
  creditNav.style.display = 'none';
  creditNav.style.width = "0";
}
creditBtn.onclick = function() {openCreditNav()}
closeCreditNavBtn.onclick = function() {closeCreditNav()}
//..................................................................

// sideNav
var sideNavBtn = document.getElementById('sideNavBtn'); //sideNavBtn on top left of the screen
var closeSideNavBtn = document.getElementById('closeSideNavBtn'); //'X' button on sideNav
var sideNavNewGame = document.getElementById('sideNavNewGame'); //sideNav new game btn which reloads
var sideNavLang = document.getElementById('sideNavLang'); //sideNav lang which opens langBtn
var sideNavBack = document.getElementById('sideNavBack'); //sideNav Back to main Menu btn
function openSideNav() {
    pause = true;
    document.getElementById('sideNav').style.display = 'block';
    document.getElementById('sideNav').style.width = "300px";
}
function closeSideNav() {
    pause = false;
    document.getElementById('sideNav').style.display = 'none';
    document.getElementById('sideNav').style.width = "0px";
}
sideNavBtn.onclick = function() {openSideNav();}
closeSideNavBtn.onclick = function() {closeSideNav();}
sideNavNewGame.onclick = function() {location.reload();}
// sideNavLang.onclick = function() { openLangNav();}
sideNavBack.onclick= function(){ 
  closeContNav();
  closeLangNav();
  closeProfNav();
  closeCreditNav();
  closeSideNav();
  audio1.pause();
  audio3.pause();
  document.getElementById("screen1").style.display = 'none';
  document.getElementById("analog1").style.display = 'none';
  document.getElementById("toggleBtn1").style.display = 'none';
  document.getElementById("screen2").style.display = 'none';
  document.getElementById("analog2").style.display = 'none';
  document.getElementById("toggleBtn2").style.display = 'none';
  document.getElementById("screen3").style.display = 'none';
  document.getElementById("analog3").style.display = 'none';
  document.getElementById("toggleBtn3").style.display = 'none';
  document.getElementById("textBox").style.display = 'none';
  // pop out image
  handWashImg.style.display = 'none';
  sanitImg.style.display = 'none';
  tomatoImg.style.display = 'none';
  maskImg.style.display = 'none';
  breadImg.style.display = 'none';
  fishImg.style.display = 'none';
  // obtain Item
  obtSanitImg.style.display = 'none';
  obtFoodboxImg.style.display = 'none';
  obtTomatoImg.style.display = 'none';
  obtBreadImg.style.display = 'none';
  obtFishImg.style.display = 'none';
  obtMaskImg.style.display = 'none';
  pause = true;
  gameScreen.style.display = 'none';
  menuScreen.style.display = 'block';
};