// This displays the current date
var daty = new Date().toLocaleDateString()
showDate.innerHTML = "Today's Date: "  + daty

// This handles form submission
function addBudget() {
    if (item.value === "" || price.value === "") {
        emptyField.style.display = "block"
    } else {
        
    }
}