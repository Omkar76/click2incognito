chrome.runtime.onInstalled.addListener(function() {
	// chrome.storage.sync.set({ color: '#3aa757' }, function() {
	// 	console.log('The color is green.');
	// });
	
	
	// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	// 	chrome.declarativeContent.onPageChanged.addRules([
	// 		{
	// 			conditions: [
	// 				new chrome.declarativeContent.PageStateMatcher({
	// 					pageUrl: { : '' }
	// 				})
	// 			],
	// 			actions: [ new chrome.declarativeContent.ShowPageAction() ]
	// 		}
	// 	]);
	// });

	chrome.tabs.executeScript(
		{
			file : "content.js",
			runAt: "document_start"
		}
	);

	chrome.runtime.onMessage.addListener((msg)=>{
		chrome.windows.create({url:msg.url, incognito: true})
	});
});
