# Fluent React Keybinds

Record keyboard combinations ("keybinds", "keyboard shortcuts") with React components that conform to [Microsoft's Fluent UI language](https://fluent2.microsoft.design/).

This package complements the official [React component library](https://react.fluentui.dev/?path=/docs/concepts-introduction--page) for Fluent UI.

> View the documentation [here](https://keybinds.sorrell.sh/).

# Installation

```
npm install fluent-react-keybinds
```

# Example

`@TODO` Add a GIF.
`@TODO` Create a Stackblitz demo.

```tsx
export const RecordKeybinds = ({ SetKeyboardShortcut }): ReactElement =>
{
    const [ KeyboardShortcut, SetKeyboardShortcut ] = useState<FKeySequence>([ ]);

    /** Suppose that the shortcut that the user sets must have three keys, and a `Shift` key. */
    const Conforms = (Keys: FKeySequence): boolean =>
    {
        return (Keys.includes("ShiftLeft") || Keys.includes("ShiftRight")) & Keys.length >= 3;
    };
    const OnChange = (Keys: FKeySequence) =>
    {
        if (Conforms(Keys))
        {
            SetKeyboardShortcut(Keys);
        }
    };

    return <KeySequenceRecorder { ...{ OnChange } }/>;
};
```

# Features

With this package, you can:

* display key combinations
* record key combinations
* convert a key combination to VK codes

The last feature is useful for building Windows applications that use Electron as a frontend.

# Limitations

Currently, only Chrome and Electron (both only on Windows) are supported.
The `Browser` keys (such as `BrowserBack` and `BrowserRefresh`) cannot be recorded, because there exists no reliable way to prevent the default actions of the web browser when these keys are pressed.

The supported keys are listed in [this MDN article](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values), excluding the `Browser` keys, and the `Language` and `Intl` keys.

# To Do

* Add style option to show L and R in the lower-left corner, in a small size