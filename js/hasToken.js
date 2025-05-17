const loginButton = document.getElementById("loginButton");
const signInButton = document.getElementById("signInButton");
const logoutButton = document.getElementById("logoutButton");

window.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
        return;
  }
  try {
    const response = await fetch("https://simpleuserbackend.onrender.com/user/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    });
    if (response.ok) {
        logoutButton.style.display = 'block'
        loginButton.style.display = 'none';
        signInButton.style.display = 'none';
    }
  } catch (error) {
        console.error("Erro ao verificar o token:", error);
  }
});

const logout = async ()=>{
  localStorage.removeItem("token");
  logoutButton.style.display = 'none'
  loginButton.style.display = 'block';
  signInButton.style.display = 'block';
}