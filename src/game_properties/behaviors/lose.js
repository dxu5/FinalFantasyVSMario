import Behavior from "./behavior";
export default class Lose extends Behavior {
  constructor() {
    super("jumpOnLose");
    this.maxDuration = 0.3;
    this.vel = 300;
    this.duration = 0;
    this.audio = new Audio("./game-over.mp3");
  }

  start() {
    this.duration = this.maxDuration;
  }
  update(mario, deltaTime) {
    if (this.duration > 0) {
      let background = document.getElementById("audio");
      if (!background.paused) {
        background.pause();
        background.currentTime = 0;
      }
      this.audio.play();
      mario.vel.y = -this.vel;
      this.duration -= deltaTime;
    }
  }
}
