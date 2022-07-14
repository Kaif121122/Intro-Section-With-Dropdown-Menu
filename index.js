// Get Elements 

const featuresUI = document.getElementById('features-dropdown');
const companyUI = document.getElementById('company-dropdown');
const myDropdown1 = document.getElementById('my-dropdown1');
const myDropdown2 = document.getElementById('my-dropdown2');
const arrowUpIcon1 = document.getElementById('arrow-up-icon1');
const arrowUpIcon2 = document.getElementById('arrow-up-icon2');
const burgerBtn = document.getElementById('burger');
const burgerImg = document.querySelector('.burger-img');
const mobMenu = document.querySelector('.nav-mob');

// Feature Dropdown 

featuresUI.addEventListener('click', () => {
    myDropdown1.classList.toggle('show');

    if (
        myDropdown1.classList.contains('show')) {
        arrowUpIcon1.src = "./images/icon-arrow-up.svg"
    } else {

        arrowUpIcon1.src = "./images/icon-arrow-down.svg"
    }
})

// Company Dropdown 

companyUI.addEventListener('click', () => {
    myDropdown2.classList.toggle('show');

    if (myDropdown2.classList.contains('show')) {
        arrowUpIcon2.src = "./images/icon-arrow-up.svg"
    } else {

        arrowUpIcon2.src = "./images/icon-arrow-down.svg"
    }
})

// When click on menu button 

burgerImg.addEventListener('click', () => {
    mobMenu.classList.toggle('flex');
    if (mobMenu.classList.contains('flex')) {

        burgerImg.src = "./images/icon-close-menu.svg"
        document.body.classList.toggle('blur');
    } else {

        burgerImg.src = "./images/icon-menu.svg"
        document.body.classList.remove('blur');
    }
})


// When click on window Dropdowns display becomes none 

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        if (myDropdown1.classList.contains('show')) {
            myDropdown1.classList.remove('show');
            arrowUpIcon1.src = "./images/icon-arrow-down.svg"
        }

        if (myDropdown2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
            arrowUpIcon2.src = "./images/icon-arrow-down.svg"
        }

    }
}