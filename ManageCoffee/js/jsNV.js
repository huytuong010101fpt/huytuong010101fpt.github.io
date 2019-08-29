function CancelOrder(){

	document.getElementsByClassName('menu')[0].style.display = "none";
	var Parent = document.getElementById("order");
	while(Parent.hasChildNodes())
	{
		Parent.removeChild(Parent.firstChild);
	}
}
function checkRows(){
	var rows = document.getElementById("order").getElementsByTagName("tr").length;
	if (rows == 0){
		document.getElementsByClassName("btnXong")[0].style.display = "none"
	} else {
		document.getElementsByClassName("btnXong")[0].style.display = "";

	}
}

function DelRow(btn){
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
	checkRows();
}
var Menu = document.getElementsByClassName('thucUong');
for (i = 0;i < Menu.length;i++){
	Menu[i].onclick = function(event){
			var Name = event.target.innerText;
			var a = document.getElementsByTagName("TD");
			var b = document.getElementsByTagName("input");
			
			for (var j = 0;j < a.length;j+=3){
				if (a[j].innerText == Name){
					b[j/3].value = Number(b[j/3].value) + 1;
					return 0; 
				}
			}

			var MyTable = document.getElementById("order"); 

	            // insert new row. 
	            alert(1);
	            var NewRow = MyTable.insertRow(0); 
	            NewRow.insertCell(0).innerHTML = '<h3 onclick="Down(this)">' + Name + '</h3>'; 
	            NewRow.insertCell(1).innerHTML = '<input type="number" value="1" step="1" min="1">'; 
	            NewRow.insertCell(2).innerHTML = '<a onclick="DelRow(this)">Xóa</a>'; 
	            checkRows();
            

        }
    }
    function Down(event){
    	var i = event.parentNode.parentNode.rowIndex;
    	var Num = document.getElementsByTagName("INPUT");
    	Num[i].value = Number(Num[i].value) - 1; 
    	if (Num[i].value == "0"){
    		document.getElementById("order").deleteRow(i);
    	}
    	checkRows();
    }

    var Table = document.getElementsByClassName('tableCF');
    for (i = 0; i < Table.length;i++){
    	Table[i].onclick = function(event){
    		document.getElementsByClassName('TBNum')[0].innerText = "Bàn số " + event.target.id + ":";
    		document.getElementsByClassName('menu')[0].style.display = "block";
    		checkRows();
    	}
    }
