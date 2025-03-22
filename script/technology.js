import dataTech from "../data/data-technology.js";

document.querySelector('.logo').addEventListener('click', () => {
  window.location.href = 'index.html'
})

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', (event) => {
    document.querySelectorAll('.tab').forEach((element) => element.classList.remove('js-active'));
    tab.classList.add('js-active');

    const selectedTab = event.target.dataset.id;
    const data = dataTech.find((target) => target.id === selectedTab);

    document.querySelector('.name').textContent = data.name;
    document.querySelector('.description').textContent = data.description;
    document.querySelector('.image').src = data.images.portrait;
  })
})