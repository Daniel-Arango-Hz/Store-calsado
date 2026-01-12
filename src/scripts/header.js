export function initHeader() {
  const userBtn = document.getElementById('userBtn');
  const userMenu = document.getElementById('userMenu');
  const loginMenuBtn = document.getElementById('loginMenuBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const adminMenu = document.getElementById('adminMenu');
  const subtitle = document.getElementById('subtitle');
  const loginDialog = document.getElementById('loginDialog');

  function syncHeader() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (isAdmin) {
      adminMenu.classList.remove('hidden');
      subtitle.textContent = 'Panel de Administración';
      logoutBtn.classList.remove('hidden');
      loginMenuBtn.classList.add('hidden');
    } else {
      adminMenu.classList.add('hidden');
      subtitle.textContent = 'Catálogo de Productos';
      logoutBtn.classList.add('hidden');
      loginMenuBtn.classList.remove('hidden');
    }
  }

  userBtn.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });

  loginMenuBtn.addEventListener('click', () => {
    userMenu.classList.add('hidden');
    if (loginDialog) {
      loginDialog.classList.remove('hidden');
    }
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isAdmin');
    location.reload();
  });

  document.addEventListener('click', (e) => {
    if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.classList.add('hidden');
    }
  });

  // Sincronizar cuando cambia el storage en otra pestaña
  window.addEventListener('storage', syncHeader);

  syncHeader();
}
