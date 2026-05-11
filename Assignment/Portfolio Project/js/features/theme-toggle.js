function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if button exists
    if (!toggleBtn) {
        console.error("Theme toggle button not found");
        return;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Save theme in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("portfolio-theme", "dark");
            console.log("Dark mode enabled");
        } else {
            localStorage.setItem("portfolio-theme", "light");
            console.log("Light mode enabled");
        }
    });
}

