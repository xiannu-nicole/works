---
trigger: always_on
---

# Vue 3 + TypeScript 開發規範 (Vue 3 Development Rules)

## 1. 瀏覽器環境與架構基底

- **目標環境**：Chrome 90+ / 保守相容模式。
- **開發模式**：強制使用 `<script setup lang="ts">`。
- **狀態管理**：Pinia 需保持結構扁平，對齊 Vuex 邏輯。

---

## 2. SCSS 與樣式引用規範 (嚴格防錯)

1. **路徑規範**：
   - 共享 SCSS 模組絕對路徑統一定義於 `@/assets/css/_shared/`（帶底線）。
   - 禁止使用 `./`、`../` 等相對路徑引用 SCSS。
2. **變數防錯與零猜測原則**：
   - 變數引用的名稱必須 100% 存在於 `@/assets/css/_shared/`。
   - **間距變數**：僅限使用 `$spacing-4`, `$spacing-8`, `$spacing-12`, `$spacing-16`, `$spacing-20`, `$spacing-24`, `$spacing-32`, `$spacing-40`, `$spacing-48`, `$spacing-120`。（**嚴禁使用 `$space-m` 等虛構名稱**）
   - **圓角變數**：`$radius-s`, `$radius-m`, `$radius-l`, `$radius-round`。
   - **字型變數**：`$fs-small`, `$fs-label`, `$fs-base`, `$fs-h3`, `$fs-h2`, `$fs-h1`, `$fs-xxl`。（**前綴為 `$fs-`**）
   - **色彩變數**：`$color-primary`, `$color-accent`, `$color-info`, `$color-success`, `$color-warning`, `$color-danger`, `$gray-100` ~ `$gray-900` 等。

---

## 3. 程式碼組織順序 (Strict 1 ~ 7)

每一個 Vue 3 組件內部的 `<script setup>` 必須嚴格依照以下順序撰寫：

1. `defineProps` (配合 `withDefaults`)
2. `defineEmits`
3. `ref / reactive` (狀態宣告)
4. `computed`
5. `watch`
6. `Functions` (業務邏輯函式)
7. `Lifecycle Hooks` (生命週期鉤子)

---

## 4. 類型檢查與資源規範

- 必須使用 **TS Interface** 定義所有複雜資料結構，嚴禁使用 `any`。
- 所有圖片資源必須從 `@/assets/js/img.ts` 匯出後統一引入，禁止硬編碼圖片路徑。