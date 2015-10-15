'use strict';
(function() {
	
	function isValidFileExtension() {
		if(location.pathname.split('.').pop() == "html")
			return true;
	   return false;
	}

	function addButton() {
	   var btnGroup = document.querySelector('.btn-group');

		var htmlPreviewButton = document.createElement('a');
		htmlPreviewButton.textContent = 'HTML Preview';
		htmlPreviewButton.className = 'btn btn-sm';
		htmlPreviewButton.target = '_blank';
		htmlPreviewButton.href = 'http://htmlpreview.github.io/?' + window.location.href;
		btnGroup.insertBefore(htmlPreviewButton, btnGroup.children[0]);
	}

	function begin() {
		if (isValidFileExtension())
			 addButton();
	}
	
	begin();
	
})();