<script setup>
    import { useData } from "vitepress";
    import { ref, onMounted, watch } from "vue";
    import { createRoot } from "react-dom/client";
    import { createElement, useState } from "react";

    const DefaultExample = ref();

    const Dark = useData().isDark;

    import { Button, FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
    import { KeySequence, KeybindDialog } from "../..";
    const ExampleComponent = (_Props) =>
    {
        let DarkMode = Dark.value;

        const Title = "Example Dialog Component";
        const Content = "This example dialog accepts a keybind, which is displayed below the triggering button once the keybind is saved."
        const [ Sequence, SetSequence ] = useState([ ]);
        const onSave = (NewSequence) =>
        {
            SetSequence(NewSequence);
        };

        const [ open, setOpen ] = useState(false);
    
        const Dialog = createElement(
            KeybindDialog,
            { ...{ onSave, Sequence, open, setOpen, Title, Content } },
            null
        );

        const MySequence = createElement(KeySequence, { ...{ Sequence } });
        const MyButton = createElement(
            Button,
            {
                children: [ "Open Dialog" ],
                style: { marginBottom: "1rem" },
                onClick: () => { setOpen(true); } });
        const Provider = createElement(FluentProvider,
            {
                theme: DarkMode ? webDarkTheme : webLightTheme
            },
            MyButton,
            MySequence,
            Dialog
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
# Keybind Dialog

This component wraps the `KeybindRecorder` component, captures focus, and allows the user to cancel (and thus close) the dialog, and to confirm their input and continue the user experience.

## Example

<div ref="DefaultExample"/>

:::details Code Snippet
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
:::

## Table of contents

### Type Aliases

- [FKeybindDialogOpenData](./keybind-dialog.html#fkeybinddialogopendata)
- [FKeybindOpenState](./keybind-dialog.html#fkeybindopenstate)
- [PKeybindDialog](./keybind-dialog.html#pkeybinddialog)
- [SKeybindDialog](./keybind-dialog.html#skeybinddialog)

## Type Aliases

### FKeybindDialogOpenData

Ƭ **FKeybindDialogOpenData**: `DialogOpenChangeData` & \{ `Type`: [`FKeybindOpenState`](./keybind-dialog.html#fkeybindopenstate)  }

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:15](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L15)

___

### FKeybindOpenState

Ƭ **FKeybindOpenState**: ``"Opened"`` \| ``"Success"`` \| ``"Canceled"``

The trichotomy of the dialog's open/closed state.

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:23](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L23)

___

### PKeybindDialog

Ƭ **PKeybindDialog**: `Pick`\<[`PKey`](key.html#pkey), ``"BackgroundColor"`` \| ``"CornerDirection"`` \| ``"Color"``\> & [`PKeybindRecorder`](./keybind-recorder.html#pkeybindrecorder) & \{ `Content`: `string` \| `ReactElement` ; `Title`: `string` ; `onCancel?`: () => `void` ; `onOpenChange?`: (`Event`: `DialogOpenChangeEvent`, `Data`: [`FKeybindDialogOpenData`](./keybind-dialog.html#fkeybinddialogopendata)) => `void` ; `onSave?`: (`NewSequence`: [`FDomKey`](key.html#fdomkey)[]) => `void` ; `open`: `boolean` ; `setOpen?`: (`Old`: `boolean`) => `void`  }

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:31](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L31)

___

### SKeybindDialog

Ƭ **SKeybindDialog**: `Omit`\<[`PKeybindDialog`](./keybind-dialog.html#pkeybinddialog), ``"MaxLength"`` \| ``"onOpenChange"`` \| ``"setOpen"``\> & `FFluentDialogOpenChangeEventHandler` & \{ `OnCancel`: () => `void` ; `OnSave`: () => `void` ; `SaveButtonRef`: `RefObject`\<`HTMLButtonElement`\>  } & [`FStyledState`](./utility.html)

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:68](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L68)