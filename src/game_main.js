import Controller from "./controller.js";
export default class GameMain {
  constructor(game, display) {
    this.game = game;
    this.display = display;
    this.pauseStatus = false;

    this.animate = this.animate.bind(this);
    this.run = this.run.bind(this);
  }
  start() {
    this.game.mario.pos.set(100, 250);
    this.lastTime = 0;
    this.accumulatedTime = 0;

    this.display.loadWorld();
    const controller = new Controller(this);
    controller.listenForInput();
    this.deltaTime = 1 / 60;
    this.run();
  }

  togglePause() {
    if (this.pauseStatus) {
      this.run();
    } else {
      this.pause();
    }
  }
  run() {
    this.pauseStatus = false;
    this.id = requestAnimationFrame(this.animate);
  }
  animate(time) {
    this.accumulatedTime += (time - this.lastTime) / 1000;
    if (this.accumulatedTime > 1) this.accumulatedTime = 1;
    while (this.accumulatedTime > this.deltaTime) {
      this.game.update(this.deltaTime);
      this.display.drawWorld(this.game);
      this.accumulatedTime -= this.deltaTime;
    }

    this.lastTime = time;

    this.id = requestAnimationFrame(this.animate);
  }
}
