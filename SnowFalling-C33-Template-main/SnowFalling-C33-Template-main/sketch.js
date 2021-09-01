var array = []
const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine

function preload(){
bgImg = loadImage("background.jpg")
pImg = loadImage("pengi.gif")

}

function setup() {
  createCanvas(800,400);
 
// p = createSprite(220, 230, 50, 50);
//p.addImage(pImg)
//p.scale = 0.3
//edges = createEdgeSprites();
engine=Engine.create();
 world=engine.world
}

function draw() {
  Engine.update(engine)
  background(bgImg)
 /* 
  if(keyDown(RIGHT_ARROW)){
   p.x = p.x+5 
  }

  if(keyDown(LEFT_ARROW)){
    p.x = p.x-5 
   }

   if(keyDown("SPACE")){
    p.velocityY = -5
   }
   p.velocityY +=0.8
  
   p.collide(edges[3])
 */  
  snowFall();
for (var i = 0;i<array.length;i++){
  array[i].display()
}
  //drawSprites();
 
}
function snowFall(){
if (frameCount  % 10 === 0){
  s=new snow(random(0,800),0,random(20,40),random(20,40))
  array.push(s)
  console.log(array)
}


}