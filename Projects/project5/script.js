const openMsgBtn = document.querySelector('#openModalBtn');
const overlay = document.querySelector('#myModal');
const closeMsgBtn = document.querySelector('.close-button');

openMsgBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeMsgBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});
