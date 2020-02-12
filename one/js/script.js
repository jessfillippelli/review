"use strict";
window.onload = setup;

let bubbleArray = [];
const MAX_BUBBLES =100;
let colorArray = ["#F920AA","#84EE4F","#4FCCEE","#EEA84F","#F4173F"];

function setup(){

  /** cookie cutter for circle object **/
class Circle{
    constructor(x,y,r,sx,sy,c){
      this.x = x;
      this.y =y;
      this.r =r;
      this.sx =sx;
      this.sy=sy;
      this.c =c;
      this.circleElement = document.createElement("div");
      this.circleElement.className = "circleStyle";
      // apply inline styles to the circle object
    /*  this.circleElement.style.left = this.x;
      this.circleElement.style.top = this.y;
      this.circleElement.style.width = this.r;
      this.circleElement.style.height = this.r;
      this.circleElement.style.background = this.c;*/

  this.circleElement.setAttribute("style",`left:${this.x}px;top:${this.y}px;width:${this.r}px;height:${this.r}px;background:${this.c}`);
  document.getElementById("wrapper").appendChild(  this.circleElement );
    }

    display(){

    }
    update(){
      this.x = this.x+this.sx;
      this.circleElement.style.left = this.x+"px";
      this.y = this.y+this.sy;
      this.circleElement.style.top = this.y+"px";
    }

    checkBoundaries(){
      if(this.x>1000 || this.x<0){
        this.sx = this.sx*-1;
      }
      if(this.y>800 ||this.y<0){
        this.sy = this.sy*-1;
      }
    }

}

/*let bubble = new Circle(200,200,50,4,4,"#F920AA");
let bubble2 = new Circle(100,100,30,4,4,"#84EE4F");
let bubble2 = new Circle(100,100,30,4,4,"#84EE4F");*/

/* ADD ITEMS TO THE ARRAY
console.log("BEFORE PUSH:: "+bubbleArray.length);
//push:: ADDS to the array
bubbleArray.push(new Circle(200,200,50,4,4,"#F920AA"));
bubbleArray.push(new Circle(300,200,50,4,4,"#F920AA"));
bubbleArray.push(new Circle(400,200,50,4,4,"#F920AA"));
// length - keeps track of how many items are in the array
console.log("AFTER PUSH::"+bubbleArray.length);*/

for(let i=0;i< MAX_BUBBLES;i++){
  console.log(i);
  let x = Math.floor(Math.random()*1000);
  let y= Math.floor(Math.random()*800);
  let r= (Math.floor(Math.random()*40))+10;
  let sx = (Math.floor(Math.random()*5))+1;
  let sy = (Math.floor(Math.random()*3))+1;
  let rColorIndex =  Math.floor(Math.random()*colorArray.length);
  bubbleArray.push(new Circle(x,y,r,sx,sy,colorArray[rColorIndex]));
}

requestAnimationFrame(animate);

function animate(){
for(let i=0;i<MAX_BUBBLES;i++){
  //console.log("update");
  bubbleArray[i].update();
  bubbleArray[i].checkBoundaries();
}
requestAnimationFrame(animate);
}





}
