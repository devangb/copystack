/**
 * Register a callback function with the commands api, which will be called when
 * one of our registered commands is detected.
 */

chrome.commands.onCommand.addListener(function(command) {
	 if (command == "paste_dialog") {
    // dialog of the clipboard

  });
});

function displayclipboard(){

//Clipboard display popup on extension click

}

function displayitem(){

// Function to display each item in the clipboard

}

function getforpaste(){

// Function to get item for paste execution

}

function copyitem(){

// Copy item to extension storage

}

function cutitem(){

// Cut item to extension storage

}



function getclipboarddata(){

	var paste_dia= document.createElement('textarea');
	document.body.appendChild(paste_dia);
	paste_dia.focus();
	document.execCommand('paste');

}

function renderStatus(statusText) {
  document.getElementById('clipboard').textContent = statusText;
}



