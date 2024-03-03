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
import {
    type FocusEvent,
    type RefObject,
    useRef,
    useState } from "react";
import { type FDomKey } from "../Key/Key.Types";
import { type TStateUnstyled } from "../../Utility";

export const UseKeybindDialog =
    ({
        Content,
        CornerDirection,
        // OnChange,
        Sequence,
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

        onSave?.(InnerSequence);
    };

    /**
     * An "inner" Sequence is used so that changes do not update
     * the state outside of the Dialog until the sequence is saved by the user.
     */
    const [ InnerSequence, SetInnerSequence ] = useState<Array<FDomKey>>(Sequence);

    const OnChangeOut = (NewSequence: Array<FDomKey>): void =>
    {
        SetInnerSequence(_Old => NewSequence);
        // OnChange?.(NewSequence);
    };

    const SaveButtonRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);

    const OnBlur = (Event: FocusEvent, ClearSequence: () => void) =>
    {
        const SaveButtonFocused: boolean | undefined =
            SaveButtonRef.current?.contains(Event.relatedTarget);

        if (SaveButtonFocused)
        {
            console.log("Clearing sequence in dialog because IsSaving is false");
            ClearSequence();
        }
    };

    return {
        Content,
        CornerDirection,
        OnBlur,
        OnCancel,
        OnChange: OnChangeOut,
        OnSave,
        SaveButtonRef,
        Sequence: InnerSequence,
        Title,
        onOpenChange: onOpenChangeOut,
        open//,
        // setOpen
    };
};
