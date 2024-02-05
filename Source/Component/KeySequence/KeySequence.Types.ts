/* File:      KeySequence.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FDomKey, type PKey } from "../Key";
import { type FStyledState } from "../../Utility";

export type PKeySequence = Pick<PKey, "CornerDirection"> &
{
    Keys: Array<FDomKey>;
};

export type SKeySequence = PKeySequence & FStyledState;
