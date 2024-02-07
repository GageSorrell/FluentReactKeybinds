[react-fluent-keybinds](../README.md) / [Exports](../modules.md) / Component/KeybindRecorder/KeybindRecorder.Types

# Module: Component/KeybindRecorder/KeybindRecorder.Types

## Table of contents

### Type Aliases

- [FKeySequence](keybind-recorder.md#fkeysequence)
- [PKeybindRecorder](keybind-recorder.md#pkeybindrecorder)
- [SKeybindRecorder](keybind-recorder.md#skeybindrecorder)

## Type Aliases

### FKeySequence

Ƭ **FKeySequence**: [`FDomKey`](key.md#fdomkey)[]

#### Defined in

[Component/KeybindRecorder/KeybindRecorder.Types.ts:20](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindRecorder/KeybindRecorder.Types.ts#L20)

___

### PKeybindRecorder

Ƭ **PKeybindRecorder**: `Pick`\<[`PKey`](key.md#pkey), ``"CornerDirection"``\> & `Partial`\<\{ `ExclusionList?`: [`FDomKey`](key.md#fdomkey)[] ; `MaxLength?`: `number` ; `OnChange?`: (`Keys`: [`FDomKey`](key.md#fdomkey)[]) => `void` ; `OnExcludedKeyPressed?`: (`Key`: [`FDomKey`](key.md#fdomkey)) => `void`  }\>

#### Defined in

[Component/KeybindRecorder/KeybindRecorder.Types.ts:11](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindRecorder/KeybindRecorder.Types.ts#L11)

___

### SKeybindRecorder

Ƭ **SKeybindRecorder**: `Pick`\<[`PKeybindRecorder`](keybind-recorder.md#pkeybindrecorder), ``"CornerDirection"``\> & [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md) & \{ `Keys`: [`FKeySequence`](keybind-recorder.md#fkeysequence) ; `onBlur`: (`Event`: `FocusEvent`) => `void` ; `onKeyDown`: (`Event`: `KeyboardEvent`) => `void` ; `onKeyUp`: (`Event`: `KeyboardEvent`) => `void`  }

#### Defined in

[Component/KeybindRecorder/KeybindRecorder.Types.ts:22](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindRecorder/KeybindRecorder.Types.ts#L22)
