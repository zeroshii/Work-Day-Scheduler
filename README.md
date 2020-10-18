# Work-Day-Scheduler
This is a work day scheduling application that saves user input (i.e. events, To-Dos, notes) into local storage. The saved data will persist to display in their respective textareas upon browser page refresh.

See the deployed application here: [Work Day Scheduler](https://zeroshii.github.io/Work-Day-Scheduler/)

![screenshot](https://github.com/zeroshii/Code-Refactor/blob/master/screenshot.png/)

# Technologies Used

* Moment.js
* JavaScript
* HTML
* Bootstrap
* CSS
* Font Awesome icon

# Requirements

Standard business hours are presented in timeblocks and are color coded to indicate whether the hours are in the past (grey), present (red), or future (green).

# Process

All relevant documentation scripts for Bootstrap and Moment.js have been included in the HTML file `index.html`. After declaring a variable for `moment()`, the current date is formatted using `moment().format('MMM Do YYY')` as per example. It is then displayed by calling a function that uses a javascript query. 

Under a `<div class="container">` , a table of rows for each timeblock is created using Bootstrap's grid system. Each row consists of three columns: one for labelling the hour of the day, one for textarea, and one for a save button. Each button and textarea element is given a unique `id`. 

A function `checkTime()` compares all timeblocks to the `moment().format('H')` current hour using a `for loop` to give each a color code CSS class.

A function `saveText()` is called `onclick` of a button element that stores user input with js query of textarea `id` and `value`. Then they are sent as parameters for `localStorage.setItem()`.

A function `displayText()` retrieves all stored values for display using query selection and `localStorage.getItem()`.

# Credit
Developer, Garman Kwan: https://github.com/zeroshii/

# License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
