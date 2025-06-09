document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgotPasswordEmailForm");
  const emailInput = document.getElementById("emailInput");
  const errorMessageDiv = document.getElementById("errorMessage");

  const VALID_EMAIL = "teste@acurax.com";

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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessage();

    const email = emailInput.value.trim();

    if (email === "") {
      showMessage("Por favor, digite seu email.", "error");
      return;
    }

    if (email === VALID_EMAIL) {
      showMessage("Código enviado para o seu email!", "success");
      setTimeout(() => {
        window.location.href = "forgot_password_code.html";
      }, 2000);
    } else {
      showMessage("Email não encontrado em nossa base de dados.", "error");
    }
  });
});
