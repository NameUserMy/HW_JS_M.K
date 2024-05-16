"use strict";
let colonSrc="imgscr/points.gif";
let hour=new Array(10);
let minute=new Array(10);
let second=new Array(10);
let colon=null;
let secondView=null;
let hoursView=null;
let minuteView=null;




//#region  function
function FillArray (array){
    for(let i=0;i<array.length;i++){

        second[i]=`url(imgscr/${i}.gif)`;
        console.log(second[i])

    }
   

}

function ViewClock(){
    let date=new Date().toLocaleTimeString();
    console.log(date);
    
    secondView[0].style.backgroundImage=second[date.slice(6,7)];
    secondView[1].style.backgroundImage=second[date.slice(7)];

    minuteView[0].style.backgroundImage=second[date.slice(3,4)];
    minuteView[1].style.backgroundImage=second[date.slice(4,5)];

    hoursView[0].style.backgroundImage=second[date.slice(0,1)];
    hoursView[1].style.backgroundImage=second[date.slice(1,2)];
}

function BlinkColon(){
   if(colonSrc=="none"){
       colonSrc="url(imgscr/points.gif)";
       colon[0].style.backgroundImage=colonSrc;
       colon[1].style.backgroundImage=colonSrc;
   }else{
       colonSrc="none";
       colon[0].style.backgroundImage=colonSrc;
       colon[1].style.backgroundImage=colonSrc;
   }
}
//#endregion

document.addEventListener("DOMContentLoaded", (event) => {
    FillArray(second);
    colon=document.getElementsByClassName("colonColon");
    secondView=document.getElementsByClassName("second");
    minuteView=document.getElementsByClassName("minute");
    hoursView=document.getElementsByClassName("hour");
 });





 setInterval(BlinkColon,1000)


setInterval(ViewClock,1000)



