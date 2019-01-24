const SCREEN_WIDTH = 512;
const SCREEN_HEIGHT = 512;

let Application = PIXI.Application;
let Loader = PIXI.loader;
let Resources = PIXI.loader.resources;
let Sprite = PIXI.Sprite;

let app = new Application ({width: SCREEN_WIDTH, height: SCREEN_HEIGHT});
document.body.appendChild (app.view);
