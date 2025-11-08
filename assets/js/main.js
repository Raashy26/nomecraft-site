// Atualiza automaticamente o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Função para exibir anúncios antes de mostrar resultados
export function showAdThen(callback) {
  try {
    if(window.Monetag && typeof window.Monetag.open === 'function'){
      window.Monetag.open(); // Monetag popunder
    } else {
      const w = window.open('about:blank','_blank');
      if(w) setTimeout(()=>w.close(),700);
    }
  } catch(e) {
    // fallback silencioso
  }
  setTimeout(callback, 900); // atraso para simular carregamento do anúncio
}

// Função utilitária
export function random(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
