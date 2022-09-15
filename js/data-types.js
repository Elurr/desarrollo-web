function strings() {
    let text1 = "Benito Díaz";
    let text2 = "Hola me Romino, pero puedes llamarme \"Ro\" con confianza";

    console.log(text1);
    console.log(text1.length);
    console.log(text2);

    // slice() me corta el string en los caracteres que le indiquemos
    console.log(text2.slice(8, 14));
    // cuando los parámetros son negativos cuenta desde el final
    console.log(text2.slice(-17, -15));

    // substring() es similar a slice()
    // si se omite el segundo parámetro se cortará el resto del string
    console.log(text2.substring(8, 14));
    console.log(text2.substring(8));

    // con replace() podemos sustituir una parte de un string
    // el string original no se verá afectado
    // el 1er parámetro busca el texto a reemplazar
    // el segundo es el texto por el que se sustituirá
    console.log(text2.replace("Romino", "Roberto"));

    // Modificar caps o mayúsculas
    console.log(text2.toUpperCase());
    console.log(text2.toLowerCase());

    // Combinar los métodos
    console.log(text2.substring(8, 14).toUpperCase())

    // Búsquedas

    // indexOf() retorna el número de la posición del
    // primer caracter del texto especificado
    console.log(text2.indexOf("Romino"));

    console.log(text2.slice(text2.indexOf('llamarme'),
        (text2.indexOf('llamarme') + 1)).toUpperCase() +
        text2.substring(text2.indexOf('lamarme'), (text2.indexOf('lamarme') + 7)));

    // lastIndexof() retorna el número de la
    // posición del último caracter del texto especificado

    // startsWith() retorna true si el string empieza
    // por el texto especificado
    console.log(text2.startsWith("Hola me"))

    // endsWith() igual que el anterior pero busca al final
    // del string
}

function numbers() {

    let x = 3;
    let y = 3.14;

    // Exponentes/notación científica
    let xe = 123e5;  // 123*10e5 = 123 * 100000 = 12300000
    let ye = 123e-5; // 123*10e-5 = 123 * 0.00001 = 0.00123

    // Precisión integer o integral
    let xpi = 999999999999999;  // igual a 99999999999999
    let ypi = 9999999999999999; // igual a 1000000000000000

    // Precisión float
    let xpf = 0.2 + 0.1;
    // la forma de solventar este problema de precisión
    // es multiplicar y dividir por 10
    let ypf = (0.2 * 10 + 0.1 * 10) / 10;

    console.log(xpf);
    console.log(ypf);

    // Sumas de ints y strings
    let xs = 10;
    let ys = 20;
    let zs = "El resultado es: " + xs + ys;
    let zs2 = "30";

    console.log(zs);
    console.log(xs + ys + zs2); // 3030
    console.log(zs2 + xs + ys); // 301020

    // Operaciones matemáticas con strings
    let str1 = '100';
    let str2 = '10';
    let str3 = str1 / str2;

    console.log(str3); // 
    console.log(typeof str3);
    // typeof indica el tipo de dato de la variable

    // NaN (Not a Number)
    // NaN es un error que indica que hemos intentado realizar
    // operaciones con datos que no son números o son 
    // inoperables
    let xn = 100 / "Pablo";

    console.log(xn); // NaN
    console.log(typeof xn);

    let yn = NaN;
    console.log(yn + 5)   // NaN
    console.log(yn + "5") // NaN5

    // variables indefinidas
    let xu;
    console.log(xu);
    console.log(typeof xu);

    // Convertir números en strings
    let xStr = x.toString();

    console.log(xStr);
    console.log(typeof xStr);

    // Métodos

    x = 3.14159;
    // x = 3001 
    // 3.001 * 10^3 = 3.001 * (10 * 10 * 10) = 3.001 * 1000

    // El parámetro retorna el número de decimales
    // después de la coma
    console.log(x.toExponential())  // 
    console.log(x.toExponential(2)) // 
    console.log(x.toExponential(4)) // 
    console.log(x.toExponential(6)) // 

    // toFixed
    // Devuelve un string con el número escrito con la
    // cantidad de decimales especificada

    console.log(x.toFixed(2))
    console.log(x.toFixed(4))

    // Convertir otros datos a números

    // Number()
    // parseInt()
    // parseFloat()

    y = x.toFixed(3);
    bool1 = true;
    bool2 = false;

    console.log('Covertir y en número: ' + Number(y));
    console.log('Covertir y en int: ' + parseInt(y));
    console.log('Covertir y en float: ' + parseFloat(y));

    console.log('bool true a número: ' + Number(bool1));
    console.log('bool false a número: ' + Number(bool2));
}

function arrays() {
    // En este caso queremos trabajar con los nombres de 
    // los estudiantes

    // Podríamos almacenar cada nombre en una variable pero sería
    // engorroso y poco productivo estar atentos a numerosas variables
    // individuales.

    // Es por esto que se usan los arrays, ya que podemos almacenar numerosos
    // datos en una sola variable, y recorrer estos datos usando el índice

    let nombre1 = 'Pablo'
    let nombre2 = 'Lidia'
    let nombre3 = 'Valeria Maria'

    const clase = [
        'Pablo Camilo',
        'Lidia',
        'Valeria',
        'Ainhoa',
        'Amaia',
        'Diego',
        'Raúl',
        'Pablo',
        'Cecilia',
        'Walid'
    ]

    // Acceder a los elementos de un array
    // El índice de un array empieza por la posición [0]
    // Se pueden acceder a los elementos directamente
    // mediante su índice

    console.log(clase[6]);

    // Acceder al array entero

    console.log(clase);

    // Propiedades y Métodos

    // .length retorna el número de ítems o elementos de un array

    console.log(clase.length); // 10

    let longitud = clase.length;
    console.log(typeof longitud); // number

    // Acceder al último elemnto
    console.log(clase[longitud - 1]);
    // el último elemento es 9 (10 - 1)

    // Imprimir la lista en HTML

    // dentro del div #listaClase
    // ul: li
    // cada nombre será un li
    // para un total de 10
    // esto se hace con un for

    // Imprimir lista

    let div = document.getElementById("listaClase");
    let str = "<ul>";

    for (let i = 0; i < clase.length; i++) {

        str += '<li>' + clase[i] + '</li>';
    }
    str += '</ul>';

    div.innerHTML = str;

    // Imprimir lista con nombre que finalizan en 'a'
    let div2 = document.getElementById("listaClase2");
    let str2 = "<ul>";

    for (let i = 0; i < clase.length; i++) {

        // Comprobamos que el ítem termina en a
        if (clase[i].endsWith('a'))
            str2 += '<li>' + clase[i] + '</li>';
    }
    str2 += '</ul>';

    div2.innerHTML = str2;



}

function firstCap() {
    let string = "";
    let p = document.getElementById('firstCap');

    // Hay varios métodos para acceder a un caracter específico
    // de un string

    // Los strings son cadenas de caracteres o "arrays" de caracteres
    // Por lo tanto se puede acceder a una posición con el índice
    string = "pizza con piña";
    string = string[0].toUpperCase() + string.slice(1);
    p.innerHTML = string; // "Pizza con piña"

    // Mediante el método charAt()
    string = "cocido montañés";
    string = string.charAt(0).toUpperCase() + string.substring(1);
    p.innerHTML = string; // "Cocido montañés"


    // Retornar un valor con la primera mayus y el resto minus
    string = 'eStReLLiTa';
    string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    p.innerHTML = string;

}

function arrayMethods() {
    const frutas = [
        "Pera",
        "Sandía",
        "Uva",
        "Fresa"
    ]

    let div = document.getElementById('arrayDiv');
    let div2 = document.getElementById('arrayDiv2');
    let div3 = document.getElementById('arrayDiv3');

    div.innerHTML = frutas.toString();

    // toString() convierte el array en un string
    // join() funciona igual pero podemos elegir el separador
    div.innerHTML = frutas.join(" / ");


    // Añadir y quitar elementos de un array
    // pop() elimina el último elemento de un array

    let frutaPocha = frutas.pop()
    div.innerHTML = frutaPocha;
    // Retorna el elemento eliminado

    div2.innerHTML = frutas;

    // push() añade un elemento al final de un array
    let frutaFresca = frutas.push("Naranja");
    div.innerHTML = frutaFresca;
    // Retorna el nuevo valor de array.length

    div2.innerHTML = frutas;


    // shift() elimina el primero y mueve los demás a un
    // índice inferior

    let frutaVendida = frutas.shift();
    div.innerHTML = frutaVendida;
    // Retorna el elemento eliminado

    div2.innerHTML = frutas;


    // unshift() añade un elemento al inicia y "empuja"
    // los demás elementos a un índice superior

    //...

    // Otra forma, más sencilla de añadir un elemento al 
    // final de un array es usando la propiedad length

    frutas[frutas.length] = "Limón";
    frutas[frutas.length] = "Kiwi";
    frutas[0] = "Mango";
    // Lo sustituye

    div.innerHTML = frutas;
    div2.innerHTML = frutas[0];

    // Concatenar arrays

    const verduras = [
        "Lechuga",
        "Coliflor",
        "Acelga"
    ]

    div.innerHTML = frutas;
    div2.innerHTML = verduras;
    div3.innerHTML = frutas.concat(verduras).join(" - ");


    // splice() añade elementos en los índices especificados
    verduras.splice(1, 0, "Calabacín", "Calabaza");
    div3.innerHTML = verduras;

    // splice() tb se puede usar para eliminar
    verduras.splice(1, 2);
    div3.innerHTML = verduras;


    // slice() "corta" y elimina un elemento de un array
    div3.innerHTML = verduras.slice(1);
    // slice() no modifica el array, crea una copia
    // con los cambios


    // Ordenar arrays

    const animales = [
        "Caballo",
        "Perro",
        "Gato",
        "Pajaro"
    ];


    div.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";

    div.innerHTML = animales.sort();
    div2.innerHTML = animales.reverse();

    const niveles = [
        25,
        13,
        38,
        41,
        70,
        3,
        100
    ];

    div3.innerHTML = niveles.sort();
    // sort() ordena los elementos como strings
    // por lo tanto no puede ordenar números

    // la forma correcta de ordenar números es mediante
    // una función comparativa

    div3.innerHTML = niveles.sort(function (a, b) {
        return a - b;
        // la función resta cada elemento con los demás
        // dando un resultado

        // gracias al método sort() estos resultados se van
        // ordenando dependiendo del signo de cada resulta

        // si el resultado es 0 no cambia nada
        // si el resultado es positivo el elemento pasa a la derecha
        // si el resultado es negativo lo ordena a la izquierda

        // si comparamos 41 y 100 el método llama a la función con
        // los parámetros (41, 100)
        // Se calcula 41 - 100 y da -59. Por lo tanto sort() ordena
        // 41 como menor que 100
    }
    );

    // Para ordenar en orden descendiente le cambiamos el orden a 
    // la función
    div2.innerHTML = niveles.sort(function (a, b) {
        return b - a;
    });


    // Reordenar arrays aleatoriamente
    div3.innerHTML = niveles.sort(function (a, b) {
        return 0.5 - Math.random()
        // Math.random() retorna un número al azar
        // entre 0 y 1, sin incluir el 1
        // 0 <= x < 1

        // al restarle a 0.5 un número (0 - 1) 
        // el resultado tiene aprox un 50% de prob
        // de ser positivo o negativo y por lo tanto
        // asignando un orden aleatorio a cada elemento

    });


    // Encontrar valor máximo y mínimo
    // No hay métodos nativos para hacer esto, pero se puede obtener
    // de manera relativamente sencilla

    // primero ordenamos el array
    const ordered = niveles.sort(function (a, b) {
        return a - b;
    });

    div.innerHTML = ordered;
    div2.innerHTML = ordered[0];
    div3.innerHTML = ordered[ordered.length - 1];

}

function gradeTests() {
    const grades = [
        50,
        99,
        75,
        80,
        98,
        70,
        10,
        11,
        75,
        49
    ];

    // 1. Una cuenta con el número de alumnos que están aprobados
    // 2. El índice de los alumnos que están aprobados
    // 2alt. Imprimir en pantalla las notas de los alumnos aprobados.

    let div = document.getElementById('gradeDiv');
    let div2 = document.getElementById('gradeDiv2');

    // Declaramos cuantos arrays necesitemos usar
    let passed = [];
    let passed2 = [];

    for (let i = 0; i < grades.length; i++) {

        // Si el valor de array[i] cumple la condición..
        if (grades[i] >= 50) {

            // Se guarda el valor en el nuevo array
            passed.push(grades[i]);

            // Se guarda el índice del valor en el array
            passed2.push(i);
        }

    }
    // 1. Una cuenta
    // passed.length

    // 2alt. Imprimir las notas de los alumnos aprobados
    div.innerHTML = passed;
    // 2. Imprimir los índices de los alumnos aprobados
    div2.innerHTML = passed2;

}

function objects() {
    const coche = {
        marca: "Opel",
        modelo: "Astra",
        color: "Azul",
        añoMatriculacion: 2006,
        nombreCompleto: function () {
            return this.marca + " " + this.modelo;
        }
    };

    let div = document.getElementById('objectsDiv');

    // la forma de llamar a las propiedades de un objeto:

    div.innerHTML = coche.marca;
    //div.innerHTML = coche["marca"];    

    // Métodos
    // Éstos se almacenan como propiedades
    // Son funciones que se ejecutan usando las propiedades
    //del objeto

    div.innerHTML = coche.nombreCompleto();

    let furgo = new coche();

}

function date() {
    let div = document.getElementById('dateDiv');
    let div2 = document.getElementById('dateDiv2');
    let div3 = document.getElementById('dateDiv3');

    let fecha = new Date(1991, 8, 9, 16);
    // El índice de los meses empieza en cero
    // el mes 9 (septiembre) ocupa el índice 8
    div.innerHTML = fecha;
    // Nos imprime una copia (new) del objeto date

    let fecha2 = new Date(1965, 7)
    div.innerHTML = fecha2;

    // Set y Get

    //SET
    // set es crear un objeto con unos valores 
    //especificados por nosotros
    // Formato ISO
    let fechaISO = new Date("2015-03-25T12:00:00Z");
    // La fecha se separa de la hora con una T mayúscula
    // Z mayúscula indica el tiempo UTC
    fechaISO = new Date("2015-03-25T12:00:00+02:00");
    div2.innerHTML = fechaISO;

    // La forma estándar de introducir fechas es:
    // La corta "MM/DD/YYYY"  "03/25/2015"
    // La larga "MMM DD YYYY" "Mar 25 2015" / "25 march 2015"
    // En la larga el mes y el dia pueden cambiar el orden, año debe ir al final
    // El mes puede escribirse entero o abreviado

    // GET
    // get es tomar unos valores específicos de un objeto
    // getFullYear() retorna el año como número YYYY
    // getMonth() retorna mes como número (0-11)
    // getDate() retorna dia como número (1-31)
    // getHours() retonar hora como número (0-23)
    // getMinutes() retorna minutos (0-59)
    // getSeconds() 0-59
    // getMilliseconds() 0-999
    // getTime() retorna ms desde Enero 1, 1970
    // getDay() retorna dia de la semana como número (0-6) siendo domingo el 0
    // Date.now() retorna la fecha actual

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let date = new Date();
    div2.innerHTML = months[date.getMonth()];

    // Métodos
    // toString()
    div.innerHTML = fecha.toString(); // Mon Sep 09 1991 16:00:00 GMT+0200 (hora de verano de Europa central)

    // toUTCString()
    div.innerHTML = fecha.toUTCString(); // Mon, 09 Sep 1991 14:00:00 GMT

    // toDateString()
    div.innerHTML = fecha.toDateString(); // Mon Sep 09 1991

    // .parse() retorna la fecha especificada en ms desde el ZT (Zero Time)
    fecha = Date.parse("12/11/1998");
    div.innerHTML = fecha;


    // ms de vida
    // son los ms que han transcurrido desde el momento desde nuestro 
    // nacimiento hasta la fecha ACTUAL

    // fecha de nacimiento:
    let fechaNac = Date.parse("July 08 1988");
    let fechaActual = Date.parse("July 27 2022");

    div3.innerHTML = fechaActual - fechaNac;

    fecha = new Date(1074556800000);
    div.innerHTML = fecha

}

function clock() {

    let div = document.getElementById('clockDiv');
    let date = new Date();
    let hours = date.getHours();        // 0 - 23    
    let minutes = date.getMinutes();    // 0 - 59
    let seconds = date.getSeconds();    // 0 - 59
    let format = 'AM';

    if (hours > 12) {
        hours = hours - 12;
        format = "PM";
    }

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    let time = hours + ':' + minutes + ':' + seconds + " " + format;

    div.innerHTML = time;

    setTimeout(clock, 1000);
    // setTimeout reproduce la función cada 1000 ms
}

clock(); // llamamos a la función al cargar la página

var btnDate = document.getElementById('clockDiv');
btnDate.addEventListener("click", showDate);

function showDate() {

    let div = document.getElementById('modal');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let weekday = date.getDay();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const weekdays = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ];

    let text = "Hoy es " + weekdays[weekday] + ", " +
        day + " de " + months[month] +
        " de " + year;
    
    div.style.opacity = 1;
    div.innerHTML = "<p>" + text + "</p>";

    setTimeout(() => {
        div.style.opacity = 0;  
    }, 2000);
}

