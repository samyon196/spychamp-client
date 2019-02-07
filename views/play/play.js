function setPlayerSpy() {
    var roleBox = document.getElementById("role");
    roleBox.innerHTML="You are the SPY!";
}
function setPlayerRole(location) {
    var roleBox = document.getElementById("role");
    roleBox.innerHTML="You are <b>NOT</b> the spy!<br />The location is: " + location;
}
function setTime(min, sec) {
    var clock = document.getElementById("clock");
    clock.innerHTML=min + ":" + sec;
}
function buildPlayersTable(name_arr, idx) {
    //var idx = Math.floor(Math.random() * name_arr.length); 
    if(name_arr.length % 2 ==  1) {
        name_arr.push(" -- ");
    }
    var table = document.getElementById("people");
    for(i = 0; i < name_arr.length-1; i+=2) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        cell1.onclick = function() {
            if(this.style.textDecoration != "line-through") {
                this.style.textDecoration="line-through";
                this.style.opacity="0.4";
            }
            else {
                this.style.textDecoration="none";
                this.style.opacity="1";
            }
        };
        var cell2 = document.createElement('td');
        cell2.onclick = function() {
            if(this.style.textDecoration != "line-through") {
                this.style.textDecoration="line-through";
                this.style.opacity="0.4";
            }
            else {
                this.style.textDecoration="none";
                this.style.opacity="1";
            }
        };
        var fst = document.createElement('span');
        fst.setAttribute('id', 'first');
        fst.innerHTML = ' 1st';

        cell1.appendChild(document.createTextNode(name_arr[i]));
        cell2.appendChild(document.createTextNode(name_arr[i+1]));
        if(idx === i) 
            cell1.appendChild(fst);
        if(idx === (i+1))
            cell2.appendChild(fst);
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
}

function buildLocationsTable(place_arr) {
    if(place_arr.length % 3 ==  1) {
        place_arr.push(" -- ");
        place_arr.push(" -- ");
    }
    else if(place_arr.length % 3 == 2) {
        place_arr.push(" -- ");
    }

    var table = document.getElementById("places");
    for(i = 0; i < place_arr.length-1; i+=3) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        cell1.onclick = function() {
            if(this.style.textDecoration != "line-through") {
                this.style.textDecoration="line-through";
                this.style.opacity="0.4";
            }
            else {
                this.style.textDecoration="none";
                this.style.opacity="1";
            }
        };
        var cell2 = document.createElement('td');
        cell2.onclick = function() {
            if(this.style.textDecoration != "line-through") {
                this.style.textDecoration="line-through";
                this.style.opacity="0.4";
            }
            else {
                this.style.textDecoration="none";
                this.style.opacity="1";
            }
        };
        var cell3 = document.createElement('td');
        cell3.onclick = function() {
            if(this.style.textDecoration != "line-through") {
                this.style.textDecoration="line-through";
                this.style.opacity="0.4";
            }
            else {
                this.style.textDecoration="none";
                this.style.opacity="1";
            }
        };
        cell1.appendChild(document.createTextNode(place_arr[i]));
        cell2.appendChild(document.createTextNode(place_arr[i+1]));
        cell3.appendChild(document.createTextNode(place_arr[i+2]));
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    }
}