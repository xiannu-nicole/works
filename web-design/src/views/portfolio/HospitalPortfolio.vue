<template>
  <div class="portfolio-hospital-container">
    <!-- Hero 區塊 -->
    <section class="hero-section">
      <div class="hero-info">
        <h2 class="main-title">醫療資訊系統</h2>
        <p class="hero-desc">
          負責醫療工作站前端規劃與開發，從資訊架構、介面設計、操作流程到 AI 輔助互動，打造兼顧操作效率、易用性與系統一致性的工作平台。
        </p>
        <div class="tech-tags">
          <span class="tech-tag" v-for="tag in techTags" :key="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="hero-visual">
        <div class="image-frame">
          <img :src="img.hospitalDashboardMockup" alt="醫療資訊系統儀表板介面" class="dashboard-mockup-img" />
        </div>
      </div>
    </section>

    <!-- 01 專案概覽 -->
    <section class="content-card full-width-card">
      <div class="section-header">
        <span class="section-num">01</span>
        <h2 class="section-title-inline">專案概覽</h2>
      </div>
      <div class="overview-grid">
        <div class="overview-item" v-for="item in overviewData" :key="item.title">
          <div class="overview-icon" v-html="item.icon"></div>
          <div class="overview-content">
            <h3 class="overview-title">{{ item.title }}</h3>
            <p class="overview-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 工作內容與介面規劃 -->
    <section class="showcase-section">
      <div class="section-header">
        <span class="section-num">02</span>
        <h2 class="section-title-inline">工作內容與介面規劃實例</h2>
      </div>
      <div class="showcase-container">

        <!-- 01 模式切換與入口規劃 -->
        <div class="showcase-row layout-text-visual">
          <div class="col-text">
            <span class="badge-num">01</span>
            <h3 class="showcase-title">模式切換與入口規劃</h3>
            <ul class="showcase-bullets">
              <li>規劃一般模式與管理模式的登入入口及操作流程。</li>
              <li>設計情境式提示與權限引導，協助理解功能限制。</li>
            </ul>
          </div>
          <div class="col-visual">
            <div class="img-wrapper imgs">
              <img :src="img.hospital_ui_1" alt="">
              <img :src="img.hospital_ui_2" alt="">
            </div>
          </div>
        </div>

        <!-- 02 知識助手互動 -->
        <div class="showcase-row layout-visual-text">
          <div class="col-visual">
            <div class="img-wrapper">
              <img :src="img.hospital_ui_5" alt="">
            </div>
          </div>
          <div class="col-text">
            <span class="badge-num">02</span>
            <h3 class="showcase-title">知識助手互動</h3>
            <ul class="showcase-bullets">
              <li>建立 AI 助手介面與互動元件。</li>
              <li>規劃提問流程及對話狀態。</li>
              <li>設計符合工作情境的互動模式，降低操作中斷。</li>
            </ul>
          </div>
        </div>

        <!-- 03 統計儀表板 -->
        <div class="showcase-row layout-visual-text">
          <div class="col-text">
            <span class="badge-num">03</span>
            <h3 class="showcase-title">統計儀表板</h3>
            <ul class="showcase-bullets">
              <li>規劃儀表板資訊架構與資料視覺化。</li>
              <li>設計資訊分級，呈現關鍵數字與趨勢。</li>
              <li>透過卡片化與圖表呈現，提升整體狀況的判讀效率。</li>
            </ul>
          </div>
          <div class="col-visual">
            <div class="img-wrapper">
              <img :src="img.hospital_ui_4" alt="">
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 03 設計與開發流程 -->
    <section class="content-card full-width-card">
      <div class="section-header">
        <span class="section-num">03</span>
        <h2 class="section-title-inline">設計與開發流程</h2>
      </div>
      <div class="dev-pipeline">
        <template v-for="(step, index) in devPipeline" :key="step.title">
          <div class="pipeline-step">
            <div class="pipeline-icon" v-html="step.icon"></div>
            <div class="pipeline-text">
              <h4 class="pipeline-title">{{ step.title }}</h4>
              <p class="pipeline-desc">{{ step.desc }}</p>
            </div>
          </div>
          <div v-if="index < devPipeline.length - 1" class="pipeline-arrow">
            →
          </div>
        </template>
      </div>
    </section>

    <!-- 04 能力總結 -->
    <section class="content-card full-width-card">
      <div class="section-header">
        <span class="section-num">04</span>
        <h2 class="section-title-inline">能力總結</h2>
      </div>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in highlightSkills" :key="skill.title">
          <div class="skill-icon-box" v-html="skill.icon"></div>
          <div class="skill-content">
            <h4 class="skill-title">{{ skill.title }}</h4>
            <p class="skill-desc">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { img } from "@/assets/js/img";

export default {
  name: "HospitalPortfolio",
  data() {
    return {
      img,
      techTags: [
        "Vue 2", "Vuex", "Vue Router", "SCSS", "WebSocket", "RESTful API", "AI 輔助開發"
      ],
      overviewData: [
        {
          title: "專案背景",
          desc: "因應高資訊密度、即時狀態變動與不同角色需求，規劃資訊架構、權限機制與操作流程，提升資訊判讀效率與操作體驗。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg>`
        },
        {
          title: "我的角色",
          desc: "負責前端介面規劃、資訊架構設計、元件開發、API 串接、權限流程梳理，以及即時資料同步與 AI 助手功能整合。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
          title: "核心目標",
          desc: "提升第一線人員的操作效率，降低資訊判讀成本，並透過權限機制與介面引導，建立一致且直覺的操作體驗。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`
        }
      ],
      devPipeline: [
        {
          title: "需求分析",
          desc: "理解醫療流程、角色差異與關鍵操作情境。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
        },
        {
          title: "UX 規劃",
          desc: "定義資訊操作順序、限制條件與操作回饋。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`
        },
        {
          title: "前端實作",
          desc: "建立元件化介面、串接 API / WebSocket，整合狀態管理。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
        },
        {
          title: "驗證優化",
          desc: "依回饋持續調整版面、文案與流程清晰度。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
        }
      ],
      highlightSkills: [
        {
          title: "資訊架構能力",
          desc: "能從複雜流程中整理出清晰的介面與視覺層級。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="3" width="4" height="6"/><rect x="2" y="15" width="4" height="6"/><rect x="10" y="15" width="4" height="6"/><rect x="18" y="15" width="4" height="6"/><path d="M12 9v6"/><path d="M4 15v-2h16v2"/></svg>`
        },
        {
          title: "跨角色流程規劃",
          desc: "理解使用者角色差異，設計對應權限與功能入口。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
          title: "前後端協作",
          desc: "可依體驗需求與後端溝通資料結構與欄位補充。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
        },
        {
          title: "即時系統實作",
          desc: "建置 WebSocket 即時同步機制，確保高頻狀態更新下的介面一致性與操作流暢性。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`
        },
        {
          title: "AI 功能整合",
          desc: "整合 AI 助手至既有系統流程，規劃互動介面與操作體驗，提升資訊查詢效率與使用流暢度。",
          icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.portfolio-hospital-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-40;
  width: 100%;
  padding-bottom: $spacing-48;
}

/* 統一 SVG Icon 尺寸及樣式 */
::v-deep .icon {
  width: 24px !important;
  height: 24px !important;
  display: block;
}

/* 共用 Section 標題 */
.section-header {
  display: flex;
  align-items: center;
  gap: $spacing-12;
  margin-bottom: $spacing-32;
  border-bottom: 1px solid rgba($color-border, 0.5);
  padding-bottom: $spacing-16;

  .section-num {
    font-size: $fs-h2;
    font-weight: $fw-bold;
    color: $color-primary;
  }

  .section-title-inline {
    font-size: $fs-h2;
    font-weight: $fw-bold;
    color: $color-text-primary;
    margin: 0;
  }
}

.content-card {
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-l;
  padding: $spacing-40;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

  &.bg-light {
    background: rgba($color-primary, 0.02);
  }
}

/* ================= Hero 區塊 ================= */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-48;
  align-items: center;
  background: $color-primary;
  border-radius: $radius-l;
  padding: $spacing-48;
  color: $color-white;
  overflow: hidden;
  position: relative;
}

.hero-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-20;
  z-index: 2;
}

.main-title {
  font-size: 40px;
  font-weight: $fw-bold;
  line-height: $line-height-tight;
  margin: 0;
}

.hero-desc {
  font-size: $fs-base;
  line-height: $line-height-loose;
  opacity: 0.9;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-8;
  margin-top: $spacing-8;

  .tech-tag {
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: $spacing-4 $spacing-12;
    border-radius: $radius-m;
    font-size: $fs-small;
  }
}

.hero-visual {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.image-frame {
  width: 100%;
  border-radius: $radius-m;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: $color-white;
}

.dashboard-mockup-img {
  width: 100%;
  height: auto;
  display: block;
}


/* ================= 01 專案概覽 ================= */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-32;
}

.overview-item {
  display: flex;
  gap: $spacing-16;
}

.overview-icon {
  width: 48px;
  height: 48px;
  background: $color-primary;
  color: $color-white;
  border-radius: $radius-round;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.overview-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-8;
}

.overview-title {
  font-size: $fs-h3;
  font-weight: $fw-bold;
  color: $color-text-primary;
}

.overview-desc {
  font-size: $fs-base;
  color: $color-text-secondary;
  line-height: $line-height-loose;
}


/* ================= 02 工作內容與介面規劃 ================= */
.showcase-section {
  display: flex;
  flex-direction: column;
}

.showcase-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-40;
}

.showcase-row {
  display: flex;
  gap: $spacing-32;
  align-items: center;
  padding: $spacing-40;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-l;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
}

.col-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: $spacing-16;

  .badge-num {
    background: $color-primary;
    color: $color-white;
    font-size: $fs-base;
    font-weight: $fw-bold;
    width: 32px;
    height: 32px;
    border-radius: $radius-s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .showcase-title {
    font-size: $fs-h2;
    font-weight: $fw-bold;
    color: $color-text-primary;
    margin: 0;
  }

  .showcase-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $spacing-12;

    li {
      font-size: $fs-base;
      color: $color-text-secondary;
      line-height: $line-height-loose;
      position: relative;
      padding-left: $spacing-16;

      &::before {
        content: "•";
        color: $color-primary;
        font-weight: $fw-bold;
        position: absolute;
        left: 0;
      }
    }
  }
}

.col-visual {
  flex: 2;

  .img-wrapper {
    display: flex;
    gap: $spacing-20;

    img {
      flex: 1;
      width: 100%;
      border-radius: $radius-m;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    &.imgs {
      flex-direction: column;

      img {
        width: 70%;

        &:nth-child(even) {
          margin-left: auto;
        }
      }
    }
  }
}

/* ================= 03 設計與開發流程 ================= */
.dev-pipeline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pipeline-step {
  display: flex;
  align-items: center;
  gap: $spacing-12;
  flex: 1;
}

.pipeline-icon {
  width: 48px;
  height: 48px;
  background: $color-primary;
  color: $color-white;
  border-radius: $radius-round;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pipeline-text {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.pipeline-title {
  font-size: $fs-h3;
  font-weight: $fw-bold;
  color: $color-text-primary;
}

.pipeline-desc {
  font-size: $fs-base;
  color: $color-text-secondary;
  line-height: $line-height-base;
}

.pipeline-arrow {
  color: $gray-300;
  font-size: 24px;
  padding: 0 $spacing-16;
}


/* ================= 04 履歷可凸顯的能力 ================= */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: $spacing-24;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: $spacing-12;
}

.skill-icon-box {
  width: 40px;
  height: 40px;
  color: $color-primary;
  background: rgba($color-primary, 0.1);
  border-radius: $radius-s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-8;
}

.skill-title {
  font-size: $fs-h3;
  font-weight: $fw-bold;
  color: $color-text-primary;
}

.skill-desc {
  font-size: $fs-base;
  color: $color-text-secondary;
  line-height: $line-height-loose;
}

/* ================= 響應式 ================= */
@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-section {
    grid-template-columns: 1fr;
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }

  .showcase-row {
    grid-template-columns: 1fr !important;
    gap: $spacing-24;
    padding: $spacing-24;

    &.layout-visual-text,
    &.layout-text-visual {
      .col-text {
        grid-column: 1 !important;
        order: 1;
      }

      .col-visual {
        grid-column: 1 !important;
        order: 2;
      }

      .col-outcome {
        grid-column: 1 !important;
        order: 3;
        border-left: none;
        border-top: 1px dashed $color-border;
        padding-left: 0;
        padding-top: $spacing-16;
      }
    }
  }

  .dev-pipeline {
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-24;
  }

  .pipeline-arrow {
    transform: rotate(90deg);
    padding: 0;
    margin-left: 20px;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
