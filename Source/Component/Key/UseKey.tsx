/* File:      UseKey.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    AddFilled,
    AddRegular,
    AppsListFilled,
    AppsListRegular,
    ArrowClockwiseFilled,
    ArrowClockwiseRegular,
    ArrowDownFilled,
    ArrowDownRegular,
    ArrowEnterLeftFilled,
    ArrowEnterLeftRegular,
    ArrowLeftFilled,
    ArrowLeftRegular,
    ArrowRightFilled,
    ArrowRightRegular,
    ArrowUpFilled,
    ArrowUpRegular,
    BackspaceFilled,
    BackspaceRegular,
    CameraFilled,
    CameraRegular,
    CircleSmallFilled,
    CircleSmallRegular,
    DismissFilled,
    DismissRegular,
    GlobeArrowForwardFilled,
    GlobeArrowForwardRegular,
    GlobeFilled,
    GlobePersonFilled,
    GlobePersonRegular,
    GlobeRegular,
    GlobeSearchFilled,
    GlobeSearchRegular,
    GlobeStarFilled,
    GlobeStarRegular,
    KeyboardShiftFilled,
    KeyboardShiftRegular,
    KeyboardTabFilled,
    KeyboardTabRegular,
    LockClosedFilled,
    LockClosedRegular,
    MailFilled,
    MailRegular,
    MoviesAndTvFilled,
    MoviesAndTvRegular,
    NextFilled,
    NextRegular,
    PauseFilled,
    PauseRegular,
    PhoneVerticalScrollFilled,
    PhoneVerticalScrollRegular,
    PreviousFilled,
    PreviousRegular,
    PrintFilled,
    PrintRegular,
    SpacebarFilled,
    SpacebarRegular,
    Speaker0Filled,
    Speaker0Regular,
    Speaker1Filled,
    Speaker1Regular,
    SpeakerMuteFilled,
    SpeakerMuteRegular,
    StopFilled,
    StopRegular,
    TableSimpleFilled,
    TextAsteriskFilled,
    TextAsteriskRegular } from "@fluentui/react-icons";
import { FKeyRepresentation, type FDomKeyCode, type SKey } from "./Key.Types";
import { type FVkUnstyled, type VK, VkToDom } from "../../Utility/Vk";
import { type PKey } from ".";
import { type ReactElement } from "react";
import { GetInverse, type TStateUnstyled } from "../../Utility";

/* @TODO Add option to hide shift when there is a following character that has a "capitalized" counterpart */
/* @TODO Add option to re-order Alt, Shift, and Control keys to be in standard order. */
/* @TODO Support for Mac, Linux? */

type FKeyIconKey =
    | "Add"
    | "AppsList"
    | "ArrowClockwise"
    | "Backspace"
    | "Globe"
    | "GlobeStar"
    | "GlobeArrowForward"
    | "GlobePerson"
    | "GlobeSearch"
    | "Dismiss"
    | "LockClosed"
    | "ArrowDown"
    | "KeyboardShift"
    | "TableSimple"
    | "Mail"
    | "MoviesAndTv"
    | "ArrowLeft"
    | "Next"
    | "Previous"
    | "Stop"
    | "TextAsterisk"
    | "ArrowDown"
    | "Pause"
    | "Print"
    | "ArrowEnterLeft"
    | "ArrowRight"
    | "PhoneVerticalScroll"
    | "CircleSmall"
    | "Camera"
    | "Spacebar"
    | "KeyboardTab"
    | "ArrowUp"
    | "Speaker0"
    | "SpeakerMute"
    | "Speaker1";

const IconKeys: Readonly<Array<FKeyIconKey>> =
[
    "Add",
    "AppsList",
    "ArrowClockwise",
    "Backspace",
    "Globe",
    "GlobeStar",
    "GlobeArrowForward",
    "GlobePerson",
    "GlobeSearch",
    "Dismiss",
    "LockClosed",
    "ArrowDown",
    "KeyboardShift",
    "TableSimple",
    "Mail",
    "MoviesAndTv",
    "ArrowLeft",
    "Next",
    "Previous",
    "Stop",
    "TextAsterisk",
    "ArrowDown",
    "Pause",
    "Print",
    "ArrowEnterLeft",
    "ArrowRight",
    "PhoneVerticalScroll",
    "CircleSmall",
    "Camera",
    "Spacebar",
    "KeyboardTab",
    "ArrowUp",
    "Speaker0",
    "SpeakerMute",
    "Speaker1"
] as const;

const IconMap: Map<FKeyIconKey, [ ReactElement, ReactElement ]> =
    new Map<FKeyIconKey, [ ReactElement, ReactElement ]>([
    [ "Add", [ <AddRegular/>, <AddFilled/> ] ],
    [ "AppsList", [ <AppsListRegular/>, <AppsListFilled/> ] ],
    [ "ArrowClockwise", [ <ArrowClockwiseRegular/>, <ArrowClockwiseFilled/> ] ],
    [ "Backspace", [ <BackspaceRegular/>, <BackspaceFilled/> ] ],
    [ "Globe", [ <GlobeRegular/>, <GlobeFilled/> ] ],
    [ "GlobeStar", [ <GlobeStarRegular/>, <GlobeStarFilled/> ] ],
    [ "GlobeArrowForward", [ <GlobeArrowForwardRegular/>, <GlobeArrowForwardFilled/> ] ],
    [ "GlobePerson", [ <GlobePersonRegular/>, <GlobePersonFilled/> ] ],
    [ "GlobeSearch", [ <GlobeSearchRegular/>, <GlobeSearchFilled/> ] ],
    [ "Dismiss", [ <DismissRegular/>, <DismissFilled/> ] ],
    [ "LockClosed", [ <LockClosedRegular/>, <LockClosedFilled/> ] ],
    [ "ArrowDown", [ <ArrowDownRegular/>, <ArrowDownFilled/> ] ],
    [ "KeyboardShift", [ <KeyboardShiftRegular/>, <KeyboardShiftFilled/> ] ],
    [ "TableSimple", [ <TableSimpleFilled/>, <TableSimpleFilled/> ] ],
    [ "Mail", [ <MailRegular/>, <MailFilled/> ] ],
    [ "MoviesAndTv", [ <MoviesAndTvRegular/>, <MoviesAndTvFilled/> ] ],
    [ "ArrowLeft", [ <ArrowLeftRegular/>, <ArrowLeftFilled/> ] ],
    [ "Next", [ <NextRegular/>, <NextFilled/> ] ],
    [ "Previous", [ <PreviousRegular/>, <PreviousFilled/> ] ],
    [ "Stop", [ <StopRegular/>, <StopFilled/> ] ],
    [ "TextAsterisk", [ <TextAsteriskRegular/>, <TextAsteriskFilled/> ] ],
    [ "ArrowDown", [ <ArrowDownRegular/>, <ArrowDownFilled/> ] ],
    [ "Pause", [ <PauseRegular/>, <PauseFilled/> ] ],
    [ "Print", [ <PrintRegular/>, <PrintFilled/> ] ],
    [ "ArrowEnterLeft", [ <ArrowEnterLeftRegular/>, <ArrowEnterLeftFilled/> ] ],
    [ "ArrowRight", [ <ArrowRightRegular/>, <ArrowRightFilled/> ] ],
    [ "PhoneVerticalScroll", [ <PhoneVerticalScrollRegular/>, <PhoneVerticalScrollFilled/> ] ],
    [ "CircleSmall", [ <CircleSmallRegular/>, <CircleSmallFilled/> ] ],
    [ "Camera", [ <CameraRegular/>, <CameraFilled/> ] ],
    [ "Spacebar", [ <SpacebarRegular/>, <SpacebarFilled/> ] ],
    [ "KeyboardTab", [ <KeyboardTabRegular/>, <KeyboardTabFilled/> ] ],
    [ "ArrowUp", [ <ArrowUpRegular/>, <ArrowUpFilled/> ] ],
    [ "Speaker0", [ <Speaker0Regular/>, <Speaker0Filled/> ] ],
    [ "SpeakerMute", [ <SpeakerMuteRegular/>, <SpeakerMuteFilled/> ] ],
    [ "Speaker1", [ <Speaker1Regular/>, <Speaker1Filled/> ] ]
]);

const GetKeyCodeIcon = (
    Key: Exclude<VK, FVkUnstyled>,
    Style: "Filled" | "Regular"): Array<FKeyRepresentation> =>
{
    const Index: number = Style === "Filled"
        ? 1
        : 0;

    const KeyCodeIcons: { [ Property in Exclude<VK, FVkUnstyled>]: Array<string> } =
    {
        "Add": [ "NUM", "Add" ],
        "Apps": [ "AppsList" ],
        "Back": [ "Backspace" ],
        "BrowserBack": [ "Globe", "Backspace" ],
        "BrowserFavorites": [ "GlobeStar" ],
        "BrowserForward": [ "GlobeArrowForward" ],
        "BrowserHome": [ "GlobePerson" ],
        "BrowserRefresh": [ "Globe", "ArrowClockwise" ],
        "BrowserSearch": [ "GlobeSearch" ],
        "BrowserStop": [ "Globe", "Dismiss" ],
        "Capital": [ "CAPS", "LockClosed" ],
        "Control": [ "CTRL" ],
        "Decimal": [ "NUM •" ],
        "Delete": [ "DEL" ],
        "Divide": [ "NUM ÷" ],
        "Down": [ "ArrowDown" ],
        "Insert": [ "Ins" ],
        "LButton": [ "LMB" ],
        "LControl": [ "L CTRL" ],
        "LMenu": [ "L ALT" ],
        "LShift": [ "L", "KeyboardShift" ],
        "LWin": [ "L ", "TableSimple" ],
        "LaunchApp1": [ "APP1" ],
        "LaunchApp2": [ "APP2" ],
        "LaunchMail": [ "Mail" ],
        "LaunchMediaSelect": [ "MoviesAndTv" ],
        "Left": [ "ArrowLeft" ],
        "MButton": [ "RMB" ],
        "MediaNextTrack": [ "Next" ],
        "MediaPrevTrack": [ "Previous" ],
        "MediaStop": [ "Stop" ],
        "Menu": [ "ALT" ],
        "Multiply": [ "NUM", "TextAsterisk" ],
        "Next": [ "PG", "ArrowDown" ],
        "NumLock": [ "NUM", "LockClosed" ],
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
        "Pause": [ "Pause" ],
        "Print": [ "Print" ],
        "Prior": [ "PG", "ArrowUp" ],
        "RButton": [ "RMB" ],
        "RControl": [ "R CTRL" ],
        "RMenu": [ "R ALT" ],
        "RShift": [ "R", "KeyboardShift" ],
        "RWin": [ "R ", "TableSimple" ],
        "Return": [ "ArrowEnterLeft" ],
        "Right": [ "ArrowRight" ],
        "Scroll": [ "PhoneVerticalScroll" ],
        "Select": [ "SEL" ],
        "Separator": [ "CircleSmall" ],
        "Shift": [ "KeyboardShift" ],
        "Snapshot": [ "Camera" ],
        "Space": [ "Spacebar" ],
        "Subtract": [ "NUM-" ],
        "Tab": [ "KeyboardTab" ],
        "Up": [ "ArrowUp" ],
        "VolumeDown": [ "Speaker0" ],
        "VolumeMute": [ "SpeakerMute" ],
        "VolumeUp": [ "Speaker1" ],
        "XButton1": [ "XMB1" ],
        "XButton2": [ "XMB2" ]
    };

    const Representation: Array<string | ReactElement> = (KeyCodeIcons[Key] || [ Key ])
    .map((Partial: string): string | ReactElement =>
    {
        if (IconKeys.includes(Partial as FKeyIconKey))
        {
            const IconKey: FKeyIconKey = Partial as FKeyIconKey;
            return (IconMap.get(IconKey) as Array<ReactElement>)[Index];
        }
        else
        {
            return Partial;
        }
    });
    
    return Representation;
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

export const UseKey = ({ CornerDirection, Display, Key, style }: PKey): TStateUnstyled<SKey> =>
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

    const Style: "Filled" | "Regular" = Display === "Inline"
        ? "Filled"
        : "Regular";

    let Representation: Array<FKeyRepresentation> = [ ];
    if (VkCode !== undefined)
    {
        // console.log(`Got Vk code ${VkCode} from Code ${Key}.`);

        Representation = GetKeyCodeIcon(VkCode as Exclude<VK, FVkUnstyled>, Style) || [ VkCode ];
    }
    else
    {
        console.log(`Getting inverse of ${Key}...`);
        const InverseMap: Partial<Record<FDomKeyCode, VK>> = GetInverse(VkToDom);
        const Inverse: VK | undefined = InverseMap?.[Key];
        if (Inverse !== undefined)
        {
            const InverseCast: Exclude<VK, FVkUnstyled> = Inverse as Exclude<VK, FVkUnstyled>;
            Representation = GetKeyCodeIcon(InverseCast, Style) || [ Inverse ];
        }
    }

    return {
        CornerDirection: Display !== "Inline" && CornerDirection,
        Display,
        Representation,
        style
    };
};
