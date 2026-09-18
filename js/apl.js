        const form = document.getElementById('form-preinscripcion');
        const btnPreinscribirme = document.getElementById('btn-preinscribirme');

        btnPreinscribirme.addEventListener('click', function () {
            form.reset();
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('¡Gracias! Tu preinscripción para 2do Año ha sido enviada correctamente.');
            form.reset();
        });