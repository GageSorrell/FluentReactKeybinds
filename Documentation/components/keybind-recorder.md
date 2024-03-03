<script setup>
    import { useData } from "vitepress";

    import { ref, onMounted, watch } from "vue";
    import { createRoot } from "react-dom/client";
    import { createElement, useState } from "react";
    import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components"
    import { KeybindRecorder } from "../.."

    const DefaultExample = ref();

    const Dark = useData().isDark;

    const ExampleComponent = (_Props) =>
    {
        const [ Sequence, SetSequence ] = useState(false);
        const OnChange = (NewSequence) =>
        {
            SetSequence(_Old => NewSequence);
        };

        let DarkMode = Dark.value;
    
        const Recorder = createElement(
            KeybindRecorder,
            { ...{ OnChange, Sequence } },
            null
        );

        const Provider = createElement(FluentProvider,
            {
                theme: DarkMode ? webDarkTheme : webLightTheme
            },
            Recorder
        );

        return Provider;
    };

    onMounted(() => {
        const Root = createRoot(DefaultExample.value);
        watch(Dark, (New, Old) =>
        {
            Root.render(createElement(ExampleComponent, {}, null));
        });
        Root.render(createElement(ExampleComponent, {}, null));
    });
</script>

# Keybind Recorder

This component allows the user to record a keybind, for your app to save and use later in the user experience.

It is intended to be wrapped in something to handle focus, and saving the sequence that it records.  The default implementation of this is the [`KeybindDialog` component.](./keybind-dialog)

## Example

*Click the Recorder component to gain focus of it.*

<div ref="DefaultExample"/>

:::details Code Snippet
```tsx
import React from "react";
import ReactDOM from "react-dom";
import { FluentProvider, type Theme, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { Key, KeySequence } from "react-fluent-keybinds";

const DarkMode: boolean = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme: Theme = DarkMode ? webDarkTheme : webLightTheme;

const [ Sequence, SetSequence ] = useState(false);
const OnChange = (NewSequence) =>
{
    SetSequence(_Old => NewSequence);
};

ReactDOM.render(
    <FluentProvider { ...{ theme } }>
        <KeybindRecorder { ...{ OnChange, Sequence } }/>
    </FluentProvider>,
    document.getElementById("root"),
);
```
:::

## Table of contents

### Type Aliases

- [FKeySequence](keybind-recorder.html#fkeysequence)
- [PKeybindRecorder](keybind-recorder.html#pkeybindrecorder)
- [SKeybindRecorder](keybind-recorder.html#skeybindrecorder)

## Type Aliases

### FKeySequence

Ƭ **FKeySequence**: [`FDomKey`](key.html#fdomkey)[]

#### Defined in

[Component/KeybindRecorder/KeybindRecorder.Types.ts:43](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindRecorder/KeybindRecorder.Types.ts#L43)

___

### PKeybindRecorder

Ƭ **PKeybindRecorder**: `Pick`\<[`PKey`](key.html#pkey), ``"CornerDirection"``\> & \{ `Sequence`: [`FKeySequence`](keybind-recorder.html#fkeysequence)  } & `Partial`\<\{ `ExclusionList`: [`FDomKey`](key.html#fdomkey)[] ; `MaxLength`: `number` ; `OnBlur`: (`Event`: `FocusEvent`, `ClearSequence`: () => `void`) => `void` ; `OnChange`: (`NewSequence`: [`FKeySequence`](keybind-recorder.html#fkeysequence)) => `void` ; `OnExcludedKeyPressed`: (`Key`: [`FDomKey`](key.html#fdomkey)) => `void`  }\>

#### Defined in

[Component/KeybindRecorder/KeybindRecorder.Types.ts:11](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindRecorder/KeybindRecorder.Types.ts#L11)

___

### SKeybindRecorder

Ƭ **SKeybindRecorder**: `Omit`\<[`PKeybindRecorder`](keybind-recorder.html#pkeybindrecorder), ``"OnChange"``\> & [`FStyledState`](./utility.html) & \{ `onBlur`: (`Event`: `FocusEvent`) => `void` ; `onKeyDown`: (`Event`: `KeyboardEvent`) => `void` ; `onKeyUp`: (`Event`: `KeyboardEvent`) => `void`  }

#### Defined in

[Component/KeybindRecorder/KeybindRecorder.Types.ts:45](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindRecorder/KeybindRecorder.Types.ts#L45)