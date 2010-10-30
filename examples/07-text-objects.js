function loadSlides(load_slides, prefix) { 
	//load slides offscreen, wait for images and then initialize
	if (load_slides) {
		$("#slides").load("/slides", false, function(){
			$("#slides img").batchImageLoad({
				loadingCompleteCallback: initializePresentation(prefix)
			})
		})
	} else {
	$("#slides img").batchImageLoad({
			loadingCompleteCallback: initializePresentation(prefix)
		})
	}
}
