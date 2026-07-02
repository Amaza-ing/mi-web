const boton = document.getElementById('saludar');
const mensaje = document.getElementById('mensaje');
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Gracias por hacer clic!';
});

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours + minutes / 60 + seconds / 3600) / 12) * 360;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);

// Genera la funcionalidad para cambiar el tema de la página cuando el usuario haga clic en el botón con id="toggle-theme"
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-theme');
});
