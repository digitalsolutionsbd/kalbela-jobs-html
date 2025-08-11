let isLeftSideVisible = false;

export function handleNavbarScroll() {
  const mainNav = document.querySelectorAll('.mainNav');
  const rightSide = document.querySelectorAll('.right-side');
  const showLeftProfileDropdown = document.querySelectorAll('.left-profile-box');
  const showRightProfileDropdown = document.querySelectorAll('.right-profile-box');
  const loginDropdownMnu = document.querySelectorAll('.login-dropdown-menu');
  
  const logo = document.querySelectorAll('.nav-logo');
  const authMenu1 = document.querySelector('.authMenu1');
  const heroLogo = document.querySelector('.heroLogo');
  const navLinksContainer = document.querySelector('.navLinksContainer');

  const scrollThreshold = 50;
  const heroScrollThreshold = 10;

  function onScroll() {
    const scrollY = window.scrollY;
    
    if (rightSide) {
      if (scrollY > scrollThreshold) {
        rightSide.forEach(side => {
          side.classList.remove('justify-between');
          side.classList.add('justify-end');
        });
        isLeftSideVisible = false;
      } else {
        rightSide.forEach(side => {
          side.classList.remove('justify-end');
          side.classList.add('justify-between');
        });
        isLeftSideVisible = true;
      }
    }

    if (showLeftProfileDropdown) {
      if (scrollY > scrollThreshold) {
        showLeftProfileDropdown.forEach(box => {
          box.classList.add('opacity-0', 'scale-90', '-translate-x-10', 'hidden');
        });
        
      } else {
        showLeftProfileDropdown.forEach(box => {
          box.classList.remove('opacity-0', 'scale-90', '-translate-x-10', 'hidden');
        });
      }
    }
    
    if (showRightProfileDropdown) {
      if (scrollY > scrollThreshold) {
        showRightProfileDropdown.forEach(box => {
          box.classList.remove('hidden');
          box.classList.add('flex');
        }); 
      } else {
        showRightProfileDropdown.forEach(box => {
          box.classList.add('hidden');
          box.classList.remove('flex');}); 
      }
    }


    
    if (heroLogo) {
      if (scrollY > heroScrollThreshold) {
        heroLogo.classList.add('scale-75', 'opacity-0');
        heroLogo.classList.remove('scale-100', 'opacity-100');
      } else {
        heroLogo.classList.add('scale-100', 'opacity-100');
        heroLogo.classList.remove('scale-75', 'opacity-0');
      }
    }

    if (mainNav.length && logo && navLinksContainer) {
      if (scrollY > scrollThreshold) {
        mainNav.forEach(nav => {
          nav.classList.add('bg-white', 'shadow-md', 'py-4');
          nav.classList.remove('py-6');
        });
        authMenu1?.classList.add('opacity-0', 'scale-90', '-translate-x-10', 'hidden');
        logo.forEach(itm => {
          itm.classList.remove('hidden', 'opacity-0', 'scale-90', '-translate-x-10');
         })
        navLinksContainer.classList.remove('justify-between');
        navLinksContainer.classList.add('justify-end');
      } else {
        mainNav.forEach(nav => {
          nav.classList.remove('bg-white', 'shadow-md', 'py-4');
          nav.classList.add('py-6');
        });
        authMenu1?.classList.remove('opacity-0', 'scale-90', '-translate-x-10', 'hidden');
        logo.forEach(itm => {
          itm.classList.add('hidden', 'opacity-0', 'scale-90', '-translate-x-10');
        });
        navLinksContainer.classList.remove('justify-end');
        navLinksContainer.classList.add('justify-between');
      }
    }
  }

  window.addEventListener('scroll', onScroll);
}

export function sidebarHandler() {
  const menuBtn = document.querySelector('.menuButton'); 
  const closeSidebar = document.querySelector('.closeSidebar'); 
  const overlay = document.querySelector('.overlay'); 
  const sidebar = document.querySelector('.sidebar'); 

  menuBtn?.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
  });

  closeSidebar?.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = ''; 
  });

  overlay?.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = ''; 
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = ''; 
    }
  });
}

// export function loginTabByRole() {
//   let userType = 'jobseeker';

//   const jobseekerBtns = document.querySelectorAll('.selectJobseeker');
//   const employerBtns = document.querySelectorAll('.selectEmployer');

//   function updateActiveButton() {
//     const activeClasses = ['!bg-[#16157b]', '!text-white'];
//     const inactiveClasses = ['!bg-blue-50', '!text-black'];

//     [...jobseekerBtns, ...employerBtns].forEach(btn => {
//       if (btn) {
//         activeClasses.forEach(cls => btn.classList.remove(cls));
//         inactiveClasses.forEach(cls => btn.classList.add(cls));
//       }
//     });

//     const activeBtns = userType === 'jobseeker' ? jobseekerBtns : employerBtns;

//     activeBtns.forEach(btn => {
//       if (btn) {
//         inactiveClasses.forEach(cls => btn.classList.remove(cls));
//         activeClasses.forEach(cls => btn.classList.add(cls));
//       }
//     });
//   }

//   jobseekerBtns.forEach(btn => {
//     btn?.addEventListener('click', () => {
//       userType = 'jobseeker';
//       updateActiveButton();
//     });
//   });

//   employerBtns.forEach(btn => {
//     btn?.addEventListener('click', () => {
//       userType = 'employer';
//       updateActiveButton();
//     });
//   });

//   document.querySelectorAll('.menu-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const path = link.getAttribute('data-path');
//       window.location.href = `/${userType}/${path}`;
//     });
//   });

//   updateActiveButton();
// }

export function loginTabByRole() {
  let userType = 'jobseeker';

  const jobseekerBtns = document.querySelectorAll('.selectJobseeker');
  const employerBtns = document.querySelectorAll('.selectEmployer');

  function updateActiveButton() {
    const activeClasses = ['!bg-[#16157b]', '!text-white'];
    const inactiveClasses = ['!bg-blue-50', '!text-black'];

    [...jobseekerBtns, ...employerBtns].forEach(btn => {
      if (btn) {
        activeClasses.forEach(cls => btn.classList.remove(cls));
        inactiveClasses.forEach(cls => btn.classList.add(cls));
      }
    });

    const activeBtns = userType === 'jobseeker' ? jobseekerBtns : employerBtns;

    activeBtns.forEach(btn => {
      if (btn) {
        inactiveClasses.forEach(cls => btn.classList.remove(cls));
        activeClasses.forEach(cls => btn.classList.add(cls));
      }
    });
  }

  jobseekerBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
      userType = 'jobseeker';
      updateActiveButton();
    });
  });

  employerBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
      userType = 'employer';
      updateActiveButton();
    });
  });

  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Go directly to the sign-in page with the appropriate role
      window.location.href = `src/pages/sign-in.html?role=${userType}`;
    });
  });

  updateActiveButton();
}



export function typeWriterAnimation() {
  const words = ["Search by keyword", "Search by location", "Search by company"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function typeWriter() {
    const typewriterText = document.querySelector(".typewriterText");

    if (!typewriterText) return;

    const word = words[wordIndex];
    if (isDeleting) {
      currentText = word.substring(0, charIndex--);
    } else {
      currentText = word.substring(0, charIndex++);
    }

    typewriterText.textContent = currentText;

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === word.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;
    }

    setTimeout(typeWriter, delay);
  }

  typeWriter();
}

export function dropdownHandler() {
  const dropdownGroups = document.querySelectorAll('.profile-dropdown');

  dropdownGroups.forEach(groupEl => {
    const menuEl = groupEl.querySelector('.profile-dropdown-menu');
    const menuContentEl = menuEl ? menuEl.firstElementChild : null;

    if (!groupEl || !menuEl || !menuContentEl) {
      return;
    }

    const adjustPosition = () => {
      if (getComputedStyle(menuContentEl).display === 'none') {
        return;
      }

      const groupRect = groupEl.getBoundingClientRect();
      const menuWidth = menuContentEl.offsetWidth;
      const viewportWidth = window.innerWidth;

      let finalLeft = '0px';
      let finalRight = 'auto';

      const menuLeftIfLeftAligned = groupRect.left;
      const menuRightIfLeftAligned = menuLeftIfLeftAligned + menuWidth;
      
      if (menuRightIfLeftAligned > viewportWidth) {
        finalLeft = 'auto';
        finalRight = '0px';

        const menuLeftIfRightAligned = groupRect.right - menuWidth;
        
        if (menuLeftIfRightAligned < 0) {
          finalLeft = '0px';
          finalRight = 'auto';
        }
      }
      
      menuEl.style.left = finalLeft;
      menuEl.style.right = finalRight;
    };
    
    groupEl.addEventListener('mouseenter', () => {
      requestAnimationFrame(adjustPosition);
    });

    groupEl.addEventListener('focusin', () => {
        requestAnimationFrame(adjustPosition);
    });
  });
}


export function initHeaderScroll() {
  document.addEventListener("DOMContentLoaded", handleNavbarScroll);
  sidebarHandler();
  loginTabByRole();
  typeWriterAnimation();
  dropdownHandler();
  window.addEventListener("scroll", handleNavbarScroll);
}