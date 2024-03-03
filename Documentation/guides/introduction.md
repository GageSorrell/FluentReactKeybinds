# Introduction

It is often desirable to allow users to view combinations of keys, and to record them for the purpose of having keyboard shortcuts.

This package allows the developer to accomplish this in a Fluent UI environment within a React app.  Components exist to display keys, whether it be in-line, or displayed as their own block of elements.

Additionally, the ability to record keyboard shortcuts is given by this package.
The API surface is designed in a way that will make the developer feel "at home" while they work with the official Fluent UI components for React.

## Examples

<script setup>
    import { useData } from "vitepress";
    import { ref, onMounted, watch } from "vue";
    import { createRoot } from "react-dom/client";
    import { createElement, useState } from "react";
    import { KeybindRecorder, KeySequence, KeybindDialog } from "../..";

    const DialogExample = ref();
    const RecorderExample = ref();
    const SequenceExample = ref();

    const Dark = useData().isDark;

    import { Button, FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
    const DialogComponent = (_Props) =>
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
    const SequenceComponent = (_Props) =>
    {
        let DarkMode = Dark.value;
    
        const MySequence = createElement(KeySequence, { CornerDirection: true, Sequence: [ "MetaLeft", "ShiftRight", "Digit6" ] }, null);
        const Provider = createElement(FluentProvider,
            {
                theme: DarkMode ? webDarkTheme : webLightTheme
            },
            MySequence
        );

        return Provider;
    };


    const RecorderComponent = (_Props) =>
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
        const Roots = [ createRoot(SequenceExample.value), createRoot(RecorderExample.value), createRoot(DialogExample.value) ];
        watch(Dark, (New, Old) =>
        {
            Roots[0].render(createElement(DialogComponent, {}, null));
            Roots[1].render(createElement(RecorderComponent, {}, null));
            Roots[2].render(createElement(SequenceComponent, {}, null));
        });
        Roots[0].render(createElement(DialogComponent, {}, null));
        Roots[1].render(createElement(RecorderComponent, {}, null));
        Roots[2].render(createElement(SequenceComponent, {}, null));
    });
</script>

### Keybind Sequence

<div ref="SequenceExample"/>

### Keybind Recorder

*For this example, please click the Recorder component to gain focus of it.
Focus handling is provided by the `KeybindDialog` wrapper component.*

<div ref="RecorderExample"/>

### Keybind Dialog

<div ref="DialogExample"/>


## Some Example Use Cases

* Display and record keyboard shortcuts of your app on a Settings page
* Display keyboard shortcuts next to menu items in a list
* Show example input that corresponds to a demo of your app
* Show recent input of the user for the sake of memory

## Support

This package works on Chromium-based browsers; the ability to convert DOM codes to OS-level key codes is currently only available for Windows.

Other browsers and OSes might be supported in the future, but because Fluent UI is a Microsoft library, the focus of this package is the Windows environment.