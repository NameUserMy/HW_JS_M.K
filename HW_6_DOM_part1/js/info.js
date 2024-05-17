
"use strict";
let contener=null;
let content=null;
let content1=null;
document.addEventListener("DOMContentLoaded", (event) => {
    
    contener=document.getElementById("contener");
    contener.addEventListener("mousedown",ActionHandler);
    content1=document.getElementsByClassName("content");
    
 });



 function ActionHandler(e){

console.log(`${e.target.getAttribute("data-open")}`);
for(let i=0;i<content1.length;i++){
    content1[i].style.height="0px";
    content1[i].style.fontSize="0em";
}

content=document.getElementById(e.target.getAttribute("data-open"));
console.log(content)
content.style.height="70px";
content.style.fontSize="1em";

}
