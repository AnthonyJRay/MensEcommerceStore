const shoppingCart = document.querySelector('.shoppingCart');
const cartButton = document.querySelector('.cart-link');

cartButton.addEventListener('click', e => {
  if (shoppingCart.classList.contains('open')) {
  console.log(event.target);
  shoppingCart.classList.remove('open');
} else {
  shoppingCart.classList.add('open');
}});


$(".letter").css({
  position: "relative",
}).animate({
  right: 999,
}).animate({
  right: 0,
  opacity: .5,
}, 1800, "swing").animate({
  opacity: .9,
},1000)



