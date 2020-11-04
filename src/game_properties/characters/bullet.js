import GameObject from "./object";
import IgnoreGravity from "../behaviors/nogravity";
import AutoMove from "../behaviors/auto_walk";

export default class Bullet extends GameObject {
  constructor(xSpawn, ySpawn) {
    super();
    this.pos.set(xSpawn, ySpawn);
    this.initialPos = xSpawn;
    this.width = 140;
    this.height = 128;
    this.addBehavior(new IgnoreGravity());
    this.addBehavior(new AutoMove());
    this.frame = "bulletLeft";
    this.status = "ignoreCollisions";
    this.speed = 10000;
  }
  update(deltaTime, totalTime, objects) {
    this.behaviors.forEach((behavior) => {
      behavior.update(this, deltaTime);
    });
    if (this.pos.x < this.initialPos - 1200) objects.delete(this);
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
