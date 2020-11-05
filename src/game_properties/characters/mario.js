import ObjectEntity from "./object";
import Jump from "../behaviors/jump";
import Walk from "../behaviors/walk";
import Lose from "../behaviors/lose";
import Stomp from "../behaviors/stomp";
import Invincible from "../behaviors/invincible";

export default class Mario extends ObjectEntity {
  constructor() {
    super();
    this.width = 29;
    this.height = 40;
    this.lives = 2;
    this.bouncing = false;
    this.invinciblity = false;
    this.addBehavior(new Jump());
    this.Lose = new Lose();
    this.addBehavior(this.Lose);
    this.addBehavior(new Walk());
    this.addBehavior(new Stomp());
    this.addBehavior(new Invincible());
    this.status = "idle";
    this.mario = "regularMario";
    this.facing = "right";
    this.frame = "idleRight";
    this.walkRightFrames = ["walkingRight", "idleRight"];
    this.walkRightFramesMushroom = [
      "walkingRight1",
      "walkingRight2",
      "idleRight",
    ];
    this.walkLeftFrames = ["walkingLeft", "idleLeft"];
    this.walkLeftFramesMushroom = ["walkingLeft1", "walkingLeft2", "idleLeft"];
  }
  update(deltaTime, totalTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
    this.decideStatus(totalTime);
  }

  decideStatus(totalTime) {
    if (this.pos.y > 400) this.lives = 0;
    if (this.lives === 0) {
      this.width = 29;
      this.height = 40;
      this.mario = "regularMario";
      this.status = "ignoreCollisions";
      if (this.status === "ignoreCollisions" && this.frame !== "lose")
        this.Lose.start();
      this.frame = "lose";
      return;
    } else if (this.lives === 1) {
      this.width = 29;
      this.height = 40;
      this.mario = "regularMario";
    } else if (this.lives === 2) {
      this.width = 34;
      this.height = 56;
      this.mario = "mushroomMario";
    }

    if (!this.isGrounded) {
      if (this.mario === "regularMario" || this.vel.y < 0) {
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
      } else {
        this.status = "falling";
        if (this.vel.x > 0) {
          this.facing = "right";
          this.frame = "fallingRight";
        } else if (this.vel.x === 0) {
          this.frame = this.facing === "right" ? "fallingRight" : "fallingLeft";
        } else {
          this.facing = "left";
          this.frame = "fallingLeft";
        }
      }
    } else if (this.vel.x > 0) {
      this.status = "walking";
      this.facing = "right";
      const totalDistance = Math.abs(this.walk.distance / 800);
      if (this.lives === 2) {
        const frameIdx = Math.floor(
          totalDistance % this.walkRightFramesMushroom.length
        );
        this.frame = this.walkRightFramesMushroom[frameIdx];
      } else {
        const frameIdx = Math.floor(
          totalDistance % this.walkRightFrames.length
        );
        this.frame = this.walkRightFrames[frameIdx];
      }
    } else if (this.vel.x < 0) {
      this.status = "walking";
      this.facing = "left";
      const totalDistance = Math.abs(this.walk.distance / 800);
      if (this.lives === 2) {
        const frameIdx = Math.floor(
          totalDistance % this.walkLeftFramesMushroom.length
        );
        this.frame = this.walkLeftFramesMushroom[frameIdx];
      } else {
        const frameIdx = Math.floor(totalDistance % this.walkLeftFrames.length);
        this.frame = this.walkLeftFrames[frameIdx];
      }
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
    if (this.invinciblity && this.lives === 1) {
      if (Math.floor(totalTime / 0.2) % 2) this.frame = "transparent";
    }
  }

  draw(ctx, spriteSheets, camera) {
    spriteSheets
      .get(this.mario)
      .draw(
        this.frame,
        ctx,
        this.pos.x - camera.pos.x,
        this.pos.y - camera.pos.y
      );
  }
  overlaps(object) {
    return (
      this.getBottom() > object.getTop() &&
      this.getTop() < object.getBottom() &&
      this.getLeft() < object.getRight() &&
      this.getRight() > object.getLeft()
    );
  }
}
