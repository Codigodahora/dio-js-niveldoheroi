// Solicita as informações do usuário
const nomeHeroi = gets();
const xpHeroi = parseInt(gets());

// Função para classificar o herói com base na experiência
function classificarHeroi(nome, xp) {
  let nivel = '';

  if (xp < 1000) {
    nivel = 'Ferro';
  } else if (xp <= 2000) {
    nivel = 'Bronze';
  } else if (xp <= 5000) {
    nivel = 'Prata';
  } else if (xp <= 7000) {
    nivel = 'Ouro';
  } else if (xp <= 8000) {
    nivel = 'Platina';
  } else if (xp <= 9000) {
    nivel = 'Ascendente';
  } else if (xp <= 10000) {
    nivel = 'Imortal';
  } else {
    nivel = 'Radiante';
  }

  // Imprime a mensagem final
  print(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Classifica o herói com base na experiência fornecida
classificarHeroi(nomeHeroi, xpHeroi);
