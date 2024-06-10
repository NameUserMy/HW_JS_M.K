
class AnimationCard{
    #isFuulInfo;
    constructor(){
        this.#isFuulInfo=false;
    }

    FullInfo(card){
        if(this.#isFuulInfo){
            card.animate({width:`90%`,height:`90%`}, 1000);
            this.#isFuulInfo=false;
            card.find(`span:nth-child(n+4)`).animate({opacity:`0`},1000);

        }else{
            card.animate({width:`100%`,height:`100%`}, 1000);
            this.#isFuulInfo=true;
            card.find(`span:nth-child(n+4)`).animate({opacity:`1`},1000);
        }
        
    }
    GetIsFull(){

        return this.#isFuulInfo;
    }
}

export default{AnimationCard}