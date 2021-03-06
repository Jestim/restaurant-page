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

export { initHome, loadHome };