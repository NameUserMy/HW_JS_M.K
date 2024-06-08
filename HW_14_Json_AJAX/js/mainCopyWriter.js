"use strict";
import queryCopywriter from "./modules/CopyWriter.js"
import addInfo from "./modules/appendInfo.js"
let appendInfo=new addInfo.AddInfo();
let queryCW=new queryCopywriter.QueryJson();
$(document).ready(() => {
    

$(`#moreInfo`).css(`pointerEvents`,"none");

    appendInfo.AddName($(`#foruserName`),queryCW.Query(`https://jsonplaceholder.typicode.com/users`));
    
    $(`#foruserName`).on(`click`,(event)=>{
        event.stopPropagation();
        if(event.target!=event.currentTarget){
            appendInfo.AddMoreInfo($(`#moreInfo`),queryCW.Query(`https://jsonplaceholder.typicode.com/users/${$(event.target).index()}`));
            $(`#moreInfo`).css(`opacity`,`1`);
            
            

        }

       if($(`#postInfo`).css(`opacity`)===`1`){
        
        $(`#postInfo`).css(`opacity`,`0`);
       }
        
    })
    $('#moreInfo').on('mousedown', '#posts',()=> {
        console.log(appendInfo.GetId());
        appendInfo.GetPosts($(`#postInfo`),queryCW.Query(`https://jsonplaceholder.typicode.com/posts?userId=${appendInfo.GetId()}`));
      });
    
});