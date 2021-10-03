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

export default loadMenu;