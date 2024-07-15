let guessNum=Math.floor((Math.random()*10)+1);
console.log("Random Number :",guessNum);
let guess=0;
document.getElementById("submit").onclick=function(){
    let num=document.getElementById("num").value;
    guess++;
    if(num==guessNum){
        document.getElementById("ansLabel").innerHTML="You Guessed Correct It Is "+guessNum+"<br>You Guessed The Number In "+guess+"Attempts";
    }
    else{
        document.getElementById("ansLabel").innerHTML="You Guessed Wrong, Attempt Wasted "+guess;
    }
}