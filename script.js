const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    if (!phone && !email) {
      alert('Vyplňte prosím telefon nebo e-mail.');
      return;
    }
    const subject = `Poptávka z webu – ${data.get('vehicle') || 'vozidlo'} ${data.get('brand') || ''} ${data.get('model') || ''}`.trim();
    const body = [
      `Jméno: ${data.get('name') || ''}`,
      `Telefon: ${phone}`,
      `E-mail: ${email}`,
      `Typ vozidla: ${data.get('vehicle') || ''}`,
      `Značka: ${data.get('brand') || ''}`,
      `Model: ${data.get('model') || ''}`,
      '',
      `Popis: ${data.get('message') || ''}`
    ].join('\n');
    window.location.href = `mailto:montygarage@email.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
