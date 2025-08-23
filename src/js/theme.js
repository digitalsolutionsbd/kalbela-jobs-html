

const saveTheme = (theme) => {
  localStorage.setItem('theme', theme);
};

const getSavedTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove('theme-light', 'theme-dark', 'theme-teal', 'theme-orange');
  root.classList.add(`theme-${theme}`);
  updateThemeIcon(theme);
  saveTheme(theme);
};

const updateThemeIcon = (theme) => {
  const icon = document.querySelectorAll('.theme-icon');
  if (!icon) return;

  icon.forEach(i => i.className = 'text-xl')

  if (theme === 'light') {
    
    icon.forEach(i => i.classList.add('ri-sun-foggy-fill', '!text-yellow-500'));
  } else if (theme === 'dark') {
    icon.forEach(i => i.classList.add('ri-moon-clear-fill', '!text-blue-500'));
  } else {
    icon.forEach(i => i.classList.add('ri-palette-fill', '!text-teal-500'));
  }
};

const setupThemeButtons = () => {
  const themeButtons = document.querySelectorAll('.theme-button');
  if (!themeButtons) return;
  themeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedTheme = event.target.dataset.theme;
      applyTheme(selectedTheme);
    });
  });
};

// ⬇️ Init Theme for every page
export const initTheme = () => {
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme);
  setupThemeButtons();
};
