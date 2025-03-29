import dataDestination from "../data/data-destination.js";

function logoButton() {
  document.querySelector('.logo').addEventListener('click', () => {
   window.location.href = 'index.html';
  }) 
};

logoButton();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".second-hero").addEventListener("click", (event) => {
    if (event.target.classList.contains("tabs")) {
      let selectedTab = event.target.dataset.selector;
      let data = dataDestination.find((target) => target.id === selectedTab);

      // Update active tab
      document.querySelectorAll(".tabs").forEach((tab) => {
        tab.classList.remove("js-active-destination");
      });
      event.target.classList.add("js-active-destination");

      const secondHero = document.querySelector('.second-hero');
      secondHero.classList.remove('show');

      setTimeout(() => {
        secondHero.classList.add('show');

        // Update content dynamically
        document.querySelector(".img-container img").src = data.images.png;
        document.querySelector(".title").textContent = data.name;
        document.querySelector(".description").textContent = data.description;
        document.querySelector(".distance .statistics-description").textContent = data.distance;
        document.querySelector(".travel-time .statistics-description").textContent = data.travel;
      }, 200)
      
    }
  });
});