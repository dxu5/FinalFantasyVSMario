import { Vector } from "../../util";
export default class MovingObject {
  constructor() {
    this.behaviors = [];
    this.vel = new Vector();
    this.pos = new Vector();
    this.size = new Vector();
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
