var c = document.getElementById('monCanvas');
var ctx = c.getContext('2d');

// Toiture de la maison
rotate(ctx, 45);
ctx.fillStyle="sienna";
ctx.fillRect(90,-90,150,150);
rotate(ctx, -45);

//Carre bleu
ctx.fillStyle="lightblue";
ctx.fillRect(21,105,212,200);

//Fenetre haut gauche
ctx.fillStyle="#cacaca";
ctx.fillRect(40,130,40,40);

//Fenetre haut droite
ctx.fillStyle="#cacaca";
ctx.fillRect(170,130,40,40);

//Porte de la maison
ctx.fillStyle="#cacaca";
ctx.fillRect(105,224,40,80);

function rotate(ctx, deg){
  ctx.rotate(deg*Math.PI/180);
  return ctx;
}