/* File:      KeySequenceRecorder.Types.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { FDomKeyCode } from "../Key/Key.Types";
import { type FStyledState } from "../../Utility";

export type PKeySequenceRecorder =
{
    OnChange: (Keys: Array<FDomKeyCode>) => void;
};

export type FKeySequence = Array<FDomKeyCode>;

export type SKeySequenceRecorder = PKeySequenceRecorder & FStyledState &
{
    Keys: FKeySequence;
    onKeyDown: (Event: KeyboardEvent) => void;
    onKeyUp: (Event: KeyboardEvent) => void;
};
