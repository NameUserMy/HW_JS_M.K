"use strict";
let buttonRegistration=null;
let buttonReset=null;
let toolTip=null;
let textField=null;
let formReg=null;
let tableInfo=null;
let spec="";
let regLogPass=/^([a-z,A-Z]{3,}\d{2,}\w{15,15})+$/;
let regName=/^([a-z,A-Z]{1,20})+$/;
document.addEventListener("DOMContentLoaded", (event) => {
   buttonRegistration=document.getElementById("registration");
   buttonRegistration.addEventListener("mousedown",Registration);
   toolTip=document.getElementsByClassName("toolTip");
   textField=document.getElementsByClassName("txtField");
   formReg=document.getElementById("formReg");
   tableInfo=document.getElementsByClassName("userValue");
});

function Registration(e){
 if(CheckField()&&CheckPost()&&CheckSex()&&CheckPost()&&CheckSpecialization())
  document.getElementById("info").style.display="block";
}

//#region Function for form
 function CheckField(){
    if(formReg.pass.value!==formReg.repeatPass.value){
        toolTip[2].style.display="block"
        return false;
    }
 for(let i=0;i<textField.length;i++){
   
    if(!regLogPass.test(textField[i].value)&&i!=textField.length-1){

        toolTip[i].style.display="block"
     return false;

    }else if(i===textField.length-1&&!regName.test(textField[i].value)){
        toolTip[i].style.display="block"
        return false;

    }else{

        toolTip[i].style.display="none"
    }
   
}
tableInfo[0].innerHTML=formReg.loggin.value;
tableInfo[1].innerHTML=formReg.FullName.value;
return true;
}

function CheckSex(){
   
let sex=document.getElementsByName("sex");
for(let i=0;i<sex.length;i++){
    if(sex[i].checked==true ){
        toolTip[toolTip.length-1].style.display="none";
        tableInfo[2].innerHTML=sex[i].value;
        return true;
    }
}
toolTip[toolTip.length-1].style.display="block"
return false;
}

function CheckSpecialization(){
    let specialization=document.getElementsByName("specialization");
    let temp="";
    for(let i=0;i<specialization.length;i++){
        if(specialization[i].checked){
           temp+=specialization[i].value+", "; 
        }
    }if(temp){
        tableInfo[3].innerHTML=temp.replace(/.{0,2}$/,".");
        toolTip[toolTip.length-1].style.display="none";
        return true;
    }
    toolTip[toolTip.length-1].style.display="block";
    return false;
}

function CheckPost(){
    let post=document.getElementsByName("post");
    for(let i=0;i<post.length;i++){
        if(post[i].value==='default'){
            toolTip[toolTip.length-1].style.display="block";
            return false;
        }else{

            tableInfo[4].innerHTML=post[i].value;
            
        }
    }
    toolTip[toolTip.length-1].style.display="none";
    return true;
}
//#endregion