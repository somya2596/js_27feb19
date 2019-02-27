
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
    "description": "reading"
}]

function TODO() {

    var id1 = document.getElementById("calendar").value;
    var id2 = document.getElementById("descript").value;
    
    array.push({ "time": id1, "description": id2 })
    createTable();
    
    
}
    function createTable() { 
    let previousTable = document.getElementById('dynamicTable');
    if (!!previousTable) {
        previousTable.remove();
    }
    var table = document.createElement('table');
    table.setAttribute('id', 'dynamicTable');
    var header = Object.keys(array[0]);
    var tr = document.createElement('tr');
    for (var index = 0; index < header.length; index++) {
        var th = document.createElement('th');
        th.innerHTML = header[index];
        th.setAttribute('class', 'tableClass1');
        th.setAttribute('id', header[index])
        tr.appendChild(th);
    }
       
    table.appendChild(tr);
    

    for (var index = 0; index < array.length; index++) {
        var tr = document.createElement('tr');
        for (var count = 0; count < header.length; count++) {
            var td = document.createElement('td');
            td.innerHTML = array[index][header[count]];
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
    addEventsToColumns();
}

function addEventsToColumns() {
    var header = Object.keys(array[0]);
    for (var index = 0; index < header.length; index++) {
        document.getElementById(header[index]).addEventListener('click', function (event) {
           console.log(event);
            sortTable(event.target.innerText)
        })
    }
}

let flag = true;
function sortTable(param) {
    arr_of_obj.sort(compare);
    function compare(id1, id2) {
        if (id1[param] > id2[param] && flag)
            return 1;
        else
            return -1;
    }
    flag = !flag;
    createTable();
}
