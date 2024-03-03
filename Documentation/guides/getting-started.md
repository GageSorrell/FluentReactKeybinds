# Get Started


## Prerequisites

Before integrating `react-fluent-keybinds` into your React app, you will need the following,

* NodeJS v18.19.0 or higher
* React v16.8 or higher
* Fluent UI v9.46.4 or higher

This package depends upon `@fluentui/react-components`, **not** `@fluentui/react`.
It appears that Microsoft is transitioning toward the former as the "main" package for their React Fluent UI library.

## Installation

First, install via `npm`,

```powershell
npm i react-fluent-keybinds --save
```

That's it!
There is no special setup.

## Supported Platforms

`react-fluent-keybinds` works with Chrome, and converts to Virtual Keycodes (VK) for Windows only.  If you do not plan to have OS-level functionality in your React app, then you need not worry about the VK support.  Firefox support may be added in the future.

If you do not plan on recording keybinds in your React app, and instead just want a way to display keybinds, then `react-fluent-keybinds` will suit your needs in any modern browser.

## Basic Usage & Demonstrations

### Displaying a Key Sequence
<!-- <iframe src="https://codesandbox.io/p/devbox/8l5lw8?file=%2Fsrc%2FApp.tsx&embed=1"
     style="margin-top: 1rem; width:100%; height: 800px; border:0; border-radius: 4px; overflow:hidden;"
     title="Key Sequence (Component of `react-fluent-keybinds`)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> -->

### Recording a Keybind

<!-- <iframe src="https://codesandbox.io/p/devbox/silly-scott-ptt693?embed=1&file=%2Fsrc%2FApp.tsx"
     style="margin-top: 1rem; width:100%; height: 800px; border:0; border-radius: 4px; overflow:hidden;"
     title="Keybind Recorder (react-fluent-keybinds)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> -->
