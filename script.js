"use strict";

const expenseType = document.getElementById("expense-type");
const date = document.getElementById("date");
const dollarAmt = document.getElementById("dollar-amount");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const expenseTable = document.getElementById("expense-table");

const resetInputs = function () {
  expenseType.innerTe.value = "";
  date.innerHTML.value = innerHTML.value = "";
  dollarAmt.innerText.value = innerHTML.value = "";

  expenseTable.style.display = "none";
};

resetBtn.addEventListener("click", function () {
  resetInputs();
});
