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
    this.facing = "right";
    this.frame = "idleRight";
    this.miniWalkingRightFrames = ["walkingRight", "idleRight"];
    this.miniWalkingLeftFrames = ["walkingLeft", "idleLeft"];
  }
  update(deltaTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
    this.decideStatus();
  }

  decideStatus() {
    if (!this.isGrounded) {
      this.status = "jumping";
      if (this.vel.x > 0) {
        this.facing = "right";
        this.frame = "jumpingRight";
      } else if (this.vel.x === 0) {
        this.frame = this.facing === "right" ? "jumpingRight" : "jumpingLeft";
      } else {
        this.facing = "left";
        this.frame = "jumpingLeft";
      }
    } else if (this.vel.x > 0) {
      this.status = "walking";
      this.facing = "right";
      const totalDistance = Math.abs(this.walk.distance / 800);
      const frameIdx = Math.floor(
        totalDistance % this.miniWalkingRightFrames.length
      );
      this.frame = this.miniWalkingRightFrames[frameIdx];
    } else if (this.vel.x < 0) {
      this.status = "walking";
      this.facing = "left";
      const totalDistance = Math.abs(this.walk.distance / 800);
      const frameIdx = Math.floor(
        totalDistance % this.miniWalkingLeftFrames.length
      );
      this.frame = this.miniWalkingLeftFrames[frameIdx];
    } else {
      if (this.status === "idle") return;

      if (this.facing === "right") {
        this.frame = "idleRight";
        this.status = "idle";
      } else if (this.facing === "left") {
        this.frame = "idleLeft";
        this.status = "idle";
      }
    }
  }
}
