/* File:      UseKeySequenceRecorder.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FDomKeyCode } from "../Key";
import { type PKeySequenceRecorder, type SKeySequenceRecorder } from "./";
import { type TStateUnstyled } from "../../Utility";
import { useState } from "react";

export const UseKeySequenceRecorder =
    ({ OnChange }: PKeySequenceRecorder): TStateUnstyled<SKeySequenceRecorder> =>
{

    const [ Keys, SetKeys ] = useState<Array<FDomKeyCode>>([ ]);

    const [ KeysUnpressed, SetKeysUnpressed ] = useState<Array<FDomKeyCode>>([ ]);

    const onKeyDown = (Event: KeyboardEvent) =>
    {
        SetKeys((Old: Array<FDomKeyCode>): Array<FDomKeyCode> =>
        {
            const New: Array<FDomKeyCode> = [ ...Old ];
            const NewKeyCode: FDomKeyCode = Event.code as FDomKeyCode;
            New.push(NewKeyCode);

            return New;
        });     
    };

    const onKeyUp = (Event: KeyboardEvent) =>
    {
        SetKeys((Old: Array<FDomKeyCode>): Array<FDomKeyCode> =>
        {
            const New: Array<FDomKeyCode> = [ ...Old ];
            const CodeToRemove: FDomKeyCode = Event.code as FDomKeyCode;
            const Index: number = New.indexOf(CodeToRemove);
            New.splice(Index, 1);

            return New;
        });     
    };

    return {
        Keys,
        OnChange,
        onKeyDown,
        onKeyUp
    };
};
