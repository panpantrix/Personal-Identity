const toggleBtn = document.getElementById("toggle-theme");
const themePath = document.getElementById("theme-path");

// ICON PATH
const sunPath = "M12 4V2m0 20v-2m8-8h2M2 12h2m13.66 6.66 1.42 1.42M4.93 4.93 6.34 6.34m11.32-11.32 1.42-1.42M4.93 19.07 6.34 17.66M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z";
const moonPath = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z";

// Apply theme
function setTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    themePath.setAttribute("d", isDark ? moonPath : sunPath);
}

// Initial theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(prefersDark);

// Toggle click
toggleBtn.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");
    setTheme(isDark);
});