/* ================================= */
/* MÚSICA */
/* ================================= */

const musica =
    document.getElementById(
        "musicaFondo"
    );


const botonMusica =
    document.getElementById(
        "botonMusica"
    );


musica.volume = 0.5;


/* ================================= */
/* INTENTAR REPRODUCIR AL ENTRAR */
/* ================================= */

window.addEventListener(
    "load",
    () => {

        musica
            .play()

            .then(() => {

                botonMusica.innerHTML =
                    "🔊";

            })

            .catch(() => {

                botonMusica.innerHTML =
                    "🎵";

            });

    }
);


/* ================================= */
/* INICIAR MÚSICA EN PRIMER TOQUE */
/* ================================= */

function iniciarMusica() {

    if (musica.paused) {

        musica
            .play()

            .then(() => {

                botonMusica.innerHTML =
                    "🔊";

            })

            .catch(() => {

                console.log(
                    "El navegador bloqueó el audio."
                );

            });

    }

}


document.addEventListener(
    "click",
    iniciarMusica,
    {
        once: true
    }
);


document.addEventListener(
    "touchstart",
    iniciarMusica,
    {
        once: true
    }
);


/* ================================= */
/* ABRIR CARTA */
/* ================================= */

function irCarta() {

    if (musica.paused) {

        musica.play();

        botonMusica.innerHTML =
            "🔊";
    }


    document
        .getElementById(
            "carta"
        )
        .scrollIntoView({

            behavior:
                "smooth"

        });

}


/* ================================= */
/* CONTROLAR MÚSICA */
/* ================================= */

function controlarMusica() {

    if (musica.paused) {

        musica.play();

        botonMusica.innerHTML =
            "🔊";

    }

    else {

        musica.pause();

        botonMusica.innerHTML =
            "🔇";

    }

}


/* ================================= */
/* MOSTRAR SORPRESA */
/* ================================= */

function mostrarSorpresa() {

    const mensaje =
        document.getElementById(
            "mensajeSorpresa"
        );


    mensaje
        .classList
        .add(
            "activo"
        );


    lluviaFrases();

}


/* ================================= */
/* CREAR FRASE */
/* ================================= */

function crearFrase() {

    const frase =
        document.createElement(
            "div"
        );


    frase.classList.add(
        "frase-flotante"
    );


    /*
    FRASE QUE VA A APARECER
    */

    frase.textContent =
        "Te quiero Milagros ❤️";


    /*
    POSICIÓN HORIZONTAL ALEATORIA
    */

    const posicion =
        Math.random() * 70 + 5;


    frase.style.left =
        posicion + "vw";


    /*
    TAMAÑO ALEATORIO
    */

    const tamaño =
        Math.random() * 12 + 25;


    frase.style.fontSize =
        tamaño + "px";


    /*
    VELOCIDAD ALEATORIA
    */

    const velocidad =
        Math.random() * 3 + 6;


    frase.style.animationDuration =
        velocidad + "s";


    /*
    PEQUEÑA ROTACIÓN ALEATORIA
    */

    const rotacion =
        Math.random() * 8 - 4;


    frase.style.setProperty(
        "--rotacion",
        rotacion + "deg"
    );


    /*
    AGREGAR AL BODY
    */

    document.body.appendChild(
        frase
    );


    /*
    ELIMINAR DESPUÉS
    */

    setTimeout(
        () => {

            frase.remove();

        },

        10000
    );

}


/* ================================= */
/* FRASES AUTOMÁTICAS */
/* ================================= */

/*
Cada 1.4 segundos
aparece una frase.
*/

setInterval(
    crearFrase,
    1400
);


/* ================================= */
/* LLUVIA DE FRASES */
/* ================================= */

/*
Cuando presiona el botón
"Presiona aquí ❤️"

aparecen muchas frases.
*/

function lluviaFrases() {

    let cantidad = 0;


    const lluvia =
        setInterval(
            () => {


                /*
                CREAR 3 FRASES
                */

                for (
                    let i = 0;
                    i < 3;
                    i++
                ) {

                    setTimeout(
                        crearFrase,
                        i * 150
                    );

                }


                cantidad++;


                /*
                DETENER LA LLUVIA
                */

                if (
                    cantidad >= 10
                ) {

                    clearInterval(
                        lluvia
                    );

                }

            },

            300
        );

}
/* ================================= */
/* ABRIR FOTO */
/* ================================= */

function abrirFoto() {

    const visor =
        document.getElementById(
            "visorFoto"
        );


    visor
        .classList
        .add(
            "activo"
        );


    document.body.style.overflow =
        "hidden";

}


/* ================================= */
/* CERRAR FOTO */
/* ================================= */

function cerrarFoto() {

    const visor =
        document.getElementById(
            "visorFoto"
        );


    visor
        .classList
        .remove(
            "activo"
        );


    document.body.style.overflow =
        "";

}


/* ================================= */
/* CERRAR FOTO CON ESC */
/* ================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            cerrarFoto();

        }

    }
);