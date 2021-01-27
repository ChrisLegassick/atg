const navToggle = () => {
  const navBtn = document.getElementById('navBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navItems = document.querySelectorAll('.nav__overlay-item');

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navOverlay.classList.toggle('nav__overlay-show');
    document.body.classList.toggle('noscroll-overlay');
  });

  navItems.forEach(item =>
    item.addEventListener('click', () => {
      navOverlay.classList.add('nav__overlay-show');
      navBtn.classList.toggle('active');
      document.body.classList.toggle('noscroll-overlay');
    })
  );
};

export default navToggle;
