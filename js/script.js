// Espera o carregamento completo da página
window.addEventListener('load', () => {
    // Esconde o loader suavemente
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });
  
  // Funcionalidade de scroll suave entre as seções
  document.querySelectorAll('.parallax').forEach((section) => {
    section.style.scrollBehavior = "smooth";
  });
  
  // Adiciona uma transição suave entre as seções ao rolar
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    document.body.style.scrollBehavior = 'auto'; // Desliga o scroll suave enquanto rola
    scrollTimeout = setTimeout(() => {
      document.body.style.scrollBehavior = 'smooth'; // Ativa o scroll suave após rolar
    }, 150);
  });
  