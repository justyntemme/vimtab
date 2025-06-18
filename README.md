# VimTab Navigator

Browser extensions that enable Vim-like keyboard shortcuts for tab navigation in Chrome and Firefox.

## Features

- **Previous Tab**: Navigate to the previous tab in the tab list
- **Next Tab**: Navigate to the next tab in the tab list
- **Wrap Around**: Automatically cycles from the last tab to the first (and vice versa)
- **Configurable Shortcuts**: Customize keyboard shortcuts through browser settings

## Default Keyboard Shortcuts

### Chrome
- **Ctrl+Shift+H**: Switch to previous tab
- **Ctrl+Shift+L**: Switch to next tab

### Firefox
- **Alt+H**: Switch to previous tab (intercepted via content script)
- **Alt+L**: Switch to next tab (intercepted via content script)

Note: Firefox uses a content script to intercept Alt+H before the browser's help menu can activate. This works on all regular web pages but not on special Firefox pages (about:*, extension pages, etc.).

## Installation

### Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the `vimtab-chrome` directory
5. The extension is now installed and active

### Firefox

#### Temporary Installation (for testing)
1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on"
4. Select any file inside the `vimtab-firefox` directory (e.g., `manifest.json`)
5. The extension will remain installed until Firefox is restarted

#### Permanent Installation
1. The extension needs to be signed by Mozilla for permanent installation
2. Visit https://addons.mozilla.org/developers/ to submit the extension
3. Alternatively, use Firefox Developer Edition or Nightly with `xpinstall.signatures.required` set to `false` in `about:config`

## Customizing Keyboard Shortcuts

### Chrome
1. Navigate to `chrome://extensions/shortcuts`
2. Find "VimTab Navigator"
3. Click the edit button next to each shortcut
4. Press your desired key combination
5. Click OK to save

### Firefox
1. Navigate to `about:addons`
2. Click the gear icon and select "Manage Extension Shortcuts"
3. Find "VimTab Navigator"
4. Click on the shortcut field and press your desired key combination

Note: For Firefox, the content script shortcuts (Alt+H/Alt+L) are hardcoded and can only be changed by modifying the `content.js` file.

## Project Structure

```
vimtab/
├── README.md
├── vimtab-chrome/
│   ├── manifest.json    # Chrome extension manifest (v3)
│   └── background.js    # Background service worker
└── vimtab-firefox/
    ├── manifest.json    # Firefox extension manifest (v2)
    ├── background.js    # Background script
    └── content.js       # Content script for intercepting keystrokes
```

## Building from Source

### Chrome
No build process required. The extension can be loaded directly from the `vimtab-chrome` directory.

### Firefox
To create a distributable .xpi file:
```bash
cd vimtab-firefox
zip -r ../vimtab-firefox.xpi *
```

## Development

### Chrome
1. Make changes to files in `vimtab-chrome/`
2. Go to `chrome://extensions/`
3. Click the refresh button on the VimTab Navigator extension
4. Test your changes

### Firefox
1. Make changes to files in `vimtab-firefox/`
2. Go to `about:debugging`
3. Click "Reload" next to the VimTab Navigator extension
4. Test your changes

## Browser Compatibility

- **Chrome**: Version 88+ (Manifest V3 support)
- **Firefox**: Version 60+ (WebExtensions API)

## Permissions

Both extensions require the following permissions:
- `tabs`: To query and switch between tabs

Firefox additionally requires:
- `activeTab`: For the active tab context
- `<all_urls>`: To inject content scripts for keyboard interception

## Known Limitations

1. **Firefox**: Alt+H override only works on regular web pages, not on Firefox's built-in pages (about:*, moz-extension://, etc.)
2. **Both browsers**: Cannot override certain system-level shortcuts
3. **Both browsers**: Shortcuts may not work when browser UI elements (address bar, dev tools) are focused

## License

This project is open source. Feel free to modify and distribute as needed.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test in both Chrome and Firefox
5. Submit a pull request

## Troubleshooting

### Chrome
- If shortcuts don't work, check `chrome://extensions/shortcuts` for conflicts
- Ensure the extension is enabled in `chrome://extensions/`

