# VimTab Firefox Extension TODO

Implement a Firefox WebExtension that provides the same functionality as the Chrome extension:

## Core Features
- Switch to previous tab with Alt+H (configurable)
- Switch to next tab with Alt+L (configurable)
- Wrap around when reaching first/last tab

## Implementation Notes
- Use Firefox's WebExtensions API (mostly compatible with Chrome's API)
- Create manifest.json with Firefox-specific settings
- Port background.js functionality to Firefox
- Test keyboard shortcut configuration in Firefox's about:addons page

## Files Needed
- manifest.json (Firefox version)
- background.js (may need minor adjustments for Firefox API differences)
- Icons (if adding custom icons)

## Key Differences from Chrome
- Firefox uses "browser" namespace instead of "chrome" (though chrome namespace works too)
- May need to adjust manifest.json format slightly
- Keyboard shortcuts configuration is in about:addons instead of chrome://extensions/shortcuts