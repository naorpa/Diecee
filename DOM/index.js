var randomNumber= Math.random();
randomNumber1=Math.floor((randomNumber*6)+1);
document.getElementById("img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber= Math.random();
randomNumber2=Math.floor((randomNumber*6)+1);
document.getElementById("img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML ="Player1 Win!"
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML ="Player2 Win!"
}
else{
  document.querySelector("h1").innerHTML ="Draw!"
}
