
class AnimationCard{
    #isFuulInfo;
    constructor(){
        this.#isFuulInfo=false;
    }

    ShowFullInfo(){
          $(`body`).prepend(`<div id="modalW">
            
            <div class="cardModel borderR boxShadow">
             <div id="close">&times;</div> 
            <div  id="poster" class="poster rowSpan borderLR" ></div>
            <div class=" rowSpan dispalayGrid gridTempRow">
                <span class="info">I, Robot</span>
                <span class="info">16 Jul 2004</span>
                <span class="info">Action, Mystery, Sci-Fi</span>
                <span class="info">United States, Germany</span>
                <span class="info">Alex Proyas</span>
                <span class="info">Jeff Vintar, Akiva Goldsman, Isaac Asimov</span>
                <span class="info">Will Smith, Bridget Moynahan, Bruce Greenwood</span>
                <span class="info">Nominated for 1 Oscar. 1 win & 15 nominations total</span>
                
            </div>
        </div></div>`);

       
           
        if( $(`#modalW`)){
            setTimeout(()=>{
                $(`#modalW`).css(`opacity`,`1`);
            }, 200); 
            this.#isFuulInfo=true;
        }
    }

    CloseFullInfo(){
        if(this.#isFuulInfo){
            $(`#modalW`).css(`opacity`,`0`);


            setTimeout(()=>{
                $(`#modalW`).remove();
            }, 1000);
           
            this.#isFuulInfo=false;

        }


    }
}

export default{AnimationCard}