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