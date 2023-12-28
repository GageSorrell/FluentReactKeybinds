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

export const KeybindDialog = (Props: PKeybindDialog): ReactElement =>
{
    return ComponentFactory.Full(
        Props,
        RenderKeybindDialog,
        UseKeybindDialog,
        UseKeybindDialogStyles
    );
};
