"use strict";
let contentView=null;
document.addEventListener("DOMContentLoaded", (event) => {
    contentView=document.getElementById("contentView");
    document.body.addEventListener("keydown",CtrEHandle);
 });

function CtrEHandle(e){
if(e.ctrlKey){
    e.preventDefault();
}
    if(e.ctrlKey && e.keyCode === 69){
        contentView.innerHTML=`<textArea id="editText" class="editText content align"  title="Crtl+S for save text">
        ${contentView.textContent}</textArea>`;
    }
    if(e.ctrlKey && e.keyCode === 83){
        contentView.innerText=`${document.getElementById("editText").value}`;
    }
}