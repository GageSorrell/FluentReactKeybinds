/* Gist: React Components in Vitepress that Update with Dark Mode
 * Author: Gage Sorrell <gage@sorrell.sh>
 * 
 */
<div ref="el" />

<script setup>
    import { ReactElement, createElement } from "react";
    import { FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
    import { createRoot } from "react-dom/client";
    import { useData } from "vitepress";
    import { ref, onMounted, watch } from "vue";
    import { Key, KeySequence } from "../../";

    const el = ref();

    const IsDark = useData().isDark;

    const MyComponent = (_Props: unknown): ReactElement =>
    {
        let IsDark: boolean = Dark.value;

        // Do something with IsDark...

        const MyReactElement: ReactElement = createElement("p", { innerText: "Hi mom!" }, null);

        return MyReactElement;
    };

    onMounted(() => {
        const Root = createRoot(el.value);

        watch(Dark, (New, Old) =>
        {
            Root.render(MyComponent());
        });

        Root.render(MyComponent());
    });
</script>