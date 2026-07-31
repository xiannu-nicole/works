<template>
  <header class="glass-header">
    <h1 class="logo" @click="handleSelectTab('onePagePortfolio')">
      Nicole's Works
    </h1>
    <button
      class="hamburger"
      @click="toggleMobileMenu"
      aria-label="選單"
    >
      <img
        v-if="!isMobileMenuOpen"
        :src="img.barIcon"
        alt="開啟選單"
        class="menu-icon"
      />
      <img v-else :src="img.closeIcon" alt="關閉選單" class="menu-icon" />
    </button>

    <nav class="nav-tabs" :class="{ 'is-open': isMobileMenuOpen }">
      <button
        :class="['tab-btn', { active: activeTab === 'onePagePortfolio' }]"
        @click="handleSelectTab('onePagePortfolio')"
      >
        行銷一頁式專案
      </button>
      <button
        :class="['tab-btn', { active: activeTab === 'pluspay' }]"
        @click="handleSelectTab('pluspay')"
      >
        全盈支付
      </button>
      <button
        :class="['tab-btn', { active: activeTab === 'hospitalProject' }]"
        @click="handleSelectTab('hospitalProject')"
      >
        醫療專案
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { img } from "@/assets/js/img";

// 1. defineProps

// 2. defineEmits

// 3. ref / reactive (狀態宣告)
const route = useRoute();
const router = useRouter();
const isMobileMenuOpen = ref(false);

// 4. computed
const activeTab = computed(() => {
  if (route.name === "pluspay" || route.matched.some((r) => r.name === "pluspay")) {
    return "pluspay";
  }
  if (route.name === "hospitalProject") {
    return "hospitalProject";
  }
  return "onePagePortfolio";
});

// 5. watch

// 6. Functions (業務邏輯函式)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleSelectTab = (routeName: string) => {
  isMobileMenuOpen.value = false;
  router.push({ name: routeName });
};

// 7. Lifecycle Hooks
</script>

<style lang="scss" scoped>
.glass-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-24 5%;
  background: $color-glass-bg;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid $color-border;
}

.logo {
  font-size: $fs-h1;
  font-weight: $fw-bold;
  background: linear-gradient(
    to right,
    $color-text-primary,
    $color-accent
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  cursor: pointer;
}

.nav-tabs {
  display: flex;
  gap: $spacing-24;
}

.tab-btn {
  background: transparent;
  border: none;
  color: $color-text-secondary;
  font-size: $fs-base;
  font-weight: $fw-medium;
  padding: $spacing-8 $spacing-8;
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
    background: $color-accent;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: $color-text-primary;
  }

  &.active {
    color: $color-accent;
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
  color: $color-text-primary;
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
  .hamburger {
    display: flex;
  }

  .nav-tabs {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: $color-glass-menu-bg;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid $color-border;
    padding: $spacing-24 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    z-index: -1;
    box-shadow: $shadow-m;
    gap: $spacing-16;

    &.is-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  .tab-btn {
    padding: $spacing-8 $spacing-32;
    font-size: $fs-h3;
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
</style>
