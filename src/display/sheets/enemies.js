export default {
  enemies: [
    {
      SpriteSheet: "bullet",
      width: 140,
      height: 128,
      sprites: [
        {
          name: "bulletLeft",
          x: 7,
          y: 1162,
        },
      ],
    },
    {
      SpriteSheet: "ignoreCollisions",
      width: 43,
      height: 39,
      sprites: [
        {
          name: "halfFlattenedWalkLeft1",
          x: 50,
          y: 322,
        },
        {
          name: "halfFlattenedWalkLeft2",
          x: 9,
          y: 322,
        },
        {
          name: "halfFlattenedWalkRight1",
          type: "flip",
          x: 50,
          y: 322,
        },
        {
          name: "halfFlattenedWalkRight2",
          type: "flip",
          x: 9,
          y: 322,
        },
      ],
    },
    {
      SpriteSheet: "dragonRegular",
      width: 43,
      height: 39,
      sprites: [
        {
          name: "regularWalkLeft1",
          x: 50,
          y: 322,
        },
        {
          name: "regularWalkLeft2",
          x: 9,
          y: 322,
        },
        {
          name: "regularWalkRight1",
          type: "flip",
          x: 50,
          y: 322,
        },
        {
          name: "regularWalkRight2",
          type: "flip",
          x: 9,
          y: 322,
        },
      ],
    },
  ],
};
