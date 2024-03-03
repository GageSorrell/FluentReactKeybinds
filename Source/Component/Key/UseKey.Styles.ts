/* File:      UseKey.Styles.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type FKeyClassNames,
    type FKeyDisplay,
    type FKeyStyles,
    type SKey } from "./";
import { MergeClassesDeepChecked, TStateUnstyled } from "../../Utility";
import {
    makeStyles,
    shorthands,
    tokens } from "@fluentui/react-components";

const UseStylesCommon: FKeyStyles = makeStyles({
    Root:
    {
        alignItems: "center",
        backgroundColor: tokens.colorNeutralForeground2BrandHover,
        boxSizing: "border-box",
        color: "#FFFFFF",
        display: "flex",
        fontFamily: "Segoe UI",
        justifyContent: "center",
        position: "relative",
        userSelect: "none"
    },
    ShortCaps:
    {
        fontWeight: "500",
        textTransform: "uppercase"
    },
    StringContainer:
    {
        alignItems: "baseline",
        display: "flex",
        justifyContent: "center"
    }
});

const UseStylesFull: FKeyStyles = makeStyles({
    Root:
    {
        ...shorthands.borderRadius(tokens.borderRadiusLarge),
        boxShadow: tokens.shadow4,
        fontSize: "1rem",
        height: "3rem",
        minWidth: "3rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },
    ShortCaps:
    {
        fontSize: "1rem"
    },
    StringContainer:
    {
        fontSize: "1rem"
    }
});

const UseStylesMini: FKeyStyles = makeStyles({
    Root:
    {
        ...shorthands.borderRadius(tokens.borderRadiusLarge),
        boxShadow: tokens.shadow4,
        fontSize: "1rem",
        height: "3rem",
        minWidth: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },
    ShortCaps:
    {
        fontSize: "1rem"
    },
    StringContainer: { }
});

const UseStylesInline: FKeyStyles = makeStyles({
    Root:
    {
        ...shorthands.borderRadius(tokens.borderRadiusMedium),
        ...shorthands.borderColor(tokens.colorNeutralForeground3Selected),
        ...shorthands.borderStyle("solid"),
        ...shorthands.borderWidth("1px"),
        backgroundColor: "#00000000",
        color: tokens.colorNeutralForeground3Selected,
        display: "inline-flex",
        fontSize: "0.8rem",
        fontWeight: "400",
        height: "1.5rem",
        minWidth: "0.5rem",
        marginLeft: "0.25rem",
        marginRight: "0.25rem",
        paddingLeft: "0.25rem",
        paddingRight: "0.25rem"
    },
    ShortCaps:
    {
        fontSize: "0.5rem",
        fontWeight: "400"
    },
    StringContainer: { }
});

export const UseKeyStyles = (StateUnstyled: TStateUnstyled<SKey>): SKey =>
{
    let { Display } = StateUnstyled;
    // console.log(Display);
    Display = Display || "Full";
    const StyleMap: Map<FKeyDisplay, FKeyStyles> = new Map<FKeyDisplay, FKeyStyles>([
        [ "Full", UseStylesFull ],
        [ "Inline", UseStylesInline ],
        [ "Mini", UseStylesMini ]
    ]);

    // console.log(`Display is ${Display}`);

    const Styles = MergeClassesDeepChecked<FKeyClassNames>(
        UseStylesCommon(),
        (StyleMap.get(Display) as FKeyStyles)()
    );

    return {
        ...StateUnstyled,
        ClassNames: Styles
    };
};
