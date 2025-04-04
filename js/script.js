document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome, Ursula! Your site is loaded and ready 🌟");
  
    const links = document.querySelectorAll("nav a");
  
    links.forEach(link => {
      link.addEventListener("click", () => {
        alert(`You clicked on ${link.textContent}`);
      });
    });
  });