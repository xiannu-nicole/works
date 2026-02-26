<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import transaction_img_1 from "@/assets/imgs/transaction/1.png";
import transaction_img_2 from "@/assets/imgs/transaction/2.png";
import transaction_img_3 from "@/assets/imgs/transaction/3.png";
import transaction_img_4 from "@/assets/imgs/transaction/4.png";
import transaction_img_5 from "@/assets/imgs/transaction/5.png";
import transaction_img_6 from "@/assets/imgs/transaction/6.png";
import transaction_img_7 from "@/assets/imgs/transaction/7.png";

import indo_3 from "@/assets/imgs/languages/indo-3.png";
import vn_3 from "@/assets/imgs/languages/vn-3.png";
import en_3 from "@/assets/imgs/languages/en-3.png";

import coupon_img_1 from "@/assets/imgs/coupon/coupon-1.jpg";
import coupon_img_2 from "@/assets/imgs/coupon/coupon-2.jpg";
import coupon_img_3 from "@/assets/imgs/coupon/coupon-3.jpg";
import coupon_img_4 from "@/assets/imgs/coupon/coupon-4.jpg";

import vendor_img_1 from "@/assets/imgs/vendor/1.png";
import vendor_img_2 from "@/assets/imgs/vendor/2.png";
import vendor_img_3 from "@/assets/imgs/vendor/3.png";
import vendor_img_4 from "@/assets/imgs/vendor/4.png";
import vendor_img_5 from "@/assets/imgs/vendor/5.png";
import vendor_img_6 from "@/assets/imgs/vendor/6.png";
import vendor_img_7 from "@/assets/imgs/vendor/7.png";

const modules = [Navigation, Pagination, EffectCards];

const transaction = ref([
  {
    id: 1,
    title: "付款",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image: transaction_img_1,
  },
  {
    id: 2,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: transaction_img_2,
  },
  {
    id: 3,
    title: "提領 - step 1",
    desc: "直覺的卡片式選擇常用帳號，減少輸入錯誤。",
    image: transaction_img_3,
  },
  {
    id: 4,
    title: "提領 - step 2",
    desc: "完善的二次防呆確認與動態密碼驗證。",
    image: transaction_img_4,
  },
  {
    id: 5,
    title: "提領 - step 3",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image: transaction_img_5,
  },
  {
    id: 6,
    title: "提領 - step 4",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image: transaction_img_6,
  },
  {
    id: 7,
    title: "提領 - step 5",
    desc: "提供電子收據分享功能與溫馨的完成動畫。",
    image: transaction_img_7,
  },
]);

const languages = ref([
  {
    id: 7,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: en_3,
  },
  {
    id: 8,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vn_3,
  },
  {
    id: 9,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: indo_3,
  },
]);

const coupons = ref([
  {
    id: 1,
    title: "付款",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image: coupon_img_1,
  },
  {
    id: 2,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: coupon_img_2,
  },
  {
    id: 3,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: coupon_img_3,
  },
  {
    id: 4,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: coupon_img_4,
  },
]);

const vendor = ref([
  {
    id: 1,
    title: "付款",
    desc: "結合生物辨識的快速登入介面，簡潔俐落。",
    image: vendor_img_1,
  },
  {
    id: 2,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vendor_img_2,
  },
  {
    id: 3,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vendor_img_3,
  },
  {
    id: 4,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vendor_img_4,
  },
  {
    id: 5,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vendor_img_5,
  },
  {
    id: 6,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vendor_img_6,
  },
  {
    id: 7,
    title: "轉帳",
    desc: "清晰呈現資產圓餅圖與近期交易明細。",
    image: vendor_img_7,
  },
]);
</script>

<template>
  <div class="webview-container">
    <div class="header-section">
      <h2 class="title">多國語系</h2>
      <p class="subtitle">
        針對移工設計，與 APP 端協作，提供合作夥伴嵌入帶有多語系功能的 SDK，讓非中文使用者也能享有註冊、付款、轉帳等功能。
      </p>
    </div>
    <!-- 多語系 -->
    <div class="row-container">
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
            v-for="item in languages"
            :key="item.id"
            class="flow-slide"
          >
            <div class="slide-content">
              <div class="device-mockup">
                <img :src="item.image" :alt="item.title" class="screen-img" />
              </div>
              <div class="item-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-box">
        <p>根據所選取的語系，顯示對應的語言介面。</p>
      </div>
    </div>
    <!-- 交易 -->
    <div class="row-container">
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
            v-for="item in transaction"
            :key="item.id"
            class="flow-slide"
          >
            <div class="slide-content">
              <div class="device-mockup">
                <img :src="item.image" :alt="item.title" class="screen-img" />
              </div>
              <div class="item-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-box">
        <p>交易、轉帳、提領等一系列服務。</p>
      </div>
    </div>
    <!-- 優惠券 -->
    <div class="row-container">
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
            v-for="item in coupons"
            :key="item.id"
            class="flow-slide"
          >
            <div class="slide-content">
              <div class="device-mockup">
                <img :src="item.image" :alt="item.title" class="screen-img" />
              </div>
              <div class="item-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-box">
        <P></P>
      </div>
    </div>
    <!-- 店家管理 -->
    <div class="row-container">
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
            v-for="item in vendor"
            :key="item.id"
            class="flow-slide"
          >
            <div class="slide-content">
              <div class="device-mockup">
                <img :src="item.image" :alt="item.title" class="screen-img" />
              </div>
              <div class="item-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-box">
        <P></P>
      </div>
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

.row-container {
  width: 100%;
  max-width: 798px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  .swiper-wrapper-container {
    padding: 20px;
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
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
  width: 320px; 
  height: 650px;
  padding: 20px;
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

.item-info {
  padding: 1.5rem;
  background: #fff;
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

.swiper-pagination{
  margin-bottom: -20px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.7);
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 12px rgba(166, 127, 120, 0.15);
  font-size: 12px;
  &:hover {
    background: var(--text-primary);
    color: #fff;
    border-color: var(--text-primary);
    box-shadow: 0 0 15px rgba(50, 67, 95, 0.3);
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
