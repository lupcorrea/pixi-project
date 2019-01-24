const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

// Card constants
// The dimension proportion are an approximation of B8 format
// according to ISO 216, used by poker cards.
const CARD_IMAGE = "./img/le-catitto.png";
const CARD_STACK_SIZE = 144;
const CARD_HEIGHT = SCREEN_HEIGHT / 4;
const CARD_WIDTH = 0.775 * CARD_HEIGHT;

// Aliases
let Application = PIXI.Application;
let Loader = PIXI.loader;
let Resources = PIXI.loader.resources;
let Sprite = PIXI.Sprite;

// Class for a card
class Card {
    private sprite = new Sprite();

    move(): void {

    }

    constructor (stackPosition: number) {
        app.stage.addChild (this.sprite);
        this.sprite.texture = Resources [CARD_IMAGE].texture;
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.x = (0.015 * stackPosition) + (SCREEN_WIDTH / 4);
        this.sprite.y = (-0.25 * stackPosition) + (SCREEN_HEIGHT / 2);
        this.sprite.scale.x = CARD_WIDTH / Resources [CARD_IMAGE].texture.width;
        this.sprite.scale.y = CARD_HEIGHT / Resources [CARD_IMAGE].texture.height;
    }
}

// Canvas drawing
let app = new Application();
document.body.appendChild (app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize (SCREEN_WIDTH, SCREEN_HEIGHT);

// Image loading
Loader
    .add (CARD_IMAGE)
    .load (setup);

function setup() {
    let cardStack: Array<Card> = [];
    for (var cardID = 0; cardID < CARD_STACK_SIZE; cardID++) {
        cardStack.push (new Card (cardID));
    }
}
