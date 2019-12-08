// author: Marek Stastny

if(  navigator.onLine) { 
	hide_elem("offlinePage");
	show_elem("search");
}else{
	hide_elem("search");
	show_elem("offlinePage");
}

function swap(name) {
  var x = document.getElementById(name);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hide_elem(name){
  var x = document.getElementById(name);
    x.style.display = "none";

}

function show_elem(name){
  var x = document.getElementById(name);
    x.style.display = "block";
}
