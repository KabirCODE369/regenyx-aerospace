// =============================
// LOADER
// =============================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},2200);

});

// =============================
// NAVBAR
// =============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// =============================
// SCROLL REVEAL
// =============================

const reveals=document.querySelectorAll("section");

function revealSections(){

const trigger=window.innerHeight*0.85;

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// =============================
// CUSTOM CURSOR
// =============================


// =============================
// MOUSE LIGHT
// =============================

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--mouse-x",e.clientX+"px");

document.body.style.setProperty("--mouse-y",e.clientY+"px");

});

// =============================
// SCROLL PROGRESS BAR
// =============================

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

// =============================
// SMOOTH ACTIVE NAV LINKS
// =============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-200;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =============================
// PARALLAX HERO
// =============================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero video");

hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

});

// =============================
// HERO FADE
// =============================

window.addEventListener("scroll",()=>{

const heroContent=document.querySelector(".hero-content");

heroContent.style.opacity=1-window.scrollY/700;

});

// =============================
// BUTTON RIPPLE
// =============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// =============================
// CONSOLE MESSAGE
// =============================

console.log("REGENYX AEROSPACE");
console.log("Engineering Beyond Failure");