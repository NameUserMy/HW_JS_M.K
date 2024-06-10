import card from "./fillCard.js";
const fillCard=new card.FillCards();

class QueryJson{

    #Info;
    #resultInfo;
    async Request(URL){
         this.#Info =  await  fetch(URL)
        .then((response) => {
          return response.json();
        })
        return  this.#Info;
    }

  

    RequestjQuery(URL,arrayCard,key,result){
      $.ajax({
        url: URL,        
        method: 'get',            
        dataType: 'json',
        success:(response)=>{
          this.#resultInfo=response[`totalResults`]??response[`Error`];
          $(result).text(`Result ${this.#resultInfo}`);
          fillCard.CardsFill(response,arrayCard,key);
         
          
        },

      
      });

    }
    RequestjQueryTitle(URL,card){

      $.ajax({
              url: URL,        
              method: 'get',            
              dataType: 'json',
              success:(response)=>{   
                 fillCard.FullInfo(response,card);
              }
            });
    }

    RequestLocalS(card,index){

      fillCard.ShortInfo(card,index);

    }

    Page(URL,arrayCard,result,key){

      $.ajax({
        url: URL,        
        method: 'get',            
        dataType: 'json',
        success:(response)=>{
          this.#resultInfo=response[`totalResults`]??response[`Error`];
          $(result).text(`Result ${this.#resultInfo}`);
          console.log(` dd ${key}`)
          fillCard.CardsFill(response,arrayCard,key);

        }
      });


    }


   

   
}

 export default{QueryJson}