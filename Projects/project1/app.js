const btns = document.querySelectorAll('.btn');
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    color = btn.value;
    changeBackground(color);
  });
});

function changeBackground(color) {
  body.className = '';

  if (color === 'purple') {
    body.classList.add('purple');
  } else if (color === 'blue') {
    body.classList.add('blue');
  } else if (color === 'red') {
    body.classList.add('red');
  } else if (color === 'green') {
    body.classList.add('green');
  } else if (color === 'yellow') {
    body.classList.add('yellow');
  } else {
    body.classList.add('teal');
  }
}
