# Components

There exist four main components.
Brief descriptions are given here for your convenience.

## Key

`Key`s are analogous to the `<kbd>` HTML element.
They can be styled as in-line, miniature, or normally as large, bold square symbols.

## Key Sequence

This component displays `Key`s in a minimal container.
These can be used to display keybinds that have already been set.

## Keybind Recorder

This component allows the user to record keybinds.
Saving and managing the UX is not handled by this component.

## Keybind Dialog

This component wraps the `KeybindRecorder` component in a Fluent UI `Dialog`, and handles the UX by providing the ability to cancel or confirm the keybind being recorded.