---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "React Fluent Keybinds"
  text: "by Gage Sorrell"
  tagline: Display key combinations in a way that is consistent with Microsoft's Fluent UI design language.
  image: /Resources/ElectronLogo.svg
  actions:
    - theme: brand
      text: Get Started
      link: /get-started
    - theme: alt
      text: Try It Out
      link: /try-it-out

features:
  - icon:
      src: /Resources/video-camera.png
    title: Record Key Combinations
    details: Record key combinations to use as shortcuts in your React app.
  - icon:
      src: /Resources/atom.png
    title: Use with Electron
    details: Automatically convert combinations to VK codes to send to your backend that interacts with the Windows API.
  - icon:
      src: /Resources/crop.png
    title: Multiple Styles and Sizes
    details: Display in-line, or in a container that denotes the key sequence as a keyboard shortcut.
---