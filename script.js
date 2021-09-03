
function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('right: ' + this.left);
  }
  this.moveDown = function () {
    this.top += this.speed;
    console.log('down: ' + this.top);
  }
  this.moveLeft = function () {
    this.left -= this.speed;
    console.log('left: ' + this.left);
  }
  this.moveTop = function () {
    this.top -= this.speed;
    console.log('up: ' + this.top);
  }
}
let speed = +prompt("enter to speed: ");
var hero = new Hero('LONG4599.JPG', 0, 0, 200, speed);

function start() {
  if (hero.top === 0 && hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
    hero.moveDown();
  } else if (hero.left > 0) {
    hero.moveLeft()
  } else if (hero.top > 0) {
    hero.moveTop()
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 20)
}

start();


