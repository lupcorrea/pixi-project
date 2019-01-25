"use strict";
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
// Cat Deck constants
// The dimension proportion are an approximation of B8 format
// according to ISO 216, used by poker cards.
var CARD_IMAGE = "./img/le-catitto.png";
var CARD_STACK_SIZE = 144;
var CARD_HEIGHT = SCREEN_HEIGHT / 4;
var CARD_WIDTH = 0.775 * CARD_HEIGHT;
// Random UI constants
var IMG_COLLECTION = [
    "./img/cat-0.png",
    "./img/cat-1.png",
    "./img/cat-2.png",
    "./img/cat-3.png",
    "./img/cat-4.png",
    "./img/cat-5.png",
];
var WORD_COLLECTION = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua"
];
var MAX_ELEM_NUM = 10;
var MIN_ELEM_NUM = 3;
var CAT_WIDTH = 256;
var CAT_HEIGHT = 256;
// Aliases
var Application = PIXI.Application;
var Loader = PIXI.loader;
var Resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
// Class for a card
var Card = /** @class */ (function () {
    function Card(pos) {
        var _this = this;
        this.sprite = new Sprite();
        this.frameCounter = 0;
        this.startMoving = function () {
            setTimeout(_this.move, 1000 * _this.stackPosition);
        };
        this.move = function () {
            if (_this.frameCounter < 120)
                requestAnimationFrame(_this.move);
            _this.sprite.x += 4;
            _this.frameCounter++;
            //if (this.frameCounter == 120) this.sprite.y = (0.25 * this.stackPosition) + (SCREEN_HEIGHT / 2);
        };
        app.stage.addChild(this.sprite);
        this.sprite.texture = Resources[CARD_IMAGE].texture;
        this.stackPosition = pos;
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.x = (0.015 * this.stackPosition) + (SCREEN_WIDTH / 4);
        this.sprite.y = (-0.25 * this.stackPosition) + (SCREEN_HEIGHT / 2);
        this.sprite.scale.x = CARD_WIDTH / Resources[CARD_IMAGE].texture.width;
        this.sprite.scale.y = CARD_HEIGHT / Resources[CARD_IMAGE].texture.height;
    }
    return Card;
}());
// Canvas drawing
var app = new Application();
document.body.appendChild(app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
// Cat Deck functions
function catDeck() {
    Loader
        .add(CARD_IMAGE)
        .load(setupCatDeck);
}
function setupCatDeck() {
    var cardStack = [];
    for (var cardID = 0; cardID < CARD_STACK_SIZE; cardID++) {
        cardStack.push(new Card(cardID));
        cardStack[cardID].startMoving();
    }
}
// Uncomment line below for the first task
//catDeck();
var RowBuilder = /** @class */ (function () {
    function RowBuilder() {
        var _this = this;
        this.frameCounter = 0;
        this.startGeneration = function () {
            requestAnimationFrame(_this.startGeneration);
            if (_this.frameCounter == 0) {
                app.stage.removeChildren();
                _this.generateNewRow();
            }
            _this.frameCounter++;
            if (_this.frameCounter == 120)
                _this.frameCounter = 0;
        };
        this.generateNewRow = function () {
            var elemNumber = Math.floor((Math.random() * MAX_ELEM_NUM) + MIN_ELEM_NUM);
            for (var elemID = 0; elemID < elemNumber; elemID++) {
                var elemType = Math.random() < 0.5 ? 0 : 1;
                if (elemType == 0) {
                    app.stage.addChild(_this.buildImgElem(elemNumber, elemID));
                }
                else {
                    app.stage.addChild(_this.buildWordElem(elemNumber, elemID));
                }
            }
        };
        this.buildImgElem = function (elemNumber, elemID) {
            var imgID = Math.floor(Math.random() * IMG_COLLECTION.length);
            var sprite = new PIXI.Sprite(Resources[IMG_COLLECTION[imgID]].texture);
            sprite.anchor.set(0.5, 0.5);
            sprite.x = ((elemID + 1) * SCREEN_WIDTH) / (elemNumber + 1);
            sprite.y = SCREEN_HEIGHT / 2;
            sprite.scale.x = (SCREEN_WIDTH / (elemNumber * 1.5)) / Resources[IMG_COLLECTION[imgID]].texture.width;
            sprite.scale.y = sprite.scale.x;
            return sprite;
        };
        this.buildWordElem = function (elemNumber, elemID) {
            var wordID = Math.floor(Math.random() * WORD_COLLECTION.length);
            var size = Math.floor((Math.random() * 60) + 20);
            var word = new PIXI.Text(WORD_COLLECTION[wordID], new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: size,
                fill: "white"
            }));
            word.anchor.set(0.5, 0.5);
            word.x = ((elemID + 1) * SCREEN_WIDTH) / (elemNumber + 1);
            word.y = SCREEN_HEIGHT / 2;
            word.scale.x = (SCREEN_WIDTH / elemNumber) / Resources[IMG_COLLECTION[0]].texture.width;
            //word.scale.y = word.scale.x;
            return word;
        };
    }
    return RowBuilder;
}());
function uiTask() {
    Loader
        .add(IMG_COLLECTION)
        .load(setupUITask);
}
function setupUITask() {
    var builder = new RowBuilder();
    requestAnimationFrame(builder.startGeneration);
}
// Uncomment line below for the second task
uiTask();
