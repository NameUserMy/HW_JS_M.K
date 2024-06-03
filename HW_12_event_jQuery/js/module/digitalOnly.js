"use strict";
class DigitalField{
    #textField;
    #reg;
    constructor(textField){
    this.#textField=textField;
    this.#reg=/\D/;
    $(this.#textField).on(`keyup`,(e)=>{
        
            $(this.#textField).removeAttr('readonly');

    });
    $(this.#textField).on(`keydown`,(e)=>{

        if(this.#reg.test(e.key)&&e.key!=`Backspace`){
            $(this.#textField).attr('readonly', true);
        }
    });
    }

}
export{DigitalField};

