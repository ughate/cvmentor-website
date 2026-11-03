const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

/*
  BEFORE PUBLISHING:
  1) Replace 91XXXXXXXXXX in the WhatsApp link in index.html with your WhatsApp number.
  2) Confirm hello@cvmentor.in is an email address you can receive mail at.
  3) Review and update prices, services, turnaround time, and policies.
*/
