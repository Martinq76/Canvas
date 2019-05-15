var c = document.getElementById('monCanvas');
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.fillRect(160,100,80,200);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.arc(200,60,50,0,2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.fillRect(40,100,320,25);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.moveTo(40,100);
ctx.quadraticCurveTo(0,112.5,40,125);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.moveTo(360,100);
ctx.quadraticCurveTo(400,112.5,360,125);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.moveTo(160,300);
ctx.lineTo(160,380);
ctx.lineTo(180,380);
ctx.lineTo(180,320);
ctx.lineTo(200,300);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.moveTo(240,300);
ctx.lineTo(240,380);
ctx.lineTo(220,380);
ctx.lineTo(220,320);
ctx.lineTo(200,300);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.moveTo(160,380);
ctx.quadraticCurveTo(170,400,180,380);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.moveTo(240,380);
ctx.quadraticCurveTo(230,400,220,380);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#7a2976";
ctx.arc(200,160,10,0,2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#7a2976";
ctx.arc(200,210,10,0,2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(180,50,10,0,2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(220,50,10,0,2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle="white";
ctx.moveTo(170,40);
ctx.quadraticCurveTo(180,30,190,40);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle="white";
ctx.moveTo(210,40);
ctx.quadraticCurveTo(220,30,230,40);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.moveTo(180,75);
ctx.quadraticCurveTo(200,90,220,75);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.moveTo(180,75);
ctx.quadraticCurveTo(200,80,220,75);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();