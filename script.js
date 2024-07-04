const zestawInput = document.getElementById('zestaw');
const foodInput = document.getElementById('jedz');
const drinkInput = document.getElementById('picie');
const calculateButton = document.getElementById('calculate');
const discountCheckbox = document.getElementById('discount');
const totalElement = document.getElementById('total');

calculateButton.addEventListener('click', calculateTotal);

function calculateTotal(event) {
  event.preventDefault();
  const zestawPrice = 6000; // zestaw cost 6000
  const foodPrice = 3000; // food cost 3000
  const drinkPrice = 3000; // drink cost 3000
  const zestawQuantity = parseInt(zestawInput.value) || 0;
  const drinkQuantity = parseInt(drinkInput.value) || 0;
  const foodQuantity = parseInt(foodInput.value) || 0;
  let total = (zestawQuantity * zestawPrice) + (foodQuantity * foodPrice) + (drinkQuantity * drinkPrice);
  
  if (discountCheckbox.checked) {
    total *= 0.5; // apply 50% discount
  }
  
  totalElement.textContent = `Total: $${total.toLocaleString()}`;
}