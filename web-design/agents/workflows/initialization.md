---
description: 初始化專案環境 (Vue 3 Stack)
---

請協助初始化 Vue 3 專案環境。請讀取 **@vue3.md** 與 **@scss_design_system.md**：

### 1. 依賴安裝

- 提供安裝 `vue`, `pinia`, `vue-router`, `typescript`, `sass` 的指令。

### 2. 目錄結構

- 在 `src/` 建立：`assets/css/_shared`, `assets/img`, `assets/js`, `types`, `utils`, `router`, `store`, `views`, `components/common`, `components/page`, `components/layout`。

### 3. 基礎規範檔案

- **SCSS 系統建構：**
  - **定義層 (`_shared/`)**：包含 `_color.scss`, `_space.scss`, `_typography.scss`, `_shadow.scss`, `_all.scss` 等變數與 Mixins（純定義，不產生實體 CSS）。
  - **渲染層 (`main.scss`)**：匯入 `_shared/_all.scss` 並定義 `body`, `reset` 等全域基礎樣式（此檔案為全專案唯一的實體樣式入口）。
- **模板引用：** 參考 @boilerplates.md 產出 `main.ts`, `App.vue`, `router/index.ts`, `store/index.ts` 與 `assets/js/img.ts`。

### 4. Vite 配置

- **路徑別名**：配置 `@` 指向 `src` 目錄。
- **全域變數注入 (`additionalData`)**：
  - **執行動作**：僅將 `@import "@/assets/css/_shared/_all.scss";` 自動注入到所有組件。
  - **排除 Module Loop 邏輯說明**：
    - 嚴禁注入 `main.scss` 或任何包含實體 CSS 宣告（如 `body {}`）的檔案。
    - **目的**：防止 Vite 在編譯每個組件時重複產生全域樣式，避免打包體積膨脹 (CSS Bloat) 與樣式權重衝突。

### 5. 入口掛載 (main.ts)
- 必須在 `main.ts` 中手動 `import '@/assets/css/main.scss'`，確保全域樣式僅被載入一次。

### 6. 執行檢查
- [ ] 命名是否符合全域小駝峰 / 檔案 PascalCase？
- [ ] SCSS 目錄路徑是否統一為 `@/assets/css/_shared/`？
- [ ] 是否完全遵守 `@scss_design_system.md` 的變數規範？