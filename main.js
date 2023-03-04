coconst progressBar = document.querySelector(".circular-bar");
const value = document.querySelector(".value");

let progressStartValue = 0;
let progressBarEndValue = 76; //Your value

let speed = 20;

let progress = setInterval(() => {
    progressStartValue++;
    value.textContent = `${progressStartValue}%`;
    progressBar.style.background = `conic-gradient(#e9edc9 ${
        progressStartValue*3.6
    }deg, #e9edc9 ${progressStartValue*3.6}deg)`;

    if(progressStartValue == progressBarEndValue){
        clearInterval(progress);
    }
}, speed);
