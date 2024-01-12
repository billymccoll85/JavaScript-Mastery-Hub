// Selectors
const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');

// Parse transactions from local storage or set to an empty array
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Generate random ID using arrow function
const generateID = () => Math.floor(Math.random() * 100000000);

// Add transaction
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = textInput.value.trim();
  const amount = amountInput.value.trim();

  if (!text || !amount) {
    alert('Please add a text and amount');
    return;
  }

  const transactionType = document.querySelector('input[name="transaction_type"]:checked').value;
  const transactionAmount = transactionType === 'expense' ? -Math.abs(+amount) : +amount;

  const transaction = { id: generateID(), text, amount: transactionAmount };
  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateValues();
  updateLocalStorage();

  textInput.value = '';
  amountInput.value = '';
});

// Add transactions to DOM list
const addTransactionDOM = (transaction) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
};

// Update the balance, income, and expense
const updateValues = () => {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts.filter((item) => item > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
  const expense = amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1 .toFixed(2);

  balance.innerText = `$${total}`;
  moneyPlus.innerText = `$${income}`;
  moneyMinus.innerText = `$${expense}`;
};

// Remove transaction by ID
window.removeTransaction = (id) => {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  init();
};

// Update local storage transactions
const updateLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

// Init app
const init = () => {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
};

init();
