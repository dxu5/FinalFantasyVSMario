import GameObject from "./object";
import IgnoreGravity from "../behaviors/nogravity";

export default class Bullet extends GameObject {
  constructor() {
    super();
    this.width = 140;
    this.height = 128;
    this.addBehavior(new IgnoreGravity());
    this.frame = "bulletLeft";
  }
  update(deltaTime) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
  }
  draw(ctx, spriteSheets, camera) {
    spriteSheets
      .get("bullet")
      .draw(
        this.frame,
        ctx,
        this.pos.x - camera.pos.x,
        this.pos.y - camera.pos.y
      );
  }
}
