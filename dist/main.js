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

    const contactHeaderElement = document.createElement('h2');
    contactHeaderElement.textContent = 'Contact us!';
    contactElement.appendChild(contactHeaderElement);

    const contactPhoneElement = document.createElement('p');
    contactPhoneElement.innerHTML = 'Call us here: <em>+1 123 456 789</em>';
    contactElement.appendChild(contactPhoneElement);


    const contactEmailElement = document.createElement('p');
    contactEmailElement.innerHTML = 'Or email us: <em>Info@TheBestRestaurant.com</em>';
    contactElement.appendChild(contactEmailElement);
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

function loadHome() {
    createMain();
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

    return BtnElement;
}

function createMain() {
    const mainElement = document.createElement('main');
    mainElement.classList.add('main');

    const firstParaElement = document.createElement('p');
    firstParaElement.classList.add('info');
    firstParaElement.textContent = 'This is the best restaurant in the world! If you come here to eat you will remember it for the rest of your life!';
    mainElement.appendChild(firstParaElement);

    const secondParaElement = document.createElement('p');
    secondParaElement.classList.add('info');
    secondParaElement.textContent = 'But be aware! If you order the wrong dish you might be very disapointed.';
    mainElement.appendChild(secondParaElement);

    contentElement.appendChild(mainElement);

    return mainElement;
}

function createFooter() {
    const footerElement = document.createElement('footer');
    footerElement.classList.add('footer');

    const paraElement = document.createElement('p');
    paraElement.innerHTML = 'Created by: <a href="#">Jestim</a>';

    footerElement.appendChild(paraElement);

    contentElement.appendChild(footerElement);
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
// Dom elements


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

    const menuItemHeaderElement = document.createElement('h2');
    menuItemHeaderElement.textContent = header;
    menuItemElement.appendChild(menuItemHeaderElement);

    const menuItemPara1Element = document.createElement('p');
    menuItemPara1Element.textContent = para1;
    menuItemElement.appendChild(menuItemPara1Element);

    const menuItemPara2Element = document.createElement('p');
    menuItemPara2Element.textContent = para2;
    menuItemElement.appendChild(menuItemPara2Element);

    return menuItemElement;
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

// clearMain();

// loadMenu();

// loadContact();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQSxpRUFBZSxRQUFROzs7Ozs7VUNsRXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNkO0FBQ007O0FBRXZDLGtEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluICcpO1xuXG4gICAgY29uc3QgY29udGFjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMhJztcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyRWxlbWVudCk7XG5cbiAgICBjb25zdCBjb250YWN0UGhvbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RQaG9uZUVsZW1lbnQuaW5uZXJIVE1MID0gJ0NhbGwgdXMgaGVyZTogPGVtPisxIDEyMyA0NTYgNzg5PC9lbT4nO1xuICAgIGNvbnRhY3RFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZUVsZW1lbnQpO1xuXG5cbiAgICBjb25zdCBjb250YWN0RW1haWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RFbWFpbEVsZW1lbnQuaW5uZXJIVE1MID0gJ09yIGVtYWlsIHVzOiA8ZW0+SW5mb0BUaGVCZXN0UmVzdGF1cmFudC5jb208L2VtPic7XG4gICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsRWxlbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsIi8vIERvbSBlbGVtZW50c1xuY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBpbml0SG9tZSgpIHtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNyZWF0ZU1haW4oKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuXG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJUZXh0KCkpO1xuXG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZMaW5rcygpKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJUZXh0KCkge1xuICAgIGNvbnN0IGgxRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10ZXh0Jyk7XG4gICAgaDFFbGVtZW50LnRleHRDb250ZW50ID0gJ1RoZSBCZXN0IFJlc3RhdXJhbnQnO1xuXG4gICAgcmV0dXJuIGgxRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TGlua3MoKSB7XG4gICAgY29uc3QgbmF2TGlua3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZMaW5rc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmtzJyk7XG5cbiAgICBuYXZMaW5rc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QnV0dG9uKCdIb21lJykpO1xuICAgIG5hdkxpbmtzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCdXR0b24oJ01lbnUnKSk7XG4gICAgbmF2TGlua3NFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ1dHRvbignQ29udGFjdCcpKTtcblxuICAgIHJldHVybiBuYXZMaW5rc0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ1dHRvbihkZXN0aW5hdGlvbikge1xuICAgIGNvbnN0IEJ0bkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBCdG5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XG4gICAgQnRuRWxlbWVudC5pZCA9IGRlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgQnRuRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc3RpbmF0aW9uO1xuXG4gICAgcmV0dXJuIEJ0bkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmaXJzdFBhcmFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBmaXJzdFBhcmFFbGVtZW50LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgdGhlIGJlc3QgcmVzdGF1cmFudCBpbiB0aGUgd29ybGQhIElmIHlvdSBjb21lIGhlcmUgdG8gZWF0IHlvdSB3aWxsIHJlbWVtYmVyIGl0IGZvciB0aGUgcmVzdCBvZiB5b3VyIGxpZmUhJztcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChmaXJzdFBhcmFFbGVtZW50KTtcblxuICAgIGNvbnN0IHNlY29uZFBhcmFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlY29uZFBhcmFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBzZWNvbmRQYXJhRWxlbWVudC50ZXh0Q29udGVudCA9ICdCdXQgYmUgYXdhcmUhIElmIHlvdSBvcmRlciB0aGUgd3JvbmcgZGlzaCB5b3UgbWlnaHQgYmUgdmVyeSBkaXNhcG9pbnRlZC4nO1xuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKHNlY29uZFBhcmFFbGVtZW50KTtcblxuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcblxuICAgIHJldHVybiBtYWluRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgcGFyYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYUVsZW1lbnQuaW5uZXJIVE1MID0gJ0NyZWF0ZWQgYnk6IDxhIGhyZWY9XCIjXCI+SmVzdGltPC9hPic7XG5cbiAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhcmFFbGVtZW50KTtcblxuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckVsZW1lbnQpO1xufVxuXG5leHBvcnQgeyBpbml0SG9tZSwgbG9hZEhvbWUgfTsiLCIvLyBEb20gZWxlbWVudHNcblxuXG4vLyBNZW51IGluZm9cblxuY29uc3QgZGlzaDEgPSB7XG4gICAgaGVhZGVyOiAnR29vZCBmb29kJyxcbiAgICBwYXJhMTogJ1RoaXMgaXMgc29tZSByZWFsbHkgZ29vZCBmb29kIHRoYXQgeW91IG11c3QgdHJ5IScsXG4gICAgcGFyYTI6ICdJdCBpcyBzdXBlciB0YXN0eSBhbmQgeW91IHdvblxcJ3QgcmVncmV0IGl0IScsXG59XG5cbmNvbnN0IGRpc2gyID0ge1xuICAgIGhlYWRlcjogJ0V2ZW4gYmV0dGVyIGZvb2QnLFxuICAgIHBhcmExOiAnVGhpcyBpcyBzb21lIGV2ZW4gYmV0dGVyIGZvb2QgdGhhdCB5b3UgbXVzdCB0cnkhJyxcbiAgICBwYXJhMjogJ0Nob3NzZSB0aGlzIG92ZXIgdGhlIHByZXZpb3VzIScsXG59XG5cbmNvbnN0IGRpc2gzID0ge1xuICAgIGhlYWRlcjogJ0F2YXJhZ2UgZm9vZCcsXG4gICAgcGFyYTE6ICdUaGlzIGlzIHNvbWUgYXZhcmFnZSBmb29kIHRoYXQgeW91IHdpbGwgdGhpbmsgaXMgYWxyaWdodCcsXG4gICAgcGFyYTI6ICdJdCBpcyBqdXN0IG9rLicsXG59XG5cbmNvbnN0IGRpc2g0ID0ge1xuICAgIGhlYWRlcjogJ05vdCBhcyBnb29kIGZvb2QnLFxuICAgIHBhcmExOiAnVGhpcyBvbmUgaXMgbm90IGFzIGdvb2QsIGJ1dCBzdGlsbCBwcmV0dHkgb2suJyxcbiAgICBwYXJhMjogJ1lvdSBtaWdodCByZWdyZXQgb3JkZXJpbmcgdGhpcyEnLFxufVxuXG5jb25zdCBkaXNoNSA9IHtcbiAgICBoZWFkZXI6ICdIb3JpYmxlIGZvb2QnLFxuICAgIHBhcmExOiAnVGhpcyBpcyBub3QgdGFzdHkgYXQgYWxsIScsXG4gICAgcGFyYTI6ICdZb3Ugd2lsbCBkZWZlbmV0bHkgcmVncmV0IG9yZGVyaW5nIHRoaXMhJyxcbn1cblxuY29uc3QgZGlzaGVzID0gW2Rpc2gxLCBkaXNoMiwgZGlzaDMsIGRpc2g0LCBkaXNoNV07XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShkaXNoZXNbaV0uaGVhZGVyLCBkaXNoZXNbaV0ucGFyYTEsIGRpc2hlc1tpXS5wYXJhMikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaGVhZGVyLCBwYXJhMSwgcGFyYTIpIHtcbiAgICBjb25zdCBtZW51SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbUhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtSGVhZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGhlYWRlcjtcbiAgICBtZW51SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1IZWFkZXJFbGVtZW50KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtUGFyYTFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtUGFyYTFFbGVtZW50LnRleHRDb250ZW50ID0gcGFyYTE7XG4gICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtUGFyYTFFbGVtZW50KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtUGFyYTJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtUGFyYTJFbGVtZW50LnRleHRDb250ZW50ID0gcGFyYTI7XG4gICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtUGFyYTJFbGVtZW50KTtcblxuICAgIHJldHVybiBtZW51SXRlbUVsZW1lbnQ7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdEhvbWUsIGxvYWRIb21lIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmluaXRIb21lKCk7XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgd2hpbGUgKG1haW5FbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtYWluRWxlbWVudC5yZW1vdmVDaGlsZChtYWluRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGNsZWFyTWFpbigpO1xuXG4vLyBsb2FkTWVudSgpO1xuXG4vLyBsb2FkQ29udGFjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==