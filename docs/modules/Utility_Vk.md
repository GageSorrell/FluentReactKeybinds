[react-fluent-keybinds](../README.md) / [Exports](../modules.md) / Utility/Vk

# Module: Utility/Vk

## Table of contents

### Type Aliases

- [FVkUnstyled](Utility_Vk.md#fvkunstyled)
- [VK](Utility_Vk.md#vk)

### Variables

- [DomToVk](Utility_Vk.md#domtovk)
- [Vk](Utility_Vk.md#vk-1)
- [VkToDom](Utility_Vk.md#vktodom)

## Type Aliases

### FVkUnstyled

Ƭ **FVkUnstyled**: ``"0"`` \| ``"1"`` \| ``"2"`` \| ``"3"`` \| ``"4"`` \| ``"5"`` \| ``"6"`` \| ``"7"`` \| ``"8"`` \| ``"9"`` \| ``"A"`` \| ``"B"`` \| ``"C"`` \| ``"D"`` \| ``"E"`` \| ``"F"`` \| ``"F1"`` \| ``"F2"`` \| ``"F3"`` \| ``"F4"`` \| ``"F5"`` \| ``"F6"`` \| ``"F7"`` \| ``"F8"`` \| ``"F9"`` \| ``"F10"`` \| ``"F11"`` \| ``"F12"`` \| ``"F13"`` \| ``"F14"`` \| ``"F15"`` \| ``"F16"`` \| ``"F17"`` \| ``"F18"`` \| ``"F19"`` \| ``"F20"`` \| ``"F21"`` \| ``"F22"`` \| ``"F23"`` \| ``"F24"`` \| ``"G"`` \| ``"H"`` \| ``"I"`` \| ``"J"`` \| ``"K"`` \| ``"L"`` \| ``"M"`` \| ``"N"`` \| ``"O"`` \| ``"P"`` \| ``"Q"`` \| ``"R"`` \| ``"S"`` \| ``"T"`` \| ``"U"`` \| ``"V"`` \| ``"W"`` \| ``"X"`` \| ``"Y"`` \| ``"End"`` \| ``"Home"`` \| ``"Z"``

#### Defined in

[Utility/Vk.ts:10](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Vk.ts#L10)

___

### VK

Ƭ **VK**: [`FVkUnstyled`](Utility_Vk.md#fvkunstyled) \| ``"LButton"`` \| ``"RButton"`` \| ``"MButton"`` \| ``"XButton1"`` \| ``"XButton2"`` \| ``"Back"`` \| ``"Tab"`` \| ``"Return"`` \| ``"Shift"`` \| ``"Control"`` \| ``"Menu"`` \| ``"Pause"`` \| ``"Capital"`` \| ``"Space"`` \| ``"Prior"`` \| ``"Next"`` \| ``"Left"`` \| ``"Up"`` \| ``"Right"`` \| ``"Down"`` \| ``"Select"`` \| ``"Print"`` \| ``"Snapshot"`` \| ``"Insert"`` \| ``"Delete"`` \| ``"LWin"`` \| ``"RWin"`` \| ``"Apps"`` \| ``"NumPad0"`` \| ``"NumPad1"`` \| ``"NumPad2"`` \| ``"NumPad3"`` \| ``"NumPad4"`` \| ``"NumPad5"`` \| ``"NumPad6"`` \| ``"NumPad7"`` \| ``"NumPad8"`` \| ``"NumPad9"`` \| ``"Multiply"`` \| ``"Add"`` \| ``"Separator"`` \| ``"Subtract"`` \| ``"Decimal"`` \| ``"Divide"`` \| ``"NumLock"`` \| ``"Scroll"`` \| ``"LShift"`` \| ``"RShift"`` \| ``"LControl"`` \| ``"RControl"`` \| ``"LMenu"`` \| ``"RMenu"`` \| ``"BrowserBack"`` \| ``"BrowserForward"`` \| ``"BrowserRefresh"`` \| ``"BrowserStop"`` \| ``"BrowserSearch"`` \| ``"BrowserFavorites"`` \| ``"BrowserHome"`` \| ``"VolumeMute"`` \| ``"VolumeDown"`` \| ``"VolumeUp"`` \| ``"MediaNextTrack"`` \| ``"MediaPrevTrack"`` \| ``"MediaStop"`` \| ``"LaunchMail"`` \| ``"LaunchMediaSelect"`` \| ``"LaunchApp1"`` \| ``"LaunchApp2"`` \| ``"Oem1"`` \| ``"OemPlus"`` \| ``"OemComma"`` \| ``"OemMinus"`` \| ``"OemPeriod"`` \| ``"Oem2"`` \| ``"Oem3"`` \| ``"Oem4"`` \| ``"Oem5"`` \| ``"Oem6"`` \| ``"Oem7"``

#### Defined in

[Utility/Vk.ts:75](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Vk.ts#L75)

## Variables

### DomToVk

• `Const` **DomToVk**: \{ [Index in Exclude\<FDomKey, FDomNotInVk\>]: VK }

#### Defined in

[Utility/Vk.ts:463](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Vk.ts#L463)

___

### Vk

• `Const` **Vk**: \{ [Key in VK]: number }

#### Defined in

[Utility/Vk.ts:158](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Vk.ts#L158)

___

### VkToDom

• `Const` **VkToDom**: \{ [Index in VK]: FDomKey }

#### Defined in

[Utility/Vk.ts:304](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Vk.ts#L304)
