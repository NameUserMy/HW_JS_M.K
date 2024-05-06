"use strict";
let sizeR=6;
let sizeC=8;

let uDay=0;
let uMonth=0;
let uYear=0;

let startDay;
let itDay=1;
let viewDay=0;
let spanDay=0;
let monthS=0;



//#region ClassName css
let dayWTop="dayW";
let dayHTop="dayBgCRgb"
let dayWB="dayWB";
let dayHTcRgb="dayHTcRgb";
let season="winter";
let chColorDay="chColorDay"


//#endregion

let userDate= prompt("Enter date  (DD.MM.YYYY)");



userDate=userDate.split('.')

uDay=userDate[0];
uMonth=userDate[1];
uYear=userDate[2];


//#region Function 
function seasonF(){//Function for Season

    if(monthS>1&&monthS<5){
        season="spring";
        return;
    }else if(monthS>4&&monthS<8){
      season="summer";
    }else if(monthS>7&&monthS<11){
        
      season="autumn";
    }else{

        season;
    }


}
function drawCalendar(sizeR,sizeC){ //calendar
    document.write('<div>');
    document.write(`<table id="3" class="field ${season}">`);
    
    if(startDay==0){
        startDay=7;
    }

    spanDay=startDay-1;
    for (let i=0;i<sizeR;i++){
        document.write('<tr>');
            
            for(let j=1;j<sizeC;j++){
                let day=new Date(2024,4,j-2).toLocaleString("ua",{weekday:"short"});

                    
                
                if(i==1&&startDay>j){
                   viewDay=new Date(uYear,uMonth-1,-spanDay+1).toLocaleString("Ua", {day :"numeric"});
                   spanDay--;

                }
                    if(i==1&&j==startDay){

                       viewDay= new Date(uYear,uMonth,1).toLocaleString("Ua", {day :"numeric"});
                    }
                    if(i==1&&j>startDay){

                        itDay++;
                        viewDay= new Date(uYear,uMonth,itDay).toLocaleString("Ua", {day :"numeric"});
                    }else if(i>1){

                        itDay++;
                        viewDay= new Date(uYear,uMonth,itDay).toLocaleString("Ua", {day :"numeric"});

                    }


                if(j>5){
                    
                   
                   if(itDay==parseInt(uDay)){
                    
                    (i==0 ? document.write(`<td class="${dayWTop} ${dayHTop}"><h1>${day}</h1></td>`) 
                    : document.write(`<td class="${dayWB}  ${chColorDay}"><h1>${viewDay}</h1></td>`));

                   }else{
                    (i==0 ? document.write(`<td class="${dayWTop} ${dayHTop}"><h1>${day}</h1></td>`) 
                    : document.write(`<td class="${dayWB} ${dayHTcRgb} "><h1>${viewDay}</h1></td>`));

                   }
                    
                }else{
                    if(itDay==parseInt(uDay)){

                        
                        (i==0 ? document.write(`<td class="${dayWTop} "><h1>${day}</h1></td>`) 
                        : document.write(`<td class="${dayWB} ${chColorDay}"><h1>${viewDay}</h1></td>`));
                    }else{

                        (i==0 ? document.write(`<td class="${dayWTop} "><h1>${day}</h1></td>`) 
                        : document.write(`<td class="${dayWB}"><h1>${viewDay}</h1></td>`));

                    }
                };

              

            }
        
        document.write('</tr>');
    }
    document.write('</table>');
    document.write('</div>');
}

//#endregion


alert(`Day ${uDay} Month ${uMonth} Year${uYear}`);
startDay=new Date(`${uYear},${uMonth},${1}`).getDay();

document.write(`<h1>${new Date(`${uYear},${uMonth},${1}`).toLocaleString("ua",{month:"long"})}</h1>`);

monthS= new Date(`${uYear},${uMonth},${1}`).getMonth();

seasonF();
drawCalendar(sizeR,sizeC);

