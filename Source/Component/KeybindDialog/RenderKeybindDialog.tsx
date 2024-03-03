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
import { KeybindRecorder } from "../KeybindRecorder";
import { type ReactElement } from "react";
import { type SKeybindDialog } from ".";

export const RenderKeybindDialog =
    ({
      Content,
      Title,
      OnBlur,
      OnCancel,
      OnChange,
      OnSave,
      SaveButtonRef,
      Sequence,
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
                        <KeybindRecorder { ...{ OnBlur, OnChange, Sequence } }/>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button
                                appearance="secondary"
                                onClick={ OnCancel }
                                ref={ SaveButtonRef }>
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
