// ==================== TEMA ESCURO/CLARO ====================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');

// Função para alternar tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Muda o ícone
  if (themeIcon) {
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  }
}

// Função para carregar tema salvo
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Se tem tema salvo, usa ele, senão usa preferência do sistema
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
      themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.textContent = '☀️';
  }
}

// Adiciona evento ao botão
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Carrega o tema ao iniciar
loadTheme();

// ==================== ANO ATUAL NO FOOTER ====================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ==================== MENU MOBILE ====================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
      mobileMenuBtn.textContent = '✕';
    } else {
      mobileMenuBtn.textContent = '☰';
    }
  });
}

// Fecha menu ao clicar em link
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
    }
  });
});

// ==================== FORMULÁRIO DE CONTATO ====================
const formContato = document.getElementById('form-contato');
if (formContato) {
  formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = this.querySelector('input[type="text"]')?.value;
    const email = this.querySelector('input[type="email"]')?.value;
    const mensagem = this.querySelector('textarea')?.value;
    
    if (!nome || !email || !mensagem) {
      alert('⚠️ Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    alert(`✅ Mensagem enviada com sucesso, ${nome}!\n\nEm breve entrarei em contato.`);
    this.reset();
  });
}

// ==================== ANIMAÇÃO DE SCROLL ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .diferencial, .contato-info, .contato-form').forEach(el => {
  observer.observe(el);
});

// CSS para animação (adicione ao style.css)
const style = document.createElement('style');
style.textContent = `
  .card, .diferencial, .contato-info, .contato-form {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .card.visible, .diferencial.visible, .contato-info.visible, .contato-form.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// ==================== MENSAGEM NO CONSOLE ====================
console.log('%c🎨 James Tatto Art | Modo Claro/Escuro disponível!', 'color: #e63946; font-size: 16px; font-weight: bold;');
console.log('%c🌙 Clique no ícone para alternar o tema', 'color: #ccc; font-size: 12px;');