
class AddInfo{

#idForPost;
AddName(HtmlElem,jsonInfo){
    jsonInfo.then((value)=>{
        value.forEach(value => {
            HtmlElem.append(`<span class="name">${value.name}<span/>`);
        });
       
    });
};

AddMoreInfo(HtmlElem,jsonInfo){

    jsonInfo.then((value)=>{


        if(HtmlElem.find(`span`).hasClass(`moreInfo`)){
        let updateMoreinfo=HtmlElem.find(`span:nth-child(even)`);

        let i=0;
            for (const key in value) {
              
                if(key!==`id`&&key!==`company`){
                    if(key===`address`){
                        $(updateMoreinfo[i]).text(`${value[key]["city"]}, ${value[key]["street"]}`);
                        
                        i++;
                    }else{
                    
                        $(updateMoreinfo[i]).text(`${value[key]}`);
                        i++;
                    }
                }
               
            }

        }else{

            for (const key in value) {

                if(key!==`id`&&key!==`company`){
                    if(key===`address`){
                        HtmlElem.append(`<span class="moreInfo">${key} : <span/> `);
                        HtmlElem.append(`<span class="moreInfo">${value[key]["city"]}, ${value[key]["street"]}<span/> `);
                    }else{
                        HtmlElem.append(`<span class="moreInfo">${key} : <span/> `);
                        HtmlElem.append(`<span class="moreInfo">${value[key]}<span/> `);
                    }
                }
            }
            HtmlElem.append(`<input type="button" value="Show post" id="posts">`);
        }
        this.#idForPost=value[`id`];
        this.#idForPost;
    });

};

GetId(){
    return this.#idForPost;
}

GetPosts( HtmlElem,jsonInfo){
    
    jsonInfo.then((value)=>{

        if(HtmlElem.find(`span`).hasClass(`post`)){

            HtmlElem.find(`span`).remove()
           
        }
        value.forEach(value => {
            HtmlElem.append(`<span class="moreInfo title" >${value.title}</br></br> <span class="post">${value.body}<span/>  <span/> `);
          
        });

        HtmlElem.css(`opacity`,`1`);

    });
}



};



export default{AddInfo}