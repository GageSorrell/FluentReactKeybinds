/* File:      UseKeySequenceRecorder.Styles.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FRootStyles, type TStateUnstyled } from "../../Utility";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { type SKeySequenceRecorder } from ".";

const UseStyles: FRootStyles = makeStyles({
    Root:
    {
        ":focus":
        {
            ...shorthands.outline(0)
        }
    }
});

export const UseKeySequenceRecorderStyles =
    (StateUnstyled: TStateUnstyled<SKeySequenceRecorder>): SKeySequenceRecorder =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
