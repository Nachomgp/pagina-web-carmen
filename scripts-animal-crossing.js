document.addEventListener("DOMContentLoaded", () => {

    //Declaracion de variables globales para todo el documento
    const mensajes = ["¡Ya hemos llegado! Así que esto es el mundo de Animal Crossing. Se ve un lugar muy verdoso y tranquilo.",
        "Bueno, ¿que hacemos ahora? Cinnamon nos dijo que nuestro próximo destino debía ser este lugar, pero ahora que hemos llegado no se por donde deberíamos comenzar a buscar...",
        "¡Anda, mira! Hay alguien ahí, parece estar un poco distraída, ¿que te parece si le preguntamos? Quizás ella sepa algo.",
        "¡Ahhhh! Que susto, no esperaba a nadie asi de repente por aquí. Estaba recolectando flores, ¡Este lugar esta repleto de flores bonitas!",
        "Por cierto, no me suenan vuestras caras ¿No sois de por aquí verdad?",
        "Pues no, venimos de un lugar bastante diferente",
        "Bueno, ¡Eso no importa, aquí vais a ser bienvenidos igualmente! Mi nombre es Canela, encantada de conoceros.",
        "¡Genial! Yo soy Purin y esta es Carmen, hemos acabado aqui en busca de algo muy importante para nosotros. Estamos en busca de una llave.",
        "Una llave...Escuche algo de cierta llave bastante misteriosa hace unos días. Se hablaba de ella en los chismorreos del pueblo.",
        "El alcalde Toom Nook nos dijo que dentro de poco llegarían unos visitantes buscándola",
        "Pero aún no han llegado...Espero que no tarden mucho, ¡Los recibiré con los brazos abiertos!",
        "Canela...¡Esos visitantes somos nosotros!",
        "¡Ah! Teneís razón, perdonad a veces soy un poco distraída. Bueno os contaré todo lo que sé.",
        "Resulta que el alcalde Toom Nook tuvo una reunión muy importante haces unas semanas con alguien que venía de un mundo muy lejado. Su nombre era Hello Kitty.",
        "Esta chica le comentó que en los próximos días llegarían unos visitantes a su mundo buscando una llave.",
        "Le dio información exclusiva sobre donde se encuentra dicha llave para que este podudiese comunicarselo a los visitantes cuando apareciesen",
        "Eso es todo lo que sé, por lo que si quereis encontrarla debereis ir a casa del alcalde a preguntarle personalmente.",
        "Esto es muy raro ¿Por qué Hello Kitty sabía que llegaríamos hasta aquí para buscar la llave?",
        "No entiendo nada, pero de todas formas ahora sabemos donde buscar. ¡Muchas gracias Canela!",
        "¡No hay de que! Yo me voy a adelantar, ¡Nos vemos luego!",
        "¡Canela, espera! Se ha ido... No le hemos podido preguntar como se llega a la casa de Tom Nook.",
        "Bueno ¡No importa! Busquemos por nuestra cuenta, ¿Que te parece si miramos en la playa? Podemos ir hasta allí pulsando en la barra superior o a través del puente de madera",
        "¡Si vamos por el puente de madera quizás nos encontremos con gente interesante!"

    ];
    let indiceMensaje = 0;


    //--------IMAGENES ARBOLES--------

    //Creamos las imagenes dinamicamente de los cedros en el div superior
    const divBosqueSuperior = document.querySelector(".bosque-top");

    function crearCedrosTop(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            const imagenCedro = document.createElement("img");
            imagenCedro.src = "images/cedro.png";
            imagenCedro.alt = "Cedro";
            imagenCedro.style.width = "auto";
            imagenCedro.style.height = "auto";
            divBosqueSuperior.appendChild(imagenCedro);
        }
    }

    crearCedrosTop(4);



    //Creamos las imagenes dinamicamente de los arboles en el div inferior
    const divBosqueInferior = document.querySelector(".bosque-bottom");

    function crearArbolesBottom(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            const imagenArbol = document.createElement("img");
            imagenArbol.src = "images/arbol.png";
            imagenArbol.alt = "Árbol";
            imagenArbol.style.width = "450px";
            imagenArbol.style.height = "450px";
            divBosqueInferior.appendChild(imagenArbol);
        }
    }

    crearArbolesBottom(4);


    //--------IMAGENES PURIN Y CANELA--------

    //-----Definicion-----
    //Definimos la imagen de Purin
    const imagenPurin = document.querySelector(".purin-imagen");
    imagenPurin.id = "purin";
    imagenPurin.style.width = "250px";
    imagenPurin.style.height = "270px";
    imagenPurin.style.display = "block";
    imagenPurin.style.margin = "20px";

    //Definimos la imagen de Canela
    const imagenCanela = document.querySelector(".canela-imagen");
    imagenCanela.id = "canela";
    imagenCanela.style.width = "250px";
    imagenCanela.style.height = "300px";
    imagenCanela.style.display = "block";
    imagenCanela.style.margin = "20px";


    //-----Eventos-----
    //Agregamos los eventos de Purin
    imagenPurin.addEventListener("mouseenter", function () {
        imagenPurin.style.transform = "scale(1.2)";
        imagenPurin.style.transition = "transform 0.3s ease";
        imagenPurin.style.cursor = "pointer";

    });

    imagenPurin.addEventListener("mouseleave", function () {
        imagenPurin.style.transform = "scale(1)";

    });

    imagenPurin.addEventListener("click", function () {
        window.location.href = "purin.html";
    })

    //Agregamos los eventos de Canela
    imagenCanela.addEventListener("mouseenter", function () {
        imagenCanela.style.transition = "transform 0.3s ease";
        imagenCanela.style.cursor = "pointer";

    });

    imagenCanela.addEventListener("mouseleave", function () {
    });

    imagenCanela.addEventListener("click", function () {
        if (indiceMensaje == 2) {
            imagenCanela.style.transform = "scale(1) rotate(-360deg)";
            imagenCanela.src = "images/canela-volteada.png";
            cargarMensajeSiguiente(conversacionBosque);
        }


    })


    //--------CONVERSACION DEL BOSQUE--------

    //Agregamos el texto del mensaje que contiene la conversacion de forma dinamica
    const conversacionBosque = document.querySelector(".bosque-conversacion");
    conversacionBosque.innerHTML = mensajes[indiceMensaje];


    //--------BOTONES--------

    //Agregamos los eventos de los botones
    const botonAnterior = document.querySelector(".bosque-boton-anterior");
    const botonSiguiente = document.querySelector(".bosque-boton-siguiente");

    botonAnterior.addEventListener("click", function () {
        cargarMensajeAnterior(conversacionBosque);
    });

    botonAnterior.addEventListener("mouseenter", function () {
        botonAnterior.style.transform = "scale(1.1)";
        botonAnterior.style.transition = "transform 0.3s ease";
    });

    botonAnterior.addEventListener("mouseleave", function () {
        botonAnterior.style.transform = "scale(1)";
    });

    botonSiguiente.addEventListener("click", function () {
        cargarMensajeSiguiente(conversacionBosque);
    });

    botonSiguiente.addEventListener("mouseenter", function () {
        botonSiguiente.style.transform = "scale(1.1)";
        botonSiguiente.style.transition = "transform 0.3s ease";
    });

    botonSiguiente.addEventListener("mouseleave", function () {
        botonSiguiente.style.transform = "scale(1)";
    });


    //Funciones para cargar el mensaje anterior o siguiente
    function cargarMensajeAnterior(conversacionBosque) {
        if (indiceMensaje > 0) {
            indiceMensaje--;
            conversacionBosque.innerHTML = mensajes[indiceMensaje];
        }
        if (indiceMensaje != 2) {
            botonSiguiente.style.display = "block";
        }
        comprobarHablante();
    }

    function cargarMensajeSiguiente(conversacionBosque) {
        if (indiceMensaje < mensajes.length - 1) {
            indiceMensaje++;
            conversacionBosque.innerHTML = mensajes[indiceMensaje];
        }
        if (indiceMensaje == 2) {
            botonSiguiente.style.display = "none";
            imagenPurin.src= "images/purin-volteado.png";

        }
        else {
            botonSiguiente.style.display = "block";
        }
        comprobarHablante();
    }

    function comprobarHablante() {
        if (indiceMensaje === 0 || indiceMensaje === 1 || indiceMensaje === 2 || indiceMensaje ===5 || indiceMensaje ===7 ||indiceMensaje===11) {
            conversacionBosque.style.backgroundColor = "#fffea6"
        }
        else if (indiceMensaje === 3 || indiceMensaje === 4 || indiceMensaje === 6 || indiceMensaje === 8 || indiceMensaje ===9 || indiceMensaje===10 || indiceMensaje===12) {
            conversacionBosque.style.backgroundColor = "#ffb731"

        }
    }














});






