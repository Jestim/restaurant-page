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

// clearMain();

// loadMenu();

// loadContact();