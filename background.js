chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "Suggestions command",
        title: "Make Suggestions Visible",
        contexts: ["all"],
    });
});

chrome.contextMenus.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        file: "script.js"
    });
});