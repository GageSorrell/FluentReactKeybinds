/* File:      RenderKey.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

import { ReactElement } from "react";
import { FKeyRepresentation, type SKey } from "./";
import { isValidElement } from "react";
import { Image } from "@fluentui/react-components";

const RenderString = ({ ClassNames }: Pick<SKey, "ClassNames">, String: string) =>
{
    const fontSize: string = String.length > 1
        ? "1rem"
        : "1.25rem";

    return (
        <div className={ ClassNames?.StringContainer } key={ Math.random().toString() } style={ {fontSize} }>
            { String }
        </div>
    );
};

export const RenderKey = ({ ClassNames, Representation, style }: SKey): ReactElement =>
{
    return (
        <div className={ ClassNames?.Root } { ...{style } }>
            {
                Representation.map((Element: FKeyRepresentation): ReactElement =>
                {
                    let ReturnElement: ReactElement | undefined = undefined;
                    if (isValidElement(Element))
                    {
                        ReturnElement = Element;
                    }
                    else if (typeof Element === "string")
                    {
                        if (Element.startsWith("data:"))
                        {
                            ReturnElement = <Image key={ Math.random().toString() } src={ Element }/>;
                        }
                        else
                        {
                            ReturnElement = RenderString({ ClassNames }, Element);
                        }
                    }

                    return ReturnElement || <div></div>;
                })
            }
        </div>
    );
};
