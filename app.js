//VARIAABLES 

const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
let peopleAmount = document.querySelector("#peopleAmount");
let calcTotal = document.querySelector("#calcTotal");
let total = document.querySelector("#total");
let count = 0;


// count bill final total
let getTotal = () => {
  let tipAmount = tip.value / 100;
  let billAmount = bill.value;
  if (tipAmount !== "" && billAmount !== "") {
    let getTotalBill = (billAmount * tipAmount) / count;
    total.innerHTML = `${getTotalBill} $`;
  }
};


// button + for increament value of people count
const handleIncrement = () => {
  count++;
  getTotal();

  peopleAmount.innerHTML = count;
};


// button + for decremnt value of people count
const handleDecrement = () => {
  if (count >= 1) {
    count--;
    getTotal();
  }

  peopleAmount.innerHTML = count;
};


// the event btn for clicking buttons by using eventListener
calcTotal.addEventListener("click", getTotal);
increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
