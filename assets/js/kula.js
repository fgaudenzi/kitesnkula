(() => {
  const button = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!button || !links) return;
  const close = () => { button.setAttribute('aria-expanded','false'); links.classList.remove('open'); };
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    links.classList.toggle('open', expanded);
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => { if (!button.contains(e.target) && !links.contains(e.target)) close(); });
})();
