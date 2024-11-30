mensajes = ["¡My Melody! Así que aqui estabas. ¿Qué estás haciendo por aquí?", "¡Hola Purin! Estaba observando estas flores tan bonitas, a mi también me encanta hacer manualidades, me han inspirado para hacer mi siguiente dibujo. Por cierto, ¿quién esta chica tan guapa que te acompaña? ", "¡Ah si! Disculpa, que no os he presentado. Ella es Carmen, me está ayudando a encontrar a todos los integrantes del grupo Sanrio que se han perdido por la página web. A Carmen también se le da bastante bien dibujar, estoy seguro de que os llevareis bien.", "¿Ah si? Pues entonces estoy segura de que nos llevaremos de maravilla. Por cierto, ¿veis el apartado de recuerdos en la barra superior de la página? He intentado entrar pero se ve que está cerrado, no hay manera...", "Quizás necesite una llave para abrirlo", "¿Una llave? ¡Eso es, que buena idea Purin, pero ¿de donde sacamos una llave nosotros?", "Busquemos al resto de instegrantes de Sanrio y preguntemosles, ¡Seguro que ellos saben algo! ", "¡Genial! Os ayudaré a encontrarlos. Recuerdo haber visto a Cinnamon cerca del apartado poema, dentro de dedicatorias. Mirad por alli, quizás lo encontreis. ¡Mucha suerte!", "¡Gracias Melody! Nos has sido de mucha ayuda, ahora tenemos una nueva misión, econtrar la llave para abrir el apartado de recuerdos. ¿Que habrá allí dentro? ¡Que ganas de averiguarlo! Carmen, vayamos a la sección del poema a buscar a Cinnamon."];

let indiceMensaje = 0;

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

 if(indiceMensaje%2 === 0){
    mensajeAyuda.style.backgroundColor = "#ffe7cc"; 
    mensajeAyuda.style.color ="black"; 
    
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
        window.location.href ="purin.html";
    });
    //Imagen de My Melody
    const imagenMelody = document.createElement("img");
    imagenMelody.src = "images/melody.png";
    imagenMelody.alt = "My Melody";
    imagenMelody.id = "melody";
    imagenMelody.style.width = "200px";
    imagenMelody.style.display = "block";
    imagenMelody.style.margin = "20px auto";

    imagenMelody.addEventListener('mouseenter', function () {
        imagenMelody.style.transform = "scale(1.2)"; // Aumentar tamaño
        imagenMelody.style.transition = "transform 0.3s ease"; // Efecto de transición suave
        imagenMelody.style.cursor = "pointer"; // Cambiar cursor al pasar el mouse
        imagenMelody.style.zIndex = "9999"; // Poner la imagen sobre el resto del contenido
    });
    
    imagenMelody.addEventListener('mouseleave', function () {
        imagenMelody.style.transform = "scale(1)"; // Volver al tamaño original
    });

    imagenMelody.addEventListener('click', function () {
        window.location.href ="melody.html";
    });

   

    //Agregamos los containers de las imágenes y los mensaje al container de los elementos
    container_imagenes.appendChild(imagenAyudante); 
    container_imagenes.appendChild(imagenMelody);


    const container = document.querySelector(".container");
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
            mensajeAyuda.style.backgroundColor = "#f7cbf3"; // Rosa claro
            mensajeAyuda.style.color = "black";
        }
    }
    