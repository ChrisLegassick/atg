const navToggle = () => {
  const navBtn = document.getElementById('navBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navItem = document.querySelectorAll('.nav-item');
  const navDropdown = document.getElementById('navDropdown');

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navOverlay.classList.toggle('nav-overlay-show');
    navOverlay.classList.toggle('hidden');
    document.body.classList.toggle('nav-overlay-noscroll');
  });

  navItem.forEach(item =>
    item.addEventListener('click', () => {
      navOverlay.classList.toggle('nav-overlay-show');
      navOverlay.classList.toggle('hidden');
      navBtn.classList.toggle('active');
      document.body.classList.toggle('nav-overlay-noscroll');
    })
  );

  navDropdown.addEventListener('click', () => {
    const dropdownLinks = document.getElementById('dropdownLinks');
    dropdownLinks.classList.toggle('hidden');
    dropdownLinks.classList.toggle('dropdown-links-show');
  });
};

export default navToggle;
