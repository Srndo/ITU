document.addEventListener('DOMContentLoaded', (event) => {console.log('DOM fully loaded');}, false);

document.getElementById('favorite').addEventListener('click', change_favorite_icon, false);
document.getElementById('favorite_1').addEventListener('click', change_favorite_icon, false);
document.getElementById('favorite_2').addEventListener('click', change_favorite_icon, false);
document.getElementById('favorite_3').addEventListener('click', change_favorite_icon, false);

//need to get element by clicked to changed correct value 
	function change_favorite_icon() {
		let favorite = document.getElementById(event.target.id);
		if(favorite.alt == "Favorite"){
			favorite.src = "./img/icons/favorite.png";
			favorite.alt = "Unfavorite";
		}
		else{
			favorite.src = "./img/icons/un_favorite.png";
			favorite.alt = "Favorite";	
		}
	};


	function generate_div() {
		var html = "";
		var data = "favorite_1";
		html += loadTemplate("row_template", data);
		//Now you have the dynamic html, use wherever you want
		document.getElementById("content").innerHTML = html;
	}

	function loadTemplate(template_id, data) {
		var template = document.getElementById(template_id).innerHTML;
		return eval('`' + template + '`');
	}
