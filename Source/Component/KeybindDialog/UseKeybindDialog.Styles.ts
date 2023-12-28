/* File:      UseKeybindDialog.Styles.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FRootStyles, type TStateUnstyled } from "../../Utility";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { type SKeybindDialog } from ".";

const UseStyles: FRootStyles = makeStyles({
    Root:
    {
        ":focus":
        {
            ...shorthands.outline(0)
        }
    }
});

export const UseKeybindDialogStyles =
    (StateUnstyled: TStateUnstyled<SKeybindDialog>): SKeybindDialog =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
