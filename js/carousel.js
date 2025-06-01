/*
 * Author: Karolína Virágová 
 * File: carousel.js
 * Brief: 
 */

let currentIndex = 0;
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.grid > .box');

function updateCarousel() {
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function zoomSlide(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}