const navToggle = () => {
  const navBtn = document.getElementById('navBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navItems = document.querySelectorAll('.overlay-item');

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navOverlay.classList.toggle('nav-overlay_show');
    document.body.classList.toggle('nav-overlay_noscroll');
  });

  navItems.forEach(item =>
    item.addEventListener('click', () => {
      navOverlay.classList.toggle('nav-overlay_show');
      navBtn.classList.toggle('active');
      document.body.classList.toggle('nav-overlay_noscroll');
    })
  );
};

export default navToggle;
