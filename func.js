/**
 * Register a callback function with the commands api, which will be called when
 * one of our registered commands is detected.
 */

chrome.commands.onCommand.addListener(function(command) {
	 if (command == "copy") {
    // add the selected contents ot the clipboard stack
  
  });
});