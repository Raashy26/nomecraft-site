import { showAdThen, random } from './main.js';
import bios from '../data/bios.json' assert { type: 'json' }; // JSON de bios

document.getElementById('gerarBio').addEventListener('click', ()=>{
  const tema = document.getElementById('temaBio').value || 'followers';

  showAdThen(()=>{
    const lista = bios[tema] || bios['followers'];
    let bio = random(lista);

    // Adiciona emoji aleatório
    const emojis = ["✨","🔥","😎","❤️","🌟"];
    bio += " " + random(emojis);

    const result = document.getElementById('resultadoBio');
    result.textContent = bio;
    result.style.display = 'flex';
  });
});
