class QueryJson{

    #userInfo;
    async Query(URL){
         this.#userInfo =  await  fetch(URL)
        .then((response) => {
          return response.json();
        })
        return  this.#userInfo;
    }
   

}

 export default{QueryJson}