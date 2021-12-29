// typed
const typed = new Typed(".typed",{
    strings: [
        "<i>Soy estudiante de ingenieria industrial.</i>",
        "<i>Soy estudiante autodidacta de programación.</i>",
        "<i>Me apasiona la programación!</i>",
        "<i>como tambien la ingenieria!</i>"
    ],
    //stringsElement: "#cadenas-texto", //ID del elemento que contiene cadenas de texto a mostrar
    typeSpeed: 40, //velocidad en mili para poner una letra
    startDelay: 300,//tiempo de retraso en iniciar la animacion(aplica tambien cuando termina y vuelve a iniciar)
    backSpeed: 50, //velocidad en mili para borrar una letra
    smartBackspace: true, //elimina solamente las palabras que sean nuevas en una cadena de texto
    shuffle: false, //alterar el orden en el que escribe las palabras
    backDelay: 1400, //tiempo de espera despues de que termina de escribir una palabra
    loop: true, //repetir el array de strings
    loopCount: false, //cantidad de veces a repetir el array. false= infinito
    showCursor: true, //mostrar el cursor palpitando
    cursorChar: "|", //caracter para el cursor
    contentType: "html", // "html" o "null" para texto sin formato
})

// scroll

var scroll = new SmoothScroll('a[href*="#"]',{
    speed : 800,
});

// Jquery
$(document).ready(function(){
    const altura = $(".primera-parte").outerHeight()-350;
    $(".info p").hide()
    $(window).scroll(function(){
        if($(window).scrollTop()>=altura){
            $(".info p").slideDown(1200)
        }
    })
  });
