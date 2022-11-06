
		function expand(that){
			document.querySelector("#view").src = that.src;
			deleteChildren("#refs");

			var refs = that.dataset.refs;
			
			if(!refs) return;
			
			refs = refs.split(",");

			if(refs.length > 0){
				for (var i = 0; i < refs.length; i++){
					var refi 	= document.querySelector(refs[i]);
					var img 	= document.createElement("img");
					
					img.id 		= refi.id;
					img.width 	= refi.width;
					img.loading = refi.loading;
					img.src 	= refi.src;
					img.title 	= refi.title;
					// img.onmouseover 	= refi.onmouseover;
					img.dataset.refs 	= refi.dataset.refs;
					img.dataset.nrefs 	= refi.dataset.nrefs;
					img.dataset.brefs 	= refi.dataset.brefs;
					img.dataset.toggle 	= refi.dataset.toggle;
					img.style.marginLeft  = (i + 1) * parseInt(img.width);

					document.querySelector("#refs").appendChild(img);
				}
			}
			else{
				deleteChildren("#refs");
			}
		}
		function deleteChildren(tag) {
			var e = document.querySelector(tag);

			var child = e.lastElementChild; 
			while (child) {
			    e.removeChild(child);
			    child = e.lastElementChild;
			}
		}
		// function highlight(that){
		// 	if(that.dataset.ref){
		// 		var ref = document.querySelector("#c"+that.dataset.ref);
		// 		document.querySelector("#view").src = ref.src;
		// 		document.querySelector("#ref").src = that.src;
		// 	}
		// }
	