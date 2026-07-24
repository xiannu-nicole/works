<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// 1. defineProps

// 2. defineEmits

// 3. ref / reactive (狀態宣告)
const route = useRoute();
const router = useRouter();

// 4. computed
const activeSubTab = computed(() => {
  if (route.name === "webPage") {
    return "webPage";
  }
  return "webView";
});

// 5. watch

// 6. Functions (業務邏輯函式)
const selectSubTab = (routeName: string) => {
  router.push({ name: routeName });
};

// 7. Lifecycle Hooks
</script>

<template>
  <div class="pluspay-container">
    <div class="sub-tabs-container">
      <nav class="sub-tabs" :data-active="activeSubTab">
        <button
          :class="[
            'sub-tab-btn',
            { active: activeSubTab === 'webView' },
          ]"
          @click="selectSubTab('webView')"
        >
          WebView
        </button>
        <button
          :class="[
            'sub-tab-btn',
            { active: activeSubTab === 'webPage' },
          ]"
          @click="selectSubTab('webPage')"
        >
          網頁專案
        </button>
      </nav>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.pluspay-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sub-tabs-container {
  display: flex;
  justify-content: center;
  margin-bottom: $spacing-48;
}

.sub-tabs {
  position: relative;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.5);
  padding: $spacing-4;
  border-radius: 50px;
  border: 1px solid $color-border;
  box-shadow: $shadow-s;

  &::before {
    content: "";
    position: absolute;
    top: $spacing-4;
    left: $spacing-4;
    height: calc(100% - 8px);
    width: calc(50% - 4px);
    background: $color-white;
    border-radius: 50px;
    box-shadow: $shadow-s;
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
  color: $color-text-secondary;
  font-size: $fs-base;
  font-weight: $fw-medium;
  padding: $spacing-8 $spacing-24;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  width: 50%;
  text-align: center;

  &:hover {
    color: $color-text-primary;
  }

  &.active {
    color: $color-accent;
  }
}
</style>
