let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});
function changeQuantity(key, newQuantity) {
  newQuantity = Math.max(0, newQuantity);

  listCards[key].quantity = newQuantity;
  reloadCard();
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('decrement')) {
    const key = target.getAttribute('data-key');
    changeQuantity(key, listCards[key].quantity - 1);
  }
  if (target.classList.contains('increment')) {
    const key = target.getAttribute('data-key');
    changeQuantity(key, listCards[key].quantity + 1);
  }
});

let products = [
  {
    id: 1,
    name: 'MASARAP',
    image: '1.JPG',
    price: 189
  },
  {
    id: 2,
    name: 'MASARAP DIN TO',
    image: '2.JPG',
    price: 149
  },
  {
    id: 3,
    name: 'ETO NAPAKASARAP',
    image: '4.JPG',
    price: 199
  },
];
let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  })
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    //KOPYA SA PAGPINDOT NG ITEM
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice += value.price * value.quantity;
    count += value.quantity;

    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
          <div><img src="image/${value.image}"/></div>
          <div>${value.name}</div>
          <div>${(value.price * value.quantity).toLocaleString()}</div>
          <div>
              <button class="decrement" data-key="${key}">-</button>
              <div class="count">${value.quantity}</div>
              <button class="increment" data-key="${key}">+</button>
          </div>`;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function openCheckout() {
  var cartItems = document.querySelectorAll('.listCard li');

  if (cartItems.length > 0) {
      alert("Checkout Successful");
      var listCard = document.querySelector('.listCard');
      listCard.innerHTML = '';
      var quantityDisplay = document.querySelector('.quantity');
      quantityDisplay.textContent = '0';
      var totalPriceDisplay = document.querySelector('.total');
      totalPriceDisplay.textContent = '0';
  } else {
      alert("Your cart is empty. Add items before checking out.");
  }
}
function closeCheckout() {
}



