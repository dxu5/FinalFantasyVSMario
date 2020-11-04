import Behavior from "./behavior";
export default class Invincible extends Behavior {
  constructor() {
    super("invincible");
    this.maxDuration = 2;
    this.duration = 0;
  }
  start() {
    this.duration = this.maxDuration;
  }
  cancel() {
    this.duration = 0;
  }
  update(mario, deltaTime) {
    if (this.duration > 0) {
      mario.invinciblity = true;
      this.duration -= deltaTime;
    } else {
      mario.invinciblity = false;
    }
  }
}
