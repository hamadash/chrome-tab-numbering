chrome.tabs.query({}, tabs => {
  tabs.forEach((tab, i) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (index) => {
        const tabNo = index + 1
        const originalTitle = document.title;
        document.title = `[${tabNo}]${originalTitle}`;

        setTimeout(() => {
          document.title = originalTitle;
        }, 500);
      },
      args: [i]
    });
  });
});
