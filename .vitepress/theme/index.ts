import DefaultTheme from "vitepress/theme";
import { EnhanceAppContext } from "vitepress";
import { h } from "vue";
import "vitepress-plugin-back-to-top/dist/style.css";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import Layout from "./Layout.vue";

import "./index.scss";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(Layout);
    },
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
        // 设置全局返回顶部按钮
        vitepressBackToTop({
            threshold: 300,
        });
    },
};
