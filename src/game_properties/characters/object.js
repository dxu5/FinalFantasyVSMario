import { Vector } from "../../util";
export default class MovingObject {
  constructor() {
    this.behaviors = [];
    this.vel = new Vector();
    this.pos = new Vector();
    this.size = new Vector();
    this.width = 0;
    this.height = 0;
    this.isGrounded = true;
  }
  update(deltaTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
  }
  addBehavior(behavior) {
    this.behaviors.push(behavior);
    this[behavior.name] = behavior;
  }
}
