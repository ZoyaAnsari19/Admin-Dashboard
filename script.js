// Theme toggle button
const themeBtn = document.getElementById("theme-btn");

// Toggle dark mode class on body
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

// Toggle icon for better UX
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
  } else {
    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");
  }
});