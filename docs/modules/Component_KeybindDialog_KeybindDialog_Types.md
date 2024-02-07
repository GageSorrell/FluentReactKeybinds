[react-fluent-keybinds](../README.md) / [Exports](../modules.md) / Component/KeybindDialog/KeybindDialog.Types

# Module: Component/KeybindDialog/KeybindDialog.Types

## Table of contents

### Type Aliases

- [FKeybindDialogOpenData](Component_KeybindDialog_KeybindDialog_Types.md#fkeybinddialogopendata)
- [FKeybindOpenState](Component_KeybindDialog_KeybindDialog_Types.md#fkeybindopenstate)
- [PKeybindDialog](Component_KeybindDialog_KeybindDialog_Types.md#pkeybinddialog)
- [SKeybindDialog](Component_KeybindDialog_KeybindDialog_Types.md#skeybinddialog)

## Type Aliases

### FKeybindDialogOpenData

Ƭ **FKeybindDialogOpenData**: `DialogOpenChangeData` & \{ `Type`: [`FKeybindOpenState`](Component_KeybindDialog_KeybindDialog_Types.md#fkeybindopenstate)  }

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:15](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L15)

___

### FKeybindOpenState

Ƭ **FKeybindOpenState**: ``"Opened"`` \| ``"Success"`` \| ``"Canceled"``

The trichotomy of the dialog's open/closed state.

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:23](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L23)

___

### PKeybindDialog

Ƭ **PKeybindDialog**: `Pick`\<[`PKey`](key.md#pkey), ``"BackgroundColor"`` \| ``"CornerDirection"`` \| ``"Color"``\> & [`PKeybindRecorder`](keybind-recorder.md#pkeybindrecorder) & \{ `Content`: `string` \| `ReactElement` ; `Title`: `string` ; `onCancel?`: () => `void` ; `onOpenChange?`: (`Event`: `DialogOpenChangeEvent`, `Data`: [`FKeybindDialogOpenData`](Component_KeybindDialog_KeybindDialog_Types.md#fkeybinddialogopendata)) => `void` ; `onSave?`: () => `void` ; `open`: `boolean` ; `setOpen?`: (`old`: `boolean`) => `boolean`  }

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:31](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L31)

___

### SKeybindDialog

Ƭ **SKeybindDialog**: `Omit`\<[`PKeybindDialog`](Component_KeybindDialog_KeybindDialog_Types.md#pkeybinddialog), ``"MaxLength"`` \| ``"onOpenChange"`` \| ``"setOpen"``\> & `FFluentDialogOpenChangeEventHandler` & \{ `OnCancel`: () => `void` ; `OnSave`: () => `void`  } & [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md)

#### Defined in

[Component/KeybindDialog/KeybindDialog.Types.ts:68](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Component/KeybindDialog/KeybindDialog.Types.ts#L68)
