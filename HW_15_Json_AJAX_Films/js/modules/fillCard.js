

import localeStorege from "./localeStorege.js";

let storage=new localeStorege.LocaleStorage();

class FillCards{
    #fullinfoKey;
    #shortKey;
    #storageInfo;
    constructor(){
        this.#fullinfoKey=["Title","Released","Genre","Country","Director","Writer","Actors","Awards"];
        this.#shortKey=["Title","Type","Year"];
    }
    CardsFill(response,cards,key){


        
        if(storage.IsData(key)){
          
        this.#storageInfo=storage.GetData(key);
       
       }else{
        storage.SaveData(response,key);
        this.#storageInfo=storage.GetData(key);

       }
        for(let i=0;i<this.#storageInfo[`Search`].length;i++){
            $(cards[i]).find(`div:first-child`).css({ backgroundImage:`url(${this.#storageInfo[`Search`][i]["Poster"]})`});
            let span= $(cards[i]).find(`span`);
            for(let j=0;j<this.#shortKey.length;j++){
                $(span[j]).text( this.#storageInfo[`Search`][i][this.#shortKey[j]]);
            }
          
        }
        this.#storageInfo=storage.GetData(key);
    };
    FullInfo(response,card){
        let span= $(card).find(`span`);
        for(let i=0;i<span.length;i++){
            $(span[i]).text(response[`${this.#fullinfoKey[i]}`]);    
        }
    }
    ShortInfo(card,cardIndex){
      
        let span= $(card).find(`span`);
        for(let j=0;j<this.#shortKey.length;j++){
            $(span[j]).text( this.#storageInfo[`Search`][parseInt(cardIndex)][this.#shortKey[j]]);
        }
    }
}
export default{FillCards};