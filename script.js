"use strict";

const expenseType = document.getElementById("expense-type");
const date = document.getElementById("date");
const dollarAmt = document.getElementById("dollar-amount");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const expenseTable = document.getElementById("expense-table");

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
