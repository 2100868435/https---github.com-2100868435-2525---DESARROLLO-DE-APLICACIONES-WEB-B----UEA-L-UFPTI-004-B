const form = document.getElementById("registroForm");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const submitBtn = document.getElementById("submitBtn");

const errors = {
  nombre: document.getElementById("nombreError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError"),
  confirmPassword: document.getElementById("confirmPasswordError"),
  edad: document.getElementById("edadError"),
};

function validarNombre() {
  if (nombre.value.trim().length >= 3) {
    setValid(nombre);
    errors.nombre.textContent = "";
    return true;
  } else {
    setInvalid(nombre);
    errors.nombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    return false;
  }
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value)) {
    setValid(email);
    errors.email.textContent = "";
    return true;
  } else {
    setInvalid(email);
    errors.email.textContent = "Correo inválido.";
    return false;
  }
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  if (regex.test(password.value)) {
    setValid(password);
    errors.password.textContent = "";
    return true;
  } else {
    setInvalid(password);
    errors.password.textContent = "Mínimo 8 caracteres, un número y un carácter especial.";
    return false;
  }
}

function validarConfirmPassword() {
  if (confirmPassword.value === password.value && password.value !== "") {
    setValid(confirmPassword);
    errors.confirmPassword.textContent = "";
    return true;
  } else {
    setInvalid(confirmPassword);
    errors.confirmPassword.textContent = "Las contraseñas no coinciden.";
    return false;
  }
}

function validarEdad() {
  if (parseInt(edad.value) >= 18) {
    setValid(edad);
    errors.edad.textContent = "";
    return true;
  } else {
    setInvalid(edad);
    errors.edad.textContent = "Debes tener al menos 18 años.";
    return false;
  }
}

function setValid(input) {
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function setInvalid(input) {
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function validarFormulario() {
  const valid =
    validarNombre() &&
    validarEmail() &&
    validarPassword() &&
    validarConfirmPassword() &&
    validarEdad();

  submitBtn.disabled = !valid;
}

[nombre, email, password, confirmPassword, edad].forEach((input) => {
  input.addEventListener("input", validarFormulario);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulario enviado con éxito ✅");
  form.reset();
  [nombre, email, password, confirmPassword, edad].forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
  submitBtn.disabled = true;
});
