console.log("Portfolio Loaded!");

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

alert("Project details coming soon!");

});

});
const lightning = document.getElementById("lightning");

function flashLightning(){

    lightning.classList.add("flash");

    setTimeout(() => {
        lightning.classList.remove("flash");
    },250);

    // 30% chance of a second flash
    if(Math.random() > 0.7){
        setTimeout(() => {
            lightning.classList.add("flash");

            setTimeout(() => {
                lightning.classList.remove("flash");
            },180);

        },200);
    }

    // Next lightning after 2–6 seconds
    setTimeout(flashLightning, Math.random()*4000 + 2000);

}

window.onload = flashLightning;
const skills=document.querySelector("#skills");

const bars=document.querySelectorAll(".progress");

window.addEventListener("scroll",()=>{

const pos=skills.getBoundingClientRect().top;

const screen=window.innerHeight;

if(pos<screen-100){

bars.forEach(bar=>{

bar.style.width=bar.classList.contains("html")?"95%":
bar.classList.contains("css")?"90%":
bar.classList.contains("js")?"80%":
bar.classList.contains("python")?"92%":"85%";

});

}

});
