const element = document.querySelector('.explore');
element.addEventListener('click', () => {
  window.location.href = '../destination.html';
});


const targetElement = document.querySelector('.target');
document.querySelector('.burger-btn').addEventListener('click', (event) => {
  targetElement.classList.toggle('js-active');

  if (targetElement.classList.contains('js-active')) {
    event.target.textContent = '\u2715';
  } else {
    event.target.textContent = '\u2630';
  }
});