/* File:      KeybindRecorder.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type PKeybindRecorder,
    RenderKeybindRecorder,
    UseKeybindRecorder, 
    UseKeybindRecorderStyles } from ".";
import { ComponentFactory } from "../../Utility";
import { ReactElement } from "react";

export const KeybindRecorder = (Props: PKeybindRecorder): ReactElement =>
{
    return ComponentFactory.Full(
        Props,
        RenderKeybindRecorder,
        UseKeybindRecorder,
        UseKeybindRecorderStyles
    );
};
