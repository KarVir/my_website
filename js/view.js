/*
 * Author: Karolína Virágová 
 * File: view.js
 * Brief: Display text
 */

document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1.motivace');
    const zprava = "Life throws obstacles in your way. Never give up.";
    h1.setAttribute('data-message', zprava);
  
    setInterval(() => {
      h1.classList.add('zobraz');
      setTimeout(() => {
        h1.classList.remove('zobraz');
      }, 2000);
    }, 5000);
  });
