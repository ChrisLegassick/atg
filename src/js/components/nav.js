const navToggle = () => {
  const navBtn = document.getElementById('navBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navItems = document.querySelectorAll('.nav-item');

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navOverlay.classList.toggle('nav-overlay-show');
    navOverlay.classList.toggle('hidden');
    document.body.classList.toggle('nav-overlay-noscroll');
  });

  navItems.forEach(item =>
    item.addEventListener('click', () => {
      navOverlay.classList.toggle('nav-overlay-show');
      navOverlay.classList.toggle('hidden');
      navBtn.classList.toggle('active');
      document.body.classList.toggle('nav-overlay-noscroll');
    })
  );
};

export default navToggle;
