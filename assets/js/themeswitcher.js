// default variables, to store dark/light theme, and catch items by IDs
const lightStoredTheme = "lightstyle";
const darkStoredTheme = "darkstyle";
const themeToggle = document.getElementById("themeToggleButton");
const currentTheme = localStorage.getItem("theme");
const styleSheet = document.getElementById("cssStyling");

// checking if theme is stored and adjusting the styling accordingly
if (currentTheme) {
    styleSheet.href = "assets/css/" + currentTheme + ".css";
    if (currentTheme != "lightstyle") {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }

}

// function to set the theme, and store it in local storage with keyword
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

// Found partial solutions to this code, from:
// https://blog.prototypr.io/create-your-own-dark-mode-using-js-css-variables-and-localstorage-8b461864644b
// https://stackoverflow.com/questions/18368319/toggle-css-sheets-on-click-with-javascript

// Adjusted this to suit my code/needs, so it worked with localStorage & button on the site