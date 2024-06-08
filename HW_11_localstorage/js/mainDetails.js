"use strict";
import valid from "./modules/detailsValidation.js";
import storege from "./modules/localeStorege.js";

let validation=new valid.ValidationDetails();
let localeStorege=new storege.LocaleStorage();
$(document).ready(() => {



    if(!localeStorege.IsData("DetailsData")&&!localeStorege.IsData("RegistrationData")){
        window.location.href = "registration.html";
    }
    $(`#exit`).on(`mousedown`, ()=>{

      
        localeStorege.DeleteLocallStorege();
        window.location.href = "registration.html";


    })

    if(localeStorege.IsData("DetailsData")){
       for(let i=0;i<6;i++){
        $(`#userDetailsForm`)[0][i].value=localeStorege.GetData("DetailsData")[i].value;
       }
    }

    $(`#greetings`).text(`Hello! ${localeStorege.GetData("RegistrationData")[0].value}`);

    $(`#save`).on(`mousedown`,()=>{


    if(validation.IsCheck($(`input`))){
       
        localeStorege.SaveUser($(`#userDetailsForm`),"DetailsData");

    }
    }
)});