
var Table = document.getElementsByClassName('tableCF');
for (i = 0; i < Table.length;i++){
	Table[i].onclick = function(event){
		document.getElementsByClassName('TBNum')[0].innerText = "Bàn số " + event.target.id + ":";
		document.getElementsByClassName('menu')[0].style.display = "block";
	}
}