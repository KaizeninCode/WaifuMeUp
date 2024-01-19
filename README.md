# WaifuMeUp
Author: Phil Wekullo (`github.com/KaizeninCode`)
License: None

Let's face it; we've all had moments of weakness. Moments where you're minding your business then temptations decide to test your faith and self-control. This here is the true embodiment of those heart-wrenching, nerve-wracking and loin-stirring temptations. Welcome to WaifuMeUp, where we let all our naughty imaginations run wild.

WaifuMeUp (whose name is a clever spin on the English phrase 'Wife Me Up') is a web application that serves to fuel your less-than-chaste desires by displaying racy images of Japanese Waifus. Built using HTML, CSS and JavaScript, the application employs various techniques, including interaction with a RESTful API (see `db.json` file. Initial API integration/interaction proved futile, so I opted to use a local server).

The project has a simple and straightforward structure, with one file for HTML, CSS and JavaScript. Also included is a db.json file from which the local server gets its data. Let's take a look at the inner workings of the web app.

# How it works
The webpage has two sections that are easily accessible from a navigation bar on the landing page. The navigation bar (navbar) has a logo, two links (one for each section of the page) and a light/dark mode toggle icon (icons from `www.fontawesome.com`). The navbar is also fixed to the top of the webpage for the sake of accesibility. Because clicking on the nav links takes you to a different section of the webpage, the navbar was affixed to the top of the page for easy access.

This script was originally designed to be used with the `waifu.me` API (https://waifu.im/docs) but I opted to use a local server instead. Similar content and all. 

All the styling has been done in the `style.css` file. 

# Project Setup

## Prerequisites
1. VS Code
2. Node.js
3. NPM
4. JSON Server
5. A REST API (optional) for testing purposes

## Installation Instructions
1. Fork and clone this repository here: `https://github.com/KaizeninCode/WaifuMeUp`. To clone the repo to your machine, open your terminal and navigate to your desired directory. Then, run this command: `git clone git@github.com:KaizeninCode/WaifuMeUp.git`
2. Next, run `cd WaifuMeUp` to go into the newly-created directory.
3. Run `code .` to open the directory in VS Code.
4. Open the VS Code terminal and run `json-server --watch db.json` to get the local server up and   running.
