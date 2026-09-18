        document.addEventListener("DOMContentLoaded", () => {
            const form = document.getElementById('form-preinscripcion');
            const btnPreinscribirme = document.getElementById('btn-preinscribirme');

            btnPreinscribirme.addEventListener('click', () => {
                form.reset();
            });

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias! Tu preinscripción para 3er Año ha sido enviada correctamente.');
                form.reset();
            });

            const navLinks = document.querySelectorAll("nav ul li a");
            navLinks.forEach(link => {
                link.addEventListener("click", function() {
                    navLinks.forEach(item => item.classList.remove("active"));
                    this.classList.add("active");
                });
            });
        });