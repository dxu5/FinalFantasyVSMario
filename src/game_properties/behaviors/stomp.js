import Behavior from "./behavior";
export default class Stomp extends Behavior {
  constructor() {
    super("stomp");
    this.audio = new Audio("./fire.mp3");
    this.bouncing = false;
    this.bounceSpeed = 400;
  }
  bounce() {
    this.bouncing = true;
  }
  update(mario) {
    if (this.bouncing) {
      mario.bouncing = true;
      this.audio.play();
      mario.vel.y = -this.bounceSpeed;
      this.bouncing = false;
      mario.bouncing = false;
    }
  }
}
