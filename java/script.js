




document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    const imageCounter = document.querySelector('.image-counter');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    // Función para actualizar el contador de imágenes
    function updateImageCounter() {
        imageCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;
    }

    // Función para mostrar la imagen actual
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        updateImageCounter();
    }

    // Función para mostrar la siguiente imagen
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    // Función para mostrar la imagen anterior
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    }

    // Configurar botones de navegación
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Cambiar automáticamente cada 5 segundos
    setInterval(showNextImage, 5000); // Si se desea mantener el cambio automático

    updateImageCounter(); // Inicializa el contador
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




// Obtener el modal
var modal = document.getElementById("delivery-modal");

// Obtener el enlace que abre el modal
var link = document.getElementById("delivery-link");

// Obtener el elemento de cierre
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el enlace, se abre el modal
link.onclick = function(event) {
    event.preventDefault(); // Evita que el enlace realice una acción por defecto
    modal.style.display = "block";
}

// Cuando el usuario hace clic en el botón de cierre, se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







// Datos de comunas por región
const comunasPorRegion = {
    metropolitana: [
        "Santiago",
        "Las Condes",
        "Providencia",
        "Ñuñoa",
        "Maipu",
        "Cerrillos",
        "Estación Central",
        "La Florida",
        "Las Condes",
        "Lo Espejo",
        "Lo Prado",
        "Maipu",
        "Ñuñoa",
        "Providencia",
        "Pudahuel",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Vitacura",
        "Lampa",
        "Puente Alto",
        "San Bernardo",
        "San José de Maipo",
        // Añadir más comunas
    ],
    valparaiso: [
        "Valparaiso",
        "Los Andes",
        "Calle Larga",
        "Rinconada",
        "San Esteban",
        "Quillota",
        "La Calera",
        "Hijuelas",
        "La Cruz",
        "Nogales",
        
        "Casablanca",
        "Concón",
        "Juan Fernández",
        "Puchuncaví",
        "Quintero",
        "Viña del Mar",
        "La Ligua",
        "Cabildo",
        "Papudo",
        "Petorca",
        "Zapallar",
        "San Antonio",
        "Algarrobo",
        "Cartagena",
        "El Quisco",
        "El Tabo",
        "Santo Domingo",
        "San Felipe",
        "Catemu",
        "Llaillay",
        "Panquehue",
        "Putaendo",
        "Santa María",
        "Quilpué",
        "Limache",
        "Olmué",
        "Villa Alemana",
    ],
    biobio: [
        "Yumbel",
        "Cabrero",
        "San Roseando",
        "Laja",
        "Nacimiento",
        "Negrete",
        "Mulchém",
        "Quilaco",
        "Santa Bárbara",
        "Antuco",
        "Quilleco",
        "Tucapel",
        "Alto Biobío",
        "Los Ángeles",
    ],
    arica: [
        "Arica",
        "Putre",
        "General Lagos",
        "Camarones",
        // Añadir más comunas
    ],
    tarapacá: [
        "Tarapacá",
        "Iquique",
        "Alto Hospicio",
        "Tamarugal",
        "Camiña",
        "Colchane",
        "Huara",
        "Pica",
        "Pozo Almonte",
        // Añadir más comunas
    ],
    antofagasta: [
        "Antofagasta",
        "Calama",
        "Tocopilla",
        "Mejillones",
        "María Elena",
        "Taltal",
        "Sierra Gorda",
        "San Pedro de Atacama",
        "Ollagüe",
        // Añadir más comunas
    ],
    atacama: [
        "Atacama",
        "Chañaral",
        "Diego de Almagro",
        "Caldera",
        "Copiapó",
        "Tierra Amarilla",
        "Alto del Carmen",
        "Freirina",
        "Huasco",
        "Vallenar",
        // Añadir más comunas
    ],
    coquimbo: [
        "Coquimbo",
        "Canela",
        "Illapel",
        "Los Vilos",
        "Salamanca",
        "Andacollo",
        "Coquimbo",
        "La Higuera",
        "La Serena",
        "Paihuano",
        "Vicuña",
        "Combarbalá",
        "Monte Patria",
        "Ovalle",
        "Punitaqui",
        "Rio Hurtado"
    ],
    ohiggins: [
        "O'Higgins",
        "Codegua",
        "Coinco",
        "Coltauco",
        "Doñihue",
        "Graneros",
        "Las Cabras",
        "Machalí",
        "Malloa",
        "Mostazal",
        "Olivar",
        "Peumo",
        "Pichidegua",
        "Quinta de Tilcoco",
        "Rancagua",
        "Rengo" ,
        "Requínoa",
        "San Vicente de Tagua Tagua",
        "La Estrella",
        "Litueche",
        "Marchigüe",
        "Navidad",
        "Paredones",
        "Pichilemu",
        "Chépica",
        "Chimbarongo",
        "Lolol",
        "Nancagua",
        "Palmilla",
        "Peralillo",
        "Placilla",
        "Pumanque",
        "San Fernando",
        "Santa Cruz",
    ],
    maule: [
        "Parral",
        "Linares",
        "Colbún",
        "Longaví",
        "Retiro",
        "San Javier",
        "Villa Alegre",
        "Yerbas Buenas",
        "Cauquenes",
        "Chancho",
        "Pelluhue",
        "Talca",
        "Constitución",
        "Curepto",
        "Empedrado",
        "Maule",
        "Pelarco",
        "Pencahue",
        "Río Claro", 
        "San Clemente",
        "San Rafael",
        "Licantén",
        "Hualañé",
        "Molina",
        "Romeral",
        "Rauco", 
        "Sagrada Familia",
        "Vichuquén",
        "Teno",
        "Curicó"
    ],
    ñuble: [
        "Yumbel",
        "Cabrero",
        "San Roseando",
        "Laja",
        "Nacimiento",
        "Negrete",
        "Mulchém",
        "Quilaco",
        "Santa Bárbara",
        "Antuco",
        "Quilleco",
        "Tucapel",
        "Alto Biobío",
        "Los Ángeles",
    ],
    araucania: [
        "Angol",
        "Collipulli",
        "Curacautín",
        "Ercilla",
        "Lonquimay",
        "Los Sauces",
        "Lumaco",
        "Purén", 
        "Renaico",
        "Traiguén",
        "Victoria",
        "Gorbea",
        "Lautaro",
        "Loncoche", 
        "Melipeuco",
        "Nueva Imperial",
        "Padre las Casas",
        "Perquenco",
        "Pitrufquén",
        "Pucón",
        "Saavedra",
        "Teodoro Schmidt",
        "Toltén",
        "Vilcún",
        "Villarrica",
        "Cholchol",
        "Temuco",
        "Carahue",
        "Cunco",
        "Curarrehue",
        "Freire",
        "Galvarino"
    ],
    ríos: [
        "Panguipulli",
        "Futrono",
        "Río Bueno",
        "Lago Ranco",
        "La Unión",
        "Corral",
        "Paillaco",
        "Valdivia",
        "Máfil",
        "Lanco",
        "Mariquina",
        "Los Lagos",
    ],
    lagos: [
        "Quinchao",
        "Castro",
        "Ancud",
        "Chonchi",
        "Curaco de Vélez",
        "Dalcahue",
        "Puqueldón",
        "Queilén",
        "Quellón",
        "Quemchi",
        "Río Negro",
        "Osorno",
        "Puerto Octay",
        "Purranque",
        "Puyehue",
        "San Juan de la Costa",
        "San Pablo",
        "Puerto Montt",
        "Calbuco",
        "Cochamó",
        "Fresia",
        "Frutillar",
        "Los Muermos",
        "Llanquihue",
        "Maullín",
        "Puerto Varas",
        "Chaitén",
        "Futaleufú",
        "Hualaihué",
        "Palena",
    ],
    aysén: [
        "Aysén",
        "Cisnes",
        "Guaitecas",
        "Lago Verde",
        "Coyhaique",
        "Cochrane",
        "O'Higgins",
        "Tortel",
        "Chile Chico",
        "Rio Ibáñez",
    ],
    magallanes: [
        "Porvenir",
        "Primavera",
        "Timaukel",
        "Punta Arenas",
        "Laguna Blanca",
        "Río Verde",
        "San Gregorio",
        "Natales",
        "Torres del Paine",
        "Cabo de Hornos",
        "Antártica",
    ]
};

// Datos de precios de envío por región y comuna
const preciosEnvio = {
    metropolitana: {
        santiago: "CLP 3,500",
        las_condes: "CLP 4,500",
        maipu: "CLP 4,500",
        cerrillos: "CLP 4,800",
        estación_central: "CLP 4,600",
        la_florida: "CLP 5,000",
        lo_espejo: "CLP 4,900",
        lo_prado: "CLP 4,700",
        pudahuel: "CLP 4,800",
        quilicura: "CLP 5,200",
        quinta_normal: "CLP 5,100",
        recoleta: "CLP 5,000",
        vitacura: "CLP 6,000",
        lampa: "CLP 5,500",
        puente_alto: "CLP 6,200",
        san_bernardo: "CLP 5,800",
        san_josé_de_maipo: "CLP 7,000",
        providencia: "CLP 5,400",
        ñuñoa: "CLP 4,700"
    },
    valparaiso: {
        valparaiso: "CLP 6,000",
        los_andes: "CLP 6,500",
        calle_larga: "CLP 6,800",
        rinconada: "CLP 6,800",
        san_esteban: "CLP 7,000",
        quillota: "CLP 6,500",
        la_calera: "CLP 6,700",
        hijuelas: "CLP 6,800",
        la_cruz: "CLP 7,000",
        nogales: "CLP 7,100",
        casablanca: "CLP 6,900",
        concon: "CLP 6,800",
        juan_fernandez: "CLP 7,200",
        puchuncavi: "CLP 7,000",
        quintero: "CLP 7,100",
        vina_del_mar: "CLP 6,500",
        la_ligua: "CLP 7,200",
        cabildo: "CLP 7,000",
        papudo: "CLP 7,300",
        petorca: "CLP 7,400",
        zapallar: "CLP 7,500",
        san_antonio: "CLP 7,000",
        algarrobo: "CLP 6,800",
        cartagena: "CLP 7,200",
        el_quisco: "CLP 7,300",
        el_tabo: "CLP 7,400",
        santo_domingo: "CLP 7,500",
        san_felipe: "CLP 7,000",
        catemu: "CLP 7,200",
        llaillay: "CLP 7,300",
        panquehue: "CLP 7,400",
        putaendo: "CLP 7,500",
        santa_maria: "CLP 7,600",
        quilpue: "CLP 6,900",
        limache: "CLP 7,000",
        olmue: "CLP 7,100",
        villa_alemana: "CLP 7,200",
    },
    biobio: {
        concepcion: "CLP 7,000",
        talcahuano: "CLP 7,500",
        // Añadir más comunas
    },
    coquimbo: {
        coquimbo: "CLP 5,000",
        canela: "CLP 5,500",
        illapel: "CLP 5,800",
        los_vilos: "CLP 6,000",
        salamanca: "CLP 5,700",
        andacollo: "CLP 6,200",
        la_higuera: "CLP 5,900",
        la_serena: "CLP 6,300",
        paihuano: "CLP 6,000",
        vicuña: "CLP 6,100",
        combarbala: "CLP 6,200",
        monte_patria: "CLP 6,300",
        ovalle: "CLP 5,400",
        punitaqui: "CLP 6,200",
        rio_hurtado: "CLP 7,600",
    },
    atacama: {
        atacama: "CLP 10,000",
        chañaral: "CLP 11,500",
        diego_de_almagro: "CLP 12,000",
        caldera: "CLP 10,500",
        copiapó: "CLP 11,000",
        tierra_amarilla: "CLP 12,500",
        alto_del_carmen: "CLP 13,000",
        freirina: "CLP 13,500",
        huasco: "CLP 14,000",
        vallenar: "CLP 14,500",
    },
    ohiggins: {
        atacama: "CLP 10,000",
        chañaral: "CLP 11,500",
        diego_de_almagro: "CLP 12,000",
        caldera: "CLP 10,500",
        copiapo: "CLP 11,000",
        tierra_amarilla: "CLP 12,500",
        alto_del_carmen: "CLP 13,000",
        freirina: "CLP 13,500",
        huasco: "CLP 14,000",
        vallenar: "CLP 14,500",
    },
    maule: {
        parral: "CLP 7,000",
        linares: "CLP 7,200",
        colbun: "CLP 7,300",
        longavi: "CLP 7,400",
        retiro: "CLP 7,100",
        san_javier: "CLP 7,300",
        villa_alegre: "CLP 7,500",
        yerbas_buenas: "CLP 7,200",
        cauquenes: "CLP 7,600",
        chancho: "CLP 7,400",
        pelluhue: "CLP 7,800",
        talca: "CLP 7,100",
        constitucion: "CLP 7,700",
        curepto: "CLP 7,500",
        empedrado: "CLP 7,800",
        maule: "CLP 7,300",
        pelarco: "CLP 7,400",
        pencahue: "CLP 7,600",
        rio_claro: "CLP 7,700",
        san_clemente: "CLP 7,800",
        san_rafael: "CLP 7,900",
        licanten: "CLP 7,900",
        hualane: "CLP 7,800",
        molina: "CLP 7,400",
        romeral: "CLP 7,500",
        rauco: "CLP 7,600",
        sagrada_familia: "CLP 7,700",
        vichuquen: "CLP 7,800",
        teno: "CLP 7,900",
        curico: "CLP 7,600"
    },
    biobio: {
        yumbel: "CLP 7,200",
        cabrero: "CLP 7,300",
        san_roseando: "CLP 7,500",
        laja: "CLP 7,400",
        nacimiento: "CLP 7,600",
        negrete: "CLP 7,700",
        mulchém: "CLP 7,800",
        quilaco: "CLP 7,500",
        santa_barbara: "CLP 7,600",
        antuco: "CLP 7,700",
        quilleco: "CLP 7,800",
        tucapel: "CLP 7,900",
        alto_biobio: "CLP 8,000",
        los_angeles: "CLP 7,200"
    },
    nuble: {
        yumbel: "CLP 7,100",
        cabrero: "CLP 7,200",
        san_roseando: "CLP 7,300",
        laja: "CLP 7,400",
        nacimiento: "CLP 7,500",
        negrete: "CLP 7,600",
        mulchém: "CLP 7,700",
        quilaco: "CLP 7,800",
        santa_barbara: "CLP 7,900",
        antuco: "CLP 8,000",
        quilleco: "CLP 8,000",
        tucapel: "CLP 7,900",
        alto_biobio: "CLP 8,000",
        los_angeles: "CLP 7,200"
    },
    araucania: {
        angol: "CLP 10,200",
        collipulli: "CLP 10,300",
        curacautin: "CLP 10,400",
        ercilla: "CLP 10,500",
        lonquimay: "CLP 10,600",
        los_sauces: "CLP 10,700",
        lumaco: "CLP 10,800",
        puren: "CLP 10,900",
        renaico: "CLP 11,000",
        traiguen: "CLP 11,000",
        victoria: "CLP 11,000",
        gorbea: "CLP 10,900",
        lautaro: "CLP 10,800",
        loncoche: "CLP 10,700",
        melipeuco: "CLP 10,600",
        nueva_imperial: "CLP 10,500",
        padre_las_casas: "CLP 10,400",
        perquenco: "CLP 10,300",
        pitrufquen: "CLP 10,200",
        pucon: "CLP 10,100",
        saavedra: "CLP 10,200",
        teodoro_schmidt: "CLP 10,300",
        tolten: "CLP 10,400",
        vilcun: "CLP 10,500",
        villarrica: "CLP 10,600",
        cholchol: "CLP 10,700",
        temuco: "CLP 10,800",
        carahue: "CLP 10,900",
        cunco: "CLP 11,000",
        curarrehue: "CLP 11,000",
        freire: "CLP 11,000",
        galvarino: "CLP 10,800"
    },
    rios: {
        panguipulli: "CLP 10,200",
        futrono: "CLP 10,300",
        rio_bueno: "CLP 10,400",
        lago_ranco: "CLP 10,500",
        la_union: "CLP 10,600",
        corral: "CLP 10,700",
        paillaco: "CLP 10,800",
        valdivia: "CLP 10,900",
        mafili: "CLP 11,000",
        lanco: "CLP 11,000",
        mariquina: "CLP 11,000",
        los_lagos: "CLP 10,900"
    },
    lagos: {
        quinchao: "CLP 14,200",
        castro: "CLP 14,300",
        ancud: "CLP 14,500",
        chonchi: "CLP 14,600",
        curaco_de_velez: "CLP 14,700",
        dalcahue: "CLP 14,800",
        puqueldon: "CLP 15,000",
        queilen: "CLP 15,100",
        quellon: "CLP 15,200",
        quemchi: "CLP 15,300",
        rio_negro: "CLP 15,500",
        osorno: "CLP 15,700",
        puerto_octay: "CLP 15,800",
        purranque: "CLP 15,900",
        puyehue: "CLP 16,000",
        san_juan_de_la_costa: "CLP 16,200",
        san_pablo: "CLP 16,300",
        puerto_montt: "CLP 16,500",
        calbuco: "CLP 16,700",
        cochamo: "CLP 16,800",
        fresia: "CLP 16,900",
        frutillar: "CLP 17,000",
        los_muermos: "CLP 17,000",
        llanquihue: "CLP 17,000",
        maullin: "CLP 16,800",
        puerto_varas: "CLP 16,600",
        chaiten: "CLP 16,400",
        futaleufu: "CLP 16,300",
        hualaihue: "CLP 16,200",
        palena: "CLP 16,100"
    },
    aysen: {
        aysen: "CLP 17,000",
        cisnes: "CLP 17,200",
        guaitecas: "CLP 17,400",
        lago_verde: "CLP 17,600",
        coyhaique: "CLP 17,800",
        cochrane: "CLP 17,900",
        o_higgins: "CLP 18,000",
        tortel: "CLP 18,000",
        chile_chico: "CLP 18,000",
        rio_ibañez: "CLP 18,000"
    },
    magallanes: {
        porvenir: "CLP 20,000",
        primavera: "CLP 20,500",
        timaukel: "CLP 21,000",
        punta_arenas: "CLP 21,500",
        laguna_blanca: "CLP 22,000",
        rio_verde: "CLP 22,500",
        san_gregorio: "CLP 23,000",
        natales: "CLP 23,500",
        torres_del_paine: "CLP 24,000",
        cabo_de_hornos: "CLP 24,500",
    }
    // Añadir más regiones y comunas aquí
};

// Obtener elementos
const regionSelect = document.getElementById("region-select");
const comunaSelect = document.getElementById("comuna-select");
const costDisplay = document.getElementById("cost-display");

// Manejar cambio de región
regionSelect.addEventListener("change", function() {
    const selectedRegion = this.value;

    // Limpiar las comunas y deshabilitar el cuadro de comunas si no hay región seleccionada
    comunaSelect.innerHTML = '<option value="">Selecciona una comuna</option>';
    comunaSelect.disabled = !selectedRegion;

    // Si hay una región seleccionada, actualizar las comunas
    if (selectedRegion && comunasPorRegion[selectedRegion]) {
        comunasPorRegion[selectedRegion].forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna.toLowerCase().replace(/ /g, "_");
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    }

    // Limpiar el costo de envío
    costDisplay.textContent = "Selecciona una comuna para ver el costo.";
});

// Manejar cambio de comuna
comunaSelect.addEventListener("change", function() {
    const selectedRegion = regionSelect.value;
    const selectedComuna = this.value;

    // Mostrar el costo de envío si se ha seleccionado una comuna
    if (selectedRegion && selectedComuna) {
        costDisplay.textContent = preciosEnvio[selectedRegion][selectedComuna] || "Precio no disponible";
    } else {
        costDisplay.textContent = "Selecciona una región y comuna para ver el costo.";
    }
});


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

document.querySelector('.user-button').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('hidden');
});
document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('hidden');
    document.querySelector('#overlay').classList.toggle('hidden');
});

document.querySelector('.menu-close').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('hidden');
    document.querySelector('#overlay').classList.add('hidden');
});