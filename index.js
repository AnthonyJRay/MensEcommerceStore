const shoppingCart = document.querySelector('.shoppingCart');
const cartButton = document.querySelector('.cart-link');

cartButton.addEventListener('click', e => {
  if (shoppingCart.classList.contains('open')) {
  console.log(event.target);
  shoppingCart.classList.remove('open');
} else {
  shoppingCart.classList.add('open');
}});

const contentArea = document.querySelector('#apparel');

function getBoundingClientRect() {
  const rect = contentArea.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}

addClass = () => {
  const btn = document.querySelector('.button');
  btn.
  console.log(btn);
}

addClass()
// const contentTop = getBoundingClientRect(contentArea).top;
// const pageTop = document.body.scrollTop;
// const boxDiff = 49.5;

// document.onscroll = scrollView();

// function scrollView () {
//   const contentTop = getBoundingClientRect(contentArea).top;
//   const pageTop = document.body.scrollTop;
//   if (pageTop + contentTop - 599 === 49.5) {
//       console.log('Box is centered');
//   }
// }
// scrollView()
// scrollView(contentTop, pageTop);
const contentTop = getBoundingClientRect(contentArea).top;
const pageTop = document.body.scrollTop;
const letter = document.querySelector('#apparel');

$(document.body).scroll( function () {
  if (pageTop + contentTop - 599 === 49.5) {
      console.log('Box is centered');
      letter.classList.add('letter');
    } else {
      letter.classList.remove('letter');
    }
})





