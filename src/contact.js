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

export default loadContact;