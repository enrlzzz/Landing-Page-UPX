const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const mensagem = document.getElementById("mensagem");
  
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const response = await fetch("https://simpleuserbackend.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            email: emailLogin.value,
            senha: passwordLogin.value
        })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.replace("../html/index.html");
      } else {
        mensagem.textContent = data.messages;
      }
    } catch (error) {
      console.error("Erro:", error);
      mensagem.textContent = data.messages;
    }
});

document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const response = await fetch("https://simpleuserbackend.onrender.com/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            email: emailRegister.value,
            senha: passwordRegister.value
        })
      });
      const data = await response.json();
      if (response.ok) {
        document.querySelector('.register-form').style.display = 'none';
        document.querySelector('.login-form').style.display = 'block';
      } else {
        mensagem.textContent = data.messages[0].message;
      }
    } catch (error) {
      console.error("Erro:", error);
      mensagem.textContent = data.messages[0].message;
    }
});
