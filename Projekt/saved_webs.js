/*  Autor: Šimon Šesták (xsesta06) */
document.addEventListener('DOMContentLoaded', (event) => {console.log('DOM fully loaded');}, false);
// priradí k elementom funkciu
document.getElementById('option1').addEventListener('click', set_active, false);
document.getElementById('option3').addEventListener('click', set_active, false);
document.getElementById('option2').addEventListener('click', set_active, false);
document.getElementById('favorite_1').addEventListener('click', set_favorite, false);
document.getElementById('favorite_2').addEventListener('click', set_favorite, false);
document.getElementById('favorite_3').addEventListener('click', set_favorite, false);
//document.getElementById('favorite_4').addEventListener('click', set_favorite, false);

	// funkcia pre vizualne "aktivovanie po kliknuti" presetov
	function set_active() {
		// získa stalačený preset
		let activate = document.getElementById(event.target.id).parentElement;
		// získa práve aktívny preset
		let remove = document.getElementsByClassName("active");
		// deactivácia aktivovaného presetu
		remove[0].classList.remove("active");
		// aktivácia stlačeného presetu
		activate.classList.add("active");
	};

	function set_favorite() {
		
		let get = document.getElementById(event.target.id);
		let set;
		switch (get.id)
		{
			case "favorite_1":
				set = document.getElementById("star_1");
				if(set.hasAttribute("checked"))
					set.removeAttribute("checked");
				else
					set.setAttribute("checked", "");
				break;

			case 'favorite_2':
				set = document.getElementById("star_2");
				if(set.hasAttribute("checked"))
					set.removeAttribute("checked");
				else
					set.setAttribute("checked", "");
				break;

			case 'favorite_3':
				set = document.getElementById("star_3");
				if(set.hasAttribute("checked"))
					set.removeAttribute("checked");
				else
					set.setAttribute("checked", "");
				break;

			case 'favorite_4':
				set = document.getElementById("star_4");
				if(set.hasAttribute("checked"))
					set.removeAttribute("checked");
				else
					set.setAttribute("checked", "");
				break;
		}
	}