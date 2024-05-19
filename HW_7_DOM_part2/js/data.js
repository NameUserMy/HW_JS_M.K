"use strict";
let flag=false;
let tableData=null;
let firstName=null;
let lastName=null;
let age=null;
let company=null;
let choce=new Array(4);
document.addEventListener("DOMContentLoaded", (event) => {
    tableData=document.getElementsByClassName("click");
    for(let i=0;i<tableData.length;i++){
        tableData[i].addEventListener("mousedown",SortHendle);
    }

   
 });


function GetInfoForSort(){

    firstName=document.getElementsByClassName("firstName");
    lastName=document.getElementsByClassName("lastName");
    age=document.getElementsByClassName("age");
    company=document.getElementsByClassName("Company");

    for(let i=0;i<firstName.length;i++){
        choce[i]={firstName:firstName[i].textContent,
            lastName:lastName[i].textContent,
            age:age[i].textContent,
            company:company[i].textContent
          };

    }
        
}


function SortHendle(e){
    GetInfoForSort();
    Sort(e.currentTarget.id);
    for(let i=0;i<firstName.length;i++){
        firstName[i].innerHTML=choce[i]["firstName"];
        lastName[i].innerHTML=choce[i]["lastName"];
        age[i].innerHTML=choce[i]["age"];
        company[i].innerHTML=choce[i]["company"];
    }

}

 function Sort(keySort){
    choce.sort((a,b)=>{ 
        if(a[keySort]>b[keySort]){return flag?1:-1}
        if(a[keySort]<b[keySort]){return flag?-1:1}
        return 0;
    });
    if(flag){
        flag=false;
    }else{flag=true;}
    console.log(choce)
     
}