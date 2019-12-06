document.addEventListener('DOMContentLoaded', (event) => {console.log('DOM fully loaded');}, false);

document.getElementById('option1').addEventListener('click', set_active, false);
document.getElementById('option3').addEventListener('click', set_active, false);
document.getElementById('option2').addEventListener('click', set_active, false);

//need to get element by clicked to changed correct value 
	function set_active() {

		let activate = document.getElementById(event.target.id).parentElement;
		let remove = document.getElementsByClassName("active");
		remove[0].classList.remove("active");
		activate.classList.add("active");
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
