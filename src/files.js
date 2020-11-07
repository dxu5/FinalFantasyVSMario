import backgroundAssets from "./imgs/background_assets.png";
import mario from "./imgs/sprites.png";
import enemies from "./imgs/enemies.png";
import backgroundFirstLayer from "./imgs/backgrounds-2.png";

export const backgroundImage = new Image();
backgroundImage.src = backgroundAssets;

export const backgroundFirstLayerImage = new Image();
backgroundFirstLayerImage.src = backgroundFirstLayer;

export const marioImage = new Image();
marioImage.src = mario;

export const enemiesImage = new Image();
enemiesImage.src = enemies;
