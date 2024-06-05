"use strict";
const maxCount=3;
const maxTime=15;
let count=0;
let testForm=null;
let labelTime=null;
let timePassed=maxTime;
let labelq=null;
let timerId=null;
let userScore=0;
let xmlhttp=new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("start").textContent=`Вопрос № ${count+1} из ${maxCount}`
    xmlhttp.open("GET","questions1.json");
    xmlhttp.responseType=`json`;
    xmlhttp.setRequestHeader(`Accept`,`application/json`);
    xmlhttp.send();
    xmlhttp.onload=()=>{if(xmlhttp.status==200){
        AddQuestion(xmlhttp.response);
        
    }else{
        console.log(xmlhttp.status);

    }};
});




 //#region Function
 function AddQuestion(testResp){
   
    if(count===0){
        testForm=document.getElementById("test");
        let questionLabel=document.createElement("label");
        questionLabel.setAttribute("id","question");
        testForm.appendChild(questionLabel).textContent=testResp["question"];
        for(let i in testResp["Answer"]){
            testForm.appendChild(document.createElement("input")).setAttribute("type","checkbox");
            testForm.appendChild(document.createElement("label")).setAttribute("class","answer");
        }
         labelq=document.getElementsByClassName("answer");
    
        for(let i=0;i<labelq.length;i++){
            labelq[i].textContent=testResp["Answer"][i].option;
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
        
        document.getElementById("question").textContent=testResp["question"];
        for(let i=0;i<labelq.length;i++){
            labelq[i].textContent=testResp["Answer"][i].option;
        }
    }
  }

timerId=setInterval(TimePasset,1000)

function ChancheQuestion(){
    count++;
    if(count<maxCount){
        xmlhttp.open("GET",`questions${count+1}.json`);
        xmlhttp.responseType=`json`;
        xmlhttp.setRequestHeader(`Accept`,`application/json`);
        xmlhttp.send();
        xmlhttp.onload=()=>{if(xmlhttp.status==200){
            
                AddQuestion(xmlhttp.response);
                document.getElementById("start").textContent=`Вопрос № ${count+1} из ${maxCount}`
                timePassed=maxTime;
        }else{
            console.log(xmlhttp.status);

        }};
       
    }
}

 function TimePasset(){
    if(timePassed>=0){
        document.getElementById("time").textContent=`time: ${timePassed}`;
        timePassed--;
    }else{
        CheckAnswer();
        ChancheQuestion();
        
    }
    if(count>2){

        clearInterval(timerId);
        document.getElementById("info").textContent=`Тест окончен, вы набрали ${userScore} балов`;
    }
 }

 function Сonfirm(){
    if(count<maxCount){
        CheckAnswer(count);
        ChancheQuestion();
        
       
    }
    
 }

function CheckAnswer(){
    let answerCheckbox=document.getElementsByTagName("input");
        for (let i=0;i<answerCheckbox.length-1;i++){
            if(answerCheckbox[i].checked){
                userScore+=xmlhttp.response["Answer"][i].score;
            }
            answerCheckbox[i].checked=false;
        }
}
//#endregion