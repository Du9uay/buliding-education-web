/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 招投标专业色彩系统
        base: { 
          50: '#E8EBF0',   // 浅文本与分隔线
          100: '#D1D9E6',  // 次级文本
          200: '#A3B3CC',  // 中性文本
          700: '#2C3E50',  // 次级背景/卡片底色
          800: '#1A252F',  // 深背景
          900: '#0F1419'   // 最深背景/主背景
        },
        accent: { 
          400: '#F59E0B',  // 浅金色
          500: '#D97706',  // 主强调色/金橙色
          600: '#B45309',  // 深金色
          700: '#92400E'   // 最深强调色
        },
        // 招投标功能色彩
        bidding: {
          primary: '#1E3A8A',    // 深蓝 - 主色调
          secondary: '#3B82F6',  // 蓝色 - 次要色
          success: '#059669',    // 绿色 - 成功/中标
          warning: '#D97706',    // 橙色 - 警告/注意
          danger: '#DC2626',     // 红色 - 风险/失败
          info: '#0284C7',       // 青色 - 信息提示
          neutral: '#64748B'     // 灰色 - 中性状态
        },
        // 保留原有颜色供兼容过渡使用
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backdropSaturate: {
        150: '150%',
        175: '175%',
        200: '200%',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
        'glass-sm': '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08) inset',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset',
        'inner-light': '0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
        // 新增招投标专业阴影
        'professional': '0 4px 20px rgba(30, 58, 138, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1) inset',
        'professional-hover': '0 8px 32px rgba(30, 58, 138, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.15) inset',
        'accent-glow': '0 0 20px rgba(217, 119, 6, 0.3), 0 4px 20px rgba(217, 119, 6, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(217, 119, 6, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.8), 0 0 30px rgba(217, 119, 6, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}