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

export default loadContact;