"use strict";
console.log('Running my main.js');

function openVideo() {
    document.getElementById("how-video").classList.remove("static-video");
    document.getElementById("how-video").classList.add("play-video");
}

function openForm() {
    document.getElementById("pop-up-form").style.display = "block";
}

function closeForm() {
    document.getElementById("pop-up-form").style.display = "none";
}