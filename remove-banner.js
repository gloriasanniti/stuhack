window.addEventListener('load', function(){
	var banner = document.querySelectorAll('._95f5f1767857')[0]
	banner.remove()
	
	if (window.innerWidth <= 990){
		var pages = document.getElementById('page-container').childNodes;
		if(pages != null){
			for(i=0; i<pages.length; i++) {
				if(pages[i].id == ''){
					pages[i].parentNode.removeChild(pages[i]);
				}
			}
		}
	}
	
});
