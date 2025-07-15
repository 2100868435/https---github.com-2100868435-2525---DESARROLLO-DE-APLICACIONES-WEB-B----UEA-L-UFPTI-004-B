// Arreglo de productos iniciales
const productos = [
  {
    nombre: "Producto A",
    precio: 10.00,
    descripcion: "Este es el producto A."
  },
  {
    nombre: "Producto B",
    precio: 20.00,
    descripcion: "Este es el producto B."
  },
  {
    nombre: "Producto C",
    precio: 15.50,
    descripcion: "Este es el producto C."
  }
];

// Función para renderizar la lista de productos
function renderizarLista() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar la lista antes de volver a renderizar

  productos.forEach((producto, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: $${producto.precio.toFixed(2)}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("agregar-btn").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: `Producto ${String.fromCharCode(68 + productos.length)}`,
    precio: Math.floor(Math.random() * 50) + 10,
    descripcion: "Descripción generada automáticamente."
  };

  productos.push(nuevoProducto);
  renderizarLista();
});

// Renderizar productos al cargar la página
document.addEventListener("DOMContentLoaded", renderizarLista);
