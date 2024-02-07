import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "React Fluent Keybinds",
  description: "Display and record key combinations with Fluent UI-compatible components.",
  themeConfig: {
    footer:
    {
      copyright: "&copy; 2024 Gage Sorrell.  Released under the MIT license."
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],    
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/guides/getting-started' },
          { text: 'Using with Electron & Windows', link: '/guides/electron-windows-interop' },
          { text: "Displaying Keybinds", link: "/guides/displaying-keybinds" },
          { text: "Recording Keybinds", link: "/guides/recording-keybinds" },
          { text: "Extending the Library", link: "/guides/extending-package" }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Key', link: '/components/key' },
          { text: 'Keybind Sequence', link: '/components/keybind-sequence' },
          { text: 'Keybind Recorder', link: '/components/keybind-recorder' },
          { text: 'Keybind Dialog', link: '/components/keybind-dialog' }
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'Contact Information', link: '/support/contact-information' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GageSorrell/ReactFluentKeybinds' }
    ]
  }
})
