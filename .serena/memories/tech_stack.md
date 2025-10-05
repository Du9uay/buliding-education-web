# 技术栈信息

## 前端技术栈
- **前端框架**: React 18 + TypeScript
- **样式系统**: Tailwind CSS 3.3.6 + 自定义玻璃效果
- **动画库**: Framer Motion 12.19.2
- **路由管理**: React Router DOM 6.20.1  
- **构建工具**: Create React App (React Scripts 5.0.1)
- **拖拽功能**: @dnd-kit/core, @dnd-kit/sortable, react-beautiful-dnd
- **开发工具**: TypeScript 4.9.5, PostCSS, Autoprefixer

## 项目结构
```
src/
├── components/          # 通用组件
│   ├── Navigation.tsx   # 导航组件
│   ├── GlobalBackground.tsx  # 全局背景
│   ├── LiquidGlass.tsx  # 玻璃效果组件
│   └── ...
├── pages/              # 页面组件
│   ├── HomePage.tsx    # 首页
│   ├── ObjectivesPage.tsx # 学习目标页
│   ├── CareersPage.tsx    # 职业发展页
│   └── course/         # 课程页面
└── assets/             # 静态资源
    └── images/         # 图片资源
```

## 特色功能
- Liquid Glass 效果（Apple风格的玻璃拟态UI）
- 响应式设计
- 流畅的页面切换动画
- 拖拽式交互功能