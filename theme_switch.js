document.addEventListener("DOMContentLoaded", () => {
    let light_theme = localStorage.getItem("light_theme");
    const themeSwitch = document.getElementById("theme_switch");

    const enableLightTheme = () => {
        document.body.classList.add("light_theme");
        localStorage.setItem("light_theme", "active");
    };

    const disableLightTheme = () => {
        document.body.classList.remove("light_theme");
        localStorage.setItem("light_theme", null);
    };

    // Apply the theme on page load based on localStorage
    if (light_theme === "active") {
        enableLightTheme();
    }

    // Toggle theme on button click
    themeSwitch.addEventListener("click", () => {
        light_theme = localStorage.getItem("light_theme");
        if (light_theme === "active") {
            disableLightTheme();
        } else {
            enableLightTheme();
        }
    });
});