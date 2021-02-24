var canvas1, canvas2, canvas3, ctx, ctxWidth, ctxHeight;
var speedX, speedY;
function ctxRender1(){
    canvas1 = document.getElementById("screen1");
	ctx = canvas1.getContext("2d");
	ctxWidth = 305;
	ctxHeight = 150;
}
function ctxRender2(){
    canvas2 = document.getElementById("screen2");
	ctx = canvas2.getContext("2d");
	ctxWidth = 305;
	ctxHeight = 150;
}
function ctxRender3(){
    canvas3 = document.getElementById("screen3");
	ctx = canvas3.getContext("2d");
	ctxWidth = 305;
	ctxHeight = 150;
}

var tilesImage, tilesImage2, treesImage, playersImage;
function imageSources(){
	//background
    tilesImage = new Image();
	tilesImage.src = 'img/tiles.png';

	tilesImage2 = new Image();
	tilesImage2.src = 'img/tiles2.png';
	
	fullTilesImage = new Image();
    fullTilesImage.src = 'img/fullTiles.png';

	treesImage = new Image();
	treesImage.src = 'img/trees.png';
	
	trees2Image = new Image();
	trees2Image.src = 'img/trees2.png';

	trees3Image = new Image();
	trees3Image.src = 'img/trees3.png';

    //main character
    playersImage = new Image();
    playersImage.src = 'img/players.png';

	//sprites list 576x384 pic
	spritesAPDImage = new Image();
	spritesAPDImage.src = 'img/spritesAPD.png';

	spritesImage = new Image();
	spritesImage.src = 'img/sprites.png';

	spritesMaskImage = new Image();
	spritesMaskImage.src = 'img/spritesMask.png';

	spritesImage2 = new Image();
	spritesImage2.src = 'img/sprites2.png';

	spritesMaskImage2 = new Image();
	spritesMaskImage2.src = 'img/spritesMask2.png';

	spritesImage3 = new Image();
	spritesImage3.src = 'img/sprites3.png';

	spritesMaskImage3 = new Image();
	spritesMaskImage3.src = 'img/spritesMask3.png';

	//char list 576x384 pic
	charImage2 = new Image();
	charImage2.src = 'img/char2.png';

	charMaskImage2 = new Image();
	charMaskImage2.src = 'img/char2Mask.png';
	
	//houses source
	house1Image = new Image();
	house1Image.src = 'img/house1.png';

	house2Image = new Image();
	house2Image.src = 'img/house2.png';

	house3Image = new Image();
	house3Image.src = 'img/house3.png';

	house4Image = new Image();
	house4Image.src = 'img/house4.png';

	house5Image = new Image();
	house5Image.src = 'img/house5.png';

	house6Image = new Image();
	house6Image.src = 'img/house6.png';

	house7Image = new Image();
	house7Image.src = 'img/house7.png';

	house8Image = new Image();
	house8Image.src = 'img/house8.png';

	house9Image = new Image();
	house9Image.src = 'img/house9.png';

	bk1Image = new Image();
	bk1Image.src = 'img/bk1.png';

	bk2Image = new Image();
	bk2Image.src = 'img/bk2.png';

	bk3Image = new Image();
	bk3Image.src = 'img/bk3.png';

	bk4Image = new Image();
	bk4Image.src = 'img/bk4.png';

	bk5Image = new Image();
	bk5Image.src = 'img/bk5.png';

	bk6Image = new Image();
	bk6Image.src = 'img/bk6.png';

	bk7Image = new Image();
	bk7Image.src = 'img/bk7.png';

	bk8Image = new Image();
	bk8Image.src = 'img/bk8.png';

	bk9Image = new Image();
	bk9Image.src = 'img/bk9.png';

	bk10Image = new Image();
	bk10Image.src = 'img/bk10.png';

	stand1Image = new Image();
	stand1Image.src = 'img/stand1.png';

	stand2Image = new Image();
	stand2Image.src = 'img/stand2.png';

	stand3Image = new Image();
	stand3Image.src = 'img/stand3.png';

	stand4Image = new Image();
	stand4Image.src = 'img/stand4.png';

	stand5Image = new Image();
	stand5Image.src = 'img/stand5.png';

	stand6Image = new Image();
	stand6Image.src = 'img/stand6.png';

	//items list
	bucket1Image = new Image(); // water filled bucket
	bucket1Image.src = 'img/bucket1.png';
	
	props1Image = new Image();
	props1Image.src = 'img/props1.png';

	props2Image = new Image();
	props2Image.src = 'img/props2.png';

	props3Image = new Image();
	props3Image.src = 'img/props3.png';

	props4Image = new Image();
	props4Image.src = 'img/props4.png';

	sign1Image = new Image();
	sign1Image.src = 'img/sign1.png';

	fountains1Image = new Image();
	fountains1Image.src = 'img/fountains.png';

	gate1Image = new Image();
	gate1Image.src = 'img/gate1.png';
	
	car1Image = new Image();
	car1Image.src = 'img/truck1.png';
	
	car2Image = new Image();
	car2Image.src = 'img/car2.png';

	car3Image = new Image();
	car3Image.src = 'img/car3.png';

	car4Image = new Image();
	car4Image.src = 'img/car4.png';

	car5Image = new Image();
	car5Image.src = 'img/car5.png';
	
	tombImage = new Image();
	tombImage.src = 'img/tomb.png';
}

//showing image for certain item
function showItemImage(txtNum){
	switch(txtNum){
		//level 1
		case 4: 
		imgList.style.display = 'block';
		document.getElementById("handWashImg").style.display = 'block';
		document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
		document.getElementById("textBox").style.opacity ='0.8';
		break;
		case 28:
		imgList.style.display = 'block';
		document.getElementById("handWashImg").style.display = 'block';
		document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
		document.getElementById("textBox").style.opacity ='0.8';
		break;
		//level 2
		case 26:
			imgList.style.display = 'block';
			document.getElementById("handWashImg").style.display = 'block';
			document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
			document.getElementById("textBox").style.opacity ='0.8';
		break;
		case 51:
			imgList.style.display = 'block';
			document.getElementById("handWashImg").style.display = 'block';
			document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
			document.getElementById("textBox").style.opacity ='0.8';
		break;
		case 54:
			imgList.style.display = 'block';
			document.getElementById("tomatoImg").style.display = 'block';
			document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
			document.getElementById("textBox").style.opacity ='0.8';
		break;
		//level 3
		case 105:
			imgList.style.display = 'block';
			document.getElementById("carCrashImg").style.display = 'block';
			document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
			document.getElementById("textBox").style.opacity ='0.8';
		break;
		default:
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
	}
}

//objects list for level 1
var background1, player1, tree1, ismaleplayer;
ismaleplayer = true;

function objects1(){
	//pic X,Y,Width,Height & canvas X,Y,Width,Heigt
	background1 = new Background(0, 43, 40, 40);
	//land landNum, cols, rows, landY
	land1a = new LandList(0, 27, 16, 5); //1st layer
	//sprites

	var posY;
	posY = ismaleplayer ? 0 : 192;

	player1 = new Player(48, posY, 45, 48, 120, 50, 30, 30); //gambar tokoh utama 
	sprites1A = new Sprites(1, 2, 45, 48, 30, 45, 30, 30); //sprites level 1 no 1 - near house 1
	sprites1B = new Sprites(7, 4, 45, 48, 305, 230, 30, 30); //sprites with mask level 1 no 2- gateKeeper
	sprites1C = new Sprites(10, 5, 45, 48, 600, 50, 30, 30); //sprites level 1 no 3 - granny beside house3c
	sprites1D = new Sprites(4, 5, 45, 48, 750, 110, 30, 30); //sprites level 1 no 4 - in front house3c
	sprites1E = new Sprites(10, 0, 45, 48, 395, 335, 30, 30); //sprites with mask level 1 no 5 - shopKeeper 
	sprites1F = new Sprites(10, 0, 45, 48, 460, 365, 30, 30); //sprites with mask level 1 no 6 - shopKeeper twins
	sprites1G = new Sprites(7, 0, 45, 48, 230, 360, 30, 30); //sprites level 1 no 6 - in front of the tent
	//items
	// land1 = new Land(); //gambar lantai
	tree1 = new TreeList(0, 27, 16); //gambar pohon - level, column, row
	//buildings
	house1a = new Item(15, 15, 190, 190, 35, 90, 90, 90); // first house - leftmost house
	house1b = new Item(410, 210, 145, 145, 440, 95, 90, 90) //second house - in the middle of forest
	house1c = new Item(20, 20, 250, 190, 625, 0, 160, 100); // third house - rightmost house 
	shop1 = new Item(262, 545, 140, 92, 360, 340, 97, 45); //shop in the southern area
	//items
	bench1 = new Item(128, 450, 64, 32, 250, 40, 80, 28); //bench near house 1a
	bucket1a = new Item(25, 25, 50, 50, 35, 215, 25, 20); //first water bucket - near house1a
	bucket1b = new Item(25, 25, 50, 50, 35, 230, 25, 20); //second water bucket - near house1a
	bucket1c = new Item(25, 25, 50, 50, 755, 160, 25, 20); //second water bucket - near house1c
	lamp1 = new Item(345, 605, 85, 140, 380, 260, 50, 50); //streetLamp in front of house 1c
	lumber1 = new Item(385, 315, 95, 95, 490, 285, 50, 50); //lumber in front of house 1c
	tent1 = new Item(575, 0, 50, 80, 240, 320, 40, 40);//tent in the forest southwest
	well1 = new Item(525, 0, 50, 95, 745, 400, 35, 55);//well in the forest southeast
	gate1 = new Item(580, 90, 175, 120, 290, 220, 60, 40); //gate near sprite1B

}

//collision check for distinct objects level 1
function itemCollisionCheck(){
	//spritesName, topBottom, rightLeft, txtNum
	if (
	//items
	tree1.checkCollision(player1)
	|| bucket1a.checkCollision(player1, -2, -10, 4) //text
	|| bucket1b.checkCollision(player1, -2, -10, 4) //text
	|| bucket1c.checkCollision(player1, -2, -8, 28) //text
	|| lumber1.checkCollision(player1, -5, 0)
	|| lamp1.checkCollision(player1, -15, -10) 
	|| tent1.checkCollision(player1, -10, 0) 
	|| well1.checkCollision(player1, -20, -5, 0) 
	//buildings
	|| house1a.checkCollision(player1, -8, -13) 
	|| house1b.checkCollision(player1, 0, 0)
	|| house1c.checkCollision(player1, 0, 0)
	|| shop1.checkCollision(player1, -25, 0, 23)
	//sprites 
	|| sprites1A.checkCollision(player1, -10, -10, 1) 
	|| sprites1B.checkCollision(player1, 0, -10, 6) 
	|| sprites1C.checkCollision(player1, 0, -10, 11) 
	|| sprites1D.checkCollision(player1, 0, -10, 17) 
	|| sprites1F.checkCollision(player1, -15, -10, 20) 
	|| sprites1G.checkCollision(player1, -15, -10, 5) 
	){ return true}
	else {return false}
}

var background2, backTree2a, player2, tree2;
function objects2(){
	background2 = new Background(0, 43, 64, 42);
	land2a = new LandList(1, 30, 34, 5); //lvlNum, col, row, landY
	land2b = new LandList(2, 30, 34, 4); //lvlNum, col, row, landY
	land2c = new LandList(3, 30, 34, 2); //lvlNum, col, row, landY
	tree2 = new TreeList(1, 30, 34); //level 2 tree, 30 x 33
	//sprites
	var posY;
	posY = ismaleplayer ? 0 : 192;

	player2 = 		new Player(192, posY, 45, 48, 100, 67, 30, 30);
	sprites2a = 	new Sprites(4, 5, 45, 48, 120, 320, 30, 30); //players' mom
	sprites2b = 	new Sprites(1, 2, 45, 48, 70, 320, 30, 30); //sprites beside player's mom
	sprites2c = 	new Sprites(7, 4, 45, 48, 520, 50, 30, 30); //nurse sprites
	sprites2d = 	new Sprites(10, 0, 45, 48, 820, 277, 30, 30); //props shopkeeper
	sprites2e = 	new Sprites(7, 4, 45, 48, 380, 680, 30, 30); //penjaga tower
	sprites2f = 	new Sprites(10, 5, 45, 48, 830, 480, 30, 30); //grandma
	sprites2g = 	new Sprites(4, 2, 45, 48, 400, 240, 23, 23); //child near fountain
	sprites2h = 	new Char(8, 7, 32, 32, 535, 145, 26, 26); //kakek near puskesmas
	sprites2i = 	new Sprites(1, 4, 45, 48, 730, 37, 30, 30); //clothes shopkeeper
	sprites2j = 	new Sprites(10, 3, 45, 48, 725, 60, 30, 30); //clothes shopbuyer
	sprites2k = 	new Char(1, 4, 32, 32, 810, 37, 30, 30); //fruit shopkeeper
	sprites2l = 	new Sprites(7, 6, 45, 48, 700, 200, 30, 30); //bread shopbuyer
	sprites2m = 	new Sprites(1, 2, 45, 48, 700, 310, 30, 30); //hawker shopkeeper
	sprites2n = 	new Sprites(10, 1, 45, 48, 90, 660, 30, 30); //scout boy
	sprites2o = 	new Sprites(4, 0, 45, 48, 785, 700, 30, 30); //grandma neighbour
	sprites2p = 	new Sprites(4, 5, 45, 48, 582, 185, 30, 30); //ibu near puskesmas
	sprites2q = 	new Char(1, 0, 32, 32, 560, 185, 26, 26); //anak near puskesmas
	sprites2r = 	new Sprites(7, 0, 45, 45, 560, 110, 26, 26); //pemuda near puskesmas
	//buildings
	house2a = 		new Item(10, 30, 275, 257, 125, 37, 120, 120); //red roof
	house2b = 		new Item(430, 335, 240, 295, 30, 220, 120, 120); //blue roof
	house2c = 		new Item (215, 0, 100, 225, 390, 5, 120, 180); //balai desa
	house2d = 		new Item (40, 25, 110, 110, 550, -20, 100, 100); //puskesmas
	house2e = 		new Item(335, 230, 160, 200, 785, 360, 120, 120); //players' grandma house
	house2f = 		new Item(250, 0, 95, 225, 785, 575, 80, 140);//grandma neighbour house
	house2g = 		new Item(130, 405, 160, 100, 300, 610, 120, 70);//house beside tower
	house2gfront = 	new Item(382, 170, 100, 70, 385, 710, 40, 40);//stove in front of house2g
	tower2 = 		new Item(350, 530, 180, 320, 410, 520, 100, 160);
	tower2front = 	new Item(530, 142, 140, 97, 430, 680, 70, 70);
	//shops
	shop2a = 		new Item(115, 540, 140, 97, 690, 40, 90, 50); //clothes shop
	shop2b = 		new Item(260, 545, 140, 90, 780, 40, 90, 50); //fruit shop
	shop2c = 		new Item(18, 545, 95, 93, 690, 170, 90, 45);//bread shop
	shop2cBack 	= 	new Item(690, 675, 100, 50, 690, 160, 92, 25); //bread shop back
	shop2d 		= 	new Item(18, 640, 95, 90, 785, 280, 95, 50); //props shop
	shop2dBack1 = 	new Item(15, 370, 95, 75, 785, 245, 40, 40);//props shop back1
	shop2dBack2 = 	new Item(15, 370, 95, 70, 835, 240, 40, 40);//props shop back2
	shop2eMat 	=	new Item(407, 144, 62, 63, 670, 310, 90, 70) //hawker fruit shop mat
	shop2eLeft 	= 	new Item(448, 450, 32, 65, 670, 310, 30, 40);//hawker fruit shop left
	shop2eBottom = 	new Item(385, 480, 95, 32, 670, 345, 90, 25);//hawker fruit shop bottom
	//props
	pot2a = new Item(255, 385, 125, 60, 30, 10, 70, 60); //pot beside house2a
	pot2b = new Item(50, 240, 45, 150, 35, 310, 30, 80); //plant in front house2b
	bench2a = new Item(97, 420, 30, 90, 35, 110, 25, 70); //bench near house2a
	bench2b = new Item(128, 448, 65, 35, 400, 220, 80, 30); //bench near balai desa
	bench2c = new Item(128, 448, 65, 35, 330, 400, 80, 30); //bench near tower
	sign2a = new Item(192, 130, 32, 30, 600, 50, 20, 20); //health sign
	lamp2a = new Item(257, 40, 30, 80, 655, 35, 25, 50); //lamp beside puskesmas
	fountains2a = new Item(0, 105, 195, 90, 390, 260, 90, 45);
	chair2a = new Item(0, 290, 30, 30, 535, 115, 25, 25); //puskesmas chair first row
	chair2b = new Item(0, 290, 30, 30, 560, 115, 25, 25);
	chair2c = new Item(0, 290, 30, 30, 585, 115, 25, 25);
	chair2e = new Item(0, 290, 30, 30, 535, 155, 25, 25); //puskesmas chair second row
	chair2f = new Item(0, 290, 30, 30, 560, 155, 25, 25);
	chair2g = new Item(0, 290, 30, 30, 610, 155, 25, 25);
	chair2h = new Item(0, 290, 30, 30, 535, 195, 25, 25); //puskesmas chair third row
	chair2i = new Item(0, 290, 30, 30, 560, 195, 25, 25); 
	chair2j = new Item(0, 290, 30, 30, 585, 195, 25, 25); 
	chair2k = new Item(0, 290, 30, 30, 610, 195, 25, 25); 
	bucket2a = new Item(25, 25, 50, 50, 275, 640, 25, 20); //bucket near tower
	bucket2b = new Item(25, 25, 50, 50, 275, 655, 25, 20); 
	bucket2c = new Item(25, 25, 50, 50, 730, 410, 25, 20); //bucket near grandma house
	bucket2d = new Item(25, 25, 50, 50, 755, 410, 25, 20); 
	bridge2a = new Item(352, 65, 32, 30, 335, 866, 30, 35);
	bridge2b = new Item(352, 65, 32, 30, 335, 900, 30, 35);
	bridge2c = new Item(352, 65, 32, 30, 785, 835, 30, 35);
	bridge2d = new Item(352, 65, 32, 30, 785, 870, 30, 35);
	tent2 = new Item(575, 0, 50, 80, 80, 610, 40, 40);//tent in the forest southwest
}
//collision check for distinct objects level 1
function itemCollisionCheck2(){
	//spritesName, topBottom, rightLeft, txtNum
	if (
	//items
	tree2.checkCollision(player2) 
	|| sprites2a.checkCollision2(player2, -15, -15, 0) //players' mom
	|| sprites2b.checkCollision2(player2, -15, -15, 3) //sprites beside players' mom
	|| sprites2c.checkCollision2(player2, -15, -15, 13) //nurse sprites
	|| sprites2e.checkCollision2(player2, 0, -10, 27) //penjaga tower
	|| sprites2f.checkCollision2(player2, -10, -15, 49) //players' grandma
	|| sprites2g.checkCollision2(player2, 0, -10, 4) //kids near fountain
	|| sprites2h.checkCollision2(player2, -10, -10, 10) //kakek near puskesmas
	|| sprites2j.checkCollision2(player2, -10, -15, 15) //clothes shopbuyer
	|| sprites2l.checkCollision2(player2, -15, -15, 19) //bread shopbuyer
	|| sprites2m.checkCollision2(player2, -10, -10, 20) //hawker shopkeeper
	|| sprites2n.checkCollision2(player2, -15, -15, 24) //scout boy
	|| sprites2o.checkCollision2(player2, -15, -10, 48) //grandma neighbour
	|| sprites2p.checkCollision2(player2, -5, -15, 6) //ibu near puskesmas
	|| sprites2q.checkCollision2(player2, -10, -15, 5) //anak near puskesmas
	|| sprites2r.checkCollision2(player2, -6, -10, 12) //pemuda near puskesmas
	//buildings (spritesName, topBottom, rightLeft, txtNum)
	|| house2a.checkCollision2(player2, -25, -10) //red roof house
	|| house2b.checkCollision2(player2, -25, -5) //blue roof house
	|| house2c.checkCollision2(player2, 0, -20) //balai desa
	|| house2d.checkCollision2(player2, -5, -5) //puskesmas
	|| house2e.checkCollision2(player2, -10, -5) //grandma house
	|| house2f.checkCollision2(player2, -5, -10) //grandma neighbour house
	|| house2g.checkCollision2(player2, -15, 0) //house beside tower
	|| house2gfront.checkCollision2(player2, 0, -10) //stove
	|| bucket2a.checkCollision2(player2, 0, -10, 26) 
	|| bucket2b.checkCollision2(player2, -20, -10, 26) 
	|| bucket2c.checkCollision2(player2, -20, 0, 51) 
	|| bucket2d.checkCollision2(player2, -20, 0, 51) 
	//stand
	|| shop2a.checkCollision2(player2, -25, 0) //clothe shop
	|| shop2b.checkCollision2(player2, -25, 0, 16) //fruit shop
	|| shop2c.checkCollision2(player2, -25, -10) //bread shop
	|| shop2cBack.checkCollision2(player2, -5, -15)
	|| shop2d.checkCollision2(player2, -25, -10, 22) //props shop
	|| shop2dBack1.checkCollision2(player2, -15, -10)
	|| shop2dBack2.checkCollision2(player2, -20, 0)
	|| shop2eLeft.checkCollision2(player2, 0, 0) //hawker fruit lef
	|| shop2eBottom.checkCollision2(player2, -8, 0)
	//props
	|| lamp2a.checkCollision2(player2, -25, 0)
	|| pot2a.checkCollision2(player2, -10, 0)
	|| pot2b.checkCollision2(player2, 0, -5)
	|| fountains2a.checkCollision2(player2, -10, 0)
	|| bench2a.checkCollision2(player2, 0, 0)
	|| tent2.checkCollision2(player2, -5, 0) 
	){ return true}
	else {return false}
}

var background3, tree3, player3;
function objects3(){
	background3 = new Background(0, 43, 64, 42);
	land3a = new LandList(4, 50, 67, 4); //lvlNum, col, row, landY //2nd layer - roads
	land3b = new LandList(5, 50, 67, 5); //lvlNum, col, row, landY //1st layer - pavement
	tree3 = new TreeList(2, 50, 65);
	//items
	trees3a = new Item(8, 110, 190, 90, 250, 1590, 140, 80);  //trees in front cafe
	trees3b = new Item(8, 110, 190, 90, 115, 1550, 140, 80);  //trees in front cafe
	trees3c = new Item(205, 110, 190, 90, 828, 1410, 140, 80);  //trees in front walkot
	trees3d = new Item(108, 110, 190, 90, 1145, 900, 140, 80); //trees behind house 3ai
	trees3e = new Item(200, 10, 190, 90, 1230, 1370, 120, 120); //trees behind house 3ar
	trees3f = new Item(8, 110, 380, 90, 310, 525, 290, 80); //trees behind hospital
	trees3g = new Item(108, 110, 190, 90, 1200, 250, 140, 80); //trees behind minimarket
	trees3h = new Item(95, 10, 110, 150, 220, 1270, 70, 90); //trees near house3p
	trees3i = new Item(95, 170, 110, 150, 220, 1310, 70, 90); //trees near house3p
	car3a = new Item(155, 100, 180, 92, 10, -40, 140, 100); //car at start point
	car3b = new Item(20, 180, 130, 70, 200, 905, 100, 80); //car near post office
	car3c = new Item(65, 0, 45, 65, 1300, 40, 50, 80); //car at city northeast
	car3d = new Item(310, 80, 50, 70, 1355, 40, 50, 80);
	car3e = new Item(180, 0, 90, 60, 900, 420, 90, 70); //truck in front factory
	car3f = new Item(415, 20, 60, 85, 750, 570, 70, 100); //cars in front factory
	car3g = new Item(475, 182, 60, 80, 820, 570, 70, 100); 
	car3h = new Item(475, 352, 60, 80, 890, 575, 70, 100);
	car3i = new Item(155, 200, 190, 100, 990, 570, 150, 120); //bus in front factory
	car3j = new Item(940, 345, 60, 90, 1170, 580, 60, 90);//ambulance near tomb
	car3k = new Item(270, 30, 55, 85, 30, 450, 70, 120); //truck near market
	car3l = new Item(310, 150, 50, 70, 80, 860, 50, 100); //car near house3m
	car3m = new Item(610, 85, 55, 60, 100, 1730, 50, 100); //car in front house3aa
	car3n = new Item(610, 155, 55, 60, 180, 1730, 50, 100);
	car3o = new Item(0, 160, 120, 55, 100, 1860, 100, 60); //car at  city bottom
	car3p = new Item(20, 255, 125, 65, 500, 760, 100, 70); //car in the middle of city
	car3q = new Item(10, 30, 70, 160, 1225, 1250, 90, 120); //bus behind house3ar
	car3r = new Item(810, 330, 122, 82, 910, -200, 100, 90); //ambulance at endgame //canY = 110
	sign3a = new Item(295, 625, 40, 45, 625, 430, 25, 25);
	sign3b = new Item(337, 625, 40, 45, 710, 430, 25, 25);
	fence3a = new Item(395, 0, 175, 45, 410, 1240, 120, 30); //fence in front post office
	fence3b = new Item(395, 0, 175, 45, 530, 1240, 100, 30); //fence in front post office
	barrel3a = new Item(450, 32, 65, 90, 200, 310, 75, 75); //barrel behind radio tower
	barrel3b = new Item(450, 32, 65, 90, 275, 310, 75, 75); //barrel behind radio tower
	tomb3a = new Item(0, 45, 190, 195, 1350, 580, 120, 120);
	tomb3b = new Item(0, 432, 190, 97, 1350, 700, 120, 80); 
	//stand
	stand3a = new Item(140, 10, 95, 95, 520, 380, 80, 75); 
	stand3b = new Item(77, 10, 63, 95, 460, 380, 60, 75); 
	stand3c = new Item(12, 10, 65, 95, 400, 380, 60, 75); 
	stand3d = new Item(0, 60, 192, 35, 345, 318, 100, 25); //bottom stand behind stand abc
	stand3e = new Item(0, 105, 192, 35, 447, 318, 100, 25); 
	stand3f = new Item(0, 105, 95, 35, 549, 318, 50, 25);
	stand3g = new Item(0, 385, 195, 70, 70, 200, 100, 40); //top stand behind stand abc
	stand3h = new Item(0, 480, 195, 70, 170, 200, 100, 40);
	stand3i = new Item(0, 575, 195, 70, 270, 200, 100, 40);
	stand3j = new Item(0, 675, 195, 70, 370, 200, 100, 40);
	stand3k = new Item(0, 290, 190, 70, 470, 200, 100, 40);
	stand3l = new Item(195, 385, 45, 300, 70, 230, 25, 200); //vertical stand
	stand3m = new Item(0, 105, 95, 35, 30, 430, 65, 25); //vertical stand close
	stand3n = new Item(115, 540, 140, 97, 960, 1715, 90, 50); //stand at city south
	stand3o = new Item(18, 640, 95, 90, 1050, 1740, 95, 50); //stand at south city (props)
	stand3p = new Item(260, 545, 140, 90, 1145, 1715, 90, 50); //fruit shop
	stand3q = new Item(18, 545, 95, 93, 1235, 1740, 85, 50);//bread shop
	stand3r = new Item(257, 637, 140, 90, 1320, 1715, 90, 50); //meat shop
	stand3s = new Item(0, 375, 110, 75, 1230, 1080, 40, 40); //stand in front house 3ai
	//house
	house3a = new Item(45, 575, 150, 195, 320, 370, 80, 90); //house beside stand abc
	house3b = new Item(373, 60, 140, 200, 200, 320, 120, 150);
	house3c = new Item(373, 60, 140, 200, 200, 380, 120, 150);
	house3d = new Item(337, 0, 320, 430, 750, 230, 210, 230); //factory
	house3dSide = new Item(675, 140, 90, 195, 960, 305, 80, 103); //factory side
	house3dBack = new Item(260, 0, 185, 222, 750, 200, 150, 150); //trees beside factory
	house3dBack2 = new Item(260, 0, 185, 222, 890, 200, 150, 150); //trees beside factory
	house3e = new Item(125, 175, 110, 105, 420, 0, 90, 90); //house near top
	house3f = new Item(45, 50, 230, 230, 1038, 310, 100, 100); //minimarket near factory
	house3g = new Item(100, 135, 230, 250, 1135, 310, 100, 100); //house beside minimarket
	house3h = new Item(100, 135, 230, 250, 1232, 310, 100, 100);
	house3i = new Item(0, 10, 290, 390, 1038, 200, 130, 160); //house behind minimarket
	house3j = new Item(0, 10, 290, 390, 1165, 200, 130, 160); //house behind minimarket
	house3k = new Item(45, 40, 225, 225, 1240, 370, 100, 120); //house beside minimarket
	house3l = new Item(25, 0, 240, 750, 210, 420, 100, 300); //radio tower
	house3m = new Item(80, 85, 240, 255, 310, 530, 150, 180); //hospital
	house3n = new Item(373, 60, 140, 200, 200, 905, 120, 150); //house in front radio tower
	house3o = new Item(373, 60, 140, 200, 200, 995, 120, 150); //house in front radio tower
	house3p = new Item(45, 40, 225, 225, 220, 1105, 100, 120); //house in front radio tower
	house3q = new Item(60, 10, 180, 280, 317, 905, 120, 170); //house beside post office
	house3r = new Item(80, 40, 320, 420, 430, 905, 170, 220); //post office
	house3s = new Item(45, 50, 230, 230, 530, 1250, 100, 100); //minimarket in front post office
	house3t = new Item(0, 10, 290, 390, 400, 1250, 130, 160); //house beside minimarket
	house3u = new Item(0, 10, 290, 390, 400, 1340, 130, 160); //house beside minimarket
	house3v = new Item(125, 20, 140, 125, 405, 1450, 110, 90); //cafe
	house3w = new Item(0, 10, 290, 390, 550, 1540, 140, 160); //house in front cafe
	house3x = new Item(0, 10, 290, 390, 550, 1630, 140, 160); //house in front cafe
	house3y = new Item(0, 10, 290, 390, 422, 1630, 130, 160); //house in front cafe
	house3z = new Item(50, 100, 230, 460, 255, 1610, 130, 160); 
	house3aa = new Item(50, 100, 230, 460, 125, 1570, 130, 160); 
	house3ab = new Item(373, 60, 140, 200, 845, 935, 120, 150); //house behind walikota
	house3ac = new Item(373, 60, 140, 200, 845, 995, 120, 150); //house behind walikota
	house3ad = new Item(10, 10, 330, 430, 760, 1090, 200, 250); //walikota
	house3ae = new Item(0, 10, 290, 390, 960, 1210, 120, 200); //house beside walikota
	house3af = new Item(45, 50, 230, 230, 965, 1350, 100, 120); //minimarket near walkot
	house3ag = new Item(373, 60, 140, 200, 835, 1440, 120, 150); //house in front walkot
	house3ah = new Item(373, 60, 140, 200, 835, 1500, 120, 150); //house in front walkot
	house3ai = new Item(373, 60, 140, 200, 1150, 900, 120, 150); //house beside house3ab
	house3aj = new Item(373, 60, 140, 200, 1250, 900, 120, 150); //house beside house3ab
	house3ak = new Item(373, 60, 140, 200, 1350, 900, 120, 150); //house beside house3ab
	house3al = new Item(80, 40, 320, 420, 1280, 810, 190, 150); 
	house3am = new Item(0, 10, 290, 390, 1350, 1000, 120, 170);
	house3an = new Item(100, 135, 230, 250, 1360, 1110, 100, 100);
	house3ao = new Item(0, 10, 290, 390, 1350, 1190, 120, 170);
	house3ap = new Item(0, 10, 290, 390, 1350, 1290, 120, 170);
	house3aq = new Item(50, 100, 230, 460, 1350, 1400, 120, 200); 
	house3ar = new Item(50, 100, 230, 460, 1235, 1400, 120, 200); 
	house3as = new Item(0, 0, 330, 400, 455, 530, 150, 180); //house beside hospital (quarantine)
	house3at = new Item(0, 15, 100, 200, 900, -10, 90, 160); //house near river
	house3au = new Item(0, 290, 290, 275, 992, -30, 150, 140);
	house3av = new Item(0, 290, 290, 275, 1142, -30, 150, 140);
	//gate
	gate3a = new Item(548, 15, 140, 195, 635, 150, 90, 70); //gate entering city
	gate3b = new Item(548, 15, 140, 195, 635, 200, 90, 70);
	gate3c = new Item(548, 15, 140, 195, 635, 260, 90, 70);
	gate3d = new Item(548, 15, 140, 195, 635, 320, 90, 70);
	gate3e = new Item(548, 15, 140, 195, 635, 380, 90, 70);
	gate3f = new Item(0, 80, 270, 120, 810, 1900, 130, 60); //gate at city south
	//sprites
	var posY;
	posY = ismaleplayer ? 0 : 192;
	player3 = new Player(192, posY, 45, 48, 130, 55, 30, 30);
	sprites3a = new Sprites(7, 6, 45, 48, 65, 45, 30, 30); //kakek near truck
	sprites3b = new Sprites(7, 2, 45, 48, 910, 160, 30, 30); //family near river
	sprites3c = new Sprites(1, 0, 45, 48, 995, 120, 30, 30); //family near river
	sprites3d = new Sprites(4, 4, 45, 48, 543, 400, 30, 30); //stand3a seller
	sprites3e = new Sprites(4, 3, 45, 48, 543, 440, 30, 30); //stand3a buyer
	sprites3f = new Char(10, 0, 32, 32, 475, 400, 30, 30); //stand3b seller
	sprites3g = new Sprites(4, 2, 45, 48, 410, 440, 30, 30); //stand3c buyer
	sprites3h = new Char(1, 7, 32, 32, 350, 440, 30, 30); //warehouse keeper
	sprites3i = new Char(1, 6, 32, 32, 780, 440, 30, 30); //bapak in front factory
	sprites3j = new Sprites(4, 1, 45, 48, 1045, 390, 30, 30); //sprites in front minimarket
	sprites3k = new Sprites(7, 4, 45, 48, 500, 690, 30, 30); //sprites in front karantina
	sprites3l = new Char(4, 4, 32, 32, 460, 690, 30, 30); //sprites in front karantina
	sprites3m = new Sprites(4, 0, 45, 48, 390, 690, 30, 30); //sprites in front hospital
	sprites3n = new Sprites(1, 2, 45, 48, 350, 840, 30, 30); //sprites in front hospital
	sprites3o = new Sprites(10, 0, 45, 48, 110, 190, 30, 30); //stand3g keeper
	sprites3p = new Sprites(2, 0, 45, 48, 200, 190, 30, 30); //stand3h keeper
	sprites3q = new Sprites(4, 3, 45, 48, 200, 220, 30, 30); //stand3h buyer
	sprites3r = new Sprites(7, 4, 45, 48, 300, 190, 30, 30); //stand3i keeper
	sprites3s = new Sprites(4, 2, 45, 48, 280, 220, 30, 30); //stand3i buyer
	sprites3t = new Sprites(10, 0, 45, 48, 510, 190, 30, 30); //stand3k seller
	sprites3u = new Sprites(10, 5, 45, 48, 575, 220, 30, 30); //sprites beside stand3k
	sprites3v = new Sprites(7, 7, 45, 48, 400, 320, 30, 30); //stand3d keeper
	sprites3w = new Sprites(1, 3, 45, 48, 500, 320, 30, 30); //stand3e keeper
	sprites3x = new Sprites(1, 0, 45, 48, 365, 295, 30, 30); //stand3d buyer1
	sprites3y = new Sprites(1, 4, 45, 48, 400, 295, 30, 30); //stand3d buyer2
	sprites3z = new Sprites(4, 6, 45, 48, 40, 370, 30, 30); //vertical stand seller
	sprites3aa = new Sprites(4, 1, 45, 48, 87, 300, 30, 30); //vertical stand buyer
	sprites3ab = new Sprites(7, 4, 45, 48, 385, 40, 30, 30); //pengecek suhu 2
	sprites3ac = new Sprites(7, 1, 45, 48, 330, 40, 30, 30); //pengecek suhu 1
	sprites3ad = new Sprites(7, 2, 45, 48, 305, 40, 30, 30); //org luar yg dicek sprites3ac
	sprites3ae = new Sprites(4, 0, 45, 48, 510, 40, 30, 30); //pengecek rapid
	sprites3af = new Sprites(10, 1, 45, 48, 1100, 540, 30, 30); //tukang parkir
	sprites3ag = new Sprites(1, 2, 45, 48, 1320, 580, 30, 30); //tomb doctors
	sprites3ah = new Sprites(1, 2, 45, 48, 1320, 605, 30, 30);
	sprites3ai = new Sprites(4, 2, 45, 48, 1320, 750, 30, 30);
	sprites3aj = new Sprites(1, 4, 45, 48, 180, 660, 30, 30); //pengusaha in front radio tower
	sprites3ak = new Sprites(1, 5, 45, 48, 190, 1142, 30, 30); //sprites near house3p
	sprites3al = new Sprites(4, 5, 45, 48, 190, 1180, 30, 30);
	sprites3am = new Sprites(1, 0, 45, 48, 350, 1050, 30, 30); //sprites near house3q
	sprites3an = new Sprites(4, 0, 45, 48, 370, 1050, 30, 30);
	sprites3ao = new Sprites(4, 4, 45, 48, 550, 1100, 30, 30); //sprites in front post office
	sprites3ap = new Char(7, 2, 32, 32, 190, 1410, 25, 25); //child near trees 3i
	sprites3aq = new Char(10, 7, 32, 32, 600, 1460, 30, 30); //grandma near house3s
	sprites3ar = new Char(7, 4, 32, 32, 360, 1760, 30, 30); //grandpa near housez
	sprites3as = new Sprites(10, 7, 45, 48, 900, 860, 30, 30);//granny who wants to cross
	sprites3at = new Sprites(4, 3, 45, 48, 930, 860, 30, 30);
	sprites3au = new Sprites(4, 2, 45, 48, 815, 940, 25, 25); //kids running back and forth behind granny cross
	sprites3av = new Sprites(7, 2, 45, 48, 840, 1330, 30, 30); //wartawan in front walkot
	sprites3aw = new Sprites(1, 5, 45, 48, 870, 1330, 30, 30); //walikota
	sprites3ax = new Sprites(10, 0, 45, 48, 1265, 1080, 30, 30); //stand3s seller
	sprites3ay = new Sprites(4, 4, 45, 48, 1020, 1450, 30, 30); //sprites in front house3af
	sprites3az = new Sprites(4, 4, 45, 48, 990, 1715, 30, 30); //clothes shop seller 
	sprites3ba = new Sprites(10, 0, 45, 48, 1085, 1740, 30, 30); //props shop seller
	sprites3bb = new Sprites(10, 4, 45, 48, 1180, 1715, 30, 30); //fruit seller
	sprites3bc = new Sprites(10, 2, 45, 48, 1260, 1725, 30, 30); //bread seller
	sprites3bd = new Sprites(7, 4, 45, 48, 1355, 1715, 30, 30); //meat seller
	sprites3be = new Sprites(1, 3, 45, 48, 970, 1740, 30, 30); //clothes shop buyer
	sprites3bf = new Sprites(7, 6, 45, 48, 980, 1830, 30, 30); //talking sprites
	sprites3bg = new Sprites(1, 5, 45, 48, 1010, 1830, 30, 30); //talking sprites
	sprites3bh = new Sprites(7, 3, 45, 48, 1160, 1745, 30, 30); //fruit shop buyer
	sprites3bi = new Sprites(10, 3, 45, 48, 1190, 1745, 30, 30); //fruit shop buyer
	sprites3bj = new Sprites(10, 5, 45, 48, 1430, 1830, 30, 30); //police 
	sprites3bk = new Sprites(4, 6, 45, 48, 270, 40, 30, 30); //waiting pengecekan suhu
	sprites3bl = new Sprites(10, 4, 45, 48, 240, 40, 30, 30); //waiting pengecekan suhu
	sprites3bm = new Sprites(10, 7, 45, 48, 870, 1350, 30, 30); //wartawan beside walkot
	sprites3bn = new Sprites(1, 2, 45, 48, 1010, -200, 30, 30); //APD sprites at ENDGAME // canY = 130
	sprites3bo = new Sprites(4, 2, 45, 48, 1010, -200, 30, 30); //APD sprites at ENDGAME // canY = 150

}

function itemCollisionCheck3(){
	if (tree3.checkCollision(player3)
	//items
	|| trees3a.checkCollision3(player3, -4, -10) //trees in front cafe
	|| trees3b.checkCollision3(player3, -4, -10) //trees in front cafe
	|| trees3c.checkCollision3(player3, -4, -10) //trees in front walkot
	|| trees3d.checkCollision3(player3, -4, -10) //trees behind house3ai
	|| trees3e.checkCollision3(player3, -5, -10) //trees behind house3ar
	|| trees3f.checkCollision3(player3, -10, -10) //trees behind hospital
	|| trees3g.checkCollision3(player3, -5, -10) //trees behind minimarket
	|| trees3h.checkCollision3(player3, -60, -10)
	|| trees3i.checkCollision3(player3, -10, -10)
	|| sign3a.checkCollision3(player3, 0, -10, 103)
	|| sign3b.checkCollision3(player3, 0, -10, 104)
	|| car3a.checkCollision3(player3, -20, -9) //bus at start point
	|| car3b.checkCollision3(player3, -25, -9) //car near post office
	|| car3c.checkCollision3(player3, -25, -9) //car at city northeast
	|| car3d.checkCollision3(player3, -25, -9)
	|| car3e.checkCollision3(player3, -25, -8) //truck in front factory
	|| car3f.checkCollision3(player3, -25, -9) //cars in front factory
	|| car3g.checkCollision3(player3, -25, -9)
	|| car3h.checkCollision3(player3, -25, -10)
	|| car3i.checkCollision3(player3, -25, -10) //bus in front factory
	|| car3j.checkCollision3(player3, -25, -10) //ambulance near tomb
	|| car3k.checkCollision3(player3, -25, -10) //truck near market
	|| car3l.checkCollision3(player3, -10, -10, 105) //car near house3m
	|| car3m.checkCollision3(player3, -15, -10) //car in front house3aa
	|| car3n.checkCollision3(player3, -15, -10)
	|| car3o.checkCollision3(player3, -10, -10, 105) //car at  city bottom
	|| car3p.checkCollision3(player3, -15, -10, 105) //car in the middle of city
	|| car3q.checkCollision3(player3, -15, -10) //bus behind house3ar
	|| car3r.checkCollision3(player3, -15, -10) //ambulance at endgame
	|| fence3a.checkCollision3(player3, -5, -10) //fence in front post office
	|| fence3b.checkCollision3(player3, -5, -10) //fence in front post office
	|| barrel3a.checkCollision3(player3, -4, -10) //barrel behind radio tower
	|| barrel3b.checkCollision3(player3, -4, -10)
	|| tomb3a.checkCollision3(player3, 0, -10)
	|| tomb3b.checkCollision3(player3, 0, -10)
	|| gate3f.checkCollision3(player3, -35, -10) //gate at city south
	//buildings
	|| stand3a.checkCollision3(player3, -25, -10)
	|| stand3b.checkCollision3(player3, -25, -10, 14)
	|| stand3c.checkCollision3(player3, -25, -10)
	|| stand3d.checkCollision3(player3, -15, 0) //stand behind radio tower
	|| stand3e.checkCollision3(player3, -15, 0, 72) //paling pojok
	|| stand3f.checkCollision3(player3, -15, 0, 72)//paling pojok
	|| stand3g.checkCollision3(player3, -20, 0, 57) //props stand
	|| stand3h.checkCollision3(player3, -20, 0, 60) //fish and vegetable seler
	|| stand3i.checkCollision3(player3, -20, 0, 67) //meat seler
	|| stand3j.checkCollision3(player3, -20, 0) //empty stand
	|| stand3k.checkCollision3(player3, -20, 0, 72) //paling pojok
	|| stand3l.checkCollision3(player3, -5, -10, 54) //vertical stand
	|| stand3m.checkCollision3(player3, -20, -10) //vertical stand close
	|| stand3n.checkCollision3(player3, -25, -10, 89) //stand at city south - cloth stand
	|| stand3o.checkCollision3(player3, -25, -10, 76) //prop stand
	|| stand3p.checkCollision3(player3, -25, -10) //fruit stand
	|| stand3q.checkCollision3(player3, -25, -10, 82) //bread stand
	|| stand3r.checkCollision3(player3, -20, -10, 67) //meat stand
	|| stand3s.checkCollision3(player3, -10, -10) //stand in front house3ai
	|| house3a.checkCollision3(player3, -25, 0) //house beside stand abc
	|| house3b.checkCollision3(player3, -40, -10)
	|| house3c.checkCollision3(player3, 0, -9)
	|| house3d.checkCollision3(player3, -40, -9) //factory
	|| house3dSide.checkCollision3(player3, -25, -10)
	|| house3dBack.checkCollision3(player3, -4, -10) //trees behind factory
	|| house3dBack2.checkCollision3(player3, -4, -10) //trees behind factory
	|| house3e.checkCollision3(player3, -5, -9)
	|| house3f.checkCollision3(player3, -25, -10) //minimarket near factory
	|| house3g.checkCollision3(player3, -25, -10) //house beside mini market
	|| house3h.checkCollision3(player3, -25, -10)
	|| house3i.checkCollision3(player3, -4, -10)
	|| house3j.checkCollision3(player3, -4, -10)
	|| house3k.checkCollision3(player3, -25, -9)
	|| house3l.checkCollision3(player3, -25, -9) //radio tower
	|| house3m.checkCollision3(player3, -25, -10) //hospital
	|| house3n.checkCollision3(player3, -4, -9) //house in front radio tower
	|| house3o.checkCollision3(player3, -4, -9) 
	|| house3p.checkCollision3(player3, -25, -9) 
	|| house3q.checkCollision(player3, -25, -10)//house beside post office
	|| house3r.checkCollision(player3, -25, -9) //post office
	|| house3s.checkCollision(player3, -25, -9) //minimarket near post office
	|| house3u.checkCollision3(player3, -5, -9) //house beside minimarket
	|| house3v.checkCollision3(player3, -25, -10) //house beside minimarket
	|| house3x.checkCollision3(player3, -25, -10) //house in front cafe
	|| house3y.checkCollision3(player3, -25, -10) //house in front cafe
	|| house3z.checkCollision3(player3, -25, -10) //house in front cafe
	|| house3aa.checkCollision3(player3, -15, -10)
	|| house3ab.checkCollision3(player3, -25, -10) //house behind walkot
	|| house3ac.checkCollision3(player3, -25, -10) //house behind walkot
	|| house3ad.checkCollision3(player3, -25, -10) //walikota
	|| house3ae.checkCollision3(player3, -25, -10) //house beside walikota
	|| house3af.checkCollision3(player3, -25, -10) //minimarket near walkot
	|| house3ag.checkCollision3(player3, -10, -10) //house in front walkot
	|| house3ah.checkCollision3(player3, -25, -10) //house in front walkot
	|| house3ai.checkCollision3(player3, -25, -10) //house beside house3ab
	|| house3aj.checkCollision3(player3, -25, -10) //house beside house3ab
	|| house3ak.checkCollision3(player3, -25, -10) //house beside house3ab
	|| house3al.checkCollision3(player3, -25, -10)
	|| house3am.checkCollision3(player3, -10, -10)
	|| house3an.checkCollision3(player3, -10, -10)
	|| house3ao.checkCollision3(player3, -10, -10)
	|| house3ap.checkCollision3(player3, -10, -10)
	|| house3aq.checkCollision3(player3, -25, -10)
	|| house3ar.checkCollision3(player3, -25, -10)
	|| house3as.checkCollision3(player3, -25, -10) //house beside hospital (quarantine)
	|| house3at.checkCollision3(player3, -4, -10) //house beside river
	|| house3au.checkCollision3(player3, -4, -10) //house beside river
	|| house3av.checkCollision3(player3, -4, -10) //house beside river
	//sprites
	|| sprites3a.checkCollision3(player3, -10, -10, 0) //kakek near truck
	|| sprites3b.checkCollision3(player3, -15, -10, 47) //relative near river
	|| sprites3c.checkCollision3(player3, -15, -10, 44) //relative near river
	|| sprites3e.checkCollision3(player3, -15, -10, 12) //stand a buyer
	|| sprites3g.checkCollision3(player3, -15, -10, 17) //stand c buyer
	|| sprites3h.checkCollision3(player3, -15, -10, 18) //warehouse keeper
	|| sprites3i.checkCollision3(player3, -15, -10, 19) //bapak in front factory
	|| sprites3j.checkCollision3(player3, -15, -10, 20) //ibu in front minimarket
	|| sprites3k.checkCollision3(player3, -15, -10, 22) //nursein front quarantine
	|| sprites3l.checkCollision3(player3, -15, -10, 24)
	|| sprites3m.checkCollision3(player3, -15, -10, 25) //sprites in front hospital
	|| sprites3n.checkCollision3(player3, -15, -10, 26)
	|| sprites3q.checkCollision3(player3, -15, -10, 58) //stand3h buyer
	|| sprites3s.checkCollision3(player3, -15, -10, 66) //stand3i buyer
	|| sprites3u.checkCollision3(player3, -15, -10, 73) //sprites near stand3k
	|| sprites3x.checkCollision3(player3, -15, -10, 70) //stand3d buyer
	|| sprites3y.checkCollision3(player3, -15, -10, 70) //stand3d buyer
	|| sprites3aa.checkCollision3(player3, -5, -10, 56) //vertical stand buyer
	|| sprites3ab.checkCollision3(player3, -15, -10, 5) //pengecek suhu 2
	|| sprites3ac.checkCollision3(player3, -15, -10, 3) //pengecek suhu 1
	|| sprites3ad.checkCollision3(player3, -15, -10, 3) //orang yg dicek
	|| sprites3ae.checkCollision3(player3, -15, -10, 8) //pengecek rapid
	|| sprites3af.checkCollision3(player3, -15, -10, 21) //tukang parkir
	|| sprites3ag.checkCollision3(player3, -10, -10, 39) //tomb doctors
	|| sprites3ah.checkCollision3(player3, -15, -10, 40)
	|| sprites3ai.checkCollision3(player3, -15, -10, 42)
	|| sprites3aj.checkCollision3(player3, -3, -10, 27) //pengusaha in front radio tower
	|| sprites3ak.checkCollision3(player3, -5, -10, 28) //sprites near house3p
	|| sprites3al.checkCollision3(player3, -10, -10, 28)
	|| sprites3am.checkCollision3(player3, -15, -10, 29) //sprites in front house3q
	|| sprites3an.checkCollision3(player3, -15, -10, 29)
	|| sprites3ao.checkCollision3(player3, -15, -10, 30) //sprites in front post office
	|| sprites3ap.checkCollision3(player3, -10, -10, 31)//child near trees
	|| sprites3aq.checkCollision3(player3, -15, -10, 32) //grandma near house3s
	|| sprites3ar.checkCollision3(player3, -15, -10, 33) //grandpa near housez
	|| sprites3as.checkCollision3(player3, -15, -10, 34) //grandma cross
	|| sprites3at.checkCollision3(player3, -15, -10, 34) 
	|| sprites3au.checkCollision3(player3, -10, -10, 31) //child behind grandma cross
	|| sprites3av.checkCollision3(player3, -15, -10, 35) //wartawan in front walkot
	|| sprites3aw.checkCollision3(player3, -15, -10) //walkot
	|| sprites3ax.checkCollision3(player3, -4, -10, 75) //stand3s seller
	|| sprites3ay.checkCollision3(player3, -15, -10, 43) //sprites in front house3af
	|| sprites3be.checkCollision3(player3, -15, -10, 80)  //clothes shop buyer
	|| sprites3bf.checkCollision3(player3, -15, -10, 78) //talking sprites
	|| sprites3bg.checkCollision3(player3, -15, -10, 78)
	|| sprites3bh.checkCollision3(player3, -15, -10, 70) //fruit shop buyer
	|| sprites3bi.checkCollision3(player3, -15, -10, 70) //fruit shop buyer
	|| sprites3bj.checkCollision3(player3, -15, -10, 77) //police at market
	|| sprites3bk.checkCollision3(player3, -15, -10, 2) //waiting pengecek suhu
	|| sprites3bl.checkCollision3(player3, -15, -10, 1)
	|| sprites3bm.checkCollision3(player3, -15, -10, 37) //wartawan beside walikota
	|| sprites3bn.checkCollision3(player3, -15, -10, 96) //orang APD at Endgame
	|| sprites3bo.checkCollision3(player3, -15, -10, 96)
	) {return true}
	else { return false}
}

