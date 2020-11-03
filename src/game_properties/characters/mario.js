import ObjectEntity from "./object";
import Jump from "../behaviors/jump";
import Walk from "../behaviors/walk";

export default class Mario extends ObjectEntity {
  constructor() {
    super();
    this.width = 29;
    this.height = 40;
    this.addBehavior(new Jump());
    this.addBehavior(new Walk());
    this.status = "idle";
  }
  update(deltaTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
    if (this.vel.x > 0) {
      this.status = "runningRight";
    } else if (this.vel.x < 0) {
      this.status = "runningLeft";
    } else {
      this.status = "idle";
    }
  }
}
