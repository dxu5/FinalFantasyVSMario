import Game from "./game_properties/game.js";
import GameMain from "./game_main.js";

document.addEventListener("DOMContentLoaded", function () {
  const height = 400;
  const width = 700;

  const canvas = document.getElementById("canvas");
  const game = new Game(height, width);
  const gameMain = new GameMain(game, display, controller);
  gameMain.start();
});
