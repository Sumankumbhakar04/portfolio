console.log("Portfolio Loaded!");

// ------------------------
// Loading Screen
// ------------------------

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 800);

});


// ------------------------
// Project Cards
// ------------------------

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        alert("Project details coming soon!");

    });

});


// ------------------------
// Skills Animation
// ------------------------

const skills = document.querySelector("#skills");

const bars = document.querySelectorAll(".progress");

let animated = false;

window.addEventListener("scroll", () => {

    if(animated) return;

    const pos = skills.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if(pos < screen - 100){

        animated = true;

        bars.forEach(bar => {

            if(bar.classList.contains("html"))
                bar.style.width="95%";

            if(bar.classList.contains("css"))
                bar.style.width="90%";

            if(bar.classList.contains("js"))
                bar.style.width="80%";

            if(bar.classList.contains("python"))
                bar.style.width="92%";

            if(bar.classList.contains("c"))
                bar.style.width="85%";

        });

    }

});


// ------------------------
// Lightning Effect
// ------------------------

const lightning = document.getElementById("lightning");

function flashLightning(){

    lightning.classList.add("flash");

    setTimeout(() => {

        lightning.classList.remove("flash");

    },250);

    if(Math.random()>0.6){

        setTimeout(()=>{

            lightning.classList.add("flash");

            setTimeout(()=>{

                lightning.classList.remove("flash");

            },180);

        },180);

    }

    setTimeout(flashLightning,Math.random()*5000+3000);

}

flashLightning();
