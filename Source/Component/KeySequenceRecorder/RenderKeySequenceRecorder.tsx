/* File:      RenderKeySequenceRecorder.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { ReactElement } from "react";
import { type SKeySequenceRecorder } from "./";
import { Key } from "../Key/Key";
import { FDomKeyCode } from "../Key/Key.Types";

export const RenderKeySequenceRecorder = ({ ClassNames, Keys }: SKeySequenceRecorder): ReactElement =>
{

    console.log(`There are ${Keys?.length} keys.`);
    return (
        <div className={ ClassNames?.Root }>
            {
                (Keys || [ ]).map((PressedKey: FDomKeyCode, Index: number): ReactElement =>
                {
                    return <Key Key={ PressedKey } key={ Math.random().toString() } style={{marginLeft: Index > 0 ? "0.25rem" : 0, marginRight: Index < Keys.length - 1 ? "0.25rem" : 0}}/>
                })
            }
        </div>
    );
};
