/* File:      Utility.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type FComponentFactory,
    type FStyledState,
    type TComponentRenderFunction,
    type TRef,
    type TStateUnstyled,
    type TStyledProps } from "./Utility.Types";
import { ReactElement } from "react";
import { mergeClasses } from "@fluentui/react-components";

/**
 * This is useful for components whose styling has no
 * branching logic, such as the use of `mergeStyles`.
 */
export const UseSimpleStyles =
<T extends FStyledState>(
    StateUnstyled: TStateUnstyled<T>,
    UseStyles: () => Record<string, string>
): T =>
{
    const State: T =
    {
        ...StateUnstyled,
        ClassNames: UseStyles()
    } as T;

    return State;
};

/**
 * Render a React component by supplying the necessary functions.
 */
export const ComponentFactory: FComponentFactory =
{
    Full:
        <PProps, SState extends FStyledState>(
            Props: PProps,
            RenderFunction: TComponentRenderFunction<SState>,
            UseStateFunction: (Props: PProps) => TStateUnstyled<SState>,
            UseStylesFunction: (StateUnstyled: TStateUnstyled<SState>) => SState,
            DisplayName?: string
        ): ReactElement =>
        {
            const StateUnstyled: TStateUnstyled<SState> = UseStateFunction(Props);
            const State: SState = UseStylesFunction(StateUnstyled);

            if (DisplayName)
            {
                RenderFunction.displayName = DisplayName;
            }

            return RenderFunction(State);
        },
    NoProps:
    {
        Full:
            <SState extends FStyledState>(
                RenderFunction: TComponentRenderFunction<SState>,
                UseStateFunction: () => TStateUnstyled<SState>,
                UseStylesFunction: (StateUnstyled: TStateUnstyled<SState>) => SState,
                DisplayName?: string
            ): ReactElement =>
            {
                const StateUnstyled: TStateUnstyled<SState> = UseStateFunction();
                const State: SState = UseStylesFunction(StateUnstyled);

                if (DisplayName)
                {
                    RenderFunction.displayName = DisplayName;
                }

                return RenderFunction(State);
            },
        Stateless:
            (
                RenderFunction: TComponentRenderFunction<FStyledState>,
                UseStylesFunction: () => FStyledState,
                DisplayName?: string
            ): ReactElement =>
            {
                const State: FStyledState = UseStylesFunction();

                if (DisplayName)
                {
                    RenderFunction.displayName = DisplayName;
                }

                return RenderFunction(State);
            },
        Unstyled:
            <SState>(
                RenderFunction: TComponentRenderFunction<SState>,
                UseStateFunction: () => SState,
                DisplayName?: string
            ): ReactElement =>
            {
                const State: SState = UseStateFunction();

                if (DisplayName)
                {
                    RenderFunction.displayName = DisplayName;
                }

                return RenderFunction(State);
            }
    },
    Stateless:
        <PProps>(
            Props: PProps,
            RenderFunction: TComponentRenderFunction<TStyledProps<PProps>>,
            UseStylesFunction: (Props: PProps) => TStyledProps<PProps>,
            DisplayName?: string
        ): ReactElement =>
        {
            const State: TStyledProps<PProps> = UseStylesFunction(Props);

            if (DisplayName)
            {
                RenderFunction.displayName = DisplayName;
            }

            return RenderFunction(State);
        },
    Unstyled:
        <PProps extends Record<string, unknown>, SState>(
            Props: PProps,
            RenderFunction: TComponentRenderFunction<SState>,
            UseStateFunction: (Props: PProps) => SState,
            DisplayName?: string
        ): ReactElement =>
        {
            const State: SState = UseStateFunction(Props);

            if (DisplayName)
            {
                RenderFunction.displayName = DisplayName;
            }

            return RenderFunction(State);
        }
};

/**
 * Runs `mergeClasses` for multiple `makeStyle` functions.
 * Property names must match.
 */
export const MergeClassesDeepChecked =
<TKey extends string = string>
(
    ParentStyle?: Record<TKey, string>,
    ...InStyles: Array<Record<TKey, string> | undefined>
): Record<TKey, string> =>
{
    const Styles: Array<Record<TKey, string>> = [ ParentStyle, ...InStyles ]
    .filter(Style => Style !== undefined) as Array<Record<TKey, string>>;

    const OutClassNames: Partial<Record<TKey, string>> = { };

    const Keys: Array<TKey> = Object.keys(Styles[0]) as Array<TKey>;

    let HomogenousStyles: boolean = true;
    Keys.forEach((Key: TKey): void =>
    {
        Styles.forEach((Style: Record<TKey, string>): void =>
        {
            if (Style?.[Key] === undefined)
            {
                HomogenousStyles = false;
            }
        });
    });

    if (!HomogenousStyles)
    {
        throw new Error("Styles were attempted to be merged, but are not homogenous.");
    }

    Keys.forEach((Key: TKey): void =>
    {
        const KeyClassNames: Array<string | undefined> = Styles
            .map(Style => Style?.[Key])
            .filter(KeyClassName => KeyClassName !== undefined);

        OutClassNames[Key] = mergeClasses(...KeyClassNames);
    });

    return OutClassNames as Record<TKey, string>;
};

/**
 * Concatenate CSS class names for the JSX `className` property.
 * This function does not ensure that the names provided are valid CSS class names.
 */
export const ClassNameFromArray = (...ClassNames: Array<string | undefined>): string =>
{
    const FilteredClassNames: Array<string> = ClassNames
    .filter((Name: string | undefined): boolean =>
    {
        return Name !== undefined;
    }) as Array<string>;

    return FilteredClassNames.join(" ");
};

export const UseStylesRetVal =
<SState extends FStyledState,
TKey extends string = string>(
    StateUnstyled: TStateUnstyled<SState>,
    ...Styles: Array<Record<TKey, string>>
): SState =>
{
    return {
        ...StateUnstyled,
        ClassNames: MergeClassesDeepChecked(
            ...Styles,
            StateUnstyled?.ClassNames
        )
    } as SState;
};

export const MakeRef = <T>(Input: T): TRef<T> =>
{
    return {
        Ref: Input
    };
};

export interface IEquivalenceRelation<T>
{
    Equals: (Other: T) => boolean;
}

export const HasEquivalenceRelation =
    <T>(Input: unknown): Input is IEquivalenceRelation<T> =>
{
    const CastInput: IEquivalenceRelation<T> = Input as IEquivalenceRelation<T>;
    return CastInput.Equals !== undefined && typeof CastInput.Equals === "function";
};

export const IsSubset =
    <T>(
        A: Set<T>,
        B: Set<T>,
        ProperRef?: TRef<boolean>,
        EquivalenceFunction?: (AElem: T, BElem: T) => boolean): boolean =>
{
    let FoundAtLeastOneElement: boolean = false;
    let FoundAllElements: boolean = true;

    A.forEach((AElement: T): void =>
    {
        let FoundMatch: boolean = false;

        B.forEach((BElement: T): void =>
        {
            if (FoundMatch)
            {
                return;
            }
            else
            {
                if (EquivalenceFunction !== undefined)
                {
                    FoundMatch = EquivalenceFunction(AElement, BElement);
                }
                else if (HasEquivalenceRelation(AElement))
                {
                    FoundMatch = AElement.Equals(BElement);
                }
                else
                {
                    FoundMatch = AElement === BElement;
                }
            }
        });

        if (FoundMatch)
        {
            FoundAtLeastOneElement = true;
        }
        else
        {
            FoundAllElements = false;
        }
    });

    if (ProperRef)
    {
        ProperRef.Ref = FoundAllElements;
    }
    
    return FoundAtLeastOneElement;
};

/**
 * Returns whether two sets are equal by checking to see
 * if the sets are subsets of each other.
 * 
 * If the elements in A implement `IEquivalenceRelation`,
 * then the `Equals` function of the elements in `A` will
 * be used to check for equivalence.
 * 
 * Note that if you use the `IEquivalenceRelation` interface,
 * but define a relation that isn't symmetric, then the result
 * of this function might change based on which set you pass as
 * `A`, and which set you pass as `B`.
 * 
 * @param A The first set to be compared.
 * @param B The second set to be compared.
 * @param EquivalenceFunction (Optional) The function that defines equivalency.
 * @returns Whether the two sets are equal.
 */
export const SetsEqual =
    <T>(
        A: Set<T>,
        B: Set<T>,
        EquivalenceFunction?: (A: T, B: T) => boolean): boolean =>
{
    const ProperRef: TRef<boolean> = MakeRef<boolean>(false);

    IsSubset(A, B, ProperRef, EquivalenceFunction);

    return ProperRef.Ref;
};

export const GetInverse = <T extends string | symbol | number, U extends string | symbol | number>(InObject: Record<T, U>, IsInjectiveRef?: TRef<boolean>): Record<U, T> =>
{
    const OutObject: Partial<Record<U, T>> = { };
    let FoundDoubleEntry: boolean = false;

    Object.entries(InObject).forEach(([ InT, InU ]): void =>
    {
        const T: T = InT as T;
        const U: U = InU as U;

        if (Object.keys(OutObject).includes(U.toString()))
        {
            FoundDoubleEntry = true;
        }

        OutObject[U] = T;
    });

    if (IsInjectiveRef)
    {
        IsInjectiveRef.Ref = !FoundDoubleEntry;
    }

    return OutObject as Record<U, T>;
};

/**
 * The existential quantifier "there exists" (∃) for any `Iterable`.
 * 
 * $FirstMatch$ is guaranteed to be defined iff the function returns `true`.
 * 
 * @param Iterable The iterable that is considered.
 * @param Predicate The predicate for which we check.
 * @param $FirstMatch$ (Optional) If found, the `Item` that satisfies the `Predicate`.
 * @returns Whether there exists at least one `Item` in `Iterable` that satisfies the `Predicate`.
 */
export const ThereExists = <T>(
    Iterable: Iterable<T>,
    Predicate: (Item: T) => boolean,
    $FirstMatch$?: TRef<T | undefined>): boolean =>
{
    let FoundMatch: boolean = false;
    for (const Item of Iterable)
    {
        if (FoundMatch)
        {
            break;
        }
        else if (Predicate(Item))
        {
            FoundMatch = true;

            if ($FirstMatch$ !== undefined)
            {
                $FirstMatch$.Ref = Item;
            }
        }
    }
    
    return FoundMatch;
};

/**
 * The existential quantifier "for all" () implemented for any `Iterable`.
 * 
 * $FirstMismatch$ is guaranteed to be defined iff the function returns `false`.
 * 
 * @param Iterable The iterable that is considered.
 * @param Predicate The predicate for which we check.
 * @param $FirstMismatch$ (Optional) If found, the first `Item` that does not satisfy `Predicate`.
 * @returns Whether the `Predicate` holds for all `Item`s in the `Iterable`.
 */
export const ForAll = <T>(
    Iterable: Iterable<T>,
    Predicate: (Item: T) => boolean,
    $FirstMismatch$?: TRef<T | undefined>): boolean =>
{
    let FoundMismatch = false;
    
    for (const Item of Iterable)
    {
        if (FoundMismatch)
        {
            break;
        }
        else if (!Predicate(Item))
        {
            FoundMismatch = true;

            if ($FirstMismatch$ !== undefined)
            {
                $FirstMismatch$.Ref = Item;
            }
        }
    }

    return !FoundMismatch;
};

export const NO_ERROR: FErrorNone = "NO_ERROR";

export type FErrorNone = "NO_ERROR";

export const MakeErrorRef = (): TRef<string> =>
{
    return MakeRef<string>(NO_ERROR);
};

/**
 * Remove the first instance of an `Element` from `InArray`.
 * This does not mutate `InArray`.
 * 
 * If an `EquivalenceFunction` is not provided, `Element` is
 * checked to see if it implements `IEquivalenceRelation`, then
 * calls its `Equals` function.  Otherwise, `Array#indexOf` is used instead.
 * 
 * @param InArray The array to search.
 * @param Element The element to remove.
 * @param EquivalenceFunction (Optional) The function that defines equivalence.
 * @param $Error$ (Optional) A ref to a string that describes the error, if one occurs.
 * @returns A copy of `InArray`, with the first instance of `Element` removed, or
 * the empty array if `Element` was not found.
 */
export const RemoveElement = <T>(
    InArray: Array<T>,
    Element: T,
    EquivalenceFunction?: (Lhs: T, Rhs: T) => boolean,
    $Error$?: TRef<string>): Array<T> =>
{
    let IndexToRemove: number = -1;

    if (EquivalenceFunction)
    {
        const $Match$: TRef<T | undefined> = MakeRef<T | undefined>(undefined);
        if (ThereExists(InArray, (Other: T) => EquivalenceFunction(Element, Other), $Match$))
        {
            IndexToRemove = InArray.indexOf($Match$.Ref as T);
        }
    }
    else if (HasEquivalenceRelation(Element))
    {
        const $Match$: TRef<T | undefined> = MakeRef<T | undefined>(undefined);
        if (ThereExists(InArray, (Other: T) => Element.Equals(Other), $Match$))
        {
            IndexToRemove = InArray.indexOf($Match$.Ref as T);
        }
    }
    else
    {
        IndexToRemove = InArray.indexOf(Element);
    }

    if (IndexToRemove === -1 && $Error$ !== undefined)
    {
        $Error$.Ref = "RemoveElement was called, but the given Element was not found.";

        return [ ];
    }
    else
    {
        const OutArray: Array<T> = [ ...InArray ];
        OutArray.splice(IndexToRemove, 1);
        return OutArray;
    }
};
