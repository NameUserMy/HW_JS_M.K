"use strict"
import rendr from "./modules/search.js";
import mod from "./modules/animation.js"
const rend = new rendr.RenderhMovie();
const modal=new mod.AnimationCard();
$(document).ready(() => {


  $(`.rowSpan`).find(`span:nth-child(n+4)`).css({ opacity: `0` });
  rend.StartRender();
  $(`#searchButton`).on(`mousedown`, () => {
    rend.RenderType(`${$(`#search`).val()}`);
  });
  $(`#more`).on(`mousedown`, () => {
    rend.RenderPage();
    $(`#more`).css({pointerEvents: `none`});
  });

 $(`.cardFilm`).on(`mousedown`,(e)=>{

  let title=$(e.currentTarget).find(`span:first-child`).text();
  console.log(title)
      modal.ShowFullInfo();
      rend.RenderFullInfo(title);


 });

$(`body`).on(`mousedown`,`#close`,()=>{

console.log("sddd");
  modal.CloseFullInfo();

});


});