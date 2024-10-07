// Función para obtener la hora actual
function showTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.innerHTML = `Hora actual: ${timeString}`;
}

// Función para obtener la fecha actual
function showDate() {
    const dateElement = document.getElementById("date");
    const now = new Date();
    const dateString = now.toLocaleDateString();
    dateElement.innerHTML = `Fecha actual: ${dateString}`;
}

// Función para mostrar la ubicación del archivo
function showLocation() {
    const locationElement = document.getElementById("location");
    locationElement.innerHTML = `Ubicación del archivo: ${window.location.href}`;
}

// Ejecutar las funciones al cargar la página
window.onload = function() {
    showTime();
    showDate();
    showLocation();
    
    // Actualizar la hora cada segundo
    setInterval(showTime, 1000);
};
