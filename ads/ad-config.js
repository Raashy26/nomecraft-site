// Configuração de anúncios Monetag
window.MonetagConfig = {
  popunderDelay: 900,  // tempo em ms antes de mostrar resultado
  adTarget: 'about:blank', // URL de fallback para testes
  autoClose: 700, // tempo em ms para fechar popup de teste
  showOnClick: true, // mostrar anúncio apenas após interação do usuário
  // função para chamar o Monetag real
  openAd: function() {
    if(window.Monetag && typeof window.Monetag.open === 'function') {
      window.Monetag.open();
    } else {
      const w = window.open(this.adTarget,'_blank');
      if(w) setTimeout(()=>w.close(), this.autoClose);
    }
  }
};
