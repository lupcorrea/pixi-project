const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight * 0.75;

// Cat Deck constants
// The dimension proportion are an approximation of B8 format
// according to ISO 216, used by poker cards.
const CARD_IMAGE = "./img/card_back_min.png";
const CARD_STACK_SIZE = 144;
const CARD_HEIGHT = SCREEN_HEIGHT / 4;
const CARD_WIDTH = 0.775 * CARD_HEIGHT;

// UI Task constants
const IMG_COLLECTION = [
    "./img/earth.png",
    "./img/fire.png",
    "./img/ice.png",
    "./img/water.png",
    "./img/wind.png"
];
const WORD_COLLECTION = [
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
const MAX_ELEM_NUM = 10;
const MIN_ELEM_NUM = 3;
const CAT_WIDTH = 256;
const CAT_HEIGHT = 256;

// Aliases
let Application = PIXI.Application;
let Loader = PIXI.loader;
let Resources = PIXI.loader.resources;
let Sprite = PIXI.Sprite;

// Canvas drawing
let app = new Application();
document.body.appendChild (app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize (SCREEN_WIDTH, SCREEN_HEIGHT);

// Control flag
let taskID = 0;

// Class for a card
class Card {
    private sprite = new Sprite();
    private frameCounter = 0;
    private stackPosition: number;

    startMoving = () => {
        setTimeout (this.move, 1000 * this.stackPosition);
    }

    move = () => {
        if (this.frameCounter < 120) requestAnimationFrame (this.move);

        this.sprite.x += SCREEN_WIDTH / 240;
        this.frameCounter++;
        //if (this.frameCounter == 120) this.sprite.y = (0.25 * this.stackPosition) + (SCREEN_HEIGHT / 2);
    }

    constructor (pos: number) {
        app.stage.addChild (this.sprite);
        this.sprite.texture = Resources [CARD_IMAGE].texture;
        this.stackPosition = pos;

        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.x = (0.015 * this.stackPosition) + (SCREEN_WIDTH / 4);
        this.sprite.y = (-0.25 * this.stackPosition) + (SCREEN_HEIGHT / 2);
        this.sprite.scale.x = CARD_WIDTH / Resources [CARD_IMAGE].texture.width;
        this.sprite.scale.y = CARD_HEIGHT / Resources [CARD_IMAGE].texture.height;
    }
}

// Cat Deck functions
function firstTask() {
    if (taskID != 1) {
        taskID = 1;
        if (Resources [CARD_IMAGE]) {
            setupCatDeck();
        } else {
            Loader
                .add (CARD_IMAGE)
                .load (setupCatDeck);
        }
    }
}
function setupCatDeck() {
    app.stage.removeChildren();
    let cardStack: Array<Card> = [];
    for (var cardID = 0; cardID < CARD_STACK_SIZE; cardID++) {
        cardStack.push (new Card (cardID));
        cardStack [cardID].startMoving();
    }
}

// Uncomment line below for the first task
//firstTask();

class RowBuilder {
    private frameCounter = 0;

    startGeneration = () => {
        if (taskID == 2) requestAnimationFrame (this.startGeneration);

        if (this.frameCounter == 0) {
            app.stage.removeChildren();
            this.generateNewRow();
        }

        this.frameCounter++;
        if (this.frameCounter == 120) this.frameCounter = 0;
    };

    generateNewRow = () => {
        let elemNumber = Math.floor ((Math.random() * MAX_ELEM_NUM) + MIN_ELEM_NUM);
        for (var elemID = 0; elemID < elemNumber; elemID++) {
            let elemType = Math.random() < 0.5 ? 0 : 1;
            if (elemType == 0) {
                app.stage.addChild (this.buildImgElem (elemNumber, elemID));
            } else {
                app.stage.addChild (this.buildWordElem (elemNumber, elemID));
            }
        }
    };

    buildImgElem = (elemNumber: number, elemID: number): PIXI.Sprite => {
        let imgID = Math.floor (Math.random() * IMG_COLLECTION.length);
        let sprite = new PIXI.Sprite (Resources [IMG_COLLECTION [imgID]].texture);

        sprite.anchor.set (0.5, 0.5);
        sprite.x = ((elemID+1) * SCREEN_WIDTH) / (elemNumber+1);
        sprite.y = SCREEN_HEIGHT / 2;
        sprite.scale.x = (SCREEN_WIDTH / (elemNumber*1.5)) / Resources [IMG_COLLECTION [imgID]].texture.width;
        sprite.scale.y = sprite.scale.x;

        return sprite;
    };
    buildWordElem = (elemNumber: number, elemID: number): PIXI.Text => {
        let wordID = Math.floor (Math.random() * WORD_COLLECTION.length);
        let size = Math.floor ((Math.random() * 60) + 20);
        let word = new PIXI.Text (WORD_COLLECTION [wordID], new PIXI.TextStyle ({
            fontFamily: "Arial",
            fontSize: size,
            fill: "white"
        }));

        word.anchor.set (0.5, 0.5);
        word.x = ((elemID+1) * SCREEN_WIDTH) / (elemNumber+1);
        word.y = SCREEN_HEIGHT / 2;
        word.scale.x = (SCREEN_WIDTH / elemNumber) / Resources [IMG_COLLECTION [0]].texture.width;
        //word.scale.y = word.scale.x;

        return word;
    };
}

function secondTask() {
    if (taskID != 2) {
        taskID = 2;
        if (Resources [IMG_COLLECTION [0]]) {
            setupUITask();
        } else {
            Loader
                .add (IMG_COLLECTION)
                .load (setupUITask);
        }
    }
}
function setupUITask() {
    app.stage.removeChildren();
    let builder = new RowBuilder();
    requestAnimationFrame (builder.startGeneration);
}

// Uncomment line below for the second task
// secondTask();
