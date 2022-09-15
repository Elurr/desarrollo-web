$(document).ready(function () {

    // GET
    $('#btnTexto').click(function () { 
        alert($('#pEjemplo').text())
    });
    $('#btnHTML').click(function () { 
        alert($('#pEjemplo').html())
    });

    // SET
    $('#btnSet').click(function () { 
        $('#pEjemplo').html('Este párrafo contiene <i>texto</i> en cursiva.')

    });

    // GET Attr
    $('#btnGAttr').click(function () { 
       var atributo = $('a').attr('href');
       $('pAttrPrint').text(atributo); 
       alert(atributo)
    });

    // SET Attr
    $('#btnSAttr').click(function () { 
        // Cambiar el href de un link
        $('a').attr({
            'href': 'https://www.bing.es/'
        });
        
     });
    
});

var string = '';
var p = document.getElementById('pEjemplo');

string = 'Este párrafo contiene <b>texto</b> en negrita.'
