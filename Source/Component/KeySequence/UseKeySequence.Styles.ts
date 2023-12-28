/* File:      UseKeySequence.Styles.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FRootStyles, type TStateUnstyled } from "../../Utility";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { type SKeySequence } from "./";

const UseStyles: FRootStyles = makeStyles({
    Root:
    {
        ...shorthands.borderRadius(tokens.borderRadiusLarge),
        alignItems: "center",
        backgroundColor: tokens.colorNeutralBackground2,
        display: "flex",
        height: "4rem",
        justifyContent: "flex-start",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
    }
});

export const UseKeySequenceStyles = (StateUnstyled: TStateUnstyled<SKeySequence>): SKeySequence =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
