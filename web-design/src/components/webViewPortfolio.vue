<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const modules = [Navigation, Pagination, EffectCards];

// Placeholders for webView PNGs (金融業流程演示用圖)
const flowSteps = ref([
  {
    id: 1,
    title: "1. 登入首頁",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image:
      "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "2. 帳戶總覽",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "3. 轉帳流程",
    desc: "直覺的卡片式選擇常用帳號，減少輸入錯誤。",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "4. 交易確認",
    desc: "完善的二次防呆確認與動態密碼驗證。",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "5. 完成結果",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1000&auto=format&fit=crop",
  },
]);
</script>

<template>
  <div class="webview-container">
    <div class="header-section">
      <h2 class="title">金融業 WebView 流程展示</h2>
      <p class="subtitle">
        將完整的 App 內嵌網頁操作流程，透過動態卡片輪播呈現，模擬真實操作手感。
      </p>
    </div>

    <div class="swiper-wrapper-container">
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :navigation="true"
        :pagination="{ clickable: true }"
        class="flow-swiper"
      >
        <swiper-slide
          v-for="step in flowSteps"
          :key="step.id"
          class="flow-slide"
        >
          <div class="slide-content">
            <div class="device-mockup">
              <!-- 後續可以替換成真實的單張流程圖檔png -->
              <img :src="step.image" :alt="step.title" class="screen-img" />
            </div>
            <div class="step-info">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webview-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
}

.header-section {
  text-align: center;
  max-width: 800px;

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-color) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.swiper-wrapper-container {
  width: 100%;
  max-width: 900px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

.flow-swiper {
  width: 320px; /* 模擬手機寬度呈現 */
  height: 650px;
  padding-bottom: 3rem; /* 為圓點留白 */
}

.flow-slide {
  border-radius: 24px;
  background-color: var(--bg-color);
  box-shadow: 0 15px 35px rgba(166, 127, 120, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--glass-border);
}

.slide-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.device-mockup {
  flex: 1;
  background: var(--bg-color);
  position: relative;
  overflow: hidden;

  .screen-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}

.step-info {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.85);
  border-top: 1px solid rgba(166, 127, 120, 0.2);
  text-align: left;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
}

/* 覆寫 Swiper 樣式以配合主題 */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.6);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);

  &::after {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: var(--accent-color);
  }
}

:deep(.swiper-pagination-bullet) {
  background: var(--text-secondary);
  opacity: 0.3;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--accent-color);
  opacity: 1;
  width: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
</style>
