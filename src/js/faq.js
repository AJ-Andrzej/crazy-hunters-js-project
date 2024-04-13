import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.faq-accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const arrow = this.querySelector('.faq-arrow');
            const description = this.nextElementSibling;

            arrow.classList.toggle('rotate');
            description.classList.toggle('visually-hidden');
        });
    });

    new Accordion('.faq-section', {
        duration: 400,
        showFirstItem: false,
    });
});