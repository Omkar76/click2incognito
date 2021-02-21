document.addEventListener('click',(event)=>{
    const el = event.target;

    //if event.target.tagName is a the clcked element is an anchor
    //if event.target.closest('a') is non-null value then clicked element is child of 
    
    const ancestorAnchor = el.closest('a');

    if(el.tagName=='A' || ancestorAnchor){
        console.log("Clicked on a link!!", el.tagName,ancestorAnchor)

        if(event.altKey && event.ctrlKey){
            event.preventDefault()
            event.stopPropagation();
            chrome.runtime.sendMessage({url: el.href || ancestorAnchor.href})
        }
    }

})