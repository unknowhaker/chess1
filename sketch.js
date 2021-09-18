var board = [];
var pwhite = [], pblack = [];

function setup() {
  createCanvas(400, 400);
  createBoard()
  for (let i = 0; i <8; i++) {
    pwhite.push(createSprite(i*50+25,50+25,25,25));
    pblack.push(createSprite(i*50+25,300+25,25,25))
  }

}

function draw() {
  background(255, 255, 255);
  drawSprites();
}