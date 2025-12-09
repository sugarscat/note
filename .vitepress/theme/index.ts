import mediumZoom from "medium-zoom";
import "virtual:group-icons.css";
import { EnhanceAppContext, inBrowser, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import "./bprogress.css";
import { BProgress } from "./bprogress.js"; // 进度条组件
import "./style.scss";
// @ts-ignore: 允许在没有 .vue 类型声明时导入 .vue 文件
import BackToTop from "./components/backtotop.vue";

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
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 指定组件使用doc-footer-before插槽
      "doc-footer-before": () => h(BackToTop),
    });
  },
  enhanceApp({ router }: EnhanceAppContext) {
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
