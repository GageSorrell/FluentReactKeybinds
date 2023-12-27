/* File:      UseKeySequence.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { FRootStyles, TStateUnstyled } from "../../Utility";
import { type SKeySequence } from "./";
import { makeStyles } from "@fluentui/react-components";

const UseStyles: FRootStyles = makeStyles({
    Root:
    {

    }
})

export const UseKeySequenceStyles = (StateUnstyled: TStateUnstyled<SKeySequence>): SKeySequence =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
