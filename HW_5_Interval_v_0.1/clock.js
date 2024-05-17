"use strict";

let SVG=new Array(10);

let secondView=null;
let hoursView=null;
let minuteView=null;
//#region arraySvg
SVG=[`<svg class="null" width="85" height="153" viewBox="0 0 84 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10" />
<polygon points="-1,3 -1,73 9,63 9,11"   />
<polygon points="-1,76 -1,153 9,143 9,86"  />
<polygon points="75,11 75,64 85,73 85,3"  />
<polygon points="75,86 75,143 85,153 85,76"  />
<polygon points="10,144 74,144 84,154 0,154"  />
</svg>`,`<svg class="null" width="85" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="75,11 75,64 85,73 85,3"/>
<polygon points="75,86 75,143 85,153 85,76"/>
</svg>`,`<svg  class="null" width="85" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10" />
<polygon points="-1,76 -1,153 9,143 9,86"  />
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"  />
<polygon points="75,11 75,64 85,73 85,3"  />
<polygon points="10,144 74,144 84,154 0,154"  />
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10"/>
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"/>
<polygon points="75,11 75,64 85,73 85,3"/>
<polygon points="75,86 75,143 85,153 85,76"/>
<polygon points="10,144 74,144 84,154 0,154"/>
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="-1,3 -1,73 9,63 9,11"/>
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"/>
<polygon points="75,11 75,64 85,73 85,3"/>
<polygon points="75,86 75,143 85,153 85,76"/>
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10"/>
<polygon points="-1,3 -1,73 9,63 9,11"/>
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"/>
<polygon points="75,86 75,143 85,153 85,76"/>
<polygon points="10,144 74,144 84,154 0,154"/>
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10"/>
<polygon points="-1,3 -1,73 9,63 9,11"/>
<polygon points="-1,76 -1,153 9,143 9,86"/>
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"/>
<polygon points="75,86 75,143 85,153 85,76"/>
<polygon points="10,144 74,144 84,154 0,154"/>
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10"/>
<polygon points="75,11 75,64 85,73 85,3"/>
<polygon points="75,86 75,143 85,153 85,76"/>
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10"/>
<polygon points="-1,3 -1,73 9,63 9,11"/>
<polygon points="-1,76 -1,153 9,143 9,86"/>
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"/>
<polygon points="75,11 75,64 85,73 85,3"/>
<polygon points="75,86 75,143 85,153 85,76"/>
<polygon points="10,144 74,144 84,154 0,154"/>
</svg>`,`<svg width="85" class="null" height="153" viewBox="0 0 84 155" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,2 84,2 74,10 10,10"/>
<polygon points="-1,3 -1,73 9,63 9,11"/>
<polygon points="0,74.5 9.5,65 74,65 84,74.5 74,85 10,85"/>
<polygon points="75,11 75,64 85,73 85,3"/>
<polygon points="75,86 75,143 85,153 85,76"/>
<polygon points="10,144 74,144 84,154 0,154"/>
</svg>`];
//#endregion

document.addEventListener("DOMContentLoaded", (event) => {
    secondView=document.getElementsByClassName("second");
    minuteView=document.getElementsByClassName("minute");
    hoursView=document.getElementsByClassName("hour");
 });


//#region  function
function ViewClock(){
    let date=new Date().toLocaleTimeString();
    console.log(date);
    
    
    secondView[0].innerHTML=SVG[date.slice(6,7)];
    secondView[1].innerHTML=SVG[date.slice(7)];

    minuteView[0].innerHTML=SVG[date.slice(3,4)];
    minuteView[1].innerHTML=SVG[date.slice(4,5)];

    hoursView[0].innerHTML=SVG[date.slice(0,1)];
    hoursView[1].innerHTML=SVG[date.slice(1,2)];
}
//#endregion
setInterval(ViewClock,1000)



