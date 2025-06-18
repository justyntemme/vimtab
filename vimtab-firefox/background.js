// Function to switch tabs
function switchTab(direction) {
  browser.tabs.query({ currentWindow: true }, (tabs) => {
    const activeTab = tabs.find(tab => tab.active);
    const activeIndex = activeTab.index;
    let targetIndex;
    
    if (direction === 'previous') {
      targetIndex = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
    } else {
      targetIndex = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
    }
    
    browser.tabs.update(tabs[targetIndex].id, { active: true });
  });
}

// Listen for keyboard commands from manifest
browser.commands.onCommand.addListener((command) => {
  if (command === 'previous-tab') {
    switchTab('previous');
  } else if (command === 'next-tab') {
    switchTab('next');
  }
});

// Listen for messages from content script
browser.runtime.onMessage.addListener((message) => {
  if (message.action === 'previous-tab') {
    switchTab('previous');
  } else if (message.action === 'next-tab') {
    switchTab('next');
  }
});