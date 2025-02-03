const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Cek apakah ada mode yang tersimpan di localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    themeToggle.textContent = "☀️";
} else {
    body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}

// Toggle dark mode
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});
