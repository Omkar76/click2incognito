chrome.runtime.onMessage.addListener((url) => {
    chrome.windows.create({ url, incognito: true })
})
