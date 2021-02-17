class Background { //zclass to draw background so the canX and canY can be multiplied in easier syntax
    constructor(picX, picY, picW, picH){ 
        //target picture X, Y, Width, Height
        this.picX = picX;
        this.picY = picY;
        this.picW = picW;
        this.picH = picH;
    }
    drawBackground(source, canX, canY, canW, canH){ 
        //canvas draw X, Y, Width, Height
        this.canX = canX;
        this.canY = canY;
        this.canW = canW;
        this.canH = canH;
        ctx.drawImage(source,
        this.picX, this.picY, this.picW, this.picH, //target picture X, Y, Width, Height
        this.canX, this.canY, this.canW, this.canH); //canvas draw X, Y, Width, Height
    }
}

class Item {
    constructor(picX, picY, picW, picH, canX, canY, canW, canH){ 
        //target picture X, Y, Width, Height
        this.picX = picX;
        this.picY = picY;
        this.picW = picW;
        this.picH = picH;
        //canvas draw X, Y, Width, Height
        this.canX = canX;
        this.canY = canY;
        this.canW = canW;
        this.canH = canH;
    }
    drawItem(source){ 
        ctx.drawImage(source,
        this.picX, this.picY, this.picW, this.picH, //target picture X, Y, Width, Height
        this.canX, this.canY, this.canW, this.canH); //canvas draw X, Y, Width, Height
    }
    //playerNum e.g. player1, player2, player3 var
    //top, right, bottom, left for picture adjustment
    checkCollision(playerNum, topBottom, rightLeft, txtNum){ //checkCollision for level 1 item
        let diffX = Math.abs((this.canX + this.canW / 2.0) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0) - (playerNum.canY + playerNum.canH / 2.0));             
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom)){
            //txtNum = 4 - first handwash
            //txtNum = 23 - on collision with shop
            //txtNum = 28 - second handwash    
            if (txtNum == 4 || txtNum == 23 || txtNum == 28){ 
                typeText(txtNum);
                showItemImage(txtNum);
            }
            return true;
        } 
        else { return false;}
    }
    checkCollision2(playerNum, topBottom, rightLeft, txtNum){ //checkCollision for level 2 item
        let diffX = Math.abs((this.canX + this.canW / 2.0) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0) - (playerNum.canY + playerNum.canH / 2.0));             
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom)){
            //txtNum = 16 - fruit shop
            //txtNum = 22 - sembako/props
            //txtNum = 26 - washHand kakek
            //txtNum = 51 - washHand nenek
            if (txtNum == 16 || txtNum == 22 || txtNum == 26 || txtNum == 51 ){ 
                typeText2(txtNum);
                showItemImage(txtNum);
            }
            return true;
        } 
        else { return false;}
    }
    checkCollision3(playerNum, topBottom, rightLeft, txtNum){ //checkCollision for level 3 item
        let diffX = Math.abs((this.canX + this.canW / 2.0) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0) - (playerNum.canY + playerNum.canH / 2.0));             
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom)){
            //txtNum = 14 - vege shop
            //txtNum = 54 - vertical shop
            //txtNum = 57 - props shop
            //txtNum = 60 - fish and vege shop
            //txtNum = 67 - meat shop
            //txtNum = 72 - fruit shop
            //txtNum = 76 - prop shop
            //txtNum = 82 - bread shop
            //txtNum = 89 - mask shop
            if (txtNum == 14 || txtNum == 54 || txtNum == 57 || txtNum == 60 || txtNum == 67 || txtNum == 72 || txtNum == 76 || txtNum == 82 || txtNum == 89){ 
                typeText3(txtNum);
            }
            //road sign
            if (txtNum == 103 || txtNum == 104){
                onloadTextBox.style.display = 'block';
                onloadText.innerHTML = txt3[txtNum];
            }
            //car crash
            if (txtNum == 105){
                typeText3(txtNum);
                showItemImage(txtNum);
            }
            return true;
        } 
        else { return false;}
    }
} //class Item ends

class Sprites { //for 576x384 pic
    constructor(picX, picY, picW, picH, canX, canY, canW, canH){ 
        //target picture X, Y, Width, Height
        this.picX = picX * 48;
        this.picY = picY * 48;
        this.picW = picW;
        this.picH = picH;
        //canvas draw X, Y, Width, Height
        this.canX = canX;
        this.canY = canY;
        this.canW = canW;
        this.canH = canH;
    }
    drawSprites(source){ 
        ctx.drawImage(source,
        this.picX, this.picY, this.picW, this.picH, //target picture X, Y, Width, Height
        this.canX, this.canY, this.canW, this.canH); //canvas draw X, Y, Width, Height
    }
    checkCollision(playerNum, topBottom, rightLeft, txtNum) {	//checkCollision for level 1 sprites
        let diffX = Math.abs((this.canX + this.canW / 2.0) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0) - (playerNum.canY + playerNum.canH / 2.0));      
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom) ){
            typeText(txtNum);
            return true;
        } else {return false;}
    }
    checkCollision2(playerNum, topBottom, rightLeft, txtNum) {	//checkCollison for level 2 sprites
        let diffX = Math.abs((this.canX + this.canW / 2.0 ) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0 ) - (playerNum.canY + playerNum.canH / 2.0));      
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom) ){
            typeText2(txtNum);
            return true;
        } else {return false;}
    }	
    checkCollision3(playerNum, topBottom, rightLeft, txtNum) {	//checkCollison for level 3 sprites
        let diffX = Math.abs((this.canX + this.canW / 2.0 ) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0 ) - (playerNum.canY + playerNum.canH / 2.0));      
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom) ){
            typeText3(txtNum);
            return true;
        } else {return false;}
    }	
} //class Sprites ends

class Char { //for 384x256 pic
    constructor(picX, picY, picW, picH, canX, canY, canW, canH){ 
        //target picture X, Y, Width, Height
        this.picX = picX * 32;
        this.picY = picY * 32;
        this.picW = picW;
        this.picH = picH;
        //canvas draw X, Y, Width, Height
        this.canX = canX;
        this.canY = canY;
        this.canW = canW;
        this.canH = canH;
    }
    drawChar(source){ 
        ctx.drawImage(source,
        this.picX, this.picY, this.picW, this.picH, //target picture X, Y, Width, Height
        this.canX, this.canY, this.canW, this.canH); //canvas draw X, Y, Width, Height
    }
    checkCollision2(playerNum, topBottom, rightLeft, txtNum) {	//checkCollison for level 2 sprites
        let diffX = Math.abs((this.canX + this.canW / 2.0 ) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0 ) - (playerNum.canY + playerNum.canH / 2.0));      
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom) ){
            typeText2(txtNum);
            return true;
        } else {return false;}
    }
    checkCollision3(playerNum, topBottom, rightLeft, txtNum) {	//checkCollison for level 2 sprites
        let diffX = Math.abs((this.canX + this.canW / 2.0 ) - (playerNum.canX + playerNum.canW / 2.0));
        let diffY = Math.abs((this.canY + this.canH / 2.0 ) - (playerNum.canY + playerNum.canH / 2.0));      
        if (diffX < (this.canW / 2.0 + playerNum.canW / 2.0 + rightLeft) && diffY < (this.canH / 2.0 + playerNum.canH / 2.0 + topBottom) ){
            typeText3(txtNum);
            return true;
        } else {return false;}
    }	
} //class Sprites ends

class Player {
    constructor(picX, picY, picW, picH, canX, canY, canW, canH){
        //target picture X, Y, Width, Height
        this.picX = picX;
        this.picY = picY; 
        this.picW = picW;
        this.picH = picH;
        //canvas draw X, Y, Width, Height
        this.canX = canX;
        this.canY = canY;
        this.canW = canW;
        this.canH = canH;
    }
    drawSprites(){
        ctx.drawImage(playersImage,
        this.picX, this.picY, this.picW, this.picH,  //target picture X, Y, Width, Height
        this.canX, this.canY, this.canW, this.canH); //canvas draw X, Y, Width, Height
    }
    //movement for player level1
    moveUp() {
        if (pause == false){
            tree1.moveDownAllObjects(); //moving all Items
            land1a.moveDownAllLand();
            if (itemCollisionCheck()) { //collision
                tree1.moveUpAllObjects();
                land1a.moveUpAllLand();
            }
            
            //animation
            if (this.picY < 192) { //if male
                // mask vs non-mask
                if (this.picX < 143){ //change the character into non mask
                    this.picY = 144;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ // change the character into wearing mask
                    this.picY = 144;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                }
            } 
            else { //if female
                if (this.picX < 143){ //change the character into non mask
                    this.picY = 336;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ // change the character into wearing mask
                    this.picY = 336;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                }
            }

        }
    } //moveUp() ends
    moveDown(){
        if (pause == false){
            tree1.moveUpAllObjects(); //moving Items
            land1a.moveUpAllLand();
            if (itemCollisionCheck()) { //collision
                tree1.moveDownAllObjects();
                land1a.moveDownAllLand();
            }
            
            //animation
            if (this.picY < 192) { //if male
                // mask vs non-mask
                if (this.picX < 143){ //non mask
                    this.picY = 0;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ //with mask
                    this.picY = 0;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                }
            } else { //if female
                if (this.picX < 143){ //non mask
                    this.picY = 192;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ //with mask
                    this.picY = 192;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                }
            }

        }
    } //moveDown() ends
    moveLeft(){
        if (pause == false){
            tree1.moveRightAllObjects(); //moving Items
            land1a.moveRightAllLand();
            if (itemCollisionCheck()) { //collision
                tree1.moveLeftAllObjects();
                land1a.moveLeftAllLand();
            }
            
            //animation
            if (this.picY < 192){ // if male
                // mask vs non-mask
                if (this.picX < 143){ //non mask
                    this.picY = 48;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ //with mask
                    this.picY = 48;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                } 
            } else { //if female
                // mask vs non-mask
                if (this.picX < 143){ //non mask
                    this.picY = 240;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ //with mask
                    this.picY = 240;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                } 
            }              
        }
    } //moveLeft() ends
    moveRight(){
        if (pause == false){
            tree1.moveLeftAllObjects(); //moving Items
            land1a.moveLeftAllLand();
            if (itemCollisionCheck()){ //collision
                tree1.moveRightAllObjects(); 
                land1a.moveRightAllLand();
            } 
            
            //animation
            if (this.picY < 192){ //if male
                if (this.picX < 143){ //non mask
                    this.picY = 96;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ //with mask
                    this.picY = 96;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                }
            } else { //if female
                if (this.picX < 143){ //non mask
                    this.picY = 288;
                    this.picX += 48;
                    if (this.picX > 96) this.picX = 0;
                } 
                if (this.picX > 143){ //with mask
                    this.picY = 288;
                    this.picX += 48;
                    if (this.picX > 280) this.picX = 144;
                }
            }
        }   
    } //moveRight() ends

    //movement for player level2
    moveUp2(){
        if (pause == false){
            tree2.moveDownAllObjects2(); //moving all Items
            land2a.moveDownAllLand();
            land2b.moveDownAllLand();
            land2c.moveDownAllLand();
            if (itemCollisionCheck2()){ //collision
                tree2.moveUpAllObjects2(); 
                land2a.moveUpAllLand();
                land2b.moveUpAllLand();
                land2c.moveUpAllLand();
            }
            // animation
            if (this.picY < 192){ // male
                this.picY = 144;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else { // female
                this.picY = 336;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    }
    moveDown2(){
        if (pause == false){
            tree2.moveUpAllObjects2(); //moving all Items
            land2a.moveUpAllLand();
            land2b.moveUpAllLand();
            land2c.moveUpAllLand();
            if (itemCollisionCheck2()){
                tree2.moveDownAllObjects2(); //collision
                land2a.moveDownAllLand();
                land2b.moveDownAllLand();
                land2c.moveDownAllLand();
            } 
            //animation
            if (this.picY < 192){
                this.picY = 0;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 192;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    }
    moveLeft2(){
        if (pause == false){
            tree2.moveRightAllObjects2(); //moving all Items
            land2a.moveRightAllLand();
            land2b.moveRightAllLand();
            land2c.moveRightAllLand();
            if (itemCollisionCheck2()){
                tree2.moveLeftAllObjects2(); //collision
                land2a.moveLeftAllLand();
                land2b.moveLeftAllLand();
                land2c.moveLeftAllLand();
            }
            //animation
            if (this.picY < 192) {
                this.picY = 48;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 240;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    }
    moveRight2(){
        if (pause == false){
            tree2.moveLeftAllObjects2(); //moving all Items
            land2a.moveLeftAllLand();
            land2b.moveLeftAllLand();
            land2c.moveLeftAllLand();
            if (itemCollisionCheck2()){
                tree2.moveRightAllObjects2(); //collision
                land2a.moveRightAllLand();
                land2b.moveRightAllLand();
                land2c.moveRightAllLand();
            }
            //animation
            if (this.picY < 192){
                this.picY = 96;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 288;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    }

    //movement for player level3
    moveUp3() {
        if (pause == false){
            tree3.moveDownAllObjects3(); //moving all Items
            land3a.moveDownAllLand();
            land3b.moveDownAllLand();
            //collision
            if (itemCollisionCheck3()) { 
                tree3.moveUpAllObjects3();
                land3a.moveUpAllLand();
                land3b.moveUpAllLand();
            }
            //animation
            if (this.picY < 192){
                this.picY = 144;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 336;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    } //moveUp() ends
    moveDown3(){
        if (pause == false){
            tree3.moveUpAllObjects3(); //moving Items
            land3a.moveUpAllLand();
            land3b.moveUpAllLand();
            //collision
            if (itemCollisionCheck3()) {
                tree3.moveDownAllObjects3();
                land3a.moveDownAllLand();
                land3b.moveDownAllLand();
            }
            //animation
            if (this.picY < 192){
                this.picY = 0;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 192;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    } //moveDown() ends
    moveLeft3(){
        if (pause == false){
            tree3.moveRightAllObjects3(); //moving Items
            land3a.moveRightAllLand();
            land3b.moveRightAllLand();
            if (itemCollisionCheck3()){
                tree3.moveLeftAllObjects3();//collision
                land3a.moveLeftAllLand();
                land3b.moveLeftAllLand();
            }
             
            //animation
            if (this.picY < 192){
                this.picY = 48;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 240;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }
    } //moveLeft() ends
    moveRight3(){
        if (pause == false){
            tree3.moveLeftAllObjects3(); //moving Items
            land3a.moveLeftAllLand();
            land3b.moveLeftAllLand();
            //collision
            if (itemCollisionCheck3()) {
                tree3.moveRightAllObjects3(); 
                land3a.moveRightAllLand();
                land3b.moveRightAllLand();
            }
            //animation
            if (this.picY < 192){
                this.picY = 96;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            } else {
                this.picY = 288;
                this.picX += 48;
                if (this.picX > 280) this.picX = 144;
            }

        }   
    } //moveRight() ends
}// class Player ends

class LandList { //tiles
    landWidth = 32;
    landHeight = 32;
	layers= [
        [  //level 1 = 27x16 1st layer
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0, 17, 17, 17, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0, 17, 17, 17, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0, 20,  21, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 21, 0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 21, 0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 6, 7, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 6, 7, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
            0, 0,  0,  0, 0, 0, 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0,
        ],
        [ //level 2 = 30x34 1st layer
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, //0
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 19, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 18, 19, //5
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  17, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  17, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 18, 19, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, //10
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, //11
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 17, 17, 17, 17, 17, 17, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, //15
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, //16
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, //20
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   6, 6, 6, 7, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   6, 6, 6, 7, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   6, 6, 6, 7, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   6, 6, 6, 7, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   6, 6, 6, 7, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, //25
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   6, 6, 7, 7, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, //26
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 9, 9,  9,  0,  0,  9,  0,  0,  6, 
            0, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0, 0, 0, 0, 0, 9, 9, 9,  9,  9,  9,  9,  9,  9,  6,//30
            0, 8, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 9,   9, 9, 9, 9, 9, 9, 9, 9, 9,  9,  9,  7,  0,  6,  7,  6, 
            0, 8, 9, 9, 9, 9, 9, 9, 9, 9, 7, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 8, 9, 9, 9, 9, 9, 9, 9, 9, 7, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, 
            0, 8, 9, 9, 9, 9, 9, 9, 9, 9, 7, 0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0, //34
        ],
        [ //level 2 = 30x34 2nd layer
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //0
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //5
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //10
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //11
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //15
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //16
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //20
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //25
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //26
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 9, 9, 9, 9, 9, 9, 9, 7, 
            0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,//30
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //34
        ],
        [ //level 2 = 30x34 3rd layer
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //0
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //5
            0, 0, 0, 0, 0, 0, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //10
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //11
            0, 0, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //15
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //16
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //20
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //25
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //26
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 
            0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0,//30
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //34
        ],
        [ //level3 50x67 //2ND LAYER
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //1
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 17, 17, 17, 17, 17, 17, 17,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 21, 20, 20, 21, 21, 20, 20, 21, 21, 21, 21, 20, 17, 17, 17, 17, 17, 17, 17,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 21, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, //5
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 18, 19, 19, 17,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, //6
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0,  0,  0, 17, 17, 17, 19, 18, 17, 17, 17, 17, 18, 19, 17, 17, 17, 17, 18, 19, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0,  0, 19, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, //10
            0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0,  0, 17, 17, 17, 17, 20, 21, 17, 17, 17, 17, 18, 19, 17, 17, 17, 17, 17, 18, 19, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 17, 17, 17, 17, 17,
            0,  0, 17, 17, 17, 17, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20, 17, 17, 17, 17, 17,
            0,  0, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 17, 17, 17, 17, 20, 21, 21, 21, 20, 21, 21, 21, 21, 20, 21, 21, 20, 21, 21, 21, 21, 17, 17, 20, 17, 17, 17, 17, 17,
            0, 18, 19, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 21, 17, 17, 17, 20, 20, 21, 21, 21, 20, 21, 21, 21, 17, 17, 17, 17, 17, 17, 17, 17, 20, 17, 17, 20, 17, 17, 17, 17, 17, //15
            0, 17, 17, 17, 17, 17, 20,  0,  0, 21, 20, 21, 20, 21, 21, 21, 20, 21, 20, 21, 21, 17, 17, 17, 21, 20, 21, 21, 21, 20, 21, 20, 20, 17, 17, 17, 17, 17, 17, 17, 17, 20, 20, 20, 21, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 21,  0,  0, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 21, 20, 20, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 21,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 20,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //20
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 20,  0,  0, 20, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21, 21, 20, 21, 20, 21, 20, 21, 20, 21, 20, 21, 20, 20, 21, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 20, 21, 20, 21, 20, 21, 20, 21, 20, 21, 20, 21, 20, 21, 21, 17, 17, 17, 21, 21, 20, 21, 21, 20, 21, 21, 20, 21, 21, 21, 21, 21, 21, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,
            0, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0, //30
            0, 17, 17, 17, 17, 17, 21,  0, 21,  0,  0, 20,  0, 21, 21,  0, 20,  0, 21,  0,  0, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21, 20, 21, 20, 20, 21, 21, 21, 20, 20, 21, 21, 21, 21, 20, 17, 17, 17, 17, 17, 17, 20, 20, 17, 17, 17, 20, 20, 17, 17, 17, 21, 21, 20, 21, 20, 20,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 21, 21, 17, 17, 17, 20, 21, 17, 17, 17, 21, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 17, 17, 17, 17, 17, 17, 21, 21, 17, 17, 17, 21, 20, 17, 17, 17, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 21, 21, 17, 17, 17, 21, 21, 17, 17, 17, 21, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //35
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 21, 21, 17, 17, 17, 20, 20, 17, 17, 17, 20, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0, 20, 21, 21, 20, 20,  0,  0,  0,  0,  0, 20, 17, 17, 17,  0,  0,  0, 20, 20, 17, 17, 17, 21, 20, 17, 17, 17, 21, 20, 20, 21, 21, 21, 21, 20,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21,  0,  0,  0, 21, 17, 17, 17, 20, 21, 21, 21, 20, 20, 21, 17, 17, 17, 21, 20, 17, 17,  0,  0,  0,  0, 21, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 20,  0,  0,  0, 21, 17, 17, 17, 21, 21, 21, 20, 21, 21, 20, 17, 17, 17, 20, 21, 17, 17,  0,  0,  0,  0, 20, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 20,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 20, 17, 17,  0,  0,  0,  0, 20, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0, //40
            0, 17, 17, 17, 17, 17, 21, 21, 20, 20, 21, 17, 20,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 21, 20, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 21, 21, 20, 21, 20, 17, 21, 20, 21, 20,  0,  0, 20, 21, 21, 21, 17, 17, 21, 21, 17, 17,  0,  0,  0,  0,  0,  0,  0, 21, 20, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 20,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 20, 20, 17, 17,  0,  0,  0,  0,  0,  0,  0, 20, 20, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 20,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 21, 20, 17, 17,  0,  0,  0,  0,  0,  0,  0, 20, 21, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0, //45
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 20, 21, 17, 17,  0,  0,  0,  0,  0,  0,  0, 21, 20, 17, 17, 17, 17, 17, 17, 17, 20,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17,  0,  0,  0, 17, 17, 21, 21,  0,  0,  0, 20, 21, 20, 21, 20, 17, 17, 21, 21, 20, 20, 21, 21, 21, 21, 20,  0,  0, 20, 21, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17,  0,  0,  0, 17, 17, 21, 20,  0,  0,  0, 21, 20, 20, 21, 21, 17, 17, 20, 21, 20, 21, 20, 21, 20, 20, 21,  0,  0, 21, 20, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17,  0,  0,  0, 17, 17, 20, 21,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0, 20, 21, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20, 21,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21,  0,  0, 21, 20, 17, 17, 17, 17, 20, 17, 17, 17, 17, 17, 17, 17,  0, //50
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 21,  0,  0,  0, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 17, 17, 17, 17, 21, 20, 21, 21, 20, 17, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 21,  0,  0, 20, 21,  0,  0,  0,  0,  0, 20, 17, 17, 17, 21, 17, 17, 17, 17, 20, 21, 20, 21, 20, 17, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 21, 20, 21, 21, 20,  0, 20, 21, 20, 21, 20, 17, 17, 17, 20, 17, 17, 17, 17, 20, 17, 17, 17, 17, 17, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 20,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 20, 21, 20, 21, 21, 21,  0,  0,  0,  0,  0, 20, 17, 17, 17, 21, 17, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 17, 20, 17, 17, 17, 17, 17, 17, 17, 21,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0, 21, 17, 17, 17, 20, 17, 17, 17, 17, 20, 17, 17, 17, 17, 17, 17, 17, 17, 21, 17, 17, 17, 17, 17, 17, 17, 21, //55
            0, 17, 17, 20, 21,  0,  0,  0,  0,  0,  0,  0,  0, 21, 17, 17, 17, 17,  0,  0,  0,  0,  0, 20, 17, 17, 17, 21, 17, 17, 17, 17, 20, 17, 17, 17, 17, 17, 17, 17, 17, 20, 21, 20, 20, 21, 20, 21, 21, 20,
            0, 17, 17, 21, 20,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 21, 20, 20, 21, 20, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 17, 17, 17, 20, 21, 21, 21, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17,
            0, 17, 17, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17,
            0, 17, 17, 21, 21, 21, 21, 21, 20,  0,  0,  0,  0, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, //60
            0, 17, 17, 17, 17, 17, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 17, 17, 21, 20, 21, 21, 21, 21, 20, 20, 21, 21, 21, 21, 20, 21, 21, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, //65
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //67
        ],
        [ //level3 50x67 //1st LAYER
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //0
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //5
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //6
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13, 13, 13, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 13, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //10
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //15
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //0
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0, 20, 21, 21, 20, 21, 21, 20, 21, 21, 21, 20, 21, 21, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //30
            0,  0,  0,  0,  0,  0,  0, 20,  0, 20, 21,  0, 21,  0,  0, 21,  0, 21,  0, 21, 21,  0,  0,  0,  0,  0,  0, 20, 21, 21, 21, 21, 20, 21,  0,  0,  0, 21, 21, 21, 20, 21, 21,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //35
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //40
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 21, 21, 20, 21, 21, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //45
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 21, 21, 21, 21, 21, 20, 21,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //50
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 21, 20, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //55
            0,  0,  0,  0,  0, 21, 20, 21, 21, 21, 20, 21, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 21, 21, 21, 20, 21, 21, 20, 21, 21, 21, 21, 20, 21,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 20, 21, 21, 21, 21, 21, 21, 21, 21, 20, 21, 21, 21,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //60
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //65
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, //67
        ],
	];
	
	getLandX(landNum, col, row ) { return this.layers[landNum][row * this.cols + col]; }
	constructor (landNum, cols, rows, landY) {
        this.cols = cols;
        this.rows = rows;
        this.landCount = 0;
        this.lands = new Array(this.cols * this.rows); // x*y
		for (var c = 0; c < this.cols; c++) {
			for (var r = 0; r < this.rows; r++) {
				let landX = this.getLandX(landNum, c, r); // take layer
                    if (landX > 0) this.lands[this.landCount++] = 
                            new Item(landX*32, landY*31, 35, 35, 30*c, 30*r, this.landWidth, this.landHeight);
			}
        }
    } //constructor ends
	drawLand(){
		if (this.landCount > 0)
			for (let i = 0; i < this.landCount; i++)
                this.lands[i].drawItem(fullTilesImage);
    }
    moveDownAllLand(){for (let i = 0; i < this.landCount; i++) this.lands[i].canY += speedY; }
    moveUpAllLand(){for (let i = 0; i < this.landCount; i++) this.lands[i].canY -= speedY; }
    moveLeftAllLand(){for (let i = 0; i < this.landCount; i++) this.lands[i].canX -= speedX; }
    moveRightAllLand(){for (let i = 0; i < this.landCount; i++) this.lands[i].canX += speedX; }
    
}

class TreeList {
    treeWidth = 35;
    treeHeight = 40;
	layers= [
        [   //level 1 = 27x16
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ], //level1
        [   //level 2 = 30x34
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, //1
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, //5
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 
            1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, //10
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //11
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, //15
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, //16
            1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, //20
            1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 
            1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, //25
            1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, //26
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 
            1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 
            1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,//30
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, //34
        ], //level 2
        [ //level3 50x65
            0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, //1
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //5
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //6
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //10
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //15
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //20
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, //25
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //30
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //35
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //40
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //45
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //50
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //55
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //60
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //65
        ],
	];
	
	getLayer(lvl, col, row) { return this.layers[lvl][row * this.cols + col]; }
	constructor (lvl, cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.treeCount = 0;
        this.trees = new Array(this.cols * this.rows); // x*y
		for (var c = 0; c < this.cols; c++) {
			for (var r = 0; r < this.rows; r++) {
				let treeNum = this.getLayer(lvl, c, r); // take layer
                    if (treeNum > 0) this.trees[this.treeCount++] = 
                            new Item(0, 0, 45, 50, 30*c, 30*r, this.treeWidth, this.treeHeight);
			}
        }
    } //constructor ends
	drawTree(){
		if (this.treeCount > 0)
			for (let i = 0; i < this.treeCount; i++)
                this.trees[i].drawItem(treesImage);
    }
	checkCollision(playerNum) {
		if (this.treeCount > 0)
			for (let i = 0; i < this.treeCount; i++) {
				let tree = this.trees[i];	
				let diffX = Math.abs((tree.canX + tree.canW / 2.0 ) - (playerNum.canX + playerNum.canW / 2.0));
				let diffY = Math.abs((tree.canY + tree.canH / 2.0 ) - (playerNum.canY + playerNum.canH / 2.0));
				if (diffX < (tree.canW / 2.0 + playerNum.canW / 2.0 - 10) && diffY < (tree.canH / 2.0 + playerNum.canH / 2.0) - 8)
					return true;
			}
		return false;
    }
    //level1
    moveDownAllObjects() { //if player goes up, Items go down
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canY += speedY;
        //sprites
        sprites1A.canY += speedY;
        sprites1B.canY += speedY;
        sprites1C.canY += speedY;
        sprites1D.canY += speedY;
        sprites1E.canY += speedY;
        sprites1F.canY += speedY;
        sprites1G.canY += speedY;
        //buildings
        house1a.canY += speedY;
        house1b.canY += speedY;
        house1c.canY += speedY;
        shop1.canY += speedY;
        //items
        bucket1a.canY += speedY;
        bucket1b.canY += speedY;
        bucket1c.canY += speedY;
        bench1.canY += speedY;
        lumber1.canY += speedY;
        lamp1.canY += speedY;
        tent1.canY += speedY;
        well1.canY += speedY;
        gate1.canY += speedY;
	}
	moveUpAllObjects() {  //if player goes down, Items go up
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canY -= speedY;
        //sprites
        sprites1A.canY -= speedY;
        sprites1B.canY -= speedY;
        sprites1C.canY -= speedY;
        sprites1D.canY -= speedY;
        sprites1E.canY -= speedY;
        sprites1F.canY -= speedY;
        sprites1G.canY -= speedY;
        //buildings
        house1a.canY -= speedY;
        house1b.canY -= speedY;
        house1c.canY -= speedY;
        //items
        bucket1a.canY -= speedY;
        bucket1b.canY -= speedY;
        bucket1c.canY -= speedY;
        shop1.canY -= speedY;
        bench1.canY -= speedY;
        lumber1.canY -= speedY;
        lamp1.canY -= speedY;
        tent1.canY -= speedY;
        well1.canY -= speedY;
        gate1.canY -= speedY;
	}
	moveLeftAllObjects() { //if player goes right, Items go left
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canX -= speedX;
        //sprites
        sprites1A.canX -= speedX;
        sprites1B.canX -= speedX;
        sprites1C.canX -= speedX; 
        sprites1D.canX -= speedX;
        sprites1E.canX -= speedX;
        sprites1F.canX -= speedX;
        sprites1G.canX -= speedX;
        //buildings
        house1a.canX -= speedX;
        house1b.canX -= speedX;
        house1c.canX -= speedX;
        shop1.canX -= speedX;
        //items
        bucket1a.canX -= speedX;      
        bucket1b.canX -= speedX;
        bucket1c.canX -= speedX;
        bench1.canX -= speedX;
        lumber1.canX -= speedX;    
        lamp1.canX -= speedX;  
        tent1.canX -= speedX;
        well1.canX -= speedX;
        gate1.canX -= speedX;
	}
	moveRightAllObjects() { //if player goes left, Items up
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canX += speedX;
        //sprites
        sprites1A.canX += speedX;
        sprites1B.canX += speedX;
        sprites1C.canX += speedX;
        sprites1D.canX += speedX;
        sprites1E.canX += speedX;
        sprites1F.canX += speedX;
        sprites1G.canX += speedX;
        //buildings
        house1a.canX += speedX;
        house1b.canX += speedX;
        house1c.canX += speedX;
        shop1.canX += speedX;
        //items
        bucket1a.canX += speedX;
        bucket1b.canX += speedX;
        bucket1c.canX += speedX;
        bench1.canX += speedX;
        lumber1.canX += speedX;
        lamp1.canX += speedX;
        tent1.canX += speedX;
        well1.canX += speedX;
        gate1.canX += speedX;  
    }
    //level2
    moveDownAllObjects2() { //if player goes up, Items go down
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canY += speedY;
        //sprites
        sprites2a.canY += speedY;
        sprites2b.canY += speedY;
        sprites2c.canY += speedY;
        sprites2d.canY += speedY;
        sprites2e.canY += speedY;
        sprites2f.canY += speedY;
        sprites2g.canY += speedY;
        sprites2h.canY += speedY;
        sprites2i.canY += speedY;
        sprites2j.canY += speedY;
        sprites2k.canY += speedY;
        sprites2l.canY += speedY;
        sprites2m.canY += speedY;
        sprites2n.canY += speedY;
        sprites2o.canY += speedY;
        sprites2p.canY += speedY;
        sprites2q.canY += speedY;
        sprites2r.canY += speedY;
        //items
        house2a.canY += speedY;
        house2b.canY += speedY;
        house2c.canY += speedY;
        house2d.canY += speedY;
        house2e.canY += speedY;
        house2f.canY += speedY;
        house2g.canY += speedY;
        house2gfront.canY += speedY;
        tower2.canY += speedY;
        tower2front.canY += speedY;
        //stand
        shop2a.canY += speedY;
        shop2b.canY += speedY;
        shop2c.canY += speedY;
        shop2cBack.canY += speedY;
        shop2d.canY += speedY;
        shop2dBack1.canY += speedY;
        shop2dBack2.canY += speedY;
        shop2eMat.canY += speedY;
        shop2eLeft.canY += speedY;
        shop2eBottom.canY += speedY;
        //props
        pot2a.canY += speedY;
        pot2b.canY += speedY;
        bench2a.canY += speedY;
        bench2b.canY += speedY;
        bench2c.canY += speedY;
        lamp2a.canY += speedY;
        sign2a.canY += speedY;
        fountains2a.canY += speedY;
        tent2.canY += speedY;
        bridge2a.canY += speedY;
        bridge2b.canY += speedY;
        bridge2c.canY += speedY;
        bridge2d.canY += speedY;
        chair2a.canY += speedY; //first row
        chair2b.canY += speedY;
        chair2c.canY += speedY;
        chair2e.canY += speedY; //second row
        chair2f.canY += speedY;
        chair2g.canY += speedY;
        chair2h.canY += speedY; // third row
        chair2i.canY += speedY;
        chair2j.canY += speedY;
        chair2k.canY += speedY;
        bucket2a.canY += speedY;
        bucket2b.canY += speedY;
        bucket2c.canY += speedY;
        bucket2d.canY += speedY;
	}
	moveUpAllObjects2() {  //if player goes down, Items go up
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canY -= speedY;
        //sprites
        sprites2a.canY -= speedY;
        sprites2b.canY -= speedY;
        sprites2c.canY -= speedY;
        sprites2d.canY -= speedY;
        sprites2e.canY -= speedY;
        sprites2f.canY -= speedY;
        sprites2g.canY -= speedY;
        sprites2h.canY -= speedY;
        sprites2i.canY -= speedY;
        sprites2j.canY -= speedY;
        sprites2k.canY -= speedY;
        sprites2l.canY -= speedY;
        sprites2m.canY -= speedY;
        sprites2n.canY -= speedY;
        sprites2o.canY -= speedY;
        sprites2p.canY -= speedY;
        sprites2q.canY -= speedY;
        sprites2r.canY -= speedY;
        //items
        house2a.canY -= speedY;
        house2b.canY -= speedY;
        house2c.canY -= speedY;
        house2d.canY -= speedY;
        house2e.canY -= speedY;
        house2f.canY -= speedY;
        house2g.canY -= speedY;
        house2gfront.canY -= speedY;
        tower2.canY -= speedY;
        tower2front.canY -= speedY;
        //stand
        shop2a.canY -= speedY;
        shop2b.canY -= speedY;
        shop2c.canY -= speedY;
        shop2cBack.canY -= speedY;
        shop2d.canY -= speedY;
        shop2dBack1.canY -= speedY;
        shop2dBack2.canY -= speedY;
        shop2eMat.canY -= speedY;
        shop2eLeft.canY -= speedY;
        shop2eBottom.canY -= speedY;
        //props
        pot2a.canY -= speedY;
        pot2b.canY -= speedY;
        bench2a.canY -= speedY;
        bench2b.canY -= speedY;
        bench2c.canY -= speedY;
        lamp2a.canY -= speedY;
        sign2a.canY -= speedY;
        fountains2a.canY -= speedY;
        tent2.canY -= speedY;
        bridge2a.canY -= speedY;
        bridge2b.canY -= speedY;
        bridge2c.canY -= speedY;
        bridge2d.canY -= speedY;
        chair2a.canY -= speedY;
        chair2b.canY -= speedY;
        chair2c.canY -= speedY;
        chair2e.canY -= speedY; //second
        chair2f.canY -= speedY;
        chair2g.canY -= speedY;
        chair2h.canY -= speedY; //third
        chair2i.canY -= speedY;
        chair2j.canY -= speedY;
        chair2k.canY -= speedY;
        bucket2a.canY -= speedY;
        bucket2b.canY -= speedY;
        bucket2c.canY -= speedY;
        bucket2d.canY -= speedY;
	}
	moveLeftAllObjects2() { //if player goes right, Items go left
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canX -= speedX;
        //sprites
        sprites2a.canX -= speedX;
        sprites2b.canX -= speedX;
        sprites2c.canX -= speedX;
        sprites2d.canX -= speedX;
        sprites2e.canX -= speedX;
        sprites2f.canX -= speedX;
        sprites2g.canX -= speedX;
        sprites2h.canX -= speedX;
        sprites2i.canX -= speedX;
        sprites2j.canX -= speedX;
        sprites2k.canX -= speedX;
        sprites2l.canX -= speedX;
        sprites2m.canX -= speedX;
        sprites2n.canX -= speedX;
        sprites2o.canX -= speedX;
        sprites2p.canX -= speedX;
        sprites2q.canX -= speedX;
        sprites2r.canX -= speedX;
        //items
        house2a.canX -= speedX;
        house2b.canX -= speedX;
        house2c.canX -= speedX;
        house2d.canX -= speedX;
        house2e.canX -= speedX;
        house2f.canX -= speedX;
        house2g.canX -= speedX;
        house2gfront.canX -= speedX;
        tower2.canX -= speedX;
        tower2front.canX -= speedX;
        //stand
        shop2a.canX -= speedX;
        shop2b.canX -= speedX;
        shop2c.canX -= speedX;
        shop2cBack.canX -= speedX;
        shop2d.canX -= speedX;
        shop2dBack1.canX -= speedX;
        shop2dBack2.canX -= speedX;
        shop2eMat.canX -= speedX;
        shop2eLeft.canX -= speedX;
        shop2eBottom.canX -= speedX;
        //props
        pot2a.canX -= speedX;
        pot2b.canX -= speedX; 
        bench2a.canX -= speedX;
        bench2b.canX -= speedX;
        bench2c.canX -= speedX;
        lamp2a.canX -= speedX;
        sign2a.canX -= speedX;
        fountains2a.canX -= speedX;
        tent2.canX -= speedX;
        bridge2a.canX -= speedX;
        bridge2b.canX -= speedX;
        bridge2c.canX -= speedX;
        bridge2d.canX -= speedX;
        chair2a.canX -= speedX; //first row
        chair2b.canX -= speedX;
        chair2c.canX -= speedX;
        chair2e.canX -= speedX; //second
        chair2f.canX -= speedX;
        chair2g.canX -= speedX;
        chair2h.canX -= speedX; //third
        chair2i.canX -= speedX;
        chair2j.canX -= speedX;
        chair2k.canX -= speedX;
        bucket2a.canX -= speedX;
        bucket2b.canX -= speedX;
        bucket2c.canX -= speedX;
        bucket2d.canX -= speedX;
	}
	moveRightAllObjects2() { //if player goes left, Items up
        //trees
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canX += speedX;
        //sprites
        sprites2a.canX += speedX;
        sprites2b.canX += speedX;
        sprites2c.canX += speedX;
        sprites2d.canX += speedX;
        sprites2e.canX += speedX;
        sprites2f.canX += speedX;
        sprites2g.canX += speedX;
        sprites2h.canX += speedX;
        sprites2i.canX += speedX;
        sprites2j.canX += speedX;
        sprites2k.canX += speedX;
        sprites2l.canX += speedX;
        sprites2m.canX += speedX;
        sprites2n.canX += speedX;
        sprites2o.canX += speedX;
        sprites2p.canX += speedX;
        sprites2q.canX += speedX;
        sprites2r.canX += speedX;
        //items
        house2a.canX += speedX;
        house2b.canX += speedX;
        house2c.canX += speedX;
        house2d.canX += speedX;
        house2e.canX += speedX;
        house2f.canX += speedX;
        house2g.canX += speedX;
        house2gfront.canX += speedX;
        tower2.canX += speedX;
        tower2front.canX += speedX;
        //stand
        shop2a.canX += speedX;
        shop2b.canX += speedX;
        shop2c.canX += speedX;
        shop2cBack.canX += speedX;
        shop2d.canX += speedX;
        shop2dBack1.canX += speedX;
        shop2dBack2.canX += speedX;
        shop2eMat.canX += speedX;
        shop2eLeft.canX += speedX;
        shop2eBottom.canX += speedX;
        //props
        pot2a.canX += speedX;
        pot2b.canX += speedX;
        bench2a.canX += speedX;
        bench2b.canX += speedX;
        bench2c.canX += speedX;
        sign2a.canX += speedX;
        lamp2a.canX += speedX;
        fountains2a.canX += speedX;
        tent2.canX += speedX;
        bridge2a.canX += speedX;
        bridge2b.canX += speedX;
        bridge2c.canX += speedX;
        bridge2d.canX += speedX;
        chair2a.canX += speedX; //first row
        chair2b.canX += speedX;
        chair2c.canX += speedX;
        chair2e.canX += speedX; //second row
        chair2f.canX += speedX;
        chair2g.canX += speedX;
        chair2h.canX += speedX; //third row
        chair2i.canX += speedX;
        chair2j.canX += speedX;
        chair2k.canX += speedX;
        bucket2a.canX += speedX;
        bucket2b.canX += speedX;
        bucket2c.canX += speedX;
        bucket2d.canX += speedX;
    }
    //level 3
    moveDownAllObjects3() { //if player goes up, Items go down
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canY += speedY; //trees
        //items
        trees3a.canY += speedY;
        trees3b.canY += speedY;
        trees3c.canY += speedY;
        trees3d.canY += speedY;
        trees3e.canY += speedY;
        trees3f.canY += speedY;
        trees3g.canY += speedY;
        trees3h.canY += speedY;
        trees3i.canY += speedY;
        car3a.canY += speedY;
        car3b.canY += speedY;
        car3c.canY += speedY;
        car3d.canY += speedY;
        car3e.canY += speedY;
        car3f.canY += speedY;
        car3g.canY += speedY;
        car3h.canY += speedY;
        car3i.canY += speedY;
        car3j.canY += speedY;
        car3k.canY += speedY;
        car3l.canY += speedY;
        car3m.canY += speedY;
        car3n.canY += speedY;
        car3o.canY += speedY;
        car3p.canY += speedY;
        car3q.canY += speedY;
        car3r.canY += speedY;
        sign3a.canY += speedY;
        sign3b.canY += speedY;
        fence3a.canY += speedY;
        fence3b.canY += speedY;
        barrel3a.canY += speedY;
        barrel3b.canY += speedY;
        tomb3a.canY += speedY;
        tomb3b.canY += speedY;
        //buildings
        stand3a.canY += speedY;
        stand3b.canY += speedY;
        stand3c.canY += speedY;
        stand3d.canY += speedY;
        stand3e.canY += speedY;
        stand3f.canY += speedY;
        stand3g.canY += speedY;
        stand3h.canY += speedY;
        stand3i.canY += speedY;
        stand3j.canY += speedY;
        stand3k.canY += speedY;
        stand3l.canY += speedY;
        stand3m.canY += speedY;
        stand3n.canY += speedY;
        stand3o.canY += speedY;
        stand3p.canY += speedY;
        stand3q.canY += speedY;
        stand3r.canY += speedY;
        stand3s.canY += speedY;
        house3a.canY += speedY;
        house3b.canY += speedY;
        house3c.canY += speedY;
        house3d.canY += speedY;
        house3dSide.canY += speedY;
        house3dBack.canY += speedY;
        house3dBack2.canY += speedY;
        house3e.canY += speedY;
        house3f.canY += speedY;
        house3g.canY += speedY;
        house3h.canY += speedY;
        house3i.canY += speedY;
        house3j.canY += speedY;
        house3k.canY += speedY;
        house3l.canY += speedY;
        house3m.canY += speedY;
        house3n.canY += speedY;
        house3o.canY += speedY;
        house3p.canY += speedY;
        house3q.canY += speedY;
        house3r.canY += speedY;
        house3s.canY += speedY;
        house3t.canY += speedY;
        house3u.canY += speedY;
        house3v.canY += speedY;
        house3w.canY += speedY;
        house3x.canY += speedY;
        house3y.canY += speedY;
        house3z.canY += speedY;
        house3aa.canY += speedY;
        house3ab.canY += speedY;
        house3ac.canY += speedY;
        house3ad.canY += speedY;
        house3ae.canY += speedY;
        house3af.canY += speedY;
        house3ag.canY += speedY;
        house3ah.canY += speedY;
        house3ai.canY += speedY;
        house3aj.canY += speedY;
        house3ak.canY += speedY;
        house3al.canY += speedY;
        house3am.canY += speedY;
        house3an.canY += speedY;
        house3ao.canY += speedY;
        house3ap.canY += speedY;
        house3aq.canY += speedY;
        house3ar.canY += speedY;
        house3as.canY += speedY;
        house3at.canY += speedY;
        house3au.canY += speedY;
        house3av.canY += speedY;
        gate3a.canY += speedY;
        gate3b.canY += speedY;
        gate3c.canY += speedY;
        gate3d.canY += speedY;
        gate3e.canY += speedY;
        gate3f.canY += speedY;
        //sprites
        sprites3a.canY += speedY;
        sprites3b.canY += speedY;
        sprites3c.canY += speedY;
        sprites3d.canY += speedY;
        sprites3e.canY += speedY;
        sprites3f.canY += speedY;
        sprites3g.canY += speedY;
        sprites3h.canY += speedY;
        sprites3i.canY += speedY;
        sprites3j.canY += speedY;
        sprites3k.canY += speedY;
        sprites3l.canY += speedY;
        sprites3m.canY += speedY;
        sprites3n.canY += speedY;
        sprites3o.canY += speedY;
        sprites3p.canY += speedY;
        sprites3q.canY += speedY;
        sprites3r.canY += speedY;
        sprites3s.canY += speedY;
        sprites3t.canY += speedY;
        sprites3u.canY += speedY;
        sprites3v.canY += speedY;
        sprites3w.canY += speedY;
        sprites3x.canY += speedY;
        sprites3y.canY += speedY;
        sprites3z.canY += speedY;
        sprites3aa.canY += speedY;
        sprites3ab.canY += speedY;
        sprites3ac.canY += speedY;
        sprites3ad.canY += speedY;
        sprites3ae.canY += speedY;
        sprites3af.canY += speedY;
        sprites3ag.canY += speedY;
        sprites3ah.canY += speedY;
        sprites3ai.canY += speedY;
        sprites3aj.canY += speedY;
        sprites3ak.canY += speedY;
        sprites3al.canY += speedY;
        sprites3am.canY += speedY;
        sprites3an.canY += speedY;
        sprites3ao.canY += speedY;
        sprites3ap.canY += speedY;
        sprites3aq.canY += speedY;
        sprites3ar.canY += speedY;
        sprites3as.canY += speedY;
        sprites3at.canY += speedY;
        sprites3au.canY += speedY;
        sprites3av.canY += speedY;
        sprites3aw.canY += speedY;
        sprites3ax.canY += speedY;
        sprites3ay.canY += speedY;
        sprites3az.canY += speedY;
        sprites3ba.canY += speedY;
        sprites3bb.canY += speedY;
        sprites3bc.canY += speedY;
        sprites3bd.canY += speedY;
        sprites3be.canY += speedY;
        sprites3bf.canY += speedY;
        sprites3bg.canY += speedY;
        sprites3bh.canY += speedY;
        sprites3bi.canY += speedY;
        sprites3bj.canY += speedY;
        sprites3bk.canY += speedY;
        sprites3bl.canY += speedY;
        sprites3bm.canY += speedY;
        sprites3bn.canY += speedY;
        sprites3bo.canY += speedY;
    }
    moveUpAllObjects3() { //if player goes up, Items go down
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canY -= speedY; //trees
        //items
        trees3a.canY -= speedY;
        trees3b.canY -= speedY;
        trees3c.canY -= speedY;
        trees3d.canY -= speedY;
        trees3e.canY -= speedY;
        trees3f.canY -= speedY;
        trees3g.canY -= speedY;
        trees3h.canY -= speedY;
        trees3i.canY -= speedY;
        car3a.canY -= speedY;
        car3b.canY -= speedY;
        car3c.canY -= speedY;
        car3d.canY -= speedY;
        car3e.canY -= speedY;
        car3f.canY -= speedY;
        car3g.canY -= speedY;
        car3h.canY -= speedY;
        car3i.canY -= speedY;
        car3j.canY -= speedY;
        car3k.canY -= speedY;
        car3l.canY -= speedY;
        car3m.canY -= speedY;
        car3n.canY -= speedY;
        car3o.canY -= speedY;
        car3p.canY -= speedY;
        car3q.canY -= speedY;
        car3r.canY -= speedY;
        sign3a.canY -= speedY;
        sign3b.canY -= speedY;
        fence3a.canY -= speedY;
        fence3b.canY -= speedY;
        barrel3a.canY -= speedY;
        barrel3b.canY -= speedY;
        tomb3a.canY -= speedY;
        tomb3b.canY -= speedY;
        //buildings
        stand3a.canY -= speedY;
        stand3b.canY -= speedY;
        stand3c.canY -= speedY;
        stand3d.canY -= speedY;
        stand3e.canY -= speedY;
        stand3f.canY -= speedY;
        stand3g.canY -= speedY;
        stand3h.canY -= speedY;
        stand3i.canY -= speedY;
        stand3j.canY -= speedY;
        stand3k.canY -= speedY;
        stand3l.canY -= speedY;
        stand3m.canY -= speedY;
        stand3n.canY -= speedY;
        stand3o.canY -= speedY;
        stand3p.canY -= speedY;
        stand3q.canY -= speedY;
        stand3r.canY -= speedY;
        stand3s.canY -= speedY;
        house3a.canY -= speedY;
        house3b.canY -= speedY;
        house3c.canY -= speedY;
        house3d.canY -= speedY;
        house3dSide.canY -= speedY;
        house3dBack.canY -= speedY;
        house3dBack2.canY -= speedY;
        house3e.canY -= speedY;
        house3f.canY -= speedY;
        house3g.canY -= speedY;
        house3h.canY -= speedY;
        house3i.canY -= speedY;
        house3j.canY -= speedY;
        house3k.canY -= speedY;
        house3l.canY -= speedY;
        house3m.canY -= speedY;
        house3n.canY -= speedY;
        house3o.canY -= speedY;
        house3p.canY -= speedY;
        house3q.canY -= speedY;
        house3r.canY -= speedY;
        house3s.canY -= speedY;
        house3t.canY -= speedY;
        house3u.canY -= speedY;
        house3v.canY -= speedY;
        house3w.canY -= speedY;
        house3x.canY -= speedY;
        house3y.canY -= speedY;
        house3z.canY -= speedY;
        house3aa.canY -= speedY;
        house3ab.canY -= speedY;
        house3ac.canY -= speedY;
        house3ad.canY -= speedY;
        house3ae.canY -= speedY;
        house3af.canY -= speedY;
        house3ag.canY -= speedY;
        house3ah.canY -= speedY;
        house3ai.canY -= speedY;
        house3aj.canY -= speedY;
        house3ak.canY -= speedY;
        house3al.canY -= speedY;
        house3am.canY -= speedY;
        house3an.canY -= speedY;
        house3ao.canY -= speedY;
        house3ap.canY -= speedY;
        house3aq.canY -= speedY;
        house3ar.canY -= speedY;
        house3as.canY -= speedY;
        house3at.canY -= speedY;
        house3au.canY -= speedY;
        house3av.canY -= speedY;
        gate3a.canY -= speedY;
        gate3b.canY -= speedY;
        gate3c.canY -= speedY;
        gate3d.canY -= speedY;
        gate3e.canY -= speedY;
        gate3f.canY -= speedY;
         //sprites
        sprites3a.canY -= speedY;
        sprites3b.canY -= speedY;
        sprites3c.canY -= speedY;
        sprites3d.canY -= speedY;
        sprites3e.canY -= speedY;
        sprites3f.canY -= speedY;
        sprites3g.canY -= speedY;
        sprites3h.canY -= speedY;
        sprites3i.canY -= speedY;
        sprites3j.canY -= speedY;
        sprites3k.canY -= speedY;
        sprites3l.canY -= speedY;
        sprites3m.canY -= speedY;
        sprites3n.canY -= speedY;
        sprites3o.canY -= speedY;
        sprites3p.canY -= speedY;
        sprites3q.canY -= speedY;
        sprites3r.canY -= speedY;
        sprites3s.canY -= speedY;
        sprites3t.canY -= speedY;
        sprites3u.canY -= speedY;
        sprites3v.canY -= speedY;
        sprites3w.canY -= speedY;
        sprites3x.canY -= speedY;
        sprites3y.canY -= speedY;
        sprites3z.canY -= speedY;
        sprites3aa.canY -= speedY;
        sprites3ab.canY -= speedY;
        sprites3ac.canY -= speedY;
        sprites3ad.canY -= speedY;
        sprites3ae.canY -= speedY;
        sprites3af.canY -= speedY;
        sprites3ag.canY -= speedY;
        sprites3ah.canY -= speedY;
        sprites3ai.canY -= speedY;
        sprites3aj.canY -= speedY;
        sprites3ak.canY -= speedY;
        sprites3al.canY -= speedY;
        sprites3am.canY -= speedY;
        sprites3an.canY -= speedY;
        sprites3ao.canY -= speedY;
        sprites3ap.canY -= speedY;
        sprites3aq.canY -= speedY;
        sprites3ar.canY -= speedY;
        sprites3as.canY -= speedY;
        sprites3at.canY -= speedY;
        sprites3au.canY -= speedY;
        sprites3av.canY -= speedY;
        sprites3aw.canY -= speedY;
        sprites3ax.canY -= speedY;
        sprites3ay.canY -= speedY;
        sprites3az.canY -= speedY;
        sprites3ba.canY -= speedY;
        sprites3bb.canY -= speedY;
        sprites3bc.canY -= speedY;
        sprites3bd.canY -= speedY;
        sprites3be.canY -= speedY;
        sprites3bf.canY -= speedY;
        sprites3bg.canY -= speedY;
        sprites3bh.canY -= speedY;
        sprites3bi.canY -= speedY;
        sprites3bj.canY -= speedY;
        sprites3bk.canY -= speedY;
        sprites3bl.canY -= speedY;
        sprites3bm.canY -= speedY;
        sprites3bn.canY -= speedY;
        sprites3bo.canY -= speedY;
    }
    moveLeftAllObjects3() { //if player goes up, Items go down
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canX -= speedX; //trees
        //items
        trees3a.canX -= speedX;
        trees3b.canX -= speedX;
        trees3c.canX -= speedX;
        trees3d.canX -= speedX;
        trees3e.canX -= speedX;
        trees3f.canX -= speedX;
        trees3g.canX -= speedX;
        trees3h.canX -= speedX;
        trees3i.canX -= speedX;
        car3a.canX -= speedX;
        car3b.canX -= speedX;
        car3c.canX -= speedX;
        car3d.canX -= speedX;
        car3e.canX -= speedX;
        car3f.canX -= speedX;
        car3g.canX -= speedX;
        car3h.canX -= speedX;
        car3i.canX -= speedX;
        car3j.canX -= speedX;
        car3k.canX -= speedX;
        car3l.canX -= speedX;
        car3m.canX -= speedX;
        car3n.canX -= speedX;
        car3o.canX -= speedX;
        car3p.canX -= speedX;
        car3q.canX -= speedX;
        car3r.canX -= speedX;
        sign3a.canX -= speedX;
        sign3b.canX -= speedX;
        fence3a.canX -= speedX;
        fence3b.canX -= speedX;
        barrel3a.canX -= speedX;
        barrel3b.canX -= speedX;
        tomb3a.canX -= speedX;
        tomb3b.canX -= speedX;
        //buildings
        stand3a.canX -= speedX;
        stand3b.canX -= speedX;
        stand3c.canX -= speedX;
        stand3d.canX -= speedX;
        stand3e.canX -= speedX;
        stand3f.canX -= speedX;
        stand3g.canX -= speedX;
        stand3h.canX -= speedX;
        stand3i.canX -= speedX;
        stand3j.canX -= speedX;
        stand3k.canX -= speedX;
        stand3l.canX -= speedX;
        stand3m.canX -= speedX;
        stand3n.canX -= speedX;
        stand3o.canX -= speedX;
        stand3p.canX -= speedX;
        stand3q.canX -= speedX;
        stand3r.canX -= speedX;
        stand3s.canX -= speedX;
        house3a.canX -= speedX;
        house3b.canX -= speedX;
        house3c.canX -= speedX;
        house3d.canX -= speedX;
        house3dSide.canX -= speedX;
        house3dBack.canX -= speedX;
        house3dBack2.canX -= speedX;
        house3e.canX -= speedX;
        house3f.canX -= speedX;
        house3g.canX -= speedX;
        house3h.canX -= speedX;
        house3i.canX -= speedX;
        house3j.canX -= speedX;
        house3k.canX -= speedX;
        house3l.canX -= speedX;
        house3m.canX -= speedX;
        house3n.canX -= speedX;
        house3o.canX -= speedX;
        house3p.canX -= speedX;
        house3q.canX -= speedX;
        house3r.canX -= speedX;
        house3s.canX -= speedX;
        house3t.canX -= speedX;
        house3u.canX -= speedX;
        house3v.canX -= speedX;
        house3w.canX -= speedX;
        house3x.canX -= speedX;
        house3y.canX -= speedX;
        house3z.canX -= speedX;
        house3aa.canX -= speedX;
        house3ab.canX -= speedX;
        house3ac.canX -= speedX;
        house3ad.canX -= speedX;
        house3ae.canX -= speedX;
        house3af.canX -= speedX;
        house3ag.canX -= speedX;
        house3ah.canX -= speedX;
        house3ai.canX -= speedX;
        house3aj.canX -= speedX;
        house3ak.canX -= speedX;
        house3al.canX -= speedX;
        house3am.canX -= speedX;
        house3an.canX -= speedX;
        house3ao.canX -= speedX;
        house3ap.canX -= speedX;
        house3aq.canX -= speedX;
        house3ar.canX -= speedX;
        house3as.canX -= speedX;
        house3at.canX -= speedX;
        house3au.canX -= speedX;
        house3av.canX -= speedX;
        gate3a.canX -= speedX;
        gate3b.canX -= speedX;
        gate3c.canX -= speedX;
        gate3d.canX -= speedX;
        gate3e.canX -= speedX;
        gate3f.canX -= speedX;
        //sprites
        sprites3a.canX -= speedX;
        sprites3b.canX -= speedX;
        sprites3c.canX -= speedX;
        sprites3d.canX -= speedX;
        sprites3e.canX -= speedX;
        sprites3f.canX -= speedX;
        sprites3g.canX -= speedX;
        sprites3h.canX -= speedX;
        sprites3i.canX -= speedX;
        sprites3j.canX -= speedX;
        sprites3k.canX -= speedX;
        sprites3l.canX -= speedX;
        sprites3m.canX -= speedX;
        sprites3n.canX -= speedX;
        sprites3o.canX -= speedX;
        sprites3p.canX -= speedX;
        sprites3q.canX -= speedX;
        sprites3r.canX -= speedX;
        sprites3s.canX -= speedX;
        sprites3t.canX -= speedX;
        sprites3u.canX -= speedX;
        sprites3v.canX -= speedX;
        sprites3w.canX -= speedX;
        sprites3x.canX -= speedX;
        sprites3y.canX -= speedX;
        sprites3z.canX -= speedX;
        sprites3aa.canX -= speedX;
        sprites3ab.canX -= speedX;
        sprites3ac.canX -= speedX;
        sprites3ad.canX -= speedX;
        sprites3ae.canX -= speedX;
        sprites3af.canX -= speedX;
        sprites3ag.canX -= speedX;
        sprites3ah.canX -= speedX;
        sprites3ai.canX -= speedX;
        sprites3aj.canX -= speedX;
        sprites3ak.canX -= speedX;
        sprites3al.canX -= speedX;
        sprites3am.canX -= speedX;
        sprites3an.canX -= speedX;
        sprites3ao.canX -= speedX;
        sprites3ap.canX -= speedX;
        sprites3aq.canX -= speedX;
        sprites3ar.canX -= speedX;
        sprites3as.canX -= speedX;
        sprites3at.canX -= speedX;
        sprites3au.canX -= speedX;
        sprites3av.canX -= speedX;
        sprites3aw.canX -= speedX;
        sprites3ax.canX -= speedX;
        sprites3ay.canX -= speedX;
        sprites3az.canX -= speedX;
        sprites3ba.canX -= speedX;
        sprites3bb.canX -= speedX;
        sprites3bc.canX -= speedX;
        sprites3bd.canX -= speedX;
        sprites3be.canX -= speedX;
        sprites3bf.canX -= speedX;
        sprites3bg.canX -= speedX;
        sprites3bh.canX -= speedX;
        sprites3bi.canX -= speedX;
        sprites3bj.canX -= speedX;
        sprites3bk.canX -= speedX;
        sprites3bl.canX -= speedX;
        sprites3bm.canX -= speedX;
        sprites3bn.canX -= speedX;
        sprites3bo.canX -= speedX;
    }
    moveRightAllObjects3() { //if player goes up, Items go down
        for (let i = 0; i < this.treeCount; i++) this.trees[i].canX += speedX; //trees
        //items
        trees3a.canX += speedX;
        trees3b.canX += speedX;
        trees3c.canX += speedX;
        trees3d.canX += speedX;
        trees3e.canX += speedX;
        trees3f.canX += speedX;
        trees3g.canX += speedX;
        trees3h.canX += speedX;
        trees3i.canX += speedX;
        car3a.canX += speedX;
        car3b.canX += speedX;
        car3c.canX += speedX;
        car3d.canX += speedX;
        car3e.canX += speedX;
        car3f.canX += speedX;
        car3g.canX += speedX;
        car3h.canX += speedX;
        car3i.canX += speedX;
        car3j.canX += speedX;
        car3k.canX += speedX;
        car3l.canX += speedX;
        car3m.canX += speedX;
        car3n.canX += speedX;
        car3o.canX += speedX;
        car3p.canX += speedX;
        car3q.canX += speedX;
        car3r.canX += speedX;
        sign3a.canX += speedX;
        sign3b.canX += speedX;
        fence3a.canX += speedX;
        fence3b.canX += speedX;
        barrel3a.canX += speedX;
        barrel3b.canX += speedX;
        tomb3a.canX += speedX;
        tomb3b.canX += speedX;
        //buildings
        stand3a.canX += speedX;
        stand3b.canX += speedX;
        stand3c.canX += speedX;
        stand3d.canX += speedX;
        stand3e.canX += speedX;
        stand3f.canX += speedX;
        stand3g.canX += speedX;
        stand3h.canX += speedX;
        stand3i.canX += speedX;
        stand3j.canX += speedX;
        stand3k.canX += speedX;
        stand3l.canX += speedX;
        stand3m.canX += speedX;
        stand3n.canX += speedX;
        stand3o.canX += speedX;
        stand3p.canX += speedX;
        stand3q.canX += speedX;
        stand3r.canX += speedX;
        stand3s.canX += speedX;
        house3a.canX += speedX;
        house3b.canX += speedX;
        house3c.canX += speedX;
        house3d.canX += speedX;
        house3dSide.canX += speedX;
        house3dBack.canX += speedX;
        house3dBack2.canX += speedX;
        house3e.canX += speedX;
        house3f.canX += speedX;
        house3g.canX += speedX;
        house3h.canX += speedX;
        house3i.canX += speedX;
        house3j.canX += speedX;
        house3k.canX += speedX;
        house3l.canX += speedX;
        house3m.canX += speedX;
        house3n.canX += speedX;
        house3o.canX += speedX;
        house3p.canX += speedX;
        house3q.canX += speedX;
        house3r.canX += speedX;
        house3s.canX += speedX;
        house3t.canX += speedX;
        house3u.canX += speedX;
        house3v.canX += speedX;
        house3w.canX += speedX;
        house3x.canX += speedX;
        house3y.canX += speedX;
        house3z.canX += speedX;
        house3aa.canX += speedX;
        house3ab.canX += speedX;
        house3ac.canX += speedX;
        house3ad.canX += speedX;
        house3ae.canX += speedX;
        house3af.canX += speedX;
        house3ag.canX += speedX;
        house3ah.canX += speedX;
        house3ai.canX += speedX;
        house3aj.canX += speedX;
        house3ak.canX += speedX;
        house3al.canX += speedX;
        house3am.canX += speedX;
        house3an.canX += speedX;
        house3ao.canX += speedX;
        house3ap.canX += speedX;
        house3aq.canX += speedX;
        house3ar.canX += speedX;
        house3as.canX += speedX;
        house3at.canX += speedX;
        house3au.canX += speedX;
        house3av.canX += speedX;
        gate3a.canX += speedX;
        gate3b.canX += speedX;
        gate3c.canX += speedX;
        gate3d.canX += speedX;
        gate3e.canX += speedX;
        gate3f.canX += speedX;
        //sprites
        sprites3a.canX += speedX;
        sprites3b.canX += speedX;
        sprites3c.canX += speedX;
        sprites3d.canX += speedX;
        sprites3e.canX += speedX;
        sprites3f.canX += speedX;
        sprites3g.canX += speedX;
        sprites3h.canX += speedX;
        sprites3i.canX += speedX;
        sprites3j.canX += speedX;
        sprites3k.canX += speedX;
        sprites3l.canX += speedX;
        sprites3m.canX += speedX;
        sprites3n.canX += speedX;
        sprites3o.canX += speedX;
        sprites3p.canX += speedX;
        sprites3q.canX += speedX;
        sprites3r.canX += speedX;
        sprites3s.canX += speedX;
        sprites3t.canX += speedX;
        sprites3u.canX += speedX;
        sprites3v.canX += speedX;
        sprites3w.canX += speedX;
        sprites3x.canX += speedX;
        sprites3y.canX += speedX;
        sprites3z.canX += speedX;
        sprites3aa.canX += speedX;
        sprites3ab.canX += speedX;
        sprites3ac.canX += speedX;
        sprites3ad.canX += speedX;
        sprites3ae.canX += speedX;
        sprites3af.canX += speedX;
        sprites3ag.canX += speedX;
        sprites3ah.canX += speedX;
        sprites3ai.canX += speedX;
        sprites3aj.canX += speedX;
        sprites3ak.canX += speedX;
        sprites3al.canX += speedX;
        sprites3am.canX += speedX;
        sprites3an.canX += speedX;
        sprites3ao.canX += speedX;
        sprites3ap.canX += speedX;
        sprites3aq.canX += speedX;
        sprites3ar.canX += speedX;
        sprites3as.canX += speedX;
        sprites3at.canX += speedX;
        sprites3au.canX += speedX;
        sprites3av.canX += speedX;
        sprites3aw.canX += speedX;
        sprites3ax.canX += speedX;
        sprites3ay.canX += speedX;
        sprites3az.canX += speedX;
        sprites3ba.canX += speedX;
        sprites3bb.canX += speedX;
        sprites3bc.canX += speedX;
        sprites3bd.canX += speedX;
        sprites3be.canX += speedX;
        sprites3bf.canX += speedX;
        sprites3bg.canX += speedX;
        sprites3bh.canX += speedX;
        sprites3bi.canX += speedX;
        sprites3bj.canX += speedX;
        sprites3bk.canX += speedX;
        sprites3bl.canX += speedX;
        sprites3bm.canX += speedX;
        sprites3bn.canX += speedX;
        sprites3bo.canX += speedX;
    }
} //classTreeList ends
