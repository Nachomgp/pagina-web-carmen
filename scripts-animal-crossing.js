document.addEventListener("DOMContentLoaded", () => {
    const mensajes = [
        "¡Hemos llegado! Así que esto es el mundo de Animal Crossing. Se ve bastante verde, puedo sentir el olor de la naturaleza, ahhhh aire puro.",
        "¿Y ahora que hacemos, a quién se pone que debemos buscar?",
        "Espera. ¿quién es esa? Preguntemosle a ver si sabe algo",
    ];

    const mensajesCanela = [
        "¡¡Ah!! Me habéis sorprendido. Qué susto, estaba cogiendo florecillas por aquí, no esperaba a nadie así de repente.",
        "No me suenan vuestras caras, ¿no sois de por aquí verdad? ¡Eso no importa, bienvenidos al pueblo! Aquí seréis completamente bienvenidos.",
        "Somos gente muy agradable ¡Ya veréis!",
    ];

    let indiceMensaje = 0;

    let indiceMensajeCanela = 0;

  

    // Función para aplicar estilos comunes
    function aplicarEstilos(elemento, estilos) {
        Object.assign(elemento.style, estilos);
    }

    // Función para crear un botón con eventos
    function crearBoton(texto, onClick) {
        const boton = document.createElement("button");
        boton.textContent = texto;
        aplicarEstilos(boton, {
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            backgroundColor: "#cce7ff",
            transition: "all 0.3s ease",
        });
        boton.addEventListener("click", onClick);
        boton.addEventListener("mouseenter", () => {
            aplicarEstilos(boton, {
                backgroundColor: "#99c2ff",
                color: "white",
                transform: "scale(1.05)",
                cursor: "pointer",
            });
        });
        boton.addEventListener("mouseleave", () => {
            aplicarEstilos(boton, {
                backgroundColor: "#cce7ff",
                color: "black",
                transform: "scale(1)",
            });
        });
        return boton;
    }

    // Función para actualizar mensaje
    function actualizarMensaje(elemento, mensajes, indice) {
        elemento.innerHTML = mensajes[indice];
    }

    // Crear contenedor genérico
    function crearContenedor(estilos) {
        const contenedor = document.createElement("div");
        aplicarEstilos(contenedor, estilos);
        return contenedor;
    }

    // Crear mensaje
    function crearMensaje(texto) {
        const mensaje = document.createElement("p");
        mensaje.innerHTML = texto;
        aplicarEstilos(mensaje, {
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "10px",
            backgroundColor: "#ffe7cc",
            border: "2px solid black",
            borderRadius: "15px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
        });
        return mensaje;
    }

    // Crear contenedor de botones
    function crearContenedorBotones(actualizar, mensajes, mensajeElemento) {
        const contenedorBotones = crearContenedor({
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
        });

        const botonAnterior = crearBoton("Anterior", () => {
            if (indiceMensaje > 0) {
                indiceMensaje--;
                actualizar(mensajeElemento, mensajes, indiceMensaje);
            }
        });

        const botonSiguiente = crearBoton("Siguiente", () => {
            if (indiceMensaje < mensajes.length - 1) {
                indiceMensaje++;
                actualizar(mensajeElemento, mensajes, indiceMensaje);
            }
        });

        contenedorBotones.appendChild(botonAnterior);
        contenedorBotones.appendChild(botonSiguiente);

        return contenedorBotones;
    }

    // Crear imagen
    function crearImagen(src, alt, estilos) {
        const imagen = document.createElement("img");
        imagen.src = src;
        imagen.alt = alt;
        aplicarEstilos(imagen, estilos);
        return imagen;
    }

    // Contenedor principal
    const containerBosque = document.querySelector(".div-bosque");

    // Crear y configurar elementos de Purin
    const mensajeAyuda = crearMensaje(mensajes[indiceMensaje]);
    const botonesAyuda = crearContenedorBotones(actualizarMensaje, mensajes, mensajeAyuda);

    const containerPurin = crearContenedor({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        margin: "20px",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "transparent",
    });

    const imagenAyudante = crearImagen("images/pom-pom-purin.png", "Pom Pom Purin", {
        width: "200px",
        marginBottom: "20px",
    });

    containerPurin.appendChild(imagenAyudante);
    containerPurin.appendChild(mensajeAyuda);
    containerPurin.appendChild(botonesAyuda);

    //Crear y configurar elementos de Canela
    const mensajeCanela = crearMensaje(mensajesCanela[indiceMensaje]);
    const botonesCanela = crearContenedorBotones(actualizarMensaje, mensajesCanela, mensajeCanela);

    aplicarEstilos(mensajeCanela, {display: 'none'});
    aplicarEstilos(botonesCanela, { display: 'none' });

    const containerCanela = crearContenedor({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        margin: "20px",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "transparent",
    });

    const imagenCanela = crearImagen("images/canela.png", "Canela", {
        width: "200px",
        marginBottom: "20px",
    });

    //Añadimos un evento a la imagen de Canela
    imagenCanela.addEventListener("click", function()  {
        const estiloMensajeCanela = getComputedStyle(mensajeCanela);

        if(indiceMensaje == 2 && estiloMensajeCanela.display == "none"){
            mensajeCanela.style.display = "block";
            botonesCanela.style.display = "block";
            mensajeAyuda.style.display = "none";
            botonesAyuda.style.display = "none";


        }
       

    });

    imagenCanela.addEventListener("mouseenter", function(){
        this.style.filter = "brightness(1.1)";
        this.style.transition = "filter 0.3s ease"; // Efecto de transición suave
        this.style.cursor = "pointer"; // Cambiar cursor al pasar el mouse
        this.style.transform = "scale(1.2)";
        this.style.transition = "transform 0.3s ease"; // Efecto de transición suave
    });

    imagenCanela.addEventListener("mouseleave", function(){
        this.style.filter = "brightness(1)";
        this.style.transform = "scale(1)";
    });

    containerCanela.appendChild(imagenCanela);
    containerCanela.appendChild(mensajeCanela);
    containerCanela.appendChild(botonesCanela);

    // Crear contenedor de cedros
    const containerCedrosArriba = crearContenedor({
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
    });

    const containerArbolesAbajo = crearContenedor({
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
    });

    function agregarCedros(cantidad, contenedor) {
        for (let i = 0; i < cantidad; i++) {
            contenedor.appendChild(crearImagen("images/cedro.png", "Cedro", { width: "auto", height: "auto" }));
        }
    }

    function agregarArboles (cantidad, contenedor){
        for( let i =0; i< cantidad; i++){
            contenedor.appendChild(crearImagen("images/arbol.png", "Arboles", { width: "540px", height:"540px" }));
        }
    }

    const containerHistoria = crearContenedor({
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",

    });

    containerHistoria.appendChild(containerPurin);
    containerHistoria.appendChild(containerCanela);

    agregarCedros(4, containerCedrosArriba);
    agregarArboles(4, containerArbolesAbajo);

    // Agregar elementos al contenedor principal
    containerBosque.appendChild(containerCedrosArriba);
    containerBosque.appendChild(containerHistoria);
    containerBosque.appendChild(containerArbolesAbajo); 

    
    
});

