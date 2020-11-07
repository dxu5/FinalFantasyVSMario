/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(gameMain) {
    _classCallCheck(this, Controller);

    this.gameMain = gameMain;
    this.keyStates = new Map();
    this.keyMap = new Map();
    this.mapLeftMove = this.mapLeftMove.bind(this);
    this.mapRightMove = this.mapRightMove.bind(this);
    this.mapJump = this.mapJump.bind(this);
    this.mapInputResponses();
  }

  _createClass(Controller, [{
    key: "mapInputResponses",
    value: function mapInputResponses() {
      this.mapJump("Space");
      this.mapJump("KeyW");
      this.mapJump("ArrowUp");
      this.mapRightMove("ArrowRight");
      this.mapRightMove("KeyD");
      this.mapLeftMove("ArrowLeft");
      this.mapLeftMove("KeyA");
      var togglePause = this.gameMain.togglePause;
      this.map("KeyP", function (keyState) {
        if (keyState) {
          togglePause();
        }
      });
    }
  }, {
    key: "mapRightMove",
    value: function mapRightMove(input) {
      var mario = this.gameMain.game.mario;
      this.map(input, function (keyState) {
        mario.walk.rightDirection = keyState;
      });
    }
  }, {
    key: "mapLeftMove",
    value: function mapLeftMove(input) {
      var mario = this.gameMain.game.mario;
      this.map(input, function (keyState) {
        mario.walk.leftDirection = -keyState;
      });
    }
  }, {
    key: "mapJump",
    value: function mapJump(input) {
      var mario = this.gameMain.game.mario;
      this.map(input, function (keyState) {
        if (keyState && mario.vel.y <= 0) {
          mario.isGrounded = false;
          mario.jump.start();
        } else {
          mario.jump.cancel();
        }
      });
    }
  }, {
    key: "map",
    value: function map(code, callback) {
      this.keyMap.set(code, callback);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      e.preventDefault();
      if (!this.keyMap.has(e.code)) return;
      var keyState = e.type === "keydown" ? 1 : 0;
      if (this.keyStates.get(e.code) === keyState) return;
      this.keyStates.set(e.code, keyState);
      this.keyMap.get(e.code)(keyState);
    }
  }, {
    key: "listenForInput",
    value: function listenForInput() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        _this.handleEvent(e);
      });
      window.addEventListener("keyup", function (e) {
        _this.handleEvent(e);
      });
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/display/camera.js":
/*!*******************************!*\
  !*** ./src/display/camera.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Camera = function Camera(height, width) {
  _classCallCheck(this, Camera);

  this.pos = new _util__WEBPACK_IMPORTED_MODULE_0__["Vector"](0, 0);
  this.width = width;
  this.height = height;
};



/***/ }),

/***/ "./src/display/display.js":
/*!********************************!*\
  !*** ./src/display/display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var _sprite_sheet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite_sheet.js */ "./src/display/sprite_sheet.js");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files */ "./src/files.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera */ "./src/display/camera.js");
/* harmony import */ var _sheets_background1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sheets/background1 */ "./src/display/sheets/background1.js");
/* harmony import */ var _sheets_mario_small__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sheets/mario_small */ "./src/display/sheets/mario_small.js");
/* harmony import */ var _sheets_enemies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sheets/enemies */ "./src/display/sheets/enemies.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Display = /*#__PURE__*/function () {
  function Display(canvas, height, width) {
    _classCallCheck(this, Display);

    canvas.height = height;
    canvas.width = width;
    this.camera = new _camera__WEBPACK_IMPORTED_MODULE_2__["default"](height, width);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.height = height;
    this.width = width;
    this.backgroundColor = "#0F5EF1";
    this.spriteSheets = new Map();
    this.loadedSheets = new Set();
    this.loadWorld = this.loadWorld.bind(this);
  }

  _createClass(Display, [{
    key: "loadWorld",
    value: function loadWorld() {
      var spriteSheets = this.spriteSheets;
      var loadedSheets = this.loadedSheets;

      _files__WEBPACK_IMPORTED_MODULE_1__["backgroundImage"].onload = function () {
        var backgroundSheet = new _sprite_sheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](_files__WEBPACK_IMPORTED_MODULE_1__["backgroundImage"], 29, 29);
        _sheets_background1__WEBPACK_IMPORTED_MODULE_3__["default"].sprites.forEach(function (sprite) {
          backgroundSheet.addSprite(sprite.name, sprite.x, sprite.y);
        });
        spriteSheets.set("background", backgroundSheet);
        loadedSheets.add("background");
      };

      _files__WEBPACK_IMPORTED_MODULE_1__["backgroundFirstLayerImage"].onload = function () {
        loadedSheets.add("backgroundLastLayer");
      };

      _files__WEBPACK_IMPORTED_MODULE_1__["marioImage"].onload = function () {
        _sheets_mario_small__WEBPACK_IMPORTED_MODULE_4__["default"].marios.forEach(function (mario) {
          var marioSheet = new _sprite_sheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](_files__WEBPACK_IMPORTED_MODULE_1__["marioImage"], mario.width, mario.height);
          mario.sprites.forEach(function (sprite) {
            if (sprite.type === "flip") {
              marioSheet.addSpriteFlipped(sprite.name, sprite.x, sprite.y);
            } else {
              marioSheet.addSprite(sprite.name, sprite.x, sprite.y);
            }
          });
          spriteSheets.set(mario.SpriteSheet, marioSheet);
        });
        loadedSheets.add("mario");
      };

      _files__WEBPACK_IMPORTED_MODULE_1__["enemiesImage"].onload = function () {
        _sheets_enemies__WEBPACK_IMPORTED_MODULE_5__["default"].enemies.forEach(function (enemy) {
          var enemySheet = new _sprite_sheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](_files__WEBPACK_IMPORTED_MODULE_1__["enemiesImage"], enemy.width, enemy.height);
          enemy.sprites.forEach(function (sprite) {
            if (sprite.type === "flip") {
              enemySheet.addSpriteFlipped(sprite.name, sprite.x, sprite.y);
            } else {
              enemySheet.addSprite(sprite.name, sprite.x, sprite.y);
            }
          });
          spriteSheets.set(enemy.SpriteSheet, enemySheet);
        });
        loadedSheets.add("enemies");
      };
    }
  }, {
    key: "drawWorld",
    value: function drawWorld(game) {
      var _this = this;

      if (this.finishedLoading()) {
        this.ctx.drawImage(_files__WEBPACK_IMPORTED_MODULE_1__["backgroundFirstLayerImage"], -this.camera.pos.x / 6, 0, this.width * 3, this.height);
        var backgroundSheet = this.spriteSheets.get("background");
        var cameraPanel = game.cameraView(this.camera, backgroundSheet);
        this.ctx.drawImage(cameraPanel, -this.camera.pos.x % 29, 0);
        game.objects.forEach(function (object) {
          return object.draw(_this.ctx, _this.spriteSheets, _this.camera);
        });
      }
    }
  }, {
    key: "finishedLoading",
    value: function finishedLoading() {
      return this.loadedSheets.has("background") && this.loadedSheets.has("backgroundLastLayer") && this.loadedSheets.has("mario") && this.loadedSheets.has("enemies");
    }
  }]);

  return Display;
}();



/***/ }),

/***/ "./src/display/sheets/background1.js":
/*!*******************************************!*\
  !*** ./src/display/sheets/background1.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  sprites: [{
    name: "transparent",
    x: 155,
    y: 165
  }, {
    name: "groundTop",
    x: 445,
    y: 202
  }, {
    name: "groundSoil",
    x: 445,
    y: 220
  }, {
    name: "groundMidLeftEdge",
    x: 427,
    y: 220
  }, {
    name: "groundMidRightEdge",
    x: 462,
    y: 220
  }, {
    name: "groundTopRightEdge",
    x: 462,
    y: 202
  }, {
    name: "groundTopLeftEdge",
    x: 427,
    y: 202
  }, {
    name: "groundTopRightPatch",
    x: 358,
    y: 383
  }, {
    name: "groundTopLeftPatch",
    x: 374.5,
    y: 382.5
  }, {
    name: "groundTopFloatingLeft",
    x: 427,
    y: 253
  }, {
    name: "groundTopFloatingRight",
    x: 462,
    y: 253
  }, {
    name: "groundTopFloatingRightSoil",
    x: 462,
    y: 271
  }, {
    name: "groundTopFloatingLeftSoil",
    x: 427,
    y: 271
  }, {
    name: "platformLeft",
    x: 37.5,
    y: 0
  }, {
    name: "platformMiddle",
    x: 55,
    y: 0
  }, {
    name: "platformRight",
    x: 72.5,
    y: 0
  }, {
    name: "grass1",
    x: 0,
    y: 180
  }, {
    name: "grass2",
    x: 20,
    y: 180
  }, {
    name: "grass3",
    x: 20,
    y: 195
  }, {
    name: "grass4",
    x: 0,
    y: 195
  }, {
    name: "singlePlatform",
    x: 173.5,
    y: 164
  }, {
    name: "mushroom",
    x: 292,
    y: 30
  }]
});

/***/ }),

/***/ "./src/display/sheets/enemies.js":
/*!***************************************!*\
  !*** ./src/display/sheets/enemies.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  enemies: [{
    SpriteSheet: "bullet",
    width: 140,
    height: 128,
    sprites: [{
      name: "bulletLeft",
      x: 7,
      y: 1162
    }]
  }, {
    SpriteSheet: "ignoreCollisions",
    width: 43,
    height: 39,
    sprites: [{
      name: "halfFlattenedWalkLeft1",
      x: 50,
      y: 322
    }, {
      name: "halfFlattenedWalkLeft2",
      x: 9,
      y: 322
    }, {
      name: "halfFlattenedWalkRight1",
      type: "flip",
      x: 50,
      y: 322
    }, {
      name: "halfFlattenedWalkRight2",
      type: "flip",
      x: 9,
      y: 322
    }]
  }, {
    SpriteSheet: "goomba",
    width: 43,
    height: 39,
    sprites: [{
      name: "regularWalkLeft1",
      x: 50,
      y: 322
    }, {
      name: "regularWalkLeft2",
      x: 9,
      y: 322
    }, {
      name: "regularWalkRight1",
      type: "flip",
      x: 50,
      y: 322
    }, {
      name: "regularWalkRight2",
      type: "flip",
      x: 9,
      y: 322
    }]
  }]
});

/***/ }),

/***/ "./src/display/sheets/mario_small.js":
/*!*******************************************!*\
  !*** ./src/display/sheets/mario_small.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  marios: [{
    SpriteSheet: "mushroomMario",
    width: 36,
    height: 54,
    sprites: [{
      name: "idleRight",
      type: "flip",
      x: 118,
      y: -2
    }, {
      name: "walkingRight1",
      type: "flip",
      x: 148,
      y: -2
    }, {
      name: "walkingRight2",
      type: "flip",
      x: 118,
      y: 28
    }, {
      name: "idleLeft",
      x: 118,
      y: -2
    }, {
      name: "walkingLeft1",
      x: 148,
      y: -2
    }, {
      name: "walkingLeft2",
      x: 118,
      y: 28
    }, {
      name: "jumpingRight",
      type: "flip",
      x: 148,
      y: -2
    }, {
      name: "jumpingLeft",
      x: 148,
      y: -2
    }, {
      name: "fallingRight",
      type: "flip",
      x: 118,
      y: 28
    }, {
      name: "fallingLeft",
      x: 118,
      y: 28
    }]
  }, {
    SpriteSheet: "regularMario",
    width: 30,
    height: 40,
    sprites: [{
      name: "idleRight",
      x: 30,
      y: 5
    }, {
      name: "lose",
      x: 60,
      y: 5
    }, {
      name: "walkingRight",
      x: 30,
      y: 33
    }, {
      name: "idleLeft",
      type: "flip",
      x: 30,
      y: 5
    }, {
      name: "walkingLeft",
      type: "flip",
      x: 30,
      y: 33
    }, {
      name: "jumpingRight",
      x: 30,
      y: 33
    }, {
      name: "jumpingLeft",
      type: "flip",
      x: 30,
      y: 33
    }, {
      name: "transparent",
      x: 1000,
      y: 1000
    }]
  }]
});

/***/ }),

/***/ "./src/display/sprite_sheet.js":
/*!*************************************!*\
  !*** ./src/display/sprite_sheet.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteSheet; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpriteSheet = /*#__PURE__*/function () {
  function SpriteSheet(image, tileWidth, tileHeight) {
    _classCallCheck(this, SpriteSheet);

    this.image = image;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.sprites = new Map();
  }

  _createClass(SpriteSheet, [{
    key: "addSprite",
    value: function addSprite(sprite, offsetX, offsetY) {
      var clip = document.createElement("canvas");
      clip.width = this.tileWidth;
      clip.height = this.tileHeight;
      var ctx = clip.getContext("2d");
      ctx.drawImage(this.image, offsetX, offsetY, this.tileWidth, this.tileHeight, 0, 0, this.tileWidth * 2, this.tileHeight * 2);
      this.sprites.set(sprite, clip);
    }
  }, {
    key: "addSpriteFlipped",
    value: function addSpriteFlipped(sprite, offsetX, offsetY) {
      var clip = document.createElement("canvas");
      clip.width = this.tileWidth;
      clip.height = this.tileHeight;
      var ctx = clip.getContext("2d");
      ctx.translate(this.tileWidth, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(this.image, offsetX, offsetY, this.tileWidth, this.tileHeight, 0, 0, this.tileWidth * 2, this.tileHeight * 2);
      this.sprites.set(sprite, clip);
    }
  }, {
    key: "draw",
    value: function draw(sprite, ctx, x, y) {
      var spriteImg = this.sprites.get(sprite);
      ctx.drawImage(spriteImg, x, y);
    }
  }]);

  return SpriteSheet;
}();



/***/ }),

/***/ "./src/display/tile_map.js":
/*!*********************************!*\
  !*** ./src/display/tile_map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  backgrounds: [{
    tile: "groundTop",
    type: "ground",
    ranges: [[0, 125, 12, 1], [130, 18, 10, 1], [153, 25, 6, 1], // [33, 5, 9, 5],
    [202, 20, 12, 1]]
  }, {
    tile: "groundSoil",
    type: "ground",
    ranges: [[0, 125, 13, 1], [130, 18, 11, 3], [153, 25, 7, 7], // [33, 5, 10, 4],
    [202, 20, 13, 1]]
  }, {
    tile: "groundTopRightEdge",
    type: "ground",
    ranges: [// [37, 1, 9, 1],
    [78, 1, 12, 1], [110, 1, 12, 1], [135, 1, 10, 1], [145, 1, 10, 1], [158, 1, 6, 1], [222, 1, 12, 1], [177, 1, 6, 1]]
  }, {
    tile: "groundTopLeftEdge",
    type: "ground",
    ranges: [// [32, 1, 9, 1],
    [93, 1, 12, 1], [130, 1, 10, 1], [140, 1, 10, 1], [152, 1, 6, 1], [162, 1, 6, 1], [202, 1, 12, 1]]
  }, {
    tile: "groundMidRightEdge",
    type: "ground",
    ranges: [// [37, 1, 10, 2],
    [78, 1, 13, 1], [110, 1, 13, 1], [135, 1, 11, 1], [145, 1, 11, 3], [158, 1, 7, 1], [222, 1, 13, 1], [177, 1, 7, 7]]
  }, {
    tile: "groundMidLeftEdge",
    type: "ground",
    ranges: [// [32, 1, 10, 2],
    [93, 1, 13, 1], [130, 1, 11, 3], [140, 1, 11, 1], [152, 1, 7, 7], [162, 1, 7, 1], [202, 1, 13, 1]]
  }, {
    tile: "groundTopRightPatch",
    type: "ground",
    ranges: [// [37, 1, 12, 1],
    [135, 1, 12, 1], [158, 1, 8, 1]]
  }, {
    tile: "groundTopLeftPatch",
    type: "ground",
    ranges: [// [32, 1, 12, 1],
    [140, 1, 12, 1], [162, 1, 8, 1]]
  }, {
    tile: "groundTopFloatingLeft",
    type: "floatingPlatform",
    ranges: [[113, 1, 6, 1]]
  }, {
    tile: "groundTop",
    type: "floatingPlatform",
    ranges: [[114, 10, 6, 1], [136, 4, 12, 1], [159, 3, 8, 1]]
  }, {
    tile: "groundTopFloatingRight",
    type: "floatingPlatform",
    ranges: [[124, 1, 6, 1]]
  }, {
    tile: "groundTopFloatingLeftSoil",
    ranges: [[113, 1, 7, 10]]
  }, {
    tile: "groundSoil",
    ranges: [[114, 10, 7, 10]]
  }, {
    tile: "groundTopFloatingRightSoil",
    ranges: [[124, 1, 7, 10]]
  }, {
    tile: "singlePlatform",
    type: "ground",
    ranges: [[85, 1, 7, 1], [186, 7, 6, 1]]
  }, {
    tile: "singlePlatform",
    type: "ground",
    ranges: [[28, 1, 6, 1], [84, 1, 7, 1], [148, 1, 8, 1], [148, 1, 3, 1], [185, 1, 6, 1]]
  }, {
    tile: "singlePlatform",
    type: "ground",
    ranges: [[16, 5, 11, 1], [17, 4, 10, 1], [18, 3, 9, 1], [19, 2, 8, 1], [20, 1, 7, 1], [32, 1, 9, 1], [32, 2, 10, 1], [32, 3, 11, 1], [29, 1, 6, 1], [86, 1, 7, 1], [149, 1, 8, 1], [149, 1, 3, 1], [193, 1, 6, 1]]
  }, {
    tile: "grass1",
    type: "ground",
    ranges: [[45, 1, 9, 1], [64, 1, 9, 1], [98, 1, 9, 1], [169, 1, 3, 1]]
  }, {
    tile: "grass2",
    type: "ground",
    ranges: [[46, 1, 9, 1], [65, 1, 9, 1], [99, 1, 9, 1], [170, 1, 3, 1]]
  }, {
    tile: "grass3",
    type: "ground",
    ranges: [[46, 1, 10, 2], [65, 1, 10, 2], [99, 1, 10, 2], [170, 1, 4, 2]]
  }, {
    tile: "grass4",
    type: "ground",
    ranges: [[45, 1, 10, 2], [64, 1, 10, 2], [98, 1, 10, 2], [169, 1, 4, 2]]
  }, {
    tile: "singlePlatform",
    type: "ground",
    ranges: [[73, 6, 11, 1], [74, 5, 10, 1], [75, 4, 9, 1], [76, 3, 8, 1], [77, 2, 7, 1], [78, 1, 6, 1], [40, 3, 7, 1], [103, 8, 11, 1], [104, 7, 10, 1], [105, 6, 9, 1], [106, 5, 8, 1], [107, 4, 7, 1], [108, 3, 6, 1], [109, 2, 5, 1], [110, 1, 4, 1], [137, 1, 7, 1], [160, 1, 3, 1], [181, 1, 8, 1], [196, 1, 8, 1], [199, 1, 10, 1]]
  }, {
    tile: "transparent",
    ranges: [[79, 14, 12, 2], [111, 2, 12, 2], [125, 5, 12, 2], [136, 4, 10, 2], [146, 3, 10, 4], [159, 3, 6, 2]]
  }],
  enemies: [{
    name: "goomba",
    x: 900,
    y: 200,
    x1Limit: 620,
    x2Limit: 1000,
    trigger: 200
  }, {
    name: "goomba",
    x: 1900,
    y: 200,
    x1Limit: 1400,
    x2Limit: 1900,
    trigger: 600
  }, {
    name: "goomba",
    x: 1200,
    y: 200,
    x1Limit: 1100,
    x2Limit: 1900,
    trigger: 600
  }, {
    name: "goomba",
    x: 2900,
    y: 200,
    x1Limit: 2700,
    x2Limit: 3100,
    trigger: 2000
  }, {
    name: "goomba",
    x: 4000,
    y: 200,
    x1Limit: 3950,
    x2Limit: 4050,
    trigger: 3500
  }, {
    name: "goomba",
    x: 5100,
    y: 0,
    x1Limit: 4985,
    x2Limit: 5120,
    trigger: 4000
  }, {
    name: "goomba",
    x: 4700,
    y: 0,
    x1Limit: 4700,
    x2Limit: 5120,
    trigger: 4000
  }, {
    name: "bullet",
    x: 1300,
    y: 100,
    trigger: 700
  }, {
    name: "bullet",
    x: 3700,
    y: 40,
    trigger: 3300
  }, {
    name: "bullet",
    x: 4400,
    y: 150,
    trigger: 4000
  }, {
    name: "bullet",
    x: 5100,
    y: 40,
    trigger: 4700
  }, {
    name: "bullet",
    x: 4800,
    y: 40,
    trigger: 4400
  }, {
    name: "bullet",
    x: 6000,
    y: 100,
    trigger: 5600
  }]
});

/***/ }),

/***/ "./src/files.js":
/*!**********************!*\
  !*** ./src/files.js ***!
  \**********************/
/*! exports provided: backgroundImage, backgroundFirstLayerImage, marioImage, enemiesImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return backgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundFirstLayerImage", function() { return backgroundFirstLayerImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marioImage", function() { return marioImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enemiesImage", function() { return enemiesImage; });
/* harmony import */ var _imgs_background_assets_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/background_assets.png */ "./src/imgs/background_assets.png");
/* harmony import */ var _imgs_background_assets_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imgs_background_assets_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imgs_sprites_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/sprites.png */ "./src/imgs/sprites.png");
/* harmony import */ var _imgs_sprites_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imgs_sprites_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imgs_enemies_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/enemies.png */ "./src/imgs/enemies.png");
/* harmony import */ var _imgs_enemies_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imgs_enemies_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_backgrounds_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/backgrounds-2.png */ "./src/imgs/backgrounds-2.png");
/* harmony import */ var _imgs_backgrounds_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_backgrounds_2_png__WEBPACK_IMPORTED_MODULE_3__);




var backgroundImage = new Image();
backgroundImage.src = _imgs_background_assets_png__WEBPACK_IMPORTED_MODULE_0___default.a;
var backgroundFirstLayerImage = new Image();
backgroundFirstLayerImage.src = _imgs_backgrounds_2_png__WEBPACK_IMPORTED_MODULE_3___default.a;
var marioImage = new Image();
marioImage.src = _imgs_sprites_png__WEBPACK_IMPORTED_MODULE_1___default.a;
var enemiesImage = new Image();
enemiesImage.src = _imgs_enemies_png__WEBPACK_IMPORTED_MODULE_2___default.a;

/***/ }),

/***/ "./src/game_main.js":
/*!**************************!*\
  !*** ./src/game_main.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMain; });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameMain = /*#__PURE__*/function () {
  function GameMain(game, display) {
    _classCallCheck(this, GameMain);

    this.game = game;
    this.display = display;
    this.pauseStatus = false;
    this.animate = this.animate.bind(this);
    this.run = this.run.bind(this);
  }

  _createClass(GameMain, [{
    key: "start",
    value: function start() {
      this.game.mario.pos.set(100, 250);
      this.lastTime = 0;
      this.accumulatedTime = 0;
      this.display.loadWorld();
      var controller = new _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      controller.listenForInput();
      this.deltaTime = 1 / 60;
      this.run();
    }
  }, {
    key: "run",
    value: function run() {
      this.pauseStatus = false;
      this.id = requestAnimationFrame(this.animate);
    }
  }, {
    key: "animate",
    value: function animate(time) {
      this.accumulatedTime += (time - this.lastTime) / 1000;
      if (this.accumulatedTime > 1) this.accumulatedTime = 1;

      while (this.accumulatedTime > this.deltaTime) {
        this.game.update(this.deltaTime);
        this.display.drawWorld(this.game);
        this.accumulatedTime -= this.deltaTime;
      }

      this.lastTime = time;
      this.id = requestAnimationFrame(this.animate);
    }
  }]);

  return GameMain;
}();



/***/ }),

/***/ "./src/game_properties/behaviors/auto_walk.js":
/*!****************************************************!*\
  !*** ./src/game_properties/behaviors/auto_walk.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoMove; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AutoMove = /*#__PURE__*/function (_Behavior) {
  _inherits(AutoMove, _Behavior);

  var _super = _createSuper(AutoMove);

  function AutoMove() {
    var _this;

    var moveLeftLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var moveRightLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9999999;

    _classCallCheck(this, AutoMove);

    _this = _super.call(this, "autoMove");
    _this.moveLeftLimit = moveLeftLimit;
    _this.moveRightLimit = moveRightLimit;
    return _this;
  }

  _createClass(AutoMove, [{
    key: "update",
    value: function update(object, deltaTime) {
      if (object.pos.x < this.moveLeftLimit) {
        object.vel.x = object.speed * deltaTime;
      } else if (object.pos.x > this.moveRightLimit) {
        object.vel.x = -object.speed * deltaTime;
      } else if (object.vel.x === 0) {
        object.vel.x = -object.speed * deltaTime;
      }
    }
  }]);

  return AutoMove;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/behavior.js":
/*!***************************************************!*\
  !*** ./src/game_properties/behaviors/behavior.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behavior; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Behavior = /*#__PURE__*/function () {
  function Behavior(name) {
    _classCallCheck(this, Behavior);

    this.name = name;
  }

  _createClass(Behavior, [{
    key: "update",
    value: function update() {
      console.log("Need to update this behavior");
    }
  }]);

  return Behavior;
}();



/***/ }),

/***/ "./src/game_properties/behaviors/invincible.js":
/*!*****************************************************!*\
  !*** ./src/game_properties/behaviors/invincible.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Invincible; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Invincible = /*#__PURE__*/function (_Behavior) {
  _inherits(Invincible, _Behavior);

  var _super = _createSuper(Invincible);

  function Invincible() {
    var _this;

    _classCallCheck(this, Invincible);

    _this = _super.call(this, "invincible");
    _this.maxDuration = 2;
    _this.duration = 0;
    return _this;
  }

  _createClass(Invincible, [{
    key: "start",
    value: function start() {
      this.duration = this.maxDuration;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.duration = 0;
    }
  }, {
    key: "update",
    value: function update(mario, deltaTime) {
      if (this.duration > 0) {
        mario.invinciblity = true;
        this.duration -= deltaTime;
      } else {
        mario.invinciblity = false;
      }
    }
  }]);

  return Invincible;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/jump.js":
/*!***********************************************!*\
  !*** ./src/game_properties/behaviors/jump.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jump; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Jump = /*#__PURE__*/function (_Behavior) {
  _inherits(Jump, _Behavior);

  var _super = _createSuper(Jump);

  function Jump() {
    var _this;

    _classCallCheck(this, Jump);

    _this = _super.call(this, "jump");
    _this.maxDuration = 0.25;
    _this.vel = 300;
    _this.duration = 0;
    _this.isGrounded = true;
    _this.audio = new Audio("./jumping.wav");
    return _this;
  }

  _createClass(Jump, [{
    key: "start",
    value: function start() {
      if (this.isGrounded) this.duration = this.maxDuration;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.isGrounded = false;
      this.duration = 0;
    }
  }, {
    key: "update",
    value: function update(mario, deltaTime) {
      if (mario.frame === "lose") return;

      if (this.duration > 0) {
        if (mario.bouncing === false) {
          this.audio.play();
        }

        mario.vel.y = -this.vel;
        this.duration -= deltaTime;
      }

      if (mario.isGrounded) {
        this.isGrounded = true;
      }
    }
  }]);

  return Jump;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/lose.js":
/*!***********************************************!*\
  !*** ./src/game_properties/behaviors/lose.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lose; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Lose = /*#__PURE__*/function (_Behavior) {
  _inherits(Lose, _Behavior);

  var _super = _createSuper(Lose);

  function Lose() {
    var _this;

    _classCallCheck(this, Lose);

    _this = _super.call(this, "jumpOnLose");
    _this.maxDuration = 0.3;
    _this.vel = 300;
    _this.duration = 0;
    _this.audio = new Audio("./game-over.mp3");
    return _this;
  }

  _createClass(Lose, [{
    key: "start",
    value: function start() {
      this.duration = this.maxDuration;
    }
  }, {
    key: "update",
    value: function update(mario, deltaTime) {
      if (this.duration > 0) {
        var background = document.getElementById("audio");

        if (!background.paused) {
          background.pause();
          background.currentTime = 0;
        }

        this.audio.play();
        mario.vel.y = -this.vel;
        this.duration -= deltaTime;
      }
    }
  }]);

  return Lose;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/nogravity.js":
/*!****************************************************!*\
  !*** ./src/game_properties/behaviors/nogravity.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IgnoreGravity; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IgnoreGravity = /*#__PURE__*/function (_Behavior) {
  _inherits(IgnoreGravity, _Behavior);

  var _super = _createSuper(IgnoreGravity);

  function IgnoreGravity() {
    var _this;

    _classCallCheck(this, IgnoreGravity);

    _this = _super.call(this, "ignoreGravity");
    _this.gravity = 20;
    return _this;
  }

  _createClass(IgnoreGravity, [{
    key: "update",
    value: function update(object, deltaTime) {
      object.vel.y -= this.gravity;
    }
  }]);

  return IgnoreGravity;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/spawn_enemies.js":
/*!********************************************************!*\
  !*** ./src/game_properties/behaviors/spawn_enemies.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpawnEnemies; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SpawnEnemies = /*#__PURE__*/function (_Behavior) {
  _inherits(SpawnEnemies, _Behavior);

  var _super = _createSuper(SpawnEnemies);

  function SpawnEnemies(gameObjects, enemies) {
    var _this;

    _classCallCheck(this, SpawnEnemies);

    _this = _super.call(this, "spawnEnemies");
    _this.enemies = enemies;
    _this.gameObjects = gameObjects;
    return _this;
  }

  _createClass(SpawnEnemies, [{
    key: "update",
    value: function update(mario, deltaTime) {
      var _this2 = this;

      this.enemies.forEach(function (enemy) {
        if (mario.pos.x >= enemy.trigger) {
          _this2.spawnEnemy(enemy);
        }
      });
    }
  }, {
    key: "addEnemy",
    value: function addEnemy(enemy) {
      this.enemyPositions.add(enemy);
    }
  }, {
    key: "spawnEnemy",
    value: function spawnEnemy(enemy) {
      this.gameObjects.add(enemy);
      this.enemies["delete"](enemy);
    }
  }]);

  return SpawnEnemies;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/stomp.js":
/*!************************************************!*\
  !*** ./src/game_properties/behaviors/stomp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stomp; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Stomp = /*#__PURE__*/function (_Behavior) {
  _inherits(Stomp, _Behavior);

  var _super = _createSuper(Stomp);

  function Stomp() {
    var _this;

    _classCallCheck(this, Stomp);

    _this = _super.call(this, "stomp");
    _this.audio = new Audio("./fire.mp3");
    _this.bouncing = false;
    _this.bounceSpeed = 400;
    return _this;
  }

  _createClass(Stomp, [{
    key: "bounce",
    value: function bounce() {
      this.bouncing = true;
    }
  }, {
    key: "update",
    value: function update(mario) {
      if (this.bouncing) {
        mario.bouncing = true;
        this.audio.play();
        mario.vel.y = -this.bounceSpeed;
        this.bouncing = false;
        mario.bouncing = false;
      }
    }
  }]);

  return Stomp;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/behaviors/walk.js":
/*!***********************************************!*\
  !*** ./src/game_properties/behaviors/walk.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Walk; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./src/game_properties/behaviors/behavior.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Walk = /*#__PURE__*/function (_Behavior) {
  _inherits(Walk, _Behavior);

  var _super = _createSuper(Walk);

  function Walk() {
    var _this;

    _classCallCheck(this, Walk);

    _this = _super.call(this, "walk");
    _this.leftDirection = 0;
    _this.rightDirection = 0;
    _this.speed = 10000;
    _this.distance = 0;
    return _this;
  }

  _createClass(Walk, [{
    key: "update",
    value: function update(mario, deltaTime) {
      if (mario.frame === "lose") return;
      mario.vel.x = (this.leftDirection + this.rightDirection) * this.speed * deltaTime;
      this.distance += mario.vel.x;
    }
  }]);

  return Walk;
}(_behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/characters/bullet.js":
/*!**************************************************!*\
  !*** ./src/game_properties/characters/bullet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/game_properties/characters/object.js");
/* harmony import */ var _behaviors_nogravity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviors/nogravity */ "./src/game_properties/behaviors/nogravity.js");
/* harmony import */ var _behaviors_auto_walk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../behaviors/auto_walk */ "./src/game_properties/behaviors/auto_walk.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Bullet = /*#__PURE__*/function (_GameObject) {
  _inherits(Bullet, _GameObject);

  var _super = _createSuper(Bullet);

  function Bullet(xSpawn, ySpawn) {
    var _this;

    _classCallCheck(this, Bullet);

    _this = _super.call(this);

    _this.pos.set(xSpawn, ySpawn);

    _this.initialPos = xSpawn;
    _this.width = 140;
    _this.height = 128;

    _this.addBehavior(new _behaviors_nogravity__WEBPACK_IMPORTED_MODULE_1__["default"]());

    _this.addBehavior(new _behaviors_auto_walk__WEBPACK_IMPORTED_MODULE_2__["default"]());

    _this.frame = "bulletLeft";
    _this.status = "ignoreCollisions";
    _this.audio = new Audio("./hit.mp3");
    _this.falling = false;
    _this.speed = 10000;
    return _this;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update(deltaTime, totalTime, objects) {
      var _this2 = this;

      this.behaviors.forEach(function (behavior) {
        behavior.update(_this2, deltaTime);
      });
      if (this.pos.x < this.initialPos - 1200 || this.pos.y > 400) objects["delete"](this);
    }
  }, {
    key: "collides",
    value: function collides(mario) {
      if (mario.invinciblity) return;

      if (!this.falling) {
        if (mario.vel.y > this.vel.y && mario.getBottom() > this.getTop() && mario.getLastBottom() <= this.getTop()) {
          mario.stomp.bounce();
          this.vel.y += 40;
          this.vel.x = 0;
          this.removeBehavior("ignoreGravity");
          this.removeBehavior("autoMove");
          this.falling = true;
        } else {
          mario.lives -= 1;

          if (mario.lives === 1) {
            this.audio.play();
          }

          mario.invincible.start();
          mario.invinciblity = true;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, spriteSheets, camera) {
      spriteSheets.get("bullet").draw(this.frame, ctx, this.pos.x - camera.pos.x, this.pos.y - camera.pos.y);
    }
  }]);

  return Bullet;
}(_object__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/characters/goomba.js":
/*!**************************************************!*\
  !*** ./src/game_properties/characters/goomba.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Goomba; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/game_properties/characters/object.js");
/* harmony import */ var _behaviors_auto_walk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviors/auto_walk */ "./src/game_properties/behaviors/auto_walk.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Goomba = /*#__PURE__*/function (_ObjectEntity) {
  _inherits(Goomba, _ObjectEntity);

  var _super = _createSuper(Goomba);

  function Goomba(xSpawn, ySpawn, moveLeftLimit, moveRightLimit) {
    var _this;

    _classCallCheck(this, Goomba);

    _this = _super.call(this);

    _this.pos.set(xSpawn, ySpawn);

    _this.audio = new Audio("./hit.mp3");
    _this.width = 43;
    _this.height = 40;
    _this.speed = 8000;
    _this.falling = false;

    _this.addBehavior(new _behaviors_auto_walk__WEBPACK_IMPORTED_MODULE_1__["default"](moveLeftLimit, moveRightLimit));

    _this.stompedCount = 0;
    _this.status = "goomba";
    _this.facing = "left";
    _this.frame = "regularWalkLeft1";
    _this.regularWalkLeftFrames = ["regularWalkLeft1", "regularWalkLeft2"];
    _this.regularWalkRightFrames = ["regularWalkRight1", "regularWalkRight2"];
    _this.halfWalkLeftFrames = ["halfFlattenedWalkLeft1", "halfFlattenedWalkLeft2"];
    _this.halfWalkRightFrames = ["halfFlattenedWalkRight1", "halfFlattenedWalkRight2"];
    return _this;
  }

  _createClass(Goomba, [{
    key: "collides",
    value: function collides(mario) {
      if (mario.invinciblity) return;

      if (this.stompedCount !== 2 && this.status !== "ignoreCollisions") {
        if (mario.vel.y > this.vel.y) {
          mario.stomp.bounce();
          this.stompedCount += 1;
        } else {
          mario.lives -= 1;

          if (mario.lives === 1) {
            this.audio.play();
          }

          mario.invincible.start();
          mario.invinciblity = true;
        }
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime, totalTime, objects) {
      var _this2 = this;

      this.behaviors.forEach(function (behavior) {
        behavior.update(_this2, deltaTime);
      });
      this.decideStatus(totalTime, objects);
    }
  }, {
    key: "decideStatus",
    value: function decideStatus(totalTime) {
      if (this.stompedCount === 1) {
        this.status = "ignoreCollisions";
        this.width = 43;
        this.height = 34;
        this.facing = this.vel.x > 0 ? "right" : "left";
        var frames = this.facing === "left" ? this.halfWalkLeftFrames : this.halfWalkRightFrames;
        this.frame = this.animationFrame(frames, totalTime, 0.2);
      } else if (this.stompedCount === 0) {
        this.facing = this.vel.x > 0 ? "right" : "left";

        var _frames = this.facing === "left" ? this.regularWalkLeftFrames : this.regularWalkRightFrames;

        this.frame = this.animationFrame(_frames, totalTime, 0.2);
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, spriteSheets, camera) {
      spriteSheets.get(this.status).draw(this.frame, ctx, this.pos.x - camera.pos.x, this.pos.y - camera.pos.y);
    }
  }]);

  return Goomba;
}(_object__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/characters/mario.js":
/*!*************************************************!*\
  !*** ./src/game_properties/characters/mario.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mario; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/game_properties/characters/object.js");
/* harmony import */ var _behaviors_jump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviors/jump */ "./src/game_properties/behaviors/jump.js");
/* harmony import */ var _behaviors_walk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../behaviors/walk */ "./src/game_properties/behaviors/walk.js");
/* harmony import */ var _behaviors_lose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../behaviors/lose */ "./src/game_properties/behaviors/lose.js");
/* harmony import */ var _behaviors_stomp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../behaviors/stomp */ "./src/game_properties/behaviors/stomp.js");
/* harmony import */ var _behaviors_invincible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../behaviors/invincible */ "./src/game_properties/behaviors/invincible.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Mario = /*#__PURE__*/function (_ObjectEntity) {
  _inherits(Mario, _ObjectEntity);

  var _super = _createSuper(Mario);

  function Mario() {
    var _this;

    _classCallCheck(this, Mario);

    _this = _super.call(this);
    _this.width = 29;
    _this.height = 40;
    _this.lives = 2;
    _this.bouncing = false;
    _this.invinciblity = false;

    _this.addBehavior(new _behaviors_jump__WEBPACK_IMPORTED_MODULE_1__["default"]());

    _this.Lose = new _behaviors_lose__WEBPACK_IMPORTED_MODULE_3__["default"]();

    _this.addBehavior(_this.Lose);

    _this.addBehavior(new _behaviors_walk__WEBPACK_IMPORTED_MODULE_2__["default"]());

    _this.addBehavior(new _behaviors_stomp__WEBPACK_IMPORTED_MODULE_4__["default"]());

    _this.addBehavior(new _behaviors_invincible__WEBPACK_IMPORTED_MODULE_5__["default"]());

    _this.status = "idle";
    _this.mario = "regularMario";
    _this.facing = "right";
    _this.frame = "idleRight";
    _this.walkRightFrames = ["walkingRight", "idleRight"];
    _this.walkRightFramesMushroom = ["walkingRight1", "walkingRight2", "idleRight"];
    _this.walkLeftFrames = ["walkingLeft", "idleLeft"];
    _this.walkLeftFramesMushroom = ["walkingLeft1", "walkingLeft2", "idleLeft"];
    return _this;
  }

  _createClass(Mario, [{
    key: "update",
    value: function update(deltaTime, totalTime) {
      var _this2 = this;

      this.behaviors.forEach(function (behavior) {
        behavior.update(_this2, deltaTime);
      });
      this.decideStatus(totalTime);
    }
  }, {
    key: "decideStatus",
    value: function decideStatus(totalTime) {
      if (this.pos.y > 400) this.lives = 0;

      if (this.lives === 0) {
        this.width = 26;
        this.height = 33;
        this.mario = "regularMario";
        this.status = "ignoreCollisions";
        if (this.status === "ignoreCollisions" && this.frame !== "lose") this.Lose.start();
        this.frame = "lose";
        return;
      } else if (this.lives === 1) {
        this.width = 26;
        this.height = 33;
        this.mario = "regularMario";
      } else if (this.lives === 2) {
        this.width = 34;
        this.height = 56;
        this.mario = "mushroomMario";
      }

      if (!this.isGrounded) {
        if (this.mario === "regularMario" || this.vel.y < 0) {
          this.status = "jumping";

          if (this.vel.x > 0) {
            this.facing = "right";
            this.frame = "jumpingRight";
          } else if (this.vel.x === 0) {
            this.frame = this.facing === "right" ? "jumpingRight" : "jumpingLeft";
          } else {
            this.facing = "left";
            this.frame = "jumpingLeft";
          }
        } else {
          this.status = "falling";

          if (this.vel.x > 0) {
            this.facing = "right";
            this.frame = "fallingRight";
          } else if (this.vel.x === 0) {
            this.frame = this.facing === "right" ? "fallingRight" : "fallingLeft";
          } else {
            this.facing = "left";
            this.frame = "fallingLeft";
          }
        }
      } else if (this.vel.x > 0) {
        this.status = "walking";
        this.facing = "right";
        var totalDistance = Math.abs(this.walk.distance / 800);

        if (this.lives === 2) {
          var frameIdx = Math.floor(totalDistance % this.walkRightFramesMushroom.length);
          this.frame = this.walkRightFramesMushroom[frameIdx];
        } else {
          var _frameIdx = Math.floor(totalDistance % this.walkRightFrames.length);

          this.frame = this.walkRightFrames[_frameIdx];
        }
      } else if (this.vel.x < 0) {
        this.status = "walking";
        this.facing = "left";

        var _totalDistance = Math.abs(this.walk.distance / 800);

        if (this.lives === 2) {
          var _frameIdx2 = Math.floor(_totalDistance % this.walkLeftFramesMushroom.length);

          this.frame = this.walkLeftFramesMushroom[_frameIdx2];
        } else {
          var _frameIdx3 = Math.floor(_totalDistance % this.walkLeftFrames.length);

          this.frame = this.walkLeftFrames[_frameIdx3];
        }
      } else {
        if (this.status === "idle") return;

        if (this.facing === "right") {
          this.frame = "idleRight";
          this.status = "idle";
        } else if (this.facing === "left") {
          this.frame = "idleLeft";
          this.status = "idle";
        }
      }

      if (this.invinciblity && this.lives === 1) {
        if (Math.floor(totalTime / 0.2) % 2) this.frame = "transparent";
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, spriteSheets, camera) {
      ctx.stroke();
      spriteSheets.get(this.mario).draw(this.frame, ctx, this.pos.x - camera.pos.x, this.pos.y - camera.pos.y);
    }
  }, {
    key: "overlaps",
    value: function overlaps(object) {
      return this.getBottom() > object.getTop() && this.getTop() < object.getBottom() && this.getLeft() < object.getRight() && this.getRight() > object.getLeft();
    }
  }]);

  return Mario;
}(_object__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/game_properties/characters/object.js":
/*!**************************************************!*\
  !*** ./src/game_properties/characters/object.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectEntity; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ObjectEntity = /*#__PURE__*/function () {
  function ObjectEntity() {
    _classCallCheck(this, ObjectEntity);

    this.behaviors = [];
    this.vel = new _util__WEBPACK_IMPORTED_MODULE_0__["Vector"]();
    this.pos = new _util__WEBPACK_IMPORTED_MODULE_0__["Vector"]();
    this.lastPos = new _util__WEBPACK_IMPORTED_MODULE_0__["Vector"]();
    this.width = 0;
    this.height = 0;
    this.isGrounded = true;
    this.frames = 0;
    this.trigger = 0;
  }

  _createClass(ObjectEntity, [{
    key: "getRight",
    value: function getRight() {
      return this.pos.x + this.width;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.pos.x;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.pos.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.pos.y + this.height;
    }
  }, {
    key: "getLastBottom",
    value: function getLastBottom() {
      return this.lastPos.y + this.height;
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      var _this = this;

      this.behaviors.forEach(function (behavior) {
        behavior.update(_this, deltaTime);
      });
    }
  }, {
    key: "removeBehavior",
    value: function removeBehavior(behavior) {
      var _this2 = this;

      this.behaviors.forEach(function (beh, idx) {
        if (beh.name === behavior) _this2.behaviors.splice(idx, 1);
      });
    }
  }, {
    key: "collides",
    value: function collides(object) {}
  }, {
    key: "addBehavior",
    value: function addBehavior(behavior) {
      this.behaviors.push(behavior);
      this[behavior.name] = behavior;
    }
  }, {
    key: "animationFrame",
    value: function animationFrame(frames, totalTime, frameRate) {
      var frameIdx = Math.floor(totalTime / frameRate) % frames.length;
      return frames[frameIdx];
    }
  }, {
    key: "draw",
    value: function draw(spriteSheets, camera) {}
  }]);

  return ObjectEntity;
}();



/***/ }),

/***/ "./src/game_properties/collider.js":
/*!*****************************************!*\
  !*** ./src/game_properties/collider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collider = /*#__PURE__*/function () {
  function Collider(tileMap) {
    _classCallCheck(this, Collider);

    this.tileMap = tileMap;
    this.tileSize = 29;
    this.handleMatchingTiles = this.handleMatchingTiles;
  }

  _createClass(Collider, [{
    key: "checkX",
    value: function checkX(gameObj) {
      if (gameObj.status === "ignoreCollisions") return;

      if (gameObj.pos.x < 0) {
        gameObj.pos.x = 0;
        gameObj.vel.x = 0;
      }

      var x;

      if (gameObj.vel.x > 0) {
        x = gameObj.getRight();
      } else if (gameObj.vel.x < 0) {
        x = gameObj.pos.x;
      } else {
        return;
      }

      var matchingTiles = this.findMatchingTiles(x, x, gameObj.pos.y, gameObj.getBottom());
      this.handleMatchingTilesX(gameObj, matchingTiles);
    }
  }, {
    key: "handleMatchingTilesX",
    value: function handleMatchingTilesX(gameObj, matchingTiles) {
      var _this = this;

      matchingTiles.forEach(function (match) {
        if (match.tile.type === "ground") {
          _this.handleGroundCollisionX(gameObj, match);
        }
      });
    }
  }, {
    key: "handleGroundCollisionX",
    value: function handleGroundCollisionX(gameObj, match) {
      if (gameObj.vel.x > 0) {
        if (gameObj.getRight() > match.left) {
          gameObj.pos.x = match.left - gameObj.width;
          gameObj.vel.x = 0;
        }
      }

      if (gameObj.vel.x < 0) {
        if (gameObj.pos.x < match.right) {
          gameObj.pos.x = match.right;
          gameObj.vel.x = 0;
        }
      }
    }
  }, {
    key: "checkY",
    value: function checkY(gameObj) {
      var y;

      if (gameObj.vel.y === 0 || gameObj.status === "ignoreCollisions") {
        return;
      } else if (gameObj.vel.y > 0) {
        y = gameObj.getBottom();
      } else if (gameObj.vel.y < 0) {
        y = gameObj.pos.y;
      }

      var xStart = gameObj.pos.x;
      var xEnd = gameObj.getRight();
      var matchingTiles = this.findMatchingTiles(xStart, xEnd, y, y);
      this.handleMatchingTilesY(gameObj, matchingTiles);
    }
  }, {
    key: "handleMatchingTilesY",
    value: function handleMatchingTilesY(gameObj, matchingTiles) {
      var _this2 = this;

      matchingTiles.forEach(function (match) {
        if (match.tile.type === "ground") {
          _this2.handleGroundCollisionY(gameObj, match);
        } else if (match.tile.type === "floatingPlatform") {
          _this2.handleFloatingPlatformY(gameObj, match);
        }
      });
    }
  }, {
    key: "handleGroundCollisionY",
    value: function handleGroundCollisionY(gameObj, match) {
      if (gameObj.vel.y > 0) {
        if (gameObj.getBottom() > match.top) {
          gameObj.pos.y = match.top - gameObj.height;
          gameObj.vel.y = 0;
          gameObj.isGrounded = true;
        }
      }

      if (gameObj.vel.y < 0) {
        if (gameObj.pos.y < match.bottom) {
          gameObj.pos.y = match.bottom;
          gameObj.vel.y = 0;
        }
      }
    }
  }, {
    key: "handleFloatingPlatformY",
    value: function handleFloatingPlatformY(gameObj, match) {
      if (gameObj.vel.y > 0) {
        if (gameObj.getBottom() > match.top && gameObj.getLastBottom() <= match.top) {
          gameObj.pos.y = match.top - gameObj.height;
          gameObj.vel.y = 0;
          gameObj.isGrounded = true;
        }
      }
    }
  }, {
    key: "findMatchingTiles",
    value: function findMatchingTiles(left, right, top, bottom) {
      var _this3 = this;

      var matchingTiles = [];
      this.toIndexRange(left, right).forEach(function (indexX) {
        _this3.toIndexRange(top, bottom).forEach(function (indexY) {
          var match = _this3.getByIndex(indexX, indexY);

          if (match) {
            matchingTiles.push(match);
          }
        });
      });
      return matchingTiles;
    }
  }, {
    key: "toIndexRange",
    value: function toIndexRange(pos1, pos2) {
      var posMax = Math.ceil(pos2 / this.tileSize) * this.tileSize;
      var range = [];
      var pos = pos1;

      do {
        range.push(Math.floor(pos / this.tileSize));
        pos += this.tileSize;
      } while (pos < posMax);

      return range;
    }
  }, {
    key: "getByIndex",
    value: function getByIndex(indexX, indexY) {
      var tile;
      if (this.tileMap[indexX]) tile = this.tileMap[indexX][indexY];

      if (tile) {
        var left = indexX * this.tileSize;
        var right = left + this.tileSize;
        var top = indexY * this.tileSize;
        var bottom = top + this.tileSize;
        return {
          tile: tile,
          left: left,
          right: right,
          top: top,
          bottom: bottom
        };
      }
    }
  }]);

  return Collider;
}();



/***/ }),

/***/ "./src/game_properties/game.js":
/*!*************************************!*\
  !*** ./src/game_properties/game.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _characters_mario_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/mario.js */ "./src/game_properties/characters/mario.js");
/* harmony import */ var _characters_goomba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters/goomba */ "./src/game_properties/characters/goomba.js");
/* harmony import */ var _characters_bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/bullet */ "./src/game_properties/characters/bullet.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collider.js */ "./src/game_properties/collider.js");
/* harmony import */ var _display_tile_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/tile_map */ "./src/display/tile_map.js");
/* harmony import */ var _behaviors_spawn_enemies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/spawn_enemies */ "./src/game_properties/behaviors/spawn_enemies.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Game = /*#__PURE__*/function () {
  function Game(height, width) {
    _classCallCheck(this, Game);

    this.height = height;
    this.width = width;
    this.gravity = 20;
    this.objects = new Set();
    this.mario = new _characters_mario_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.objects.add(this.mario);
    this.addSpawns();
    this.restarting = false;
    this.totalTime = 0;
    this.tileMap = [];
    this.tileSize = 29;
    this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.tileMap);
    this.setTilemapLayer = this.setTilemapLayer.bind(this);
    this.cameraView = this.cameraView.bind(this);
    this.restartLevel = this.restartLevel.bind(this);
    this.checkEnemyCollision = this.checkEnemyCollision.bind(this);
    this.setTilemapLayer();
  }

  _createClass(Game, [{
    key: "update",
    value: function update(deltaTime) {
      var _this = this;

      this.objects.forEach(function (object) {
        object.update(deltaTime, _this.totalTime, _this.objects);
        object.frames = (object.frames + 1) % 60;
        object.lastPos.x = object.pos.x;
        object.lastPos.y = object.pos.y;
        object.pos.x += object.vel.x * deltaTime;

        _this.collider.checkX(object);

        object.vel.y += _this.gravity;
        object.pos.y += object.vel.y * deltaTime;

        _this.collider.checkY(object);

        if (object !== _this.mario) _this.checkEnemyCollision(object);
      });
      this.totalTime += deltaTime;
    }
  }, {
    key: "checkEnemyCollision",
    value: function checkEnemyCollision(object) {
      if (this.mario.overlaps(object)) {
        object.collides(this.mario);
        this.mario.collides(object);
      }
    }
  }, {
    key: "addSpawns",
    value: function addSpawns() {
      var enemies = new Set();
      var newEnemy;
      _display_tile_map__WEBPACK_IMPORTED_MODULE_4__["default"].enemies.forEach(function (enemy) {
        if (enemy.name === "goomba") {
          newEnemy = new _characters_goomba__WEBPACK_IMPORTED_MODULE_1__["default"](enemy.x, enemy.y, enemy.x1Limit, enemy.x2Limit);
        } else if (enemy.name === "bullet") {
          newEnemy = new _characters_bullet__WEBPACK_IMPORTED_MODULE_2__["default"](enemy.x, enemy.y);
        }

        newEnemy.trigger = enemy.trigger;
        enemies.add(newEnemy);
      });
      this.mario.addBehavior(new _behaviors_spawn_enemies__WEBPACK_IMPORTED_MODULE_5__["default"](this.objects, enemies));
    }
  }, {
    key: "setTilemapLayer",
    value: function setTilemapLayer() {
      var _this2 = this;

      _display_tile_map__WEBPACK_IMPORTED_MODULE_4__["default"].backgrounds.forEach(function (background) {
        background.ranges.forEach(function (range) {
          var _range = _slicedToArray(range, 4),
              xStart = _range[0],
              xLength = _range[1],
              yStart = _range[2],
              yLength = _range[3];

          var xEnd = xStart + xLength;
          var yEnd = yStart + yLength;

          for (var x = xStart; x < xEnd; x++) {
            for (var y = yStart; y < yEnd; y++) {
              _this2.setTile(x, y, {
                name: background.tile,
                type: background.type
              });
            }
          }
        });
      });
    }
  }, {
    key: "restartLevel",
    value: function restartLevel(camera) {
      if (this.mario.status === "ignoreCollisions" && !this.restarting) {
        this.restarting = true;
        var game = this;
        setTimeout(function () {
          game.removeEnemies();
          game.mario.lives = 2;
          game.mario.pos.set(145, 100);
          game.mario.invincible.cancel();
          camera.pos.x = 0;
          var audio = document.getElementById("audio");

          if (!audio.paused) {
            setTimeout(function () {
              audio.play();
            }, 800);
          }

          game.addSpawns();
          game.restarting = false;
        }, 2500);
      }
    }
  }, {
    key: "removeEnemies",
    value: function removeEnemies() {
      var _this3 = this;

      this.objects.forEach(function (object) {
        if (object !== _this3.mario) _this3.objects["delete"](object);
      });
    }
  }, {
    key: "setTile",
    value: function setTile(x, y, tile) {
      if (!this.tileMap[x]) this.tileMap[x] = [];
      this.tileMap[x][y] = tile;
    }
  }, {
    key: "getTile",
    value: function getTile(x, y) {
      if (this.tileMap[x]) return this.tileMap[x][y];
    }
  }, {
    key: "cameraView",
    value: function cameraView(camera, backgroundSpriteSheet) {
      var _this4 = this;

      this.restartLevel(camera);

      if (this.mario.pos.x > 310 && this.mario.frame !== "lose") {
        camera.pos.x = this.mario.pos.x - 300;
      }

      var cameraPanel = document.createElement("canvas");
      cameraPanel.width = camera.width + this.tileSize;
      cameraPanel.height = camera.height;
      var panelCtx = cameraPanel.getContext("2d");
      var columnStart = this.getTileIndex(camera.pos.x);
      var columnEnd = columnStart + this.getTileIndex(camera.width);

      var _loop = function _loop(x) {
        var column = _this4.tileMap[x];

        if (column) {
          column.forEach(function (tile, y) {
            if (tile.name === "mysteryBox") {
              var boxAnimation = ["mysteryBox1", "mysteryBox2", "mysteryBox3", "mysteryBox4"];
              var frame = Math.floor(_this4.totalTime / 0.15) % boxAnimation.length;
              backgroundSpriteSheet.draw(boxAnimation[frame], panelCtx, (x - columnStart) * _this4.tileSize, y * _this4.tileSize);
            } else {
              backgroundSpriteSheet.draw(tile.name, panelCtx, (x - columnStart) * _this4.tileSize, y * _this4.tileSize);
            }
          });
        }
      };

      for (var x = columnStart; x <= columnEnd; x++) {
        _loop(x);
      }

      var marioPosX = this.getTileIndex(this.mario.pos.x) + 1;
      var marioPosY = this.getTileIndex(this.mario.pos.y) + 1;
      var tileName = this.getTile(marioPosX, marioPosY);
      if (tileName) tileName = tileName.name;
      return cameraPanel;
    }
  }, {
    key: "getTileIndex",
    value: function getTileIndex(pos) {
      return Math.floor(pos / this.tileSize);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/imgs/background_assets.png":
/*!****************************************!*\
  !*** ./src/imgs/background_assets.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "files/background_assets.png";

/***/ }),

/***/ "./src/imgs/backgrounds-2.png":
/*!************************************!*\
  !*** ./src/imgs/backgrounds-2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "files/backgrounds-2.png";

/***/ }),

/***/ "./src/imgs/enemies.png":
/*!******************************!*\
  !*** ./src/imgs/enemies.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "files/enemies.png";

/***/ }),

/***/ "./src/imgs/sprites.png":
/*!******************************!*\
  !*** ./src/imgs/sprites.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "files/sprites.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_properties_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_properties/game.js */ "./src/game_properties/game.js");
/* harmony import */ var _game_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_main.js */ "./src/game_main.js");
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.js */ "./src/display/display.js");



document.addEventListener("DOMContentLoaded", function () {
  var height = 400;
  var width = 700;
  var canvas = document.getElementById("canvas");
  var game = new _game_properties_game_js__WEBPACK_IMPORTED_MODULE_0__["default"](height, width);
  var display = new _display_display_js__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, height, width);
  display.loadWorld();
  var gameMain = new _game_main_js__WEBPACK_IMPORTED_MODULE_1__["default"](game, display);
  var modal = document.getElementById("modal");
  var button = document.getElementById("start-btn");
  var audio = document.getElementById("audio");
  var play = false;
  button.addEventListener("click", function () {
    modal.style.display = "none";
    canvas.style.display = "block";
    audio.play();
    play = true; // audio.pause();

    gameMain.start();
  });
  document.addEventListener("keydown", function (e) {
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

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map