export default class Controller {
  constructor(gameMain) {
    this.gameMain = gameMain;
    this.keyStates = new Map();
    this.keyMap = new Map();
    this.mapLeftMove = this.mapLeftMove.bind(this);
    this.mapRightMove = this.mapRightMove.bind(this);
    this.mapJump = this.mapJump.bind(this);
    this.mapInputResponses();
  }
  mapInputResponses() {
    const mario = this.mario;
    this.map("Space", (keyState) => {
      if (keyState) {
        mario.jump.start();
      } else {
        mario.jump.cancel();
      }
    });
    this.map("ArrowRight", (keyState) => {
      mario.walk.direction = keyState;
    });
    this.map("ArrowLeft", (keyState) => {
      mario.walk.direction = -keyState;
    });
  }
  map(code, callback) {
    this.keyMap.set(code, callback);
  }
  handleEvent(e) {
    e.preventDefault();
    if (!this.keyMap.has(e.code)) return;
    const keyState = e.type === "keydown" ? 1 : 0;

    if (this.keyStates.get(e.code) === keyState) return;
    this.keyStates.set(e.code, keyState);
    this.keyMap.get(e.code)(keyState);
  }
  listenForInput() {
    window.addEventListener("keydown", (e) => {
      this.handleEvent(e);
    });
    window.addEventListener("keyup", (e) => {
      this.handleEvent(e);
    });
  }
}
