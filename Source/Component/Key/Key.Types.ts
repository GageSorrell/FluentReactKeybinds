/* File:      Key.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { FStylable, type FStyledState, type TStyles } from "../../Utility";
import { ReactElement } from "react";

export type FDomKeyCode =
    | ""
    | "Escape"
    | "Digit1"
    | "Digit2"
    | "Digit3"
    | "Digit4"
    | "Digit5"
    | "Digit6"
    | "Digit7"
    | "Digit8"
    | "Digit9"
    | "Digit0"
    | "Minus"
    | "Equal"
    | "Backspace"
    | "Tab"
    | "KeyA"
    | "KeyB"
    | "KeyC"
    | "KeyD"
    | "KeyE"
    | "KeyF"
    | "KeyG"
    | "KeyH"
    | "KeyI"
    | "KeyJ"
    | "KeyK"
    | "KeyL"
    | "KeyM"
    | "KeyN"
    | "KeyO"
    | "KeyP"
    | "KeyQ"
    | "KeyR"
    | "KeyS"
    | "KeyT"
    | "KeyU"
    | "KeyV"
    | "KeyW"
    | "KeyX"
    | "KeyY"
    | "KeyZ"
    | "BracketLeft"
    | "BracketRight"
    | "Enter"
    | "ControlLeft"
    | "ControlRight"
    | "Semicolon"
    | "Quote"
    | "Backquote"
    | "ShiftLeft"
    | "Backslash"
    | "Comma"
    | "Period"
    | "Slash"
    | "ShiftRight"
    | "NumpadMultiply"
    | "AltLeft"
    | "Space"
    | "CapsLock"
    | "F1"
    | "F2"
    | "F3"
    | "F4"
    | "F5"
    | "F6"
    | "F7"
    | "F8"
    | "F9"
    | "F10"
    | "F11"
    | "F12"
    | "F13"
    | "F14"
    | "F15"
    | "F16"
    | "F17"
    | "F18"
    | "F19"
    | "F20"
    | "F21"
    | "F22"
    | "F23"
    | "F24"
    | "Pause"
    | "ScrollLock"
    | "Numpad0"
    | "Numpad1"
    | "Numpad2"
    | "Numpad3"
    | "Numpad4"
    | "Numpad5"
    | "Numpad6"
    | "Numpad7"
    | "Numpad8"
    | "Numpad9"
    | "NumpadSubtract"
    | "NumpadAdd"
    | "NumpadDecimal"
    | "NumpadEqual"
    | "NumpadDivide"
    | "IntlBackslash"
    | "NumpadComma"
    | "MediaTrackPrevious"
    | "MediaTrackNext"
    | "NumpadEnter"
    | "AudioVolumeMute"
    | "MediaPlayPause"
    | "MediaStop"
    | "AudioVolumeDown"
    | "AudioVolumeUp"
    | "BrowserHome"
    | "BrowserStop"
    | "BrowserBack"
    | "BrowserForward"
    | "BrowserSearch"
    | "BrowserFavorites"
    | "BrowserRefresh"
    | "NumpadDivide"
    | "PrintScreen"
    | "AltRight"
    | "AltLeft"
    | "NumLock"
    | "Pause"
    | "Home"
    | "ArrowUp"
    | "ArrowDown"
    | "ArrowLeft"
    | "ArrowRight"
    | "PageUp"
    | "PageDown"
    | "End"
    | "Insert"
    | "Delete"
    | "LaunchMail"
    | "LaunchApp1"
    | "LaunchApp2"
    | "ContextMenu"
    | "MetaLeft"
    | "MetaRight"
    | "MediaSelect";

export type FKeyDisplay =
    | "Mini"
    | "Inline"
    | "Full";

export type PKey = FStylable &
{
    BackgroundColor?: string;
    Color?: string;
    CornerDirection?: boolean;
    Display?: FKeyDisplay;
    Key: FDomKeyCode;
};

export type FKeyClassNames =
    | "StringContainer"
    | "Root";

export type FKeyStyles = TStyles<FKeyClassNames>;

export type FKeyRepresentation = string | ReactElement;

export type SKey =
    FStylable &
    FStyledState &
    Pick<PKey, "CornerDirection" | "Color" | "BackgroundColor" | "Display"> &
    {
        Representation: Array<FKeyRepresentation>;
    };
