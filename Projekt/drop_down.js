/**
*	Autor: Michal Pospíšil
* Projekt: ITU - Oflline prehliadanie súborov
* Súbor drop_down.js
**/
// počká na načítanie dokumentu
//document.addEventListener('DOMContentLoaded', (event) => {console.log('DOM fully loaded');}, false);

// Inicializácia tagov
chrome.storage.local.set({tags: {
	'laptop' : null,
	'phone' : null,
}});
$('.chips').chips();
chrome.storage.local.get(['tags'], function(result) {
	$('#chips-tags').chips({
		placeholder: "Tags",
		secondaryPlaceholder: "add more tags...",
		autocompleteOptions: {
			data: result.tags,
			limit: Infinity,
			minLength: 1
		}
	});
});

// Nastavenie masky z URL
function setLinkMask(url) {
	var urlProtoless = url.split("://")[1];
	$('#mask-textarea')[0].value = urlProtoless;
}

// Inicializácia názvu uloženej stránky title elementom
function setSaveName(title) {
	$('#name')[0].value = title;
	$('#name')[0].focus();
}

// Dopyt na aktuálne nastavenú kartu
chrome.tabs.query({active : true, currentWindow: true}, function(tab) {
	setSaveName(tab[0]['title']);
	setLinkMask(tab[0]['url']);
});

// priadí funkciu elementu s ID="save" po kliknutí na daný element sa vyskočí pop-up okno s hodnoutou "Add"
/*
document.getElementById('save').addEventListener('click', save_function, false);
	function save_function() {
	  alert("Add");
};

document.getElementById('save_depth').addEventListener('click', save_depth_function, false);
	function save_depth_function() {
	  alert("save_depth");
};
document.getElementById('save_no_pictures').addEventListener('click', save_no_pictures_function, false);
	function save_no_pictures_function() {
	  alert("save");
};

document.getElementById('save_print').addEventListener('click', save_print_function, false);
	function save_print_function() {
	  alert("save_depth");
};

document.getElementById('show_saved').addEventListener('click', show_saved_function, false);
	function show_saved_function() {
	  window.open("./saved_webs.html");
};
*/
