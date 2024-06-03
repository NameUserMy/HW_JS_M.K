"use strict";
let isPull = false;
let Y = 0;
let move="";
$(document).ready(() => {
    $(`.click`).on(`mousedown`,(e)=>{
       
        isPull=true;
        move=e.currentTarget.parentNode.id;
        
    })
    $(`body`).on(`mouseup`,(e)=>{
       isPull=false;
       move=e.currentTarget.parentNode.id;
    })
    $(`body`).on(`mousemove`,(e)=>{

        if(isPull){
            Y=`${e.clientY}`+"px"
            $(`#${move}`).css(`gridTemplateRows`,`minMax(100px,${Y}) auto minMax(100px,1fr)`);
        }
    })
$(`#clickArrow`).on(`mousedown`,(e)=>{

    console.log($(`#clickArrow`).toggleClass("arrowL"));
    if($(`#contener`).css(`gridTemplateColumns`).split(` `)[0]===`0px`){
        $(`#clickArrow`).addClass("arrow");
        $(`#contener`).css(`gridTemplateColumns`,`0.5fr 0.01fr 1fr`);
    }else{
        $(`#contener`).css(`gridTemplateColumns`,`0fr 0.01fr 1fr`);
        $(`#clickArrow`).removeClass("arrow");
    }
});
});

