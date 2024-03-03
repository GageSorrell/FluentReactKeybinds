/* File:      RenderKeybindRecorder.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { KeySequence } from "../KeySequence/KeySequence";
import { type ReactElement } from "react";
import { type SKeybindRecorder } from ".";

export const RenderKeybindRecorder =
    ({
        ClassNames,
        CornerDirection,
        Sequence,
        onBlur,
        onKeyDown,
        onKeyUp
    }: SKeybindRecorder): ReactElement =>
{
    return (
        <div
            className={ ClassNames?.Root }
            { ...{ onBlur, onKeyDown, onKeyUp } }
            tabIndex={ 0 }>
            <KeySequence
                { ...{
                    CornerDirection,
                    Sequence
                } }
            />
        </div>
    );
};
