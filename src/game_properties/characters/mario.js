import MovingObject from "./object.js";
import Jump from "../behaviors/jump";
import Walk from "../behaviors/walk";

export default class Mario extends MovingObject {
  constructor() {
    super();
    this.size.x = 29;
    this.size.y = 40;
    this.addBehavior(new Jump());
    this.addBehavior(new Walk());
  }

  draw(ctx) {}
}
