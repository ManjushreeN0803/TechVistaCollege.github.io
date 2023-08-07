// Get references to elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check the current theme from local storage (if available)
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// scripts.js
/*
// Function to animate the activities on page load
function animateActivities() {
  const activities = document.querySelectorAll('.activity');
  
  activities.forEach(activity => {
    activity.style.opacity = '1';
    activity.style.transform = 'translateY(0)';
  });
}

// Add an event listener to trigger the animation when the page is fully loaded
window.addEventListener('load', animateActivities);
*/