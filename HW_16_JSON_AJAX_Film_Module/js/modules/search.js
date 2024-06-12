
import service from "./omdbapi.js";
import ls from "./localeStorege.js";
import fill from "./fillCard.js";

const moveiService = new service.MovieService();
const localeStorege = new ls.LocaleStorage();
const fillCard = new fill.FillCards();
class RenderhMovie{

    #page;
constructor(){

this.#page=1;

}
RenderType(Key){

    try {
        if(!localeStorege.IsData(Key)){
          $(`#load`).css(`display`,`block`);
          moveiService.SearchAsyncType(`${Key}`,$(`#type`).val()).then((data) => {
          localeStorege.SaveData(data,Key);
          if(localeStorege.IsData(Key)){
            fillCard.CardsFill(Key);
          }
        });
       
    
      }else{
        $(`#load`).css(`display`,`block`);
        fillCard.CardsFill(Key);
      }
        
      } catch (error) {
        
        $(`#load`).css(`display`,`none`);
        
      }

}

StartRender(){
this.RenderType("Lord of the ring");
}

RenderPage(){

    this.#page++;
    try {
      $(`#load`).css(`display`, `block`);
      moveiService.SearchAsyncPage(`${$(`#search`).val()}`, `${this.#page}`).then((data) => {
        localeStorege.SaveData(data, `${$(`#search`).val()}${this.#page}`);
        fillCard.CardsFill(`${$(`#search`).val()}${this.#page}`);

        console.log(data);
      }).then((error) => {

        console.log(error)

      })
    } catch (error) {
      alert(error);
      $(`#load`).css(`display`, `none`);

    } finally {

      localeStorege.DeleteLocallStorege(`${$(`#search`).val()}${this.#page}`);
    }



}

RenderFullInfo(request){

  try {
    
    $(`#load`).css(`zIndex`,`11`);
      $(`#load`).css(`display`,`block`);

      moveiService.SearchAsyncTitle(request).then((data) => {
      fillCard.FullInfo(data);
      
    });
   

  }catch (error) {
    
    $(`#load`).css(`display`,`none`);
    $(`#load`).css(`zIndex`,`2`);
    
  }



}


}

export default{RenderhMovie};