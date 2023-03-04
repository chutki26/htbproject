const progressBar = document.querySelector(".circular-bar");
const value = document.querySelector(".value");

let progressStartValue = 0;
let progressBarEndValue = 100; //Your value

let speed = 20;

let progress = setInterval(() => {
    progressStartValue++;
    value.textContent = `${progressStartValue}%`;
    progressBar.style.background = `conic-gradient(#fff ${
        progressStartValue*3.6
    }deg, #ccd5ae ${progressStartValue*3.6}deg)`;

    if(progressStartValue == progressBarEndValue){
        clearInterval(progress);
    }
}, speed);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }