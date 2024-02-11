# Utility

This module contains some helpful types and factories.

## Table of contents

### Interfaces

- [FStyledState](../interfaces/Utility_Utility_Types.FStyledState.md)

### Type Aliases

- [FComponentFactory](Utility_Utility_Types.md#fcomponentfactory)
- [FRootStyles](Utility_Utility_Types.md#frootstyles)
- [FStylable](Utility_Utility_Types.md#fstylable)
- [PParentComponent](Utility_Utility_Types.md#pparentcomponent)
- [TComplement](Utility_Utility_Types.md#tcomplement)
- [TComponentRenderFunction](Utility_Utility_Types.md#tcomponentrenderfunction)
- [TDefault](Utility_Utility_Types.md#tdefault)
- [TPartialSubset](Utility_Utility_Types.md#tpartialsubset)
- [TPartialSubsetFromKeys](Utility_Utility_Types.md#tpartialsubsetfromkeys)
- [TRef](Utility_Utility_Types.md#tref)
- [TStateUnstyled](Utility_Utility_Types.md#tstateunstyled)
- [TStyledProps](Utility_Utility_Types.md#tstyledprops)
- [TStyles](Utility_Utility_Types.md#tstyles)

## Type Aliases

### FComponentFactory

Ƭ **FComponentFactory**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Full` | \<PProps, SState\>(`Props`: `PProps`, `RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<`SState`\>, `UseStateFunction`: (`Props`: `PProps`) => [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\>, `UseStylesFunction`: (`StateUnstyled`: [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\>) => `SState`, `DisplayName?`: `string`) => `ReactElement` |
| `NoProps` | \{ `Full`: \<SState\>(`RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<`SState`\>, `UseStateFunction`: () => [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\>, `UseStylesFunction`: (`StateUnstyled`: [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\>) => `SState`, `DisplayName?`: `string`) => `ReactElement` ; `Stateless`: (`RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<[`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md)\>, `UseStylesFunction`: () => [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md), `DisplayName?`: `string`) => `ReactElement` ; `Unstyled`: \<SState\>(`RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<`SState`\>, `UseStateFunction`: () => `SState`, `DisplayName?`: `string`) => `ReactElement`  } |
| `NoProps.Full` | \<SState\>(`RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<`SState`\>, `UseStateFunction`: () => [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\>, `UseStylesFunction`: (`StateUnstyled`: [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\>) => `SState`, `DisplayName?`: `string`) => `ReactElement` |
| `NoProps.Stateless` | (`RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<[`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md)\>, `UseStylesFunction`: () => [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md), `DisplayName?`: `string`) => `ReactElement` |
| `NoProps.Unstyled` | \<SState\>(`RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<`SState`\>, `UseStateFunction`: () => `SState`, `DisplayName?`: `string`) => `ReactElement` |
| `Stateless` | \<PProps\>(`Props`: `PProps`, `RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<[`TStyledProps`](Utility_Utility_Types.md#tstyledprops)\<`PProps`\>\>, `UseStylesFunction`: (`Props`: `PProps`) => [`TStyledProps`](Utility_Utility_Types.md#tstyledprops)\<`PProps`\>, `DisplayName?`: `string`) => `ReactElement` |
| `Unstyled` | \<PProps, SState\>(`Props`: `PProps`, `RenderFunction`: [`TComponentRenderFunction`](Utility_Utility_Types.md#tcomponentrenderfunction)\<`SState`\>, `UseStateFunction`: (`Props`: `PProps`) => `SState`, `DisplayName?`: `string`) => `ReactElement` |

#### Defined in

[Utility/Utility.Types.ts:83](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L83)

___

### FRootStyles

Ƭ **FRootStyles**: () => \{ `Root`: `string`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Root` | `string` |

#### Defined in

[Utility/Utility.Types.ts:12](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L12)

___

### FStylable

Ƭ **FStylable**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `style?` | `CSSProperties` |

#### Defined in

[Utility/Utility.Types.ts:20](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L20)

___

### PParentComponent

Ƭ **PParentComponent**: [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md) & \{ `children?`: `ReactNode`  }

#### Defined in

[Utility/Utility.Types.ts:36](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L36)

___

### TComplement

Ƭ **TComplement**\<`T`, `U`\>: \{ [K in Exclude\<keyof T, keyof U\>]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `U` |
| `U` | `U` |

#### Defined in

[Utility/Utility.Types.ts:41](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L41)

___

### TComponentRenderFunction

Ƭ **TComponentRenderFunction**\<`SState`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `SState` |

#### Call signature

▸ (`State`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `State` | `SState` |

##### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `displayName?` | `string` |

#### Defined in

[Utility/Utility.Types.ts:77](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L77)

___

### TDefault

Ƭ **TDefault**\<`T`, `TKeys`\>: \{ [Key in TKeys]-?: undefined extends T[Key] ? T[Key] : never }

Contains the optional properties of `T`, but they are now required.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeys` | extends keyof `T` = keyof `T` |

#### Defined in

[Utility/Utility.Types.ts:47](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L47)

___

### TPartialSubset

Ƭ **TPartialSubset**\<`T`, `U`\>: `Omit`\<`T`, keyof `U`\> & `Partial`\<`Pick`\<`T`, keyof `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `U` |
| `U` | `U` |

#### Defined in

[Utility/Utility.Types.ts:59](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L59)

___

### TPartialSubsetFromKeys

Ƭ **TPartialSubsetFromKeys**\<`T`, `TKeys`\>: `Omit`\<`T`, `TKeys`\> & `Partial`\<`Pick`\<`T`, `TKeys`\>\>

Make specific properties partial.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeys` | extends keyof `T` |

#### Defined in

[Utility/Utility.Types.ts:55](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L55)

___

### TRef

Ƭ **TRef**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Ref` | `T` |

#### Defined in

[Utility/Utility.Types.ts:25](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L25)

___

### TStateUnstyled

Ƭ **TStateUnstyled**\<`SState`\>: `SState` extends [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md) ? [`TPartialSubset`](Utility_Utility_Types.md#tpartialsubset)\<`SState`, [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md)\> : `SState`

Sometimes the Props are the State, so we do not
have a separate type.  Thus, we use a conditional type
here in case the template parameter does not
contain (new) styles.

#### Type parameters

| Name |
| :------ |
| `SState` |

#### Defined in

[Utility/Utility.Types.ts:69](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L69)

___

### TStyledProps

Ƭ **TStyledProps**\<`PProps`\>: `PProps` & [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md)

A type of state that is the Props, equipped with styling.

#### Type parameters

| Name |
| :------ |
| `PProps` |

#### Defined in

[Utility/Utility.Types.ts:75](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L75)

___

### TStyles

Ƭ **TStyles**\<`T`\>: () => \{ [Index in T]: string }

The return value of `makeStyles` for `T` union
of class names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Type declaration

▸ (): \{ [Index in T]: string }

##### Returns

\{ [Index in T]: string }

#### Defined in

[Utility/Utility.Types.ts:18](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.Types.ts#L18)
