/* File:      Key.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type PKey, RenderKey, UseKey, UseKeyStyles } from "./";
import { ComponentFactory } from "../../Utility";
import { ReactElement } from "react";

export const Key = (Props: PKey): ReactElement =>
{
    return ComponentFactory.Full(Props, RenderKey, UseKey, UseKeyStyles);
};
