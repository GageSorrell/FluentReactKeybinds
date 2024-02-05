/* File:      UseKeybindRecorder.Styles.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FRootStyles, type TStateUnstyled } from "../../Utility";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { type SKeybindRecorder } from ".";

const UseStyles: FRootStyles = makeStyles({
    Root:
    {
        ":focus":
        {
            ...shorthands.outline(0)
        }
    }
});

export const UseKeybindRecorderStyles =
    (StateUnstyled: TStateUnstyled<SKeybindRecorder>): SKeybindRecorder =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
