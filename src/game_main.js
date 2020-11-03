import Controller from "./controller.js";
export default class GameMain {
  constructor(game, display, controller) {
    this.game = game;
    this.display = display;
    this.pauseStatus = false;

    this.animate = this.animate.bind(this);
    this.run = this.run.bind(this);
    this.pause = this.pause.bind(this);
    this.togglePause = this.togglePause.bind(this);
  }
  start() {
    this.game.mario.pos.set(100, 250);
    this.lastTime = 0;
    this.accumulatedTime = 0;

    this.display.loadWorld();
    this.display.loadMario();
    const controller = new Controller(this);
    controller.listenForInput();
    mouseDebugger(this.display.canvas, this.game.mario, this.display.camera);
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
  pause() {
    this.pauseStatus = true;
    cancelAnimationFrame(this.id);
  }
  animate(time) {
    this.accumulatedTime += (time - this.lastTime) / 1000;
    while (this.accumulatedTime > this.deltaTime) {
      this.game.update(this.deltaTime);
      this.display.drawWorld(this.game);
      this.display.drawCameraRect(this.display.camera);
      this.display.drawMario(this.game.mario);
      this.accumulatedTime -= this.deltaTime;
    }

    this.lastTime = time;

    this.id = requestAnimationFrame(this.animate);
  }
}

function mouseDebugger(canvas, entity, camera) {
  let lastEvent;
  ["mousedown", "mousemove"].forEach((eventName) => {
    canvas.addEventListener(eventName, (event) => {
      if (event.buttons === 1) {
        entity.vel.set(0, 0);
        entity.pos.set(
          event.offsetX + camera.pos.x,
          event.offsetY + camera.pos.y
        );
      } else if (
        event.buttons === 2 &&
        lastEvent &&
        lastEvent.buttons === 2 &&
        lastEvent.type === "mousemove"
      ) {
        camera.pos.x -= event.offsetX - lastEvent.offsetX;
      }
      lastEvent = event;
    });
  });
  canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}
