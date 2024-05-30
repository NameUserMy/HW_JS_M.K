
class FormValidation{
    #regLogPass;
    #regName;
    #regEmail;
    #formForValidation;
    #toolTip;
    #textFields;
    #gender;
    #language
   
    constructor(form){
        this.formForValidation=form;
        this.#regLogPass=/^([a-z,A-Z]{3,}\d{2,}\w{15,15})+$/;
        this.#regName=/^([a-z,A-Z]{1,20})+$/;
        this.#regEmail=/^([a-z,A-Z]{1,20}@{1}[a-z]{3,10}[\.]{1}[a-z]{3})+$/
        this.#toolTip=$(this.formForValidation).find('span[class=toolTip]');
        this.textField=$(this.formForValidation).find('input[class=txtField]');
        this.#gender=$(this.formForValidation).find('input[name=gender]');
        this.#language=$(this.formForValidation).find('input[name=language]');
    };

    #CheckField(){
        if($(this.textField[1]).val()!==$( this.textField[2]).val()){
            $(this.#toolTip[2]).css(`display`,`block`);
            return false;
        }
        
        for(let i=0;i<this.textField.length;i++){
        
            if(!this.#regLogPass.test($(this.textField[i]).val())&&i<3){
        
                $(this.#toolTip[i]).css(`display`,`block`);
                return false;
        
            }else if(i===this.textField.length-2&&! this.#regName.test($( this.textField[i]).val())){
                $(this.#toolTip[i]).css(`display`,`block`);
                return false;
        
            }else if(i===this.textField.length-1&&! this.#regEmail.test($( this.textField[i]).val())){

                $(this.#toolTip[i]).css(`display`,`block`);
                return false;
            }else{
        
                $(this.#toolTip[i]).css(`display`,`none`);
                
            }
        };
        
        return true; 
    };
    #Gender(){
        for(let i=0;i<this.#gender.length;i++){
            if($(this.#gender[i]).is(':checked')){
                $(this.#toolTip[this.#toolTip.length-1]).css(`display`,`none`);
                return true;
            }
        }
        $(this.#toolTip[this.#toolTip.length-1]).css(`display`,`block`);
        return false;


    }
    #Language(){
        
        let temp="";
        for(let i=0;i<this.#language.length;i++){

          
            if($(this.#language[i]).is(':checked')){
               temp+=$(this.#language[i]).val()+", "; 
            }
        }if(temp){
          
           $(this.#toolTip[this.#toolTip.length-1]).css(`display`,`none`);
            return true;
        }
        $(this.#toolTip[this.#toolTip.length-1]).css(`display`,`block`);
        return false;
    }
    Test(){
        //JSON.stringify( $(this.formForValidation).serializeArray() );
        let data = $(this.formForValidation).serialize();
       return data;
    }
    IscheckedForm(){

        if(this.#CheckField()&&this.#Gender()&&this.#Language()){

         return true;   
        }
        return false;

    };


}
export{FormValidation};
