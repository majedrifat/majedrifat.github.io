document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    toggleBtn.textContent = isDark ? '☀' : '☾';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
