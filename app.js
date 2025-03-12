let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista de amigos en el HTML
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
    
    // Recorrer el array amigos y agregar cada nombre como un <li>
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior
    
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Añade nombres antes de sortear.");
        return;
    }
    
    // Generar un índice aleatorio y seleccionar un amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultados
    let li = document.createElement("li");
    li.textContent = `Amigo Secreto: ${amigoSeleccionado}`;
    resultado.appendChild(li);
}

// Hacer que la tecla Enter también agregue amigos
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});