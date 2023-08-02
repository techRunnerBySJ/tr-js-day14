// Event delegation pattern in JavaScript
const parentElement = document.getElementById('parent');

parentElement.addEventListener('click', event => {
  const targetElement = event.target;
  if (targetElement.tagName === 'BUTTON') {
    console.log('Button clicked.');
  }
});
