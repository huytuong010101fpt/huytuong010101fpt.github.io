
var Table = document.getElementsByClassName('tableCF');
for (i = 0; i < Table.length;i++){
	Table[i].onclick = function(e){
		document.getElementsByClassName('menu')[0].style.display = "block";
	}
}