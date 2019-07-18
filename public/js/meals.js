document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    var instance = M.Carousel.init({   
        numVisible: 3,
        fullWidth: true,

      });
  });