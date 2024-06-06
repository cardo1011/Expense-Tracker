"use strict";

const expenseType = document.getElementById("expense-type");
const date = document.getElementById("date");
const dollarAmt = document.getElementById("dollar-amount");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const expenseTable = document.getElementById("expense-table");
let expensesArray = [];
let ID = 0;

// clears input fields when "reset" button is clicked
const resetInputs = function () {
  expenseType.value = "";
  date.value = "";
  dollarAmt.value = "";

  expenseTable.style.display = "none";
};

resetBtn.addEventListener("click", function () {
  resetInputs();
});

const addExpense = function () {
  if (!expenseType.value || !date.value || !dollarAmt.value) {
    alert("Finish inputting the corresponding information for the expense.");
  }

  if (expenseType.value && date.value && dollarAmt.value) {
    let expense = {
      id: ID++,
      type: expenseType.value.trim(),
      date: date.value,
      amount: dollarAmt.value,
    };

    expensesArray.push(expense);

    console.log(expensesArray);
  }
  renderRow(expensesArray);
};

addBtn.addEventListener("click", function () {
  addExpense();
});

const renderRow = function (array) {
  let myTable = document
    .getElementById("expense-table")
    .getElementsByTagName("tbody")[0];

  myTable.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let row = myTable.insertRow(i);
    let expenseTypeCell = row.insertCell(0);
    let dateCell = row.insertCell(1);
    let amountCell = row.insertCell(2);

    expenseTypeCell.innerHTML = array[i].type;
    dateCell.innerHTML = array[i].date;
    amountCell.innerHTML = array[i].amount;
  }

  if (array.length > 0) {
    expenseTable.style.display = "";
  }
};
