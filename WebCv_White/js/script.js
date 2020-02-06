		var nav = document.getElementById('leftNav');
		var bgr = document.getElementById('tmpBackground');
		var main = document.getElementsByTagName('main')[0];
		var topNav = document.getElementsByTagName('nav')[0];
		var topMenu = document.getElementsByClassName("listMenu")[0];
		var childMenu = document.getElementsByClassName("childMenu")[0];
		var paraPts = document.getElementById("paraPts");
		var paraDreamviewer = document.getElementById("paraDreamviewr");
		var paraHtmlCss = document.getElementById("paraHtmlCss");
		function clickMenu(){
			nav.style.right = "0";
			main.style.transform = 'translateX(-350px)';
			topNav.style.transform = 'translateX(-350px)';
			bgr.style.display = "block";
		}
		function hideMenu(){
			nav.style.right = "-350px";
			main.style.transform = 'translateX(0px)';
			topNav.style.transform = 'translateX(0px)';
			bgr.style.display = "none";
		}
		function showHideMenu(){
			if (topMenu.style.display == "block"){
				topMenu.style.display = "none"
			} else {
				topMenu.style.display = "block"
			}
		}
		function showChildMenu(){
			if (childMenu.style.display == "block") childMenu.style.display = "none";
			else childMenu.style.display = "block"
		}
		function showPts(e){
			
			if (paraPts.style.display == ""){
				paraPts.style.display = "block";
				e.className="fas icPlus icMenu fa-minus";
			} else{
				paraPts.style.display = "";
				e.className="fas icPlus icMenu fa-plus";
			} 

		}
		function showHtmlCss(e){
			if (paraHtmlCss.style.display == ""){
				paraHtmlCss.style.display = "block";
				e.className="fas icPlus icMenu fa-minus";
			} else{
				paraHtmlCss.style.display = "";
				e.className="fas icPlus icMenu fa-plus";
			} 
		}
		function showDreamviewer(e){
			if (paraDreamvewer.style.display == ""){
				paraDreamvewer.style.display = "block";
				e.className="fas icPlus icMenu fa-minus";
			} else{
				paraDreamvewer.style.display = "";
				e.className="fas icPlus icMenu fa-plus";
			} 
		}