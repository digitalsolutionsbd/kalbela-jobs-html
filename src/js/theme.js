const themes = {
  light: { icon: "ri-sun-line", label: "Light", bg: "#ffffff", text: "#000000" },
  dark: { icon: "ri-moon-line", label: "Dark", bg: "#222222", text: "#ffffff" },
  orange: { icon: "ri-contrast-drop-line", label: "Orange", bg: "#FFA500", text: "#ffffff" }
};

export function applyTheme(theme) {
  const body = document.body;
  const { icon, label, bg, text } = themes[theme];

  body.style.backgroundColor = bg;
  body.style.color = text;
  body.className = `theme-${theme}`;

  localStorage.setItem("theme", theme);

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.className = icon + " m-auto";
  }

  const themeLabel = document.getElementById("themeLabel");
  if (themeLabel) {
    themeLabel.textContent = label;
  }

  const logo = document.getElementById("logo");
  if (logo) {
    logo.src = theme === "dark" ? "assets/image/logo_light.png" : "assets/image/logo_dark.png";
  }
}

export function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Setup listeners only once
  document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedTheme = this.getAttribute("data-theme");
      applyTheme(selectedTheme);
    });
  });
}
