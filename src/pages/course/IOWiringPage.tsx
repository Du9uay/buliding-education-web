import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Network,
  BookOpen,
  Settings,
  Users,
  Monitor,
  Shield,
  Zap,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from '../../components/Icons';

const IOWiringPage: React.FC = () => {
  // 招标策划阶段风险
  const planningRisks = [
    {
      category: "招标方式误用",
      risks: [
        {
          title: "应公开招标却采用邀请招标",
          description: "人为窄化竞争范围，违反《招标投标法》第十一条关于强制公开招标的规定",
          consequences: [
            "法律效力：程序违法导致招标无效及行政处罚",
            "经济层面：缺乏充分竞争易引发围标串标，抬高项目成本10%-30%",
            "监管层面：审计可通过采购痕迹追溯认定违规，面临项目叫停与信用降级"
          ],
          preventions: [
            "严格按照法定标准选择招标方式",
            "建立招标方式决策审批程序",
            "定期开展法规培训和风险教育"
          ]
        },
        {
          title: "化整为零规避招标",
          description: "将单体项目拆分为多个小合同，使单合同额低于法定限额",
          consequences: [
            "形式独立但审计可通过技术关联性等要素穿透认定违法",
            "不仅被追缴已实施合同，还将触发规避招标顶格处罚",
            "项目金额5‰-10‰罚款，严重损害企业信誉"
          ],
          preventions: [
            "建立项目整体性评估机制",
            "严禁人为拆分合同规避招标",
            "加强内部监督和外部审计"
          ]
        }
      ]
    },
    {
      category: "代理机构选聘风险",
      risks: [
        {
          title: "代理机构无资质或超越资质承揽业务",
          description: "选择未取得资质的机构或超资质承接项目，违反相关管理办法",
          consequences: [
            "编制的招标文件无法律效力",
            "代理失误时招标人需承担主要责任",
            "面临监管部门的行政处罚"
          ],
          preventions: [
            "严格审查代理机构资质证书",
            "核实项目是否在资质许可范围内",
            "建立代理机构准入评价体系"
          ]
        },
        {
          title: "代理合同权责约定不明",
          description: "未明确代理机构在各环节的具体权责，导致关键节点失控",
          consequences: [
            "代理擅自答复投标人质疑",
            "流标后代理费支付纠纷",
            "争议处理时无据可依"
          ],
          preventions: [
            "明确文件审核终审权归属招标人",
            "约定异议答复需双方会签",
            "规定流标情形下的代理费计算方式"
          ]
        }
      ]
    }
  ];

  // 招标文件编制雷区
  const documentRisks = [
    {
      category: "歧视性条款警示",
      description: "设定排斥或限制潜在投标人的不合理条件",
      examples: [
        {
          title: "设定与项目无关的过高资质/业绩要求",
          case: "要求房建总包企业具备地铁工程业绩",
          violation: "违反《招标投标法实施条例》第三十二条",
          risk: "被投诉后行政监督部门责令改正，延误招标周期≥15日"
        },
        {
          title: "技术参数指向特定品牌或专利产品",
          case: "规定采用XX品牌控制器或满足XX专利技术",
          violation: "涉嫌违反《反垄断法》",
          risk: "被未入围品牌方提起行政投诉，招标文件作废"
        }
      ],
      preventions: [
        "建立招标文件合规性审查机制",
        "避免设置与项目无关的资质要求",
        "技术标准应采用行业通用规范"
      ]
    },
    {
      category: "评标标准模糊",
      description: "评分细则不明确，导致评标过程争议频发",
      examples: [
        {
          title: "评分细则未量化",
          case: "方案分占30%却未设定技术亮点、创新点等子项分值",
          violation: "违反《评标委员会评标方法暂行规定》第十七条",
          risk: "相同方案不同专家打分差异可达40%，引发投诉概率超70%"
        },
        {
          title: "价格分计算方式未公开",
          case: "未载明基准价计算方式、价格分计算公式、偏差扣分规则",
          violation: "构成程序重大瑕疵",
          risk: "中标结果被撤销，评标现场争议导致评审中断"
        }
      ],
      preventions: [
        "技术/商务评分项必须拆解为三级指标",
        "每级设定权重与扣分公式",
        "在招标文件中完整公示计算公式范例"
      ]
    }
  ];

  // 投标环节典型陷阱
  const biddingTraps = [
    {
      category: "投标文件瑕疵",
      traps: [
        {
          title: "未响应实质性条款",
          description: "投标文件缩短约定工期或降低质量等级",
          result: "直接否决投标",
          prevention: "建立实质性条款响应清单，逐项勾选复核"
        },
        {
          title: "联合体投标未提交共同协议",
          description: "缺漏联合体协议书或未明确各方工作界面",
          result: "按规定应否决投标",
          prevention: "协议中载明主办方授权权限、各方责任连带条款、账户共管约定"
        }
      ]
    },
    {
      category: "保证金风险",
      traps: [
        {
          title: "投标保证金未按指定账户/时效缴纳",
          description: "超时到账或汇款账户非招标文件指定账户",
          result: "系统自动判定无效标",
          prevention: "严格按照招标文件要求的账户和时间缴纳保证金"
        },
        {
          title: "招标人挪用或超期退还保证金",
          description: "中标通知书发出后5日内未退非中标人保证金",
          result: "承担双倍责任：退还本金+同期LPR利息赔偿",
          prevention: "建立保证金专户管理制度，严格按时退还"
        }
      ]
    }
  ];

  // 开标评标高危环节
  const evaluationRisks = [
    {
      category: "开标程序合规性",
      risks: [
        {
          title: "接收逾期递交的投标文件",
          impact: "超截止时间1分钟接收文件即违反法定程序",
          consequence: "开标无效且招标人信用扣分，已进行的评标作废",
          prevention: "严格按照截止时间，超时文件一律不得接收"
        },
        {
          title: "未公开宣读投标人优惠承诺",
          impact: "未现场宣读投标函中的价格折扣、免费运维等承诺",
          consequence: "中标后投标人主张未宣读承诺无效拒履约",
          prevention: "在开标记录表中专项记录优惠条款并由投标人代表签字确认"
        }
      ]
    },
    {
      category: "评标委员会行为",
      risks: [
        {
          title: "评标专家未回避利害关系方",
          impact: "专家现任投标人顾问或近3年为其提供咨询服务未回避",
          consequence: "该专家评审无效，需重新评标",
          prevention: "建立专家回避审查制度，严格执行回避规定"
        },
        {
          title: "擅自改变招标文件载明的评标标准",
          impact: "如将价格分权重从40%上调至50%",
          consequence: "需重新组建评委会评标，延误工期≥7日",
          prevention: "修改评分细则必须由全体评委签字并报监督部门备案"
        }
      ]
    },
    {
      category: "否决投标常见争议点",
      risks: [
        {
          title: "非实质性偏差被错误否决",
          impact: "将装订瑕疵、页码缺失等非实质性问题作为废标理由",
          consequence: "违反《招标投标法实施条例》第五十一条，被误废标的投标人可主张参与评标成本（标书制作费+差旅费）",
          prevention: "建立明确的实质性偏差判定标准，确保偏差不影响实质性内容时继续评审"
        },
        {
          title: "未书面要求澄清直接否决",
          impact: "对投标文件含义不明确处（如工程量小数点错误），未通过书面澄清函要求说明即否决",
          consequence: "构成程序违法，需重新评标",
          prevention: "正确流程：评委会提出澄清问题→代理机构书面发送→投标人书面答复（签字盖章）→评委会复核"
        }
      ]
    }
  ];

  // 定标与合同签订雷区
  const contractRisks = [
    {
      category: "定标程序违规",
      violations: [
        {
          title: "未按评标报告顺序确定中标人",
          description: "放弃排名第一中标候选人且无法定事由",
          penalty: "双重追责：行政责任（责令改正+罚款）；民事责任（第一候选人索赔预期利润）",
          solution: "合法变更必须取得评委会书面说明及监管机构核准"
        },
        {
          title: "中标结果公示信息不全",
          description: "未公示中标候选人商务/技术/价格评分明细",
          penalty: "其他投标人质疑评分公正性，引发投诉",
          solution: "公示模板必须包含：总分、分项得分、排序、项目负责人姓名"
        }
      ]
    },
    {
      category: "合同谈判越界行为",
      violations: [
        {
          title: "强压中标人让利或增加附加条款",
          description: "要求降价5%或增加免费培训条款",
          penalty: "补充协议无效，按原中标条件执行",
          solution: "严格按照招投标文件签订合同，不得增减实质性条款"
        },
        {
          title: "重新谈判技术方案导致价格变更",
          description: "签约前要求更换设备品牌（同档次）却维持原价，视为变相压价",
          penalty: "违反招投标法，可能导致合同无效",
          solution: "合规路径：重大技术变更需重新招标；微小调整需签订'技术变更确认单'并报财政备案（政府项目）"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="glass-card p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-500 rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mr-6">
              <Shield className="w-8 h-8 text-base-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-base-50 mb-2">
                招投标全流程风险防控与合规红线
              </h1>
              <p className="text-base-50/80 text-lg">
                全面识别各阶段风险点，掌握防控措施，确保招投标活动合法合规
              </p>
            </div>
          </div>
        </motion.div>

        {/* 招标策划阶段风险 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Target className="w-6 h-6 text-orange-400 mr-3" />
              招标策划阶段风险
            </h2>

            {planningRisks.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h3 className="text-xl font-semibold text-base-50 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-400 text-sm font-bold">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.risks.map((risk, riskIndex) => (
                    <motion.div
                      key={riskIndex}
                      className="glass-card p-6 border-l-4 border-orange-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: riskIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-bold text-base-50 mb-3">
                        {risk.title}
                      </h4>
                      <p className="text-base-50/85 mb-4 leading-relaxed">
                        {risk.description}
                      </p>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                            风险后果
                          </h5>
                          <div className="space-y-2">
                            {risk.consequences.map((consequence, consIndex) => (
                              <div key={consIndex} className="flex items-start gap-2 p-3 bg-red-500/10 rounded-lg">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-base-50/80 text-sm leading-relaxed">
                                  {consequence}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">
                            防控措施
                          </h5>
                          <div className="space-y-2">
                            {risk.preventions.map((prevention, prevIndex) => (
                              <div key={prevIndex} className="flex items-start gap-2 p-3 bg-green-500/10 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-base-50/80 text-sm leading-relaxed">
                                  {prevention}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 招标文件编制雷区 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-red-400 mr-3" />
              招标文件编制雷区
            </h2>

            {documentRisks.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-base-50 mb-2">
                        {category.category}
                      </h3>
                      <p className="text-base-50/85 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {category.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-gradient-to-r from-red-500/10 to-red-500/5 backdrop-blur-sm rounded-xl p-5">
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-base-50 mb-3">
                              {example.title}
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <span className="text-sm font-medium text-yellow-400">典型案例：</span>
                                <p className="text-base-50/80 text-sm mt-1">{example.case}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-red-400">违法依据：</span>
                                <p className="text-base-50/80 text-sm mt-1">{example.violation}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                              法律风险
                            </h5>
                            <p className="text-base-50/80 text-sm leading-relaxed">
                              {example.risk}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 p-4 bg-green-500/10 rounded-xl">
                      <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">
                        防控要点
                      </h5>
                      <div className="space-y-2">
                        {category.preventions.map((prevention, prevIndex) => (
                          <div key={prevIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-base-50/80 text-sm leading-relaxed">
                              {prevention}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 投标环节典型陷阱 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              投标环节典型陷阱
            </h2>

            {biddingTraps.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-semibold text-base-50 mb-6">
                  {category.category}
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.traps.map((trap, trapIndex) => (
                    <motion.div
                      key={trapIndex}
                      className="glass-card p-6 border-l-4 border-yellow-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: trapIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-bold text-base-50 mb-3">
                        {trap.title}
                      </h4>
                      <p className="text-base-50/85 mb-4 leading-relaxed">
                        {trap.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-red-500/10 rounded-lg">
                          <span className="text-sm font-medium text-red-400">后果：</span>
                          <p className="text-base-50/80 text-sm mt-1">
                            {trap.result}
                          </p>
                        </div>
                        
                        <div className="p-3 bg-green-500/10 rounded-lg">
                          <span className="text-sm font-medium text-green-400">防范：</span>
                          <p className="text-base-50/80 text-sm mt-1">
                            {trap.prevention}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 开标评标高危环节 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Settings className="w-6 h-6 text-purple-400 mr-3" />
              开标评标阶段高危环节
            </h2>

            {evaluationRisks.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-semibold text-base-50 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.risks.map((risk, riskIndex) => (
                    <motion.div
                      key={riskIndex}
                      className="glass-card p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: riskIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-base-50 mb-2">
                            {risk.title}
                          </h4>
                          <p className="text-purple-300 text-sm">
                            {risk.impact}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                            后果
                          </h5>
                          <p className="text-base-50/80 text-sm leading-relaxed">
                            {risk.consequence}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                            防范措施
                          </h5>
                          <p className="text-base-50/80 text-sm leading-relaxed">
                            {risk.prevention}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 定标与合同签订雷区 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Users className="w-6 h-6 text-blue-400 mr-3" />
              定标与合同签订雷区
            </h2>

            {contractRisks.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-semibold text-base-50 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.violations.map((violation, violationIndex) => (
                    <motion.div
                      key={violationIndex}
                      className="glass-card p-6 border-l-4 border-blue-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: violationIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-bold text-base-50 mb-3">
                        {violation.title}
                      </h4>
                      <p className="text-base-50/85 mb-4 leading-relaxed">
                        {violation.description}
                      </p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-500/10 rounded-xl">
                          <h5 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                            法律后果
                          </h5>
                          <p className="text-base-50/80 text-sm leading-relaxed">
                            {violation.penalty}
                          </p>
                        </div>
                        
                        <div className="p-4 bg-green-500/10 rounded-xl">
                          <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">
                            合规路径
                          </h5>
                          <p className="text-base-50/80 text-sm leading-relaxed">
                            {violation.solution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* 风险防控总结 */}
            <div className="mt-10 p-6 bg-gradient-to-r from-accent-500/15 to-accent-500/5 backdrop-blur-sm rounded-2xl">
              <h3 className="text-lg font-bold text-base-50 mb-4 text-center">
                风险防控核心要点
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent-500 mb-1">全程合规</div>
                  <div className="text-base-50/80 text-sm">严格按法律法规执行</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-500 mb-1">源头防控</div>
                  <div className="text-base-50/80 text-sm">策划阶段识别风险</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-500 mb-1">程序规范</div>
                  <div className="text-base-50/80 text-sm">每个环节都有标准</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-500 mb-1">监督制衡</div>
                  <div className="text-base-50/80 text-sm">建立有效制约机制</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/bidding-process"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            招投标全流程解析
          </Link>
          
          <Link
            to="/course-test"
            className="btn-primary flex items-center group"
          >
            课堂测试
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IOWiringPage;