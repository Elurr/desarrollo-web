$(document).ready(function () {

  $('.card').click(function () {
    const container = document.getElementById('container');
    const spread = container.classList.contains('spread');

    if (spread) {
      if (this.classList.contains('card-frontal')) {
        // Carta frontal de la mano
        if (this.classList.contains('zoom-frontal')) {
          $('.card').removeClass('zoom-frontal');
        } else {
          $('.card').removeClass('zoom');
          $(this).toggleClass("zoom-frontal");
        }
        // Resto de cartas en la mano
      } else if (this.classList.contains('zoom')) {
        $('.card').removeClass('zoom');
      } else {
        $('.card').removeClass('zoom');
        $('.card').removeClass('zoom-frontal');
        $(this).toggleClass("zoom");
      }
    
    }

    // Abre el abanico  
    if (!spread) {
      $('.card-container').addClass("spread");
    };

  });

});