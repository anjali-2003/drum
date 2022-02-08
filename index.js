
// dice 1
var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceImage= "images/dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

// dice 2
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

// compare
if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent="💥Player1 Won";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").textContent="Player2 Won💥";
else
document.querySelector("h1").textContent="DRAW!";




// if(randomNumber1==1){
// 	document.querySelector("img .img1").setAttribute("src","images/dice1.png");
// }
