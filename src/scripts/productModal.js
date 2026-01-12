export function initProductModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('closeProductModal');
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.getElementById('thumbnails');
  const addToCartBtn = document.getElementById('addToCart');

  function closeModal() {
    modal.classList.add('hidden');
  }

  function renderThumbnails(images) {
    thumbnails.innerHTML = '';
    images.forEach((img, i) => {
      const thumb = document.createElement('img');
      thumb.src = img;
      thumb.className = 'w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-black transition';
      thumb.addEventListener('click', () => {
        mainImage.src = img;
        document.getElementById('imageIndex').textContent = i + 1;
      });
      thumbnails.appendChild(thumb);
    });
  }

  function updateModalContent(product) {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productRef').textContent = `Referencia: ${product.reference}`;
    document.getElementById('productColor').textContent = `Color: ${product.color}`;
    document.getElementById('productSize').textContent = `Talla: ${product.size}`;
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('productDescription').textContent = product.description;
    
    const stockElement = document.getElementById('productStock');
    const availabilityBadge = document.getElementById('availabilityBadge');
    
    if (product.stock > 0) {
      stockElement.textContent = `Stock disponible: ${product.stock} unidades`;
      availabilityBadge.textContent = 'En stock';
      availabilityBadge.className = 'inline-block px-5 py-2 bg-green-500 text-white rounded-xl';
    } else {
      stockElement.textContent = 'Producto sin disponibilidad';
      availabilityBadge.textContent = 'Sin stock';
      availabilityBadge.className = 'inline-block px-5 py-2 bg-red-500 text-white rounded-xl';
    }

    mainImage.src = product.images[0];
    document.getElementById('imageIndex').textContent = 1;
    document.getElementById('imageTotal').textContent = product.images.length;

    renderThumbnails(product.images);
    modal.classList.remove('hidden');
  }

  // Event listeners para tarjetas de producto
  document.querySelectorAll('[data-product]').forEach(card => {
    card.addEventListener('click', () => {
      const product = JSON.parse(card.dataset.product);
      updateModalContent(product);
    });
  });

  // Cerrar modal
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  
}
