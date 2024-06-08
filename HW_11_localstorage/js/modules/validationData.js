"use strict"
class ValidationReg{

    #regPass;
    #regEmail;
   
    constructor(){
        this.#regPass=/^\w*[A-Z][a-z][0-9]\w{3,17}$/;
        this.#regEmail=/^([a-z,A-Z]{1,20}@{1}[a-z]{3,10}[\.]{1}[a-z]{3})+$/
       

    }
    checkPass(pass){
        return this.#regPass.test(pass);
    }
    checkEmail(email){
       return this.#regEmail.test(email); 
    }
    IsConfirm(confirmPass,pass){
       return (confirmPass===pass?true:false);
    }
}


export default{ValidationReg}