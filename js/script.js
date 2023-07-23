let profilePic = document.querySelector(".icon");
let opC = document.querySelector(".opC");
let startBtn = document.querySelector("#btn1");
let ms1 = document.querySelector(".ms1");
let navBar = document.querySelector(".navbar");

//ONLOAD PAGE STARTS HERE
window.onload = function() {
    opC.style.display = "flex";
    opC.classList.add("fadeDown");
}

//AUDIO FUNCTIONS HERE
const startPlay = function pageAudio() {
    var audio = document.getElementById("pageAudio");
    audio.play();
}

const stopPlay = function stopAudio() {
    var audio = document.getElementById("pageAudio");
    audio.pause();
}

// START BTN ACTION HERE
const introAnimation = function() {
    opC.classList.add("fadeSideOut");

    startPlay();

    const fadeMainIn = function() {
        navBar.style.display = "flex"; 
        ms1.classList.add("fadeDown");
        navBar.classList.add("fadeDown");
    }

    setTimeout(fadeMainIn, 750);

    const rmOPC = function() {
        opC.classList.remove("fadeDown");
        opC.style.display = "none";
    }
    setTimeout(rmOPC, 1000);
};

startBtn.addEventListener("click", introAnimation);
