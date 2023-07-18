console.log(`main.js loaded`)

// SELECT DOM ITEMS
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// SET INITIAL STATE OF MENU
let showMenu = false;

const toggleMenu = () => {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        // High-order array method
        navItems.forEach(item => item.classList.add('show'));
        
        // SET MENU STATE
        showMenu = true;  
        console.log(`showMenu: ${showMenu}`);
    } else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        // High-order array method
        navItems.forEach(item => item.classList.remove('show'));

        // SET MENU STATE
        showMenu = false;  
    }
}

menuBtn.addEventListener('click', toggleMenu);