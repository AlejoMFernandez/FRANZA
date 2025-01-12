const slider = document.querySelector('.slider');
const container = document.querySelector('.container');

slider.addEventListener('input', (e) => {
  const value = `${e.target.value}%`;
  container.style.setProperty('--position', value);
});
