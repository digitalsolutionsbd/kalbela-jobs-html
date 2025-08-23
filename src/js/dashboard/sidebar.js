const sideBars = document.querySelectorAll('.dashboard-sidebar');
const sideBarMenuBtns = document.querySelectorAll('.dashboard-sidebar-menu');
const overlays = document.querySelectorAll('.sidebar-overlay');
const mainContentAreas = document.querySelectorAll('.main-content');
const closeSidebar = document.querySelectorAll('.sidebar-hidden-item');

sideBarMenuBtns.forEach(menu => {
  menu.addEventListener('click', () => {
    if (window.innerWidth >= 1024) {
      // Desktop → collapse/expand
        sideBars.forEach(sb => sb.classList.toggle('collapsed'));
        mainContentAreas.forEach(mc => mc.classList.toggle('collapsed'));
        closeSidebar.forEach(cs => cs.classList.toggle('hidden'));
    } else {
      // Mobile → open sidebar
      sideBars.forEach(sb => sb.classList.toggle('active'));
      sideBars.forEach(sb => sb.classList.toggle('-translate-x-full'));
      overlays.forEach(ov => ov.classList.toggle('active'));
      overlays.forEach(ov => ov.classList.toggle('hidden'));
      
    }
  });
});

// Close on overlay click (mobile only)
overlays.forEach(overlay => {
  overlay.addEventListener('click', () => {
    sideBars.forEach(sb => sb.classList.remove('active'));
      overlays.forEach(ov => ov.classList.remove('active'));
      mainContentAreas.forEach(mc => mc.classList.toggle('collapsed'));
      closeSidebar.forEach(cs => cs.classList.toggle('hidden'));

      overlays.forEach(ov => ov.classList.toggle('hidden'));
      sideBars.forEach(sb => sb.classList.toggle('-translate-x-full'));

  });
});
