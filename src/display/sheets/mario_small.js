export default {
  marios: [
    {
      SpriteSheet: "mushroomMario",
      width: 36,
      height: 56,
      sprites: [
        {
          name: "idleRight",
          x: 207,
          y: 76,
        },
        {
          name: "walkingRight1",
          x: 327,
          y: 76,
        },
        {
          name: "walkingRight2",
          x: 367,
          y: 76,
        },
        {
          name: "idleLeft",
          type: "flip",
          x: 207,
          y: 76,
        },
        {
          name: "walkingLeft1",
          type: "flip",
          x: 327,
          y: 76,
        },
        {
          name: "walkingLeft2",
          type: "flip",
          x: 367,
          y: 76,
        },
        {
          name: "jumpingRight",
          x: 207,
          y: 116,
        },
        {
          name: "jumpingLeft",
          type: "flip",
          x: 207,
          y: 116,
        },
        {
          name: "fallingRight",
          x: 247,
          y: 116,
        },
        {
          name: "fallingLeft",
          type: "flip",
          x: 247,
          y: 116,
        },
      ],
    },
    {
      SpriteSheet: "regularMario",
      width: 60,
      height: 60,
      sprites: [
        {
          name: "idleRight",
          x: 209,
          y: 0,
        },
        {
          name: "lose",
          x: 9,
          y: 38,
        },
        {
          name: "walkingRight",
          x: 328,
          y: 0,
        },
        {
          name: "idleLeft",
          x: 168,
          y: 0,
        },
        {
          name: "walkingLeft",
          x: 49,
          y: 0,
        },
        {
          name: "jumpingRight",
          x: 208,
          y: 40,
        },
        {
          name: "jumpingLeft",
          x: 168,
          y: 40,
        },
        {
          name: "transparent",
          x: 0,
          y: 0,
        },
      ],
    },
  ],
};
