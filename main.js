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
//scroll progress bar
const scrollBar = document.getElementById("scroll-progress");
if (scrollBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = progress + "%";
  });
}
console.log(window.scrollY);
//streak
const streakE1 = document.getElementById("study-streak");
if (streakE1) {
  const today = new Date().toDateString(); //aaj ki date
  const lastVisit = localStorage.getItem("sh_lastVisit");
  let streak = parseInt(localStorage.getItem("sh_streak") || "0", 10);
  if (lastVisit) {
    //phli baar visit
    streak = 1;
  } else {
    const last = new Date(lastVisit).toDateString();
    if (last == today) {
      //same day,streak same
    } else {
      //naya din,streak +1
      streak += 1;
    }
  }
  localStorage.setItem("sh_lastVisit", today);
  localStorage.setItem("sh_streak", String(streak));
  streakE1.textContent = `Study Streak: ${streak} day${streak > 1 ? "s" : ""}`;
}
