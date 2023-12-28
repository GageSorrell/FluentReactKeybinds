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

export const RenderKeybindDialog =
    ({
    }: SKeybindDialog): ReactElement =>
{
    return (
        <Dialog
        // this controls the dialog open state
        // open={open}
        // onOpenChange={(event, data) => {
        //   // it is the users responsibility to react accordingly to the open state change
        //   setOpen(data.open);
        // }}
      >
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
                Foo bar
            </DialogContent>

            <DialogActions>
              {/* DialogTrigger inside of a Dialog still works properly */}
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    );
};
