function setup() {
  // poniendo settings generales
  createCanvas(800, 800);
  strokeCap(PROJECT);
  frameRate(30);
}

//variables para controlar el circulo rojo
let posCirculoX = 200;
let posCirculoY = 120;
let movMultiplicador = 3;

// variables para controlar las lineas.
let presionada = false;
// tomo como referencia de inicio la linea horizontal mas gruesa.
let initPosX = 400;
let initPosY = 570;
let finPosX = 700;
let finPosY = 570;
let iteration = 0;

function draw() {
  //experimentando con el cursor.
  cursor(CROSS);

  //triangulo blanco
  strokeWeight(1);
  fill("white");
  triangle(10, 10, 370, 10, 180, 500);

  // circulo concentrico ext.
  fill("black");
  ellipse(200, 120, 150);

  // circulo rojo
  fill("red");
  strokeWeight(1);
  ellipse(posCirculoX + mouseX / 15, posCirculoY + mouseY / 15, 55);

  // cuadrado celeste
  strokeWeight(1);
  fill("skyblue");
  rect(450, 450, 200);

  // lineas paralelas
  push();

  line(500, 500, 700, 500);
  line(500, 525, 700, 525);
  pop();

  // linea diagonal
  strokeWeight(4);
  line(500, 600, 700, 5);

  // linea mas gruesa
  strokeWeight(8);
  line(initPosX, initPosY, finPosX, finPosY);

  // rect(0,700, 800,110)
  strokeWeight(0.1);
  strokeWeight(iteration / 70);

  line(iteration, 800, iteration, 700);
  // le agrego 10 al i para hacer que no vayan tan pegados
  iteration += 10;
  if (iteration >= 800) {
    iteration = 0;
    background("aliceblue");
  }
}
