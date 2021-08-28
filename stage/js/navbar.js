const bars = document.querySelector('.navbar-up .bars'),
  navParent = document.querySelector('.navbar-up .nav-parent');

bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navParent.classList.toggle('active');
  document.body.classList.toggle('active');
});
