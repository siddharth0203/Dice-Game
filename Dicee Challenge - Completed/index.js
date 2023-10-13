//Generation of randoom number here from 1-6; 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Now logically in the images floder we have assinged name of the names as dice(randomNumber1).png;
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//Now since that image is in the images folder, so using concantenation traveling to that location.
var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png
//This is for selecting an HTML element using JavaScript.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


//Similary using the same logic written code for image-2;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);




//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
