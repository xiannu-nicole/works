---
description: 實作模板，確保所有新建立的檔案結構與命名完全一致。
---

# Vue 3 實作模板

## 1. Vue 入口 (`src/main.ts`)

```typescript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// 引入全域樣式入口 (SCSS 變數已透過 Vite 注入，此處為基礎樣式)
import '@/assets/css/main.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
```

---

## 2. 路由配置 (`src/router/index.ts`)

```typescript
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首頁' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
});

// 全域守衛：更新頁面標題
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | 專案系統`;
  }
  next();
});

export default router;
```

---

## 3. 狀態管理 (`src/store/user.ts`)

```typescript
import { defineStore } from 'pinia';

interface UserState {
  userInfo: any | null;
  isLogin: boolean;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    isLogin: false
  }),
  actions: {
    setUserInfo(info: any) {
      this.userInfo = info;
    },
    logout() {
      this.userInfo = null;
      this.isLogin = false;
    }
  }
});
```

---

## 4. 資源管理中心 (`src/assets/js/img.ts`)

```typescript
// 資源地圖：嚴禁在組件內硬編碼實體字串路徑
import logoMain from '@/assets/img/logo-main.png';

export const img = {
  logoMain
};
```

---

## 5. 基礎 API 類型 (`src/types/api.ts`)

```typescript
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface PageParams {
  page: number;
  pageSize: number;
}
```

---

## 6. 根組件 (`src/App.vue`)

```html
<template>
  <router-view />
</template>

<script setup lang="ts">
/**
 * App.vue 僅作為路由容器
 * 全域樣式請於 assets/css 內定義
 */
</script>

<style lang="scss">
// 此處不寫 Scoped 樣式，保持容器潔淨
</style>
```