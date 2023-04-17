function wikiAPI() {
    //CONFIGURE HTML PAGE
    
    //DEFINE VARIABLES
    var searchTerm = document.getElementById("searchTerm").value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" +searchTerm;

    //OPEN THE API CALL
    connect.open("GET", url);
    
    //DEFINE THE ACTIONS
    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        var pages = wikiObject.query.pages;
        for (var i in pages) {
            var newLink = document.createElement("a");
            newLink.setAttribute("class", "h4");
            newLink.setAttribute("href", "https://en.wikipedia.org/?curid=" + pages[i].pageid);
            document.getElementById("wiki").appendChild(newLink);
            document.getElementById("wiki").appendChild(document.createElement("br"));
            newLink.innerText = pages[i].title;
        };
    }
    //SEND API REQUEST
    connect.send();
    }