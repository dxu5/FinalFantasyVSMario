import { Vector } from "../../util";
export default class ObjectEntity {
  constructor() {
    this.behaviors = [];
    this.vel = new Vector();
    this.pos = new Vector();
    this.lastPos = new Vector();

    this.width = 0;
    this.height = 0;
    this.isGrounded = true;
    this.frames = 0;
    this.trigger = 0;
  }

  getRight() {
    return this.pos.x + this.width;
  }
  getLeft() {
    return this.pos.x;
  }
  getTop() {
    return this.pos.y;
  }
  getBottom() {
    return this.pos.y + this.height;
  }
  getLastBottom() {
    return this.lastPos.y + this.height;
  }
  update(deltaTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
  }
  removeBehavior(behavior) {
    this.behaviors.forEach((beh, idx) => {
      if (beh.name === behavior) this.behaviors.splice(idx, 1);
    });
  }
  collides(object) {}
  addBehavior(behavior) {
    this.behaviors.push(behavior);
    this[behavior.name] = behavior;
  }
  animationFrame(frames, totalTime, frameRate) {
    const frameIdx = Math.floor(totalTime / frameRate) % frames.length;
    return frames[frameIdx];
  }
  draw(spriteSheets, camera) {}
}
