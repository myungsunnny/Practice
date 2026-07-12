document.querySelectorAll('.plus').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.career-item');
    const description = item.querySelector('.description');
    const isOpen = item.classList.toggle('is-open');
    button.textContent = isOpen ? '−' : '+';
    description.style.color = isOpen ? '#c7ed74' : '';
  });
});
