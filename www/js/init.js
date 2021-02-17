document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) {
    switch(e.key.toUpperCase()) {
        case "W": player1.moveUp(); break;
        case "A": player1.moveLeft(); break;
        case "S": player1.moveDown(); break;
        case "D": player1.moveRight(); break;
        case "T": player2.moveUp2(); break;
        case "F": player2.moveLeft2(); break;
        case "G": player2.moveDown2(); break;
        case "H": player2.moveRight2(); break;
        case "I": player3.moveUp3(); break;
        case "J": player3.moveLeft3(); break;
        case "K": player3.moveDown3(); break;
        case "L": player3.moveRight3(); break;
    }
}

// level1
function draw() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
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
    // decreaseHealth1(); // health decrease
    spriteAnimation(); //facing rules & player tasks
    requestAnimationFrame(draw);
}

function initGame() {
    ctxRender1();
    imageSources();
	speedX = 5;
    speedY = 5;
    // healthSpeed = 2;
    // moveHealth();
    objects1(); //object list for level 1
    renderOnloadText(0); //onload text
    requestAnimationFrame(draw);
}

function draw2() {
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    //don't mess up the order
    for (let c = 0; c< 10; c++){
        for (let r = 0; r < 10; r++){
            background2.drawBackground(tilesImage2, c*40, r*40, 40, 40);
        }
    }
    land2a.drawLand();
    land2b.drawLand();
    land2c.drawLand();
    //buildings
    house2a.drawItem(house2Image); //red roof house
    house2b.drawItem(house2Image); //blue roof house
    pot2b.drawItem(props3Image); //plant in front house2b
    house2f.drawItem(house5Image); //house in front of grandma's house
    house2g.drawItem(house5Image); //house beside tower
    bucket2a.drawItem(bucket1Image); //bucket near kakek
    bucket2b.drawItem(bucket1Image); //bucket near kakek
    bucket2c.drawItem(bucket1Image); //bucket near nenek
    bucket2d.drawItem(bucket1Image); //bucket near nenek
    //sprites
    sprites2a.drawSprites(spritesImage); //players' mom
    sprites2b.drawSprites(spritesImage3); //beside players' mom
    sprites2c.drawSprites(spritesMaskImage3); //nurse sprites
    sprites2e.drawSprites(spritesMaskImage); //penjaga tower    
    sprites2f.drawSprites(spritesImage); //grandma
    sprites2n.drawSprites(spritesMaskImage2); //scout boy
    sprites2o.drawSprites(spritesImage2); //grandma neighbour
    sprites2i.drawSprites(spritesMaskImage3) //clothes shopkeeper
    shop2a.drawItem(stand2Image); //clothes shop
    sprites2j.drawSprites(spritesMaskImage3) //clothes shopbuyer
    sprites2k.drawChar(charImage2);
    shop2b.drawItem(stand2Image); //fruit shop
    shop2cBack.drawItem(stand2Image); 
    shop2c.drawItem(stand2Image); // bread shop
    sprites2l.drawSprites(spritesMaskImage2) //bread shopbuyer
    sprites2d.drawSprites(spritesMaskImage); //props shopkeeper    
    shop2d.drawItem(stand2Image); //props shop
    shop2eMat.drawItem(tilesImage); //hawker fruit shop
    shop2eLeft.drawItem(props1Image);
    shop2eBottom.drawItem(props1Image);
    //props
    chair2a.drawItem(props4Image); //chair first row
    chair2b.drawItem(props4Image);
    chair2c.drawItem(props4Image);
    chair2e.drawItem(props4Image); //chair second row
    chair2f.drawItem(props4Image);
    chair2g.drawItem(props4Image);
    chair2h.drawItem(props4Image); //chair thrid row
    chair2i.drawItem(props4Image);
    chair2j.drawItem(props4Image);
    chair2k.drawItem(props4Image);
    bench2b.drawItem(props1Image); //bench near balai desa
    fountains2a.drawItem(fountains1Image);
    sprites2h.drawChar(charImage2); //kakek near puskesmas
    sprites2p.drawSprites(spritesMaskImage3); //ibu near puskesmas
    sprites2q.drawChar(charImage2); //anak near puskesmas
    sprites2r.drawSprites(spritesMaskImage);
    bench2c.drawItem(props1Image); //bench near tower
    lamp2a.drawItem(props2Image); //lamp
    bridge2a.drawItem(props2Image);
    bridge2b.drawItem(props2Image);
    bridge2c.drawItem(props2Image);
    bridge2d.drawItem(props2Image);
    player2.drawSprites(); //player level 2
    tree2.drawTree(); // gambar pepohonan
    pot2a.drawItem(props1Image); //pot beside house2a
    bench2a.drawItem(props4Image); //bench near house2a
    house2c.drawItem(house6Image); //balai desa
    house2d.drawItem(house6Image); //puskesmas
    house2e.drawItem(house5Image); //grandma house
    sign2a.drawItem(sign1Image); //+sign
    sprites2g.drawSprites(spritesMaskImage3); //kids near fountain
    sprites2m.drawSprites(spritesMaskImage2); //hawker shopkeeper
    shop2dBack1.drawItem(stand2Image);
    shop2dBack2.drawItem(stand2Image);
    tower2.drawItem(house7Image); 
    tower2front.drawItem(props3Image); //lumber in front of tower
    house2gfront.drawItem(props3Image); //stove
    tent2.drawItem(props3Image); //tent
    // decreaseHealth2();
    spriteAnimation2();
    requestAnimationFrame(draw2);
}

function initGame2() {
    ctxRender2();
    imageSources();
	speedX = 5;
    speedY = 5;
    healthSpeed2 = 2;
    objects2(); //object list for level 1
    renderOnloadText(3); //onload text
    requestAnimationFrame(draw2);
}

function draw3() {
    ctx.clearRect(0, 0, canvas3.width, canvas3.height);
    //don't mess up the order
    for (let c = 0; c< 10; c++){
        for (let r = 0; r < 10; r++){
            background3.drawBackground(tilesImage2, c*40, r*40, 40, 40);
        }
    }
    
    land3a.drawLand();
    land3b.drawLand();
    car3a.drawItem(car5Image);
    car3b.drawItem(car2Image); //car near post office
    car3c.drawItem(car3Image); //car at city northeast
    car3d.drawItem(car4Image); //car at city northeast
    car3j.drawItem(car2Image); //ambulance near tomb
    car3m.drawItem(car4Image); //car near house3aa
    car3n.drawItem(car4Image);
    car3k.drawItem(car3Image); //truck near market
    
    stand3a.drawItem(stand1Image);
    stand3b.drawItem(stand1Image);
    stand3c.drawItem(stand1Image);
    sprites3o.drawSprites(spritesMaskImage); //stand3g keeper
    stand3g.drawItem(stand4Image);
    sprites3p.drawSprites(spritesMaskImage2); //stand3h keeper
    stand3h.drawItem(stand4Image);
    sprites3q.drawSprites(spritesMaskImage2); //stand3h buyer
    sprites3r.drawSprites(spritesImage); //stand3i keeper
    stand3i.drawItem(stand4Image);
    sprites3s.drawSprites(spritesMaskImage); //stand3i buyer
    stand3j.drawItem(stand4Image);
    sprites3t.drawSprites(spritesMaskImage2); //stand3k seller
    sprites3u.drawSprites(spritesMaskImage2); //sprites beside stand3k
    stand3k.drawItem(stand4Image);
    stand3l.drawItem(stand4Image); //vertical stand
    stand3m.drawItem(stand4Image);
    sprites3az.drawSprites(spritesMaskImage); //clothes seller
    sprites3ba.drawSprites(spritesMaskImage); //props seller
    sprites3bb.drawSprites(spritesMaskImage2); //fruit seller
    sprites3bc.drawSprites(spritesMaskImage2); //bread seller
    sprites3bd.drawSprites(spritesImage); //meat seller
    stand3n.drawItem(stand2Image); //stand at south city
    stand3o.drawItem(stand2Image); //stand at south city (props)
    stand3p.drawItem(stand2Image); //stand at south city
    stand3q.drawItem(stand2Image); //stand at south city
    stand3r.drawItem(stand2Image); //stand at south city
    sprites3be.drawSprites(spritesMaskImage3); //clothes shop buyer
    sprites3bh.drawSprites(spritesMaskImage3); //fruit shop buyer
    sprites3bi.drawSprites(spritesMaskImage3); //bread shop buyer
    
    fence3a.drawItem(stand4Image); //fence in front post office
    fence3b.drawItem(stand4Image); //fence in front post office
    barrel3a.drawItem(stand6Image); //barrel behind radio tower
    barrel3b.drawItem(stand6Image); //barrel behind radio tower
    tomb3a.drawItem(tombImage);
    tomb3b.drawItem(tombImage);
    house3a.drawItem(house2Image); //house beside stand abc
    house3b.drawItem(house9Image); //house beside standabc
    house3c.drawItem(house9Image);
    house3l.drawItem(bk1Image); //radio tower
    trees3f.drawItem(trees2Image); //trees behind hospital
    house3m.drawItem(bk6Image); //hospital
    house3dBack.drawItem(stand6Image);
    house3dBack2.drawItem(stand6Image);
    house3d.drawItem(house4Image); //factory
    house3dSide.drawItem(house4Image);
    car3e.drawItem(car3Image); //truck in front factory
    trees3g.drawItem(trees2Image); //trees behind minimarket
    house3i.drawItem(bk2Image); //house behind minimarket
    house3j.drawItem(bk2Image); //house behind minimarket
    house3f.drawItem(bk5Image); //minimarket near factory
    house3g.drawItem(bk8Image);
    house3h.drawItem(bk8Image);
    house3k.drawItem(bk4Image); //house beside minimarket
    house3n.drawItem(house9Image); //house in front radio tower
    house3o.drawItem(house9Image); //house in front radio tower
    house3p.drawItem(bk4Image); //house in front radio tower
    house3q.drawItem(house9Image); //house beside post office
    house3r.drawItem(bk7Image); //post office
    house3s.drawItem(bk5Image); //minimarket in front post office
    house3t.drawItem(bk2Image); //house beside minimarket
    house3u.drawItem(bk2Image); //house beside minimarket
    house3v.drawItem(house8Image);
    house3w.drawItem(bk2Image); //house in front minimarket
    house3x.drawItem(bk2Image);
    house3y.drawItem(bk2Image);
    trees3a.drawItem(trees2Image);
    trees3b.drawItem(trees2Image);
    house3z.drawItem(bk3Image);
    house3aa.drawItem(bk3Image);
    sprites3au.drawSprites(spritesMaskImage3); //child running behind grandma cross
    house3ab.drawItem(house9Image); //house behind walikota
    house3ac.drawItem(house9Image); //house behind walikota
    house3ad.drawItem(bk9Image); //walikota
    house3ae.drawItem(bk2Image); //house beside walikota
    house3af.drawItem(bk5Image); //minimarket near walkot
    trees3c.drawItem(trees2Image); //trees in front walkot
    house3ag.drawItem(house9Image); //house in front walikota
    house3ah.drawItem(house9Image); //house in front walikota
    house3al.drawItem(bk7Image);
    trees3d.drawItem(trees2Image);
    house3ak.drawItem(house9Image); //house beside house 3ab
    house3aj.drawItem(house9Image); //house beside house 3ab
    house3ai.drawItem(house9Image); //house beside house 3ab
    house3am.drawItem(bk2Image);
    house3an.drawItem(bk8Image);
    house3ao.drawItem(bk2Image);
    house3ap.drawItem(bk2Image);
    house3aq.drawItem(bk3Image);
    trees3e.drawItem(trees2Image);
    house3ar.drawItem(bk3Image);
    house3as.drawItem(house4Image);
    //sprites
    sprites3a.drawSprites(spritesMaskImage); //kakek near truck
    sprites3b.drawSprites(spritesImage); //sprites near river
    sprites3c.drawSprites(spritesImage); //sprites near river
    sprites3d.drawSprites(spritesMaskImage); //stand a seller
    sprites3e.drawSprites(spritesImage); //stand a buyer
    sprites3f.drawChar(charImage2); //stand b seller
    sprites3g.drawSprites(spritesMaskImage2);//stand c buyer
    sprites3h.drawChar(charMaskImage2); //warehouse keeper
    sprites3i.drawChar(charMaskImage2); //bapak in front factory
    sprites3j.drawSprites(spritesMaskImage); //sprites in front minimarket
    sprites3k.drawSprites(spritesMaskImage3); //sprites in front karantina
    sprites3l.drawChar(charMaskImage2); //sprites in front karantina
    sprites3m.drawSprites(spritesAPDImage); //sprites in front hospital
    sprites3z.drawSprites(spritesMaskImage); //vertical stand seller
    sprites3aa.drawSprites(spritesMaskImage2); //vertical stand buyer
    sprites3ab.drawSprites(spritesMaskImage3); //pengecek suhu 2
    sprites3ac.drawSprites(spritesAPDImage); //pengecek suhu 1
    sprites3ad.drawSprites(spritesMaskImage2); //org yg dicek pengecek suhu 1
    sprites3ae.drawSprites(spritesAPDImage); //pengecek rapid
    sprites3ag.drawSprites(spritesAPDImage); //tomb doctors
    sprites3ah.drawSprites(spritesAPDImage);
    sprites3aj.drawSprites(spritesMaskImage); //pengusaha in front radio tower
    sprites3ak.drawSprites(spritesMaskImage2); //sprites near house3p
    sprites3al.drawSprites(spritesMaskImage2);
    sprites3am.drawSprites(spritesAPDImage); //sprites near house 3q
    sprites3an.drawSprites(spritesAPDImage);
    sprites3ao.drawSprites(spritesMaskImage2); //sprites in front post office
    sprites3ap.drawChar(charMaskImage2); //child near trees
    sprites3ar.drawChar(charMaskImage2); //grandpa near house3z
    
    sprites3av.drawSprites(spritesMaskImage2); //wartawan in front walkot
    sprites3aw.drawSprites(spritesMaskImage); //walkot
    sprites3ay.drawSprites(spritesMaskImage3); //sprites in front house3af
    sprites3bk.drawSprites(spritesMaskImage3); //sprites waiting pengecek suhu
    sprites3bl.drawSprites(spritesMaskImage3); //sprites waiting pengecek suhu
    sprites3bm.drawSprites(spritesMaskImage3); //wartawan beside walikota
    
    player3.drawSprites(); //player level 3
    trees3h.drawItem(trees3Image); //trees near house3ap
    trees3i.drawItem(trees3Image); //trees near house3ap
    car3f.drawItem(car2Image); //cars in front factory
    car3g.drawItem(car2Image);
    car3h.drawItem(car2Image);
    car3i.drawItem(car5Image); //bus in front factory
    car3l.drawItem(car4Image); //car in front radio tower
    car3q.drawItem(car5Image); //car behind house3ar
    car3p.drawItem(car2Image); //car in the middle of city
    car3o.drawItem(car4Image); //car at  city bottom
    sprites3n.drawSprites(spritesAPDImage); //sprites in front hospital
    sprites3af.drawSprites(spritesMaskImage2); //tukang parkir
    sprites3ai.drawSprites(spritesAPDImage); //tomb doctors
    sprites3aq.drawChar(charMaskImage2); //grandma near house3s
    sprites3as.drawSprites(spritesMaskImage); //granny who wants to cross
    sprites3at.drawSprites(spritesMaskImage2);
    sprites3bf.drawSprites(spritesMaskImage2); //talking sprites at pasar
    sprites3bg.drawSprites(spritesMaskImage3);
    sprites3bj.drawSprites(spritesMaskImage3); //police at pasar
    gate3a.drawItem(stand2Image);
    gate3b.drawItem(stand2Image);
    gate3c.drawItem(stand2Image);
    gate3d.drawItem(stand2Image);
    gate3e.drawItem(stand2Image);
    gate3f.drawItem(gate1Image); //gate at city south
    tree3.drawTree(); // gambar pepohonan
    sign3a.drawItem(stand4Image);
    sign3b.drawItem(stand4Image);
    house3e.drawItem(house8Image); //house near top
    house3at.drawItem(house8Image); //house near river
    house3au.drawItem(house2Image);
    house3av.drawItem(house2Image);
    car3r.drawItem(car2Image); //car at endgame
    sprites3bn.drawSprites(spritesAPDImage); //sprites APD at ENDgame
    sprites3bo.drawSprites(spritesAPDImage); //sprites APD at ENDgame
    sprites3x.drawSprites(spritesMaskImage3); //stand3d buyer1
    sprites3y.drawSprites(spritesMaskImage3); //stand3d buyer2
    stand3d.drawItem(stand4Image); //stand behind stand abc
    sprites3v.drawSprites(spritesImage); //stand3d keeper
    stand3e.drawItem(stand4Image); //stand behind stand abc
    sprites3w.drawSprites(spritesImage2); //stand3e keeper
    stand3f.drawItem(stand4Image); //stand behind stand abc
    stand3s.drawItem(stand2Image); //stand in front house3ai
    sprites3ax.drawSprites(spritesImage3); //stand3s seller
    spriteAnimation3();
    requestAnimationFrame(draw3);
}

function initGame3() {
    ctxRender3();
    imageSources();
	speedX = 5;
    speedY = 5;
    // healthSpeed3 = 2;
    objects3(); //object list for level 3
    renderOnloadText(5);
    requestAnimationFrame(draw3);
}