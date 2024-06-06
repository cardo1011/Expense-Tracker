"use strict";

//add a button to each row after it renders to remove the expense from the array and the table

const expenseType = document.getElementById("expense-type");
const date = document.getElementById("date");
const dollarAmt = document.getElementById("dollar-amount");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const expenseTable = document.getElementById("expense-table");
let expensesArray = [];
let ID = 0;

/*starting without displaying the table*/
expenseTable.style.display = "none";

/*clears input fields when "reset" button clicked*/
const resetInputs = function () {
  expenseType.value = "";
  date.value = "";
  dollarAmt.value = "";
};

resetBtn.addEventListener("click", function () {
  resetInputs();
});

const addExpense = function () {
  /*making sure all inputs are filled fully, else an alert will appear*/
  if (!expenseType.value || !date.value || !dollarAmt.value) {
    alert("Finish inputting the corresponding information for the expense.");
  }

  if (expenseType.value && date.value && dollarAmt.value) {
    /*creating an object with a unique id*/
    let expense = {
      id: ID++,
      type: expenseType.value.trim(),
      date: date.value,
      amount: dollarAmt.value,
    };

    /*adding the expense object to the expensesArray*/
    expensesArray.push(expense);
  }

  /*rendering the objects to the table*/
  renderRow(expensesArray);
};

addBtn.addEventListener("click", function () {
  addExpense();
});

const renderRow = function (array) {
  /*Selecting the table */
  let myTable = document
    .getElementById("expense-table")
    .getElementsByTagName("tbody")[0];

  /*clearing the table before rendering the elements of the array in the table*/
  myTable.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    /*iterating through the array of objects*/
    let row =
      myTable.insertRow(
        i
      ); /*indicating where the row should be inserted into the table*/

    let expenseTypeCell = row.insertCell(0); /*inserting cell for expenseType*/
    let dateCell = row.insertCell(1); /*inserting cell for date*/
    let amountCell = row.insertCell(2); /*inserting cell for dollarAmt*/
    let btnCell = row.insertCell(3); /*inserting cell for removeBtn*/

    /*declaring what data each cell will display*/
    expenseTypeCell.innerHTML = array[i].type;
    dateCell.innerHTML = array[i].date;
    amountCell.innerHTML = array[i].amount;

    /*creating a remove button for the specific cell*/
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    /*event listener added to the remove-btn*/
    removeBtn.addEventListener("click", function () {
      array.splice(i, 1); /*removes the corresponding row from the array*/

      renderRow(array); /*render array again to update the UI*/
    });

    btnCell.appendChild(removeBtn); /*adding btn to cell*/
  }

  /*making table display if length of array is greater than 0*/
  if (array.length > 0) {
    expenseTable.style.display = "";
  }
};
