// Function to toggle between light and dark themes
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode); // Store preference
  }
  
  // Function to load theme from localStorage
  function loadThemePreference() {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      document.body.classList.add("dark-mode");
    }
  }
  
  // Function to trigger image animation
  function triggerAnimation() {
    const img = document.getElementById("animImage");
    img.classList.add("animate-spin");
  
    // Remove class after animation to allow retriggering
    setTimeout(() => {
      img.classList.remove("animate-spin");
    }, 500);
  }
  
  // Event listeners
  document.getElementById("toggleThemeBtn").addEventListener("click", () => {
    toggleTheme();
    triggerAnimation();
  });
  
  // Load user preferences on page load
  window.onload = loadThemePreference;
  