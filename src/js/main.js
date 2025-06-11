import { initAdvanceSearch } from './advanceSearchJobs.js';
import { categoryUi } from './category.js';
import { openCategoryModal, setupCategoryModals } from './categoryModal.js';
 import { initHeaderScroll } from './header.js';
import { initSearch } from './search.js';
 import { applyTheme, initTheme } from './theme.js';
  
// // $(document).ready(() => {
// //   $('select').niceSelect();
// // })


 
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
  initAdvanceSearch();
  window.setTheme = applyTheme;

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
