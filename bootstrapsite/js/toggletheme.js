const toggleBtn = document.getElementById('toggleTheme');

toggleBtn.addEventListener('click', function () {
  document.documentElement.classList.toggle('dark-theme');
});
