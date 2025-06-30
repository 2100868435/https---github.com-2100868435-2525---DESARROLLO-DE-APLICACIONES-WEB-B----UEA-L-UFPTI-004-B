const input = document.getElementById('imageUrl');
const addBtn = document.getElementById('addImage');
const removeBtn = document.getElementById('removeImage');
const gallery = document.getElementById('gallery');
let selectedImage = null;

addBtn.addEventListener('click', () => {
  const url = input.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen de galería';
    img.addEventListener('click', () => selectImage(img));
    gallery.appendChild(img);
    input.value = '';
  }
});

function selectImage() {
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }
  selectedImage = img;
  selectedImage.classList.add('selected');
}

removeBtn.addEventListener('click', () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  }
});

// Extra: Tecla Enter para agregar imagen 
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

