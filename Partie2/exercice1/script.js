var c = document.getElementById('monCanvas');
var ctx = c.getContext('2d');

//Cône de la glace
ctx.beginPath();
ctx.fillStyle="#aa6522";
ctx.moveTo(100,100);
ctx.lineTo(150,100);
ctx.lineTo(125,180);
ctx.fill();
ctx.closePath();

//Boule de glace
ctx.beginPath();
ctx.fillStyle="#8a0908";
ctx.moveTo(100,100);
ctx.arc(125,100,25,3.1,6.3,false);
ctx.fill();
ctx.closePath();