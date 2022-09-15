function changeColor() {
    //document se refiere a el acceso al objeto que representa la web
    //getElementById es un método donde se apunta a un determinado elemento
    //style accede al atributo donde se asignan los estilos del elemento
    //color es una propiedad del atributo estilo
    //'red' debe ir entre comillas porque es un valor fijo, un string
    document.getElementById('ejemplo1').style.color = 'red';
}

// en la variable myInput se almacenará el elemento indicado:
var myInput = document.getElementById('input1');
var parrafo1 = document.getElementById('p1');
var parrafo2 = document.getElementById('p2');
var parrafo3 = document.getElementById('p3');
// cada variable tiene almacenada el acceso a un elemento

function changeWeight() {
    // se asigna el atributo value a una variable, ésta se guarda en el momento de declararla
    // es importante asegurarse de que la variable guarda el valor cuando el usuario
    // ya haya interactuado con el input, de otro modo tendremos un valor vacío
    // como por ejemplo, al cargar la página vamos a tener siempre un valor vacío
    var valor = myInput.value;
    parrafo1.style.fontWeight = 'normal';
    parrafo2.style.fontWeight = 'normal';
    parrafo3.style.fontWeight = 'normal';
    document.getElementById(valor).style.fontWeight = 'bold';
    // el id dentro del método se asigna mediante una variable, por lo que el resultado obtenido
    // dependerá del valor de ésta
}

// Cambiar el texto de los párrafos:
var myInputTxt = document.getElementById('input2');
var pTexto1 = document.getElementById('pTxt1');
var pTexto2 = document.getElementById('pTxt2');
var pTexto3 = document.getElementById('pTxt3');
var selector = document.getElementById("select2");


function changeText() {
    var texto = myInputTxt.value;
    var idTxt = selector.value;

    // if es un condicional, es decir, si se cumple la condición que viene entre paréntesis
    // se ejecuta el código dentro de las llaves
    if (idTxt == "all") {
        //  == hace referencia a una comparación, si se cumple, el resultado es "true"
        // y se ejecuta el código interior del if


        // innerHTML es un nodo del elemento
        // específicamente, es el nodo que contiene texto dentro del elemento
        pTexto1.innerHTML = texto;
        pTexto2.innerHTML = texto;
        pTexto3.innerHTML = texto;

        // else contiene un bloque de código que se ejecuta en caso de que la condición arriba mencionada    
        // NO se cumpla (false)
    } else {

        // al tener la variables idTxt y texto en la asignación
        // tanto el elemento modificado como el texto dependerán de
        // las acciones del usuario
        document.getElementById(idTxt).innerHTML = texto;
    }
}

function contador() {
    let p = document.getElementById('contador');
    let texto = "";

    for (let index = 2; index <= 20; index += 2) {
        // let index = 0 nos declaro un contador interno del for
        // index < 20 nos indica el límite del contador
        // index++ indica que por cada repetición del for, index aumenta en 1

        console.log(index);

        setTimeout(() => {
            texto = "número <b>" + index + "</b> <br>";
            p.innerHTML += texto;
        }, index * 500);
        // p.innerHTML += index;

    }

    p.innerHTML = texto;

}

function print() {
    let input = document.getElementById('inputPrint');
    let div = document.getElementById('contenedor');
    let texto = "Lorem ipsum bla bla bla";
    let parrafos = '';
    // string que contiene todo el HTML que va a imprimir
    //los párrafos
    //está vacío por defecto

    valor = input.value;
    valor = parseInt(valor);
    // parseInt convierte el string que nos da el input
    // y lo convierte a número
    // '7' => 7

    // al iniciar index en 1, nos aseguramos de que sólo
    // se ejecuta el código cuando tenemos un valor igual
    // a 1 o mayor
    for (let index = 1; index <= valor; index++) {

        parrafos += '<p>' + texto + '</p>';
        // el for guarda en parrafos tantas líneas como
        // tenga el valor que hayamos introducido en el input
    }
    div.innerHTML = parrafos;
    // al ser independiente del for, si el input tiene 0
    // o un valor inválido, los párrafos se limpian

}

function print2() {
    let input = document.getElementById('selectorPrint');
    let div = document.getElementById('contenedor2');

    let texto = '<p> Lorem lorem ipsum ipsum gñé </p>';
    let valor = parseInt(input.value);

    div.innerHTML = texto.repeat(valor);
    // esta línea hace que todo el switch sea redundante

    // switch (valor) {
    //     case 1:
    //         div.innerHTML = texto;
    //         break;

    //     case 2:
    //         texto += texto;
    //         div.innerHTML = texto;
    //         break;

    //     case 3:
    //         div.innerHTML = texto.repeat(3);
    //             // string.repeat(x) repite o 'multiplica' un string
    //             // un número x de veces
    //         break;

    //     case 4:
    //         div.innerHTML = texto.repeat(4);
    //         break;

    //     case 5:
    //         div.innerHTML = texto.repeat(5);
    //         break;

    //     default:
    //         div.innerHTML = '';
    //         break;
    // }


}

function printColor() {
    let selector = document.getElementById('selectColor');
    let div = document.getElementById('cont3');

    let valor = selector.value;
    let texto = '<p> Lorem lorem ipsum ipsum gñé </p>';

    div.innerHTML += texto;
    div.lastChild.style.color = valor;

}

// OPERADORES 

function jsOperator() {
    let x = 5;
    let y = 7;
    let z = x + y; // SUMA
    let w = x * y; // MULTIPLICACION
    let v = w / y; // DIVISION
    let u = w % z; // RESTO DE LA DIVISION
    let t = x ** 2; // POTENCIA 

    console.log('x: ' + x);
    console.log('y: ' + y);
    console.log('x + y: ' + z);
    console.log('x * y: ' + w);
    console.log('w / y: ' + v);
    console.log('w % z: ' + u);
    console.log('x ** 2: ' + t);

    // Operando strings

    let texto1 = "Qué día tan";
    texto1 += " maravilloso";
    let texto2 = "5"

    console.log(texto1);
    console.log(texto1 + x);
    console.log(texto2 + x);

    // Operadores de comparación y lógicos

    if (x == 5 && y == 13) {
        // entra al if si ambas condiciones se cumplen
        // en este caso NO entra
    }

    if (x == 5 || y == 13) {
        // entra al if si una de las dos condiciones se cumple
        // en este caso SI entra
    }

    if (x == 5 && !(y == 13)) {
        // la negación se cumple cuando no se igualan los valores
        // en este caso SI entra
    }

    let edad;
    let puedeVotar;

    edad = 31;
    puedeVotar = (edad >= 18) ? "Demasiado joven":"Tiene edad para votar";
                //(condición) ? (valor if false):(valor if true) 

    if (edad >= 18) {
        puedeVotar = "Tiene edad para votar";
    } else {
        puedeVotar = "Demasiado joven";
    }    
}