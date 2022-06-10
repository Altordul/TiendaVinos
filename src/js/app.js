const menuButton = document.getElementById('menu-icon')
const menuList = document.getElementById('menu')
menuButton.addEventListener('click', () => {
    menuList.classList.toggle('hide')
})