/* File:      KeybindDialog.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type DialogOpenChangeData,
    type DialogOpenChangeEvent } from "@fluentui/react-components";
import { type FStyledState } from "../../Utility";
import { type PKey } from "../Key/Key.Types";
import { type PKeybindRecorder } from "../KeybindRecorder";
import { type ReactElement } from "react";

export type FKeybindDialogOpenData = DialogOpenChangeData &
{
    Type: FKeybindOpenState
};

/**
 * The trichotomy of the dialog's open/closed state.
 */
export type FKeybindOpenState =
    /** The dialog has been opened. */
    | "Opened"
    /** The dialog has been closed by clicking "Save". */
    | "Success"
    /** The dialog has been closed by clicking "Cancel" or by hitting `Escape`. */
    | "Canceled";

export type PKeybindDialog =
    Pick<PKey,
        | "BackgroundColor"
        | "CornerDirection"
        | "Color"> &
    PKeybindRecorder &
    {
        /** The body of text within the dialog. */
        Content: string | ReactElement;

        /** The title of the dialog. */
        Title: string;

        onCancel?: () => void;

        /**
         * The Fluent Dialog's `onOpenChange` callback, with an additional
         * property `Type` on the `Data` argument, which represents the
         * user's action.
         * 
         * @see @type{FKeybindDialogOpenData}
         */
        onOpenChange?: (Event: DialogOpenChangeEvent, Data: FKeybindDialogOpenData) => void;

        onSave?: () => void;

        open: boolean;

        /** If defined, this is called by OnCancel and OnSave. */
        setOpen?: (old: boolean) => boolean;
    };

type FFluentDialogOpenChangeEventHandler =
{
    onOpenChange: (Event: DialogOpenChangeEvent, Data: DialogOpenChangeData) => void;
};

export type SKeybindDialog =
    Omit<
        PKeybindDialog,
        | "MaxLength"
        | "onOpenChange"
        | "setOpen"> &
    FFluentDialogOpenChangeEventHandler &
    {
        OnCancel: () => void;
        OnSave: () => void;
    } &
    FStyledState;
