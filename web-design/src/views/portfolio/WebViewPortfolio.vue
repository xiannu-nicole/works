<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import { img } from "@/assets/js/img";
import type { FlowItem } from "@/types/portfolio";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// 1. defineProps

// 2. defineEmits

// 3. ref / reactive (狀態宣告)
const modules = [Navigation, Pagination, EffectCards];

const transaction = ref<FlowItem[]>([
  {
    id: 1,
    title: "付款",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image: img.transaction1,
  },
  {
    id: 2,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.transaction2,
  },
  {
    id: 3,
    title: "提領 - step 1",
    desc: "直覺的卡片式選擇常用帳號，減少輸入錯誤。",
    image: img.transaction3,
  },
  {
    id: 4,
    title: "提領 - step 2",
    desc: "完善的二次防呆確認與動態密碼驗證。",
    image: img.transaction4,
  },
  {
    id: 5,
    title: "提領 - step 3",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image: img.transaction5,
  },
  {
    id: 6,
    title: "提領 - step 4",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image: img.transaction6,
  },
  {
    id: 7,
    title: "提領 - step 5",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image: img.transaction7,
  },
]);

const languages = ref<FlowItem[]>([
  {
    id: 1,
    title: "英文介面",
    desc: "英文介面切換與資訊呈現。",
    image: img.langEn3,
  },
  {
    id: 2,
    title: "越南文介面",
    desc: "越南文介面切換與資訊呈現。",
    image: img.langVn3,
  },
  {
    id: 3,
    title: "印尼文介面",
    desc: "印尼文介面切換與資訊呈現。",
    image: img.langIndo3,
  },
]);

const coupons = ref<FlowItem[]>([
  {
    id: 1,
    title: "優惠券領取",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image: img.couponImg1,
  },
  {
    id: 2,
    title: "優惠券列表",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.couponImg2,
  },
  {
    id: 3,
    title: "優惠券核銷",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.couponImg3,
  },
  {
    id: 4,
    title: "優惠券細節",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.couponImg4,
  },
]);

const vendor = ref<FlowItem[]>([
  {
    id: 1,
    title: "店家收款",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image: img.vendor1,
  },
  {
    id: 2,
    title: "交易紀錄",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.vendor2,
  },
  {
    id: 3,
    title: "入帳通知",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.vendor3,
  },
  {
    id: 4,
    title: "退款處理",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.vendor4,
  },
  {
    id: 5,
    title: "店家統計",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.vendor5,
  },
  {
    id: 6,
    title: "報表檢視",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.vendor6,
  },
  {
    id: 7,
    title: "系統設定",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: img.vendor7,
  },
]);

// 4. computed

// 5. watch

// 6. Functions

// 7. Lifecycle Hooks
</script>

<template>
  <div class="webview-container">
    <div class="header-section">
      <h2 class="title">WebView 流程專案</h2>
      <p class="subtitle">
        與 APP 端合作，負責 API 串接及合作夥伴 SDK 的整合與資料對接。
      </p>
    </div>

    <!-- 專案 1：多國語系 -->
    <div class="project-section">
      <div class="project-header">
        <h3 class="project-title">多國語系</h3>
        <p class="project-desc">
          針對移工設計，提供合作夥伴嵌入帶有多語系功能的 SDK。
        </p>
      </div>
      <div class="row-container">
        <div class="swiper-wrapper-container">
          <swiper
            :effect="'cards'"
            :grab-cursor="true"
            :modules="modules"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="flow-swiper"
          >
            <swiper-slide
              v-for="item in languages"
              :key="item.id"
              class="flow-slide"
            >
              <div class="slide-content">
                <div class="device-mockup">
                  <img :src="item.image" :alt="item.title" class="screen-img" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-box">
          <p>根據所選取的語系，顯示對應的語言介面。</p>
          <div class="tags">
            <span>中文</span>
            <span>英文</span>
            <span>印尼文</span>
            <span>越南文</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 專案 2：個人金融服務 -->
    <div class="project-section">
      <div class="project-header">
        <h3 class="project-title">個人金融服務</h3>
        <p class="project-desc">
          針對移工設計，提供合作夥伴嵌入帶有多語系功能的 SDK。
        </p>
      </div>
      <div class="row-container reverse">
        <div class="swiper-wrapper-container">
          <swiper
            :effect="'cards'"
            :grab-cursor="true"
            :modules="modules"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="flow-swiper"
          >
            <swiper-slide
              v-for="item in transaction"
              :key="item.id"
              class="flow-slide"
            >
              <div class="slide-content">
                <div class="device-mockup">
                  <img :src="item.image" :alt="item.title" class="screen-img" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-box">
          <p>多元化的交易功能，協助移工夥伴更便捷地完成各種交易。</p>
          <div class="tags">
            <span>付款</span>
            <span>轉帳</span>
            <span>商業/個人收款</span>
            <span>儲值</span>
            <span>提領</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 專案 3：優惠券 -->
    <div class="project-section">
      <div class="project-header">
        <h3 class="project-title">優惠券服務</h3>
        <p class="project-desc">完整的優惠券流程，包含使用與狀態檢視。</p>
      </div>
      <div class="row-container">
        <div class="swiper-wrapper-container">
          <swiper
            :effect="'cards'"
            :grab-cursor="true"
            :modules="modules"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="flow-swiper"
          >
            <swiper-slide
              v-for="item in coupons"
              :key="item.id"
              class="flow-slide"
            >
              <div class="slide-content">
                <div class="device-mockup">
                  <img :src="item.image" :alt="item.title" class="screen-img" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-box">
          <p>直觀的介面設計，讓用戶輕鬆領取優惠券，並隨時檢視使用狀態。</p>
          <div class="tags">
            <span>狀態檢視</span>
            <span>核銷/付款</span>
            <span>活動資訊</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 專案 4：店家管理 -->
    <div class="project-section">
      <div class="project-header">
        <h3 class="project-title">店家管理後台</h3>
        <p class="project-desc">為合作店家打造的專屬後台。</p>
      </div>
      <div class="row-container reverse">
        <div class="swiper-wrapper-container">
          <swiper
            :effect="'cards'"
            :grab-cursor="true"
            :modules="modules"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="flow-swiper"
          >
            <swiper-slide
              v-for="item in vendor"
              :key="item.id"
              class="flow-slide"
            >
              <div class="slide-content">
                <div class="device-mockup">
                  <img :src="item.image" :alt="item.title" class="screen-img" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-box">
          <p>
            專為合作店家設計的手機版後台，店家可快速查詢交易紀錄並即時掌握入帳金額。
          </p>
          <div class="tags">
            <span>收款掃描</span>
            <span>入帳通知</span>
            <span>交易紀錄</span>
            <span>退款處理</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webview-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-32;
  width: 100%;
  align-items: center;
}

.project-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-48;
  width: 100%;
  align-items: center;
  margin-bottom: $spacing-120;

  &:last-child {
    margin-bottom: 0;
  }
}

.header-section {
  text-align: center;
  max-width: 800px;
  margin-bottom: $spacing-32;

  .title {
    font-size: $fs-xxl;
    font-weight: $fw-bold;
    margin-bottom: $spacing-16;
    background: linear-gradient(
      135deg,
      $color-text-primary 0%,
      $color-accent 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    color: $color-text-secondary;
    font-size: $fs-h3;
    line-height: $line-height-loose;
  }
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

.row-container {
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $spacing-48;
  & > div {
    flex: 1;
  }
  &.reverse {
    flex-direction: row-reverse;
  }
  .swiper-wrapper-container {
    padding: $spacing-20;
  }
  .text-box .tags {
    display: flex;
    gap: $spacing-8;
    font-size: $fs-base;
    margin-top: $spacing-20;
    span {
      display: inline-block;
      padding: $spacing-4 $spacing-8;
      border-radius: $radius-s;
      background-color: rgba(255, 255, 255, 0.45);
      color: $color-text-secondary;
    }
  }
}

.swiper-wrapper-container {
  width: 100%;
  max-width: 900px;
  padding: $spacing-32 0;
  display: flex;
  justify-content: center;
}

.flow-swiper {
  width: 320px;
  height: 650px;
  padding: $spacing-20;
  padding-bottom: $spacing-40;
}

.flow-slide {
  border-radius: $radius-l;
  background-color: $color-bg;
  box-shadow: $shadow-l;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid $color-border;
}

.slide-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.device-mockup {
  flex: 1;
  background: $color-bg;
  position: relative;
  overflow: hidden;

  .screen-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: $color-text-primary;
  background: rgba(255, 255, 255, 0.7);
  width: 40px;
  height: 40px;
  padding: $spacing-8;
  border-radius: $radius-round;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid $color-border;
  box-shadow: $shadow-s;
  font-size: $fs-small;
  &:hover {
    background: $color-text-primary;
    color: $color-white;
    border-color: $color-text-primary;
    box-shadow: 0 0 15px rgba(50, 67, 95, 0.3);
  }
}

:deep(.swiper-pagination-bullet) {
  background: $color-text-secondary;
  opacity: 0.3;
}

:deep(.swiper-pagination-bullet-active) {
  background: $color-accent;
  opacity: 1;
  width: 20px;
  border-radius: $radius-s;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .row-container {
    flex-direction: column;
    gap: $spacing-24;
    &.reverse {
      flex-direction: column;
    }
  }
}
</style>
