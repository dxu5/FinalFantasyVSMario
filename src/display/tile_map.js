export default {
  tileWidth: 29,
  tileHeight: 29,
  spriteSheet: "world",
  backgrounds: [
    {
      tile: "ground1",
      type: "ground",
      ranges: [
        [0, 20, 9, 10],
        [0, 22, 12, 13],
      ],
    },
    {
      tile: "ground2",
      type: "ground",
      ranges: [[0, 22, 13, 14]],
    },
    {
      tile: "cloudMiddle",
      type: "floatingPlatform",
      ranges: [[0, 8, 5, 6]],
    },
    {
      tile: "cloudRight",
      type: "floatingPlatform",
      ranges: [[7, 8, 5, 6]],
    },
  ],
};
