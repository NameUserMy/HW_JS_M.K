"use strict";
import check from "./modules/jsonFormater.js"
let formatert=new check.Formaterjson(); 
$(document).ready(() => {
     
    
   $(`#formater`).on(`mousedown`,()=>{
      if(formatert.CheckSintax($(`#inputJson`).val())){
           $(`#formattedJson`).val(formatert.FormatingJson($(`#inputJson`).val()));
      }else{
         $(`#userInfo`).text("Wrong format");
         $(`#userInfo`).css(`color`,`red`);
         setTimeout(() => {$(`#userInfo`).text("Entert json data");$(`#userInfo`).css(`color`,`black`);}, 1000);
      }
   })
     

     

});