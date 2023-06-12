//VARIAABLES 

// Convert let to Const for static variable
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const peopleAmount = document.querySelector("#peopleAmount");
const calcTotal = document.querySelector("#calcTotal");
const total = document.querySelector("#total");
let count = 0;


// count bill final total
const getTotal = () => {
  // Convert String to Number
  const tipAmount = parseFloat(tip.value) / 100;
  const billAmount = parseFloat(bill.value);

  // Guard clause for invalid inputs
  if (isNaN(tipAmount) || isNaN(billAmount) || count <= 0) {
    total.innerHTML = "Please enter valid inputs";
    return;
  }

  const getTotalBill = (billAmount * tipAmount) / count;

  // add toFixed
  total.innerHTML = `${getTotalBill.toFixed(2)} $`;
};

// Button Function to incre and decre people count
const handlePeopleCount = (action) => {
  if (action === 'increment') {
    count++;
  } else if (action === 'decrement' && count > 1) {
    count--;
  }

  peopleAmount.innerHTML = count;
  getTotal();
};

// Event listeners for button clicks
increase.addEventListener("click", () => handlePeopleCount('increment'));
decrease.addEventListener("click", () => handlePeopleCount('decrement'));
calcTotal.addEventListener("click", getTotal);

