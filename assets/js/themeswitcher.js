function toggle() {
    const el = document.getElementById("styleSheet");
    if (el.href.match("assets/css/darkstyle.css")) {
        el.href = "assets/css/lightstyle.css";
    } else {
        el.href = "assets/css/darkstyle.css";
    }
}