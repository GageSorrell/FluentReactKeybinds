/* File:      KeySequence.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { ComponentFactory } from "../../Utility";
import { UseKeySequence, type PKeySequence, UseKeySequenceStyles, RenderKeySequence } from "./";
import { ReactElement } from "react";

export const KeySequence = (Props: PKeySequence): ReactElement =>
{
    return ComponentFactory.Full(Props, RenderKeySequence, UseKeySequence, UseKeySequenceStyles);
};
