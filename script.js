
// =========================
// NAVBAR EFFECT
// =========================


const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 80){

nav.style.background =
"rgba(2,6,23,0.95)";

nav.style.boxShadow =
"0 10px 30px rgba(0,0,0,0.3)";


}

else{


nav.style.background =
"rgba(2,6,23,0.75)";


nav.style.boxShadow =
"none";


}


});





// =========================
// SCROLL REVEAL ANIMATION
// =========================


const revealElements =
document.querySelectorAll(
".section, .stat-card, .skill-card, .project-card, .experience-card"
);



const revealOnScroll = ()=>{


revealElements.forEach((element)=>{


const position =
element.getBoundingClientRect().top;


const screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


element.classList.add("show");


}



});


};



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();








// =========================
// HERO TEXT TYPING EFFECT
// =========================



const roles = [

"Technical SEO Specialist",

"AEO Optimization Expert",

"GEO & AI Search Strategist",

"Organic Growth Consultant"

];


let roleIndex = 0;

let charIndex = 0;


const heroTag =
document.querySelector(".tag");



function typeEffect(){


if(charIndex < roles[roleIndex].length){


heroTag.innerHTML =
roles[roleIndex].substring(
0,
charIndex + 1
);


charIndex++;


setTimeout(
typeEffect,
100
);


}

else{


setTimeout(()=>{


charIndex = 0;


roleIndex++;


if(roleIndex >= roles.length){

roleIndex = 0;

}


typeEffect();


},1500);



}



}



typeEffect();







// =========================
// COUNTER ANIMATION
// =========================



const counters =
document.querySelectorAll(
".stat-card h2"
);



counters.forEach(counter=>{


let target =
parseInt(
counter.innerText.replace("+","")
);



let count = 0;


const updateCounter = ()=>{


let increment =
Math.ceil(target/50);



if(count < target){


count += increment;


counter.innerText =
count + "+";


setTimeout(
updateCounter,
40
);


}

else{


counter.innerText =
target + "+";


}


};



updateCounter();



});








// =========================
// ACTIVE NAVIGATION
// =========================



const sections =
document.querySelectorAll("section");


const links =
document.querySelectorAll(
"nav ul li a"
);



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(scrollY >= sectionTop){

current =
section.getAttribute("id");

}



});



links.forEach(link=>{


link.style.color="white";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color =
"#38bdf8";


}


});


});







// =========================
// FOOTER YEAR
// =========================


const footer =
document.querySelector("footer p");


if(footer){


const year =
new Date().getFullYear();


footer.innerHTML =
`© ${year} Abhishek Raghav | SEO Portfolio`;


}
