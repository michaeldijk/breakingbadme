// default variables, to store dark/light theme, and catch items by IDs
const lightStoredTheme = "lightstyle";
const darkStoredTheme = "darkstyle";
const themeToggle = document.getElementById("themeToggleButton");
const currentTheme = localStorage.getItem("theme");
const styleSheet = document.getElementById("cssStyling");

if (currentTheme) {
    styleSheet.href = "assets/css/" + currentTheme + ".css";
    if (currentTheme != "lightstyle") {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        themeToggle.classList.add("darkModeButton");
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        themeToggle.classList.remove("darkModeButton");
    }

}

function toggleDarkLightTheme() {
    if (styleSheet.href.match("darkstyle.css")) {
        styleSheet.href = "assets/css/lightstyle.css";
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem("theme", lightStoredTheme);
    } else {
        styleSheet.href = "assets/css/darkstyle.css";
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem("theme", darkStoredTheme);
    }
}