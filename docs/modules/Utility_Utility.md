[react-fluent-keybinds](../README.md) / [Exports](../modules.md) / Utility/Utility

# Module: Utility/Utility

## Table of contents

### Interfaces

- [IEquivalenceRelation](../interfaces/Utility_Utility.IEquivalenceRelation.md)

### Type Aliases

- [FErrorNone](Utility_Utility.md#ferrornone)

### Variables

- [ComponentFactory](Utility_Utility.md#componentfactory)
- [NO\_ERROR](Utility_Utility.md#no_error)

### Functions

- [ClassNameFromArray](Utility_Utility.md#classnamefromarray)
- [ForAll](Utility_Utility.md#forall)
- [GetInverse](Utility_Utility.md#getinverse)
- [HasEquivalenceRelation](Utility_Utility.md#hasequivalencerelation)
- [IsSubset](Utility_Utility.md#issubset)
- [MakeErrorRef](Utility_Utility.md#makeerrorref)
- [MakeRef](Utility_Utility.md#makeref)
- [MergeClassesDeepChecked](Utility_Utility.md#mergeclassesdeepchecked)
- [RemoveElement](Utility_Utility.md#removeelement)
- [SetsEqual](Utility_Utility.md#setsequal)
- [ThereExists](Utility_Utility.md#thereexists)
- [UseSimpleStyles](Utility_Utility.md#usesimplestyles)
- [UseStylesRetVal](Utility_Utility.md#usestylesretval)

## Type Aliases

### FErrorNone

Ƭ **FErrorNone**: ``"NO_ERROR"``

#### Defined in

[Utility/Utility.ts:433](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L433)

## Variables

### ComponentFactory

• `Const` **ComponentFactory**: [`FComponentFactory`](Utility_Utility_Types.md#fcomponentfactory)

Render a React component by supplying the necessary functions.

#### Defined in

[Utility/Utility.ts:39](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L39)

___

### NO\_ERROR

• `Const` **NO\_ERROR**: [`FErrorNone`](Utility_Utility.md#ferrornone) = `"NO_ERROR"`

#### Defined in

[Utility/Utility.ts:431](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L431)

## Functions

### ClassNameFromArray

▸ **ClassNameFromArray**(`...ClassNames`): `string`

Concatenate CSS class names for the JSX `className` property.
This function does not ensure that the names provided are valid CSS class names.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...ClassNames` | (`undefined` \| `string`)[] |

#### Returns

`string`

#### Defined in

[Utility/Utility.ts:200](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L200)

___

### ForAll

▸ **ForAll**\<`T`\>(`Iterable`, `Predicate`, `$FirstMismatch$?`): `boolean`

The existential quantifier "for all" () implemented for any `Iterable`.

$FirstMismatch$ is guaranteed to be defined iff the function returns `false`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Iterable` | `Iterable`\<`T`\> | The iterable that is considered. |
| `Predicate` | (`Item`: `T`) => `boolean` | The predicate for which we check. |
| `$FirstMismatch$?` | [`TRef`](Utility_Utility_Types.md#tref)\<`undefined` \| `T`\> | (Optional) If found, the first `Item` that does not satisfy `Predicate`. |

#### Returns

`boolean`

Whether the `Predicate` holds for all `Item`s in the `Iterable`.

#### Defined in

[Utility/Utility.ts:404](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L404)

___

### GetInverse

▸ **GetInverse**\<`T`, `U`\>(`InObject`, `IsInjectiveRef?`): `Record`\<`U`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `U` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `InObject` | `Record`\<`T`, `U`\> |
| `IsInjectiveRef?` | [`TRef`](Utility_Utility_Types.md#tref)\<`boolean`\> |

#### Returns

`Record`\<`U`, `T`\>

#### Defined in

[Utility/Utility.ts:332](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L332)

___

### HasEquivalenceRelation

▸ **HasEquivalenceRelation**\<`T`\>(`Input`): Input is IEquivalenceRelation\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Input` | `unknown` |

#### Returns

Input is IEquivalenceRelation\<T\>

#### Defined in

[Utility/Utility.ts:240](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L240)

___

### IsSubset

▸ **IsSubset**\<`T`\>(`A`, `B`, `ProperRef?`, `EquivalenceFunction?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `Set`\<`T`\> |
| `B` | `Set`\<`T`\> |
| `ProperRef?` | [`TRef`](Utility_Utility_Types.md#tref)\<`boolean`\> |
| `EquivalenceFunction?` | (`AElem`: `T`, `BElem`: `T`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[Utility/Utility.ts:247](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L247)

___

### MakeErrorRef

▸ **MakeErrorRef**(): [`TRef`](Utility_Utility_Types.md#tref)\<`string`\>

#### Returns

[`TRef`](Utility_Utility_Types.md#tref)\<`string`\>

#### Defined in

[Utility/Utility.ts:435](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L435)

___

### MakeRef

▸ **MakeRef**\<`T`\>(`Input`): [`TRef`](Utility_Utility_Types.md#tref)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Input` | `T` |

#### Returns

[`TRef`](Utility_Utility_Types.md#tref)\<`T`\>

#### Defined in

[Utility/Utility.ts:227](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L227)

___

### MergeClassesDeepChecked

▸ **MergeClassesDeepChecked**\<`TKey`\>(`ParentStyle?`, `...InStyles`): `Record`\<`TKey`, `string`\>

Runs `mergeClasses` for multiple `makeStyle` functions.
Property names must match.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ParentStyle?` | `Record`\<`TKey`, `string`\> |
| `...InStyles` | (`undefined` \| `Record`\<`TKey`, `string`\>)[] |

#### Returns

`Record`\<`TKey`, `string`\>

#### Defined in

[Utility/Utility.ts:154](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L154)

___

### RemoveElement

▸ **RemoveElement**\<`T`\>(`InArray`, `Element`, `EquivalenceFunction?`, `$Error$?`): `T`[]

Remove the first instance of an `Element` from `InArray`.
This does not mutate `InArray`.

If an `EquivalenceFunction` is not provided, `Element` is
checked to see if it implements `IEquivalenceRelation`, then
calls its `Equals` function.  Otherwise, `Array#indexOf` is used instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InArray` | `T`[] | The array to search. |
| `Element` | `T` | The element to remove. |
| `EquivalenceFunction?` | (`Lhs`: `T`, `Rhs`: `T`) => `boolean` | (Optional) The function that defines equivalence. |
| `$Error$?` | [`TRef`](Utility_Utility_Types.md#tref)\<`string`\> | (Optional) A ref to a string that describes the error, if one occurs. |

#### Returns

`T`[]

A copy of `InArray`, with the first instance of `Element` removed, or
the empty array if `Element` was not found.

#### Defined in

[Utility/Utility.ts:455](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L455)

___

### SetsEqual

▸ **SetsEqual**\<`T`\>(`A`, `B`, `EquivalenceFunction?`): `boolean`

Returns whether two sets are equal by checking to see
if the sets are subsets of each other.

If the elements in A implement `IEquivalenceRelation`,
then the `Equals` function of the elements in `A` will
be used to check for equivalence.

Note that if you use the `IEquivalenceRelation` interface,
but define a relation that isn't symmetric, then the result
of this function might change based on which set you pass as
`A`, and which set you pass as `B`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `Set`\<`T`\> | The first set to be compared. |
| `B` | `Set`\<`T`\> | The second set to be compared. |
| `EquivalenceFunction?` | (`A`: `T`, `B`: `T`) => `boolean` | (Optional) The function that defines equivalency. |

#### Returns

`boolean`

Whether the two sets are equal.

#### Defined in

[Utility/Utility.ts:320](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L320)

___

### ThereExists

▸ **ThereExists**\<`T`\>(`Iterable`, `Predicate`, `$FirstMatch$?`): `boolean`

The existential quantifier "there exists" (∃) for any `Iterable`.

$FirstMatch$ is guaranteed to be defined iff the function returns `true`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Iterable` | `Iterable`\<`T`\> | The iterable that is considered. |
| `Predicate` | (`Item`: `T`) => `boolean` | The predicate for which we check. |
| `$FirstMatch$?` | [`TRef`](Utility_Utility_Types.md#tref)\<`undefined` \| `T`\> | (Optional) If found, the `Item` that satisfies the `Predicate`. |

#### Returns

`boolean`

Whether there exists at least one `Item` in `Iterable` that satisfies the `Predicate`.

#### Defined in

[Utility/Utility.ts:368](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L368)

___

### UseSimpleStyles

▸ **UseSimpleStyles**\<`T`\>(`StateUnstyled`, `UseStyles`): `T`

This is useful for components whose styling has no
branching logic, such as the use of `mergeStyles`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `StateUnstyled` | [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`T`\> |
| `UseStyles` | () => `Record`\<`string`, `string`\> |

#### Returns

`T`

#### Defined in

[Utility/Utility.ts:22](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L22)

___

### UseStylesRetVal

▸ **UseStylesRetVal**\<`SState`, `TKey`\>(`StateUnstyled`, `...Styles`): `SState`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SState` | extends [`FStyledState`](../interfaces/Utility_Utility_Types.FStyledState.md) |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `StateUnstyled` | [`TStateUnstyled`](Utility_Utility_Types.md#tstateunstyled)\<`SState`\> |
| `...Styles` | `Record`\<`TKey`, `string`\>[] |

#### Returns

`SState`

#### Defined in

[Utility/Utility.ts:212](https://github.com/GageSorrell/FluentReactKeybinds/blob/b173d2b/Source/Utility/Utility.ts#L212)
