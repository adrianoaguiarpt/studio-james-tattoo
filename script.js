// ==================== CONFIGURAÇÃO DO ESTÚDIO ====================
// Troque aqui e o site inteiro é atualizado.
const CONFIG = {
  whatsapp: "5561998181020",          // só números, com 55 + DDD
  instagram: "james.tattooart_",            // sem @
};

// ==================== PORTFÓLIO ====================
// cat: "pb" = preto e cinza | "cor" = colorida
// destaque: true = aparece na página inicial
const TRABALHOS = [
  { img: "img/instagram/cobertura-costas-lobo-leao.jpg", titulo: "Cobertura nas costas: lobo e leão", cat: "pb", destaque: true },
  { img: "img/instagram/coruja.jpg", titulo: "Coruja: entre a razão e o instinto", cat: "pb", destaque: true },
  { img: "img/instagram/anjo-da-guarda.jpg", titulo: "Anjo da guarda", cat: "pb" },
  { img: "img/instagram/anjos-antebraco.jpg", titulo: "Anjos no antebraço", cat: "pb" },
  { img: "img/instagram/reforma-capacete-espartano.jpg", titulo: "Reforma: capacete espartano", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-19 at 20.57.22 (4).jpeg", titulo: "Costas fechadas: Cristo e leão", cat: "pb", destaque: true },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.37 (1).jpeg", titulo: "Catrina colorida", cat: "cor", destaque: true },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.40.jpeg", titulo: "Homenagem a Ayrton Senna", cat: "pb", destaque: true },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.37.jpeg", titulo: "Homem-Aranha, Venom e galáxia", cat: "cor", destaque: true },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.41 (2).jpeg", titulo: "Leão e medalha de São Bento", cat: "pb", destaque: true },
  { img: "img/new/WhatsApp Image 2026-04-19 at 21.08.53 (1).jpeg", titulo: "Pôr do sol", cat: "cor", destaque: true },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.40 (1).jpeg", titulo: "Relógio e bússola", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.38.jpeg", titulo: "Leão coroado", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.41.jpeg", titulo: "Águia e relógio", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-19 at 20.57.22 (3).jpeg", titulo: "Retrato feminino", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.39 (2).jpeg", titulo: "Leão e engrenagens", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.41 (1).jpeg", titulo: "Guerreiro espartano", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.41 (3).jpeg", titulo: "Templo oriental", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.39 (1).jpeg", titulo: "Mitologia grega", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.37 (2).jpeg", titulo: "Braço fechado: retrato e lobo", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.40 (2).jpeg", titulo: "Gorila realista", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.39.jpeg", titulo: "Guerreiro no ombro", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.41 (4).jpeg", titulo: "Braço fechado: leão", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.42 (1).jpeg", titulo: "Chefe indígena", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.42.jpeg", titulo: "Braço fechado religioso", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.45 (1).jpeg", titulo: "Anjo", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.45 (2).jpeg", titulo: "Nossa Senhora", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-29 at 19.22.45.jpeg", titulo: "Leão no braço", cat: "pb" },
  { img: "img/new/WhatsApp Image 2026-04-19 at 21.08.53 (2).jpeg", titulo: "Braço fechado: Nossa Senhora", cat: "pb" },
  { img: "img/new/WhatsApp Image 2026-04-19 at 21.08.53.jpeg", titulo: "Zeus", cat: "pb" },
  { img: "img/new/WhatsApp Image 2026-04-19 at 21.08.54.jpeg", titulo: "Chefe indígena no braço", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-19 at 20.57.22 (1).jpeg", titulo: "Antebraço em realismo", cat: "pb" },
  { img: "img/WhatsApp Image 2026-04-19 at 20.57.22 (2).jpeg", titulo: "Antebraço fechado", cat: "pb" },
  { img: "img/new/WhatsApp Image 2026-04-19 at 21.08.53 (3).jpeg", titulo: "Tatuagem na cabeça", cat: "pb" },
];

// ==================== ANTES E DEPOIS (COBERTURAS) ====================
// Pares de fotos na pasta img/antes-depois. Para adicionar um novo,
// copie uma linha e troque os nomes dos arquivos e o título.
const ANTES_DEPOIS = [
  { antes: "img/antes-depois/antes-1.jpg", depois: "img/antes-depois/depois-1.jpg", titulo: "Cobertura: leão antigo virou guerreiro espartano" },
  { antes: "img/antes-depois/antes-2.jpg", depois: "img/antes-depois/depois-2.jpg", titulo: "Reforma: capacete espartano recuperado" },
];

const CATEGORIAS = { pb: "Preto e cinza", cor: "Colorida" };

// ==================== TEMA ESCURO/CLARO ====================
const themeToggle = document.getElementById("theme-toggle");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  if (themeToggle) {
    themeToggle.textContent = tema === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-label", tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
  }
}

function temaSalvo() {
  try { return localStorage.getItem("theme"); } catch { return null; }
}

aplicarTema(temaSalvo() || "dark");

themeToggle?.addEventListener("click", () => {
  const novo = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  try { localStorage.setItem("theme", novo); } catch {}
});

// ==================== MENU MOBILE ====================
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".mobile-menu-btn");

menuBtn?.addEventListener("click", () => {
  const aberto = nav.classList.toggle("aberto");
  menuBtn.textContent = aberto ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", aberto);
});
document.querySelectorAll(".nav a").forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("aberto");
    if (menuBtn) menuBtn.textContent = "☰";
  })
);

// ==================== LINKS DE CONTATO ====================
document.querySelectorAll("[data-whats]").forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsapp}`;
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll("[data-insta]").forEach(a => {
  a.href = `https://instagram.com/${CONFIG.instagram}`;
  a.target = "_blank";
  a.rel = "noopener";
  if (a.dataset.insta === "texto") a.textContent = "@" + CONFIG.instagram;
});

const ano = document.getElementById("year");
if (ano) ano.textContent = new Date().getFullYear();

// ==================== GALERIA + LIGHTBOX ====================
function montarGaleria(container, lista) {
  lista.forEach((t, i) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "galeria-item reveal";
    item.dataset.cat = t.cat;
    item.innerHTML = `
      <img src="${t.img}" alt="Tatuagem ${CATEGORIAS[t.cat].toLowerCase()}: ${t.titulo}" loading="lazy">
      <span class="legenda"><small>${CATEGORIAS[t.cat]}</small>${t.titulo}</span>`;
    item.addEventListener("click", () => abrirLightbox(lista, i));
    container.appendChild(item);
  });
}

const galeriaDestaque = document.getElementById("galeria-destaque");
if (galeriaDestaque) montarGaleria(galeriaDestaque, TRABALHOS.filter(t => t.destaque));

const galeriaCompleta = document.getElementById("galeria");
if (galeriaCompleta) {
  montarGaleria(galeriaCompleta, TRABALHOS);
  document.querySelectorAll(".filtro").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro").forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      const f = btn.dataset.filtro;
      galeriaCompleta.querySelectorAll(".galeria-item").forEach(item => {
        item.classList.toggle("oculto", f !== "todos" && item.dataset.cat !== f);
      });
    });
  });
}

// Lightbox: criado uma vez e reutilizado
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.innerHTML = `
  <button class="lb-btn lb-fechar" aria-label="Fechar">✕</button>
  <button class="lb-btn lb-ant" aria-label="Anterior">‹</button>
  <img alt="">
  <button class="lb-btn lb-prox" aria-label="Próxima">›</button>
  <p></p>`;
document.body.appendChild(lightbox);

let lbLista = [], lbIndex = 0;
function mostrarLightbox() {
  const t = lbLista[lbIndex];
  lightbox.querySelector("img").src = t.img;
  lightbox.querySelector("img").alt = t.titulo;
  lightbox.querySelector("p").textContent = `${t.titulo} · ${CATEGORIAS[t.cat]}`;
}
function abrirLightbox(lista, i) {
  // Na página de trabalhos, navega só pelas fotos do filtro ativo
  const filtro = document.querySelector(".filtro.ativo")?.dataset.filtro;
  lbLista = filtro && filtro !== "todos" ? lista.filter(t => t.cat === filtro) : lista;
  lbIndex = Math.max(0, lbLista.indexOf(lista[i]));
  mostrarLightbox();
  lightbox.classList.add("aberto");
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lb-fechar").focus();
}
function fecharLightbox() {
  lightbox.classList.remove("aberto");
  document.body.style.overflow = "";
}
function passo(d) {
  lbIndex = (lbIndex + d + lbLista.length) % lbLista.length;
  mostrarLightbox();
}
lightbox.querySelector(".lb-fechar").addEventListener("click", fecharLightbox);
lightbox.querySelector(".lb-ant").addEventListener("click", () => passo(-1));
lightbox.querySelector(".lb-prox").addEventListener("click", () => passo(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) fecharLightbox(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("aberto")) return;
  if (e.key === "Escape") fecharLightbox();
  if (e.key === "ArrowLeft") passo(-1);
  if (e.key === "ArrowRight") passo(1);
});

// ==================== ANTES E DEPOIS ====================
const adBox = document.getElementById("antes-depois");
if (adBox && ANTES_DEPOIS.length) {
  adBox.innerHTML = ANTES_DEPOIS.map(par => `
    <figure class="par">
      <div class="par__fotos">
        <div class="par__foto"><img src="${par.antes}" alt="Antes: ${par.titulo}" loading="lazy"><span class="ad-label">Antes</span></div>
        <div class="par__foto"><img src="${par.depois}" alt="Depois: ${par.titulo}" loading="lazy"><span class="ad-label ad-label--depois">Depois</span></div>
      </div>
      <figcaption>${par.titulo}</figcaption>
    </figure>`).join("");
}

// ==================== FORMULÁRIO → WHATSAPP ====================
document.getElementById("form-contato")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const d = new FormData(this);
  const msg =
    `Olá Jesse! Vim pelo site e gostaria de um orçamento.\n\n` +
    `*Nome:* ${d.get("nome")}\n` +
    `*Serviço:* ${d.get("servico")}\n` +
    `*Local do corpo / tamanho:* ${d.get("local") || "-"}\n\n` +
    `*Ideia:* ${d.get("ideia")}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

// ==================== ANIMAÇÃO AO ROLAR ====================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
