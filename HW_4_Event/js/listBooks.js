"use strict";
let defaultStyle=null;
let book=null;
let startIndex=0;
let endIndex=0;
document.addEventListener("DOMContentLoaded", (event) => {
    document.body.addEventListener("keydown",keyListenerDwn);
    document.body.addEventListener("keyup",KeyLListenerUp);
    book=document.getElementById("selectBook");
    defaultStyle=document.getElementsByTagName("li");
    book.addEventListener("mousedown",SelectBook);;
    
   
 });

 function SelectBook(e){
    startIndex=[...this.children].findIndex(indx=>indx==e.target);
    for(let i=0;i<defaultStyle.length;i++){

        defaultStyle[i].style.backgroundColor="orange";
    }
        e.target.style.backgroundColor=" orangered"
        
 }

 function selectCtrlBook(e){

    startIndex=[...this.children].findIndex(indx=>indx==e.target);
        if(e.target.style.backgroundColor=="orangered"){

            e.target.style.backgroundColor="orange"
        }else{
            e.target.style.backgroundColor="orangered"
        }
        
 }
function selectShiftBook(e){
    let temp=0;
     endIndex=[...this.children].findIndex(indx=>indx==e.target);

    if(startIndex>endIndex){
        temp=startIndex;
        startIndex=endIndex;
        endIndex=temp;
    }
    for(let i=startIndex;i<=endIndex;i++){
        defaultStyle[i].style.backgroundColor="orangered";
    }
   
}

function keyListenerDwn(e){
    if(e.ctrlKey&&e.repeat){
        book.removeEventListener("mousedown",SelectBook);
        book.addEventListener("mousedown",selectCtrlBook);

    }else if(e.shiftKey&&e.repeat){
        book.removeEventListener("mousedown",SelectBook);
        book.addEventListener("mousedown",selectShiftBook);
       
    }
}

 function KeyLListenerUp(e){
   if(e.keyCode===17){
    book.removeEventListener("mousedown",selectCtrlBook);
    book.addEventListener("mousedown",SelectBook);
   }else if(e.keyCode==16){
    book.addEventListener("mousedown",SelectBook);
    book.removeEventListener("mousedown",selectShiftBook);
   }
 }