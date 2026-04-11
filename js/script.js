 //DOM elements
let menuButton = document.getElementById("menu-img");
let listaNav = document.getElementById("lista-nav");
let nav = document.getElementById("nav");


const barras = document.querySelectorAll(".animtaion-bar");
const curtains = document.querySelectorAll(".curtain");

//Defines the status of the nav in smartphones
let active = false;

let waitTime = 0;

menuButton.addEventListener("click", function(event) {
    active == false ? active = true : active = false;

     //Nav changer and checking on the screen size
    document.documentElement.clientWidth && window.innerWidth <= 600 ? change(active): active == false;
                  
});

//Closing if clicking in any part of the screen one the nav is opened 
listaNav.addEventListener("click", function(event) {
    active = false;

     //Nav changer and checking on the screen size
    document.documentElement.clientWidth && window.innerWidth <= 600 ? change(active): active == false;
                  
});


function change(status) {
    //changes in styles
    if (status) {
        listaNav.style.display = "flex";
        nav.style.backgroundColor = "#ffffff";  
        nav.style.width = "100vw";
    } else {
        listaNav.style.display = "none";
        nav.style.backgroundColor = "#ffffff00";
        nav.style.width = "20vw";
    }
            
}




//noticing at what time the element becomes visible fpr the user (IntersectionObserver is a native API in Chrome, Edge, Firefox and Safari, there's no need to install a library)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    }
  });
});


barras.forEach(barra => {
    observer.observe(barra);
});

//timer (not working completely)
for (let i = 0; i < curtains.length; i++) {
    setTimeout(() => {
        observer.observe(curtains[i]);
    }, i*500);

}




