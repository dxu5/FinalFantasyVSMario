import Game from "./game_properties/game.js";
import GameMain from "./game_main.js";
import Display from "./display/display.js";
import Controller from "./controller.js";

document.addEventListener("DOMContentLoaded", function () {
  const height = 400;
  const width = 700;

  const canvas = document.getElementById("canvas");
  const game = new Game(height, width);
  const display = new Display(canvas, height, width);
  const controller = new Controller(game.mario);

  const gameMain = new GameMain(game, display, controller);

  gameMain.start();
});
