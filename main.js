// main.js
// Theme toggle (dark / light)

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const body = document.body;

  // Optional: remember last theme (localStorage)
  const savedTheme = localStorage.getItem("studentHubTheme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
  } else if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("studentHubTheme", isDark ? "dark" : "light");
  });
});
