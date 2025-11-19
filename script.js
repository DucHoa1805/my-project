const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Kiểm tra nếu user đã chọn chế độ trước đó (lưu trong localStorage)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = 'Light mode';
}

// Khi bấm nút chuyển
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Nếu đang bật dark mode
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Light mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = 'Dark mode';
    localStorage.setItem('theme', 'light');
  }
});
