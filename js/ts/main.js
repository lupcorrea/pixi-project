"use strict";
var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 512;
var Application = PIXI.Application;
var Loader = PIXI.loader;
var Resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
var app = new Application({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
document.body.appendChild(app.view);
