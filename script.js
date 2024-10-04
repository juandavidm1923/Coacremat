// Mostrar formulario de registro
document.getElementById('registerBtn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').style.display = 'block';
});

// Redirigir a la página de opciones después del registro
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'opciones.html'; // Redirigir a la página de opciones
});

document.getElementById('checkPointsBtn').addEventListener('click', function() {
    document.getElementById('pointsDisplay').style.display = 'block';
});

// Dropdown para redimir premios en opciones.html
let dropdownButtons = document.querySelectorAll('.dropdown-btn');
dropdownButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Actualizar datos personales
document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('updateSuccessMessage').style.display = 'block';
});
