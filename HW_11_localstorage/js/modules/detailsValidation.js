import reactions from "./reaction.js";
let reaction=new  reactions.Reaction();
class ValidationDetails{
#nameFLreg;
#phonereg;
#DOBreg;
#skypereg;
constructor(){
this.#nameFLreg=/^[A-z]{6,20}$/;
this.#phonereg=/^\+([3][8][0]){1}( )\(\d\d\)\-\d\d\d\-\d\d\-\d\d$/;
this.#DOBreg=/^(0?[1-9]|[1-2][\d]|3[0-1])(\.)(0?[1-9]|10|12)(\.)(19[0-9][0-9]|20[0-2][0-4]|20[1][0-9])$/
this.#skypereg=/^\w*?(\-)*\w?\w*?(\.)\w*?$/
}


CheckSkype(skype){

 return  this.#skypereg.test(skype)

}
CheckDOB(DOB){
    return this.#DOBreg.test(DOB);
}
CheckPhone(phone){
    return this.#phonereg.test(phone);
}
CheckFLN(name){
return this.#nameFLreg.test(name);
}

IsCheck(arrayField){
let isCheck=false;

    if(!this.CheckFLN($(arrayField[0]).val())){
        reaction.Wrone(arrayField[0]);
    }else if(!this.CheckFLN($(arrayField[1]).val())){

        reaction.Wrone(arrayField[1]);
    }else if(!this.CheckDOB($(arrayField[2]).val())){
        reaction.Wrone(arrayField[2]);
    }else{

        isCheck=true;
    }
    
    if($(arrayField[3]).val()){

        if(!this.CheckPhone($(arrayField[3]).val())){
            reaction.Wrone(arrayField[3]);
            isCheck=false;

        }else{isCheck=true}
    } 
     if($(arrayField[4]).val()){
        
        if(!this.CheckSkype($(arrayField[4]).val())){
            reaction.Wrone(arrayField[4]);
            isCheck=false;

        }else{isCheck=true}
    
    
    }  
    return isCheck;
}

}


export default{ValidationDetails}