---
trigger: always_on
---

# SCSS 設計系統與變數防錯規範 (SCSS Design System Rules)

## 1. 核心原則：自創變數零容忍 (Zero-Tolerance for Unbound SCSS Variables)

- **絕對禁止** 在任何 `.vue` 或 `.scss` 檔案中使用未在 `@/assets/css/_shared/` 中定義的 SCSS 變數。
- **絕對禁止** 猜測或發明變數名稱（如 `$space-m`, `$spacing-md`, `$color-gray`, `$font-body` 等均屬違規自創變數）。
- **實體目錄統一**：專案內部定義檔統一位於 `@/assets/css/_shared/`（帶有底線），絕不可寫成 `@/assets/css/shared/`。

---

## 2. 權威 SCSS 變數與 Mixin 清冊 (Authoritative SCSS Reference)

開發時僅允許使用以下完全符合實體檔案定義的變數與 Mixin：

### 2.1 間距與圓角 (`@/assets/css/_shared/_space.scss`)

#### 間距變數 (Spacing Values)
> 注意：間距變數一律為 `$spacing-數字` 格式，**不存在** `$space-m` 或 `$spacing-m`。

- `$spacing-4`: `4px`
- `$spacing-8`: `8px`
- `$spacing-12`: `12px`
- `$spacing-16`: `16px`
- `$spacing-20`: `20px`
- `$spacing-24`: `24px`
- `$spacing-32`: `32px`
- `$spacing-40`: `40px`
- `$spacing-48`: `48px`
- `$spacing-120`: `120px`

#### 圓角變數 (Border Radius Values)
- `$radius-s`: `4px`
- `$radius-m`: `8px`
- `$radius-l`: `12px`
- `$radius-round`: `50%`

---

### 2.2 色彩系統 (`@/assets/css/_shared/_color.scss`)

#### 品牌與主要色彩 (Brand & Primary)
- `$color-primary`: `#2f6f4e`
- `$color-primary-hover`: `#265c41`
- `$color-primary-light`: `#e6f2ec`
- `$color-primary-bg`: `#f4faf7`

#### 強調與動作 (Accent & Action)
- `$color-accent`: `#e66a3d`
- `$color-accent-hover`: `#cc5b33`
- `$color-accent-light`: `#fdebe5`

#### 資訊與通知 (Info)
- `$color-info`: `#2e5eaa`
- `$color-info-hover`: `#275090`
- `$color-info-light`: `#eff6ff`

#### 狀態色彩 (Status)
- `$color-success`: `#4caf50`
- `$color-success-light`: `#e8f5e9`
- `$color-warning`: `#e6a23c`
- `$color-warning-light`: `#fff4e5`
- `$color-danger`: `#d32f2f`
- `$color-danger-light`: `#fdeaea`
- `$color-miss`: `#2e5eaa`
- `$color-miss-light`: `#eff6ff`

#### 灰階系統 (Gray Scale)
- `$gray-900`: `#1f1f1f`
- `$gray-800`: `#343a40`
- `$gray-700`: `#4f4f4f`
- `$gray-600`: `#6c757d`
- `$gray-500`: `#9e9e9e`
- `$gray-400`: `#ced4da`
- `$gray-300`: `#e0e0e0`
- `$gray-200`: `#ededed`
- `$gray-100`: `#f7f7f7`
- `$gray-50`: `#fafafa`

#### 基礎與版面 (Base & Layout)
- `$color-white`: `#ffffff`
- `$color-bg`: `#f5f6f7`
- `$color-border`: `#e0e0e0`
- `$color-card-bg`: `#ffffff`
- `$color-sidebar-bg`: `#fafafa`

#### 語意文字 (Semantic Text)
- `$color-text-primary`: `#1f1f1f`
- `$color-text-secondary`: `#4f4f4f`

#### 專用狀態 Mixins
- `@mixin color-level($level)` (傳入 1 ~ 5)
- `@mixin color-status($status)` (傳入 1 ~ 3, "waiting", "in_progress", "testing", "observation", "report_ready")
- `@mixin color-role($role)` (傳入 "doctor", "nurse", "head_nurse", "admin_doc")

---

### 2.3 字型與排版 (`@/assets/css/_shared/_typography.scss`)

#### 字體大小 (Font Sizes)
> 注意：字體大小前綴為 `$fs-`，不存在 `$font-size-base`。

- `$fs-small`: `12px`
- `$fs-label`: `12px`
- `$fs-base`: `14px`
- `$fs-h3`: `16px`
- `$fs-h2`: `18px`
- `$fs-h1`: `20px`
- `$fs-xxl`: `24px`

#### 字體字重 (Font Weights)
- `$fw-light`: `300`
- `$fw-regular`: `400`
- `$fw-medium`: `500`
- `$fw-bold`: `700`

#### 行高 (Line Heights)
- `$line-height-tight`: `1.25`
- `$line-height-base`: `1.5`
- `$line-height-loose`: `1.75`

#### 字型 Mixin
- `@mixin font-style($size: $fs-base, $weight: $fw-regular, $line-height: $line-height-base, $space: 0.05em)`

---

## 3. 防錯寫法與例外處理原則

1. **若 UI 稿中的數值不在變數表中**：
   - 優先選擇 **最接近的 `$spacing-*` 變數**（例如 15px 選擇 `$spacing-16`）。
   - 若必須使用極度特殊的靜態數值（例如 `width: 380px`），**請直接寫入靜態像素值 (如 `380px`)**，**絕對禁止** 虛構一個變數名（如 `$width-card` 或 `$space-custom`）。
2. **禁止 CSS Variables 原生變數**：
   - 舊瀏覽器（Win7 Chrome / Legacy Edge）相容性限制，嚴禁使用 `var(--color-primary)`。
