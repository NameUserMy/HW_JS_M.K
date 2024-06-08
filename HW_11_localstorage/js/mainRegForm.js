"use strict";
import valid from "./modules/validationData.js";
import reactions from "./modules/reaction.js";
import storege from "./modules/localeStorege.js";

let Validation=new valid.ValidationReg();
let reaction=new  reactions.Reaction();
let localeStorege=new storege.LocaleStorage();
$(document).ready(() => {
    
    if(localeStorege.IsData("RegistrationData")){

        window.location.href = "detailsUser.html";
       
    }

    $("#confirm").on("mousedown",(event)=>{


        if(!Validation.checkPass($(`#password`).val())){
            reaction.Wrone($(`#password`));
        }else if(!Validation.checkEmail($(`#email`).val())){
            reaction.Wrone( $(`#email`));

        }else if(!Validation.IsConfirm($(`#repeatPass`).val(),$(`#password`).val())){
            reaction.Wrone( $(`#repeatPass`));
           
        }else{
            event.preventDefault();
           localeStorege.SaveUser($(`#formReg`),"RegistrationData");
          
        }
    })
});