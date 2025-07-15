function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío si hay errores

  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor completa todos los campos obligatorios.");
  } else {
    alert("Formulario enviado correctamente. ¡Gracias!");
    this.reset();
  }
});
