/* File:      KeySequenceRecorder.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type PKeySequenceRecorder,
    RenderKeySequenceRecorder,
    UseKeySequenceRecorder,
    UseKeySequenceRecorderStyles } from "./";
import { ComponentFactory } from "../../Utility";
import { ReactElement } from "react";

export const KeySequenceRecorder = (Props: PKeySequenceRecorder): ReactElement =>
{
    return ComponentFactory.Full(
        Props,
        RenderKeySequenceRecorder,
        UseKeySequenceRecorder,
        UseKeySequenceRecorderStyles
    );
};
