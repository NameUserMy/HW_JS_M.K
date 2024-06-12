import localeStorege from "./localeStorege.js";
let storage=new localeStorege.LocaleStorage();

class FillCards{
    #fullinfoKey;
    #shortKey;
    #storageInfo;
    #IsFill;
    constructor(){
        this.#fullinfoKey=["Title","Released","Genre","Country","Director","Writer","Actors","Awards"];
        this.#shortKey=["Title","Type","Year"];
        this.#IsFill=0;
    }
    CardsFill(key){
        this.#storageInfo=storage.GetData(key);
        let cards=$(`.cardFilm`);
       try {
        for(let i=0;i<this.#storageInfo[`Search`].length;i++){
            $(cards[i]).find(`div:first-child`).css({ backgroundImage:`url(${this.#storageInfo[`Search`][i]["Poster"]})`});
            let span= $(cards[i]).find(`span`);
            for(let j=0;j<this.#shortKey.length;j++){
                $(span[j]).text( this.#storageInfo[`Search`][i][this.#shortKey[j]]);
            }
            $(cards[i]).css(`opacity`,`1`);
            this.#IsFill=i;
        }


        console.log(this.#IsFill);
        if(this.#IsFill<9){
            for(let i=this.#IsFill;i<cards.length;i++){

                $(cards[i]).css(`opacity`,`0`);
    
    
            }
        }

       } catch (error) {
        $(`#load`).css(`display`,`none`);
       }
       
        $(`#load`).css(`display`,`none`);
        $(`#more`).css({pointerEvents: `auto`});
        storage.DeleteLocallStorege();
        
    };
    FullInfo(response){


        let card=$(`#modalW`);
        let span= $(card).find(`span`);
        console.log(response);
        $(`#poster`).css({ backgroundImage:`url(${response["Poster"]})`});
        for(let i=0;i<span.length;i++){
            for(let i=0;i<span.length;i++){
                $(span[i]).text(response[`${this.#fullinfoKey[i]}`]);    
            }
        }

        $(`#load`).css(`zIndex`,`2`);
        $(`#load`).css(`display`,`none`);


    }
    
}
export default{FillCards};