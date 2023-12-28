/* File:      KeySequenceRecorder.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FDomKeyCode, type PKey } from "../Key/Key.Types";
import { type FocusEvent, type KeyboardEvent } from "react";
import { type FStyledState } from "../../Utility";

export type PKeySequenceRecorder = Pick<PKey, "CornerDirection"> &
{
    OnChange?: (Keys: Array<FDomKeyCode>) => void;
    OnExcludedKeyPressed?: (Key: FDomKeyCode) => void;
    ExclusionList?: Array<FDomKeyCode>;
};

export type FKeySequence = Array<FDomKeyCode>;

export type SKeySequenceRecorder = PKeySequenceRecorder & FStyledState &
{
    Keys: FKeySequence;
    onBlur: (Event: FocusEvent) => void;
    onKeyDown: (Event: KeyboardEvent) => void;
    onKeyUp: (Event: KeyboardEvent) => void;
};
