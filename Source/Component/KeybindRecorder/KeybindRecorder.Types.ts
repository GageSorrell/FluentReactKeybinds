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
    Partial<{
        /** The sequence of `FDomKey`s that are being recorded. */
        Sequence: FKeySequence;

        /** The maximum length of the keybind that can be recorded. */
        MaxLength: number;

        /** Called when a key is recorded. */
        OnChange: (Keys: FKeySequence) => void;

        /**
         * Called when an `FDomKey` is pressed that is in `ExclusionList`.
         * It is guaranteed that this is never called when `OnChange` is called,
         * and vice-versa.
         */
        OnExcludedKeyPressed: (Key: FDomKey) => void;

        /** `FDomKey`s that are not accepted. */
        ExclusionList: Array<FDomKey>;
    }>;

export type FKeySequence = Array<FDomKey>;

export type SKeybindRecorder =
    PKeybindRecorder & 
    FStyledState &
    {
        onBlur: (Event: FocusEvent) => void;
        onKeyDown: (Event: KeyboardEvent) => void;
        onKeyUp: (Event: KeyboardEvent) => void;
    };
