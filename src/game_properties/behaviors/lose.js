import Behavior from "./behavior";
export default class Lose extends Behavior {
  constructor() {
    super("jumpOnLose");
    this.maxDuration = 0.3;
    this.vel = 300;
    this.duration = 0;
    this.audio = new Audio("./die.wav");
  }

  start() {
    this.duration = this.maxDuration;
  }
  update(mario, deltaTime) {
    if (this.duration > 0) {
      this.audio.play();
      mario.vel.y = -this.vel;
      this.duration -= deltaTime;
    }
  }
}
