// Accordion
 document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.closest('.accordion-item');
    const body = accordionItem.querySelector('.accordion-body');
    const icon = header.querySelector('svg');

    const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';

    // Close all
    document.querySelectorAll('.accordion-body').forEach(el => {
      el.style.maxHeight = '0px';
      // el.style.paddingTop = '0px';
      el.style.paddingBottom = '0px';
      el.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
    });

    // Toggle clicked
    if (!isOpen) {
      // body.style.paddingTop = '0.5rem';
      body.style.paddingBottom = '0.5rem';
      body.style.maxHeight = body.scrollHeight + 'px';
      icon.classList.add('rotate-180');
    }
  });
});

// ✅ Open the first accordion on load
window.addEventListener('DOMContentLoaded', () => {
  const firstBody = document.querySelector('.accordion-body');
  const firstIcon = document.querySelector('.accordion-header svg');

  if (firstBody && firstIcon) {
    firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
    // firstBody.style.paddingTop = '0.5rem';
    firstBody.style.paddingBottom = '0.5rem';
    firstIcon.classList.add('rotate-180');
  }
});
