import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Zap, ArrowRight, BookOpen, Users, Award, Target, Settings, Network, Camera, Film, Video, Edit3, Clapperboard, TrendingUp, Lightbulb, ChevronRight, Building2, Briefcase, Rocket, Trophy, Sparkles, CheckCircle, GPT, N8N, Runway, LumaAI,Claude,Kimi,Notion, Monitor } from '../components/Icons';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '招投标全流程解析';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const courseModules = [
    {
      title: '一. 招投标——项目生命周期的关键枢纽',
      description: '学习招投标在工程项目全生命周期中的战略地位与价值内涵，掌握甄选承包商、控制项目要素的核心作用，理解优化资源配置的重要机制。',
      icon: BookOpen,
      path: '/course/bidding-lifecycle',
      color: 'from-accent-500 to-accent-400',
      delay: 0.1
    },
    {
      title: '二. 建设工程招投标全流程深度解析',
      description: '深入了解从招标准备、公告发布、资格预审到开标评标的完整流程，掌握参与主体职责、法律依据和操作规范要求。',
      icon: Network,
      path: '/course/bidding-process',
      color: 'from-accent-500 to-accent-400',
      delay: 0.2
    },
    {
      title: '三. 招投标全流程风险防控与合规红线',
      description: '学习识别招投标各阶段风险点，掌握风险防控措施，熟悉合规红线要求，提升招投标活动的合法合规管理能力。',
      icon: Zap,
      path: '/course/risk-control',
      color: 'from-accent-500 to-accent-400',
      delay: 0.3
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-accent-500 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Network className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-base-50 mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              土木水利工程专业核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-base-50/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            通过系统性学习招投标理论与实务，掌握建设工程招投标全流程操作，
            培养具备招投标管理、风险防控、合规操作和项目管理能力的专业人才。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[color:var(--accent-primary)] via-[color:var(--accent-light)] to-[color:var(--text-primary)] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-[color:var(--text-muted)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            从更贴合市场的行业、企业、岗位角度为你一一分析
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[color:var(--accent-primary)] to-[color:var(--accent-light)] mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业</h2>
              <p className="text-[color:var(--accent-light)] mt-2">建筑与水利工程是国民经济支柱行业，招投标与合同管理是项目成败的生命线</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="glass-deep p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-主图.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--accent-primary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[color:var(--color-info)]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--accent-light)]">行业现状与机遇</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 千亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-市场广阔.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "var(--accent-primary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-[color:var(--accent-primary)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">市场广阔</h4>
                    <p className="text-[color:var(--text-secondary)] text-sm">
                      我国建筑业总产值已突破30万亿元，水利与市政等基础设施投资保持高位运行，新基建、城市更新、区域协同发展等政策带来<span className="font-bold text-[color:var(--accent-light)]">大量项目机会</span>
                    </p>
                  </motion.div>

                  {/* 技术迭代 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-政策驱动.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "var(--accent-primary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-[color:var(--accent-primary)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">政策驱动</h4>
                    <p className="text-[color:var(--text-secondary)] text-sm">
                      国家持续推行全过程工程咨询、<span className="font-bold text-[color:var(--accent-primary)]">双碳战略</span>和<span className="font-bold text-[color:var(--accent-primary)]">绿色低碳目标</span>，工程招投标制度也在逐步数字化、透明化
                    </p>
                  </motion.div>

                  {/* 需求广泛 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-科技赋能.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "var(--accent-primary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-[color:var(--accent-primary)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">科技赋能</h4>
                    <p className="text-[color:var(--text-secondary)] text-sm">
                      BIM、CDE协同平台、电子招投标系统、智能合规审查等数字工具正在全面重塑行业生态，<span className="font-bold text-[color:var(--accent-primary)]">谁能灵活使用这些工具，谁就能成为核心人才</span>
                    </p>
                  </motion.div>

                  {/* 职业机遇 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-人才稀缺.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "var(--accent-primary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-[color:var(--accent-primary)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">人才稀缺</h4>
                    <p className="text-[color:var(--text-secondary)] text-sm">
                      招投标与合同管理岗位对人才要求高，目前行业普遍存在人才断层，<span className="text-[color:var(--accent-primary)] font-bold">符合要求的人才极为稀缺，这正是快速切入高价值岗位的最佳机会</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--accent-light)]">发展机遇</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-2. 结果导向-对企业来说.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "var(--accent-primary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-[color:var(--accent-primary)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--accent-primary)]">对企业来说</h4>
                    </div>
                    <p className="text-[color:var(--text-primary)] text-lg leading-relaxed">
                      招投标与合同管理不仅决定了企业能否中标，还<span className="font-bold text-[color:var(--accent-primary)]">关系到项目的成本控制、资金回笼和风险规避</span>。通过规范化的投标策略与合同履约机制，企业能够降低废标率、提升中标概率，并<span className="font-bold text-[color:var(--accent-primary)]">最大限度保障自身权益</span>。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-2. 结果导向-对学生来说.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "var(--accent-primary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-[color:var(--accent-primary)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--accent-primary)]">对学生来说</h4>
                    </div>
                    <p className="text-[color:var(--text-primary)] text-lg leading-relaxed">
                      掌握招投标与合同管理，意味着你能快速进入建筑、水利、市政等核心行业，成为企业真正需要的<span className="font-bold text-[color:var(--accent-primary)]">复合型人才</span>。你不仅能完成标书编制和合同台账等基础工作，还能通过数字化工具提升效率与准确性，<span className="font-bold text-[color:var(--accent-primary)]">这将直接转化为优质的就业机会和清晰的职业发展路径</span>。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-[color:var(--accent-light)] mt-2">理解产业链和企业分工，才能精准定位个人成长路径</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-上游.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--accent-primary)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--accent-primary)]">上游企业</h3>
                        <span className="text-[color:var(--accent-primary)]/60 text-sm font-semibold">基础资源</span>
                      </div>
                      <p className="text-[color:var(--text-secondary)] text-base mb-6">主要为投标企业<span className="font-bold text-[color:var(--accent-primary)]">提供项目信息、决策咨询、技术方案及资质资源</span>，是投标活动的"侦察兵"与"参谋部"。这些企业决定了投标的精准度与方案竞争力，是成功获取项目的首要保障</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">政府单位</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">财政投资公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">设计院</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">招标信息平台公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">商业信息咨询公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">律师事务所</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--accent-primary)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-中游.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--accent-primary)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--accent-primary)]">中游企业</h3>
                        <span className="text-[color:var(--accent-primary)]/60 text-sm font-semibold">创意核心</span>
                      </div>
                      <p className="text-[color:var(--text-secondary)] text-base mb-6">构成招标过程的核心生态，包括<span className="font-bold text-[color:var(--accent-primary)]">招标主体、组织方与直接竞争者</span>。此环节是企业展现自身实力、进行商务与技术博弈的主战场，直接决定了项目的归属</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">招标代理机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">招标方</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">联合体伙伴企业</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--accent-primary)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--border-accent)]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-下游.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--accent-primary)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--accent-primary)]">下游企业</h3>
                        <span className="text-[color:var(--accent-primary)]/60 text-sm font-semibold">市场触达</span>
                      </div>
                      <p className="text-[color:var(--text-secondary)] text-base mb-6">在中标后共同完成项目交付的合作伙伴与服务商，<span className="font-bold text-[color:var(--accent-primary)]">涵盖施工、供应、监理与金融支持</span>。下游企业的协同效率与质量直接关系到项目利润与客户满意度，是价值实现的最终环节</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">分包商与劳务公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">材料设备供应商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">银行、保险等金融机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">第三方检测与监测机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-muted)] text-sm">工程监理与项目管理公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-primary)]/10 to-[color:var(--accent-light)]/10 rounded-2xl border border-[color:var(--border-accent)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[color:var(--accent-primary)] text-lg font-semibold text-center">
              了解产业链各环节，找准自己的定位，选择最适合的发展路径
            </p>
          </motion.div>
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-[color:var(--accent-light)] mt-2">有哪些岗位？普遍要求与待遇如何？</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-工程造价与招投标类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-primary)] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-primary)] ml-3">工程造价与招投标类岗位</h3>
                </div>
                <p className="text-[color:var(--text-muted)] text-sm mb-4">主要负责工程项目的经济测算与投标事务，涵盖预算编制、成本控制、合同管理和招投标流程</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">工程造价师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">工程造价员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">招标专员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">投标专员</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 中期拍摄 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-建筑施工与管理类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-primary)] rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-primary)] ml-3">建筑施工与管理类岗位</h3>
                </div>
                <p className="text-[color:var(--text-muted)] text-sm mb-4">聚焦工程建设一线，从施工组织、进度把控到安全管理与现场协调，保障项目高效推进</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">施工管理工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">土建施工员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">工程管理部储备干部</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">建筑安全工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">设备安装工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 后期制作 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-工程监理与资料管理类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-primary)] rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-primary)] ml-3">工程监理与资料管理类岗位</h3>
                </div>
                <p className="text-[color:var(--text-muted)] text-sm mb-4">以监督与合规为核心，负责施工过程中的质量、进度和安全监管，同时做好工程资料的收集、整理与归档</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">监理工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">监理员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">资料员</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 宣传运营 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-建筑测量与检测类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-primary)] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-primary)] ml-3">建筑测量与检测类岗位</h3>
                </div>
                <p className="text-[color:var(--text-muted)] text-sm mb-4">负责施工前期的测量定位和施工过程中的质量检测，确保建筑物的尺寸精度与安全性能符合标准</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">建筑工程检测员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">建材检测员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">建筑检测工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-primary)]" />
                    <span className="text-[color:var(--text-secondary)] text-sm">建筑质量工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-deep p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[color:var(--accent-primary)]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[color:var(--accent-primary)] mb-6 text-center">行业要求与待遇</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-primary)]/20 to-[color:var(--accent-light)]/20 border border-[color:var(--border-accent)]">
                  <div className="text-2xl font-bold text-[color:var(--accent-primary)] mb-2">技能要求</div>
                  <p className="text-[color:var(--text-muted)] text-sm">需熟悉招投标流程、工程量清单编制、合同条款及相关法律法规；同时要掌握BIM、CDE、电子交易平台等信息化工具的应用</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-primary)]/20 to-[color:var(--accent-light)]/20 border border-[color:var(--border-accent)]">
                  <div className="text-2xl font-bold text-[color:var(--accent-primary)] mb-2">薪资水平</div>
                  <p className="text-[color:var(--text-muted)] text-sm">投标专员月薪通常在6–10k之间，随着经验累积与业绩提升可突破15k；合同经理年薪可达20–40万</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-primary)]/20 to-[color:var(--accent-light)]/20 border border-[color:var(--border-accent)]">
                  <div className="text-2xl font-bold text-[color:var(--accent-primary)] mb-2">职业发展</div>
                  <p className="text-[color:var(--text-muted)] text-sm">从基层的招投标专员、合同管理员做起，可逐步成长为商务经理、项目商务负责人，甚至晋升为区域市场拓展经理或工程总工</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-primary)] to-[color:var(--accent-light)] rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-[color:var(--accent-light)] mt-2">不只是学了就能用的实战技巧</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-primary)]/10 to-cyan-600/10 p-8 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/（一）单元课程目录-（一）单元课程目录.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-primary)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-primary)]">核心课程内容</h3>
                </div>

                <div className="space-y-4">
                  {/* 招投标认知与策划 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-primary)] font-semibold text-base">招投标认知与策划</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 全流程拆解：招投标从头到尾一次讲透（1节）</p>
                      <p>• 打好第一枪：招标策划与文件编制（2节）</p>
                    </div>
                  </div>

                  {/* 投标策略与执行 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-primary)] font-semibold text-base">投标策略与执行</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 赢标秘籍：投标策略与标书制作（1节）</p>
                      <p>• 现场直击：开标评标流程与实务操作（1节）</p>
                    </div>
                  </div>

                  {/* 合同条款与风险控制 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-primary)] font-semibold text-base">合同条款与风险控制</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 深度解读：工程合同条款与风险防控（1节）</p>
                      <p>• 成为高手：合同索赔管理与谈判技巧（2节）</p>
                      <p>• 案例拆解：合同纠纷解决全流程（1节）</p>
                    </div>
                  </div>

                  {/* 工具与实操软件 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-primary)] font-semibold text-base">工具与实操软件</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 上手即用：招投标与合同管理软件操作（2节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-light)]/10 to-[color:var(--accent-light)]/10 p-8 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（二）本节课课程内容.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-primary)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-primary)]">本单元课程重点</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">招投标的行业定位与制度框架</span>
                    </div>
                    <p className="text-white text-sm">深入了解招投标在建设工程中的战略地位与制度体系</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">投标文件的结构与评分逻辑</span>
                    </div>
                    <p className="text-white text-sm">掌握投标文件编制要点与评标专家的评分思维</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">合同条款的常见风险与审查要点</span>
                    </div>
                    <p className="text-white text-sm">学习识别合同风险点，掌握合同审查关键技能</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">合同履约的台账管理与证据链沉淀</span>
                    </div>
                    <p className="text-white text-sm">掌握合同执行过程中的台账管理与证据保全方法</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">案例演练：投标废标点解析与防控</span>
                    </div>
                    <p className="text-white text-sm">通过实际案例学习废标原因与预防措施</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-primary)]/10 to-[color:var(--accent-light)]/10 p-8 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（三）涉及到的大型案例.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-primary)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-primary)]">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">高铁大项目招标逐步拆解</span>
                    </div>
                    <p className="text-white text-sm">从实际高铁项目招标全流程深入剖析招投标各环节要点</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">海外工程投标的必知雷区</span>
                    </div>
                    <p className="text-white text-sm">分析国际工程投标特殊要求与常见风险防范措施</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">成渝中线铁路招投标深度复盘</span>
                    </div>
                    <p className="text-white text-sm">复盘大型基建项目招投标过程，总结成功经验与失败教训</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">城际铁路合同管理实战经验</span>
                    </div>
                    <p className="text-white text-sm">从城际铁路项目实战中学习合同管理核心要点与技巧</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-primary)]/10 to-[color:var(--accent-light)]/10 p-8 border border-[color:var(--border-accent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.7), rgba(26, 37, 47, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（四）涉及到 AI 工具教学.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-primary)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-primary)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-primary)]">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <GPT className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">ChatGPT</span>
                    </div>
                    <p className="text-white text-sm mt-1">用于快速生成投标文件初稿、合同条款解释、合规性检查报告和投标答疑文案，大幅提升文档编制与复盘效率</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Claude className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">Claude</span>
                    </div>
                    <p className="text-white text-sm mt-1">擅长处理长文本，可帮助分析数百页的合同文件或法规，自动提炼风险条款、索赔依据与争议焦点，减少人工审查压力</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Kimi className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">Kimi</span>
                    </div>
                    <p className="text-white text-sm mt-1">针对中文语境优化，更适合处理本地化的政策法规、项目公告与招标文件，支持快速问答和法规条款解读</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Notion className="w-5 h-5 text-[color:var(--accent-primary)]" />
                      <span className="text-[color:var(--accent-primary)] font-semibold text-base">Notion AI</span>
                    </div>
                    <p className="text-white text-sm mt-1">可在工程项目的知识库中沉淀案例、模板与操作手册，实现团队协作式的合同台账管理与任务跟踪</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-[color:var(--accent-primary)]/10 to-[color:var(--accent-light)]/10 rounded-3xl p-8 border border-[color:var(--border-accent)]"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-[color:var(--accent-primary)]" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-[color:var(--accent-primary)]/10 to-cyan-500/10 rounded-2xl p-6 border border-[color:var(--border-accent)] text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--accent-primary)] mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">6K-10K</div>
                <div className="text-[color:var(--accent-light)] text-sm">
                  <div>招投标专员</div>
                  <div>合同管理员</div>
                  <div>标书编制员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--accent-light)]/10 to-[color:var(--accent-dark)]/10 rounded-2xl p-6 border border-[color:var(--border-accent)] text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-[color:var(--accent-light)] mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">10K-20K</div>
                <div className="text-[color:var(--accent-light)] text-sm">
                  <div>商务经理</div>
                  <div>项目商务负责人</div>
                  <div>合同经理</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--accent-primary)]/10 to-[color:var(--accent-dark)]/10 rounded-2xl p-6 border border-[color:var(--border-accent)] text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--accent-primary)] mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">20K-40K</div>
                <div className="text-[color:var(--accent-light)] text-sm">
                  <div>区域市场拓展经理</div>
                  <div>工程总工</div>
                  <div>全过程咨询顾问</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 职业发展前景 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Users className="w-10 h-10 text-base-900" />
            </motion.div>
            <h2 className="text-4xl font-bold text-base-50 mb-4">职业发展前景</h2>
            <p className="text-lg text-base-50/80 max-w-2xl mx-auto">
              通过招投标课程的学习，你可以掌握以下建设工程领域岗位的专业技能
            </p>
          </motion.div>

          {/* 2×2 网格布局：4个岗位 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: '招标专员',
                icon: Target,
                bgColor: 'bg-gradient-to-br from-[#D97706] to-[#F59E0B]',
                skills: [
                  { name: '招投标流程与实施掌握', desc: '精通招投标全过程的操作，确保每一环节符合规范要求。', highlight: true },
                  { name: '投标文件编制与标书制作', desc: '能够根据项目要求独立制作投标书并提升中标率。' },
                  { name: '招标策划与文件编制', desc: '负责招标文件的准备与招标策略的制定。' },
                  { name: '常用招投标与合同管理软件操作', desc: '熟悉相关软件工具，提升工作效率。' },
                  { name: '项目合同索赔管理与谈判技巧', desc: '了解合同条款，能有效进行索赔管理与谈判。' },
                  { name: '工程合同风险防控与条款解读', desc: '精通工程合同条款的深度解读与风险控制。' }
                ],
                color: 'accent'
              },
              {
                title: '投标专员',
                icon: Award,
                bgColor: 'bg-gradient-to-br from-[#D97706] to-[#F59E0B]',
                skills: [
                  { name: '招投标全流程掌握与实务操作', desc: '理解招投标流程并能独立执行各项任务。', highlight: true },
                  { name: '开标评标流程与实务操作', desc: '能够在开标评标环节中高效参与并判断标书。' },
                  { name: '投标策略与方案制定', desc: '掌握招标方案设计，优化投标策略。' },
                  { name: '招标文件的编制与技术响应', desc: '能够编制技术标书，并确保符合招标要求。' },
                  { name: '常用招投标与合同管理软件操作', desc: '熟悉投标所需的工具，支持文件制作与管理。' },
                  { name: '合同纠纷解决与案例分析', desc: '具备合同纠纷的解决方案并进行案例分析。' }
                ],
                color: 'accent'
              },
              {
                title: '采购工程师',
                icon: Settings,
                bgColor: 'bg-gradient-to-br from-[#D97706] to-[#F59E0B]',
                skills: [
                  { name: '招投标流程管理与优化', desc: '熟悉招投标全流程，优化采购环节，提高效率。', highlight: true },
                  { name: '招标策划与合同文件编制', desc: '负责招标文件编制并参与招标策划。' },
                  { name: '常用招投标与合同管理软件操作', desc: '掌握常用招投标软件工具，提升采购管理效率。' },
                  { name: '投标策略与谈判技巧', desc: '通过谈判和策略制定优化采购方案。' },
                  { name: '工程合同条款解读与风险防控', desc: '精通工程合同条款及风险控制措施，确保合规。' },
                  { name: '项目合同索赔与风险管理', desc: '了解合同索赔管理和相关风险控制措施。' }
                ],
                color: 'accent'
              },
              {
                title: '施工管理工程师',
                icon: Monitor,
                bgColor: 'bg-gradient-to-br from-[#D97706] to-[#F59E0B]',
                skills: [
                  { name: '招投标全流程与施工管理结合', desc: '了解招投标流程，并将其应用到施工项目管理中。', highlight: true },
                  { name: '投标策略与施工方案制定', desc: '根据投标需求制定合适的施工方案与计划。' },
                  { name: '项目合同管理与风险识别', desc: '具备合同管理能力，能够识别施工合同中的风险。' },
                  { name: '常用招投标与合同管理软件操作', desc: '使用软件提高施工管理中招投标环节的效率。' },
                  { name: '项目合同索赔管理与谈判技巧', desc: '在施工过程中，能有效管理合同索赔并处理纠纷。' },
                  { name: '合同条款与工程风险控制', desc: '熟悉合同条款，做好项目施工中的风险控制。' }
                ],
                color: 'accent'
              }
            ].map((path, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-xl ${path.bgColor} flex items-center justify-center mb-4`}>
                  <path.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-base-50">
                  {path.title}
                </h3>
                <div className="space-y-3">
                  {path.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${skill.highlight ? 'text-[#F59E0B]' : 'text-white/20'}`} />
                      <div>
                        <span className={`font-medium ${skill.highlight ? 'text-white' : 'text-white/40'}`}>
                          {skill.name}
                        </span>
                        <p className={`text-sm mt-1 ${skill.highlight ? 'text-white/80' : 'text-white/30'}`}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
                      className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="text-3xl font-bold text-base-50 mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的招投标学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-base-50/80 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从基础理论到风险防控，循序渐进掌握招投标核心技能。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/course/bidding-lifecycle"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                开始学习课程
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 