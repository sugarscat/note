import mediumZoom from "medium-zoom";
import "nprogress-v2/dist/index.css"; // 进度条样式
import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import "virtual:group-icons.css";
import { EnhanceAppContext, inBrowser, useRoute } from "vitepress";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import "vitepress-plugin-back-to-top/dist/style.css";
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import Layout from "./components/Layout.vue";
import "./style.scss";

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout: () => {
    return h(Layout);
  },
  enhanceApp({ router }: EnhanceAppContext) {
    // 设置全局返回顶部按钮
    vitepressBackToTop({
      threshold: 300,
    });
    // 进度条组件
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start(); // 开始进度条
      };
      router.onAfterRouteChange = () => {
        NProgress.done(); // 停止进度条
      };
    }
  },
};
