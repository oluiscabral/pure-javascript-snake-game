function Game() {
  const running = {status: false};

  const initialize = function() {
      return {
        scenario: new Scenario(),
        snake: new Snake(),
        fruit: new Fruit()
      }
  }

  this.run = function() {
    if(!running.status) {
      running.status = true;
      const setup = initialize();
      window.addEventListener('keydown', ((e) => {
        const direction = e.key.replace('Arrow', '');
        setup.snake.changeDirection(direction);
      }));


      const loop = function() {
        setup.scenario.draw();
        setup.fruit.draw();
        setup.snake.draw();

        setup.snake.eat(setup.fruit);
      }

      this.gameLoop = window.setInterval(loop, 10);

    } else {
      console.log("The game is already running!");
    }
  }

  this.reset = function() {
    if(running.status) {
      running.status = false;
      clearInterval(this.gameLoop);
      this.run();
    } else {
      console.log("The game isn't running!");
    }
  }
}
