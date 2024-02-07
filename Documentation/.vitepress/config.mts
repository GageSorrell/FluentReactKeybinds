import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "React Fluent Keybinds",
  description: "Display and record key combinations with Fluent UI-compatible components.",
  themeConfig: {
    footer:
    {
      copyright: "&copy; 2024 Gage Sorrell.  Released under the MIT license."
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guides', link: '/guides/getting-started' },
      { text: 'Documentation', link: '/components/' },
      { text: 'Support', link: '/support/contact-information' }
    ],    
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Introduction', link: '/guides/introduction' },
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
          { text: 'Contact Information', link: '/support/contact-information' },
          { text: 'Showcase', link: '/support/showcase' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GageSorrell/ReactFluentKeybinds' }
    ]
  }
})
