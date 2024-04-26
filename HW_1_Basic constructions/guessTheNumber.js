const maxNumber=100;
let userNumber;
let isnumber; 

alert("Guess the number 0-100")

function guess(){

    userNumber=maxNumber/2;
    isnumber=confirm(`Your number ${userNumber} ?`)
    while(!isnumber)
    {
        if(!confirm(`Your number More than ${userNumber}`)){
            userNumber=parseInt((userNumber)/2);
            isnumber= confirm(`Your  number ${userNumber} ?`);
        }else{
            userNumber=(userNumber+1);
            isnumber= confirm(`Your  number ${userNumber} ?`);
        }
    };
}

guess();