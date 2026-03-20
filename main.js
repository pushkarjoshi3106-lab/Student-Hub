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
// Contact form validation (front-end only, demo)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const statusEl = document.getElementById("contact-status");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");

    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!nameInput.value.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!emailInput.value.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!messageInput.value.trim()) {
      errors.message = "Please enter a message.";
    }

    contactForm.querySelectorAll(".field-error").forEach((el) => {
      const field = el.getAttribute("data-error-for");
      el.textContent = errors[field] || "";
    });

    const hasError = Object.values(errors).some((msg) => msg !== "");
    if (hasError) {
      statusEl.textContent = "Please fix the highlighted fields.";
      statusEl.className = "contact-status error";
      return;
    }

    statusEl.textContent = "Message sent (demo only, no backend connected).";
    statusEl.className = "contact-status success";
    contactForm.reset();
  });
}
