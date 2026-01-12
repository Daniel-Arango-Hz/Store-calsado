export function initPageNavigation() {
  console.log('initPageNavigation iniciado');
  
  function handleViewNavigation() {
    const buttons = document.querySelectorAll('[data-view]');
    console.log('Botones encontrados:', buttons.length);
    
    if (buttons.length === 0) {
      console.warn('No se encontraron botones con data-view');
      return;
    }

    buttons.forEach((btn, index) => {
      console.log(`Botón ${index}:`, btn.dataset.view);
      
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Click en botón:', btn.dataset.view);
        
        // Actualizar estado activo de botones
        buttons.forEach(b => {
          b.classList.remove('bg-black', 'text-white');
          b.classList.add('hover:bg-muted');
        });
        
        btn.classList.remove('hover:bg-muted');
        btn.classList.add('bg-black', 'text-white');

        // Ocultar todas las vistas
        const allViews = document.querySelectorAll('[id$="View"]');
        console.log('Vistas encontradas:', allViews.length);
        
        allViews.forEach(view => {
          view.classList.add('hidden');
        });

        // Mostrar vista seleccionada
        const viewId = btn.dataset.view + 'View';
        console.log('Buscando vista:', viewId);
        
        const viewElement = document.getElementById(viewId);
        if (viewElement) {
          viewElement.classList.remove('hidden');
          console.log('Vista mostrada:', viewId);
        } else {
          console.warn(`Vista no encontrada: ${viewId}`);
        }
      });
    });
  }

  // Esperar a que los botones estén listos
  function initWhenReady() {
    const buttons = document.querySelectorAll('[data-view]');
    const adminMenu = document.getElementById('adminMenu');
    
    console.log('Esperando botones. Menu admin visible:', adminMenu && !adminMenu.classList.contains('hidden'));
    console.log('Botones con data-view:', buttons.length);
    
    if (buttons.length > 0) {
      console.log('Botones listos, inicializando navegación');
      handleViewNavigation();
    } else {
      // Reintentar después de un pequeño delay
      setTimeout(initWhenReady, 100);
    }
  }

  // Sincronizar vista cuando cambia el estado de admin
  window.addEventListener('storage', () => {
    console.log('Storage cambió');
    initWhenReady();
  });
  
  // Inicializar con delay
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initWhenReady, 500);
    });
  } else {
    setTimeout(initWhenReady, 500);
  }
}
