
// ЗАГОТОВКА СКРИПТА НА ВІДКРИВАННЯ МЕНЮ

document.addEventListener('DOMContentLoaded', function () {
  //     // Get references to the button and menu
  const menuButton = document.getElementById('menuButton');
  const menu = document.getElementById('mobile');
  const anchors = document.querySelectorAll('#mobile .nav-link');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', toggleMenu);
  });

  //     // Add a click event listener to the button
  menuButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // Toggle the "is-open" class on the menu
    menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    //  Додаю подію на анімацію кнопки по кліку миші
    menuButton.classList.toggle('active');
  }
});