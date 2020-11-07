export default {
  marios: [
    {
      SpriteSheet: "mushroomMario",
      width: 36,
      height: 54,
      sprites: [
        {
          name: "idleRight",
          type: "flip",
          x: 118,
          y: -2,
        },
        {
          name: "walkingRight1",
          type: "flip",
          x: 148,
          y: -2,
        },
        {
          name: "walkingRight2",
          type: "flip",
          x: 118,
          y: 28,
        },
        {
          name: "idleLeft",
          x: 118,
          y: -2,
        },
        {
          name: "walkingLeft1",
          x: 148,
          y: -2,
        },
        {
          name: "walkingLeft2",
          x: 118,
          y: 28,
        },
        {
          name: "jumpingRight",
          type: "flip",
          x: 148,
          y: -2,
        },
        {
          name: "jumpingLeft",
          x: 148,
          y: -2,
        },
        {
          name: "fallingRight",
          type: "flip",
          x: 118,
          y: 28,
        },
        {
          name: "fallingLeft",
          x: 118,
          y: 28,
        },
      ],
    },
    {
      SpriteSheet: "regularMario",
      width: 30,
      height: 40,
      sprites: [
        {
          name: "idleRight",
          x: 30,
          y: 5,
        },
        {
          name: "lose",
          x: 9,
          y: 38,
        },
        {
          name: "walkingRight",
          x: 30,
          y: 33,
        },
        {
          name: "idleLeft",
          type: "flip",
          x: 30,
          y: 5,
        },
        {
          name: "walkingLeft",
          type: "flip",
          x: 30,
          y: 33,
        },
        {
          name: "jumpingRight",
          x: 30,
          y: 33,
        },
        {
          name: "jumpingLeft",
          type: "flip",
          x: 30,
          y: 33,
        },
        {
          name: "transparent",
          x: 1000,
          y: 1000,
        },
      ],
    },
  ],
};
