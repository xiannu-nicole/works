<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const modules = [Navigation, Pagination, FreeMode];

// 依據產業類型分類
const portfolioCategories = ref([
  {
    categoryName: "餐飲 / 食品業",
    subTitle: "甜點店、傳統食品、餐飲品牌形象網站",
    projects: [
      {
        id: "ludousuan",
        title: "綠豆蒜製研所",
        image: "https://element.com.tw/ludousuan/image/banner/img-01.jpg",
        url: "https://element.com.tw/ludousuan/",
      },
      {
        id: "hanshao-korea",
        title: "韓燒 - 銅盤烤肉",
        image:
          "https://element.com.tw/hanshao-korea/public/image/about/img-01.jpg",
        url: "https://element.com.tw/hanshao-korea/",
      },
      {
        id: "snow-sakura",
        title: "櫻花樹夏",
        image:
          "https://yihsuanwebdesign.com/snow-sakura/public/image/banner/img-02.jpg?1025",
        url: "https://yihsuanwebdesign.com/snow-sakura/",
      },
      {
        id: "accuei-dessert",
        title: "Accueil 艾格伊",
        image:
          "https://hemusih.com/accuei-dessert/public/image/gallery/img-08.jpg",
        url: "https://hemusih.com/accuei-dessert/",
      },
      {
        id: "peng-agriculture",
        title: "湳雅山農鋪",
        image:
          "https://yihsuanwebdesign.com/peng-agriculture/public/image/about/img-02.jpg",
        url: "https://yihsuanwebdesign.com/peng-agriculture/",
      },
    ],
  },
  {
    categoryName: "生活服務產業",
    subTitle: "民宿、空間設計、搬家服務、防水工程",
    projects: [
      {
        id: "guangyu-inn",
        title: "光域文旅",
        image:
          "https://hemusih.com/guangyu-inn/img/rooms/1f/%E6%B5%AE%E5%85%89/1.jpg",
        url: "https://hemusih.com/guangyu-inn/",
      },
      {
        id: "lightandshadow",
        title: "洸寅品牌顧問股份有限公司",
        image: "https://lightandshadow.com.tw/public/image/about/img-02.jpg",
        url: "https://lightandshadow.com.tw/",
      },
      {
        id: "lotus-design",
        title: "大荷設計",
        image:
          "https://hemusih.com/lotus-design/public/image/banner/img-01.jpg",
        url: "https://hemusih.com/lotus-design/",
      },
      {
        id: "a-shun-moving",
        title: "阿順搬家",
        image:
          "https://yihsuanwebdesign.com/a-shun-moving/public/image/about/img-01.jpg",
        url: "https://yihsuanwebdesign.com/a-shun-moving/",
      },
      {
        id: "yingsh-waterproof",
        title: "瀛升蜘蛛人",
        image:
          "	https://lightandshadow.com.tw/yingsh-waterproof/image/banner/banner-l.jpg",
        url: "https://lightandshadow.com.tw/yingsh-waterproof/",
      },
    ],
  },
  {
    categoryName: "美容 / 美學 / 健康產業",
    subTitle: "美容工作室、保養品牌、草本健康產品",
    projects: [
      {
        id: "rose-beauty",
        title: "Rose 顏究所美學",
        image:
          "https://lightandshadow.com.tw/rose-beauty/public/image/banner/img-01.jpg",
        url: "https://lightandshadow.com.tw/rose-beauty/",
      },
      {
        id: "aesthetics-studio",
        title: "三紋藝術紋繡美學",
        image:
          "https://element.com.tw/aesthetics-studio/public/image/about/img-02.jpg",
        url: "https://element.com.tw/aesthetics-studio/",
      },
      {
        id: "naroherbs",
        title: "那羅香草",
        image: "https://element.com.tw/naroherbs/image/banner/img-01.jpg",
        url: "https://element.com.tw/naroherbs/",
      },
    ],
  },
  {
    categoryName: "教育 / 藝術教學",
    subTitle: "音樂教室、語言教育",
    projects: [
      {
        id: "peggie-music-house",
        title: "帕帕拉夏音樂學苑",
        image:
          "https://hemusih.com/peggie-music-house/public/image/banner/img-01.jpg",
        url: "https://hemusih.com/peggie-music-house/",
      },
      {
        id: "he-feng-japanese-tutor",
        title: "和風塾線上真人日語家教",
        image:
          "https://yihsuanwebdesign.com/he-feng-japanese-tutor/public/image/contact/bg-01.jpg",
        url: "https://yihsuanwebdesign.com/he-feng-japanese-tutor/",
      },
      {
        id: "infinity-spin-dance",
        title: "Infinityspin 無限旋轉舞蹈工作室",
        image:
          "https://yihsuanwebdesign.com/infinity-spin-dance/public/image/about/img-03.jpg",
        url: "https://yihsuanwebdesign.com/infinity-spin-dance/",
      },
      {
        id: "la-misericordia-del-arge",
        title: "藝典美術畫室",
        image:
          "https://element.com.tw/la-misericordia-del-arge/public/image/banner/img-01.jpg",
        url: "https://element.com.tw/la-misericordia-del-arge/",
      },
    ],
  },
]);

// Swiper 的 RWD 斷點設定
const swiperBreakpoints = {
  320: { slidesPerView: 1.2, spaceBetween: 16 },
  576: { slidesPerView: 2.2, spaceBetween: 20 },
  768: { slidesPerView: 2.8, spaceBetween: 24 },
  1024: { slidesPerView: 3.5, spaceBetween: 30 },
  1440: { slidesPerView: 4.5, spaceBetween: 30 },
};
</script>

<template>
  <div class="portfolio-container">
    <div class="page-header">
      <h2 class="main-title">一頁式網頁設計集</h2>
      <p class="subtitle">開發、切版與設計</p>
    </div>

    <div
      v-for="(category, index) in portfolioCategories"
      :key="index"
      class="category-row"
    >
      <div class="row-header">
        <h3 class="category-title">{{ category.categoryName }}</h3>
        <span class="category-subtitle">{{ category.subTitle }}</span>
      </div>

      <div class="swiper-wrapper-container">
        <swiper
          :modules="modules"
          :slides-per-view="2.5"
          :space-between="30"
          :free-mode="true"
          :navigation="true"
          :breakpoints="swiperBreakpoints"
          class="project-swiper"
        >
          <swiper-slide
            v-for="project in category.projects"
            :key="project.id"
            class="project-slide"
          >
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card"
            >
              <div class="image-wrapper">
                <img :src="project.image" :alt="project.title" loading="lazy" />
                <div class="overlay">
                  <span class="view-btn"
                    >前往網站 <span class="arrow">↗</span></span
                  >
                </div>
              </div>
              <div class="card-info">
                <h4>{{ project.title }}</h4>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  padding-bottom: 2rem;
}

.page-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  .main-title {
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

  .main-desc {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.category-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.row-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding-left: 0.5rem;
  border-left: 4px solid var(--accent-color);

  .category-title {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .category-subtitle {
    font-size: 0.95rem;
    color: var(--text-secondary);
    background: rgba(166, 127, 120, 0.08);
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
  }
}

.swiper-wrapper-container {
  width: 100%;
  position: relative;
  padding: 0 1rem;
}

.project-swiper {
  width: 100%;
  padding: 0 1rem 1.5rem;
  /* 允許左右按鈕超出邊界顯示 */
  overflow: visible;
}

.project-card {
  display: block;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.4s ease,
    border-color 0.4s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(166, 127, 120, 0.15);
    border-color: rgba(166, 127, 120, 0.4);
    .image-wrapper img {
      transform: scale(1.08);
    }

    .overlay {
      opacity: 1;
    }
  }
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--bg-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(166, 127, 120, 0.8) 0%,
    rgba(225, 220, 217, 0.3) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding-top: 18px;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #fff;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  .arrow {
    transition: transform 0.3s ease;
  }
}

.project-card:hover .arrow {
  transform: translate(3px, -3px);
}

.card-info {
  padding: 1rem 1.2rem;
  border-top: 1px solid rgba(166, 127, 120, 0.1);
  background-color: #fff;
  h4 {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/* 覆寫 Swiper 導覽按鈕 */
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
  top: 40%;
  font-size: 12px;
  &:hover {
    background: var(--text-primary);
    color: #fff;
    border-color: var(--text-primary);
    box-shadow: 0 0 15px rgba(50, 67, 95, 0.3);
  }
}

:deep(.swiper-button-prev) {
  left: -1.8rem;
}

:deep(.swiper-button-next) {
  right: -1.8rem;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .row-header {
    flex-direction: column;
    gap: 0.5rem;
    border-left: 3px solid var(--accent-color);

    .category-title {
      font-size: 1.3rem;
    }
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none; /* 手機版隱藏箭頭，主要靠滑動 */
  }
}
</style>
