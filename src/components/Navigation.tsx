import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Play, X } from './Icons';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courseModules = [
    { name: '招投标——项目生命周期的关键枢纽', path: '/course/bidding-lifecycle' },
    { name: '建设工程招投标全流程深度解析', path: '/course/bidding-process' },
    { name: '招投标全流程风险防控与合规红线', path: '/course/risk-control' },
  ];


  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      {/* Trial Experience Button - Absolute positioned at far left, outside max-w container */}
      <button
        onClick={() => setIsTrialModalOpen(true)}
        className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30 z-10"
      >
        <Play className="w-4 h-4" />
        <span>直播回放</span>
      </button>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 ml-32">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-base-50 font-bold text-lg">招投标教学</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程首页
            </Link>

            {/* 课程章节下拉菜单 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="text-sm font-medium text-base-50/80 hover:text-base-50 focus-accent transition-colors flex items-center space-x-1"
              >
                <span>课程章节</span>
                <svg className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect shadow-glass-lg">
                  {courseModules.map((module, index) => (
                    <Link
                      key={index}
                      to={module.path}
                      className={`relative block px-4 py-3 text-sm transition-colors ${
                        isActivePath(module.path) 
                          ? 'text-base-50 bg-accent-500/10' 
                          : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
                      }`}
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {module.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/course-test"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/course-test') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课堂测试
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-base-50/80 hover:text-base-50 hover:bg-white/5 transition-colors focus-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程首页
            </Link>

            {/* 移动端课程章节 */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-base-50/60 mb-2">课程章节</div>
              <div className="pl-4 space-y-1">
                {courseModules.map((module, index) => (
                  <Link
                    key={index}
                    to={module.path}
                    className={`block py-2 text-sm transition-colors ${
                      isActivePath(module.path) ? 'text-accent-500' : 'text-base-50/70 hover:text-base-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {module.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/course-test"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-test') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课堂测试
            </Link>
          </div>
        )}
      </div>
    </nav>

    {/* Trial Video Modal */}
    {isTrialModalOpen && (
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsTrialModalOpen(false)}
        />

        {/* Modal Content */}
        <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">直播回放</h2>
            </div>
            <button
              onClick={() => setIsTrialModalOpen(false)}
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJ7kgzytbi.mov"
            >
              您的浏览器不支持视频播放
            </video>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
            <div className="flex items-center justify-between">
              <p className="text-white/80">
                查看招投标全流程解析课程的直播回放内容
              </p>
              <button
                onClick={() => setIsTrialModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all hover:scale-105"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Navigation; 