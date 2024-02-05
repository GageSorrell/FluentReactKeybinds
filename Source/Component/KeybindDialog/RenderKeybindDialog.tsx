/* File:      RenderKeybindDialog.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import {
    Button,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger } from "@fluentui/react-components";
import { type ReactElement } from "react";
import { type SKeybindDialog } from ".";
import { KeybindRecorder } from "../KeybindRecorder";

export const RenderKeybindDialog =
    ({
      Content,
      Title,
      OnCancel,
      OnSave,
      onOpenChange,
      open
    }: SKeybindDialog): ReactElement =>
{
    return (
        <Dialog { ...{ open, onOpenChange } }>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>
                        { Title }
                    </DialogTitle>
                    <DialogContent>
                        { Content }
                        <KeybindRecorder/>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button
                                appearance="secondary"
                                onClick={ OnCancel }>
                                Cancel
                            </Button>
                        </DialogTrigger>
                        <Button
                            appearance="primary"
                            onClick={ OnSave }>
                            Save
                        </Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
      </Dialog>
    );
};
