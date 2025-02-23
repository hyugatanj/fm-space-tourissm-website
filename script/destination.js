import dataDestination from "../data/data-destination.js";

document.querySelector(".second-hero").addEventListener('click', (event) => {
  if (event.target.classList.contains("tabs")) {
    let data = {};
    dataDestination.forEach((target) => {
      if (target.id === event.target.dataset.selector) {
        data = target;
      }
    });
    let destinationHTML = "";
    const id = event.target.dataset.selector;
    destinationHTML = `
      <div class="left">
        <div class="img-container">
          <img src="${data.images.png}" alt="">
        </div>
      </div>
      <div class="right">
        <div class="explanation">
          <div class="destination-tab">
            <ul>
              <li class="tabs" data-selector="moon">MOON</li>
              <li class="tabs" data-selector="mars">MARS</li>
              <li class="tabs" data-selector="europa">EUROPA</li>
              <li class="tabs" data-selector="titan">TITAN</li>
            </ul>
          </div>
          <div class="text">
            <p class="title">${data.name}</p>
            <p class="description">${data.description}.</p>
          </div>
          <hr>
          <div class="statistics">
            <div class="distance">
              <p class="statistics-title"> AVG. DISTANCE</p>
              <p class="statistics-description">${data.distance}</p>
            </div>
            <div class="travel-time">
              <P class="statistics-title">EST. TRAVEL TIME</p>
              <p class="statistics-description">${data.travel}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.querySelector('.second-hero').innerHTML = destinationHTML;
  }
});