export const openSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    sidebar.classList.remove('-translate-x-full');
    mobileOverlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
};

export const closeSidebarFunc = () => {
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    sidebar.classList.add('-translate-x-full');
    mobileOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
};

export const initSidebar = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebar = document.getElementById('close-sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openSidebar);
    if (closeSidebar) closeSidebar.addEventListener('click', closeSidebarFunc);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeSidebarFunc);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeSidebarFunc();
        }
    });
};
