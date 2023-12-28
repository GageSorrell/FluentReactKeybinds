/* File:      RenderKeySequenceRecorder.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { KeySequence } from "../KeySequence/KeySequence";
import { type ReactElement } from "react";
import { type SKeySequenceRecorder } from "./";

export const RenderKeySequenceRecorder =
    ({
        ClassNames,
        CornerDirection,
        Keys,
        onBlur,
        onKeyDown,
        onKeyUp
    }: SKeySequenceRecorder): ReactElement =>
{
    return (
        <div { ...{ onBlur, onKeyDown, onKeyUp } } tabIndex={ 0 } className={ ClassNames?.Root }>
            <KeySequence
                { ...{
                    CornerDirection,
                    Keys
                } }
            />
        </div>
    );
};
