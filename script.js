const greeting = document.getElementById('greeting');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  greeting.textContent = '¡Hola Mundo! soy Santi.';
});
