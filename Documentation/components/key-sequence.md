<script setup>
    import { createElement } from "react";
    import { FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
    import { createRoot } from "react-dom/client";
    import { useData } from "vitepress";

    import { ref, onMounted, watch } from "vue";
    import { Key, KeySequence } from "../../";

    const DefaultExample = ref();
    const CornerExample = ref();

    const Dark = useData().isDark;

    const CornerExampleComponent = (_Props) =>
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

    const DefaultExampleComponent = (_Props) =>
    {
        let DarkMode = Dark.value;
    
        const MySequence = createElement(KeySequence, { Sequence: [ "ControlLeft", "ShiftRight", "KeyS" ] }, null);
        const Provider = createElement(FluentProvider,
            {
                theme: DarkMode ? webDarkTheme : webLightTheme
            },
            MySequence
        );

        return Provider;
    };

    // let root = undefined;

    onMounted(() => {
        const Default =
        {
            Component: DefaultExampleComponent,
            Root: createRoot(DefaultExample.value)
        };
        const Corner =
        {
            Component: CornerExampleComponent,
            Root: createRoot(CornerExample.value)
        };
        const ComponentPairs = [ Default, Corner ];
        const RenderRoots = () =>
        {
            ComponentPairs.forEach(({ Component, Root }) =>
            {
                Root.render(Component());
            });
        };
        watch(Dark, (New, Old) =>
        {
            RenderRoots();
        });
        RenderRoots();
    });
</script>
# Key Sequence

This component allows you to display a combination of keys to the user.

## Examples

### Default

<div ref="DefaultExample" />

::: details Code Snippet
```tsx
import React from "react";
import ReactDOM from "react-dom";
import { FluentProvider, type Theme, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { Key, KeySequence } from "react-fluent-keybinds";

const DarkMode: boolean = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme: Theme = DarkMode ? webDarkTheme : webLightTheme;

ReactDOM.render(
    <FluentProvider { ...{ theme } }>
        <KeySequence Sequence={[ "ControlLeft", "ShiftRight", "KeyS" ]}/>
    </FluentProvider>,
    document.getElementById("root"),
);
```
:::

### Corner Symbols

<div ref="CornerExample" />

::: details Code Snippet
```tsx
import React from "react";
import ReactDOM from "react-dom";
import { FluentProvider, type Theme, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { Key, KeySequence } from "react-fluent-keybinds";

const DarkMode: boolean = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme: Theme = DarkMode ? webDarkTheme : webLightTheme;

ReactDOM.render(
    <FluentProvider { ...{ theme } }>
        <KeySequence
            CornerDirection,
            Sequence={[ "MetaLeft", "ShiftRight", "Digit6" ]}
        />
    </FluentProvider>,
    document.getElementById("root"),
);
```
:::

## Table of contents

### Type Aliases

- [PKeySequence](./key-sequence.html#pkeysequence)
- [SKeySequence](./key-sequence.html#skeysequence)

## Type Aliases

### PKeySequence

Ƭ **PKeySequence**: `Pick`\<[`PKey`](key.html#pkey), ``"CornerDirection"``\> & \{ `Sequence`: [`FDomKey`](key.html#fdomkey)[]  }

#### Defined in

[Component/KeySequence/KeySequence.Types.ts:10](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeySequence/KeySequence.Types.ts#L10)

___

### SKeySequence

Ƭ **SKeySequence**: [`PKeySequence`](./key-sequence.html#pkeysequence) & [`FStyledState`](./utility.html)

#### Defined in

[Component/KeySequence/KeySequence.Types.ts:15](https://github.com/GageSorrell/FluentReactKeybinds/blob/41f23cc/Source/Component/KeySequence/KeySequence.Types.ts#L15)