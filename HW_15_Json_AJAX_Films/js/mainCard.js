import anim from "./modules/animation.js"
import search from "./modules/search.js"
const searchFilms=new search.QueryJson();
const cardAnim=new anim.AnimationCard();
let page=1;
$(document).ready(() => {
  searchFilms.RequestjQuery(`http://www.omdbapi.com/?s=Game&apikey=83b23202`,$(`.cardFilm`),"start");
  $(`.rowSpan`).find(`span:nth-child(n+4)`).css({opacity:`0`});
  let result=$(`#result`);
    
  
 
    $(`#searchButton`).on(`mousedown`,()=>{
      
      searchFilms.RequestjQuery(`http://www.omdbapi.com/?s=${$(`#search`)
        .val()}&apikey=83b23202`,$(`.cardFilm`),`${$(`#search`).val()}`,result);
    });
    
   
    $(`.cardFilm`).on(`mousedown`,(e)=>{
      cardAnim.FullInfo($(e.currentTarget));
        if(cardAnim.GetIsFull()){
          let title=$(e.currentTarget).find(`span:first-child`).text();
          searchFilms.RequestjQueryTitle(`http://www.omdbapi.com/?t=${title}&apikey=83b23202`,e.currentTarget);
        }else{searchFilms.RequestLocalS(e.currentTarget,$(e.currentTarget).index()-4); }
       
    });

    $(`.cardFilm`).on(`mouseleave`,(e)=>{
      if(cardAnim.GetIsFull()){
        cardAnim.FullInfo($(e.currentTarget))
        searchFilms.RequestLocalS(e.currentTarget,$(e.currentTarget).index()-4);
      }
    });

    $(`#pagination`).on(`mousedown`,(e)=>{
      e.stopPropagation();
     if(e.target.id===`right`){
      page++;
      searchFilms.Page(`http://www.omdbapi.com/?s=${$(`#search`).val()}&page=${page}&apikey=83b23202`,$(`.cardFilm`),result,`${$(`#search`).val()}${page}`);
     }else{
      page--;
      searchFilms.Page(`http://www.omdbapi.com/?s=${$(`#search`).val()}&page=${page}&apikey=83b23202`,$(`.cardFilm`),result,`${$(`#search`).val()}${page}`);

     }
   

    })

 });