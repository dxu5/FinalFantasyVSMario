import Game from "./game_properties/game.js";
import GameMain from "./game_main.js";
import Display from "./display/display.js";

document.addEventListener("DOMContentLoaded", function () {
  const height = 400;
  const width = 700;

  const canvas = document.getElementById("canvas");
  const game = new Game(height, width);
  const display = new Display(canvas, height, width);
  display.loadWorld();
  const gameMain = new GameMain(game, display);
  const modal = document.getElementById("modal");
  const button = document.getElementById("start-btn");
  const audio = document.getElementById("audio");
  let play = false;
  button.addEventListener("click", () => {
    modal.style.display = "none";
    canvas.style.display = "block";
    audio.play();
    play = true;
    // audio.pause();
    gameMain.start();
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 77) {
      if (play === true) {
        audio.pause();
        play = false;
      } else {
        audio.play();
        play = true;
      }
    }
  });
});
