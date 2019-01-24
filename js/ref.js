"use strict";
var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 512;
var Application = PIXI.Application;
var Loader = PIXI.loader;
var Resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
var app = new Application({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
document.body.appendChild(app.view);
var BIRD_FRAMES = [
    "./img/bird/frame-1.png",
    "./img/bird/frame-2.png",
    "./img/bird/frame-3.png",
    "./img/bird/frame-4.png",
];
Loader
    .add(BIRD_FRAMES)
    .load(setupBird);
function setupBird() {
    var bird = new Bird();
}
var Bird = /** @class */ (function () {
    function Bird() {
        var _this = this;
        this.frameCounter = 0;
        this.sprite = new Sprite();
        this.updateTexture = function () {
            _this.sprite.texture = PIXI.loader.resources[BIRD_FRAMES[_this.frameCounter++]].texture;
            if (_this.frameCounter == BIRD_FRAMES.length)
                _this.frameCounter = 0;
        };
        app.stage.addChild(this.sprite);
        this.sprite.scale.x = 0.06;
        this.sprite.scale.y = 0.06;
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.anchor.set(0.5, 0.5);
        this.reset();
        this.sprite.texture = Resources[BIRD_FRAMES[this.frameCounter]].texture;
        setInterval(this.updateTexture, 200);
    }
    ;
    Bird.prototype.reset = function () {
        this.sprite.x = SCREEN_WIDTH / 6;
        this.sprite.y = SCREEN_HEIGHT / 2.5;
    };
    ;
    return Bird;
}());
;
