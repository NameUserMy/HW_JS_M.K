"use strict";
let KeyForQuestion=new Array();
let question=new Array()
let answer=new Array();
const maxCount=3;
const maxTime=15;
let count=0;
let testForm=null;
let labelTime=null;
let timePassed=maxTime;
let labelq=null;
let timerId=null;
let userScore=0;
KeyForQuestion=["Для чего можно использовать JavaScript?","Где можно использовать JavaScript?","Какая типизация в JavaScript?",];

question={"Для чего можно использовать JavaScript?":answer=
[{option:"Для прохождения игр",score:0,isAnswer:false},
{option:"Для создания интерактивных веб-страниц.",score:10,isAnswer:false},
{option:"чтобы стать крутым.",score:70,isAnswer:false},
{option:"Для обработки событий на web странице.",score:20,isAnswer:false}],
"Где можно использовать JavaScript?":answer=
[{option:"Back End",score:12,isAnswer:false},
{option:"На авто мойке",score:0,isAnswer:false},
{option:"На детской площадке",score:0,isAnswer:false},
{option:"Front End",score:22,isAnswer:false}
],
"Какая типизация в JavaScript?":answer=
[{option:"Строгая",score:0,isAnswer:false},
{option:"сердитая",score:0,isAnswer:false},
{option:"Динамичиская",score:10,isAnswer:false},
{option:"Любая",score:22,isAnswer:false}
]};
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("start").textContent=`Вопрос № ${count+1} из ${maxCount}`
    AddQuestion(KeyForQuestion[count]);
 });


 //#region Function
 function AddQuestion(KeyForQuestion){

    if(count===0){
        testForm=document.getElementById("test");
        let questionLabel=document.createElement("label");
        questionLabel.setAttribute("id","question");
        testForm.appendChild(questionLabel).textContent=KeyForQuestion;
        for(let i in question[KeyForQuestion]){
            testForm.appendChild(document.createElement("input")).setAttribute("type","checkbox");
            testForm.appendChild(document.createElement("label")).setAttribute("class","answer");
        }
         labelq=document.getElementsByClassName("answer");
    
        for(let i=0;i<labelq.length;i++){
            labelq[i].textContent=question[KeyForQuestion][i].option;
        }
        testForm.appendChild(document.createElement("label")).setAttribute("id","time");
        let button=document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","Подтвердить");
        button.setAttribute("class","Title");
        button.addEventListener("mousedown",Сonfirm);
        testForm.appendChild(button);
        labelTime= document.getElementById("time").textContent=`time: ${timePassed}`;
    }else{
        document.getElementById("question").textContent=KeyForQuestion;
        for(let i=0;i<labelq.length;i++){
            labelq[i].textContent=question[KeyForQuestion][i].option;
        }
    }
  }

timerId=setInterval(TimePasset,1000)

function ChancheQuestion(){
    count++;
    if(count<maxCount){
        AddQuestion(KeyForQuestion[count]);
        document.getElementById("start").textContent=`Вопрос № ${count+1} из ${maxCount}`
        timePassed=maxTime;
        
    }
}

 function TimePasset(){
    if(timePassed>=0){
        document.getElementById("time").textContent=`time: ${timePassed}`;
        timePassed--;
    }else{
        CheckAnswer(count);
        ChancheQuestion();
        
    }
    if(count>2){

        clearInterval(timerId);
        Score();
    }
 }

 function Сonfirm(){
    if(count<maxCount){
        CheckAnswer(count);
        ChancheQuestion();
       
    }
    
 }

function CheckAnswer(count){
    let answerCheckbox=document.getElementsByTagName("input");
    for (let i=0;i<answerCheckbox.length-1;i++){
        question[KeyForQuestion[count]][i].isAnswer=answerCheckbox[i].checked
        answerCheckbox[i].checked=false;
    }
}

function Score(){
for(let key in question){
    question[key].forEach(element => {
        if(element.isAnswer){
            userScore+=element.score;
        }
});
}
document.getElementById("info").textContent=`Тест окончен, вы набрали ${userScore} балов`;
}
 //#endregion