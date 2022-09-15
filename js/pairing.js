var board = document.getElementById('container');
var selector = document.getElementById('selector');
var divs = [];

var em = ["💐", "🌹", "🌻", "🏵️",
    "🌺", "🌴", "🌈", "🍓",
    "🍒", "🍎", "🍉", "🍊",
    "🥭", "🍍", "🍋", "🍏",
    "🍐", "🥝", "🍇", "🥥",
    "🍅", "🌶️", "🍄", "🧅",
    "🥦", "🥑", "🍔", "🍕",
    "🧁", "🎂", "🍬", "🍩",
    "🍫", "🎈"];

var sounds = [
     
]    

var casillas = 0;
var valor = 0;
var parejas = [];

var comparativa = [];
var resultado = [];
var win = 0;

var clicked = false;

// he pulsado un botón y he elegido las casillas con
//  las que jugar
selector.addEventListener('change', () => {
    casillas = selector.options[selector.selectedIndex].value;
    print();
}
)

function print() {
    // Limpiamos el tablero
    parejas = [];
    board.innerHTML = '';


    valor = casillas / 2;

    // 
    for (let i = 1; i <= valor; i++) {
        parejas.push(i);
    }
    // parejas = [1,2,3,4,5,6]
    for (let i = 1; i <= valor; i++) {
        parejas.push(i);
    }
    // parejas = [1,2,3,4,5,6,1,2,3,4,5,6]

    // Reordenar el array aleatoriamente
    parejas = parejas.sort(function (a, b) {
        return 0.5 - Math.random()
    });

    console.log(parejas.toString())

    for (let i = 0; i < casillas; i++) {
        board.innerHTML += '<div id="' + i + '"></div>';
        // <div class="inner"><div class="front"></div><div class="back"></div></div>
        console.log('div insertado: ' + i)
    }

    // me retorna un array con los divs hijos del tablero
    divs = board.children;
    // divs = document.getElementsByClassName('back');


    for (let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = '<p>' + em[parejas[i]] + '</p>';
        console.log('div relleno: ' + i);


        divs[i].addEventListener('click', game)
    }

}

function game() {

    if (!clicked) {

        if (!comparativa[0]) {

            this.firstChild.style.visibility = "visible";

            comparativa[0] = this.innerHTML;
            resultado[0] = this.getAttribute('id');

        } else {

            clicked = true;

            this.firstChild.style.visibility = "visible";

            comparativa[1] = this.innerHTML;
            resultado[1] = this.getAttribute('id');

            var celda1 = document.getElementById(resultado[0]);
            var celda2 = document.getElementById(resultado[1]);

            if (comparativa[0] == comparativa[1]) {
                console.log('coinciden');

                setTimeout(() => {

                    celda1.style.visibility = 'hidden';
                    celda1.firstChild.style.visibility = 'hidden';
                    celda2.style.visibility = 'hidden';
                    celda2.firstChild.style.visibility = 'hidden';

                    clicked = false;
                    win++;
                    winner();

                }, 800);



            } else {
                console.log('no coinciden');

                setTimeout(() => {

                    celda1.firstChild.style.visibility = 'hidden';
                    celda2.firstChild.style.visibility = 'hidden';

                    clicked = false;

                }, 800);

            }
            comparativa = [];
        }
    }
}

function winner() {

    if (win == valor) {
        if (confirm('Has ganado! Quieres jugar de nuevo?')) {
            location.reload;
        }
    }
}


var testContainer = document.getElementById('testContainer');

function test(x) {
    console.log('test');
    for (let i = 0; i < x; i++) {
        testContainer.innerHTML += "<div></div>";
        console.log('test: ' + i);
    }
}

function borrar() {
    testContainer.innerHTML = '';
}

var columnas = "";

for (let i = 0; i < numCol; i++) {
    columnas += "<td> <img src='" + arrayImg[i] + "'> </td>"
    tablaContainer.innerHTML += columnas + "</tr>"
}