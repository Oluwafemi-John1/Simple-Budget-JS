// A global variable to set money available
var money = 10000
showMoney.innerHTML = "Available Money: " + money

// This displays the current date
var daty = new Date().toLocaleDateString()
showDate.innerHTML = "Today's Date: "  + daty
showDateModal.innerHTML = "Today's Date: "  + daty

// This ensures the inputs only show after clicking a button and that button disappears after
function showInputs() {
    mainInputs.style.display = "block"
    withdrawMoney.style.display = "none"
}

// This handles form submission
function addBudget() {
    if (item.value === "" || price.value === "") {
        emptyField.style.display = "block"
    } else {

    }
}