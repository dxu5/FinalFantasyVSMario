import GameObject from "./object";
import AutoWalk from "../behaviors/auto_walk";

export default class Dragon extends GameObject {
  constructor() {
    super();
    this.width = 43;
    this.height = 63;
    this.addBehavior(new AutoWalk());
    this.status = "dragonRegular";
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
  update(deltaTime, totalTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
    this.decideStatus(totalTime);
  }
  decideStatus(totalTime) {
    const frames =
      this.facing === "left"
        ? this.regularWalkLeftFrames
        : this.regularWalkRightFrames;
    this.frame = this.animationFrame(frames, totalTime, 0.15);
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
