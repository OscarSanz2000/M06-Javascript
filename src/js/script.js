function saveNameInCookie() {
  const name = document.getElementById('name').value;

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  document.cookie = `userName=${name}; expires=${expirationDate.toUTCString()}`;

  alert('Nombre guardado en la cookie.');
}

document.getElementById('execute').addEventListener('click', saveNameInCookie);
