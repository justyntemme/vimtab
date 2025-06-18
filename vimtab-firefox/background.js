browser.commands.onCommand.addListener((command) => {
  if (command === 'previous-tab') {
    browser.tabs.query({ currentWindow: true }, (tabs) => {
      const activeTab = tabs.find(tab => tab.active);
      const activeIndex = activeTab.index;
      const previousIndex = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
      browser.tabs.update(tabs[previousIndex].id, { active: true });
    });
  } else if (command === 'next-tab') {
    browser.tabs.query({ currentWindow: true }, (tabs) => {
      const activeTab = tabs.find(tab => tab.active);
      const activeIndex = activeTab.index;
      const nextIndex = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
      browser.tabs.update(tabs[nextIndex].id, { active: true });
    });
  }
});