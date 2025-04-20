document.addEventListener('DOMContentLoaded', () => {
  // Ativa animações suaves quando o elemento entra na tela
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  });

  document.querySelectorAll('.momento').forEach(el => observer.observe(el));

  // Mostra a aba especial ao clicar no botão
  window.irParaEspecial = function () {
    const especial = document.getElementById('especial');
    especial.classList.remove('escondido');
    especial.scrollIntoView({ behavior: 'smooth' });
  };
});

document.querySelectorAll('.momento img').forEach(el => observer.observe(el)); // Observando as imagens também

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo');
    }
  });
}, { threshold: 0.5 }); // 0.5 significa que 50% do elemento precisa estar visível

window.scrollTo({
  top: 0,
  behavior: 'smooth'
});

window.irParaEspecial = function () {
  const especial = document.getElementById('especial');
  especial.classList.remove('escondido');
  especial.classList.add('fade-in'); // Adiciona o efeito fade-in
  especial.scrollIntoView({ behavior: 'smooth' });
};

window.irParaEspecial = function () {
  const especial = document.getElementById('especial');
  if (!especial.classList.contains('escondido')) {
    return; // Se já estiver visível, não faz nada
  }
  
  especial.classList.remove('escondido');
  especial.classList.add('fade-in');
  especial.scrollIntoView({ behavior: 'smooth' });
};

window.irParaEspecial = function () {
  const especial = document.getElementById('especial');
  const botao = document.querySelector('.botao-container button');
  
  if (!especial.classList.contains('escondido')) {
    return;
  }
  
  botao.disabled = true; // Desativa o botão
  especial.classList.remove('escondido');
  especial.classList.add('fade-in');
  especial.scrollIntoView({ behavior: 'smooth' });
  
  // Após 1 segundo, reativa o botão
  setTimeout(() => botao.disabled = false, 1000);
};
