
/* Additional JavaScript */
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
	menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});