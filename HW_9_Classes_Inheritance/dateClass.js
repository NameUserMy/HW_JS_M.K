"use strict";

let menu=new Array(5);
let myDate=null;
$(document).ready(() => {
   myDate=new ExtandedDate();

   $( "#inputText" ).on( "blur", function() {
    myDate.SetIncommingDate($('#inputText').val());
    menu[0]=myDate.PrintDate();
    menu[1]=myDate.IsFutureDate();
    menu[2]=myDate.IsLeapYear();
    menu[3]=myDate.NextDate();
  } );
  
 $(`#menu`).on('click',(e)=>{
     $(`#info`).val(menu[$(e.target).index()]);
 });
});

class ExtandedDate extends Date{
  #dateNow;
  #incommingDate;
  #year;
  #nextDate;
  constructor(date){
    (date?super(date):super())
    this.#incommingDate=this;
  }
  #SetDateNow(){
    this.#dateNow=new ExtandedDate();
  }
  SetIncommingDate(date){
    this.#incommingDate=new ExtandedDate(date)
  }
  PrintDate(){
      return this.#incommingDate.toLocaleString("ua",{month:"long",day: 'numeric',year: 'numeric',});
  }

  IsFutureDate(){
    this.#SetDateNow();
    if(this.#incommingDate.toLocaleString("ua",{month:"long",day: 'numeric',year: 'numeric',})>=
    this.#dateNow.toLocaleString("ua",{month:"long",day: 'numeric',year: 'numeric',})){
        return `Yes is future`;
    }
    else{
      return `No`;
    }
  }

  IsLeapYear(){

  this.#year=parseInt(this.PrintDate().match(/\d{4}/)[0]);
    if(this.#year%4===0){
      if(this.#year%100===0){

        if(this.#year%400===0){

          return `Yes, Leap yer.`;
        }else{
          return `No`;
        }

      }else{

        return `Yes, Leap yer.`;
      }

    }else{
      return `No`;
    }
  }

  NextDate(){
    this.#nextDate=new ExtandedDate(this.#incommingDate.setDate(this.#incommingDate.getDate()+1))
    .toLocaleString("ua",{month:"long",day: 'numeric',year: 'numeric',});
    return this.#nextDate;
  }

}


