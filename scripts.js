const mensajes = ["Hola Carmen, soy tu fiel ayudante, <span style='color:brown; font-weight: bold;'>Pom Pom Purin</span>. Nuestra misión es encontrar a los otros miembros de Sanrio. Se han perdido por la página web por lo que tendremos que navegar a través de esta para dar con ellos. Pero no te preocupes, ¡Yo estoy aquí para ayudarte!",
    "¿Qué te parece si comenzamos buscando a <span style='color:red; font-weight: bold;'>My Melody</span>? A ella le ecantan las manualidades, además, en una gran amante de las flores olorosas. Quizás en el apartado dedicatorias, en la barra superior, haya algo que ha podido llamarle la atención, ¡Busquemos allí!"
]
let indiceMensaje = 0;



//FUNCION PRINCIPAL DE LA PÁGINA WEB AL PULSAR EL BOTON INVOCACION MÁGICA
function invocarAyudante() {

    if (document.getElementById("ayudante")) {
        alert("El ayudante ya ha sido invocado!");
        return;
    }
    alert("Ahora puedes entrar en el apartado dedicatorias!");

    const enlaces = document.querySelectorAll('.nav-link-disabled');
    enlaces.forEach(enlace => {
        enlace.classList.remove('nav-link-disabled');
    });


    //Creamos la imagen de pom pom purin
    const imagenAyudante = document.createElement("img");
    imagenAyudante.src = "images/pom-pom-purin.png";
    imagenAyudante.alt = " Pom Pom Purin";
    imagenAyudante.id = "ayudante";
    imagenAyudante.style.width = "200px";
    imagenAyudante.style.display = "block";
    imagenAyudante.style.margin = "20px auto";

    imagenAyudante.addEventListener('mouseenter', function () {
        imagenAyudante.style.transform = "scale(1.2)"; // Aumentar tamaño
        imagenAyudante.style.transition = "transform 0.3s ease"; // Efecto de transición suave
        imagenAyudante.style.cursor = "pointer"; // Cambiar cursor al pasar el mouse
        imagenAyudante.style.zIndex = "9999"; // Poner la imagen sobre el resto del contenido
    });

    imagenAyudante.addEventListener('mouseleave', function () {
        imagenAyudante.style.transform = "scale(1)"; // Volver al tamaño original
    });

    imagenAyudante.addEventListener('click', function () {
        window.location.href = "purin.html";
    });





    //Creamos el mensaje de ayuda
    const mensajeAyuda = document.createElement("p");
    mensajeAyuda.innerHTML = mensajes[indiceMensaje];
    // Estilos del mensaje (bocadillo)
    mensajeAyuda.style.color = "black";
    mensajeAyuda.style.fontSize = "18px";
    mensajeAyuda.style.textAlign = "center";
    mensajeAyuda.style.marginBottom = "20px";
    mensajeAyuda.style.fontWeight = "bold";
    mensajeAyuda.style.fontFamily = "Arial, sans-serif";
    mensajeAyuda.style.border = "2px solid black";
    mensajeAyuda.style.padding = "20px";
    mensajeAyuda.style.backgroundColor = "#cce7ff"; // Color de fondo suave
    mensajeAyuda.style.borderRadius = "15px"; // Bordes redondeados
    mensajeAyuda.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // Sombra suave
    mensajeAyuda.style.position = "relative";

    // Triángulo de la burbuja
    const triangulo = crearTriangulo();

    //Añadimos el triangulo al mensaje
    mensajeAyuda.appendChild(triangulo);

    //Creamos el container de los botones
    const container_botones = document.createElement("div");
    container_botones.style.display = "flex";
    container_botones.style.justifyContent = "center"; // Centrado horizontalmente
    container_botones.style.alignItems = "center";
    container_botones.style.gap = "200px"; // Añadir espacio entre los botones


    //Creamos el boon para pasar de página y para volver
    const botonSiguiente = document.createElement("button");
    botonSiguiente.textContent = "Siguiente";
    botonSiguiente.style.fontWeight = "bold";
    botonSiguiente.style.fontFamily = "Arial, sans-serif";
    botonSiguiente.style.marginTop = "20px";
    botonSiguiente.style.backgroundColor = "#cce7ff";

    botonSiguiente.addEventListener('mouseenter', function () {
        botonSiguiente.style.backgroundColor = "#99c2ff";  // Cambiar color de fondo cuando se pasa el mouse
        botonSiguiente.style.color = "white";  // Cambiar el color del texto al pasar el mouse
        botonSiguiente.style.cursor = "pointer";  // Cambiar el cursor a pointer para indicar que es un botón
        botonSiguiente.style.transform = "scale(1.05)";  // Aumentar ligeramente el tamaño
        botonSiguiente.style.transition = "all 0.3s ease";  // Transición suave
    });

    botonSiguiente.addEventListener('mouseleave', function () {
        botonSiguiente.style.backgroundColor = "#cce7ff";  // Volver al color original del fondo
        botonSiguiente.style.color = "black";  // Volver al color original del texto
        botonSiguiente.style.transform = "scale(1)";  // Volver al tamaño original
    });

    botonSiguiente.addEventListener('click', function () {
        // Llama a la función que carga la siguiente página
        cargarSiguienteMensaje(mensajeAyuda);
    });

    const botonAnterior = document.createElement("button");
    botonAnterior.textContent = "Anterior";
    botonAnterior.style.fontWeight = "bold";
    botonAnterior.style.fontFamily = "Arial, sans-serif";
    botonAnterior.style.marginTop = "20px";
    botonAnterior.style.backgroundColor = "#cce7ff";

    botonAnterior.addEventListener('mouseenter', function () {
        botonAnterior.style.backgroundColor = "#99c2ff";  // Cambiar color de fondo cuando se pasa el mouse
        botonAnterior.style.color = "white";  // Cambiar el color del texto al pasar el mouse
        botonAnterior.style.cursor = "pointer";  // Cambiar el cursor a pointer para indicar que es un botón
        botonAnterior.style.transform = "scale(1.05)";  // Aumentar ligeramente el tamaño
        botonAnterior.style.transition = "all 0.3s ease";  // Transición suave
    });

    botonAnterior.addEventListener('mouseleave', function () {
        botonAnterior.style.backgroundColor = "#cce7ff";  // Volver al color original del fondo
        botonAnterior.style.color = "black";  // Volver al color original del texto
        botonAnterior.style.transform = "scale(1)";  // Volver al tamaño original
    });
    botonAnterior.addEventListener('click', function () {
        // Llama a la función que carga la página anterior
        cargarAnteriorMensaje(mensajeAyuda);
    });
    container_botones.appendChild(botonAnterior);
    container_botones.appendChild(botonSiguiente);



    //Creamos el container y añadimos los elementos creados
    const container = document.querySelector(".container");

    container.style.justifyContent = "center"; // Centrado horizontal
    container.style.alignItems = "center"; // Centrado vertical
    container.style.height = "100vh";
    container.appendChild(imagenAyudante);
    container.appendChild(mensajeAyuda);
    container.appendChild(container_botones);


}


//FUNCIONES SECUNDARIAS DE LA PAGINA WEB

function cargarSiguienteMensaje(mensajeAyuda) {
    if (indiceMensaje < mensajes.length - 1) {
        indiceMensaje++;
        mensajeAyuda.innerHTML = mensajes[indiceMensaje];
        actualizarTriangulo(mensajeAyuda);
        

    }
}

function cargarAnteriorMensaje(mensajeAyuda) {
    if (indiceMensaje > 0) {
        indiceMensaje--;
        mensajeAyuda.innerHTML = mensajes[indiceMensaje];
        actualizarTriangulo(mensajeAyuda);

    }
}

function crearTriangulo() {
    const triangulo = document.createElement("div");
    triangulo.style.position = "absolute";
    triangulo.style.bottom = "-20px";
    triangulo.style.left = "50%";
    triangulo.style.transform = "translateX(-50%)";
    triangulo.style.width = "0";
    triangulo.style.height = "0";
    triangulo.style.borderLeft = "10px solid transparent";
    triangulo.style.borderRight = "10px solid transparent";
    triangulo.style.borderTop = "10px solid #99c2ff";
    return triangulo;
}


function actualizarTriangulo(mensajeAyuda) {
    const triangulo = crearTriangulo();
    if (mensajeAyuda.lastChild && mensajeAyuda.lastChild.tagName === "DIV") {
        mensajeAyuda.removeChild(mensajeAyuda.lastChild); // Eliminar el triángulo anterior
    }
    mensajeAyuda.appendChild(triangulo); // Añadir el nuevo triángulo
}
