/* File:      KeybindRecorder.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FDomKey, type PKey } from "../Key/Key.Types";
import { type FocusEvent, type KeyboardEvent } from "react";
import { type FStyledState } from "../../Utility";

export type PKeybindRecorder =
    Pick<PKey, "CornerDirection"> &
    {
        /** The sequence of `FDomKey`s that are being recorded. */
        Sequence: FKeySequence;
    } &
    Partial<{
        /** `FDomKey`s that are not accepted. */
        ExclusionList: Array<FDomKey>;

        /** The maximum length of the keybind that can be recorded. */
        MaxLength: number;

        /**
         * This callback provides an addition function, which allows you to clear the sequence upon
         * losing focus.  This is the default behavior; providing your own callback allows you to
         * prevent the sequence from being cleared, for example, upon clicking a button to save
         * the current sequence.
         */
        OnBlur: (Event: FocusEvent, ClearSequence: () => void) => void;

        /** Called when a key is recorded. */
        OnChange: (NewSequence: FKeySequence) => void;

        /**
         * Called when an `FDomKey` is pressed that is in `ExclusionList`.
         * It is guaranteed that this is never called when `OnChange` is called,
         * and vice-versa.
         */
        OnExcludedKeyPressed: (Key: FDomKey) => void;
    }>;

export type FKeySequence = Array<FDomKey>;

export type SKeybindRecorder =
    Omit<PKeybindRecorder, "OnChange"> & 
    FStyledState &
    {
        onBlur: (Event: FocusEvent) => void;
        onKeyDown: (Event: KeyboardEvent) => void;
        onKeyUp: (Event: KeyboardEvent) => void;
    };
