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
        MaxLength?: number;
        OnChange?: (Keys: Array<FDomKey>) => void;
        OnExcludedKeyPressed?: (Key: FDomKey) => void;
        ExclusionList?: Array<FDomKey>;
    }>;

export type FKeySequence = Array<FDomKey>;

export type SKeybindRecorder = Pick<PKeybindRecorder, "CornerDirection"> & FStyledState &
{
    Keys: FKeySequence;
    onBlur: (Event: FocusEvent) => void;
    onKeyDown: (Event: KeyboardEvent) => void;
    onKeyUp: (Event: KeyboardEvent) => void;
};
