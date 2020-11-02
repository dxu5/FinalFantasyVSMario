export default {
  tileWidth: 29,
  tileHeight: 29,
  spriteSheet: "world",
  backgrounds: [
    {
      tile: "ground1",
      type: "ground",
      ranges: [
        [0, 10, 3, 4],
        [0, 20, 9, 10],
        [0, 22, 12, 13],
      ],
    },
    {
      tile: "ground2",
      type: "ground",
      ranges: [[0, 22, 13, 14]],
    },
  ],
};
