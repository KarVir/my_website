/*
 * Author: Karolína Virágová 
 * File: menu.js
 * Brief: Menu display
 */

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const headerMenu = document.getElementById('header-menu');
    const menuLinks = headerMenu.querySelectorAll('a');

    // To display the menu,  -click or hover the mouse
    menuIcon.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
    });
    menuIcon.addEventListener('mouseenter', () => {
        headerMenu.classList.add('active');
    });

    // Hide menu
    const closeMenuIfMouseLeaves = (event) => {
        // Timeout
        setTimeout(() => {
            const isHovering = menuIcon.matches(':hover') || headerMenu.matches(':hover');
            if (!isHovering) {
                headerMenu.classList.remove('active');
            }
        }, 100);
    };      
    menuIcon.addEventListener('mouseleave', closeMenuIfMouseLeaves);
    headerMenu.addEventListener('mouseleave', closeMenuIfMouseLeaves);
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 700) {
                headerMenu.classList.remove('active');
            }
        });
    });
});
