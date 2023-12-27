/* File:      UseKeySequenceRecorder.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { FRootStyles, TStateUnstyled } from "../../Utility";
import { type SKeySequenceRecorder } from "./";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

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
})

export const UseKeySequenceRecorderStyles = (StateUnstyled: TStateUnstyled<SKeySequenceRecorder>): SKeySequenceRecorder =>
{
    return {
        ...StateUnstyled,
        ClassNames: UseStyles()
    };
};
