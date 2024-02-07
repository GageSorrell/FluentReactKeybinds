/* File:      UseKeybindDialog.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    type DialogOpenChangeData,
    type DialogOpenChangeEvent } from "@fluentui/react-components";
import {
    FKeybindDialogOpenData,
    FKeybindOpenState,
    type PKeybindDialog,
    type SKeybindDialog } from ".";
import { type TStateUnstyled } from "../../Utility";
import { useState } from "react";

export const UseKeybindDialog =
    ({
        Content,
        CornerDirection,
        OnChange,
        Title,
        onCancel,
        onOpenChange,
        onSave,
        open = false,
        setOpen
    }: PKeybindDialog): TStateUnstyled<SKeybindDialog> =>
{
    const [ OpenState, SetOpenState ] = useState<FKeybindOpenState>("Success");

    const onOpenChangeOut = (Event: DialogOpenChangeEvent, Data: DialogOpenChangeData): void =>
    {
        const OutData: FKeybindDialogOpenData =
        {
            ...Data,
            Type: OpenState
        };

        onOpenChange?.(Event, OutData);
    };

    const OnCancel = () =>
    {
        SetOpenState("Canceled");
        setOpen?.(false);

        onCancel?.();
    };

    const OnSave = () =>
    {
        SetOpenState("Success");
        setOpen?.(false);

        onSave?.();
    };

    return {
        Content,
        CornerDirection,
        OnCancel,
        OnChange,
        OnSave,
        Title,
        onOpenChange: onOpenChangeOut,
        open//,
        // setOpen
    };
};
