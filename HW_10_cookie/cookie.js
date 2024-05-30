

"use strict";
import * as mymodule from "./Module/formValidation.js";
let cookieInfo="";
let life=null;
$(document).ready(() => {
    
    let blah=new mymodule.FormValidation($("#formReg"));
   
    $(`#registration`).on('click',()=>{
       
       if(blah.IscheckedForm()){
        cookieInfo=blah.Test().split(`&`);
        SaveCookie(cookieInfo);
       }
    });
    loadCookie();
       
});


function SaveCookie(cookie){
    life=new Date();
    life.setMonth(life.getMonth()+6);
    for(let i=0;i<cookie.length;i++){
        document.cookie=`${cookie[i].split('=')[0]}=` + encodeURIComponent(cookie[i].split('=')[1])+";path=/;expires="+life.toUTCString()+";";
    }
}

function loadCookie(){
    let lan= document.getElementsByName('language');
    let textField=document.getElementsByClassName(`txtField`);
    let gender=document.getElementsByName('gender');

    
    let loadCookie=document.cookie.split(`;`);
    if(loadCookie){
        for(let i=0;i<loadCookie.length;i++){
            for(let j=0;j<lan.length;j++)
            if(lan[j].value===loadCookie[i].split('=')[1]){
                lan[j].checked=true;
            }
        }
        for(let i=0;i<loadCookie.length;i++){
    
            for(let j=0;j<textField.length;j++){
                if(textField[j].name==decodeURIComponent(loadCookie[i].split('=')[0].trim())){
                    textField[j].value=decodeURIComponent(loadCookie[i].split('=')[1]);
                    break;
                }
            }
                
        }
    
        for(let i=0;i<loadCookie.length;i++){
            for(let j=0;j<gender.length;j++){
                if(gender[j].value==decodeURIComponent(loadCookie[i].split('=')[1].trim())){
                    gender[j].checked=true;
                    break;
                }
            }
                
        }
    }
   
 
} 