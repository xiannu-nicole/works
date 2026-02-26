<script setup>
import { ref } from "vue";
import onePagePortfolio from "./components/onePagePortfolio.vue";
import webViewPortfolio from "./components/webViewPortfolio.vue";
import webPagePortfolio from "./components/webPagePortfolio.vue";

import barIcon from "@/assets/imgs/icon/bar.svg";
import closeIcon from "@/assets/imgs/icon/close.svg";

const activeTab = ref("onePagePortfolio"); // 'onePagePortfolio' or 'pluspay'
const activePluspayTab = ref("webView"); // 'webView' or 'webPage'
const isMobileMenuOpen = ref(false);

const selectTab = (tab) => {
  activeTab.value = tab;
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <div class="app-container">
    <header class="glass-header">
      <h1 class="logo">Nicole's Works</h1>
      <button
        class="hamburger"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Menu"
      >
        <img
          v-if="!isMobileMenuOpen"
          :src="barIcon"
          alt="Open Menu"
          class="menu-icon"
        />
        <img v-else :src="closeIcon" alt="Close Menu" class="menu-icon" />
      </button>

      <nav class="nav-tabs" :class="{ 'is-open': isMobileMenuOpen }">
        <button
          :class="['tab-btn', { active: activeTab === 'onePagePortfolio' }]"
          @click="selectTab('onePagePortfolio')"
        >
          行銷一頁式專案
        </button>
        <button
          :class="['tab-btn', { active: activeTab === 'pluspay' }]"
          @click="selectTab('pluspay')"
        >
          全盈支付
        </button>
      </nav>
    </header>

    <main class="main-content">
      <transition name="fade" mode="out-in">
        <onePagePortfolio v-if="activeTab === 'onePagePortfolio'" />
        <div v-else-if="activeTab === 'pluspay'" class="pluspay-container">
          <div class="sub-tabs-container">
            <nav class="sub-tabs" :data-active="activePluspayTab">
              <button
                :class="[
                  'sub-tab-btn',
                  { active: activePluspayTab === 'webView' },
                ]"
                @click="activePluspayTab = 'webView'"
              >
                WebView
              </button>
              <button
                :class="[
                  'sub-tab-btn',
                  { active: activePluspayTab === 'webPage' },
                ]"
                @click="activePluspayTab = 'webPage'"
              >
                網頁專案
              </button>
            </nav>
          </div>

          <transition name="fade" mode="out-in">
            <webViewPortfolio v-if="activePluspayTab === 'webView'" />
            <webPagePortfolio v-else-if="activePluspayTab === 'webPage'" />
          </transition>
        </div>
      </transition>
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Noto+Sans+TC:wght@300;400;500;700&display=swap");

:root {
  --bg-color: #e1dcd9; 
  --text-primary: #32435f; 
  --text-secondary: #8f8681; 
  --accent-color: #a67f78;
  --glass-bg: rgba(225, 220, 217, 0.6);
  --glass-border: rgba(166, 127, 120, 0.2);
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
  background: linear-gradient(
    to right,
    var(--text-primary),
    var(--accent-color)
  );
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

.hamburger {
  display: none;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  color: var(--text-primary);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}

@media (max-width: 768px) {
  main {
    width: 100vw;
    overflow: hidden;
  }
  .hamburger {
    display: flex;
  }
  .nav-tabs {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(225, 220, 217, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
    padding: 1.5rem 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    z-index: -1;
    box-shadow: 0 10px 20px rgba(166, 127, 120, 0.15);
    gap: 1rem;

    &.is-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  .tab-btn {
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
    background: transparent;

    &::after {
      bottom: 0px;
      width: 0;
      height: 2px;
      left: 50%;
    }

    &.active::after {
      width: 60px;
    }
  }
}

/* Sub-tabs for Pluspay section */
.pluspay-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sub-tabs-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.sub-tabs {
  position: relative;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.5);
  padding: 0.3rem;
  border-radius: 50px;
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 15px rgba(166, 127, 120, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    height: calc(100% - 0.6rem);
    width: calc(50% - 0.3rem);
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 2px 8px rgba(166, 127, 120, 0.15);
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 1;
  }

  &[data-active="webPage"]::before {
    transform: translateX(100%);
  }
}

.sub-tab-btn {
  position: relative;
  z-index: 2;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  width: 50%;
  text-align: center;

  &:hover {
    color: var(--text-primary);
  }

  &.active {
    color: var(--accent-color);
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
