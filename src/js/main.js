import { initAdvanceSearch } from './advanceSearchJobs.js';
import { initModals } from './bottomNav.js';
import { categoryUi } from './category.js';
import { openCategoryModal, setupCategoryModals } from './categoryModal.js';
import { initSmartDropdown, setupGlobalDropdownEvents } from './dropdown.js';
 import { initHeaderScroll } from './header.js';
import { initSearch } from './search.js';
import { initTheme } from './theme.js';
   
// $(document).ready(() => {
//   $('select').niceSelect();
// })


 
// add this inside your DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
          preloader.classList.add('opacity-0', 'invisible');
         }, 300);
  
        preloader.addEventListener('transitionend', () => {
            if (preloader.classList.contains('invisible')) { 
              preloader.style.display = 'none';
             }
        }, { once: true });
    }
  });
  // your existing initializations
  initTheme();
  initHeaderScroll();
  categoryUi();
  initSearch();
  initModals();
  initAdvanceSearch();
  initSmartDropdown();
  setupGlobalDropdownEvents();
 
  window.openCategoryModal = openCategoryModal;
  setupCategoryModals();

  /********************************
   * counter animation
   ********************************/
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    counter.innerText = '0+';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace('+', '');
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}+`;
        setTimeout(updateCounter, 15);
      } else {
        counter.innerText = `${target}+`;
      }
    };
    updateCounter();
  });
});
