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

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide img');
    const next = document.querySelector('.carousel-next1');
    const prev = document.querySelector('.carousel-prev1');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        const slideContainer = document.querySelector('.carousel-slide');
        slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});


// Simular usuario logueado o no logueado
document.addEventListener('DOMContentLoaded', function() {

  userMenu.addEventListener('click', function(event) {
    dropdown.classList.toggle('active');
    overlay.classList.toggle('active');
    event.stopPropagation(); // Evita que el evento burbujee
});
    const userNameSpan = document.getElementById('user-name');
    const overlay = document.getElementById('overlay');
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.querySelector('.dropdown');
  
    // Simulación: Si no hay usuario, mostrar "iniciar sesión"
    const user = null; // Cambia a un objeto si el usuario está autentica do, por ejemplo: { name: 'Juan' }
    
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




  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel img');
  const totalImages = images.length;
  const imageCounter = document.querySelector('.image-counter');
  
  function showNextImage() {
      images[currentImageIndex].style.display = 'none';
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      images[currentImageIndex].style.display = 'block';
      imageCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;
  }
  
  setInterval(showNextImage, 5000); // Cambia de imagen cada 5 segundos
  




  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-slider img');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Inicializar el carrusel mostrando la primera imagen
    showImage(currentIndex);

    // Configurar los botones de navegación
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Configurar el cambio automático de imágenes cada 4 segundos
    setInterval(nextImage, 4000);
});


document.querySelectorAll('.service-item a').forEach(item => {
  item.addEventListener('click', (event) => {
      console.log('Imagen clickeada: ', event.target.alt);
  });
});
