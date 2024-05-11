"use strict";
let isPull = false;
let X = 0;
let Y = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    let Drag=document.getElementById("Drag");
    
    Drag.addEventListener("mousedown", IsDrag);
    Drag.addEventListener("mousemove", Pull);
    Drag.addEventListener("mouseup", IsPull);
 });


function IsDrag(e){


 console.log(`X ${ e.offsetX} Y ${ e.offsetY} SY ${e.screenY }` );
 X=e.offsetX;
 Y=e.offsetY
isPull=true;

}


function IsPull(e){

    isPull=false;

}


 function Pull(e){
   
   if(isPull){
    content.style.width=e.clientX+"px";
    content.style.height=e.clientY+"px";
   }
}