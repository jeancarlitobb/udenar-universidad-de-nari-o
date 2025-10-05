// Pequeñas interacciones y utilidades comunes
document.addEventListener('DOMContentLoaded', () => {
  // poner año en footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // mejora para enlaces que apunten a "#"
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      alert('Enlace de ejemplo — reemplaza por la URL real.');
    })
  })
});
