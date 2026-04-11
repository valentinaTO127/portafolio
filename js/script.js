 //DOM elements
let menuButton = document.getElementById("menu-img");
let listaNav = document.getElementById("lista-nav");
let nav = document.getElementById("nav");

//Defines the status of the nav in smartphones
let active = false;

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