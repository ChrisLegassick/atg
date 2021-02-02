const navToggle = () => {
  const navBtn = document.getElementById('navBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navToggle = document.querySelectorAll('.nav-toggle');
  const navDropdown = document.getElementById('nav-dropdown');

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navOverlay.classList.toggle('nav-overlay-show');
    navOverlay.classList.toggle('hidden');
    document.body.classList.toggle('nav-overlay-noscroll');
  });

  navToggle.forEach(item =>
    item.addEventListener('click', () => {
      navOverlay.classList.toggle('nav-overlay-show');
      navOverlay.classList.toggle('hidden');
      navBtn.classList.toggle('active');
      document.body.classList.toggle('nav-overlay-noscroll');
    })
  );

  navDropdown.addEventListener('click', () => {
    document.querySelector('.dropdown-contents').classList.toggle('hidden');
  });
};

export default navToggle;
