var randomVariable1 = Math.floor(Math.random()*6)+1;
var randomVariable2 = Math.floor(Math.random()*6)+1;
// console.log(randomVariable1);

var randomDiceimage1 = "dice" + randomVariable1 + ".png";
var randomDiceimage2 = "dice" + randomVariable2 + ".png";
var randomImagesource1 = "images/" + randomDiceimage1;
var randomImagesource2 = "images/" + randomDiceimage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImagesource1);
image2.setAttribute("src", randomImagesource2);
