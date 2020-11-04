import SpriteSheet from "./sprite_sheet.js";
import {
  backgroundImage,
  marioImage,
  backgroundLastLayerImage,
} from "../files";
import Camera from "./camera";
import background1 from "./sheets/background1";
import marioSprite from "./sheets/mario_small";

export default class Display {
  constructor(canvas, height, width) {
    canvas.height = height;
    canvas.width = width;
    this.pauseScreen = "#0F5EF1";
    this.camera = new Camera(height, width);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.height = height;
    this.width = width;
    this.backgroundColor = "#add8e6";
    this.spriteSheets = new Map();

    this.layers = [];
    this.loadWorld = this.loadWorld.bind(this);
    this.loadMario = this.loadMario.bind(this);
  }

  loadWorld() {
    const spriteSheets = this.spriteSheets;
    backgroundImage.onload = function () {
      const backgroundSheet = new SpriteSheet(backgroundImage, 29, 29);
      background1.sprites.forEach((sprite) => {
        backgroundSheet.addSprite(sprite.name, sprite.x, sprite.y);
      });
      spriteSheets.set("background", backgroundSheet);
    };
  }
  loadMario() {
    const spriteSheets = this.spriteSheets;
    marioImage.onload = function () {
      const marioSheet = new SpriteSheet(marioImage, 60, 60);
      marioSprite.sprites.forEach((sprite) => {
        marioSheet.addSprite(sprite.name, sprite.x, sprite.y);
      });
      spriteSheets.set("mario", marioSheet);
    };
    backgroundLastLayerImage.onload = function () {
      spriteSheets.set("backgroundLastLayer", 0);
    };
  }

  drawWorld(game) {
    if (
      this.spriteSheets.has("background") &&
      this.spriteSheets.has("backgroundLastLayer")
    ) {
      this.ctx.drawImage(
        backgroundLastLayerImage,
        -this.camera.pos.x / 6,
        0,
        this.width * 3,
        this.height
      );
      // this.ctx.drawImage(backgroundLastLayerImage, this.width, this.height);
      const backgroundSheet = this.spriteSheets.get("background");
      const cameraPanel = game.cameraView(
        this.camera,
        backgroundSheet,
        this.ctx
      );
      this.ctx.drawImage(cameraPanel, -this.camera.pos.x % 29, 0);
    }
  }
  drawMario(mario) {
    if (this.spriteSheets.has("mario")) {
      this.spriteSheets
        .get("mario")
        .draw(
          mario.frame,
          this.ctx,
          mario.pos.x - this.camera.pos.x,
          mario.pos.y - this.camera.pos.y
        );
    }
  }
}
