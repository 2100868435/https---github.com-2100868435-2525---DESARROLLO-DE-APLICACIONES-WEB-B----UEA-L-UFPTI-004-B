// Función de alerta personalizada
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let mensaje = document.getElementById("mensaje");
  let valido = true;

  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  if (!email.value.trim() || !email.value.includes("@")) {
    email.classList.add("is-invalid");
    valido = false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (!mensaje.value.trim()) {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (valido) {
    alert("Formulario enviado correctamente.");
    this.reset();
  }
});
