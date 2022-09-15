$(document).ready(function () {

  $('.card').click(function () {
    const container = document.getElementById('container');
    const spread = container.classList.contains('spread');
    const deck = document.getElementsByClassName('card');

    if (spread) {
      if (this.classList.contains('card-frontal')) {

        // Carta frontal de la mano
        if (this.classList.contains('zoom-frontal')) {
          $('.card').removeClass('zoom-frontal');

        } else {
          $(this).toggleClass("zoom-frontal");

          $('.card').each(function (i) {

            if (this.classList.contains('zoom-in')) {
              $(this).removeClass('zoom-in');
              $(this).addClass('zoom-out');
            }
          })
        }

        // Resto de cartas en la mano
      } else if (this.classList.contains('zoom-in')) {
        $('.card').removeClass('zoom-in');
        $(this).addClass('zoom-out');
        
      } else {
        $('.card').removeClass('zoom-out');

        $('.card').each(function (i) {
          if (this.classList.contains('zoom-in')) {
            $(this).removeClass('zoom-in');
            $(this).addClass('zoom-out');
          }
        })

        $('.card').removeClass('zoom-frontal');
        $(this).addClass("zoom-in");
      }

    }

    // Abre el abanico  
    if (!spread) {
      $('.card-container').addClass("spread");
    }

  });

});