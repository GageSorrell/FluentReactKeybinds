/* File:      RenderKeySequence.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type CSSProperties, type ReactElement } from "react";
import { type FDomKey } from "../Key";
import { Key } from "../Key";
import { type SKeySequence } from "./";

export const RenderKeySequence = ({
    ClassNames,
    CornerDirection,
    Sequence }: SKeySequence): ReactElement =>
{
    const GetStyle = (Index: number): CSSProperties =>
    {
        return {
            marginLeft: Index > 0 ? "0.25rem" : 0,
            marginRight: Index < Sequence.length - 1 ? "0.25rem" : 0
        };
    };

    return (
        <div className={ ClassNames?.Root }>
            {
                (Sequence || [ ]).map((PressedKey: FDomKey, Index: number): ReactElement =>
                {
                    return <Key
                        { ...{ CornerDirection } }
                        Key={ PressedKey }
                        key={ Math.random().toString() }
                        style={ GetStyle(Index) }
                    />;
                })
            }
        </div>
    );
};
