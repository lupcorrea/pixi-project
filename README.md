# PIXI Practice Task

## Table of contents
1. [Introduction](#intro)
2. [About the project](#about)
    1. [Project structure](#project)
    2. [How to use it](#howto)
3. [Methodology](#methodology)
4. [Credits and special thanks](#credits)
5. [To-do list](#todo)

<a id="introduction"></a>
## Introduction
This is my first project using [PIXI.js](http://www.pixijs.com) and [Typescript](https://www.typescriptlang.org). As someone coming from a C++ background, I found that TS greatly improves the whole coding process in JS by easing the learning curve created by the shift from one paradigm to another. As for PIXI, it was very noticeable the similarities between this framework and OpenGL, which I used in the past.

<a id="about"></a>
## About the project
This project consists of a simple application with two demos. 

The first one, fired when the user presses the "First Task" button, simply moves all the cards from one stack to another. One card is released from the original stack each second, and takes two seconds to arrive in the final stack. The amount of cards, as well as the card image, may be changed by altering the constants `CARD_STACK_SIZE` and `CARD_IMAGE`, respectively. The user is free to use any image, but in order to preserve the poker card dimension, I recommend that the image follows a 0.775:1 ratio. 

The second one, fired when the user presses the "Second Task" button, will display a row of elements each two seconds in the middle of the screen. Each element can be either an image or a word, chosen randomly from a pre-defined library of images and words. The amount of elements to be displayed is also chosen randomly. The images and words libraries may be changed by altering the elements in the `IMG_COLLECTION` and `WORD_COLLECTION` arrays, respectively. Also, the minimum and maximum amounts of elements to be displayed in each row may be changed by altering the constants `MIN_ELEM_NUM` and `MAX_ELEM_NUM`, respectively.

<a id="project"></a>
### Project structure
The **important** source code is organized as follows:
* dist/ _(where all the JS is located and generated)_
    * fps_meter.js _(script that shows the FPS meter on the top left corner of the screen)_
    * fullscreen.js _(script that allows fullscreen functionality)_
    * game.js _(where all the application logic is located - generated with TS)_
* img/ _(where all the images are located)_
* src/ _(where all the TS is located)_
    * game.ts _(TS source code for the application logic)_
* index.html
* style.css

<a id="howto"></a>
### How to use it
Currently, the user may just clone this repository and start a local web server in their machine. For instance, I used [http-server](https://www.npmjs.com/package/http-server). After that, the project will be available for usage in [127.0.0.1:8080](127.0.0.1:8080).

<a id="methodology"></a>
## Methodology
_To do_

<a id="credits"></a>
## Credits and special thanks
* The custom sprites used in this project were made by [my girlfriend Elayni](https://github.com/elayni). Thanks, luv!

<a id="todo"></a>
## To-do list
_To do_

* Finish writing this Readme
* Play with particles and create an awesome flame effect!
* Integrate Webpack to this project
* Refactor code into modules
* Come up with a better interface
