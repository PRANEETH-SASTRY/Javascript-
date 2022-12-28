var Player1=prompt("Enter player1 name");
var Player2=prompt("Enter player2 name");

document.querySelector(".player1").innerHTML=Player1;
document.querySelector(".player2").innerHTML=Player2;

var randomNumber1=Math.floor(5*Math.random())+1;
var randomDice1="dice"+randomNumber1+".png"
var randomDiceSource1="images/"+randomDice1;
var image1=document.querySelector(".img1");
image1.setAttribute("src",randomDiceSource1);



var randomNumber2=Math.floor(5*Math.random())+1;
var randomDice2="dice"+randomNumber2+".png"
var randomDiceSource2="images/"+randomDice2;
var image2=document.querySelector(".img2");
image2.setAttribute("src",randomDiceSource2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=(Player1+" wins!😎")
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML=("Tie ✌👀")
}
else{
  document.querySelector("h1").innerHTML=(Player2+" wins!😎")
}