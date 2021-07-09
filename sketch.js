var ghost1,ghost2,ghost3,ghost4
var pacmanImg
var pacMan 
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10;
var cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20;
var cardboard21,cardboard22;
function preload (){
  ghost1=loadImage("blue ghost.PNG")
  ghost2=loadImage("green ghost.PNG")
  ghost3=loadImage("pink ghost.PNG")
  ghost4=loadImage("red ghost.PNG")
  ghost5=loadImage("yellow ghost.PNG")
  pacmanImg =loadAnimation("pac man 1.PNG","pac man 2.PNG")
  pcImg=loadImage("pc.png")
}
function setup(){
createCanvas(400,400)
ghost_1=createSprite(350,350,10,10);
ghost_1.addImage(ghost1)
ghost_1.scale=0.3;
pacMan =createSprite(120,120,20,20)
//pacMan.addAnimation("moving",pacmanImg)
pacMan.addImage(pcImg)
pacMan.scale=0.022;
cardboard1 = createSprite(10,70,100,10);
cardboard1.shapeColor = "brown";
cardboard2 = createSprite(100,50,10,100);
cardboard2.shapeColor = "brown";
cardboard3 = createSprite(80,130,100,10);
cardboard3.shapeColor = "brown";
cardboard4 = createSprite(50,250,10,100);
cardboard4.shapeColor = "brown";
cardboard5 = createSprite(130,210,100,10);
cardboard5.shapeColor = "brown";
cardboard6 = createSprite(10,250,100,10);
cardboard6.shapeColor = "brown";
cardboard7 = createSprite(160,120,10,100);
cardboard7.shapeColor = "brown";
cardboard8 = createSprite(150,20,100,10);
cardboard8.shapeColor = "brown";
cardboard9 = createSprite(250,70,10,100);
cardboard9.shapeColor = "brown";
cardboard10 = createSprite(270,150,100,10);
cardboard10.shapeColor = "brown";
cardboard11 = createSprite(330,50,100,10);
cardboard11.shapeColor = "brown";
cardboard12 = createSprite(340,125,10,100);
cardboard12.shapeColor = "brown";
cardboard13 = createSprite(220,250,10,100);
cardboard13.shapeColor = "brown";
cardboard14 = createSprite(330,210,150,10);
cardboard14.shapeColor = "brown";
cardboard15 = createSprite(100,300,10,100);
cardboard15.shapeColor = "brown";
cardboard16 = createSprite(180,310,100,10);
cardboard16.shapeColor = "brown";
cardboard17 = createSprite(30,352,10,100);
cardboard17.shapeColor = "brown";
cardboard18 = createSprite(175,352,10,100);
cardboard18.shapeColor = "brown";
cardboard19 = createSprite(280,290,10,100);
cardboard19.shapeColor = "brown";
cardboard20 = createSprite(350,270,120,10);
cardboard20.shapeColor = "brown";
cardboard21 = createSprite(250,390,100,10);
cardboard21.shapeColor = "brown";
cardboard22 = createSprite(330,370,10,100);
cardboard22.shapeColor = "brown";
}
function draw(){
background(0)
if (keyDown("left_arrow")){
  pacMan.x=pacMan.x-1
}
if (keyDown("right_arrow")){
  pacMan.x=pacMan.x+1
}
if (keyDown("up_arrow")){
  pacMan.y=pacMan.y-1
}
if (keyDown("down_arrow")){
  pacMan.y=pacMan.y+1
}
pacMan.collide(cardboard1)
pacMan.collide(cardboard2)
pacMan.collide(cardboard3)
pacMan.collide(cardboard4)
pacMan.collide(cardboard5)
pacMan.collide(cardboard6)
pacMan.collide(cardboard7)
pacMan.collide(cardboard8)
pacMan.collide(cardboard9)
pacMan.collide(cardboard10)
pacMan.collide(cardboard11)
pacMan.collide(cardboard12)
pacMan.collide(cardboard13)
pacMan.collide(cardboard14)
pacMan.collide(cardboard15)
pacMan.collide(cardboard16)
pacMan.collide(cardboard17)
pacMan.collide(cardboard18)
pacMan.collide(cardboard19)
pacMan.collide(cardboard20)
pacMan.collide(cardboard21)
pacMan.collide(cardboard22)
var edges=createEdgeSprites();
pacMan.collide(edges)
drawSprites();
}
