# Using with the Windows API (via Electron)

Suppose that your application has a backend that works directly with the Windows API, perhaps written in C++.

`react-fluent-keybinds` allows you to convert your DOM key codes to VK codes, per the [Windows API documentation.](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

These VK codes do not have corresponding DOM key codes:
* `Separator`
* `Print`
* `Escape`
* `NumpadEqual`
* `NumpadComma`
* `NumpadEnter`
* `MediaPlayPause`
* `IntlBackslash`
