var c = document.getElementById('monCanvas');
var ctx = c.getContext('2d');

//Carré bleu
ctx.beginPath();
ctx.fillStyle="#0000ff";
ctx.fillRect(0,0,400,400);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="white";
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,50,250,200);
ctx.fill();
ctx.closePath();

//Arc de cercle haut
ctx.beginPath();
ctx.fillStyle="#e0e1f3";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,130,300,200);
ctx.fill();
ctx.closePath();

//Arc de cercle bas
ctx.beginPath();
ctx.fillStyle="#e0e1f3";
ctx.moveTo(300,200);
ctx.quadraticCurveTo(200,260,100,200);
ctx.fill();
ctx.closePath();