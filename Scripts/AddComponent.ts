/* File:      add-component.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 *
 * This file is meant to be run via `ts-node` and
 * is not a part of the app itself.
 */

import { existsSync as Exists, promises as Fs } from "fs";
import path from "path";

const Ensure = (DesiredCondition: boolean, Reason: string) =>
{
    if (!DesiredCondition)
    {
        console.error(Reason);
        process.exit(1);
    }
}

/** Used as `npm run add-component path/to/my/component. */
const AddComponent = async () =>
{
    /* This comes from [ "ts-node", "./src/Scripts/AddComponent.ts" ] */
    const BaseNumberOfArgs: number = 2;

    Ensure(
        process.argv.length === BaseNumberOfArgs + 1,
        "An argument for the path was not provided."
    );

    console.log(__dirname);

    const Path: string = process.argv[BaseNumberOfArgs];

    const AbsolutePath: string = path.join(
        process.cwd(),
        "Source\\Component",
        Path.replaceAll("/", "\\")
    );

    const PathIsDirectory: boolean = path.extname(AbsolutePath) === "";
    Ensure(PathIsDirectory, "Path should be a directory.");
    Ensure(!Exists(Path), "Path should not already exist.");

    const ComponentName: string = Path.split("/")[Path.split("/").length - 1];

    const FileNames = (InComponentName?: string): Array<string> =>
    {
        const Subject: string = InComponentName || "Component";

        let OutFileNames: Array<string> =
        [
            `${Subject}.tsx`,
            `Use${Subject}.ts`,
            `${Subject}.Types.ts`,
            `Render${Subject}.tsx`,
            `Use${Subject}.Styles.ts`
        ];

        if (InComponentName === undefined)
        {
            OutFileNames = OutFileNames.map(Name => Name + ".Template");
        }

        return OutFileNames;
    };

    const ComponentFilePaths: Array<string> = FileNames(ComponentName).map((FileName): string =>
    {
        return path.join(AbsolutePath, FileName)
    });

    const TemplateFileNames: Array<string> = FileNames();

    await Fs.mkdir(AbsolutePath, { recursive: true });
    for await (const ComponentFilePath of ComponentFilePaths)
    {
        const Index: number = ComponentFilePaths.indexOf(ComponentFilePath);

        const TemplateFileName: string = TemplateFileNames[Index];
        const TemplatePath: string = path.join(process.cwd(), "Scripts\\", TemplateFileName);
        const ComponentContents = await Fs.readFile(TemplatePath).then((Value: Buffer) =>
        {
            const TemplateContents: string = Value.toString();
            return TemplateContents
                .replaceAll("Component", ComponentName)
                .replaceAll(".Template", "");
        });

        await Fs.writeFile(ComponentFilePath, ComponentContents);
    }
};

AddComponent();
