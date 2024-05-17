"use strict";
let text=null;
document.addEventListener("DOMContentLoaded", (event) => {

    text=document.getElementsByName("name");
    text[0].addEventListener("keyup",KeyUp);
    text[0].addEventListener("keydown",Keydown);
    
    
 });

 function KeyUp(e){
    text[0].removeAttribute('readonly');
 }
 function Keydown(e){

    if((e.keyCode>=48&&e.keyCode<=57)||e.keyCode>=96&&e.keyCode<=105){
       text[0].setAttribute('readonly', true);
    }
 }