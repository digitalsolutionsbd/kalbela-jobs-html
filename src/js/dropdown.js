// src/js/smartDropdown.js

export function initSmartDropdown() {
    setupDropdowns();
    setupSubmenus();
    setupResizeHandler();
  }

function setupDropdowns() {
  document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu, .mega-menu');
    if (!menu) return;

    dropdown.addEventListener('mouseenter', () => {
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';

      positionDropdown(dropdown, menu);
    });

    dropdown.addEventListener('mouseleave', () => {
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
    });
  });
}


  
  function setupSubmenus() {
    document.querySelectorAll('[data-submenu]').forEach(item => {
        const submenu = item.querySelector('.submenu');
        item.addEventListener('mouseenter', () => {
          submenu.classList.remove('hidden');
        });
        item.addEventListener('mouseleave', () => {
          submenu.classList.add('hidden');
        });
      });
      
  }
  
  function setupResizeHandler() {
    window.addEventListener('resize', () => {
      repositionAllDropdowns();
    });
  }
  
  function positionDropdown(trigger, menu) {
    menu.className = menu.className.replace(/position-\w+-?\w*/g, '');
  
    const triggerRect = trigger.getBoundingClientRect();
    const viewport = { width: window.innerWidth, height: window.innerHeight };
  
    const spaceRight = viewport.width - triggerRect.right;
    const spaceLeft = triggerRect.left;
    const menuWidth = menu.offsetWidth || 200;
  
    const spaceBelow = viewport.height - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    const menuHeight = menu.offsetHeight || 300;
  
    let positionClass = '';
    let indicatorClass = '';
  
    if (spaceBelow >= menuHeight || spaceBelow >= spaceAbove) {
      if (spaceRight >= menuWidth) {
        positionClass = 'position-bottom-left';
      } else if (spaceLeft >= menuWidth) {
        positionClass = 'position-bottom-right';
      } else {
        positionClass = 'position-bottom-left';
      }
    } else {
      if (spaceRight >= menuWidth) {
        positionClass = 'position-top-left';
        indicatorClass = 'bottom';
      } else if (spaceLeft >= menuWidth) {
        positionClass = 'position-top-right';
        indicatorClass = 'bottom';
      } else {
        positionClass = 'position-top-left';
        indicatorClass = 'bottom';
      }
    }
  
    menu.classList.add(positionClass);
    
    if (menu.classList.contains('mega-menu')) {
      positionMegaMenu(trigger, menu, viewport);
    }
  }
  
  function positionSubmenu(trigger, submenu) {
    const triggerRect = trigger.getBoundingClientRect();
    const submenuWidth = submenu.offsetWidth || 200;
    const viewport = { width: window.innerWidth };
  
    const spaceRight = viewport.width - triggerRect.right;
    const spaceLeft = triggerRect.left;
  
    submenu.classList.remove('position-left');
    const indicator = submenu.querySelector('.position-indicator');
  
    if (spaceRight >= submenuWidth) {
      submenu.style.left = '100%';
      submenu.style.right = 'auto';
      if (indicator) indicator.className = 'position-indicator right';
    } else if (spaceLeft >= submenuWidth) {
      submenu.classList.add('position-left');
      submenu.style.right = '100%';
      submenu.style.left = 'auto';
      if (indicator) indicator.className = 'position-indicator left';
    }
  }
  
  function positionMegaMenu(trigger, menu, viewport) {
    const triggerRect = trigger.getBoundingClientRect();
    const menuWidth = menu.offsetWidth;
  
    let leftPosition = triggerRect.left + triggerRect.width / 2 - menuWidth / 2;
    if (leftPosition < 20) leftPosition = 20;
    if (leftPosition + menuWidth > viewport.width - 20) {
      leftPosition = viewport.width - menuWidth - 20;
    }
  
    menu.style.left = `${leftPosition - triggerRect.left}px`;
  }
  
  function repositionAllDropdowns() {
    document.querySelectorAll('.dropdown-menu:hover, .mega-menu:hover').forEach(menu => {
      const dropdown = menu.closest('[data-dropdown]');
      if (dropdown) {
        positionDropdown(dropdown, menu);
      }
    });
  }
  
  export function setupGlobalDropdownEvents() {
    // Outside click
    document.addEventListener('click', e => {
      document.querySelectorAll('.dropdown, .mega-dropdown').forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          const menu = dropdown.querySelector('.dropdown-menu, .mega-menu');
          if (menu) {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
          }
        }
      });
    });
  
    // ESC key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.dropdown-menu, .mega-menu').forEach(menu => {
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
        });
      }
    });
  
    // Menu item click effect
    document.querySelectorAll('.menu-item').forEach(item => {
      // item.addEventListener('click', function (e) {
      //   e.preventDefault();
      //   this.style.transform = 'scale(0.95)';
      //   setTimeout(() => {
      //     this.style.transform = '';
      //   }, 150);
      //   console.log('Menu item clicked:', this.textContent.trim());
      // });

      item.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') {
          e.preventDefault(); // কেবল "#" এর ক্ষেত্রে
        }
      
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
      
    });
  }
  