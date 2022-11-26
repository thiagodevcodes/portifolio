const buttonMobile = document.getElementById("button-mobile");
const menuMobile = document.getElementById("menu-mobile");

let stats = true; 

buttonMobile.addEventListener("click", () => {

    if(stats == true) {
        menuMobile.style.left = "0px";
    } else {
        menuMobile.style.left = "-100%"
    }
    
    stats = !stats
})