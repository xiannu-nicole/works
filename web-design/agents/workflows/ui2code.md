---
description: 將 UI 設計稿精準轉換為 Vue 程式碼。在無後端階段，優先完成「組件拆解」與「靜態切版」，並預留數據介面。
---

請讀取 **Global Rules**、**@scss_design_system.md** 及對應 Vue 版本規範（**@vue2.md** 或 **@vue3.md**）執行以下開發任務：

### 1. **分析與建模**
- **結構分析：** 識別 UI 元素並提供組件拆分建議。
- **數據建模：** 定義 Typescript Interface 或 Props 物件結構（遵守全域小駝峰與命名規範）。

### 2. **代碼實作**
- **順序規範：** 嚴格執行對應 Vue 版本的屬性/組織 1~7 排序。
- **技術細節：** 嚴格遵守 Vue 2 (Options API) 或 Vue 3 (script setup) 的技術基底。

### 3. **樣式與資源 (防錯嚴格執行)**
- **資源：** 圖片與 Icon 必須從 `@/assets/js/img.js` (或 `.ts`) 匯出後引入，禁止硬編碼實體字串路徑。
- **樣式：** 100% 變數化，**僅能使用 `@scss_design_system.md` 權威表中的變數** (`$spacing-*`, `$color-*`, `$fs-*`, `$radius-*`)。
- **自創變數零容忍：** 嚴禁使用 `$space-m` 等不在定義檔中的名稱。

### 4. **輸出檢查 (Final Check)**
- [ ] 是否符合 Vue 元件組織順序規範？
- [ ] 樣式變數是否 100% 取自 `@/assets/css/_shared/` 且無虛構變數？
- [ ] 圖片是否由 `@/assets/js/img` 匯出引入？
- [ ] 註解與文字是否為繁體中文？