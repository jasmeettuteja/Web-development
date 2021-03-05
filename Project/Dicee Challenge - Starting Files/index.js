var randomNumber=Math.random()*6;
var randomNo=Math.floor(randomNumber)+1;
var randomdice="dice"+randomNo+".png";
var imgrandom="images/"+randomdice;
document.querySelectorAll("img")[0].setAttribute("src",imgrandom);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomNumber2+".png";
var imgrandom2="images/"+randomdice2;
document.querySelectorAll("img")[1].setAttribute("src",imgrandom2);
if(randomNo>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Palyer 1 wins";
}
else if (randomN===randomNumber2){
    document.querySelector("h1").innerHTML="🚩Its a tie";
}
else{
    document.querySelector("h1").innerHTML="🚩Palyer 2 wins";
}

