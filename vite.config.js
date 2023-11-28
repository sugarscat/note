import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress';

var options = {
    previewLength: 62,
    buttonLabel: "搜索",
    placeholder: "搜索文档",
    allow: [],
    ignore: [],
    tokenize: "full"
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
});