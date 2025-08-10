import { BProgress } from "@bprogress/core"; // 进度条组件
import mediumZoom from "medium-zoom";
import "virtual:group-icons.css";
import { EnhanceAppContext, inBrowser, useRoute } from "vitepress";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import "vitepress-plugin-back-to-top/dist/style.css";
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import "./bprogress.css";
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
      BProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        BProgress.start(); // 开始进度条
      };
      router.onAfterRouteChange = () => {
        BProgress.done(); // 停止进度条
      };
    }
  },
};
