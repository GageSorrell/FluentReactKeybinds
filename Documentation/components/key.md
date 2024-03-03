# Key

This component is analogous to the `<kbd>` HTML element, but with an API consistent with the other components in this package, and styled to look familiar in a Fluent UI React app.

:::info Coming Soon
Pictures
:::

:::info Coming Soon
Examples
:::

### Type Aliases

- [FDomKey](key.md#fdomkey)
- [FKeyClassNames](key.md#fkeyclassnames)
- [FKeyDisplay](key.md#fkeydisplay)
- [FKeyRepresentation](key.md#fkeyrepresentation)
- [FKeyStyles](key.md#fkeystyles)
- [PKey](key.md#pkey)
- [SKey](key.md#skey)

## Type Aliases

### FDomKey

Ƭ **FDomKey**: ``""`` \| ``"Escape"`` \| ``"Digit1"`` \| ``"Digit2"`` \| ``"Digit3"`` \| ``"Digit4"`` \| ``"Digit5"`` \| ``"Digit6"`` \| ``"Digit7"`` \| ``"Digit8"`` \| ``"Digit9"`` \| ``"Digit0"`` \| ``"Minus"`` \| ``"Equal"`` \| ``"Backspace"`` \| ``"Tab"`` \| ``"KeyA"`` \| ``"KeyB"`` \| ``"KeyC"`` \| ``"KeyD"`` \| ``"KeyE"`` \| ``"KeyF"`` \| ``"KeyG"`` \| ``"KeyH"`` \| ``"KeyI"`` \| ``"KeyJ"`` \| ``"KeyK"`` \| ``"KeyL"`` \| ``"KeyM"`` \| ``"KeyN"`` \| ``"KeyO"`` \| ``"KeyP"`` \| ``"KeyQ"`` \| ``"KeyR"`` \| ``"KeyS"`` \| ``"KeyT"`` \| ``"KeyU"`` \| ``"KeyV"`` \| ``"KeyW"`` \| ``"KeyX"`` \| ``"KeyY"`` \| ``"KeyZ"`` \| ``"BracketLeft"`` \| ``"BracketRight"`` \| ``"Enter"`` \| ``"ControlLeft"`` \| ``"ControlRight"`` \| ``"Semicolon"`` \| ``"Quote"`` \| ``"Backquote"`` \| ``"ShiftLeft"`` \| ``"Backslash"`` \| ``"Comma"`` \| ``"Period"`` \| ``"Slash"`` \| ``"ShiftRight"`` \| ``"NumpadMultiply"`` \| ``"AltLeft"`` \| ``"Space"`` \| ``"CapsLock"`` \| ``"F1"`` \| ``"F2"`` \| ``"F3"`` \| ``"F4"`` \| ``"F5"`` \| ``"F6"`` \| ``"F7"`` \| ``"F8"`` \| ``"F9"`` \| ``"F10"`` \| ``"F11"`` \| ``"F12"`` \| ``"F13"`` \| ``"F14"`` \| ``"F15"`` \| ``"F16"`` \| ``"F17"`` \| ``"F18"`` \| ``"F19"`` \| ``"F20"`` \| ``"F21"`` \| ``"F22"`` \| ``"F23"`` \| ``"F24"`` \| ``"Pause"`` \| ``"ScrollLock"`` \| ``"Numpad0"`` \| ``"Numpad1"`` \| ``"Numpad2"`` \| ``"Numpad3"`` \| ``"Numpad4"`` \| ``"Numpad5"`` \| ``"Numpad6"`` \| ``"Numpad7"`` \| ``"Numpad8"`` \| ``"Numpad9"`` \| ``"NumpadSubtract"`` \| ``"NumpadAdd"`` \| ``"NumpadDecimal"`` \| ``"NumpadEqual"`` \| ``"NumpadDivide"`` \| ``"IntlBackslash"`` \| ``"NumpadComma"`` \| ``"MediaTrackPrevious"`` \| ``"MediaTrackNext"`` \| ``"NumpadEnter"`` \| ``"AudioVolumeMute"`` \| ``"MediaPlayPause"`` \| ``"MediaStop"`` \| ``"AudioVolumeDown"`` \| ``"AudioVolumeUp"`` \| ``"BrowserHome"`` \| ``"BrowserStop"`` \| ``"BrowserBack"`` \| ``"BrowserForward"`` \| ``"BrowserSearch"`` \| ``"BrowserFavorites"`` \| ``"BrowserRefresh"`` \| ``"NumpadDivide"`` \| ``"PrintScreen"`` \| ``"AltRight"`` \| ``"AltLeft"`` \| ``"NumLock"`` \| ``"Pause"`` \| ``"Home"`` \| ``"ArrowUp"`` \| ``"ArrowDown"`` \| ``"ArrowLeft"`` \| ``"ArrowRight"`` \| ``"PageUp"`` \| ``"PageDown"`` \| ``"End"`` \| ``"Insert"`` \| ``"Delete"`` \| ``"LaunchMail"`` \| ``"LaunchApp1"`` \| ``"LaunchApp2"`` \| ``"ContextMenu"`` \| ``"MetaLeft"`` \| ``"MetaRight"`` \| ``"MediaSelect"``

The set of values that KeyboardEvent#code can be.
It is guaranteed that KeyboardEvent#code can be
safely cast to `FDomKey`.

#### Defined in

[Component/Key/Key.Types.ts:15](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L15)

___

### FKeyClassNames

Ƭ **FKeyClassNames**: ``"StringContainer"`` \| ``"Root"``

The class names used to style the Key component.

#### Defined in

[Component/Key/Key.Types.ts:196](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L196)

___

### FKeyDisplay

Ƭ **FKeyDisplay**: ``"Full"`` \| ``"Inline"`` \| ``"Mini"``

The display style of a Key component.

#### Defined in

[Component/Key/Key.Types.ts:161](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L161)

___

### FKeyRepresentation

Ƭ **FKeyRepresentation**: `string` \| `ReactElement`

`FDomKey`s are represented with strings and FluentIcons.

#### Defined in

[Component/Key/Key.Types.ts:204](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L204)

___

### FKeyStyles

Ƭ **FKeyStyles**: [`TStyles`](Utility_Utility_Types.md#tstyles)\<[`FKeyClassNames`](key.md#fkeyclassnames)\>

The makeStyles hook of the Key component.

#### Defined in

[Component/Key/Key.Types.ts:201](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L201)

___

### PKey

Ƭ **PKey**: [`FStylable`](Utility_Utility_Types.md#fstylable) & \{ `BackgroundColor?`: `string` ; `Color?`: `string` ; `CornerDirection?`: `boolean` ; `Display?`: [`FKeyDisplay`](key.md#fkeydisplay) ; `Key`: [`FDomKey`](key.md#fdomkey)  }

Properties for the Key component.

#### Defined in

[Component/Key/Key.Types.ts:177](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L177)

___

### SKey

Ƭ **SKey**: [`FStylable`](Utility_Utility_Types.md#fstylable) & [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md) & `Pick`\<[`PKey`](key.md#pkey), ``"BackgroundColor"`` \| ``"Color"`` \| ``"CornerDirection"`` \| ``"Display"``\> & \{ `Representation`: [`FKeyRepresentation`](key.md#fkeyrepresentation)[]  }

The state of the Key component.

#### Defined in

[Component/Key/Key.Types.ts:207](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/Key/Key.Types.ts#L207)
