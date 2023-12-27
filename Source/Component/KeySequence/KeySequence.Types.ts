/* File:      KeySequence.Types.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { FStyledState } from "../../Utility";

/** @TODO Add property for table of custom codes/keys for extending functionality. */
export type PKeySequence = object;

export type SKeySequence = PKeySequence & FStyledState & object;
