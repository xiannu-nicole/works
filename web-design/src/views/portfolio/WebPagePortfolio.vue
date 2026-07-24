<script setup lang="ts">
import { img } from "@/assets/js/img";

// 1. defineProps

// 2. defineEmits

// 3. ref / reactive (狀態宣告)

// 4. computed

// 5. watch

// 6. Functions

// 7. Lifecycle Hooks
</script>

<template>
  <div class="webpage-container fade-in">
    <div class="project-section">
      <!-- 專案 1：特約商店線上申辦 -->
      <div class="project-item">
        <div class="project-header">
          <h3 class="project-title">特約商店線上申辦</h3>
          <p class="project-desc">
            提供特約機構與薪轉代發的線上申請服務，整合證件上傳與條款確認的完整流程。
          </p>
        </div>

        <div class="pic-wrapper">
          <div class="img-box">
            <img class="img-l" :src="img.applyImgL" alt="特約商店線上申辦" />
            <img class="img-s" :src="img.applyImgS" alt="特約商店線上申辦" />
            <div class="overlay-action hidden-mobile">
              <a
                href="https://www.pluspay.com.tw/Content/Merchant/Application.html"
                target="_blank"
                rel="noopener noreferrer"
                class="primary-btn"
              >
                在新視窗開啟連結 ↗
              </a>
            </div>
          </div>
          <div class="action-box show-mobile">
            <p>整合式單頁線上申請表單，支援各裝置響應式瀏覽。</p>
            <a
              href="https://www.pluspay.com.tw/Content/Merchant/Application.html"
              target="_blank"
              rel="noopener noreferrer"
              class="primary-btn"
            >
              在新視窗開啟連結 ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webpage-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-48;
  width: 100%;
  align-items: center;
  padding: $spacing-16 0;
}

.project-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $spacing-48;
  align-items: center;
}

.project-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $spacing-32;
  align-items: center;
}

.project-header {
  text-align: center;
  margin-bottom: $spacing-16;

  .project-title {
    font-size: $fs-h2;
    color: $color-text-primary;
    margin-bottom: $spacing-12;
  }

  .project-desc {
    color: $color-text-secondary;
    font-size: $fs-base;
    line-height: $line-height-base;
    max-width: 600px;
    margin: 0 auto;
  }
}

.action-box {
  text-align: center;
  background: $color-glass-bg;
  padding: $spacing-24 $spacing-32;
  border-radius: $radius-l;
  border: 1px solid $color-border;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  p {
    color: $color-text-secondary;
    margin-bottom: $spacing-16;
    font-size: $fs-base;
  }
}

.primary-btn {
  display: inline-block;
  padding: $spacing-12 $spacing-24;
  background: $color-text-primary;
  color: $color-white;
  text-decoration: none;
  border-radius: $radius-m;
  font-weight: $fw-medium;
  transition: all 0.3s ease;
  box-shadow: $shadow-s;

  &:hover {
    background: $color-accent;
    transform: translateY(-2px);
    box-shadow: $shadow-m;
  }
}

.pic-wrapper {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-32;
}

.img-box {
  position: relative;
  width: 100%;
  border-radius: $radius-l;
  overflow: hidden;
  box-shadow: $shadow-l;
  border: 1px solid $color-border;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
    &.img-l {
      display: block;
    }
    &.img-s {
      display: none;
    }
  }

  &:hover {
    img {
      transform: scale(1.02);
    }

    .overlay-action {
      opacity: 1;
      visibility: visible;

      .primary-btn {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

.overlay-action {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(50, 67, 95, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 10;

  .primary-btn {
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.1s;
    background: $color-white;
    color: $color-text-primary;
    font-size: $fs-h3;
    padding: $spacing-16 $spacing-32;

    &:hover {
      background: $color-accent;
      color: $color-white;
      transform: translateY(-2px) scale(1.05);
    }
  }
}

.show-mobile {
  display: none;
}

@media (max-width: 768px) {
  .hidden-mobile {
    display: none !important;
  }

  .show-mobile {
    display: block;
  }

  .img-box {
    pointer-events: none;
    img {
      &.img-l {
        display: none;
      }
      &.img-s {
        display: block;
      }
    }
  }
}
</style>
