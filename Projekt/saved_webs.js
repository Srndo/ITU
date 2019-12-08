// počká na načítanie dokumentu
document.addEventListener('DOMContentLoaded', (event) => {console.log('DOM fully loaded');}, false);
// priradí k elementom funkciu
document.getElementById('option1').addEventListener('click', set_active, false);
document.getElementById('option3').addEventListener('click', set_active, false);
document.getElementById('option2').addEventListener('click', set_active, false);

	// funkcia pre vizualne "aktivovanie po kliknuti" presetov
	function set_active() {
		// získa stalačený pre set
		let activate = document.getElementById(event.target.id).parentElement;
		// získa práve aktívny pre set
		let remove = document.getElementsByClassName("active");
		// deactivácia aktivovaného presetu
		remove[0].classList.remove("active");
		// aktivácia stlačeného presetu
		activate.classList.add("active");
	};