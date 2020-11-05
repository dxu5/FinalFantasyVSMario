import Behavior from "./behavior";
export default class Stomp extends Behavior {
  constructor() {
    super("stomp");
    this.audio = new Audio("./stomp.wav");
    this.bouncing = false;
    this.bounceSpeed = 400;
  }
  bounce() {
    this.audio.play();
    this.bouncing = true;
  }
  update(mario) {
    if (this.bouncing) {
      mario.vel.y = -this.bounceSpeed;
      this.bouncing = false;
    }
  }
}
