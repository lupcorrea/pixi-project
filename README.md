# PIXI Project

## Table of contents
1. [Introduction](#intro)
2. [About the project](#about)
    1. [Project structure](#project)
    2. [How to use it](#howto)
3. [Methodology](#methodology)
    1. [Learning PIXI.js](#learning-pixi)
    2. [Learning Typescript](#learning-ts)
    3. [Starting development](#start-dev)
    4. [Difficulties](#diffs)
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
* `dist/` _(where all the JS is located and generated)_
    * `fps_meter.js` _(script that shows the FPS meter on the top left corner of the screen)_
    * `fullscreen.js` _(script that allows fullscreen functionality)_
    * `game.js` _(where all the application logic is located - generated with TS)_
* `img/` _(where all the images are located)_
* `src/` _(where all the TS is located)_
    * `game.ts` _(TS source code for the application logic)_
* `index.html`
* `style.css`

<a id="howto"></a>
### How to use it
Currently, the user may just clone this repository and start a local web server in their machine. For instance, I used [http-server](https://www.npmjs.com/package/http-server). After that, the project will be available for usage in [127.0.0.1:8080](127.0.0.1:8080).

<a id="methodology"></a>
## Methodology
While I was learning how to play around with PIXI and TS, I found some difficulty to grasp some basic concepts, since I don't have an extensive web development background. Then, I wanted to write down an approximation of the steps I took in order to conduct this project, as well as some difficulties along the way. Hopefully, it will help other people to learn and develop fantastic applications!

<a id="learning-pixi"></a>
### Learning PIXI.js
I started to dig around this framework by their [website](http://www.pixijs.com), and then I quickly followed to [excelent tutorial written by kittykatattack](https://github.com/kittykatattack/learningPixi). This allowed me to grasp some basics. After that, I was curious about how I could integrate it with TS, and quickly found [this article showing how to build a Flappy Bird copy](https://medium.com/@davidguandev/build-a-flappy-bird-copy-with-typescript-pixi-js-890f5a07931e). After I was done with the basic tutorials, I was able to refer directly to the [API Documentation](http://pixijs.download/dev/docs/index.html).

<a id="learning-ts"></a>
### Learning Typescript
While I was trying to build a test application of my own using Typescript, I was sure there was a more... Object-Oriented approach to do so. As I said, I come from a C++ background, so project organization is a must. Luckily, TS has plenty of tools that offer just that. So I started digging around it a little bit more, but this time I went straight to the [TS Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html) (after I was done with the installation and initial setup, of course) whenever I needed.

<a id="start-dev"></a>
### Starting development
After learning some more about the two main tools I would use, it was time to put them to good use in a slightly bigger project. I started it by creating this GitHub repository, and installing the main tools in it with NPM:
```
$ npm --init
$ tsc --init
$ npm install pixi.js --save-dev
```

After that, I had created several files and folders of interest:
1. `package.json` _(generated by NPM initialization)_
2. `tsconfig.json` _(generated by TS initialization)_
3. `node_modules/` _(generated by PIXI.js installation, special attention to the typings defined in the @types subfolder)_

The first file is merely a description of the package that I am building. The second one, however, is the file that will controll all compilation process conducted by the TS compiler. I setup it according to my preferences. Finally, the PIXI installation in node_modules provided me with everything I needed to develop in PIXI and use its types in TS.

After all of it was installed, I made a simple HTML page and a CSS file to integrate everything and keep testing as I developed.

<a id="diffs"></a>
### Difficulties
I guess the main difficulty for this project was the module loading. I didn't manage to load any module, internal or external, with TS. I will research it further, but I suspect the issue is my computer. If I managed to get it working properly, I would have splitted the `game.ts` file into several others:

* `definitions.ts` _(file for all constants and aliases definitions)_
* `card.ts` _(file for the Card class definition)_
* `rowbuilder.ts` _(file for the RowBuilder class definition)_
* `firsttask.ts` _(file with the functions needed by the first demo)_
* `secondtask.ts` _(file with the functions needed by the second demo)_
* `index.ts` _(file that includes all the other files so HTML doesn't get loads of scripts)_

Due to this issue, I couldn't make a third demo as I was planning, which was some flame effects using [pixi-particles](https://github.com/pixijs/pixi-particles).

<a id="credits"></a>
## Credits and special thanks
* The custom sprites used in this project were made by [my girlfriend Elayni](https://github.com/elayni). Thanks, luv!

<a id="todo"></a>
## To-do list

* ~~Finish writing this Readme~~
* Play with particles and create an awesome flame effect!
* Integrate Webpack to this project
* Refactor code into modules
* Come up with a better UI
