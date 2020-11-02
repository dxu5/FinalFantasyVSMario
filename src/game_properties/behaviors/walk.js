import Behavior from "./behavior";
export default class Walk extends Behavior {
  constructor() {
    super("walk");
    this.direction = 0;
    this.speed = 10000;
  }

  update(mario, deltaTime) {
    mario.vel.x = this.speed * this.direction * deltaTime;
  }
}
