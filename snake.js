function Snake() {
  this.x = 0;
  this.y = 0;
  let speed = 1;
  this.xSpeed = scale*speed;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = []

  this.draw = function () {
    ctx.fillStyle = "#FFFF"
    ctx.fillRect(this.x,this.y,scale,scale);

    for (let i=0; i<this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
    }
  }

  this.update = function () {
    for (let i=0; i<this.tail.length - 1;i++) {
      this.tail[i] = this.tail[i+1];
    }

    /* for(let i=0; i<this.tail.length-1;i++) {
      if(this.tail[i].x === this.x && this.tail[y] === this.y) {
        this.tail.slice(0, i);
      }
    } */

    this.tail[this.total - 1] = {x:this.x, y: this.y};


    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x >canvas.width) {
      this.x = 0;
    }
    if(this.y >canvas.height) {
      this.y = 0;
    }
    if(this.x <0) {
      this.x = canvas.width;
    }
    if(this.y <0) {
      this.y = canvas.height;
    }
  }

  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xSpeed=0;
        this.ySpeed=-scale*speed;
        break;
      case 'Down':
        this.xSpeed=0;
        this.ySpeed=scale*speed;
        break;
      case 'Left':
        this.xSpeed=-scale*speed;
        this.ySpeed=0;
        break;
      case 'Right':
        this.xSpeed=scale*speed;
        this.ySpeed=0;
        break;
    }
  }

  this.eat = function(fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total++;
      return true;
    }
    else {
      return false;
    }
  }
}
