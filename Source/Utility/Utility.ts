/* File:      Utility.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    TRef,
    type FComponentFactory,
    type FStyledState,
    type TComponentRenderFunction,
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
