import{_ as e,c as o,o as t,V as i}from"./chunks/framework.lhzzn3gs.js";const _=JSON.parse('{"title":"Using with the Windows API (via Electron)","description":"","frontmatter":{},"headers":[],"relativePath":"guides/electron-windows-interop.md","filePath":"guides/electron-windows-interop.md"}'),n={name:"guides/electron-windows-interop.md"},a=i('<h1 id="using-with-the-windows-api-via-electron" tabindex="-1">Using with the Windows API (via Electron) <a class="header-anchor" href="#using-with-the-windows-api-via-electron" aria-label="Permalink to &quot;Using with the Windows API (via Electron)&quot;">​</a></h1><p>Suppose that your application has a backend that works directly with the Windows API, perhaps written in C++.</p><p><code>react-fluent-keybinds</code> allows you to convert your DOM key codes to VK codes, per the <a href="https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes" target="_blank" rel="noreferrer">Windows API documentation.</a></p><p>These VK codes do not have corresponding DOM key codes:</p><ul><li><code>Separator</code></li><li><code>Print</code></li><li><code>Escape</code></li><li><code>NumpadEqual</code></li><li><code>NumpadComma</code></li><li><code>NumpadEnter</code></li><li><code>MediaPlayPause</code></li><li><code>IntlBackslash</code></li></ul>',5),d=[a];function c(s,r,l,p,h,u){return t(),o("div",null,d)}const m=e(n,[["render",c]]);export{_ as __pageData,m as default};
