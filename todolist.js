var detail = 0;
function getvalue() {
    if (detail == 0) {
        var div = document.createElement("div");
        var date = document.createElement("input");
        date.type = "date";
        date.value = "time";
        date.id = "calendar";
        var text = document.createElement("input");
        text.type = "text";
        text.id = "descript";
        var removeRowButton = document.createElement("BUTTON");
        removeRowButton.setAttribute("class", "glyphicon glyphicon-remove");
        
        removeRowButton.onclick = function () {
            
            getvalue();
        }
        var selectRowButton = document.createElement("BUTTON")
        selectRowButton.setAttribute("class", "glyphicon glyphicon-ok");
        selectRowButton.onclick = function () {
            TODO();
        }
        div.appendChild(date);
        div.appendChild(text);
        div.appendChild(removeRowButton);
        div.appendChild(selectRowButton);
        document.body.appendChild(div)
        detail++;
    }

}
var array = [{
    "time": "10-10-2010",
    "description": "Hello World"
}]

function TODO() {

    var a = document.getElementById("calendar").value;
    var b = document.getElementById("descript").value;
    
    array.push({ "time": a, "description": b })
    createTable();
    
    
}

var table = document.createElement('table');
    table.setAttribute('id', 'dynamicTable');
    var header = Object.keys(array[0]);
    var tr = document.createElement('tr');
    for (var i = 0; i < header.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = header[i];
        th.setAttribute('class', 'tableClass1');
        th.setAttribute('id', header[i])
        tr.appendChild(th);
    }
    
    
    table.appendChild(tr);

function createTable() { 
    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < header.length; j++) {
            var td = document.createElement('td');
            td.innerHTML = array[i][header[j]];
            td.setAttribute('class', 'tableClass');
            tr.appendChild(td);
        }
        table.appendChild(tr);
        table.setAttribute("border", "2");
        var removeRowButton = document.createElement("BUTTON");
        tr.appendChild(removeRowButton);
        removeRowButton.setAttribute("class", "glyphicon glyphicon-remove");
        
        removeRowButton.onclick = function () {
            
            getvalue();
        }
        
    }
    document.body.appendChild(table);
   }
