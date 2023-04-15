function howdy(yourFirstName) {
    alert("Howdy" + " " + yourFirstName + "!");
}

function conditional() {
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}

function evalNumber() {
    var inputValue = prompt("Enter any whole five-digit number without commas.")
    if (inputValue.length != 5) {
        alert("Please enter a five-digit whole number.")
    } else if (inputValue.includes(".")) {
        alert("Please enter a whole number.")
    } else if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}