
// ЗАГОТОВКА СКРИПТА НА ВІДКРИВАННЯ МЕНЮ

document.addEventListener('DOMContentLoaded', function () {
//     // Get references to the button and menu
var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('mobile');

//     // Add a click event listener to the button
menuButton.addEventListener('click', function () {
// Toggle the "is-open" class on the menu
    menu.classList.toggle('is-open');
    //  Додаю подію на анімацію кнопки по кліку миші
    menuButton.classList.toggle('active');
});
});