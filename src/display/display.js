import SpriteSheet from "./sprite_sheet.js";
import {
  backgroundImage,
  marioImage,
  backgroundFirstLayerImage,
  enemiesImage,
} from "../files";
import Camera from "./camera";
import background1 from "./sheets/background1";
import marioSprite from "./sheets/mario_small";
import enemiesSheetSprites from "./sheets/enemies";

export default class Display {
  constructor(canvas, height, width) {
    canvas.height = height;
    canvas.width = width;
    this.camera = new Camera(height, width);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.height = height;
    this.width = width;
    this.backgroundColor = "#0F5EF1";
    this.spriteSheets = new Map();
    this.loadedSheets = new Set();
    this.loadWorld = this.loadWorld.bind(this);
  }

  loadWorld() {
    const spriteSheets = this.spriteSheets;
    const loadedSheets = this.loadedSheets;
    backgroundImage.onload = function () {
      const backgroundSheet = new SpriteSheet(backgroundImage, 29, 29);
      background1.sprites.forEach((sprite) => {
        backgroundSheet.addSprite(sprite.name, sprite.x, sprite.y);
      });
      spriteSheets.set("background", backgroundSheet);
      loadedSheets.add("background");
    };
    backgroundFirstLayerImage.onload = function () {
      loadedSheets.add("backgroundLastLayer");
    };
    marioImage.onload = function () {
      marioSprite.marios.forEach((mario) => {
        const marioSheet = new SpriteSheet(
          marioImage,
          mario.width,
          mario.height
        );
        mario.sprites.forEach((sprite) => {
          if (sprite.type === "flip") {
            marioSheet.addSpriteFlipped(sprite.name, sprite.x, sprite.y);
          } else {
            marioSheet.addSprite(sprite.name, sprite.x, sprite.y);
          }
        });
        spriteSheets.set(mario.SpriteSheet, marioSheet);
      });
      loadedSheets.add("mario");
    };
    enemiesImage.onload = function () {
      enemiesSheetSprites.enemies.forEach((enemy) => {
        const enemySheet = new SpriteSheet(
          enemiesImage,
          enemy.width,
          enemy.height
        );
        enemy.sprites.forEach((sprite) => {
          if (sprite.type === "flip") {
            enemySheet.addSpriteFlipped(sprite.name, sprite.x, sprite.y);
          } else {
            enemySheet.addSprite(sprite.name, sprite.x, sprite.y);
          }
        });
        spriteSheets.set(enemy.SpriteSheet, enemySheet);
      });
      loadedSheets.add("enemies");
    };
  }

  drawWorld(game) {
    if (this.finishedLoading()) {
      this.ctx.drawImage(
        backgroundFirstLayerImage,
        -this.camera.pos.x / 6,
        0,
        this.width * 3,
        this.height
      );
      const backgroundSheet = this.spriteSheets.get("background");

      const cameraPanel = game.cameraView(this.camera, backgroundSheet);
      this.ctx.drawImage(cameraPanel, -this.camera.pos.x % 29, 0);

      game.objects.forEach((object) =>
        object.draw(this.ctx, this.spriteSheets, this.camera)
      );
    }
  }
  finishedLoading() {
    return (
      this.loadedSheets.has("background") &&
      this.loadedSheets.has("backgroundLastLayer") &&
      this.loadedSheets.has("mario") &&
      this.loadedSheets.has("enemies")
    );
  }
}
