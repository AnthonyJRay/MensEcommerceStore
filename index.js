const shoppingCart = document.querySelector('.shoppingCart');
const cartButton = document.querySelector('.cart-link');

cartButton.addEventListener('click', e => {
  if (shoppingCart.classList.contains('open')) {
  console.log(event.target);
  shoppingCart.classList.remove('open');
} else {
  shoppingCart.classList.add('open');
}});
