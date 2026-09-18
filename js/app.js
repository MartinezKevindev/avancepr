document.addEventListener("DOMContentLoaded", () => {
    const diapositivas = document.querySelectorAll(".diapositiva");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnSiguiente = document.getElementById("btn-siguiente");
    
    let indice = 0;
    let temporizador = null;
    const TIEMPO_CAMBIO = 3000;

    function cambiarDiapositiva(nuevoIndice) {
        diapositivas[indice].classList.remove("activa");
        indice = nuevoIndice;
        diapositivas[indice].classList.add("activa");
    }

    function siguienteImagen() {
        let siguiente = (indice + 1) % diapositivas.length;
        cambiarDiapositiva(siguiente);
    }

    function anteriorImagen() {
        let anterior = (indice - 1 + diapositivas.length) % diapositivas.length;
        cambiarDiapositiva(anterior);
    }

    function iniciarAutoPlay() {
        if (!temporizador) {
            temporizador = setInterval(siguienteImagen, TIEMPO_CAMBIO);
        }
    }

    function reiniciarAutoPlay() {
        clearInterval(temporizador);
        temporizador = null;
        iniciarAutoPlay();
    }

    btnSiguiente.addEventListener("click", () => {
        siguienteImagen();
        reiniciarAutoPlay();
    });

    btnAnterior.addEventListener("click", () => {
        anteriorImagen();
        reiniciarAutoPlay();
    });

    const carrusel = document.querySelector(".carrusel");
    carrusel.addEventListener("mouseenter", () => {
        clearInterval(temporizador);
        temporizador = null;
    });

    carrusel.addEventListener("mouseleave", () => {
        iniciarAutoPlay();
    });

    iniciarAutoPlay();
});


document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll("nav ul li a");
        let rutaActual = window.location.pathname.split("/").pop();

        if (rutaActual === "" || rutaActual === "index.html") {
            rutaActual = "index.html";
        }

        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === rutaActual) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });