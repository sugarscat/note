import DefaultTheme from "vitepress/theme";
import './custom.scss'
import { EnhanceAppContext } from 'vitepress';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件
        ctx.app.component('vImageViewer', vImageViewer);
        // 设置全局返回顶部按钮
        vitepressBackToTop({
            threshold: 300
        });
    }
}