function toggleDarkLightTheme() {
    const el = document.getElementById("styleSheet");
    if (el.href.match("assets/css/darkstyle.css")) {
        el.href = "assets/css/lightstyle.css";
        localStorage.toggled = "assets/css/lightstyle.css";

    } else {
        el.href = "assets/css/darkstyle.css";
        localStorage.toggled = "";
    }
}