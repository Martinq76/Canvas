var c = document.getElementById('monCanvas');
var ctx = c.getContext('2d');

// Carré bleu
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.moveTo(100, 200);
ctx.lineTo(200, 200);
ctx.lineTo(200, 300);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.fill();

//La porte
ctx.beginPath();
ctx.moveTo(135, 300);
ctx.lineTo(165, 300);
ctx.lineTo(165, 260);
ctx.lineTo(135, 260);
ctx.fillStyle = "#cacaca";
ctx.closePath();
ctx.fill();

//Fenetre gauche
ctx.beginPath();
ctx.moveTo(130,230);
ctx.lineTo(110,230);
ctx.lineTo(110,210);
ctx.lineTo(130,210);
ctx.fillStyle = "#cacaca";
ctx.closePath();
ctx.fill();

//Fenetre droite
ctx.beginPath();
ctx.moveTo(170,230);
ctx.lineTo(190,230);
ctx.lineTo(190,210);
ctx.lineTo(170,210);
ctx.fillStyle = "#cacaca";
ctx.closePath();
ctx.fill();

//Le toit
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(100,200);
ctx.lineTo(200,200);
ctx.fillStyle="#cd853f";
ctx.closePath();
ctx.fill();