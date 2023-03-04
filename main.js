const progressBar = document.querySelector("circular-bar");
const value = document.querySelector(".value");

let progressStartValue = 0;
let progressBarEndValue = 76; //Your value

let speed = 1000;

let progress = setInterval(() => {
    progressStartValue++;
    value.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(#2A324B ${
        progressStartValue*3.6
    }deg, #767B91 ${progressStartValue*3.6}deg)`;

    if(progressStartValue === progressBarEndValue){
        clearInterval(progress);
    }
}, speed);
