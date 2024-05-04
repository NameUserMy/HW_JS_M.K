"use strict";
const forbiddenSymbols="+_)(*&^%$#@!~_-{}[]|\:;1234567890*/?<>";

function chechSimbol(field){

    for(let i=0;i<field.length;i++ ){

        for(let j=0;j<forbiddenSymbols.length;j++){
           
            if(field[i]===forbiddenSymbols[j]){
    
                return false;
                
            }
    
        }
    }
return true;
}


function submitForm(nameform,firstNameform,lastNameform){
   
    if(chechSimbol(nameform.value)&&chechSimbol(firstNameform.value)&&chechSimbol(lastNameform.value)){


        alert("Форма отправлена")
    }else{
        alert("Введены не допустимые символы")
    }
}
