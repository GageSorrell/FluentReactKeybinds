/* File:      KeySequence.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type PKeySequence, UseKeySequenceStyles, RenderKeySequence } from "./";
import { ComponentFactory } from "../../Utility";
import { ReactElement } from "react";

export const KeySequence = (Props: PKeySequence): ReactElement =>
{
    return ComponentFactory.Stateless(
        Props,
        RenderKeySequence,
        UseKeySequenceStyles
    );
};
