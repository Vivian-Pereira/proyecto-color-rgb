const rojoSlider = document.getElementById('rojo');
const verdeSlider = document.getElementById('verde');
const azulSlider = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Función para actualizar el color de fondo y los textos
function actualizarColor() {
    const rojo = rojoSlider.value;
    const verde = verdeSlider.value;
    const azul = azulSlider.value;

    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
    
    textoRojo.textContent = `Rojo: ${rojo}`;
    textoVerde.textContent = `Verde: ${verde}`;
    textoAzul.textContent = `Azul: ${azul}`;
}

// Agregar evento para los sliders
rojoSlider.addEventListener('input', actualizarColor);
verdeSlider.addEventListener('input', actualizarColor);
azulSlider.addEventListener('input', actualizarColor);

// Inicializar color al cargar la página
actualizarColor();
