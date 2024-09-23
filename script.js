const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    const currentDisplay = window.getComputedStyle(menu).display;
    menu.style.display = currentDisplay === 'none' ? 'block' : 'none';
});
