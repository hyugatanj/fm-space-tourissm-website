import dataCrew from "../data/data-crew.js";

document.querySelector('.logo').addEventListener('click', () => {
  window.location.href = 'index.html'; 
})

const pageNav = document.querySelectorAll('.pagination-btn');

pageNav.forEach((tabs) => {
  tabs.addEventListener('click', (event) => {
    pageNav.forEach((el) => {el.classList.remove('js-page-active')})
    tabs.classList.add('js-page-active');

    let selectedTab = event.target.dataset.id;
    let data = dataCrew.find((target) => target.id === selectedTab);

    const hero = document.querySelector('.hero');
    hero.classList.remove('show');
    setTimeout(() => {
      hero.classList.add('show');

      //make data dynamically change
      document.querySelector('.rank').textContent = data.role.toUpperCase();
      document.querySelector('.name').textContent = data.name.toUpperCase();
      document.querySelector('.description').textContent = data.bio;
      document.querySelector('.image-content').src = data.images.png;
    }, 400)
    
  })
});
