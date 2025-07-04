const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const confirmar = document.getElementById('confirmar');
const edad = document.getElementById('edad');
const enviar = document.getElementById('enviar');

const nombreError = document.getElementById('nombreError');
const correoError = document.getElementById('correoError');
const contraseñaError = document.getElementById('contraseñaError');
const confirmarError = document.getElementById('confirmarError');
const edadError = document.getElementById('edadError');

function validarNombre() {
  if (nombre.value.length >= 3) {
    nombre.classList.add('valid');
    nombre.classList.remove('invalid');
    nombreError.textContent = '';
    return true;
  } else {
    nombre.classList.add('invalid');
    nombre.classList.remove('valid');
    nombreError.textContent = 'El nombre debe tener al menos 3 caracteres.';
    return false;
  }
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(correo.value)) {
    correo.classList.add('valid');
    correo.classList.remove('invalid');
    correoError.textContent = '';
    return true;
  } else {
    correo.classList.add('invalid');
    correo.classList.remove('valid');
    correoError.textContent = 'Correo no válido.';
    return false;
  }
}

function validarContraseña() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  if (regex.test(contraseña.value)) {
    contraseña.classList.add('valid');
    contraseña.classList.remove('invalid');
    contraseñaError.textContent = '';
    return true;
  } else {
    contraseña.classList.add('invalid');
    contraseña.classList.remove('valid');
    contraseñaError.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.';
    return false;
  }
}

function validarConfirmación() {
  if (confirmar.value === contraseña.value && contraseña.value !== '') {
    confirmar.classList.add('valid');
    confirmar.classList.remove('invalid');
    confirmarError.textContent = '';
    return true;
  } else {
    confirmar.classList.add('invalid');
    confirmar.classList.remove('valid');
    confirmarError.textContent = 'Las contraseñas no coinciden.';
    return false;
  }
}

function validarEdad() {
  const edadNum = parseInt(edad.value);
  if (!isNaN(edadNum) && edadNum >= 18) {
    edad.classList.add('valid');
    edad.classList.remove('invalid');
    edadError.textContent = '';
    return true;
  } else {
    edad.classList.add('invalid');
    edad.classList.remove('valid');
    edadError.textContent = 'Debes tener al menos 18 años.';
    return false;
  }
}

function validarFormulario() {
  const esValido =
    validarNombre() &&
    validarCorreo() &&
    validarContraseña() &&
    validarConfirmación() &&
    validarEdad();

  enviar.disabled = !esValido;
}

[nombre, correo, contraseña, confirmar, edad].forEach((campo) => {
  campo.addEventListener('input', validarFormulario);
});

document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Formulario enviado con éxito 🎉');
});


