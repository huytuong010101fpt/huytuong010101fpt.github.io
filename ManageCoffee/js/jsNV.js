
function DelRow(btn){
	 var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
var Menu = document.getElementsByClassName('thucUong');
for (i = 0;i < Menu.length;i++){
	Menu[i].onclick = function(event){
		var Name = event.target.innerText;
		a = document.getElementsByTagName("TD");
		b = document.getElementsByTagName("input");
		for (j = 0;j < a.length;j+=3){
			if (a[j].innerText == Name){
				b[j/3].value = Number(b[j/3].value) + 1;
				return 0; 
			}
		}

		var MyTable = document.getElementById("order"); 
            
            // insert new row. 
            var NewRow = MyTable.insertRow(0); 
            NewRow.insertCell(0).innerHTML = Name; 
            NewRow.insertCell(1).innerHTML = '<input type="number" value="1" step="1">'; 
            NewRow.insertCell(2).innerHTML = '<a onclick="DelRow(this)">Xóa</a>'; 
            var a = document.getElementsByTagName("TD");
            console.log(a);
           
	}
}


var Table = document.getElementsByClassName('tableCF');
for (i = 0; i < Table.length;i++){
	Table[i].onclick = function(event){
		document.getElementsByClassName('TBNum')[0].innerText = "Bàn số " + event.target.id + ":";
		document.getElementsByClassName('menu')[0].style.display = "block";
	}
}
