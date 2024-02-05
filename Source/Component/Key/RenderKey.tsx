/* File:      RenderKey.ts
 * Author:    Gage Sorrell <gsorrell@purdue.edu>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { type FKeyRepresentation, type SKey } from "./";
import { ReactElement } from "react";
import { isValidElement } from "react";

const RenderString = (
    { ClassNames, Display }: Pick<SKey, "ClassNames" | "Display">,
    String: string): ReactElement | undefined =>
{
    const fontSize: string = String.length > 1
        ? "1rem"
        : Display !== "Inline"
            ? "1.25rem"
            : "0.9rem";

    return (
        <span
            className={ ClassNames?.StringContainer }
            key={ Math.random().toString() }
            style={ { boxSizing: "border-box", fontSize, display: "block", whiteSpace: "nowrap" } }>
            { String }
        </span>
    );
};

export const RenderKey = ({
    BackgroundColor,
    ClassNames,
    Color,
    CornerDirection,
    Display,
    Representation,
    style }: SKey): ReactElement =>
{
    const OutRep: Array<FKeyRepresentation> = [ ...Representation ];
    let DirectionText: "L" | "R" | undefined = undefined;
    const ShouldFormatCorner: boolean | undefined = CornerDirection &&
        (
            OutRep.length > 1 ||
            (
                typeof OutRep[0] === "string" &&
                OutRep[0].length > 1
            )
        );
    if (ShouldFormatCorner)
    {
        const DirectionKeyNotSplit = (): string | undefined =>
        {
            return OutRep.find((Element: FKeyRepresentation): boolean =>
            {
                if (typeof Element === "string")
                {
                    return Element.startsWith("L") || Element.startsWith("R");
                }
                else
                {
                    return false;
                }
            }) as string | undefined;
        };

        while (DirectionKeyNotSplit() !== undefined)
        {
            const KeyWithDirection: string = DirectionKeyNotSplit() as string;
            const Index: number = OutRep.indexOf(KeyWithDirection);
            if (Index !== -1)
            {
                DirectionText = KeyWithDirection[0] as "L" | "R";
                if (KeyWithDirection.length === 1)
                {
                    OutRep.splice(Index, 1);
                }
                else
                {
                    const KeyWithoutDirection: string = KeyWithDirection.slice(2);
                    OutRep[Index] = KeyWithoutDirection;
                }
            }
        }
    }

    style = style || { };

    if (style.color === undefined)
    {
        style.color = Color;
    }

    if (style.backgroundColor === undefined)
    {
        style.backgroundColor = BackgroundColor;
    }

    return (
        <span
            className={ ClassNames?.Root }
            { ...{ style } }>
            {
                OutRep.map((Element: FKeyRepresentation): ReactElement | undefined =>
                {
                    let ReturnElement: ReactElement | undefined = undefined;
                    if (isValidElement(Element))
                    {
                        ReturnElement = Element;
                    }
                    else if (typeof Element === "string")
                    {
                        ReturnElement = RenderString({ ClassNames, Display }, Element);
                    }

                    return ReturnElement;
                })
            }
            {
                ((): ReactElement | undefined =>
                {
                    if (DirectionText)
                    {
                        return (
                            <span
                                key={ Math.random().toString() }
                                style={ {
                                    display: "block",
                                    position: "absolute",
                                    bottom: 0,
                                    left: "3px",
                                    fontSize: "0.667rem",
                                    color: "#FFFFFF"
                                } }>
                                { DirectionText }
                            </span>
                        );
                    }

                    return undefined;
                })()
            }
        </span>
    );
};
