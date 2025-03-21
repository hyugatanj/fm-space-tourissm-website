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
        tab.classList.remove("js-active");
      });
      event.target.classList.add("js-active");

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

// document.querySelector(".second-hero").addEventListener('click', (event) => {
//   if (event.target.classList.contains("tabs")) {
//     let selectedTab = event.target.dataset.selector;
//     let data = dataDestination.find((target) => target.id === event.target.dataset.selector);
  
//     const destinationHTML = `
//       <div class="left">
//         <div class="img-container">
//           <img src="${data.images.png}" alt="">
//         </div>
//       </div>
//       <div class="right">
//         <div class="explanation">
//           <div class="destination-tab">
//             <ul>
//               <li class="tabs ${selectedTab === 'moon' ? 'js-active' : ''}" data-selector="moon">MOON</li>
//               <li class="tabs ${selectedTab === 'mars' ? 'js-active' : ''}" data-selector="mars">MARS</li>
//               <li class="tabs ${selectedTab === 'europa' ? 'js-active' : ''}" data-selector="europa">EUROPA</li>
//               <li class="tabs ${selectedTab === 'titan' ? 'js-active' : ''}" data-selector="titan">TITAN</li>
//             </ul>
//           </div>
//           <div class="text">
//             <p class="title">${data.name}</p>
//             <p class="description">${data.description}.</p>
//           </div>
//           <hr>
//           <div class="statistics">
//             <div class="distance">
//               <p class="statistics-title"> AVG. DISTANCE</p>
//               <p class="statistics-description">${data.distance}</p>
//             </div>
//             <div class="travel-time">
//               <P class="statistics-title">EST. TRAVEL TIME</p>
//               <p class="statistics-description">${data.travel}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//     document.querySelector('.second-hero').innerHTML = destinationHTML;
//   }
// });
