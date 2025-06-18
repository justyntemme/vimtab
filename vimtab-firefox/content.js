document.addEventListener('keydown', function(e) {
  // Check for Alt+H (previous tab)
  if (e.altKey && e.key === 'h') {
    e.preventDefault();
    e.stopPropagation();
    browser.runtime.sendMessage({ action: 'previous-tab' });
    return false;
  }
  
  // Check for Alt+L (next tab)
  if (e.altKey && e.key === 'l') {
    e.preventDefault();
    e.stopPropagation();
    browser.runtime.sendMessage({ action: 'next-tab' });
    return false;
  }
}, true);