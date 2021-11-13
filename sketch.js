var hr,min,sec


function setup() {
  createCanvas(1000,800);

}

function draw() {
  background("black");  

  angleMode(DEGREES);


  hrAngle=map(hr%12,0,12,0,360);
  minAngle=map(min,0,60,8,360);
  secAngle=map(sec,0,60,0,360);

  translate(500,400)
  rotate(-90);

  fill("cyan");
  arc(0,0,550,550,hr*30,PI);
  fill("black");
  arc(0,0,530,530,PI,PI);
 

  fill("blue");
  arc(0,0,530,530,hr*6,PI);
  fill("black");
  arc(0,0,510,510,PI,PI);


  fill("green");
  arc(0,0,510,510,sec*6,PI);
  fill("black");
  arc(0,0,490,490,PI,PI);




  push();
  rotate(hrAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  rotate(secAngle);
  stroke("orange");
  strokeWeight(7);
  line(0,0,200,0);
  pop();


  hr = hour();
  min = minute();
  sec = second();

  console.log(hr+""+min+""+sec+"")

  drawSprites();
}