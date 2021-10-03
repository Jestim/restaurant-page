import { initHome, loadHome } from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

initHome();

function clearMain() {
    const mainElement = document.querySelector('.main');
    while (mainElement.hasChildNodes()) {
        mainElement.removeChild(mainElement.firstChild);
    }
}

// Add event listeners to nav links
const navLinkButtons = document.querySelectorAll('.nav-link');

navLinkButtons.forEach(button => {
    switch (button.id) {
        case 'home':
            button.addEventListener('click', (e) => {
                clearMain();
                loadHome();
                toggleActiveNavLink(e.target);
            });
            break;
        case 'menu':
            button.addEventListener('click', (e) => {
                clearMain();
                loadMenu();
                toggleActiveNavLink(e.target);
            });
            break;
        case 'contact':
            button.addEventListener('click', (e) => {
                clearMain();
                loadContact();
                toggleActiveNavLink(e.target);
            });
            break;
        default:
            'ERROR adding event listeners';
    }

});

function toggleActiveNavLink(clickedButton) {
    navLinkButtons.forEach(button => {
        if (button.classList.contains('active')) {
            button.classList.toggle('active');
        }
    });

    clickedButton.classList.add('active');
}