export function initLoginDialog() {
  const loginDialog = document.getElementById('loginDialog');
  const closeLoginBtn = document.getElementById('closeLoginBtn');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (!loginDialog || !loginForm) {
    console.warn('Elementos de login no encontrados');
    return;
  }

  function closeDialog() {
    loginDialog.classList.add('hidden');
    loginForm.reset();
    loginError.classList.add('hidden');
  }

  function showError() {
    loginError.classList.remove('hidden');
  }

  function hideError() {
    loginError.classList.add('hidden');
  }

  closeLoginBtn.addEventListener('click', closeDialog);

  loginDialog.addEventListener('click', (e) => {
    if (e.target === loginDialog) {
      closeDialog();
    }
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      location.reload();
    } else {
      showError();
      passwordInput.value = '';
    }
  });

  usernameInput.addEventListener('input', hideError);
  passwordInput.addEventListener('input', hideError);
}
