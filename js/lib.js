// dynaically shrinks text to fit inside the parent element
function shrinkText(textDiv, parentDiv) {
	var currentFontSize = parseInt($(textDiv).css("font-size"));
	
	while ($(textDiv).width() > $(parentDiv).width()) {
		$(textDiv).css("font-size", --currentFontSize);
	}
}