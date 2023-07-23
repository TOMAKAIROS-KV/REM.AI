let profilePic = document.querySelector(".icon");
let mainS1 = document.querySelector(".ms1");

//ONLOAD PAGE STARTS HERE
window.onload = function() {
    mainS1.classList.add("fadeDown");
}

profilePic.addEventListener("click", function() {
    window.location.href = '/';
});

// START BUTTON ACTION BEGINS HERE
let startBtn = document.querySelector("#btn1");

const startPlay = function pageAudio() {
    var audio = document.getElementById("pageAudio");
    audio.play();
}

const stopPlay = function stopAudio() {
    var audio = document.getElementById("pageAudio");
    audio.pause();
}

startBtn.addEventListener("click", startPlay);
