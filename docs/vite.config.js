import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress';
export default defineConfig({
    plugins: [
        SearchPlugin({
            placeholder: "搜索文档",
            buttonLabel: "搜索",
            previewLength: 10,
        }),
    ],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ["../.."],
        },
    },
})
