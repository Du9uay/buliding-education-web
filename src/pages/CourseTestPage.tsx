import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, RefreshCw, Target, CheckCircle, ArrowRight } from '../components/Icons';

interface Line {
  start: { x: number; y: number };
  end: { x: number; y: number };
  leftId: string;
  rightId: string;
}

interface ActiveLine {
  start: { x: number; y: number };
  end?: { x: number; y: number };
  leftId: string;
}

// 打乱数组顺序的辅助函数
const shuffleArray = <T extends any>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CourseTestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('multiple');
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string | string[] }>({});
  const [lines, setLines] = useState<Line[]>([]);
  const [activeLine, setActiveLine] = useState<ActiveLine | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof matchingQuestions>([]);
  const [sequenceAnswers, setSequenceAnswers] = useState<{ [key: string]: string[] }>({});
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // 计时器
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30分钟

  useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setShowResults(true);
    }
  }, [timeRemaining, showResults]);

  // 顺序题数据
  const sequenceQuestions = useMemo(() => [
    {
      id: 'bidding_process_flow',
      question: '请将建设工程招投标全流程按正确顺序排列：',
      items: [
        { id: 'bid_opening', text: '开标' },
        { id: 'document_sale', text: '发售招标文件' },
        { id: 'prequalification', text: '资格预审' },
        { id: 'announcement', text: '发布招标公告' },
        { id: 'contract_signing', text: '定标与合同签订' },
        { id: 'bid_evaluation', text: '评标' },
        { id: 'bid_submission', text: '投标人递交投标文件' }
      ],
      correctOrder: ['announcement', 'prequalification', 'document_sale', 'bid_submission', 'bid_opening', 'bid_evaluation', 'contract_signing']
    }
  ], []);

  // 匹配题数据
  const matchingQuestions = useMemo(() => [
    {
      id: 'm1',
      leftItems: [
        { id: 'l1', text: '公开原则' },
        { id: 'l2', text: '公平原则' },
        { id: 'l3', text: '公正原则' },
        { id: 'l4', text: '诚实信用原则' }
      ],
      rightItems: [
        { id: 'r1', text: '参与各方享有平等机会' },
        { id: 'r2', text: '招投标活动相关信息全面公开' },
        { id: 'r3', text: '遵守诚信操守开展招投标' },
        { id: 'r4', text: '评审时遵循统一标准' }
      ],
      correctMatches: {
        'l1': 'r2', // 公开原则 - 招投标活动相关信息全面公开
        'l2': 'r1', // 公平原则 - 参与各方享有平等机会
        'l3': 'r4', // 公正原则 - 评审时遵循统一标准
        'l4': 'r3'  // 诚实信用原则 - 遵守诚信操守开展招投标
      }
    }
  ], []);

  // 初始化时打乱题目顺序
  useEffect(() => {
    const shuffled = matchingQuestions.map(question => ({
      ...question,
      leftItems: shuffleArray(question.leftItems),
      rightItems: shuffleArray(question.rightItems)
    }));
    setShuffledQuestions(shuffled);

    // 初始化顺序题答案（打乱顺序）
    const initialSequenceAnswers: { [key: string]: string[] } = {};
    sequenceQuestions.forEach(question => {
      initialSequenceAnswers[question.id] = shuffleArray([...question.items]).map(item => item.id);
    });
    setSequenceAnswers(initialSequenceAnswers);
  }, [matchingQuestions, sequenceQuestions]);

  // 拖拽处理函数
  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetItemId: string, questionId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetItemId) return;

    setSequenceAnswers(prev => {
      const items = [...prev[questionId]];
      const draggedIndex = items.indexOf(draggedItem);
      const targetIndex = items.indexOf(targetItemId);
      
      // 移动项目
      items.splice(draggedIndex, 1);
      items.splice(targetIndex, 0, draggedItem);
      
      return {
        ...prev,
        [questionId]: items
      };
    });
    
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  // 重置顺序题
  const resetSequence = (questionId: string) => {
    const question = sequenceQuestions.find(q => q.id === questionId);
    if (question) {
      setSequenceAnswers(prev => ({
        ...prev,
        [questionId]: shuffleArray([...question.items]).map(item => item.id)
      }));
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmitTest = () => {
    // 保存顺序题答案到answers状态
    Object.keys(sequenceAnswers).forEach(questionId => {
      setAnswers(prev => ({
        ...prev,
        [questionId]: sequenceAnswers[questionId]
      }));
    });
    
    setTimeout(() => {
      setShowResults(true);
      setCurrentSection('results');
      // 滚动到测试导航栏位置
      setTimeout(() => {
        const resultsElement = document.querySelector('[data-testid="test-navigation"]');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }, 1500);
  };

  // 选择题
  const multipleChoice = [
    {
      id: 'q1',
      question: '招投标在建设工程项目生命周期中的核心作用是什么？',
      options: [
        'A. 替代监理单位对施工质量的监督职责',
        'B. 实现设计方案向施工落地的转化，并锁定承包商执行能力',
        'C. 自动生成竣工决算报告',
        'D. 负责工程材料采购'
      ],
      correct: 'B'
    },
    {
      id: 'q2',
      question: '某水库除险加固工程（预算3800万元）拟采用邀请招标，仅向3家本地企业发出投标邀请。此做法可能违反下列哪项原则？',
      options: [
        'A. 公平原则',
        'B. 公开原则',
        'C. 诚实信用原则',
        'D. 评标委员会独立性原则'
      ],
      correct: 'B'
    },
    {
      id: 'q3',
      question: '投标人在技术标中承诺"工期较招标要求缩短20%"，但未提供详细赶工方案。评标委员会应如何处理？',
      options: [
        'A. 给予技术加分，体现投标人积极性',
        'B. 视为未实质性响应招标文件，否决投标',
        'C. 要求现场补充说明后继续评审',
        'D. 默认接受承诺，按缩短后工期评分'
      ],
      correct: 'B'
    },
    {
      id: 'q4',
      question: '招标文件要求"混凝土抗压强度≥C30"，投标人B响应为"采用C35高标准混凝土"。该行为可能导致：',
      options: [
        'A. 因未实质性响应被废标',
        'B. 获得技术加分',
        'C. 需补交材料差价',
        'D. 自动升级为中标候选人'
      ],
      correct: 'A'
    },
    {
      id: 'q5',
      question: '土木水利行业招投标的突出特点包括：',
      options: [
        'A. 政策法规相对宽松，技术要求简单',
        'B. 投资规模小，风险可控',
        'C. 政策法规密集、投资规模大、技术专业性强',
        'D. 主要以价格竞争为核心'
      ],
      correct: 'C'
    }
  ];

  const handleMultipleChoice = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let userScore = 0;
    const details: any = {
      multipleChoice: [],
      matching: [],
      sequence: []
    };

    // 选择题评分 - 每题8分，共40分（5题）
    const multipleChoiceScore = 8;
    multipleChoice.forEach(q => {
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) {
        userScore += multipleChoiceScore;
      }
      details.multipleChoice.push({
        id: q.id,
        question: q.question,
        userAnswer: answers[q.id],
        correctAnswer: q.correct,
        isCorrect,
        options: q.options,
        score: isCorrect ? multipleChoiceScore : 0
      });
    });
    totalScore += multipleChoice.length * multipleChoiceScore;

    // 匹配题评分 - 每个连接10分，共40分（4个连接）
    const matchingScore = 10;
    matchingQuestions.forEach(q => {
      Object.keys(q.correctMatches).forEach(leftId => {
        const isCorrect = answers[`${leftId}_match`] === (q.correctMatches as any)[leftId];
        if (isCorrect) {
          userScore += matchingScore;
        }
        const leftItem = q.leftItems.find(item => item.id === leftId);
        const userRightId = answers[`${leftId}_match`];
        const userRightItem = q.rightItems.find(item => item.id === userRightId);
        const correctRightItem = q.rightItems.find(item => item.id === (q.correctMatches as any)[leftId]);
        
        details.matching.push({
          leftId,
          leftText: leftItem?.text,
          userRightText: userRightItem?.text || '未匹配',
          correctRightText: correctRightItem?.text,
          isCorrect,
          score: isCorrect ? matchingScore : 0
        });
      });
    });
    totalScore += Object.keys(matchingQuestions[0].correctMatches).length * matchingScore;

    // 顺序题评分 - 总共20分（1题）
    const sequenceScore = 20;
    sequenceQuestions.forEach(q => {
      const userOrder = answers[q.id] || sequenceAnswers[q.id];
      const isCorrect = userOrder && JSON.stringify(userOrder) === JSON.stringify(q.correctOrder);
      if (isCorrect) {
        userScore += sequenceScore;
      }
      
      const userOrderText = userOrder && Array.isArray(userOrder) ? userOrder.map((id: string) => q.items.find(item => item.id === id)?.text).filter(Boolean) : [];
      const correctOrderText = q.correctOrder.map((id: string) => q.items.find(item => item.id === id)?.text).filter(Boolean);
      
      details.sequence.push({
        id: q.id,
        question: q.question,
        userOrder: userOrderText,
        correctOrder: correctOrderText,
        isCorrect,
        score: isCorrect ? sequenceScore : 0
      });
    });
    totalScore += sequenceQuestions.length * sequenceScore;

    return {
      total: totalScore,
      userScore: userScore,
      percentage: Math.round((userScore / totalScore) * 100),
      score: userScore,
      details
    };
  };;;

  const resetTest = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentSection('multiple');
    setLines([]);
    setActiveLine(null);
    setTimeRemaining(30 * 60); // 重置计时器
    
    // 重新打乱题目顺序
    const shuffled = matchingQuestions.map(question => ({
      ...question,
      leftItems: shuffleArray(question.leftItems),
      rightItems: shuffleArray(question.rightItems)
    }));
    setShuffledQuestions(shuffled);

    // 重新初始化顺序题答案
    const initialSequenceAnswers: { [key: string]: string[] } = {};
    sequenceQuestions.forEach(question => {
      initialSequenceAnswers[question.id] = shuffleArray([...question.items]).map(item => item.id);
    });
    setSequenceAnswers(initialSequenceAnswers);
  };

  const score = showResults ? calculateScore() : null;

  const getItemCenter = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const svgRect = svgRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    return {
      x: rect.left + rect.width / 2 - svgRect.left,
      y: rect.top + rect.height / 2 - svgRect.top
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeLine) {
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        setActiveLine({
          ...activeLine,
          end: {
            x: e.clientX - svgRect.left,
            y: e.clientY - svgRect.top
          }
        });
      }
    }
  };

  const handleLeftItemClick = (leftId: string, e: React.MouseEvent) => {
    const element = itemRefs.current[leftId];
    if (element) {
      // 如果该项已经连线，先移除现有连线
      if (lines.some(line => line.leftId === leftId)) {
        setLines(prev => prev.filter(line => line.leftId !== leftId));
        setAnswers(prev => {
          const newAnswers = { ...prev };
          delete newAnswers[`${leftId}_match`];
          return newAnswers;
        });
      }
      
      const center = getItemCenter(element);
      setActiveLine({
        start: center,
        leftId
      });
    }
  };

  const handleRightItemClick = (rightId: string, e: React.MouseEvent) => {
    if (activeLine) {
      const element = itemRefs.current[rightId];
      if (element) {
        // 如果该项已经连线，不允许重复连接
        if (lines.some(line => line.rightId === rightId)) {
          return;
        }

        // 如果左侧项已经有其他连线，先移除
        const existingLine = lines.find(line => line.leftId === activeLine.leftId);
        if (existingLine) {
          setLines(prev => prev.filter(line => line.leftId !== activeLine.leftId));
          setAnswers(prev => {
            const newAnswers = { ...prev };
            delete newAnswers[`${activeLine.leftId}_match`];
            return newAnswers;
          });
        }

        const center = getItemCenter(element);
        setLines(prev => [...prev, {
          start: activeLine.start,
          end: center,
          leftId: activeLine.leftId,
          rightId
        }]);
        setActiveLine(null);
        
        // 更新答案
        setAnswers(prev => ({
          ...prev,
          [`${activeLine.leftId}_match`]: rightId
        }));
      }
    }
  };

  // 重置时重新打乱顺序
  const handleReset = (question: any) => {
    setLines([]);
    setAnswers(prev => {
      const newAnswers = { ...prev };
      question.leftItems.forEach((item: any) => {
        delete newAnswers[`${item.id}_match`];
      });
      return newAnswers;
    });
    
    // 重新打乱当前题目的选项顺序
    setShuffledQuestions(prev => 
      prev.map(q => 
        q.id === question.id 
          ? {
              ...q,
              leftItems: shuffleArray(q.leftItems),
              rightItems: shuffleArray(q.rightItems)
            }
          : q
      )
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Award className="w-10 h-10 text-accent-500" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-base-50 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            招投标课堂测试
          </motion.h1>
          <motion.p 
            className="text-xl text-base-50/80 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            通过综合测试检验您对建设工程招投标全流程知识的掌握程度
          </motion.p>
          
          {/* 计时器 */}
          <motion.div 
            className="mt-8 inline-flex items-center glass-effect rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <RefreshCw className="w-5 h-5 text-accent-500 mr-2" />
            <span className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-400' : 'text-accent-500'}`}>
              剩余时间: {formatTime(timeRemaining)}
            </span>
          </motion.div>
        </motion.div>

        {/* 测试导航 */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          data-testid="test-navigation"
        >
          <div className="glass-effect rounded-2xl p-2">
            <div className="flex space-x-2">
              {[
                { key: 'multiple', label: '选择题', color: 'bg-accent-500' },
                { key: 'matching', label: '连线题', color: 'bg-accent-500' },
                { key: 'sequence', label: '排序题', color: 'bg-accent-500' }
              ].map((section) => (
                <motion.button
                  key={section.key}
                  onClick={() => setCurrentSection(section.key as any)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    currentSection === section.key
                      ? `${section.color} text-base-900 shadow-lg`
                      : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: currentSection === section.key ? 1.05 : 1,
                  }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 内容区域 */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {currentSection === 'multiple' && (
              <motion.div
                key="multiple-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-base-50 text-center mb-8">
                  选择题（每题8分，共40分）
                </h2>
                {multipleChoice.map((question, index) => (
                  <div key={question.id} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 space-y-4">
                    <h3 className="text-lg font-medium text-base-50">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleMultipleChoice(question.id, option[0])}
                          className={`w-full text-left p-4 rounded-lg transition-colors ${
                            answers[question.id] === option[0]
                              ? 'bg-accent-500/20 shadow-glass-sm backdrop-blur-sm'
                              : 'bg-base-900/20 hover:bg-base-900/30 shadow-glass-sm backdrop-blur-sm'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setCurrentSection('matching')}
                    className="btn-primary rounded-lg flex items-center space-x-2"
                  >
                    <span>连线题</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {currentSection === 'matching' && (
              <motion.div
                key="matching-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-base-50 text-center mb-8">
                  连线题（每项10分，共40分）
                </h2>
                {shuffledQuestions.map((question, questionIndex) => (
                  <div key={question.id} className="glass-effect rounded-2xl p-8">
                    <h3 className="text-lg font-semibold text-base-50 mb-6 text-center">
                      {questionIndex === 0 ? '请将左侧的招投标参与方与右侧对应的职责进行连线' : '请将左侧的招投标原则与右侧对应的解释进行连线'}
                    </h3>
                    <div 
                      className="relative grid md:grid-cols-2 gap-8 min-h-[400px]"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setActiveLine(null)}
                    >
                      <svg
                        ref={svgRef}
                        className="absolute inset-0 pointer-events-none"
                        style={{ zIndex: 1, width: '100%', height: '100%' }}
                      >
                        {lines.map((line, i) => (
                          <g key={i}>
                            <line
                              x1={line.start.x}
                              y1={line.start.y}
                              x2={line.end.x}
                              y2={line.end.y}
                              stroke="#60A5FA"
                              strokeWidth="2"
                              className="transition-all duration-300"
                            />
                            <circle
                              cx={line.start.x}
                              cy={line.start.y}
                              r="4"
                              fill="#60A5FA"
                            />
                            <circle
                              cx={line.end.x}
                              cy={line.end.y}
                              r="4"
                              fill="#60A5FA"
                            />
                          </g>
                        ))}
                        {activeLine && (
                          <g>
                            <line
                              x1={activeLine.start.x}
                              y1={activeLine.start.y}
                              x2={activeLine.end?.x || activeLine.start.x}
                              y2={activeLine.end?.y || activeLine.start.y}
                              stroke="#60A5FA"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                            <circle
                              cx={activeLine.start.x}
                              cy={activeLine.start.y}
                              r="4"
                              fill="#60A5FA"
                            />
                          </g>
                        )}
                      </svg>

                      <div className="relative z-10">
                        <h4 className="text-accent-500 font-medium mb-4">
                          {questionIndex === 0 ? '参与方' : '原则'}
                        </h4>
                        <div className="space-y-3">
                          {question.leftItems.map(item => (
                            <div
                              key={item.id}
                              ref={el => el && (itemRefs.current[item.id] = el)}
                              onClick={(e) => handleLeftItemClick(item.id, e)}
                              className={`glass-light bg-blue-900/10 p-4 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                                lines.some(line => line.leftId === item.id)
                                  ? 'bg-blue-500/30'
                                  : 'hover:bg-blue-900/40'
                              }`}
                            >
                              <span className="text-base-50 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h4 className="text-green-300 font-medium mb-4">
                          {questionIndex === 0 ? '职责描述' : '解释说明'}
                        </h4>
                        <div className="space-y-3">
                          {question.rightItems.map(item => (
                            <div
                              key={item.id}
                              ref={el => el && (itemRefs.current[item.id] = el)}
                              onClick={(e) => handleRightItemClick(item.id, e)}
                              className={`glass-light bg-green-900/10 p-4 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                                lines.some(line => line.rightId === item.id)
                                  ? 'bg-green-500/30'
                                  : 'hover:bg-green-900/40'
                              }`}
                            >
                              <span className="text-base-50">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => handleReset(question)}
                        className="text-sm text-red-400 hover:text-red-300 transition-colors"
                      >
                        重置连线
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={() => setCurrentSection('sequence')}
                    className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>继续到排序题</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* 顺序题部分 */}
            {currentSection === 'sequence' && (
              <motion.div
                key="sequence-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.5, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25
                }}
                className="flex justify-center items-start min-h-[80vh]"
              >
                <div className="w-full max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-base-50 text-center mb-8">
                    排序题（共20分）
                  </h2>
                  {sequenceQuestions.map((question) => (
                    <div key={question.id} className="glass-card p-8 mb-8">
                      <h3 className="text-lg font-semibold text-base-50 mb-6 text-center">
                        {question.question}
                      </h3>
                      <div className="space-y-3">
                        {(sequenceAnswers[question.id] || []).map((itemId, index) => {
                          const item = question.items.find(i => i.id === itemId);
                          if (!item) return null;
                          return (
                            <div
                              key={itemId}
                              draggable
                              onDragStart={(e) => handleDragStart(e, itemId)}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleDrop(e, itemId, question.id)}
                              onDragEnd={handleDragEnd}
                              className={`glass-light bg-blue-900/10 p-4 cursor-move transition-all duration-300 hover:bg-blue-900/20 hover:transform hover:scale-105 flex items-center ${
                                draggedItem === itemId ? 'opacity-50 scale-95' : ''
                              }`}
                            >
                              <span className="text-accent-500 font-bold mr-4 text-lg">
                                {index + 1}.
                              </span>
                              <span className="text-base-50 font-medium">
                                {item.text}
                              </span>
                              <div className="ml-auto text-accent-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                </svg>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <button
                          onClick={() => resetSequence(question.id)}
                          className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          重新排序
                        </button>
                        <div className="text-sm text-gray-400">
                          提示：拖拽上述选项来安排正确的顺序
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* 提交测试按钮 */}
                  <div className="flex justify-center mt-12">
                    <motion.button
                      onClick={handleSubmitTest}
                      className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-3 px-12 py-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Award className="w-6 h-6" />
                      <span className="text-lg">提交测试</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 测试结果 */}
            {currentSection === 'results' && score && (
              <motion.div
                key="results-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-base-50 mb-8" data-testid="test-results">测试结果</h2>
                  <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                    <div className="mb-6">
                      <div className={`text-6xl font-bold mb-4 ${
                        score.score >= 80 ? 'text-green-400' : 
                        score.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {score.score}分
                      </div>
                      <p className="text-xl text-gray-300">
                        总分：100分 | 得分：{score.userScore}分
                      </p>
                    </div>
                    
                    <div className={`p-6 rounded-lg mb-6 ${
                      score.score >= 80 ? 'glass-light bg-green-900/10' :
                      score.score >= 60 ? 'glass-light bg-yellow-900/10' :
                      'glass-light bg-red-900/10'
                    }`}>
                      <h3 className={`text-lg font-semibold mb-3 ${
                        score.score >= 80 ? 'text-green-300' :
                        score.score >= 60 ? 'text-yellow-300' : 'text-red-300'
                      }`}>
                        {score.score >= 80 ? '优秀！' : 
                         score.score >= 60 ? '良好' : '需要加强'}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {score.score >= 80 ? 
                          '恭喜您！您已经很好地掌握了建设工程招投标全流程的基础知识，可以进入更深入的学习和实践。' :
                          score.score >= 60 ?
                          '您对招投标基础知识有一定掌握，建议复习薄弱环节，特别关注招投标的法律法规和操作流程。' :
                          '建议您重新学习相关章节，特别关注招投标的基本概念、全流程操作和风险防控措施。'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* 详细答题详情 */}
                <div className="mt-12 space-y-8">
                  {/* 选择题详情 */}
                  <div className="glass-effect-light rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-base-50 mb-6">选择题详情</h3>
                    <div className="space-y-4">
                      {score.details.multipleChoice.map((item: any, index: number) => (
                        <div key={item.id} className="glass-card p-4">
                          <div className="flex justify-between items-start mb-3">
                            <p className="text-base-50 font-medium flex-1">
                              {index + 1}. {item.question}
                            </p>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.isCorrect 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {item.isCorrect ? '正确' : '错误'} ({item.score}分)
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-base-50/60">你的答案：</span>
                              <span className={item.isCorrect ? 'text-green-400' : 'text-red-400'}>
                                {item.userAnswer || '未作答'}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-base-50/60">正确答案：</span>
                              <span className="text-green-400">{item.correctAnswer}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 连线题详情 */}
                  <div className="glass-effect-light rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-base-50 mb-6">连线题详情</h3>
                    <div className="space-y-3">
                      {score.details.matching.map((item: any, index: number) => (
                        <div key={index} className="glass-card p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex-1">
                              <span className="text-base-50 font-medium">{item.leftText}</span>
                              <span className="text-base-50/60 mx-3">→</span>
                              <span className={item.isCorrect ? 'text-green-400' : 'text-red-400'}>
                                {item.userRightText}
                              </span>
                              {!item.isCorrect && (
                                <>
                                  <span className="text-base-50/60 mx-2">应为：</span>
                                  <span className="text-green-400">{item.correctRightText}</span>
                                </>
                              )}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.isCorrect 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {item.score}分
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 排序题详情 */}
                  <div className="glass-effect-light rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-base-50 mb-6">排序题详情</h3>
                    {score.details.sequence.map((item: any) => (
                      <div key={item.id} className="glass-card p-4">
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-base-50 font-medium">{item.question}</p>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.isCorrect 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {item.isCorrect ? '正确' : '错误'} ({item.score}分)
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-base-50/60 mb-2">你的顺序：</h4>
                            <ol className="space-y-1">
                              {item.userOrder.map((step: string, idx: number) => (
                                <li key={idx} className="text-sm text-base-50/80">
                                  {idx + 1}. {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-green-400 mb-2">正确顺序：</h4>
                            <ol className="space-y-1">
                              {item.correctOrder.map((step: string, idx: number) => (
                                <li key={idx} className="text-sm text-green-400/80">
                                  {idx + 1}. {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>

                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={resetTest}
                    className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>重新测试</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 导航链接 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-xl text-base-50 hover:bg-white/5 transition-all duration-300"
          >
            <Target className="w-5 h-5" />
            <span>返回课程首页</span>
          </Link>

          <Link
            to="/"
            className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>回到首页</span>
            <BookOpen className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseTestPage;