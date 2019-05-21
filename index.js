const shoppingCart = document.querySelector('.shoppingCart');
const cartButton = document.querySelector('.cart-link');

cartButton.addEventListener('click', e => {
  if (shoppingCart.classList.contains('open')) {
  console.log(event.target);
  shoppingCart.classList.remove('open');
} else {
  shoppingCart.classList.add('open');
}});


var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <=0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'letter'
        );
      } 
    
    }
  }
  return {
    init: init
  };
};
animateHTML().init();




