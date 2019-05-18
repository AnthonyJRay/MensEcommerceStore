const shoppingCart = document.querySelector('.shoppingCart');
const cartButton = document.querySelector('.cart-link');

cartButton.addEventListener('click', e => {
  if (shoppingCart.classList.contains('open')) {
  console.log(event.target);
  shoppingCart.classList.remove('open');
} else {
  shoppingCart.classList.add('open');
}});






jQuery(function($) {

  var target = $(".title").each(
  target.html(target.text().replace(/./g, "<span>$&</span>")));

  setTimeout(runAnimation, 250);

  function runAnimation() {
    var index, spans;

    index = 0;
    spans = target.children();
    doOne();

    function doOne() {
      var span = $(spans[index]);
      if (!$.trim(span.text())) {
        // Skip blanks
        next();
        return;
      }

      // Do this one
      span.css({
        position: "relative",
      }).animate({
        right: -999,
      }, "slow", function() {
        next();
      });
    }

    function next() {
      ++index;
      if (index < spans.length) {
        doOne();
      }
      else {
        setTimeout(runAnimation, 500);
      }
    }
  }

});
