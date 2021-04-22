const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ,bg1;
var timer=0
function preload() {
   

 getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
 if(bg1)
    background(bg1)
   
textSize(30)
fill("white")

 text("time: "+timer,20,30)


    Engine.update(engine);

   
   

}

async function getBackgroundImg(){

   

var times =await  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   
var timeJSON= await times.json()
e
var datetime = timeJSON.datetime

var rTime =datetime.slice(11,13)
var date = datetime.slice(11,19)
console.log(rTime)
timer=date


if(rTime===06){
bg="sunrise1.png"
}
else if(rTime===07){
bg="sunrise2.png"
}
else if(rTime===08){
bg="sunrise3.png"
}
else if(rTime===09){
bg="sunrise4.png"
}
else if(rTime >= 10 && rTime<=14){
bg="sunrise5.png"
}
else if(rTime>=15 && rTime<=17){
bg="sunrise6.png"
}
else if(rTime===18){
bg="sunset7.png"
}
else if(rTime===19){
bg="sunset8.png"
}
else if(rTime===20){
bg="sunset9.png"
}
else if(rTime===21){
bg="sunset10.png"
}
else if(rTime>=22 && rTime<=02){
bg="sunset11.png"
}
else {
bg="sunset12.png"
}




    bg1=loadImage(bg)
}

