/* File:      Utility.Types.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type CSSProperties,
    ReactElement,
    ReactNode } from "react";

export type FRootStyles = () => { Root: string; };

/**
 * The return value of `makeStyles` for `T` union
 * of class names.
 */
export type TStyles<T extends string> = () => { [ Index in T ]: string };

export type FStylable =
{
    style: CSSProperties;
};

export type TRef<T> =
{
    Ref: T;
};

/** Most states should be an intersection of this type. */
export interface FStyledState
{
    ClassNames?: Record<string, string>;
}

export type PParentComponent = FStyledState &
{
    children?: ReactNode;
};

export type TComplement<T extends U, U> =
{
    [ K in Exclude<keyof T, keyof U> ]: T[K]
};

/** Contains the optional properties of `T`, but they are now required. */
export type TDefault<T, TKeys extends keyof T = keyof T> =
{
    [ Key in TKeys ]-?: undefined extends T[Key]
        ? T[Key]
        : never
};

/** Make specific properties partial. */
export type TPartialSubsetFromKeys<T, TKeys extends keyof T> =
    Omit<T, TKeys> &
    Partial<Pick<T, TKeys>>;

export type TPartialSubset<T extends U, U> =
    Omit<T, keyof U> &
    Partial<Pick<T, keyof U>>;

/**
 * Sometimes the Props are the State, so we do not
 * have a separate type.  Thus, we use a conditional type
 * here in case the template parameter does not
 * contain (new) styles.
 */
export type TStateUnstyled<SState> =
    SState extends FStyledState
        ? TPartialSubset<SState, FStyledState>
        : SState;

/** A type of state that is the Props, equipped with styling. */
export type TStyledProps<PProps> = PProps & FStyledState;

export type TComponentRenderFunction<SState> =
{
    (State: SState): ReactElement;
    displayName?: string;
};

export type FComponentFactory =
{
    Full:
        <PProps, SState extends FStyledState>(
            Props: PProps,
            RenderFunction: TComponentRenderFunction<SState>,
            UseStateFunction: (Props: PProps) => TStateUnstyled<SState>,
            UseStylesFunction: (StateUnstyled: TStateUnstyled<SState>) => SState,
            DisplayName?: string
        ) => ReactElement;
    NoProps:
    {
        Full:
            <SState extends FStyledState>(
                RenderFunction: TComponentRenderFunction<SState>,
                UseStateFunction: () => TStateUnstyled<SState>,
                UseStylesFunction: (StateUnstyled: TStateUnstyled<SState>) => SState,
                DisplayName?: string
            ) => ReactElement;
        Stateless:
            (
                RenderFunction: TComponentRenderFunction<FStyledState>,
                UseStylesFunction: () => FStyledState,
                DisplayName?: string
            ) => ReactElement;
        Unstyled:
            <SState>(
                RenderFunction: TComponentRenderFunction<SState>,
                UseStateFunction: () => SState,
                DisplayName?: string
            ) => ReactElement;
    };
    Stateless:
        <PProps>(
            Props: PProps,
            RenderFunction: TComponentRenderFunction<TStyledProps<PProps>>,
            UseStylesFunction: (Props: PProps) => TStyledProps<PProps>,
            DisplayName?: string
        ) => ReactElement;
    Unstyled:
        <PProps extends Record<string, unknown>, SState>(
            Props: PProps,
            RenderFunction: TComponentRenderFunction<SState>,
            UseStateFunction: (Props: PProps) => SState,
            DisplayName?: string
        ) => ReactElement;
};
