/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact() {
    const mainElement = document.querySelector('.main ');

    const contactElement = document.createElement('div');
    contactElement.classList.add('contact');
    mainElement.appendChild(contactElement);

    contactElement.appendChild(createContactContentElement('h2', 'Contact us!'));
    contactElement.appendChild(createContactContentElement('p', 'Call us here: <em>+1 123 456 789</em>'));
    contactElement.appendChild(createContactContentElement('p', 'Or email us: <em>Info@TheBestRestaurant.com</em>'));
}

function createContactContentElement(elementType, content) {
    const contentElement = document.createElement(elementType);
    contentElement.innerHTML = content;

    return contentElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initHome": () => (/* binding */ initHome),
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
// Dom elements
const contentElement = document.getElementById('content');

function initHome() {
    createHeader();
    createMain();
    createFooter();
}

function createHeader() {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header');
    contentElement.appendChild(headerElement);

    headerElement.appendChild(createHeaderText());

    headerElement.appendChild(createNavLinks());

}

function createHeaderText() {
    const h1Element = document.createElement('h1');
    h1Element.classList.add('header-text');
    h1Element.textContent = 'The Best Restaurant';

    return h1Element;
}

function createNavLinks() {
    const navLinksElement = document.createElement('ul');
    navLinksElement.classList.add('nav-links');

    navLinksElement.appendChild(createNavButton('Home'));
    navLinksElement.appendChild(createNavButton('Menu'));
    navLinksElement.appendChild(createNavButton('Contact'));

    return navLinksElement;
}

function createNavButton(destination) {
    const BtnElement = document.createElement('button');
    BtnElement.classList.add('nav-link');
    BtnElement.id = destination.toLowerCase();
    BtnElement.textContent = destination;

    if (destination == 'Home') {
        BtnElement.classList.add('active');
    }

    return BtnElement;
}

function createMain() {
    const mainElement = document.createElement('main');
    mainElement.classList.add('main');

    mainElement.appendChild(createMainPara1());
    mainElement.appendChild(createMainPara2());

    contentElement.appendChild(mainElement);

    return mainElement;
}

function createMainPara1() {
    const firstParaElement = document.createElement('p');
    firstParaElement.classList.add('info');
    firstParaElement.textContent = 'This is the best restaurant in the world! If you come here to eat you will remember it for the rest of your life!';

    return firstParaElement;
}

function createMainPara2() {
    const secondParaElement = document.createElement('p');
    secondParaElement.classList.add('info');
    secondParaElement.textContent = 'But be aware! If you order the wrong dish you might be very disapointed.';

    return secondParaElement;
}

function createFooter() {
    const footerElement = document.createElement('footer');
    footerElement.classList.add('footer');

    const paraElement = document.createElement('p');
    paraElement.innerHTML = 'Created by: <a href="#">Jestim</a>';

    footerElement.appendChild(paraElement);

    contentElement.appendChild(footerElement);
}

function loadHome() {
    const mainElement = document.querySelector('.main');

    mainElement.appendChild(createMainPara1());
    mainElement.appendChild(createMainPara2());
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Menu info

const dish1 = {
    header: 'Good food',
    para1: 'This is some really good food that you must try!',
    para2: 'It is super tasty and you won\'t regret it!',
}

const dish2 = {
    header: 'Even better food',
    para1: 'This is some even better food that you must try!',
    para2: 'Chosse this over the previous!',
}

const dish3 = {
    header: 'Avarage food',
    para1: 'This is some avarage food that you will think is alright',
    para2: 'It is just ok.',
}

const dish4 = {
    header: 'Not as good food',
    para1: 'This one is not as good, but still pretty ok.',
    para2: 'You might regret ordering this!',
}

const dish5 = {
    header: 'Horible food',
    para1: 'This is not tasty at all!',
    para2: 'You will defenetly regret ordering this!',
}

const dishes = [dish1, dish2, dish3, dish4, dish5];



function loadMenu() {
    const mainElement = document.querySelector('.main');
    for (let i = 0; i < dishes.length; i++) {
        mainElement.appendChild(createMenuItem(dishes[i].header, dishes[i].para1, dishes[i].para2));
    }
}

function createMenuItem(header, para1, para2) {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');

    menuItemElement.appendChild(createMenuItemContent('h2', header));
    menuItemElement.appendChild(createMenuItemContent('p', para1));
    menuItemElement.appendChild(createMenuItemContent('p', para2));

    return menuItemElement;
}

function createMenuItemContent(elementType, content) {
    const menuItemContentElement = document.createElement(elementType);
    menuItemContentElement.textContent = content;
    return menuItemContentElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.initHome)();

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
                (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
                toggleActiveNavLink(e.target);
            });
            break;
        case 'menu':
            button.addEventListener('click', (e) => {
                clearMain();
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                toggleActiveNavLink(e.target);
            });
            break;
        case 'contact':
            button.addEventListener('click', (e) => {
                clearMain();
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ25CMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDNUR2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDZDtBQUNNOztBQUV2QyxrREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFRO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFXO0FBQzNCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4gJyk7XG5cbiAgICBjb25zdCBjb250YWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0RWxlbWVudCk7XG5cbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q29udGVudEVsZW1lbnQoJ2gyJywgJ0NvbnRhY3QgdXMhJykpO1xuICAgIGNvbnRhY3RFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDb250ZW50RWxlbWVudCgncCcsICdDYWxsIHVzIGhlcmU6IDxlbT4rMSAxMjMgNDU2IDc4OTwvZW0+JykpO1xuICAgIGNvbnRhY3RFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDb250ZW50RWxlbWVudCgncCcsICdPciBlbWFpbCB1czogPGVtPkluZm9AVGhlQmVzdFJlc3RhdXJhbnQuY29tPC9lbT4nKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RDb250ZW50RWxlbWVudChlbGVtZW50VHlwZSwgY29udGVudCkge1xuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcblxuICAgIHJldHVybiBjb250ZW50RWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiLy8gRG9tIGVsZW1lbnRzXG5jb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGluaXRIb21lKCkge1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZU1haW4oKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuXG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJUZXh0KCkpO1xuXG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZMaW5rcygpKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJUZXh0KCkge1xuICAgIGNvbnN0IGgxRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10ZXh0Jyk7XG4gICAgaDFFbGVtZW50LnRleHRDb250ZW50ID0gJ1RoZSBCZXN0IFJlc3RhdXJhbnQnO1xuXG4gICAgcmV0dXJuIGgxRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TGlua3MoKSB7XG4gICAgY29uc3QgbmF2TGlua3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZMaW5rc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmtzJyk7XG5cbiAgICBuYXZMaW5rc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QnV0dG9uKCdIb21lJykpO1xuICAgIG5hdkxpbmtzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCdXR0b24oJ01lbnUnKSk7XG4gICAgbmF2TGlua3NFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ1dHRvbignQ29udGFjdCcpKTtcblxuICAgIHJldHVybiBuYXZMaW5rc0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ1dHRvbihkZXN0aW5hdGlvbikge1xuICAgIGNvbnN0IEJ0bkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBCdG5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XG4gICAgQnRuRWxlbWVudC5pZCA9IGRlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgQnRuRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc3RpbmF0aW9uO1xuXG4gICAgaWYgKGRlc3RpbmF0aW9uID09ICdIb21lJykge1xuICAgICAgICBCdG5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHJldHVybiBCdG5FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW5QYXJhMSgpKTtcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluUGFyYTIoKSk7XG5cbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XG5cbiAgICByZXR1cm4gbWFpbkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5QYXJhMSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcmFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZpcnN0UGFyYUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIGZpcnN0UGFyYUVsZW1lbnQudGV4dENvbnRlbnQgPSAnVGhpcyBpcyB0aGUgYmVzdCByZXN0YXVyYW50IGluIHRoZSB3b3JsZCEgSWYgeW91IGNvbWUgaGVyZSB0byBlYXQgeW91IHdpbGwgcmVtZW1iZXIgaXQgZm9yIHRoZSByZXN0IG9mIHlvdXIgbGlmZSEnO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFyYUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5QYXJhMigpIHtcbiAgICBjb25zdCBzZWNvbmRQYXJhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzZWNvbmRQYXJhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgc2Vjb25kUGFyYUVsZW1lbnQudGV4dENvbnRlbnQgPSAnQnV0IGJlIGF3YXJlISBJZiB5b3Ugb3JkZXIgdGhlIHdyb25nIGRpc2ggeW91IG1pZ2h0IGJlIHZlcnkgZGlzYXBvaW50ZWQuJztcblxuICAgIHJldHVybiBzZWNvbmRQYXJhRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgcGFyYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYUVsZW1lbnQuaW5uZXJIVE1MID0gJ0NyZWF0ZWQgYnk6IDxhIGhyZWY9XCIjXCI+SmVzdGltPC9hPic7XG5cbiAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhcmFFbGVtZW50KTtcblxuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluUGFyYTEoKSk7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpblBhcmEyKCkpO1xufVxuXG5leHBvcnQgeyBpbml0SG9tZSwgbG9hZEhvbWUgfTsiLCIvLyBNZW51IGluZm9cblxuY29uc3QgZGlzaDEgPSB7XG4gICAgaGVhZGVyOiAnR29vZCBmb29kJyxcbiAgICBwYXJhMTogJ1RoaXMgaXMgc29tZSByZWFsbHkgZ29vZCBmb29kIHRoYXQgeW91IG11c3QgdHJ5IScsXG4gICAgcGFyYTI6ICdJdCBpcyBzdXBlciB0YXN0eSBhbmQgeW91IHdvblxcJ3QgcmVncmV0IGl0IScsXG59XG5cbmNvbnN0IGRpc2gyID0ge1xuICAgIGhlYWRlcjogJ0V2ZW4gYmV0dGVyIGZvb2QnLFxuICAgIHBhcmExOiAnVGhpcyBpcyBzb21lIGV2ZW4gYmV0dGVyIGZvb2QgdGhhdCB5b3UgbXVzdCB0cnkhJyxcbiAgICBwYXJhMjogJ0Nob3NzZSB0aGlzIG92ZXIgdGhlIHByZXZpb3VzIScsXG59XG5cbmNvbnN0IGRpc2gzID0ge1xuICAgIGhlYWRlcjogJ0F2YXJhZ2UgZm9vZCcsXG4gICAgcGFyYTE6ICdUaGlzIGlzIHNvbWUgYXZhcmFnZSBmb29kIHRoYXQgeW91IHdpbGwgdGhpbmsgaXMgYWxyaWdodCcsXG4gICAgcGFyYTI6ICdJdCBpcyBqdXN0IG9rLicsXG59XG5cbmNvbnN0IGRpc2g0ID0ge1xuICAgIGhlYWRlcjogJ05vdCBhcyBnb29kIGZvb2QnLFxuICAgIHBhcmExOiAnVGhpcyBvbmUgaXMgbm90IGFzIGdvb2QsIGJ1dCBzdGlsbCBwcmV0dHkgb2suJyxcbiAgICBwYXJhMjogJ1lvdSBtaWdodCByZWdyZXQgb3JkZXJpbmcgdGhpcyEnLFxufVxuXG5jb25zdCBkaXNoNSA9IHtcbiAgICBoZWFkZXI6ICdIb3JpYmxlIGZvb2QnLFxuICAgIHBhcmExOiAnVGhpcyBpcyBub3QgdGFzdHkgYXQgYWxsIScsXG4gICAgcGFyYTI6ICdZb3Ugd2lsbCBkZWZlbmV0bHkgcmVncmV0IG9yZGVyaW5nIHRoaXMhJyxcbn1cblxuY29uc3QgZGlzaGVzID0gW2Rpc2gxLCBkaXNoMiwgZGlzaDMsIGRpc2g0LCBkaXNoNV07XG5cblxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oZGlzaGVzW2ldLmhlYWRlciwgZGlzaGVzW2ldLnBhcmExLCBkaXNoZXNbaV0ucGFyYTIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgcGFyYTEsIHBhcmEyKSB7XG4gICAgY29uc3QgbWVudUl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtQ29udGVudCgnaDInLCBoZWFkZXIpKTtcbiAgICBtZW51SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Db250ZW50KCdwJywgcGFyYTEpKTtcbiAgICBtZW51SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Db250ZW50KCdwJywgcGFyYTIpKTtcblxuICAgIHJldHVybiBtZW51SXRlbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtQ29udGVudChlbGVtZW50VHlwZSwgY29udGVudCkge1xuICAgIGNvbnN0IG1lbnVJdGVtQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBtZW51SXRlbUNvbnRlbnRFbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gbWVudUl0ZW1Db250ZW50RWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0SG9tZSwgbG9hZEhvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuaW5pdEhvbWUoKTtcblxuZnVuY3Rpb24gY2xlYXJNYWluKCkge1xuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICB3aGlsZSAobWFpbkVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1haW5FbGVtZW50LnJlbW92ZUNoaWxkKG1haW5FbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBuYXYgbGlua3NcbmNvbnN0IG5hdkxpbmtCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XG5cbm5hdkxpbmtCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBzd2l0Y2ggKGJ1dHRvbi5pZCkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJNYWluKCk7XG4gICAgICAgICAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmVOYXZMaW5rKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZU5hdkxpbmsoZS50YXJnZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICAgICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlTmF2TGluayhlLnRhcmdldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgJ0VSUk9SIGFkZGluZyBldmVudCBsaXN0ZW5lcnMnO1xuICAgIH1cblxufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZU5hdkxpbmsoY2xpY2tlZEJ1dHRvbikge1xuICAgIG5hdkxpbmtCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9