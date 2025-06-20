const toggleBtn = document.querySelector('#themeToggleBtn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
