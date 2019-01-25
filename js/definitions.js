"use strict";
var Definitions;
(function (Definitions) {
    // Screen constants
    Definitions.SCREEN_WIDTH = window.innerWidth;
    Definitions.SCREEN_HEIGHT = window.innerHeight;
    // Cat Deck constants
    // The dimension proportion are an approximation of B8 format
    // according to ISO 216, used by poker cards.
    Definitions.CARD_IMAGE = "./img/le-catitto.png";
    Definitions.CARD_STACK_SIZE = 144;
    Definitions.CARD_HEIGHT = Definitions.SCREEN_HEIGHT / 4;
    Definitions.CARD_WIDTH = 0.775 * Definitions.CARD_HEIGHT;
    // UI Task constants
    Definitions.IMG_COLLECTION = [
        "./img/cat-0.png",
        "./img/cat-1.png",
        "./img/cat-2.png",
        "./img/cat-3.png",
        "./img/cat-4.png",
        "./img/cat-5.png",
    ];
    Definitions.WORD_COLLECTION = [
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
    Definitions.MAX_ELEM_NUM = 10;
    Definitions.MIN_ELEM_NUM = 3;
    Definitions.CAT_WIDTH = 256;
    Definitions.CAT_HEIGHT = 256;
})(Definitions || (Definitions = {}));
