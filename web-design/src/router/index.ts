import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "hospitalProject" },
  },
  {
    path: "/onePagePortfolio",
    name: "onePagePortfolio",
    component: () => import("@/views/portfolio/OnePagePortfolio.vue"),
    meta: { title: "行銷一頁式專案" },
  },
  {
    path: "/pluspay",
    name: "pluspay",
    component: () => import("@/views/portfolio/PlusPayView.vue"),
    meta: { title: "全盈支付" },
    redirect: { name: "webView" },
    children: [
      {
        path: "webview",
        name: "webView",
        component: () => import("@/views/portfolio/WebViewPortfolio.vue"),
        meta: { title: "全盈支付 - WebView" },
      },
      {
        path: "webpage",
        name: "webPage",
        component: () => import("@/views/portfolio/WebPagePortfolio.vue"),
        meta: { title: "全盈支付 - 網頁專案" },
      },
    ],
  },
  {
    path: "/hospitalProject",
    name: "hospitalProject",
    component: () => import("@/views/portfolio/HospitalPortfolio.vue"),
    meta: { title: "醫療資訊系統" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Nicole's Works`;
  }
  next();
});

export default router;
