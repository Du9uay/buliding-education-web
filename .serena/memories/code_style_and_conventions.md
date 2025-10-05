# 代码风格与约定

## 代码结构规范
- 使用函数组件 + TypeScript
- 组件文件使用 PascalCase 命名 (如 HomePage.tsx)
- 导出组件使用默认导出
- 组件props使用interface定义类型

## 样式规范
- 主要使用Tailwind CSS类名
- 响应式设计使用Tailwind断点 (sm:, md:, lg:, xl:)
- 玻璃效果通过自定义组件 LiquidGlass 实现
- 动画使用 Framer Motion 库

## 组件组织
- 通用组件放在 src/components/ 目录
- 页面组件放在 src/pages/ 目录
- 课程相关页面放在 src/pages/course/ 子目录
- 静态资源放在 src/assets/ 目录

## 命名约定
- 文件和目录使用PascalCase (组件) 或 kebab-case (资源)
- 类名遵循Tailwind CSS约定
- 变量和函数使用camelCase
- 常量使用UPPER_SNAKE_CASE

## Import规范
- React相关导入在最前面
- 第三方库按字母顺序
- 本地组件和页面导入在最后
- 路径使用相对导入