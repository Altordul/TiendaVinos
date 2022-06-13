// const menuButton = document.getElementById('menu-icon')
// const menuList = document.getElementById('menu');
// menuButton.addEventListener('click', () => {
//     menuList.classList.toggle('hide')
// })

const menu = document.getElementById("menu")
const desplegable = document.getElementById("desplegable")


function desplegarMenu(x) {
    menu.classList.toggle("hide-menu");
    x.classList.toggle("hide");
}
menu.addEventListener("click",() => {
    desplegable.classList.toggle("active")
})

// function mostrarMenu(z){
//     desplegable.classList.toggle("desplegable-active");
//     z.classList.toggle("active")
// }

