/* File:      UseKey.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FKeyStyles, type SKey } from "./";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { TStateUnstyled } from "../../Utility";

const UseStyles: FKeyStyles = makeStyles({
    FluentIcon:
    {

    },
    Image:
    {

    },
    Root:
    {
        ...shorthands.borderRadius(tokens.borderRadiusLarge),
        alignItems: "center",
        backgroundColor: tokens.colorNeutralForeground2BrandHover,
        boxShadow: tokens.shadow4,
        color: "#FFFFFF",
        display: "flex",
        fontFamily: "Segoe UI",
        fontSize: "1.25rem",
        height: "3.25rem",
        justifyContent: "center",
        minWidth: "1.25rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },
    ShortCaps:
    {
        fontSize: "1rem",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    StringContainer:
    {
        alignItems: "baseline",
        display: "flex",
        justifyContent: "center"
    }
})

export const UseKeyStyles = (StateUnstyled: TStateUnstyled<SKey>): SKey =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
