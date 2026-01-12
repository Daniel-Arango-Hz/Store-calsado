export function initProductGrid() {
  const addProductBtn = document.getElementById('addProductBtn');

  function syncAdminButtons() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const adminActions = document.querySelectorAll('#adminActions');
    
    // Mostrar/ocultar botón de agregar
    if (addProductBtn) {
      if (isAdmin) {
        addProductBtn.classList.remove('hidden');
      } else {
        addProductBtn.classList.add('hidden');
      }
    }

    // Mostrar/ocultar botones de editar y eliminar
    adminActions.forEach(action => {
      if (isAdmin) {
        action.classList.remove('hidden');
        action.classList.add('flex');
      } else {
        action.classList.add('hidden');
        action.classList.remove('flex');
      }
    });
  }

  // Mostrar botones si es admin
  window.addEventListener('storage', syncAdminButtons);
  syncAdminButtons();

  // Botón para agregar producto
  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => {
      openAddProductModal();
    });
  }

  // Event listener para editar
  document.querySelectorAll('.adminEditBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productCard = btn.closest('[data-product]');
      const product = JSON.parse(productCard.dataset.product);
      
      openEditModal(product);
    });
  });

  // Event listener para eliminar
  document.querySelectorAll('.adminDeleteBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productCard = btn.closest('[data-product]');
      const product = JSON.parse(productCard.dataset.product);
      
      openDeleteModal(product);
    });
  });

  // Event listener para ver detalles (click en card)
  document.querySelectorAll('[data-product]').forEach(card => {
    card.addEventListener('click', () => {
      const product = JSON.parse(card.dataset.product);
      const editBtn = card.querySelector('.adminEditBtn');
      
      // Solo abrir modal de detalles si no es admin o no hace click en botones
      if (!editBtn || localStorage.getItem('isAdmin') !== 'true') {
        const modal = document.getElementById('productModal');
        if (modal) {
          const event = new CustomEvent('openProductModal', { detail: product });
          window.dispatchEvent(event);
        }
      }
    });
  });
}

function openAddProductModal() {
  const modal = document.getElementById('addProductModal');
  if (modal) {
    document.getElementById('addProductForm').reset();
    document.getElementById('imagePreviewContainer').innerHTML = '';
    modal.classList.remove('hidden');
  }
}

function openEditModal(product) {
  const modal = document.getElementById('editProductModal');
  if (modal) {
    document.getElementById('editProductId').value = product.id;
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductReference').value = product.reference;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductStock').value = product.stock;
    document.getElementById('editProductColor').value = product.color;
    document.getElementById('editProductSize').value = product.size;
    document.getElementById('editProductDescription').value = product.description;
    
    // Mostrar preview de imágenes
    const editImagePreview = document.getElementById('editImagePreviewContainer');
    editImagePreview.innerHTML = '';
    product.images.forEach((img, index) => {
      const previewDiv = document.createElement('div');
      previewDiv.className = 'relative w-20 h-20';
      previewDiv.innerHTML = `
        <img src="${img}" alt="preview" class="w-full h-full object-cover rounded-lg" />
        <button type="button" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center" data-image-index="${index}">×</button>
      `;
      editImagePreview.appendChild(previewDiv);
    });
    
    modal.classList.remove('hidden');
  }
}

function openDeleteModal(product) {
  const modal = document.getElementById('deleteProductModal');
  if (modal) {
    document.getElementById('deleteProductId').value = product.id;
    document.getElementById('deleteProductName').textContent = product.name;
    modal.classList.remove('hidden');
  }
}
