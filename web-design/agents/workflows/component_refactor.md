---
description: 檢查目前開發中的頁面，是否有重複 UI 或邏輯適合整理成共用 component，並將共用樣式抽離，避免重複維護。
---

# 1. 目的

檢查目前開發中的頁面，是否有重複 UI 或邏輯適合整理成共用 component，並將共用樣式抽離，避免重複維護。

---

# 2. 何時需要抽成 Component

符合以下任一條件，建議評估抽成 component：

- 同樣 UI 在 2 個以上頁面出現
- 同一頁面內重複出現 2 次以上
- HTML 結構相似，只是文字、狀態、按鈕不同
- 樣式 class 重複太多
- 區塊有明確語意，例如：
  - SearchPanel
  - StatusBadge
  - EmptyState
  - DataCard
  - ActionButton
  - FormSection
  - TableToolbar

---

# 3. 不建議抽 Component 的情況

以下情況先**不要抽**：

- 只出現一次
- 未來不確定會不會重複使用
- 抽出後 props 過多，反而更難讀
- 該區塊與頁面業務邏輯高度綁定
- 只是為了「看起來乾淨」而抽

---

# 4. 檢查流程

**Step 1：檢查重複 UI**

檢查目前 `.vue` 檔案中是否有相似區塊：
- 標題區
- 搜尋區
- 按鈕列
- 表格列
- 卡片
- 狀態標籤
- 空資料提示
- loading 區塊
- modal / popup
- 表單欄位組

---

**Step 2：判斷是否適合抽出**

確認此區塊是否可以透過以下方式控制：
- props 控制文字
- props 控制狀態
- props 控制資料
- events 往外通知父層
- slot 提供客製內容

---

**Step 3：拆分責任**

Component 只負責 UI 與互動，不直接處理頁面業務邏輯。
建議：
- component：顯示資料、觸發事件
- page：呼叫 API、整理資料、決定狀態
- utils：共用資料轉換或格式化

---

# 5. CSS / SCSS 整理與防錯流程

**Step 1：找出共用樣式**
若多個 component 或頁面出現相同樣式，應抽出共用 class 或 SCSS mixin。

**Step 2：變數防錯檢查 (Zero-Tolerance)**
- 檢查所有 SCSS 變數，必須存在於 `@/assets/css/_shared/`。
- 嚴禁出現 `$space-m` 等虛構變數，若有必須立即修正為 `$spacing-16` 等權威變數。

**Step 3：判斷放置位置**
- 放在 component scoped style：適合僅屬於該 component 的內部佈局。
- 放在 shared SCSS mixin：適合多個 component 共用的視覺設計規則。

---

# 6. Component 命名與目錄規範

1. **通用組件** 放在：`src/components/common/`
2. **頁面專用組件** 放在：`src/components/page/`
3. **版面組件** 放在：`src/components/layout/`
4. 檔名與組件名稱統一使用 **PascalCase**

---

# 7. 執行檢查清單

- [ ] 頁面邏輯仍清楚
- [ ] component 沒有直接寫死頁面業務
- [ ] props 包含 type 與 default 規範
- [ ] emit 事件命名清楚
- [ ] CSS / SCSS 沒有重複散落
- [ ] 無任何自創/未定義 SCSS 變數 (例如 `$space-m`)
- [ ] 畫面在 Legacy Chrome / Edge 目標下仍正常
