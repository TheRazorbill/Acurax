document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const usernameInput = document.getElementById("usernameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const confirmPasswordInput = document.getElementById("confirmPasswordInput");
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

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearMessage();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      showMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    if (password.length < 6) {
      showMessage("A senha deve ter pelo menos 6 caracteres.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("As senhas não coincidem.", "error");
      return;
    }

    const registeredEmails =
      JSON.parse(localStorage.getItem("registeredEmails")) || [];

    if (registeredEmails.includes(email)) {
      showMessage(
        "Este e-mail já está registrado. Por favor, use outro e-mail.",
        "error"
      );
      return;
    }

    registeredEmails.push(email);
    localStorage.setItem("registeredEmails", JSON.stringify(registeredEmails));

    showMessage(
      "Registro bem-sucedido! Redirecionando para a página de login...",
      "success"
    );
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });
});
