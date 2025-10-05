# 招投标行业设计令牌和风格板

## 色彩系统 (Color System)

### 主色调 - 专业建筑行业风格
```css
:root {
  /* 主背景色 - 深蓝灰，象征专业与稳重 */
  --bg-steel-900: #2C3E50;
  --bg-steel-800: #34495E;
  
  /* 次级背景 - 中性灰蓝 */
  --surf-slate-700: #475569;
  --surf-slate-600: #64748B;
  
  /* 文本色 - 高对比度 */
  --text-light-100: #F8FAFC;
  --text-light-200: #E2E8F0;
  
  /* 强调色 - 建筑橙，体现工程活力 */
  --accent-construction-500: #F39C12;
  --accent-construction-400: #F7DC6F;
  
  /* 辅助色 - 成功/安全绿 */
  --success-green-500: #27AE60;
  --success-green-400: #58D68D;
  
  /* 警告色 - 风险红 */
  --warning-red-500: #E74C3C;
  --warning-red-400: #F1948A;
  
  /* 信息色 - 蓝色 */
  --info-blue-500: #3498DB;
  --info-blue-400: #85C1E9;
}
```

### Tailwind CSS 扩展配置
```javascript
colors: {
  base: { 
    50: '#F8FAFC',   // text-light-100 - 主要文本
    100: '#E2E8F0',  // text-light-200 - 次级文本
    600: '#64748B',  // surf-slate-600 - 次级背景
    700: '#475569',  // surf-slate-700 - 卡片背景
    800: '#34495E',  // bg-steel-800 - 次级深背景
    900: '#2C3E50'   // bg-steel-900 - 主背景
  },
  accent: { 
    400: '#F7DC6F',  // 浅橙 - 悬浮状态
    500: '#F39C12'   // 建筑橙 - 主要强调色
  },
  success: {
    400: '#58D68D',
    500: '#27AE60'
  },
  warning: {
    400: '#F1948A', 
    500: '#E74C3C'
  },
  info: {
    400: '#85C1E9',
    500: '#3498DB'
  }
}
```

## 排版系统 (Typography)

### 字体层级
- **标题1**: 2.25rem (36px) - 页面主标题
- **标题2**: 1.875rem (30px) - 板块标题
- **标题3**: 1.5rem (24px) - 小节标题
- **标题4**: 1.25rem (20px) - 子标题
- **正文**: 1rem (16px) - 主要内容
- **小字**: 0.875rem (14px) - 说明文字
- **标签**: 0.75rem (12px) - 标签和元数据

### 行高设置
- 标题: 1.2 - 1.4
- 正文: 1.6 - 1.8  
- 小字: 1.4 - 1.6

## 间距系统 (Spacing)

### 基础间距单位: 4px (0.25rem)
- xs: 4px (1 unit)
- sm: 8px (2 units)  
- md: 16px (4 units)
- lg: 24px (6 units)
- xl: 32px (8 units)
- 2xl: 48px (12 units)
- 3xl: 64px (16 units)

## 圆角系统 (Border Radius)

### 建筑风格圆角 - 相对保守
- none: 0px - 表格和严格布局
- sm: 4px - 按钮和小组件
- md: 8px - 卡片和面板
- lg: 12px - 大型容器  
- xl: 16px - 特殊装饰元素
- full: 9999px - 圆形头像等

## 阴影系统 (Shadow System)

### 玻璃拟态效果
```css
.glass-effect {
  background: rgba(71, 85, 105, 0.15);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(248, 250, 252, 0.1);
}

.glass-hover {
  background: rgba(71, 85, 105, 0.25);  
  backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid rgba(248, 250, 252, 0.15);
}
```

### 深度阴影
- sm: 轻微悬浮 `0 2px 8px rgba(44, 62, 80, 0.15)`
- md: 明显分层 `0 4px 16px rgba(44, 62, 80, 0.2)`  
- lg: 强烈悬浮 `0 8px 32px rgba(44, 62, 80, 0.25)`
- xl: 最高层级 `0 12px 48px rgba(44, 62, 80, 0.3)`

## 动效系统 (Animation)

### 缓动曲线 - 专业感
- 标准: `cubic-bezier(0.4, 0, 0.2, 1)` - 大部分交互
- 快速: `cubic-bezier(0.4, 0, 1, 1)` - 小组件
- 缓慢: `cubic-bezier(0, 0, 0.2, 1)` - 页面切换

### 动画时长
- 快速: 150ms - 按钮悬浮
- 标准: 300ms - 卡片交互
- 缓慢: 500ms - 页面切换

## 图标系统 (Icons)

### 建筑工程相关图标
- 主logo: Building/Construction 图标
- 招投标: FileText, Users, Award
- 流程: ArrowRight, CheckCircle, AlertTriangle
- 角色: User, UserCheck, Users
- 文档: FileText, File, Download

### 图标尺寸
- xs: 12px
- sm: 16px  
- md: 20px
- lg: 24px
- xl: 32px

## 行业适应性设计原则

### 1. 专业性 (Professionalism)
- 使用深色系背景体现严肃性
- 强调色选用建筑行业常见的橙色
- 保持简洁的几何形状

### 2. 可信度 (Trustworthiness)  
- 高对比度确保可读性
- 清晰的信息层级
- 一致的交互反馈

### 3. 功能性 (Functionality)
- 轻交互设计，避免过度动效
- 突出内容，弱化装饰
- 优化移动端体验

## 响应式断点 (Breakpoints)

- sm: 640px (手机横屏)
- md: 768px (平板竖屏)  
- lg: 1024px (平板横屏)
- xl: 1280px (桌面)
- 2xl: 1536px (大屏桌面)

## 无障碍设计 (Accessibility)

### 对比度要求
- 文本对比度: 至少 4.5:1
- 大文本对比度: 至少 3:1
- 交互元素: 至少 3:1

### 键盘导航
- Tab 顺序清晰
- 焦点指示器明显
- 支持 Enter/Space 激活

此设计系统确保招投标教学网站具备专业性、可信度和良好的用户体验。