// Una buena práctica es introducir todo el código en esta función
// Esto previene que el código se ejecute antes de que el documento cargue
// Esto también permite enlazar el JavaScript antes del body
// en el documento HTML
$(document).ready(function () {

    // Todo el código de JQuery va aquí..

    // Al hacer en CUALQUIER botón...
    $('button').click(function () {
        // TODOS los span cambian su atributo color de CSS
        $('span').css('color', 'red');
    })

    // on() para asignar múltiples eventos a un mismo selector
    $('p').on({
        mouseenter: function () {
            $(this).css('color', 'green');
        },
        mouseleave: function () {
            $(this).css('color', 'blue');
        },
        click: function () {
            $(this).css('color', 'black');
        },
        dblclick: function () {
            $(this).css('font-weight', 'bold');
        }
    })

    $('#btnHide').click(function () {
        // hide() tiene dos parámetros
        // ms de animación
        // callback, una función que se ejecuta después del hide
        $('p').hide(1000, function () {
            // alert('Todas las p se han ocultado!')
        });
    })

    $('#btnShow').click(function () {
        $('p').show(1000, function () {
            $('p').removeAttr('style');
        });

    });

    $('#btnMenu').click(function () {
        $('#container').toggle(1000, function () {
            // función callback, se ejecuta una vez que ha terminado el efecto
            alert('el menú ha cambiado de visibilidad')
        });

    });

    $('#btnAniMenu').click(function () {

        // Las animaciones ejecutan en orden, una a una
        $('#container').animate({
            top: '95%'
        });
        $('#container').animate({
            top: '0'
        }, 2000);

    });

    // $('#btnChain').click(function () { 
    //     $('#divChain').css('background-color', 'red');
    //     $('#divChain').slideDown(1500);
    //     $('#divChain').slideUp(1500);
    //     $('#divChain').hide(1500);
    // });

    $('#btnChain').click(function () {
        $('#divChain').css('background-color', 'red')
            .slideUp(1500)
            .slideDown(1500)
            .hide(1500);
    });



})