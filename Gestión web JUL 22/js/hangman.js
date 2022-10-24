const words = [
    'potato',
    'mobile',
    'lego',
    'jacket',
    'apple',
    'cat',
    'throne',
    'street'
]

// El svg del ahorcado
const hangman = document.getElementsByClassName('hangman');
var head = document.getElementById('head');
var face = document.getElementById('face');
var rEyes = document.getElementById('rEyes');
var xEyes = document.getElementById('xEyes');
var armL = document.getElementById('armL');
var armR = document.getElementById('armR');
var legL = document.getElementById('legL');
var legR = document.getElementById('legR');
var door1 = document.getElementById('door1');
var door2 = document.getElementById('door2');
var rope = document.getElementById('rope');

// Seleccionamos una palabra al azar del array
var word = words[Math.floor(Math.random() * words.length)];
// 0.5 * 8 = 4
// words[4]

// 0.35 * 8 = 2.8
// words[2.8] X


// var word = 'street';
var letter = '';

var lives = hangman.length;
var death = 0;
var win = 0;

// Creamos un array donde guardamos los aciertos
var guesses = [];

var p = document.getElementById('palabra');
var v = document.getElementById('vidas');

var hg = document.getElementById('hgCounter');
// hg.innerHTML = hangman.length;

for (let i = 0; i < word.length; i++) {
    // Nos imprime tantos guiones como letras tenga nuestra palabra
    p.innerHTML += '_'
}
v.innerHTML = "Vidas restantes: " + lives;


// Guardamos todos los botones de la clase en un array
// [0] = A, [1] = B, etc...
const letters = document.getElementsByClassName('btnLetras');
// getElementsByClassName nos devuelve un ARRAY

function game() {

    p.innerHTML = ""
    let counter = 0;
    letter = this.innerHTML
    // this (esta tecla que ha activado el evento) 
    // innerHTML contiene la letra que hemos escrito dentro del botón

    console.log("Has pulsado la tecla " + letter)


    // El for recorre la palabra y busca coincidencias
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() == letter.toLowerCase()) {
            // toLowerCase nos asegura de que las letras coincidan
            // independientemente de las mayúsculas

            // Si hay coincidencias, aumenta el contador
            counter++;
            win++;
            // Rellenamos el array con la letra acertada en la posición 
            // correspondiente
            guesses[i] = letter;
        } else {

            // Si la posición del array de aciertos está vacía la 
            // rellena con un guión
            if (!guesses[i]) {
                guesses[i] = '_';
            }
        }
    }

    // Se imprime el array de aciertos como un string sin comas
    p.innerHTML = guesses.join('');


    // Si el contador es mayor que 0, es que han habido coincidencias
    if (counter > 0) {
        // Verde, correcto
        this.style.backgroundColor = "green"
    } else {
        // Rojo, incorrecto
        this.style.backgroundColor = "red"

        // Restamos una vida
        lives--;
        hangman[death].style.display = 'block';
        death++;
    }
    v.innerHTML = "Vidas restantes: " + lives;

    // En cualquier caso, la tecla pulsada se desactiva
    this.disabled = true;

    // Comprobamos si el juego se ha ganado
    if (win == guesses.length) {
        winner();
    }

    // Comprobamos si el jugador se ha quedado sin vidas
    if (lives == 0) {
        loser();
    }

}




// Event listener que se acciona cuando pulsamos una tecla
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', game)
}

function lose() {
    for (let i = 0; i < hangman.length; i++) {

        setTimeout(() => {
            lives--;
            hangman[death].style.display = 'block';
            death++;
        }, 300 * i);
    }
    loser();
}

function winner() {

    // Con el timeout le damos tiempo a que la 
    // última letra se imprima en pantalla
    setTimeout(() => {
        if (confirm("Has ganado! ¿Otra partida?")) {
            location.reload();
        }
    }, 100);
}

function loser() {

    fall(); 

    setTimeout(() => {
        if (confirm("Has perdido... ¿Quieres intentarlo de nuevo?")) {

            // Se recarga la página y se elige otra palabra
            location.reload();
        }
    }, 5000);
}

function fall() {
    face.classList.add('dead');

    setTimeout(() => {
        rEyes.style.visibility = 'hidden';
        xEyes.style.visibility = 'visible';

        armL.setAttributeNS(null, "y2", 150)
        armL.setAttributeNS(null, "x2", 185)
        armR.setAttributeNS(null, "y2", 150)
        armR.setAttributeNS(null, "x2", 215)

        legL.setAttributeNS(null, "y2", 205)
        legL.setAttributeNS(null, "x2", 195)
        legR.setAttributeNS(null, "y2", 205)
        legR.setAttributeNS(null, "x2", 205)
    }, 2500);
}




