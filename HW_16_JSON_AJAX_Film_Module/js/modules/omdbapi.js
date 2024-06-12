





class MovieService{
    #response;
    #status;
  SearchAsyncTitle(strTitle){
   return this.#Request(`http://www.omdbapi.com/?t=${strTitle}&apikey=83b23202`);
  };

  SearchAsyncType(strTitle,strType){
    return this.#Request(`http://www.omdbapi.com/?s=${strTitle}&type=${strType}&apikey=83b23202`);
  };


  SearchAsyncPage(strTitle,page){
  return this.#Request(`http://www.omdbapi.com/?s=${strTitle}&page=${page}&apikey=83b23202`);
  };


  SearchMoveID(ID){
    return this.#Request(`http://www.omdbapi.com/?i=${ID}&apikey=83b23202`);

  };
  async #Request(URL){
    this.#response = await fetch(URL)
    .then((response) => {
      this.#status=response.status;
      return response.json();
    });
    
    return this.#response ;
  }

GetStatus(){

return this.#status;

}
}  
export default{MovieService};


