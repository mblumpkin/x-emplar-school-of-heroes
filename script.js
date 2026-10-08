// X-EMPLAR! School of Heroes — Website interactions
const heroes = {
  suki: { name: 'SUKI', image: 'assets/suki.png', color: '#a9e8b4', number: '002', description: "CHARACTER PERSONALITY :O" },
  beau: { name: 'BEAU', image: 'assets/beau.png', color: '#f4a69a', number: '001', description: "CHARACTER PERSONALITY :O" },
  cas: { name: 'CAS', image: 'assets/cas.png', color: '#8fd9f3', number: '003', description: "CHARACTER PERSONALITY :O" }
  west: {name: 'WEST', image: '', color: }
};
const buttons = document.querySelectorAll('.character-tab');
const profileVisual = document.querySelector('#profileVisual');
const profileImage = document.querySelector('#profileImage');
const profileName = document.querySelector('#profileName');
const profileDescription = document.querySelector('#profileDescription');
const profileNumber = document.querySelector('.file-number');
buttons.forEach(button => button.addEventListener('click', () => {
  const hero = heroes[button.dataset.hero];
  if (!hero) return;
  buttons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  profileVisual.style.backgroundColor = hero.color;
  profileImage.src = hero.image;
  profileImage.alt = `${hero.name} superhero illustration`;
  profileImage.style.animation = 'none';
  void profileImage.offsetWidth;
  profileImage.style.animation = '';
  profileName.textContent = hero.name;
  profileDescription.textContent = hero.description;
  profileNumber.textContent = `STUDENT PROFILE / ${hero.number}`;
}));
const menuToggle = document.querySelector('.mobile-toggle');
const navigation = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 500), { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
