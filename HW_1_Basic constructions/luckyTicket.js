let numberTicket;
let firstsum=0;
let secondstsum=0;
numberTicket=prompt("Hello! Enter your ticket number");


function IsLucky(numberTicket){//Считать будет только 6 цыфр
    if(!isNaN(numberTicket)){

        for(index in numberTicket){
        
            if(index<=2){
                firstsum+=parseInt(numberTicket[index]);
                
            }
            if(index>2&&index<=5){
        
                secondstsum+=parseInt(numberTicket[index]);
                
            }
  
        }
    }
    if(firstsum==secondstsum){

        return true;
    }
 return false;

}

if(IsLucky(numberTicket)){

    alert("Your ticket is lucky")
}else{

    alert("Your ticket is not lucky :(")
}



  



