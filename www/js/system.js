// analog buttons
var onloadTextButton = document.getElementById('onloadTextButton');
onloadTextButton.onclick = function () { toggleOnloadText() };
// level 1 buttons
var analog1 = document.getElementById('analog1');
var topArrow1 = document.getElementById('topArrow1');
var leftArrow1 = document.getElementById('leftArrow1');
var rightArrow1 = document.getElementById('rightArrow1');
var downArrow1 = document.getElementById('downArrow1');
var toggleBtn1 = document.getElementById('toggleBtn1');
// toparrow
topArrow1.ontouchstart = function () { player1.moveUp(); }
topArrow1.ontouchend = function () { player1.moveUp(); }
topArrow1.ontouchmove = function () { player1.moveUp(); }
topArrow1.onclick = function () { player1.moveUp(); }
// leftarrow
leftArrow1.ontouchstart = function () { player1.moveLeft(); }
leftArrow1.ontouchend = function () { player1.moveLeft(); }
leftArrow1.ontouchmove = function () { player1.moveLeft(); }
leftArrow1.onclick = function () { player1.moveLeft(); }
// rightarrow
rightArrow1.ontouchstart = function () { player1.moveRight(); }
rightArrow1.ontouchend = function () { player1.moveRight(); }
rightArrow1.ontouchmove = function () { player1.moveRight(); }
rightArrow1.onclick = function () { player1.moveRight(); }
// downarrow
downArrow1.ontouchstart = function () { player1.moveDown(); }
downArrow1.ontouchend = function () { player1.moveDown(); }
downArrow1.ontouchmove = function () { player1.moveDown(); }
downArrow1.onclick = function () { player1.moveDown(); }
toggleBtn1.onclick = function () { toggleText() };

//level1 animation
//sprites facing rules and task rules for level 1
function spriteAnimation() {
	//facing rules
	if (player1.picY == 0 || player1.picY == 192) { sprites1A.picY = 96; sprites1F.picY = 0; sprites1G.picY = 48; } //player facing down
	if (player1.picY == 48 || player1.picY == 240) { sprites1A.picY = 96; sprites1F.picY = 96; sprites1G.picY = 96; } //player facing left
	if (player1.picY == 96 || player1.picY == 288) { sprites1A.picY = 96; sprites1F.picY = 48; sprites1G.picY = 48; } //player facing right
	if (player1.picY == 144 || player1.picY == 336) { sprites1A.picY = 0; sprites1F.picY = 0; sprites1G.picY = 0; } //player facing up
	if (player1.canY > sprites1C.canY + sprites1C.canW) { sprites1C.picY = 192 }
	else { sprites1C.picY = 240 }
	if (player1.canY > sprites1D.canY + sprites1D.canW) { sprites1D.picY = 192 }
	else { sprites1D.picY = 240 }

	//if player walks out before talking to his friends, get back
	if (player1.canX > house1a.canX + house1a.canW + 30) {
		if (firstWash === false) {
			player1.canX = house1a.canX + house1a.canW + 30;
			typeText(0);
		}
	}
}

//animation while talking with the gateKeeper
function animate1a() {
	if (gate1.picY <= 490) {
		sprites1B.picY = 336;
		sprites1B.canY -= 20;
		gate1.picY += 200;
	}
	if (gate1.picY > 510) {
		sprites1B.picY = 192;
		if (player1.canX > sprites1B.canX + sprites1B.canW - 20) { sprites1B.picY = 288; }
	}
}

// level 2 buttons
var analog2 = document.getElementById('analog2');
var topArrow2 = document.getElementById('topArrow2');
var leftArrow2 = document.getElementById('leftArrow2');
var rightArrow2 = document.getElementById('rightArrow2');
var downArrow2 = document.getElementById('downArrow2');
var toggleBtn2 = document.getElementById('toggleBtn2');
// toparrow
topArrow2.ontouchstart = function () { player2.moveUp2(); }
topArrow2.ontouchend = function () { player2.moveUp2(); }
topArrow2.ontouchmove = function () { player2.moveUp2(); }
topArrow2.onclick = function () { player2.moveUp2(); }
// leftarrow
leftArrow2.ontouchstart = function () { player2.moveLeft2(); }
leftArrow2.ontouchend = function () { player2.moveLeft2(); }
leftArrow2.ontouchmove = function () { player2.moveLeft2(); }
leftArrow2.onclick = function () { player2.moveLeft2(); }
// rightarrow
rightArrow2.ontouchstart = function () { player2.moveRight2(); }
rightArrow2.ontouchend = function () { player2.moveRight2(); }
rightArrow2.ontouchmove = function () { player2.moveRight2(); }
rightArrow2.onclick = function () { player2.moveRight2(); }
// downarrow
downArrow2.ontouchstart = function () { player2.moveDown2(); }
downArrow2.ontouchend = function () { player2.moveDown2(); }
downArrow2.ontouchmove = function () { player2.moveDown2(); }
downArrow2.onclick = function () { player2.moveDown2(); }
toggleBtn2.onclick = function () { toggleText2() };

//level2 animation
//sprites facing rules and task rules for level 1
function spriteAnimation2() {
	//if player is facing down
	if (player2.picY == 0 || player2.picY == 192) {
		sprites2a.picY = 240;
		sprites2b.picY = 96;
		sprites2c.picY = 192;
		sprites2d.picY = 48;
		sprites2e.picY = 192;
		sprites2j.picY = 144;
		sprites2h.picY = 224;
		sprites2m.picY = 144;
		sprites2n.picY = 48;
		sprites2o.picY = 48;
		sprites2p.picY = 240;
	}
	//if player is facing left
	if (player2.picY == 48 || player2.picY == 240) {
		sprites2a.picY = 288;
		sprites2b.picY = 96;
		sprites2c.picY = 192;
		sprites2d.picY = 48;
		sprites2e.picY = 240;
		sprites2j.picY = 96;
		sprites2h.picY = 192;
		sprites2m.picY = 96;
		sprites2n.picY = 48;
		sprites2o.picY = 48;
		sprites2p.picY = 288;
	}
	//if player is facing right 
	if (player2.picY == 96 || player2.picY == 288) {
		sprites2a.picY = 240;
		sprites2b.picY = 96;
		sprites2c.picY = 240;
		sprites2d.picY = 48;
		sprites2e.picY = 240;
		sprites2j.picY = 48;
		sprites2h.picY = 160;
		sprites2m.picY = 96;
		sprites2n.picY = 48;
		sprites2o.picY = 48;
		sprites2p.picY = 240;
	}
	//if player is facing up 
	if (player2.picY == 144 || player2.picY == 336) {
		sprites2a.picY = 192;
		sprites2b.picY = 0;
		sprites2c.picY = 192;
		sprites2d.picY = 0;
		sprites2e.picY = 240;
		sprites2j.picY = 144;
		sprites2h.picY = 224;
		sprites2m.picY = 96;
		sprites2n.picY = 0;
		sprites2o.picY = 0;
		sprites2p.picY = 192;
	}
	animate2a(); //animation for sprites2g runnin back & forth
}

var speed2g = 0.5;
var speed2l = 0.5;
var speed2r = 0.5;

function animate2a() { //sprites running back and forth
	//sprites2g running back & forth
	sprites2g.canX += speed2g;
	sprites2g.picX += 48;
	if (sprites2g.picX > 280) { sprites2g.picX = 144 }
	if (sprites2g.canX > bench2b.canX + bench2b.canW) { sprites2g.picY = 48; speed2g = -speed2g; }
	if (sprites2g.canX < house2c.canX) { sprites2g.picY = 96; speed2g = -speed2g; }
	//sprites2l running back & forth
	sprites2l.canX += speed2l;
	sprites2l.picX += 48;
	if (sprites2l.picX > 430) { sprites2l.picX = 288 }
	if (sprites2l.canX > shop2c.canX + shop2c.canW - 40) { sprites2l.picY = 240; speed2l = -speed2l; }
	if (sprites2l.canX < shop2c.canX) { sprites2l.picY = 288; speed2l = -speed2l; }
}
function animate2b() { //if player hears the grandpa on level 2 cough, sprites2r will move
	sprites2r.canX += speed2r;
	sprites2r.picY = 96;
	sprites2r.picX += 48;
	if (sprites2r.picX > 430) { sprites2r.picX = 288; }
	if (sprites2r.canX == sign2a.canX + 10) {
		speed2r = 0;
		sprites2r.picX = 336;
		sprites2r.picY = 48;
	}
}

// level 3 buttons
var analog3 = document.getElementById('analog3');
var topArrow3 = document.getElementById('topArrow3');
var leftArrow3 = document.getElementById('leftArrow3');
var rightArrow3 = document.getElementById('rightArrow3');
var downArrow3 = document.getElementById('downArrow3');
var toggleBtn3 = document.getElementById('toggleBtn3');
// toparrow
topArrow3.ontouchstart = function () { player3.moveUp3(); }
topArrow3.ontouchend = function () { player3.moveUp3(); }
topArrow3.ontouchmove = function () { player3.moveUp3(); }
topArrow3.onclick = function () { player3.moveUp3(); }
// leftarrow
leftArrow3.ontouchstart = function () { player3.moveLeft3(); }
leftArrow3.ontouchend = function () { player3.moveLeft3(); }
leftArrow3.ontouchmove = function () { player3.moveLeft3(); }
leftArrow3.onclick = function () { player3.moveLeft3(); }
// rightarrow
rightArrow3.ontouchstart = function () { player3.moveRight3(); }
rightArrow3.ontouchend = function () { player3.moveRight3(); }
rightArrow3.ontouchmove = function () { player3.moveRight3(); }
rightArrow3.onclick = function () { player3.moveRight3(); }
// downarrow
downArrow3.ontouchstart = function () { player3.moveDown3(); }
downArrow3.ontouchend = function () { player3.moveDown3(); }
downArrow3.ontouchmove = function () { player3.moveDown3(); }
downArrow3.onclick = function () { player3.moveDown3(); }
toggleBtn3.onclick = function () { toggleText3() };

//level3 animation
//sprites facing rules and task rules for level 3
function spriteAnimation3() {
	//if player is facing down
	if (player3.picY == 0 || player3.picY == 192) {
		sprites3ab.picY = 240;
		sprites3ae.picY = 0;
		sprites3j.picY = 0;
		sprites3c.picY = 0;
		sprites3k.picY = 192;
		sprites3l.picY = 128;
		sprites3m.picY = 0;
		sprites3n.picY = 144;
		sprites3aj.picY = 336;
		sprites3u.picY = 240;
		sprites3al.picY = 240;
		sprites3am.picY = 0;
		sprites3an.picY = 0;
		sprites3ao.picY = 192;
		sprites3ar.picY = 128;
		sprites3ah.picY = 96;
		sprites3ai.picY = 144;
		sprites3as.picY = 336;
		sprites3at.picY = 144;
		sprites3aw.picY = 240;
		sprites3aq.picY = 224;
		sprites3ax.picY = 144;
		sprites3ay.picY = 192;
		sprites3bd.picY = 288;
		sprites3bc.picY = 48;
		sprites3ba.picY = 0;
		sprites3bj.picY = 336;
		sprites3bl.picY = 288;
	}
	//if player is facing left
	if (player3.picY == 48 || player3.picY == 240) {
		sprites3ab.picY = 192;
		sprites3ae.picY = 96;
		sprites3j.picY = 48;
		sprites3c.picY = 96;
		sprites3k.picY = 288;
		sprites3l.picY = 128;
		sprites3m.picY = 96;
		sprites3n.picY = 96;
		sprites3aj.picY = 240;
		sprites3u.picY = 240;
		sprites3al.picY = 240;
		sprites3am.picY = 0;
		sprites3an.picY = 96;
		sprites3ao.picY = 288;
		sprites3ar.picY = 128;
		sprites3ah.picY = 96;
		sprites3ai.picY = 96;
		sprites3as.picY = 336;
		sprites3at.picY = 96;
		sprites3aw.picY = 288;
		sprites3aq.picY = 192;
		sprites3ax.picY = 96;
		sprites3ay.picY = 288;
		sprites3bd.picY = 288;
		sprites3bc.picY = 96;
		sprites3ba.picY = 96;
		sprites3bj.picY = 240;
		sprites3bl.picY = 288;
	}
	//if player is facing right 
	if (player3.picY == 96 || player3.picY == 288) {
		sprites3ab.picY = 240;
		sprites3ae.picY = 0;
		sprites3j.picY = 96;
		sprites3c.picY = 0;
		sprites3k.picY = 192;
		sprites3l.picY = 160;
		sprites3m.picY = 48;
		sprites3n.picY = 48;
		sprites3aj.picY = 240;
		sprites3u.picY = 240;
		sprites3al.picY = 240;
		sprites3am.picY = 48;
		sprites3an.picY = 0;
		sprites3ao.picY = 240;
		sprites3ar.picY = 160;
		sprites3ah.picY = 48;
		sprites3ai.picY = 48;
		sprites3as.picY = 240;
		sprites3at.picY = 144;
		sprites3aw.picY = 240;
		sprites3aq.picY = 160;
		sprites3ax.picY = 144;
		sprites3ay.picY = 240;
		sprites3bd.picY = 192;
		sprites3bc.picY = 96;
		sprites3ba.picY = 48;
		sprites3bj.picY = 240;
		sprites3bl.picY = 240;
	}
	//if player is facing up 
	if (player3.picY == 144 || player3.picY == 336) {
		sprites3ab.picY = 192;
		sprites3ae.picY = 0;
		sprites3j.picY = 0;
		sprites3c.picY = 0;
		sprites3k.picY = 192;
		sprites3l.picY = 128;
		sprites3m.picY = 0;
		sprites3n.picY = 144;
		sprites3aj.picY = 192;
		sprites3u.picY = 192;
		sprites3al.picY = 192;
		sprites3am.picY = 0;
		sprites3an.picY = 0;
		sprites3ao.picY = 192;
		sprites3ar.picY = 128;
		sprites3ah.picY = 0;
		sprites3ai.picY = 96;
		sprites3as.picY = 336;
		sprites3at.picY = 144;
		sprites3aw.picY = 192;
		sprites3aq.picY = 224;
		sprites3ax.picY = 0;
		sprites3ay.picY = 192;
		sprites3bd.picY = 192;
		sprites3bc.picY = 0;
		sprites3ba.picY = 0;
		sprites3bj.picY = 336;
		sprites3bl.picY = 192;
	}
	// if player hasnt checked body temp, get back
	if (tempCheck == false && player3.canX > house3e.canX) {
		player3.canX = house3e.canX - 1;
		player3.picY - 48;
		typeText3(7);
	}
	// if player hasnt checked KKK, get back
	if (KKKcheck == false && player3.canX > gate3a.canX && player3.canY > gate3a.canY) {
		player3.canY = gate3a.canY - 1;
		player3.picY - 48;
		typeText3(11);
	}
	animate3a();
}

var speed3i = 0.5; //sprites3i speed
var speed3au = 0.5; //sprites3au speed
var speedC3l = 3; //car3l speed
var speedC3o = 3; //car3o speed
var speedC3p = 3; //car3p speed
var speedX3ap = 0.5;
var speedY3ap = 0;
function animate3a() {
	//sprites3i running back & forth
	sprites3i.canX += speed3i;
	sprites3i.picX += 32;
	if (sprites3i.picX > 95) { sprites3i.picX = 0 }
	if (sprites3i.canX > car3e.canX - 25) { sprites3i.picY = 160; speed3i = -speed3i; }
	if (sprites3i.canX < house3d.canX + 20) { sprites3i.picY = 192; speed3i = -speed3i; }
	//sprites3au running back & forth
	sprites3au.canX += speed3au;
	sprites3au.picX += 48;
	if (sprites3au.picX > 280) { sprites3au.picX = 144 }
	if (sprites3au.canX > sprites3at.canX + 10) { sprites3au.picY = 48; speed3au = -speed3au; }
	if (sprites3au.canX < house3ab.canX - 30) { sprites3au.picY = 96; speed3au = -speed3au; }
	//car3l running back & forth
	car3l.canY += speedC3l;
	if (car3l.canY > trees3i.canY + 50) { car3l.picX = 255; speedC3l = -speedC3l; }
	if (car3l.canY < car3b.canY - 50) { car3l.picX = 310; speedC3l = -speedC3l; }
	//car3o running back & forth
	car3o.canX += speedC3o;
	if (car3o.canX > house3ah.canX) { car3o.picX = 130; speedC3o = -speedC3o; }
	if (car3o.canX < car3m.canX) { car3o.picX = 0; speedC3o = -speedC3o; }
	//car3p running back & forth
	car3p.canX += speedC3p;
	if (car3p.canX > car3j.canX - 50) { car3p.picY = 185; speedC3p = -speedC3p; }
	if (car3p.canX < house3l.canX - 100) { car3p.picY = 255; speedC3p = -speedC3p; }
	// sprites3ap
	sprites3ap.canX += speedX3ap;
	sprites3ap.canY += speedY3ap;
	sprites3ap.picX += 32;
	if (sprites3ap.picX > 280) { sprites3ap.picX = 192; }
	if (sprites3ap.canX > trees3i.canX + trees3i.canW && sprites3ap.canY < house3v.canY + house3v.canH) { sprites3ap.picY = 0; speedX3ap = 0; speedY3ap = 1; }
	if (sprites3ap.canX > trees3i.canX + trees3i.canW && sprites3ap.canY > house3v.canY + 65) { sprites3ap.picY = 32; speedX3ap = -0.5; speedY3ap = 0; }
	if (sprites3ap.canX < trees3i.canX - 30 && sprites3ap.canY > house3v.canY) { sprites3ap.picY = 96; speedX3ap = 0; speedY3ap = -1; }
	if (sprites3ap.canX < trees3i.canX - 30 && sprites3ap.canY < house3v.canY - 20) { sprites3ap.picY = 64; speedX3ap = 0.5; speedY3ap = 0; }
	//if player has bought the three items, his relatives are dead
	if (buyFish == true && buyBread == true && buyMask == true) {
		sprites3b.canY = -200;
		sprites3c.canY = -200;
		car3r.canY = house3at.canY + 130;
		sprites3bn.canY = house3at.canY + 150;
		sprites3bo.canY = house3at.canY + 170;
	}
}

//showing image for certain item
function showItemImage(txtNum) {
	// 4 & 28 level 1
	if (txtNum === 4 || txtNum === 28) {
		document.getElementById("handWashImg").style.display = 'block';
		document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
		document.getElementById("textBox").style.opacity = '0.8';
	}
	// 26 & 51 level 2
	else if (txtNum === 26 || txtNum === 51) {
		document.getElementById("handWashImg").style.display = 'block';
		document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
		document.getElementById("textBox").style.opacity = '0.8';
	}
	// level 3
	else if (txtNum === 105) {
		document.getElementById("carCrashImg").style.display = 'block';
		document.getElementById("textBox").style.backgroundColor = '#f2f2f2';
		document.getElementById("textBox").style.opacity = '0.8';
	}
	else {
		tBox.style.backgroundColor = '#99ff99';
		tBox.style.opacity = '1';
	}
}

//game health Render
var health1 = document.getElementById("health1"); //health bar
var health2 = document.getElementById("health2");
var health3 = document.getElementById("health3");
var healthSpeed1 = 2;
var healthSpeed2 = 2;
var healthSpeed3 = 2;

function decreaseHealth1() {
	if (pause == false) health1.value -= healthSpeed1;
	if (health1.value == 0) {
		virusImg.style.display = 'block';
		tBox.style.display = 'block';
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity = '0.8';
		t.innerHTML = onloadTextList[9];
	}
}

function decreaseHealth2() {
	if (pause == false) health2.value -= healthSpeed2;
	if (health2.value == 0) {
		virusImg.style.display = 'block';
		tBox.style.display = 'block';
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity = '0.8';
		t.innerHTML = onloadTextList[9];
	}
}

function decreaseHealth3() {
	if (pause == false) health3.value -= healthSpeed3;
	if (health3.value == 0) {
		virusImg.style.display = 'block';
		tBox.style.display = 'block';
		tBox.style.backgroundColor = '#f2f2f2';
		tBox.style.opacity = '0.8';
		t.innerHTML = onloadTextList[9];
	}
}