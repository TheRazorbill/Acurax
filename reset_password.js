document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resetPasswordForm");
  const newPasswordInput = document.getElementById("newPasswordInput");
  const confirmNewPasswordInput = document.getElementById(
    "confirmNewPasswordInput"
  );
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessage();

    const newPassword = newPasswordInput.value.trim();
    const confirmNewPassword = confirmNewPasswordInput.value.trim();

    if (newPassword === "" || confirmNewPassword === "") {
      showMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    if (newPassword.length < 6) {
      showMessage("A nova senha deve ter pelo menos 6 caracteres.", "error");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      showMessage("As senhas não coincidem.", "error");
      return;
    }

    // Simulação de redefinição bem-sucedida
    showMessage(
      "Senha redefinida com sucesso! Você será redirecionado para o login.",
      "success"
    );
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });
});
