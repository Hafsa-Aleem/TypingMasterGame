let wordinput = document.querySelector("#word-input")
let currentword=document.querySelector("#current-word")
let timeDisplay=document.querySelector("#time")
let scoreDisplay=document.querySelector("#score")
let message=document.querySelector("#message")

const words = [
    'hat',
    'cat',
    'mat',
    'coffee',
    'tea',
    'enchanted',
    'castle',
    'alone',
    'heyy',
    'shut up',
    'coaching',
    'success'
];
let score=0
let time=6

window.addEventListener("DOMContentLoaded",init)

function init(){
showWord(words)
wordinput.addEventListener("input",startMatch)
setInterval(countdown,1000)
setInterval(checkstatus,50)
}

function showWord(words)
{
   const randomIndex= Math.floor(Math.random()*words.length)
   currentword.innerHTML=words[randomIndex]
}

function startMatch(){
  if(matchword()){
    showWord(words)
    wordinput.value=''
    message.innerHTML='Correct!!!!'
    score++;
    time=6;
 }
 else{
    message.innerHTML='Incorrect!!!!'
 }
 scoreDisplay.innerHTML=score

}

function matchword(){
    if(currentword.innerHTML==wordinput.value){
        return true
    }
    else{
        return false
    }
}

function countdown(){
if(time>0){
    time--;
    
        }
        timeDisplay.innerHTML=time
}
function checkstatus(){
    if(time===0)
    {
        message.innerHTML='Game Overr!!!'
    }
}