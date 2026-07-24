<script setup lang="ts">
import MainHeader from "@/components/layout/MainHeader.vue";

// 1. defineProps

// 2. defineEmits

// 3. ref / reactive

// 4. computed

// 5. watch

// 6. Functions

// 7. Lifecycle Hooks
</script>

<template>
  <div class="app-container">
    <MainHeader />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: $spacing-48 5%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .main-content {
    width: 100vw;
    overflow: hidden;
  }
}
</style>
