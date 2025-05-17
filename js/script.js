
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
  
// Adiciona o evento de clique para o link "Registrar-se"
document.getElementById('showRegisterForm').addEventListener('click', function() {
  mensagem.textContent = '';
  // Esconde o formulário de login
  document.querySelector('.login-form').style.display = 'none';
  // Exibe o formulário de registro
  document.querySelector('.register-form').style.display = 'block';
});

// Adiciona o evento de clique para o link "Entrar"
document.getElementById('showLoginForm').addEventListener('click', function() {
    mensagem.textContent = '';
  // Esconde o formulário de registro
  document.querySelector('.register-form').style.display = 'none';
  // Exibe o formulário de login
  document.querySelector('.login-form').style.display = 'block';
});

