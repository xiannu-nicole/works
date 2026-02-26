<script setup>
import applyImg_l from "@/assets/imgs/apply/1-l.png";
import applyImg_s from "@/assets/imgs/apply/1-s.png";
</script>

<template>
  <div class="webpage-container fade-in">
    <div class="project-section">
      <div class="header-section">
        <h2 class="title">一般網頁專案</h2>
        <p class="subtitle">提供各類線上系統服務與形象網頁建置。</p>
      </div>

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
            <img class="img-l" :src="applyImg_l" alt="特約商店線上申辦" />
            <img class="img-s" :src="applyImg_s" alt="特約商店線上申辦" />
            <div class="overlay-action hidden-mobile">
              <a
                href="https://www.pluspay.com.tw/Content/Merchant/Application.html"
                target="_blank"
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
  gap: 3rem;
  width: 100%;
  align-items: center;
  padding: 1rem 0;
}

.project-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
}

.header-section {
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;

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

.project-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.project-header {
  text-align: center;
  margin-bottom: 1rem;

  .project-title {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 0.8rem;
  }

  .project-desc {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.5;
    max-width: 600px;
    margin: 0 auto;
  }
}

.iframe-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.action-box {
  text-align: center;
  background: var(--glass-bg);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
}

.primary-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: var(--text-primary);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(50, 67, 95, 0.2);

  &:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(166, 127, 120, 0.3);
  }
}

.pic-wrapper {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.img-box {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(166, 127, 120, 0.25);
  border: 1px solid var(--glass-border);
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
  background: rgba(50, 67, 95, 0.6); // Gunmetal color with opacity
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
    background: #fff;
    color: var(--text-primary);
    font-size: 1.1rem;
    padding: 1rem 2rem;

    &:hover {
      background: var(--accent-color);
      color: #fff;
      transform: translateY(-2px) scale(1.05);
    }
  }
}

.show-mobile {
  display: none; // 預設隱藏，只在手機版顯示
}

@media (max-width: 768px) {
  .hidden-mobile {
    display: none !important; // 手機版不顯示 hover 遮罩層
  }

  .show-mobile {
    display: block; // 手機版顯示獨立的 action-box
  }

  .img-box {
    pointer-events: none; // 避免手機版觸發 hover
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
