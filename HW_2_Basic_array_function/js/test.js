"use strict";
let question=new Array(10);
let score=0;

question={
    "5+4=9?":5,
    "Вася это имя?,":3,
    "Java script интерпритируемый язык?":22,
    "Yes  NO?":3
};

for (let key in question) {
    if(confirm(key)){
        score+=question[key];
    }
}
alert("Your score : "+score)

