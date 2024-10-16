document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.getElementById('menu');
    const closeButton = document.querySelector('.menu-close');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        menu.classList.toggle('visible');
        menu.classList.toggle('hidden');
        overlay.classList.toggle('visible');
        overlay.classList.toggle('hidden');
    }

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});


// Simular usuario logueado o no logueado
document.addEventListener('DOMContentLoaded', function() {
    const userNameSpan = document.getElementById('user-name');
    const overlay = document.getElementById('overlay');
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.querySelector('.dropdown');
  
    // Simulación: Si no hay usuario, mostrar "iniciar sesión"
    const user = null; // Cambia a un objeto si el usuario está autenticado, por ejemplo: { name: 'Juan' }
    
    if (user) {
      userNameSpan.textContent = user.name;
    } else {
      userNameSpan.textContent = 'iniciar sesión';
    }
  
    // Mostrar fondo oscuro y el menú desplegable cuando se hace clic en "Hola"
    userMenu.addEventListener('click', function() {
      dropdown.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  
    // Ocultar el menú y el fondo oscuro cuando se hace clic fuera del menú
    overlay.addEventListener('click', function() {
      dropdown.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    // Evitar que se cierre al hacer clic dentro del menú
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });


document.querySelectorAll('.toggle-form').forEach(button => {
    button.addEventListener('click', function() {
        const advisorDetails = this.nextElementSibling;
        advisorDetails.style.display = (advisorDetails.style.display === 'block') ? 'none' : 'block';
    });
});
