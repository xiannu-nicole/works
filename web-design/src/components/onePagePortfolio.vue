<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "品牌視覺形象網站",
    desc: "強調視覺衝擊力與品牌故事的一頁式設計。",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "新品發表全螢幕展示",
    desc: "以大面積圖像與滾動視差帶出產品特色。",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "活動宣傳登錄頁",
    desc: "高轉換率導向，俐落的動線與強烈的行動呼籲。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "企業招募特輯",
    desc: "展現企業文化與活力的動態網頁設計。",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
]);
</script>

<template>
  <div class="portfolio-container">
    <div class="header-section">
      <h2 class="title">一頁式網頁作品</h2>
      <p class="subtitle">
        專注於流暢的滾動體驗與極致的視覺張力，打造讓人印象深刻的單頁網站。
      </p>
    </div>

    <div class="grid-layout">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="image-wrapper">
          <img :src="project.image" :alt="project.title" loading="lazy" />
          <div class="overlay">
            <button class="view-btn">查看作品</button>
          </div>
        </div>
        <div class="card-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

.header-section {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
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

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(56, 189, 248, 0.3);

    .image-wrapper img {
      transform: scale(1.05);
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
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.view-btn {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 1px solid var(--accent-color);
  background: transparent;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    color: #fff;
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
  }
}

.card-info {
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
  }
}
</style>
