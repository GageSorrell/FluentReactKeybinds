/* File:      KeybindDialog.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type DialogOpenChangeData,
    type DialogOpenChangeEvent } from "@fluentui/react-components";
import { type FDomKey, type PKey } from "../Key/Key.Types";
import { type ReactElement, type RefObject} from "react";
import { type FStyledState } from "../../Utility";
import { type PKeybindRecorder } from "../KeybindRecorder";

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

        onSave?: (NewSequence: Array<FDomKey>) => void;

        open: boolean;

        /** If defined, this is called by OnCancel and OnSave. */
        setOpen?: (Old: boolean) => void;
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
        SaveButtonRef: RefObject<HTMLButtonElement>;
    } &
    FStyledState;
