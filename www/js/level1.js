var loadGame;

function loadGameFunction() {
  loadGame = setTimeout(showScreen, 1000);
}

function showScreen() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("textLoader").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
}

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
    decrease(); // health decrease
    spriteAnimation(); //facing rules & player tasks
    requestAnimationFrame(draw);
}

function initGame() {
    ctxRender();
    imageSources();
	speedX = 10;
    speedY = 10;
    objects1(); //object list for level 1
    renderOnloadText(0); //onload text
    requestAnimationFrame(draw);
}

var openMenu = document.getElementById('openMenu');
var closeMenu = document.getElementById('closeMenu');
var topArrow = document.getElementById('topArrow');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var downArrow = document.getElementById('downArrow');
var buttonA = document.getElementById('buttonA');
var onloadTextButton = document.getElementById('onloadTextButton');

document.body.onload = function(){ loadGameFunction(); };
// openMenu.onclick= function(){ openMenu()};
// closeMenu.onclick= function(){ closeMenu()};
onloadTextButton.onclick = function() {toggleOnloadText()};
buttonA.onclick = function() {toggleText()};

// analog
topArrow.onmousemove = function() {player1.moveUp();}
topArrow.ondrag = function() {player1.moveUp();}
leftArrow.onmousemove = function() {player1.moveLeft();}
leftArrow.ondrag = function() {player1.moveLeft();}
rightArrow.onmousemove = function() {player1.moveRight();}
rightArrow.ondrag = function() {player1.moveRight();}
downArrow.onmousemove = function() {player1.moveDown();}
downArrow.ondrag = function() {player1.moveDown();}

// initGame(); //level 1 render