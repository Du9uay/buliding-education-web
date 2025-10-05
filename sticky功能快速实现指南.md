# Sticky 功能快速实现指南

## 一、最简实现（3步完成）

### 步骤 1：HTML 结构
```html
<div class="container">
  <div class="sidebar">
    <div class="sticky-content">
      <!-- 这里放置需要固定的内容 -->
    </div>
  </div>
  <div class="main-content">
    <!-- 这里放置可滚动的内容 -->
  </div>
</div>
```

### 步骤 2：CSS 样式
```css
.container {
  display: flex;
  gap: 2rem;
}

.sidebar {
  width: 33.333%;
}

.sticky-content {
  position: sticky;
  top: 2rem; /* 距离顶部的间距 */
}

.main-content {
  width: 66.667%;
}
```

### 步骤 3：Tailwind CSS 版本
```html
<div class="flex gap-8">
  <div class="w-1/3">
    <div class="sticky top-8">
      <!-- 固定内容 -->
    </div>
  </div>
  <div class="w-2/3">
    <!-- 滚动内容 -->
  </div>
</div>
```

## 二、直接可用的 React 组件

```tsx
// StickyRoleCard.tsx
import React from 'react';

const StickyRoleCard = ({ roles }) => {
  return (
    <div className="space-y-12">
      {roles.map((role, index) => (
        <div key={index} className="flex flex-col lg:flex-row gap-8">
          {/* 左侧固定卡片 */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{role.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-3">
                  {role.title}
                </h3>
                <p className="text-white/85 text-center">
                  {role.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* 右侧滚动内容 */}
          <div className="lg:w-2/3 space-y-6">
            {role.responsibilities.map((resp, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  {resp.title}
                </h4>
                <p className="text-white/85 mb-4">
                  {resp.description}
                </p>
                <div className="space-y-2">
                  {resp.points.map((point, j) => (
                    <div key={j} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5" />
                      <span className="text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyRoleCard;
```

## 三、使用示例

```tsx
// YourPage.tsx
import StickyRoleCard from './StickyRoleCard';

const YourPage = () => {
  const rolesData = [
    {
      icon: '👨‍💼',
      title: '外贸经理',
      description: '战略制定者和团队管理者',
      responsibilities: [
        {
          title: '策略制定',
          description: '制定外贸策略和推广计划',
          points: ['市场调研', '策略规划', '团队指导']
        },
        {
          title: '客户谈判',
          description: '代表企业参与重要洽谈',
          points: ['合同谈判', '条款优化', '关系维护']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <StickyRoleCard roles={rolesData} />
    </div>
  );
};
```

## 四、常见问题解决

### 问题 1：Sticky 不生效
```css
/* 确保父容器没有设置 overflow: hidden */
.parent {
  overflow: visible; /* 或者不设置 overflow */
}
```

### 问题 2：移动端布局问题
```css
/* 移动端禁用 sticky */
@media (max-width: 1024px) {
  .sticky {
    position: static;
  }
}
```

### 问题 3：内容不够长
```jsx
// 确保右侧内容足够长
<div className="min-h-[800px]">
  {/* 内容 */}
</div>
```

## 五、优化技巧

### 1. 添加滚动过渡效果
```css
.sticky-content {
  position: sticky;
  top: 2rem;
  transition: transform 0.3s ease;
}
```

### 2. 响应式间距调整
```html
<div class="sticky top-4 lg:top-8 xl:top-12">
  <!-- 不同屏幕尺寸不同间距 -->
</div>
```

### 3. 添加阴影效果
```html
<div class="sticky top-8 shadow-xl">
  <!-- 添加阴影增强层次感 -->
</div>
```

## 六、完整代码示例（复制即用）

```tsx
const StickySection = () => (
  <div className="flex flex-col lg:flex-row gap-8 p-8">
    {/* 左侧 Sticky */}
    <div className="lg:w-1/3">
      <div className="sticky top-8">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-4">固定标题</h3>
          <p>这部分内容会在滚动时保持固定</p>
        </div>
      </div>
    </div>
    
    {/* 右侧内容 */}
    <div className="lg:w-2/3 space-y-4">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="bg-gray-100 rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-2">内容块 {i}</h4>
          <p className="text-gray-600">
            这是可以滚动的内容区域。当你向下滚动时，左侧的卡片会保持在视窗内。
          </p>
        </div>
      ))}
    </div>
  </div>
);
```

## 记住这3点就够了：
1. **结构**：父容器 flex，左侧 1/3，右侧 2/3
2. **样式**：左侧内部加 `sticky top-8`
3. **响应**：移动端用 `lg:` 前缀控制大屏才生效