"use strict";
let button=null;
let itemList=null;
let action=new Array(3);
document.addEventListener("DOMContentLoaded", (event) => {
itemList=document.getElementById("itemList");

button=formList.buttonAdd;
button.addEventListener("click",AddListHandler);

 });


 function AddListHandler(e){
 
    AddList(itemList);
 }



function ClickList(e){
   
switch(CheckChoice()){
    //e.currentTarget
    case 0:
        AddItemfinallist(e.currentTarget)
    break;
    case 1:
        AddBeforeItem(e.currentTarget)
    break;
    case 2:
       ChangeTextItem(e.target);
    break;
    case 3:
        AddList(e.target);
     break;
     case 4:
        RemoveItem(e.target);
     break;
}
e.stopPropagation();
}

//#region  Function for List


function RemoveItem(itemHtml){

itemHtml.remove();


}

function AddList(parrentHtml){
 
    let text=null;
if(formList.addNestedText.value){

    text=document.createTextNode(formList.addNestedText.value);

}else{
    text=document.createTextNode("New List");
}

    let ul= document.createElement("ul");
    let li=document.createElement("li");
    li.appendChild(text);
    ul.appendChild(li);
    parrentHtml.appendChild(ul);
    ul.addEventListener("click",ClickList);
  }


function AddItemfinallist(parentItemHtml){
    let text=null;
    if(formList.addfinallistText.value){
        text=document.createTextNode(formList.addfinallistText.value);
    }else{
        text=document.createTextNode("New Item");
    }
    let li=document.createElement("li");
    li.appendChild(text);
    parentItemHtml.appendChild(li);
}


function AddBeforeItem(parentItemHtml){

    let text=null;
    let test=parentItemHtml.firstChild;
    if(formList.addItemListText.value){
        text=document.createTextNode(formList.addItemListText.value);
    }else{
        text=document.createTextNode("New Item before");
    }
    let li=document.createElement("li");
    li.appendChild(text);
    parentItemHtml.insertBefore(li,test);


}


function ChangeTextItem(elemHtml){
    let text=formList.fieldchangeText.value;
    if(formList.fieldchangeText.value){
        elemHtml.innerText=text;
    }
 }
function CheckChoice(){

for(let i=0;i<formList.listChange.length;i++){

    if(formList.listChange[i].checked){
        return i;
    }
}

}
 //#endregion