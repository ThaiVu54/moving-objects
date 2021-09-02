
function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 50;
    console.log('right: ' + this.left);
  }
  this.moveDown = function () {
    this.top += 50;
    console.log('down: ' + this.top);
  }
//   this.moveLeft() = function () {
//     this.left -= 50;
//     console.log('ok: ' + this.left)
//   }
//   this.moveUp = function () {
//     this.top -= 50;
//     console.log('ok: ' + this.top);
//   }
}
var hero = new Hero('LONG4599.jpg', 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.moveRight();

  }
  if (hero.size == window.window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();
// start1();
// function start1() {
//   if (hero.top < window.innerHeight - hero.size) {
//     hero.moveDown();
//   }
//   document.getElementById('game').innerHTML = hero.getHeroElement();
//   setTimeout(start1, 500)
// }
