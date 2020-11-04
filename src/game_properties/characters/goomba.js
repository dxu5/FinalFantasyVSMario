import ObjectEntity from "./object";
import AutoWalk from "../behaviors/auto_walk";

export default class Goomba extends ObjectEntity {
  constructor(xSpawn, ySpawn, moveLeftLimit, moveRightLimit) {
    super();
    this.pos.set(xSpawn, ySpawn);

    this.width = 43;
    this.height = 40;
    this.speed = 8000;
    this.falling = false;
    this.addBehavior(new AutoWalk(moveLeftLimit, moveRightLimit));
    this.stompedCount = 0;

    this.status = "goomba";
    this.facing = "left";
    this.frame = "regularWalkLeft1";
    this.regularWalkLeftFrames = ["regularWalkLeft1", "regularWalkLeft2"];
    this.regularWalkRightFrames = ["regularWalkRight1", "regularWalkRight2"];

    this.halfWalkLeftFrames = [
      "halfFlattenedWalkLeft1",
      "halfFlattenedWalkLeft2",
    ];
    this.halfWalkRightFrames = [
      "halfFlattenedWalkRight1",
      "halfFlattenedWalkRight2",
    ];
  }
  collides(mario) {
    if (mario.invinciblity) return;
    if (this.stompedCount !== 2 && this.status !== "ignoreCollisions") {
      if (mario.vel.y > this.vel.y) {
        mario.stomp.bounce();
        this.stompedCount += 1;
      } else {
        mario.lives -= 1;
        mario.invincible.start();
        mario.invinciblity = true;
      }
    }
  }
  update(deltaTime, totalTime, objects) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
    this.decideStatus(totalTime, objects);
  }
  decideStatus(totalTime) {
    if (this.stompedCount === 1) {
      this.status = "ignoreCollisions";
      this.width = 43;
      this.height = 34;

      this.facing = this.vel.x > 0 ? "right" : "left";
      const frames =
        this.facing === "left"
          ? this.halfWalkLeftFrames
          : this.halfWalkRightFrames;
      this.frame = this.animationFrame(frames, totalTime, 0.2);
    } else if (this.stompedCount === 0) {
      this.facing = this.vel.x > 0 ? "right" : "left";
      const frames =
        this.facing === "left"
          ? this.regularWalkLeftFrames
          : this.regularWalkRightFrames;
      this.frame = this.animationFrame(frames, totalTime, 0.2);
    }
  }

  draw(ctx, spriteSheets, camera) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.rect(
      this.pos.x - camera.pos.x,
      this.pos.y - camera.pos.y,
      this.width,
      this.height
    );
    ctx.stroke();
    spriteSheets
      .get(this.status)
      .draw(
        this.frame,
        ctx,
        this.pos.x - camera.pos.x,
        this.pos.y - camera.pos.y
      );
  }
}
