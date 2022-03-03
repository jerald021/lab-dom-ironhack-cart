// ITERATION 1
function updateSubtotal(products) {
  let subtotalValue = 0;
  for (let i = 0; i < products.length; i++) {
    const price = products[i].querySelector('.price span');
    const quantity = products[i].querySelector('.quantity input');
    const subtotal = products[i].querySelector('.subtotal span');

    const priceValue = price.textContent;
    const quantityValue = quantity.value;
    const result = priceValue * quantityValue;
    subtotalValue += (subtotal.textContent = result);
    // const totalValue = products[i].querySelector('#total-value span').subtotalValue;
  }
  console.log(subtotalValue);
  // const total = products[0].querySelector('#total-value span');
  //  console.log(total);
  // const totalValue = total.innerHTML(subtotalValue);
  // console.log(total);
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  updateSubtotal(products);
  // ITERATION 3
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});