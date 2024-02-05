/* File:      Key.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type PKey,
    RenderKey,
    UseKey,
    UseKeyStyles } from "./";
import { ComponentFactory } from "../../Utility";
import { ReactElement } from "react";

/**
 * The representation of a single key.
 */
export const Key = (Props: PKey): ReactElement =>
{
    return ComponentFactory.Full(
        Props,
        RenderKey,
        UseKey,
        UseKeyStyles
    );
};
