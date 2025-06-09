document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const errorMessageDiv = document.getElementById("errorMessage");

  function showMessage(message, type = "error") {
    errorMessageDiv.textContent = message;
    errorMessageDiv.className =
      type === "error" ? "error-message" : "success-message";
    errorMessageDiv.style.display = "block";
  }

  function clearMessage() {
    errorMessageDiv.textContent = "";
    errorMessageDiv.style.display = "none";
    errorMessageDiv.classList.remove("error-message", "success-message");
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearMessage();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      showMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    const validEmail = "teste@acurax.com";
    const validPassword = "senha123";

    if (email === validEmail && password === validPassword) {
      showMessage("Login bem-sucedido! Redirecionando...", "success");
      // setTimeout(() => {
      //     window.location.href = 'dashboard.html';
      // }, 2000);
    } else {
      showMessage("Email ou senha inválidos. Tente novamente.", "error");
    }
  });
});
