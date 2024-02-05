/* File:      Key.Types.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { FStylable, type FStyledState, type TStyles } from "../../Utility";
import { ReactElement } from "react";

/**
 * The set of values that KeyboardEvent#code can be.
 * It is guaranteed that KeyboardEvent#code can be
 * safely cast to `FDomKey`.
 */
export type FDomKey =
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

/**
 * The display style of a Key component.
 */
export type FKeyDisplay =
    /** The default style. */
    | "Full"
    /**
     * Similar to the <kbd> DOM element.
     */
    | "Inline"
    /**
     * Like `Full`, but smaller.
     * This is intended for displaying shortcuts
     * that have already been set, rather than for
     * recording new shortcuts.
     */
    | "Mini";

/** Properties for the Key component. */
export type PKey = FStylable &
{
    /** Override the background color. */
    BackgroundColor?: string;
    /** Override the symbol color. */
    Color?: string;
    /**
     * For modifier keys, show the "L" or "R"
     * in the lower-left corner, in a smaller
     * size.
     */
    CornerDirection?: boolean;
    /** The display style of the Key. */
    Display?: FKeyDisplay;
    /** The value to display. */
    Key: FDomKey;
};

/** The class names used to style the Key component. */
export type FKeyClassNames =
    | "StringContainer"
    | "Root";

/** The makeStyles hook of the Key component. */
export type FKeyStyles = TStyles<FKeyClassNames>;

/** `FDomKey`s are represented with strings and FluentIcons. */
export type FKeyRepresentation = string | ReactElement;

/** The state of the Key component. */
export type SKey =
    FStylable &
    FStyledState &
    Pick<PKey,
        | "BackgroundColor"
        | "Color"
        | "CornerDirection"
        | "Display"> &
    {
        Representation: Array<FKeyRepresentation>;
    };
