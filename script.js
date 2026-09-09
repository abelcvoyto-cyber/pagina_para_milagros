/* ================================= */
/* MÚSICA */
/* ================================= */

const musica = document.getElementById("musicaFondo");
const botonMusica = document.getElementById("botonMusica");

musica.volume = 0.5;


/* ================================= */
/* ACTUALIZAR ÍCONO DE MÚSICA */
/* ================================= */

function actualizarIconoMusica() {

    if (musica.paused) {
        botonMusica.innerHTML = "🎵";
    } else {
        botonMusica.innerHTML = "🔊";
    }

}


/* ================================= */
/* INTENTAR REPRODUCIR AL ENTRAR */
/* ================================= */

window.addEventListener("load", () => {

    musica
        .play()
        .then(() => {

            actualizarIconoMusica();

        })
        .catch(() => {

            botonMusica.innerHTML = "🎵";

        });

});


/* ================================= */
/* INICIAR MÚSICA EN PRIMER TOQUE */
/* ================================= */

function iniciarMusica() {

    if (musica.paused) {

        musica
            .play()
            .then(() => {

                actualizarIconoMusica();

            })
            .catch(() => {

                console.log(
                    "El navegador bloqueó la reproducción automática."
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

    musica
        .play()
        .then(() => {

            actualizarIconoMusica();

        })
        .catch(() => {

            console.log(
                "No se pudo iniciar la música."
            );

        });


    document
        .getElementById("carta")
        .scrollIntoView({

            behavior: "smooth"

        });

}


/* ================================= */
/* CONTROLAR MÚSICA */
/* ================================= */

function controlarMusica() {

    if (musica.paused) {

        musica
            .play()
            .then(() => {

                botonMusica.innerHTML = "🔊";

            })
            .catch(() => {

                console.log(
                    "No se pudo reproducir la música."
                );

            });

    }

    else {

        musica.pause();

        botonMusica.innerHTML = "🔇";

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


    frase.textContent =
        "Te quiero Milagros ❤️";


    const posicion =
        Math.random() * 70 + 5;


    frase.style.left =
        posicion + "vw";


    const tamaño =
        Math.random() * 12 + 25;


    frase.style.fontSize =
        tamaño + "px";


    const velocidad =
        Math.random() * 3 + 6;


    frase.style.animationDuration =
        velocidad + "s";


    const rotacion =
        Math.random() * 8 - 4;


    frase.style.setProperty(
        "--rotacion",
        rotacion + "deg"
    );


    document.body.appendChild(
        frase
    );


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

setInterval(
    crearFrase,
    1400
);


/* ================================= */
/* LLUVIA DE FRASES */
/* ================================= */

function lluviaFrases() {

    let cantidad = 0;


    const lluvia =
        setInterval(
            () => {


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
