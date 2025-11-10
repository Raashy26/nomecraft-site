document.addEventListener("DOMContentLoaded", () => {
  // ---------- HEADER HTML ----------
  const headerHTML = `
    <header class="site-header">
      <div class="container">
        <a href="index.html" class="logo"><span>.</span></a>

        <nav class="nav-links" id="navLinks">
          <a href="gerador-nomes.html">Gerador de Nomes</a>
          <a href="gerador-bios.html">Gerador de Bios</a>
          <a href="dicas.html">Dicas</a>
          <a href="sobre.html">Sobre</a>
        </nav>

        <div class="cta" style="margin-left: 20px;">
          <a href="gerador-nomes.html" class="btn">✨ Gerar Agora</a>
        </div>

        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;

  // ---------- FOOTER HTML ----------
  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <p>© <span id="year"></span> NomeCraft — Criado com 💡 e criatividade.</p>
      </div>
    </footer>
  `;

  // ---------- INJETAR ----------
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- MENU MOBILE ----------
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
});
