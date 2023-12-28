/* File:      UseKeybindDialog.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type FKeySequence,
    type PKeybindDialog,
    type SKeybindDialog } from ".";
import { type FocusEvent, type KeyboardEvent, useState } from "react";
import { SetsEqual, type TStateUnstyled } from "../../Utility";
import { type FDomKeyCode } from "../Key";

/** The order in which modifier keys should be shown. */
const Order: Array<FDomKeyCode> =
[
    "ControlLeft",
    "ControlRight",
    "ShiftLeft",
    "ShiftRight",
    "AltLeft",
    "AltRight",
    "MetaLeft",
    "MetaRight"
];

// @ts-expect-error This function is unused for now, but might be useful later.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AreKeysOrdered = (Sequence: FKeySequence): boolean =>
{
    const IndexMap: Array<number> = Order.map((ModKey: FDomKeyCode): number =>
    {
        return Sequence.indexOf(ModKey);
    })
    .filter((Index: number) => Index > -1);

    const SortedMap: Array<number> = [ ...IndexMap ].sort((A, B) => A - B);

    let FoundMismatch: boolean = false;
    SortedMap.forEach((Element, Index) =>
    {
        if (Element !== IndexMap[Index])
        {
            FoundMismatch = true;
        }
    });

    return FoundMismatch;
};

const MakeSequenceOrdered = (Sequence: FKeySequence): FKeySequence =>
{
    const SequenceSansMods: FKeySequence = [ ];
    const SequenceMods: FKeySequence = [ ];
    Sequence.forEach((Key: FDomKeyCode): void =>
    {
        if (Order.includes(Key))
        {
            SequenceMods.push(Key);
        }
        else
        {
            SequenceSansMods.push(Key);
        }
    });

    const OrderedMods: Array<FDomKeyCode> = [ ...Order ];
    const UnusedMods: Array<FDomKeyCode> = [ ];
    OrderedMods.forEach((Mod: FDomKeyCode) =>
    {
        if (!SequenceMods.includes(Mod))
        {
            UnusedMods.push(Mod);
        }
    });

    UnusedMods.forEach((Mod) =>
    {
        const Index: number = OrderedMods.indexOf(Mod);
        OrderedMods.splice(Index, 1);
    });

    return OrderedMods.concat(SequenceSansMods);
};

export const UseKeybindDialog =
    ({ CornerDirection, OnChange }: PKeybindDialog): TStateUnstyled<SKeybindDialog> =>
{
    const [ Keys, SetKeys ] = useState<Array<FDomKeyCode>>([ ]);

    /* We use KeysUnpressed to learn when the user has taken all fingers *
     * off of the keyboard, then starts recording a new keybind.         */
    const [ KeysUnpressed, SetKeysUnpressed ] = useState<FKeySequence>([ ]);

    const onKeyDown = (Event: KeyboardEvent<Element>) =>
    {
        Event.preventDefault();

        SetKeys(Old =>
        {
            const KeyCode: FDomKeyCode = Event.code as FDomKeyCode;

            const DownSet: Set<FDomKeyCode> = new Set<FDomKeyCode>(Old);
            const UpSet: Set<FDomKeyCode> = new Set<FDomKeyCode>(KeysUnpressed);

            const FingersLifted: boolean = SetsEqual(DownSet, UpSet) && KeysUnpressed.length > 0;

            if (FingersLifted)
            {
                SetKeysUnpressed(_Old => [ ]);
            }

            const KeyIsHeld: boolean = KeyCode === Old[Old.length - 1];

            const NewSequence: FKeySequence = FingersLifted
                ? [ KeyCode ]
                : [ ...(Old.concat(KeyIsHeld ? [ ] : [ KeyCode ])) ];

            const OrderedSequence: FKeySequence = MakeSequenceOrdered(NewSequence);

            return OrderedSequence;
        });
    };

    const onKeyUp = (Event: KeyboardEvent<Element>) =>
    {
        // SetKeysUnpressed(Old =>
        // {
        //     const KeyCode: FDomKeyCode = Event.code as FDomKeyCode;
        //     if (KeyCode === Keys[Keys.length - 1] && Keys.length > 1)
        //     {
        //         SetKeys(OldKeys =>
        //         {
        //             const NewKeysDown: FKeySequence = [ ...OldKeys ];
        //             NewKeysDown.pop();
        //             return NewKeysDown;
        //         });
        //         return [ ...Old ];
        //     }
        //     else
        //     {
        //         return [ ...Old, KeyCode ];
        //     }
        // });
        SetKeysUnpressed(Old => [ ...Old, Event.code as FDomKeyCode ]);
    };

    const onBlur = (_Event: FocusEvent) =>
    {
        SetKeys(_Old => [ ]);
        SetKeysUnpressed(_Old => [ ]);
    };

    return {
        CornerDirection,
        Keys,
        OnChange,
        onBlur,
        onKeyDown,
        onKeyUp
    };
};
