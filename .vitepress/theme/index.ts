import DefaultTheme from "vitepress/theme";
import './index.scss'
import {EnhanceAppContext} from 'vitepress';
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
        // 设置全局返回顶部按钮
        vitepressBackToTop({
            threshold: 300
        });
    },
}