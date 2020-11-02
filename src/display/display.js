import SpriteSheet from "./sprite_sheet.js";
import { backgroundImage, marioImage } from "../files";
import { createBackgroundLayer } from "./layers";
export default class Display {
  constructor(canvas, height, width) {
    canvas.height = height;
    canvas.width = width;
    this.ctx = canvas.getContext("2d");
    this.height = height;
    this.width = width;
    this.backgroundColor = "#0F5EF1";
    this.spriteSheets = new Map();

    this.layers = [];
    this.loadWorld = this.loadWorld.bind(this);
    this.loadMario = this.loadMario.bind(this);
    // this.sprites = this.createSprites();
  }
  loadWorld() {
    const spriteSheets = this.spriteSheets;
    // const createBackgroundLayer = this.createBackgroundLayer;
    backgroundImage.onload = function () {
      const backgroundSheet = new SpriteSheet(backgroundImage, 29, 29);
      backgroundSheet.addSprite("sky", 155, 165);
      backgroundSheet.addSprite("ground1", 445, 202);
      backgroundSheet.addSprite("ground2", 445, 220);
      createBackgroundLayer(backgroundSheet);
      spriteSheets.set("background", backgroundSheet);
    };
  }
  loadMario() {
    const spriteSheets = this.spriteSheets;
    marioImage.onload = function () {
      const marioSheet = new SpriteSheet(marioImage, 60, 60);
      marioSheet.addSprite("idle", 209, 0);
      spriteSheets.set("mario", marioSheet);
    };
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    if (this.spriteSheets.has("background")) {
      this.spriteSheets.get("background").draw("ground1", this.ctx, 100, 100);
      this.spriteSheets.get("background").draw("ground2", this.ctx, 100, 129);
    }
  }
  drawMario(mario) {
    if (this.spriteSheets.has("mario")) {
      this.spriteSheets
        .get("mario")
        .draw("idle", this.ctx, mario.pos.x, mario.pos.y);
    }
  }
}
