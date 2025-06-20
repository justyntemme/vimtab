chrome.commands.onCommand.addListener(async (command) => {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const activeTab = tabs.find(tab => tab.active);
    
    if (!activeTab) return;
    
    const activeIndex = activeTab.index;
    let targetIndex;
    
    if (command === 'previous-tab') {
      targetIndex = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
    } else if (command === 'next-tab') {
      targetIndex = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
    } else {
      return;
    }
    
    await chrome.tabs.update(tabs[targetIndex].id, { active: true });
  } catch (error) {
    console.error('Error switching tabs:', error);
  }
});