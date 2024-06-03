"use strict";

const expenseType = document.getElementById("expense-type");
const date = document.getElementById("date");
const dollarAmt = document.getElementById("dollar-amount");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const expenseTable = document.getElementById("expense-table");
let expense = [];
let expenseID = 0;

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
    expense = {
      id: expenseID,
      type: expenseType.value.trim(),
      date: date.value,
      amount: dollarAmt.value.
    };
  }
};

addBtn.addEventListener("click", function () {
  addExpense();
});
