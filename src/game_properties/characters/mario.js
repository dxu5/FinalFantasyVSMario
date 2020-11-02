import MovingObject from "./object.js";
import Jump from "../behaviors/jump";
import Walk from "../behaviors/walk";

export default class Mario extends MovingObject {
  constructor() {
    super();
    this.width = 29;
    this.height = 40;
    this.pos.y = 200;
    this.addBehavior(new Jump());
    this.addBehavior(new Walk());
  }

  draw(ctx) {}
}
