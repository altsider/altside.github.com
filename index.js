function expand(that){
	var id_ = that.id.replace("c", "");
	var src = `https://images.ygoprodeck.com/images/cards_cropped/${id_}.jpg`;

	var view = document.querySelector("#view");
	view.src = src;

	var data = document.querySelector("#data");
	var card = document.querySelector(`#c${id_}`);
	var types = card.getAttribute("data-types");
	for(let i = 0; i < types.length; i++)
		data.className += types[i];
	for(let i = 1; i < 6; i++)
		data.querySelector(`#i${i}`).innerHTML = document.querySelector(`#i${id_}-${i}`).innerHTML;
}
function hide(){
	document.querySelector("#view").src = "";

	var data = document.querySelector("#data");
	for(let i = 1; i < 6; i++)
		data.querySelector(`#i${i}`).innerHTML = "";

	data.className = "";
}
function deleteChildren(tag) {
	var e = document.querySelector(tag);

	var child = e.lastElementChild; 

	while (child) {
	    e.removeChild(child);
	    child = e.lastElementChild;
	}
}
