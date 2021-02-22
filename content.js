document.addEventListener('click', (event) => {
	const el = event.target;

	//if el.tagName is 'A' the clicked element is an anchor
	//if el.closest('a') is non-null value then clicked element is child of anchor or anchor itself

	const ancestorAnchor = el.closest('a');

	if (el.tagName == 'A' || ancestorAnchor) {
		if (event.altKey && event.ctrlKey) {
			event.preventDefault();
			event.stopPropagation();
			chrome.runtime.sendMessage(el.href || ancestorAnchor.href);
		}
	}
});
