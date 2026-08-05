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
    },180);

}

// Lightning every 2–6 seconds

setInterval(() =>{

    flashLightning();

},Math.random()*4000+2000);
window.addEventListener("load",function(){

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

    },1000);

});
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
