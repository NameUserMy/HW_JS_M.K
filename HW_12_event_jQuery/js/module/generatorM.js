"use strict";
class GeneratorString{
    #strLength;
    #includeLowCase;
    #includeUpCase;
    #includeDigit;
    #strGenerate;
    constructor(){
        this.#strLength=0;
        this.#includeLowCase=false;
        this.#includeUpCase=false;
        this.#includeDigit=false;
        this.#strGenerate="";
    }
    #UpperCase(){
        if( this.#includeUpCase){
            return String.fromCharCode(Math.floor(Math.random() * (91-65)+65));
        }
        return "";
    }
    #LowerCase(){

        if( this.#includeLowCase){
            return String.fromCharCode(Math.floor(Math.random() * (123-97)+97));
        }
      return "";

    }
    #Numeric(){

        if(this.#includeDigit){
            return  String.fromCharCode(Math.floor(Math.random() * (58-48)+48));
        }
      return "";
    }
    GetStrRandom(strlength,isDigit,isUpCase,isLowCase){
        this.#strLength=strlength;
        this.#includeLowCase=isLowCase;
        this.#includeUpCase=isUpCase;
        this.#includeDigit=isDigit;
        this.#strGenerate="";
        if(this.#includeLowCase||this.#includeUpCase||this.#includeDigit&&this.#strLength>0){
            
            while(this.#strGenerate.length<this.#strLength){

                switch(Math.floor(Math.random() * (3-0)+0)){

                    case 0:
                        this.#strGenerate+=this.#Numeric();
                        break;
                    case 1:
                        this.#strGenerate+=this.#UpperCase();
                        break;
                    case 2:
                        this.#strGenerate+=this.#LowerCase();
                        break;
                }
            }
            return this.#strGenerate;
        
        }else{
            
            return this.#strGenerate="";
        }
       

    }
}
export{GeneratorString};
