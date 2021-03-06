function Snake() {
  this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
  this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  const speed = {base: scale*1, x: 0, y: 0};
  const fruit = {amount:0};
  const tail = [];

  this.draw = function() {
    ctx.fillStyle = "#FFFF"

    if(fruit.amount > 0) {
      drawTail(this.x, this.y);
    }

    this.x += speed.x;
    this.y += speed.y;

    if (this.x >= canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = canvas.width;
    }
    if(this.y >= canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = canvas.height;
    }

    ctx.fillRect(this.x,this.y,scale,scale);
  }

  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        if(speed.y == 0) {
          speed.x=0;
          speed.y=-speed.base;
        }
        break;
      case 'Down':
        if(speed.y == 0) {
          speed.x=0;
          speed.y=speed.base;
        }
        break;
      case 'Left':
        if(speed.x == 0) {
          speed.x=-speed.base;
          speed.y=0;
        }
        break;
      case 'Right':
        if(speed.x == 0) {
          speed.x=speed.base;
          speed.y=0;
        }
        break;
    }
  }

  this.eat = function(fruit) {
    if(tail.length > 2) {
      for (let i = 0; i < tail.length-1; i++) {
        if(tail[i].x === this.x && tail[i].y === this.y) {
          tail.splice(0, i+1);
          break;
        }
      }
    }

    if (this.x === fruit.x && this.y === fruit.y) {
      fruit.pickLocation();
      extendTail(this.x, this.y);
    }

  }

  const drawTail = function(x, y) {
    tail[tail.length-1] = {x, y};

    for (let i=0; i<tail.length; i++) {
      ctx.fillRect(tail[i].x, tail[i].y, scale, scale);
    }

    for (let i=0; i<tail.length-1; i++) {
      tail[i] = tail[i+1];
    }
  }

  const extendTail = function(x, y) {
    fruit.amount++;
    if(tail.length > 0)
      tail[tail.length] = {x, y};
    else
      tail[0] = {x, y};
  }
}
