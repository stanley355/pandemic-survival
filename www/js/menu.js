// loadGame
var loadGame;
function loadGameFunction() {
  loadGame = setTimeout(showScreen, 1000);
}
function showScreen() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderText").style.display = "none";
  document.getElementById("menuScreen").style.display = "block";
}

// main menu
var newGameBtn = document.getElementById('newGameBtn');   
var contBtn = document.getElementById('contBtn');    
var langBtn = document.getElementById("langBtn");     
var langNav = document.getElementById('langNav');  
var chooseLang = document.getElementById("chooseLang");
var menuScreen = document.getElementById("menuScreen");
var gameScreen = document.getElementById("gameScreen");
// var profBtn = document.getElementById("profBtn");
// var enterName = document.getElementById("enterName");
// var chooseGender = document.getElementById("chooseGender");
// var creditBtn = document.getElementById("creditBtn");

function openLangNav(){
    langNav.style.display = 'block';
    langNav.style.width = "290px";
}
function closeLangNav(){
    langNav.style.display = 'none';
    langNav.style.width = "0";
}
// function openProfNav(){
//     profNav.style.display = 'block';
//     profNav.style.width = "290px";
// }
// function closeProfNav(){
//     profNav.style.display = 'none';
//     profNav.style.width = "0";
// }


// main menu
document.body.onload = function(){ loadGameFunction(); changeLang('Indonesia'); };
newGameBtn.onclick= function(){ 
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  document.getElementById("screen1").style.display = 'block';
  initGame();
};

langBtn.onclick= function(){ openLangNav()};
document.getElementById("closeLangNavBtn").onclick= function(){ closeLangNav()};
document.getElementById("IND").onclick= function(){ changeLang('Indonesia')};
document.getElementById("ENG").onclick= function(){ changeLang('English')};
// profBtn.onclick= function(){ openProfNav()};
// document.getElementById("closeProfBtn").onclick= function(){ closeProfNav()};
// document.getElementById("creditBtn").addEventListener("click", openCreditNav());

// level1
// function openMenu() {
//     document.getElementById('menu').style.display = 'block';
// }
// function closeMenu() {
//     document.getElementById('menu').style.display = 'none';
// }

document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) {
    switch(e.key.toUpperCase()) {
        case "W": player1.moveUp(); break;
        case "S": player1.moveDown(); break;
        case "A": player1.moveLeft(); break;
        case "D": player1.moveRight(); break;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let c = 0; c<20; c++){
        for (let r= 0; r< 10; r++){
            background1.drawBackground(tilesImage2, c*40, r*40, 40, 40);
        }
    }
    land1a.drawLand(); //land first layer
    //don't mess up the order
    bench1.drawItem(props1Image);//bench near house 1a
    sprites1E.drawSprites(spritesMaskImage); //shopkeeper
    shop1.drawItem(stand2Image); //shop
    sprites1A.drawSprites(spritesImage); //sprites near house1a
    sprites1C.drawSprites(spritesImage); //sprite beside house1c
    sprites1D.drawSprites(spritesImage); //sprite in front of house1c
    sprites1F.drawSprites(spritesMaskImage); //shopkeeper twins
    sprites1G.drawSprites(spritesImage); //person near tent
    player1.drawSprites(spritesImage); // tokoh utama
    gate1.drawItem(gate1Image); //gate opening
    bucket1a.drawItem(bucket1Image); //first water bucket
    bucket1b.drawItem(bucket1Image); //second water bucket
    bucket1c.drawItem(bucket1Image);
    lamp1.drawItem(house2Image); //lamp in front of house1b
    tent1.drawItem(props3Image); //tent on southern area
    well1.drawItem(props3Image); //well on southeast area
    lumber1.drawItem(props3Image); //lumber in front of the house
    tree1.drawTree(); // gambar pepohonan
    sprites1B.drawSprites(spritesMaskImage); //gatekeeper
    //buildings
    house1a.drawItem(house1Image); //leftmost house
    house1b.drawItem(house3Image); //middle house
    house1c.drawItem(house3Image);//rightmost house
    // decrease(); // health decrease
    spriteAnimation(); //facing rules & player tasks
    requestAnimationFrame(draw);
}

function initGame() {
    ctxRender1();
    imageSources();
	  speedX = 5;
    speedY = 5;
    objects1(); //object list for level 1
    renderOnloadText(0); //onload text
    requestAnimationFrame(draw);
}

var openMenu = document.getElementById('openMenu');
var closeMenu = document.getElementById('closeMenu');
var onloadTextButton = document.getElementById('onloadTextButton');
var topArrow1 = document.getElementById('topArrow1');
var leftArrow1 = document.getElementById('leftArrow1');
var rightArrow1 = document.getElementById('rightArrow1');
var downArrow1 = document.getElementById('downArrow1');
var toggleBtn1 = document.getElementById('toggleBtn1');


// openMenu.onclick= function(){ openMenu()};
// closeMenu.onclick= function(){ closeMenu()};
onloadTextButton.onclick = function() {toggleOnloadText()};
toggleBtn1.onclick = function() {toggleText()};

// analog
topArrow1.onmousemove = function() {player1.moveUp();}
topArrow1.ondrag = function() {player1.moveUp();}
leftArrow1.onmousemove = function() {player1.moveLeft();}
leftArrow1.ondrag = function() {player1.moveLeft();}
rightArrow1.onmousemove = function() {player1.moveRight();}
rightArrow1.ondrag = function() {player1.moveRight();}
downArrow1.onmousemove = function() {player1.moveDown();}
downArrow1.ondrag = function() {player1.moveDown();}

var onloadTextListEng = [
  "Welcome to Surviving Covid Labyrinth game. In this game, you will have an adventure during Covid-19 pandemic." + "<br>" + "During your adventure, you will need to keep safe distance, wash hands with soap, use hand sanitizer, wear a mask, and avoid crowds.", //0
  "On right top of the screen, the is a healthbar. If the healthbar is finished, the game is over and you will need to start from the beginning for that level.", //1
  "Your adventure in Level 1 is completed if you safely return to your home at the end of the forest." + "<br>" + "Before you start your adventure, you would want to say good-bye to your best friend." + "<br>"+ "Selamat berpetualang!", //2
]

// language change
function changeLang(lang) {
  switch(lang){
      case 'Indonesia':
          rotatePhone.innerHTML = 'Miringkan Ponsel Anda untuk Bermain';
          newGameBtn.innerHTML = "Mulai Baru";
          contBtn.innerHTML = "Lanjut permainan";
          langBtn.innerHTML = "Bahasa";
          chooseLang.innerHTML = "Pilih Bahasa Anda";
          profBtn.innerHTML = "Profil";
          // enterName.innerHTML = "Masukkan Nama Anda";
          // chooseGender.innerHTML = 'Pilih Gender Kamu';
          // creditBtn.innerHTML = "Kredit";
      break;
      case 'English':
          rotatePhone.innerHTML = 'Rotate your Phone to Play';
          newGameBtn.innerHTML = "New Game";
          contBtn.innerHTML = "Continue";
          langBtn.innerHTML = "Language";
          chooseLang.innerHTML = "Choose your Language";
          profBtn.innerHTML = "Profile";
          // enterName.innerHTML = "Enter your Name";
          // chooseGender.innerHTML = 'Choose your Gender';
          // creditBtn.innerHTML = "Credits";
          for (let i = 0; i <= 2; i++){
            onloadTextList[i] = onloadTextListEng[i]
          }
          // onloadTextList[0] = 'a';
          // onloadTextList[1] = 'b';
          // onloadTextList[2] = 'c';
      break;
      default:
          rotatePhone.innerHTML = 'Miringkan Ponsel Anda untuk Bermain';
          newGameBtn.innerHTML = "Mulai Baru";
          contBtn.innerHTML = "Lanjut permainan";
          langBtn.innerHTML = "Bahasa";
          chooseLang.innerHTML = "Pilih Bahasa Anda";
          profBtn.innerHTML = "Profil";
          // enterName.innerHTML = "Masukkan Nama Anda";
          // chooseGender.innerHTML = 'Pilih Gender Kamu';
          // creditBtn.innerHTML = "Kredit";
  }
}
