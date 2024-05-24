"use strict";
let markerColor=null;
let ink=null;
let printText=null;
let toolTip=null;
let solid=null;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("inkValue").textContent="100%"
    printText= document.getElementById("Mytext");
    markerColor=document.getElementById("markerColor");
    ink=document.getElementById("ink");
    solid=document.getElementById("solid");
    toolTip=document.getElementById("toolTip");
    toolTip.style.pointerEvents= "none";
    toolTip.style.opacity="0";
    
    //#region  listeners
    markerColor.addEventListener("input",()=>{
        solid.style.backgroundColor= `rgba(
            ${document.getElementById("R").value}, 
            ${document.getElementById("G").value},
            ${document.getElementById("B").value},
            ${document.getElementById("A").value})`;
        ink.style.backgroundColor =`rgba(
            ${document.getElementById("R").value}, 
            ${document.getElementById("G").value},
            ${document.getElementById("B").value},
            ${document.getElementById("A").value})`;
            marker.SetColor(`rgba(
                ${document.getElementById("R").value}, 
                ${document.getElementById("G").value},
                ${document.getElementById("B").value},
                ${document.getElementById("A").value})`);
    });
    document.getElementById("printText").addEventListener("mousedown",()=>{
        marker.InkCalculate(200);
        marker.print( document.getElementById("textForPrint").value);
       
       

    });
    document.getElementById("refillbutto").addEventListener("mousedown",()=>{
       
        markerRefill.Refiil();
        toolTip.style.pointerEvents= "none";

    });
    document.getElementById("clearPrint").addEventListener("mousedown",()=>{
       
        printText.textContent="";

    });
    //#endregion
 });

 //#region obj Marker

function Marker(color,maxInk,step){
    this._color=color;
    this._printWord="";
    this._maxInk=maxInk;
    this._needInk;
    this._ink=this._maxInk;
    this._step=this._maxInk*step;
}

Marker.prototype.SetColor=(color)=>{
    this._color=color;
};

Marker.prototype.print=(printWord)=>{
    if(this._ink>=this._needInk){
    this._printWord=printWord;
    printText.style.color=this._color;
    printText.textContent+=this._printWord;
    }
    this._needInk=document.getElementById("textForPrint").value.replace(/\s/g,'').length*this._step;
    if(this._ink<this._needInk||this._ink==0){
        toolTip.style.pointerEvents= "painted";
        toolTip.style.opacity="1";
    
    }
};

Marker.prototype.InkCalculate=()=>{
    this._needInk=document.getElementById("textForPrint").value.replace(/\s/g,'').length*this._step;
    if(this._ink>=this._needInk){
    this._ink-=this._needInk;
    document.getElementById("inkValue").textContent=Math.fround((this._ink/this._maxInk)*100)+"%"
   }
};

Marker.prototype.SetMaxInk=(maxInk)=>{
    this._maxInk=maxInk;
};
Marker.prototype.SetStep=(step)=>{
    this._step=this._maxInk*step;
};
Marker.prototype.SetInk=(ink)=>{
    this._ink=ink;

};
let marker=new Marker();
marker.SetMaxInk(200);
marker.SetStep(0.005);
marker.SetInk(200);

function MarkerRefill(color,maxInk,step){
    Marker.call(this,color,maxInk,step);
    this._MaxRefill=this._maxInk;
}



MarkerRefill.prototype.__proto__=Marker.prototype;
let markerRefill=new MarkerRefill();
MarkerRefill.prototype.Refiil=()=>{

    let valueInk=document.getElementById("inkValue");
    
     let Id=  setInterval(() => {
         this._ink+=this._step;
         valueInk.textContent=Math.fround((this._ink/this._maxInk)*100)+"%";
         console.log(`refill ${this._ink}`);
         if(this._ink>=this._maxInk){         
             clearInterval(Id);
             toolTip.style.pointerEvents= "none";
             toolTip.style.opacity="0";
         }
        
     }, 20);  
    
 
 };
 //#endregion