"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    const li=document.getElementById("selectView");
    li.addEventListener("click",ShowDisk);
    li.addEventListener("mouseover",SelectElement);
 });

function SelectElement(e){
e.target.style.fontWeight="bold";
e.relatedTarget.style.fontWeight="normal";
}

function ShowDisk(e){
let IsOpen=document.getElementById(e.target.getAttribute("data-openPc"));
if(IsOpen){
    (IsOpen.style.display=="block"?IsOpen.style.display="none":IsOpen.style.display="block");
}
}


