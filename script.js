const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {

const menu = document.querySelector(".menu")

if(menu.style.display === "flex"){
menu.style.display = "none"
}else{
menu.style.display = "flex"
menu.style.flexDirection = "column"
}

})