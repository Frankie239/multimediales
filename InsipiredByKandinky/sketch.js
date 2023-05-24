function setup() {
  // poniendo settings generales
  createCanvas(800, 800);
  strokeCap(PROJECT)
  background('aliceblue')
}

function draw() {
  //triangulo blanco
  strokeWeight(1)
  fill('white')
  triangle(10,10,370,10,180,500)

  // circulo concentrico ext.
  fill('black')
  ellipse(200,120,150)

  // circulo rojo
  fill('red')
  strokeWeight(1)
  ellipse(200,120,55)

  // cuadrado celeste
  strokeWeight(1)
  fill('skyblue')
  rect(450,450,200)

  // lineas paralelas
  line(500,500,700,500)
  line(500,525,700,525)

  // linea diagonal
  strokeWeight(4)
  line(500,600,700,5)

  // linea mas gruesa
  strokeWeight(8)
  line(400,570,700,570)

  // inicializo en el mas finito que se veia
  strokeWeight(0.1)
  for(let i =0; i<800; i++)
  {
    //por cada pixel de los 800:
    //el weight es una division para hacer que quede gradual
    strokeWeight(i/70)
    // y hago una linea que se vaya generando automaticamente en el eje x
    line(i,800,i,700)
    // le agrego 10 al i para hacer que no vayan tan pegados
    i += 10
  }

}