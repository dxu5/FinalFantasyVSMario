import Behavior from "./behavior";
export default class AutoMove extends Behavior {
  constructor(moveLeftLimit = 0, moveRightLimit = 9999999) {
    super("autoMove");

    this.moveLeftLimit = moveLeftLimit;
    this.moveRightLimit = moveRightLimit;
  }

  update(object, deltaTime) {
    if (object.pos.x < this.moveLeftLimit) {
      object.vel.x = object.speed * deltaTime;
    } else if (object.pos.x > this.moveRightLimit) {
      object.vel.x = -object.speed * deltaTime;
    } else if (object.vel.x === 0) {
      object.vel.x = -object.speed * deltaTime;
    }
  }
}
