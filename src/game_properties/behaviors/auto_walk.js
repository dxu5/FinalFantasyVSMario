import Behavior from "./behavior";
export default class AutoWalk extends Behavior {
  constructor() {
    super("autoWalk");
    this.leftDirection = 0;
    this.rightDirection = 0;
    this.speed = 10000;
    this.distance = 0;
  }

  update(object, deltaTime) {
    object.vel.x =
      (this.leftDirection + this.rightDirection) * this.speed * deltaTime;
    this.distance += object.vel.x;
  }
}
