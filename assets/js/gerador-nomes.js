import { showAdThen, random } from './main.js';
import nomes from '../data/nomes.json' assert { type: 'json' }; // JSON de nomes

document.getElementById('gerarNome').addEventListener('click', ()=>{
  const tema = document.getElementById('tema').value || 'geral';

  showAdThen(()=>{
    // Escolhe nome aleatório do JSON
    const lista = nomes[tema] || nomes['geral'];
    const nome = random(lista);

    const result = document.getElementById('resultado');
    result.textContent = nome;
    result.style.display = 'flex';
  });
});
