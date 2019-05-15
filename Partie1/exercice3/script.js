var c = document.getElementById('monCanvas');
var ctx = c.getContext('2d');

//Haut de la voiture (carre 1)
ctx.fillStyle="#00a550";
ctx.fillRect(100,50,200,50);

//Bas de la voiture(carre 2)
ctx.fillStyle="#00a550";
ctx.fillRect(50,100,300,60);

//Roue gauche
ctx.beginPath();
ctx.fillStyle="#cecece";
ctx.strokeStyle="#8b8b8b";
ctx.arc(85,200,40,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
ctx.closePath();


//Roue droite
ctx.beginPath();
ctx.fillStyle="#cecece";
ctx.strokeStyle="#8b8b8b";
ctx.arc(315,200,40,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
ctx.closePath();