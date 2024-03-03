# Fluent React Keybinds

Record keyboard combinations ("keybinds", "keyboard shortcuts") with React components that conform to [Microsoft's Fluent UI language](https://fluent2.microsoft.design/).

This package complements the official [React component library](https://react.fluentui.dev/?path=/docs/concepts-introduction--page) for Fluent UI.

> View the documentation [here](https://keybinds.sorrell.sh/).

There are four main components:

1. `Key` displays a key, either in a full "display" style, or a "mini" style that imitates the native `<kbd>` element
2. `KeySequence`s displays a sequence of keys
3. `KeybindRecorder` allows you to record key combinations, and display the user's input as a KeySequence
4. `KeybindDialog` is an example implementation of `KeybindRecorder` which also handles focus management and control flow (*i.e.*, the ability to save or cancel the recorded keybind)

# Installation

```
npm install fluent-react-keybinds
```

# Example

*This example creates a dialog for the user to input a keybind, which is saved to the app.*

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { FluentProvider, type Theme, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { KeySequence, KeybindDialog } from "react-fluent-keybinds";

const DarkMode: boolean = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme: Theme = DarkMode ? webDarkTheme : webLightTheme;

const Title = "Example Dialog Component";
const Content = "This example dialog accepts a keybind, which is displayed below the triggering button once the keybind is saved."

const [ Sequence, SetSequence ] = useState([ ]);
const [ open, setOpen ] = useState(false);
const onSave = (NewSequence) =>
{
    SetSequence(NewSequence);
};

ReactDOM.render(
    <FluentProvider { ...{ theme } }>
        <Button onClick={ () => { setOpen(true) } }>
            Open Dialog
        </Button>
        <KeybindDialog { ...{
            Content,
            Sequence,
            Title,
            onSave,
            open,
            setOpen }
        }/>
    </FluentProvider>,
    document.getElementById("root"),
);
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
