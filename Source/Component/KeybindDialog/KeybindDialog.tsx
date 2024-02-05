/* File:      KeybindDialog.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type PKeybindDialog,
    RenderKeybindDialog,
    UseKeybindDialog, 
    UseKeybindDialogStyles } from ".";
import { ComponentFactory } from "../../Utility";
import { ReactElement } from "react";

/** 
 * A dialog that contains a KeybindRecorder.
 * This should be sufficient for most cases in which
 * you wish to have the user record a keybind.
 */
export const KeybindDialog = (Props: PKeybindDialog): ReactElement =>
{
    return ComponentFactory.Full(
        Props,
        RenderKeybindDialog,
        UseKeybindDialog,
        UseKeybindDialogStyles
    );
};
