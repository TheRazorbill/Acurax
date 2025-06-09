document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgotPasswordCodeForm");
  const codeInput = document.getElementById("codeInput");
  const errorMessageDiv = document.getElementById("errorMessage");

  const VALID_CODE = "123456";

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

    const code = codeInput.value.trim();

    if (code === "") {
      showMessage("Por favor, digite o código.", "error");
      return;
    }

    if (code === VALID_CODE) {
      showMessage("Código confirmado! Redirecionando...", "success");
      setTimeout(() => {
        window.location.href = "reset_password.html";
      }, 2000);
    } else {
      showMessage("Código inválido. Tente novamente.", "error");
    }
  });
});
