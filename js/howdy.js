function howdy(yourFirstName) {
    alert("Howdy," + " " + yourFirstName + "!");
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

function changeTitle() {
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement);
    selectedElement.innerText = "DIGS";
}

function scopeValues() {
    if (0 == 0) {
        var x = 0;
        var y = 1;
    } else {
        alert("Why is 0 not 0?")
    };
    
    const z = x;
    alert("Use Inspect to see the console and inspect the code.")
    console.log("Check the sources to see this code and study the scope of the values.");
    console.log("Value of x as originally declared: " + x);
    console.log("Value of y as orignally declared: " + y);
    var x = x + 2;
    console.log("Value of x + 1: " + x);
    console.log("Value of z: " + z + " does not change.");
}

/* 
var z = new Object();
z.foo = 42;
z.bar = "newValue";
console.log(z);
*/

var mapSetting = {
    id: "mapID",
    zoomOffset: -1,
    //center: latLng
};

var presidents = ["Washington", "Jefferson", "Adams"]
for (let i = 0; i < presidents.length; i++) {
    console.log(presidents[i]);
};

presidents[45] = "Biden"

/* function functionSample(a, b) {
    let remainder = a%b;
    return remainder;
    console.log("hello");
}

console.log(functionSample(12,11));
*/

function functionSample(number) {
    if (number===0) {
        console.log("Number is even.")
    } else if (number===1) {
        console.log("Number is odd.")
    } else {
        number = number -2;
        return functionSample(number); 
    }
}

console.log(functionSample(36));

function mapLoad() {
    //Define the coordinate
    var latLng = [41.789649, -87.599702];

    //Set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFybGV5d2lsbGlmb3JkIiwiYSI6ImNsZ2lxYXRmdDB4dmszbG1vOGtxdjNxaTkifQ.zLWjoB2e8hmX0Sufp4rReQ';

    //Define two tile layer variables
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr}
        );

    //Define map object
    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    //Add tile layers to base layer object
    //Add to the map
    //Add a marker with pop-up
    var baseLayers = {
        //"Grayscale": grayscale,
        "Streets": streets
    };

        L.control.layers(baseLayers).addTo(map);

    L.marker(latLng).addTo(map)
        .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    //Add a click event 
    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}

function parentFunction() {
    let a = 1;
    function childFunction() {
        var b = a + 2;
        return b;
    }
    return childFunction();
}

/* function addElements() {
    var valueArray = ['first','second','third'];
    for (i in valueArray) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv)
        newDiv.innerText = valueArray[i];
    };
} */

/*
function wikiAPI() {
    //CONFIGURE HTML PAGE
    
    //DEFINE VARIABLES
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" +searchTerm;
    
    //OPEN THE API CALL
    connect.open('GET', url);
    
    //DEFINE THE ACTIONS
    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        console.log(wikiObject);
        console.log(wikiObject.query.pages);
        }
    //SEND API REQUEST
    connect.send();
    }
*/

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

/* function currentMinute() {
    var blankDiv = document.createElement("div");
    blankDiv.setAttribute("class", "h3");
    document.getElementById("currentMinute").appendChild(blankDiv);
    var min = new Date.prototype.getMinutes();

} */

function currentMinute() {
    var blankDiv = document.createElement("div");
    blankDiv.setAttribute("class", "h3");
    document.getElementById("currentMinute").appendChild(blankDiv);
    
    var button = document.createElement("button");
    button.innerText = "Get current minute";
    button.addEventListener("click", function() {
      var currentMinute = new Date().getMinutes();
      blankDiv.innerText = "The current minute is: " + currentMinute;
    });
    
    document.getElementById("currentMinute").appendChild(button);
  }

  function disappearEl() {
    var disappear = document.getElementById("disappear");
    disappear.setAttribute("style", "display: none;");
  }