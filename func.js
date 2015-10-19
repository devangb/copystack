/**
 * Register a callback function with the commands api, which will be called when
 * one of our registered commands is detected.
 */

chrome.commands.onCommand.addListener(function(command) {
	 if (command == "paste_dialog") {
    // dialog of the clipboard
  
  });
});

function getclipboarddata(){

	var paste_dia= document.createElement('textarea');
	document.body.appendChild(paste_dia);
	paste_dia.focus();
	document.execCommand('paste');

}

