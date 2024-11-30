mensajes = ["¡Cinnamon!... Parece que esta completamente sopa... Prueba a despertarlo Carmen, toca varias veces sobre su cabeza.", "Haaawwmmm... Hola Purin, te estaba buscando...", "¿Buscándome? ¡Pero si estabas dormido! Somos nosotros los que te estaban buscando... ¿Qué hacías durmiendo por aquí?", "Pues estaba buscandote para decirte algo muy importante, es algo que Hello Kitty quiere que sepas, pero, ¿que era? Se me ha olvidado. Encontré este lugar tan bonito y comodo y cuando me quise dar cuenta me quedé dormido... Por cierto, ¿habeís leido el poema? Parece ir dedicado a una mujer muy bella, me encantaría conocerla...", "Cinnamon, centrate, trata de recordar lo que te dijo Hello Kitty, por favor...", "Pues ahora que me voy despertando... Era algo sobre una llave para abrir no se qué", "¡Eso es, la llave! Carmen y yo estamos en busca de esa llave para abrir la puerta de los recuerdos. Dime, ¿Sabes donde encontrarla?", "Pues Hello Kitty me hablo de algo parecido, se le veia bastante estresada...Pero...No, no reduerdo nada más.Creo que voy a seguir durmiendo, me está entrando un sueñecito...", "¡Cinnamon no, espera! Trata de recordar algo más, danos un poco de información sobre donde se encuentra la llave... Nada, ee ha vuelto a quedar dormido. ¿Y ahora que hacemos Carmen?", "ZZzz...Anim....zzZZ...al......zzZZzz..Cross...zzZZzz..ing..ZZZZzzzz", "¿Anim...al...Cross...ing? ¡Claro, Animal Crossing! ¡Cinnamon nos está hablando dormido, es impresionante! Carmen, ¡Dirigámonos al mundo de Animal Crossing, quizás alli descubramos algo!"];

let indiceMensaje = 0;


var contadorClickDespertarCinnamon = 0;

const container_imagenes = document.createElement("div");
container_imagenes.style.display = "flex";
container_imagenes.style.justifyContent = "center";
container_imagenes.style.alignItems = "center";
container_imagenes.style.gap = "50px";


const container_mensaje = document.createElement("div");
container_imagenes.style.display = "flex";
container_imagenes.style.justifyContent = "center";
container_imagenes.style.alignItems = "center";


const container_botones = document.createElement("div");
container_botones.style.display = "flex";

container_botones.style.justifyContent = "center";

container_botones.style.alignItems = "center";

container_botones.style.gap = "100px";

const botonSiguiente = document.createElement("button");
botonSiguiente.disabled = true;


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




//Creamos el mensaje de ayuda
const mensajeAyuda = document.createElement("p");
mensajeAyuda.innerHTML = mensajes[indiceMensaje];
// Estilos del mensaje (bocadillo)

if (indiceMensaje % 2 === 0) {
    mensajeAyuda.style.backgroundColor = "#ffe7cc";
    mensajeAyuda.style.color = "black";

}


mensajeAyuda.style.color = "black";
mensajeAyuda.style.fontSize = "18px";
mensajeAyuda.style.textAlign = "center";
mensajeAyuda.style.marginBottom = "20px";
mensajeAyuda.style.fontWeight = "bold";
mensajeAyuda.style.fontFamily = "Arial, sans-serif";
mensajeAyuda.style.border = "2px solid black";
mensajeAyuda.style.padding = "20px";

mensajeAyuda.style.borderRadius = "15px"; // Bordes redondeados
mensajeAyuda.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // Sombra suave
mensajeAyuda.style.position = "relative";

container_mensaje.appendChild(mensajeAyuda);







//Imagen de pom pom purin
const imagenAyudante = document.createElement("img");
imagenAyudante.src = "images/pom-pom-purin.png";
imagenAyudante.alt = " Pom Pom Purin";
imagenAyudante.id = "ayudante";
imagenAyudante.style.width = "250px";
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


//Imagen de cinnamon despierto
const imagenCinnamonDespertado = document.createElement("img");
imagenCinnamonDespertado.src = "images/cinnamon_wake.png";
imagenCinnamonDespertado.alt = "Cinnamon despierto";
imagenCinnamonDespertado.id = "cinnamon_despertado";
imagenCinnamonDespertado.style.width = "350px";
imagenCinnamonDespertado.style.display = "none";
imagenCinnamonDespertado.style.margin = "20px auto";

imagenCinnamonDespertado.addEventListener('mouseenter', function () {
    imagenCinnamonDespertado.style.transform = "scale(1.2)"; // Aumentar tamaño
    imagenCinnamonDespertado.style.transition = "transform 0.3s ease"; // Efecto de transición suave
    imagenCinnamonDespertado.style.cursor = "pointer"; // Cambiar cursor al pasar el mouse
    imagenCinnamonDespertado.style.zIndex = "9999"; // Poner la imagen sobre el resto del contenido
});

imagenCinnamonDespertado.addEventListener('mouseleave', function () {
    imagenCinnamonDespertado.style.transform = "scale(1)"; // Volver al tamaño original
});

imagenCinnamonDespertado.addEventListener('click', function () {
    window.location.href = "cinnamon.html";
});



//Imagen de Cinnamon dormido
const imagenCinnamon = document.createElement("img");
imagenCinnamon.src = "images/cinnamon_sleep.png";
imagenCinnamon.alt = "My Melody";
imagenCinnamon.id = "melody";
imagenCinnamon.style.width = "350px";
imagenCinnamon.style.display = "block";
imagenCinnamon.style.margin = "20px auto";

imagenCinnamon.addEventListener('mouseenter', function () {
    imagenCinnamon.style.transform = "scale(1.2)"; // Aumentar tamaño
    imagenCinnamon.style.transition = "transform 0.3s ease"; // Efecto de transición suave
    imagenCinnamon.style.cursor = "pointer"; // Cambiar cursor al pasar el mouse
    imagenCinnamon.style.zIndex = "9999"; // Poner la imagen sobre el resto del contenido
});

imagenCinnamon.addEventListener('mouseleave', function () {
    imagenCinnamon.style.transform = "scale(1)"; // Volver al tamaño original
});

imagenCinnamon.addEventListener('click', function () {
    contadorClickDespertarCinnamon++;
    if (contadorClickDespertarCinnamon == 4) {
        alert("Has despertado a Cinnamon de su letargo!");
        imagenCinnamon.style.display = "none"; // Ocultar Cinnamon dormido
        imagenCinnamonDespertado.style.display = "block";
        botonSiguiente.disabled = false;

    }

});







//Agregamos los containers de las imágenes y los mensaje al container de los elementos
container_imagenes.appendChild(imagenAyudante);
container_imagenes.appendChild(imagenCinnamon);
container_imagenes.appendChild(imagenCinnamonDespertado);


const container = document.querySelector(".image-container");
container.style.justifyContent = "center"; // Centrado horizontal
container.style.alignItems = "center"; // Centrado vertical
container.style.height = "100vh";
container.appendChild(container_imagenes);
container.appendChild(container_mensaje);
container.appendChild(container_botones);




function cargarSiguienteMensaje(mensajeAyuda) {
    if (indiceMensaje < mensajes.length - 1) {
        indiceMensaje++;
        //mensajeAyuda.innerHTML = mensajes[indiceMensaje];
        actualizarMensaje();
        actualizarTriangulo(mensajeAyuda);

    }

}

function cargarAnteriorMensaje(mensajeAyuda) {
    if (indiceMensaje > 0) {
        indiceMensaje--;
        //mensajeAyuda.innerHTML = mensajes[indiceMensaje];
        actualizarMensaje();
        actualizarTriangulo(mensajeAyuda);

    }
}

function actualizarMensaje() {
    mensajeAyuda.innerHTML = mensajes[indiceMensaje];

    // Cambiar estilos dependiendo del índice
    if (indiceMensaje % 2 === 0) {
        mensajeAyuda.style.backgroundColor = "#ffe7cc"; // Naranja claro
        mensajeAyuda.style.color = "black";
    } else {
        mensajeAyuda.style.backgroundColor = "#cce7ff"; // Azul claro
        mensajeAyuda.style.color = "black";
    }
    if (indiceMensaje === 7) {
        imagenCinnamonDespertado.style.display = "none"; // Ocultar Cinnamon dormido
        imagenCinnamon.style.display = "block";

    }
}