<script setup>
import { ref } from "vue";
import onePagePortfolio from "./components/onePagePortfolio.vue";
import webViewPortfolio from "./components/webViewPortfolio.vue";

const activeTab = ref("onePagePortfolio"); // 'onePagePortfolio' or 'webViewPortfolio'
</script>

<template>
  <div class="app-container">
    <header class="glass-header">
      <h1 class="logo">Works.</h1>
      <nav class="nav-tabs">
        <button
          :class="['tab-btn', { active: activeTab === 'onePagePortfolio' }]"
          @click="activeTab = 'onePagePortfolio'"
        >
          一頁式網頁作品
        </button>
        <button
          :class="['tab-btn', { active: activeTab === 'webViewPortfolio' }]"
          @click="activeTab = 'webViewPortfolio'"
        >
          金融業 WebView 流程
        </button>
      </nav>
    </header>

    <main class="main-content">
      <transition name="fade" mode="out-in">
        <onePagePortfolio v-if="activeTab === 'onePagePortfolio'" />
        <webViewPortfolio v-else-if="activeTab === 'webViewPortfolio'" />
      </transition>
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Noto+Sans+TC:wght@300;400;500;700&display=swap");

:root {
  --bg-color: #0f172a;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --accent-color: #38bdf8;
  --glass-bg: rgba(30, 41, 59, 0.7);
  --glass-border: rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", "Noto Sans TC", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.glass-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.nav-tabs {
  display: flex;
  gap: 1.5rem;
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1.05rem;
  font-weight: 500;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  font-family: inherit;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--text-primary);
  }

  &.active {
    color: var(--accent-color);
    &::after {
      width: 100%;
    }
  }
}

.main-content {
  flex: 1;
  padding: 3rem 5%;
  display: flex;
  flex-direction: column;
}

/* 切換頁面之轉場動畫 */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
