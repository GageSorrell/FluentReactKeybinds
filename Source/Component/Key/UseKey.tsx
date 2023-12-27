/* File:      UseKey.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    AddRegular,
    AppsListRegular,
    ArrowClockwiseRegular,
    ArrowDownRegular,
    ArrowEnterLeftRegular,
    ArrowLeftRegular,
    ArrowRightRegular,
    ArrowUpRegular,
    BackspaceRegular,
    CameraRegular,
    CircleSmallRegular,
    DismissRegular,
    GlobeArrowForwardRegular,
    GlobePersonRegular,
    GlobeRegular,
    GlobeSearchRegular,
    GlobeStarRegular,
    KeyboardShiftRegular,
    KeyboardTabRegular,
    LockClosedRegular,
    MailRegular,
    MoviesAndTvRegular,
    NextRegular,
    PauseRegular,
    PhoneVerticalScrollRegular,
    PreviousRegular,
    PrintRegular,
    SpacebarRegular,
    Speaker0Regular,
    Speaker1Regular,
    SpeakerMuteRegular,
    StopRegular,
    TableSimpleFilled,
    TextAsteriskRegular } from "@fluentui/react-icons";
import { FKeyRepresentation, type FDomKeyCode, type SKey } from "./Key.Types";
import { type FVkUnstyled, type VK, VkToDom } from "../../Utility/Vk";
import { type PKey } from ".";
import { GetInverse, type TStateUnstyled } from "../../Utility";

/* @TODO Add option to hide shift when there is a following character that has a "capitalized" counterpart */
/* @TODO Add option to re-order Alt, Shift, and Control keys to be in standard order. */
/* @TODO Support for Mac, Linux? */

const KeyCodeIcons: { [ Index in Exclude<VK, FVkUnstyled> ]: Array<FKeyRepresentation> } =
{
    "Add": [ "NUM", <AddRegular/> ],
    "Apps": [ <AppsListRegular/> ],
    "Back": [ <BackspaceRegular/> ],
    "BrowserBack": [ <GlobeRegular/>, <BackspaceRegular/> ],
    "BrowserFavorites": [ <GlobeStarRegular/> ],
    "BrowserForward": [ <GlobeArrowForwardRegular/> ],
    "BrowserHome": [ <GlobePersonRegular/> ],
    "BrowserRefresh": [ <GlobeRegular/>, <ArrowClockwiseRegular/> ],
    "BrowserSearch": [ <GlobeSearchRegular/> ],
    "BrowserStop": [ <GlobeRegular/>, <DismissRegular/> ],
    "Capital": [ "CAPS", <LockClosedRegular/> ],
    "Control": [ "CTRL" ],
    "Decimal": [ "NUM •" ],
    "Delete": [ "DEL" ],
    "Divide": [ "NUM ÷" ],
    "Down": [ <ArrowDownRegular/> ],
    "Insert": [ "Ins" ],
    "LButton": [ "LMB" ],
    "LControl": [ "L CTRL" ],
    "LMenu": [ "L ALT" ],
    "LShift": [ "L", <KeyboardShiftRegular/> ],
    "LWin": [ "L ", <TableSimpleFilled/> ],
    "LaunchApp1": [ "APP1" ],
    "LaunchApp2": [ "APP2" ],
    "LaunchMail": [ <MailRegular/> ],
    "LaunchMediaSelect": [ <MoviesAndTvRegular/> ],
    "Left": [ <ArrowLeftRegular/> ],
    "MButton": [ "RMB" ],
    "MediaNextTrack": [ <NextRegular/> ],
    "MediaPrevTrack": [ <PreviousRegular/> ],
    "MediaStop": [ <StopRegular/> ],
    "Menu": [ "ALT" ],
    "Multiply": [ "NUM", <TextAsteriskRegular/> ],
    "Next": [ "PG", <ArrowDownRegular/> ],
    "NumLock": [ "NUM", <LockClosedRegular/> ],
    "NumPad0": [ "NUM 0" ],
    "NumPad1": [ "NUM 1" ],
    "NumPad2": [ "NUM 2" ],
    "NumPad3": [ "NUM 3" ],
    "NumPad4": [ "NUM 4" ],
    "NumPad5": [ "NUM 5" ],
    "NumPad6": [ "NUM 6" ],
    "NumPad7": [ "NUM 7" ],
    "NumPad8": [ "NUM 8" ],
    "NumPad9": [ "NUM 9" ],
    "Oem1": [ ";" ],
    "Oem2": [ "/" ],
    "Oem3": [ "`" ],
    "Oem4": [ "[" ],
    "Oem5": [ "\\" ],
    "Oem6": [ "]" ],
    "Oem7": [ "'" ],
    "OemComma": [ "," ],
    "OemMinus": [ "-" ],
    "OemPeriod": [ "." ],
    /* Despite the name `OemPlus`, this is the key that gives `=` without Shift. */
    "OemPlus": [ "=" ],
    "Pause": [ <PauseRegular/> ],
    "Print": [ <PrintRegular/> ],
    "Prior": [ "PG", <ArrowDownRegular/> ],
    "RButton": [ "RMB" ],
    "RControl": [ "R CTRL" ],
    "RMenu": [ "R ALT" ],
    "RShift": [ "R", <KeyboardShiftRegular/> ],
    "RWin": [ "R ", <TableSimpleFilled/> ],
    "Return": [ <ArrowEnterLeftRegular/> ],
    "Right": [ <ArrowRightRegular/> ],
    "Scroll": [ <PhoneVerticalScrollRegular/> ],
    "Select": [ "SEL" ],
    "Separator": [ <CircleSmallRegular/> ],
    "Shift": [ <KeyboardShiftRegular/> ],
    "Snapshot": [ <CameraRegular/> ],
    "Space": [ <SpacebarRegular/> ],
    "Subtract": [ "NUM-" ],
    "Tab": [ <KeyboardTabRegular/> ],
    "Up": [ <ArrowUpRegular/> ],
    "VolumeDown": [ <Speaker0Regular/> ],
    "VolumeMute": [ <SpeakerMuteRegular/> ],
    "VolumeUp": [ <Speaker1Regular/> ],
    "XButton1": [ "XMB1" ],
    "XButton2": [ "XMB2" ]
};

type FModifiers =
    | "ControlLeft"
    | "ControlRight"
    | "ShiftLeft"
    | "ShiftRight"
    | "AltLeft"
    | "AltRight";

const Modifiers: { [ Index in FModifiers ]: VK } =
{
    "ControlLeft": "LControl",
    "ControlRight": "RControl",
    "ShiftLeft": "LShift",
    "ShiftRight": "RShift",
    "AltLeft": "LMenu",
    "AltRight": "RMenu"
};

export const UseKey = ({ Key, style }: PKey): TStateUnstyled<SKey> =>
{
    let VkCode: VK | undefined = undefined;
    if (Object.keys(Modifiers).includes(Key))
    {
        VkCode = Modifiers[Key as FModifiers];
    }
    else
    {
        Object.entries(VkToDom).forEach(([ InVk, InDomKey ]): void =>
        {
            const Vk: VK = InVk as VK;
            const DomKey: FDomKeyCode = InDomKey as FDomKeyCode;

            if (VkCode !== undefined)
            {
                return;
            }

            if (Key === DomKey)
            {
                VkCode = Vk;
            }
        });
    }

    let Representation: Array<FKeyRepresentation> = [ ];
    if (VkCode !== undefined)
    {
        console.log(`Got Vk code ${VkCode} from Code ${Key}.`);
        Representation = KeyCodeIcons[VkCode as Exclude<VK, FVkUnstyled>] || [ VkCode ];
    }
    else
    {
        console.log(`Getting inverse of ${Key}...`);
        const InverseMap: Partial<Record<FDomKeyCode, VK>> = GetInverse(VkToDom);
        const Inverse: VK | undefined = InverseMap?.[Key];
        if (Inverse !== undefined)
        {
            const InverseCast: Exclude<VK, FVkUnstyled> = Inverse as Exclude<VK, FVkUnstyled>;
            Representation = KeyCodeIcons?.[InverseCast] || [ Inverse ];
        }
    }

    return {
        Representation,
        style
    };
};
