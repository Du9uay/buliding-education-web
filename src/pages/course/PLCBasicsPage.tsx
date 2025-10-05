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

const PLCBasicsPage: React.FC = () => {
  // 参与主体数据
  const participants = [
    {
      title: "招标人（业主/代理机构）",
      role: "招标组织者",
      description: "提出招标项目、进行招标的法人或其他组织，或受委托的专业代理机构",
      responsibilities: [
        "按照法定程序组织招标活动",
        "确定招标相关要求和评标标准",
        "选择合格的招标代理机构（如需要）",
        "确保招标过程的公开公平公正"
      ],
      example: "某房地产开发公司作为业主拟建设商品房项目，或委托具有资质的招标代理公司办理招标事宜",
      icon: Users
    },
    {
      title: "投标人（承包商/供应商）",
      role: "竞争参与者", 
      description: "响应招标、参加投标竞争的法人或其他组织",
      responsibilities: [
        "按照招标文件要求编制投标文件",
        "参与投标竞争，争取中标",
        "如实提交企业资质、业绩等材料",
        "遵守投标纪律，不得串通投标"
      ],
      example: "市政道路建设项目中，具备相应施工资质的建筑公司作为投标人参与竞争",
      icon: Target
    },
    {
      title: "监管部门",
      role: "监督管理者",
      description: "各级发展改革、住建、交通等部门负责招投标活动监督",
      responsibilities: [
        "监督招投标活动是否符合法律法规",
        "对违规行为进行查处和纠正",
        "制定和完善招投标管理规则",
        "维护招投标市场秩序"
      ],
      example: "住建部门监督建设工程招投标活动，确保程序合规，对违法行为依法处罚",
      icon: Shield
    }
  ];

  // 法律依据数据
  const legalBasis = [
    {
      name: "《中华人民共和国招标投标法》",
      level: "基本法律",
      scope: "招标、投标、开标、评标、中标以及法律责任等全面规定",
      keyPoints: [
        "规定公开招标和邀请招标两种方式",
        "明确招标人、投标人等各方权利义务",
        "确立招投标基本原则和程序"
      ],
      icon: BookOpen
    },
    {
      name: "《招标投标法实施条例》",
      level: "实施条例", 
      scope: "对招标投标法的细化和补充规定",
      keyPoints: [
        "投标保证金数额、退还等详细规定",
        "招投标程序的具体操作要求",
        "违法行为的处罚标准和程序"
      ],
      icon: Settings
    },
    {
      name: "《必须招标的工程项目规定》",
      level: "部门规章",
      scope: "明确哪些工程项目必须进行招标",
      keyPoints: [
        "施工单项合同估算价400万元以上必须招标",
        "使用国有资金投资项目的招标要求",
        "项目规模标准和适用范围"
      ],
      icon: Target
    }
  ];

  // 招投标原则数据
  const principles = [
    {
      title: "公开原则",
      description: "招投标活动的信息公开透明，所有潜在投标人都能获取招标信息",
      implementation: [
        "公开招标时必须通过指定媒介发布招标公告",
        "招标文件、评标标准等信息向所有投标人公开",
        "开标过程公开透明，接受监督"
      ],
      icon: Monitor
    },
    {
      title: "公平原则", 
      description: "保证所有投标人在同等条件下参与竞争，不得歧视或设置不合理门槛",
      implementation: [
        "资格预审时对所有申请人一视同仁",
        "使用统一的资格预审标准进行评审",
        "不得对某些投标人给予特殊待遇"
      ],
      icon: Users
    },
    {
      title: "公正原则",
      description: "评标时按照统一标准和方法对投标文件进行评审，确保评审结果公正",
      implementation: [
        "评标委员会成员客观公正评审",
        "严格按照招标文件规定的评标办法执行",
        "不受外界因素干扰，独立评标"
      ],
      icon: Target
    },
    {
      title: "诚实信用原则",
      description: "招标人、投标人等各方在招投标活动中都要诚实守信",
      implementation: [
        "招标人如实发布招标信息，不得虚假招标",
        "投标人如实提交投标文件和企业信息",
        "不得弄虚作假、串通投标等违法行为"
      ],
      icon: Shield
    }
  ];

  // 招投标流程步骤
  const biddingProcess = [
    {
      step: 1,
      title: "招标准备与策划",
      description: "确认招标条件，选择招标方式和组织形式",
      keyPoints: [
        "确认项目已完成审批、核准或备案手续",
        "确认建设资金已经落实",
        "选择公开招标或邀请招标方式",
        "确定自行招标或委托招标代理"
      ],
      details: {
        "招标条件确认": "确认项目已经完成审批、核准或备案手续，并且资金已经落实。例如，城市轨道交通建设项目需要先获得发改委的项目核准文件，同时建设资金要已经到位或有明确的资金来源保障。",
        "公开招标特点": "发布招标公告，所有符合条件的潜在投标人都可以参与竞争，竞争较为充分。适用于项目规模较大、技术要求相对复杂、有众多潜在投标人的情况。",
        "邀请招标特点": "向特定的潜在投标人发出投标邀请书，参与竞争的投标人数量有限。适用于项目技术复杂或有特殊要求，只有少数潜在投标人可供选择的情况。",
        "组织形式选择": "自行招标适合具备编制招标文件和组织评标能力的大型企业；委托招标代理适合不具备自行招标能力的中小型企业。"
      },
      duration: "5-15天",
      color: "from-accent-500 to-accent-600"
    },
    {
      step: 2,
      title: "发布招标公告/投标邀请书",
      description: "向社会公开发布招标信息或向特定企业发出邀请",
      keyPoints: [
        "公开招标：通过指定媒介发布招标公告",
        "邀请招标：向特定潜在投标人发出邀请书",
        "明确项目概况、投标条件、时间地点等",
        "所有符合条件的企业都有平等参与机会"
      ],
      details: {
        "公开招标发布": "通过国家指定的报刊、信息网络或其他媒介公开发布招标信息。如《中国采购与招标网》是国家指定的发布招标公告的重要网络媒介之一。",
        "邀请招标方式": "直接邀请特定的潜在投标人参与竞标，通常用于关键项目或需要特定供应商的情况。如高端芯片研发项目的设备采购。"
      },
      duration: "公告期5天以上",
      color: "from-accent-500/70 to-accent-600/70"
    },
    {
      step: 3,
      title: "资格预审",
      description: "筛选出具备相应资质和能力的合格投标人",
      keyPoints: [
        "发布资格预审公告或文件",
        "申请人提交资质证明等资料",
        "评审并通知资格预审结果",
        "排除不符合条件的投标人"
      ],
      details: {
        "预审目的": "筛选出具备相应施工资质、类似项目业绩等条件的潜在合格投标人，避免不具备实力的企业参与投标，减少评标工作量，提高招投标效率。",
        "预审程序": "发布资格预审公告→申请人提交资料（营业执照、资质证书、业绩证明、财务报表等）→评审委员会评审→通知预审结果。",
        "资格要求": "明确投标人需要具备的资质等级、类似项目业绩数量、财务状况要求等。"
      },
      duration: "15-30天",
      color: "from-accent-500/80 to-accent-600/80"
    },
    {
      step: 4,
      title: "发售招标文件",
      description: "向合格投标人提供详细的招标文件和技术要求",
      keyPoints: [
        "包含投标人须知、评标办法、合同条款等",
        "提供工程量清单、技术规格书、图纸",
        "进行文件澄清和答疑",
        "确保所有投标人获得相同信息"
      ],
      details: {
        "投标人须知": "包括招标项目概况、投标人资格要求、招标文件获取方式、投标文件编制要求、投标截止时间和地点、开标时间和地点等内容。",
        "评标办法": "规定如何对投标文件进行评审，是采用经评审的最低投标价法还是综合评估法等。",
        "合同条款": "明确招标人和中标人双方的权利和义务，包括工程范围、工期、质量标准、价款支付、违约责任等。",
        "澄清答疑": "投标人可以书面形式提出澄清要求，招标人需书面回复所有潜在投标人，确保信息对称。"
      },
      duration: "发售期不少于5天",
      color: "from-accent-500 to-accent-600"
    },
    {
      step: 5,
      title: "投标准备与递交",
      description: "投标人编制投标文件并在截止时间前递交",
      keyPoints: [
        "购买招标文件、踏勘现场",
        "编制技术标、商务标、资格审查资料",
        "提交投标保证金（通常为投标报价的2%-5%）",
        "密封递交投标文件"
      ],
      details: {
        "技术标内容": "主要包括施工方案、施工工艺、技术措施等内容，是投标人展示其技术实力的部分。",
        "商务标内容": "包括投标报价、价格组成、优惠条件等。投标报价需包括人工费、材料费、机械费、管理费、利润、税金等。",
        "投标保证金": "保证投标人不会随意撤回投标文件或在中标后不签订合同。金额一般为投标报价的2%-5%。",
        "文件密封": "投标文件需按招标文件要求密封，在密封袋上明确标明项目名称、投标人名称等信息。"
      },
      duration: "20天以上",
      color: "from-accent-500/60 to-accent-600/60"
    },
    {
      step: 6,
      title: "开标",
      description: "公开拆封投标文件，宣读投标人名称和投标价格等",
      keyPoints: [
        "确认参加人员（招标人、投标人、评委等）",
        "检查密封情况和标记",
        "当众宣读投标人信息和报价",
        "记录开标过程，相关人员签字确认"
      ],
      details: {
        "开标程序": "确认出席→检查密封→唱标→记录签字确认。",
        "唱标内容": "按照招标文件规定的顺序当众宣读投标人名称、投标报价、工期、质量目标等关键内容。",
        "记录要求": "开标过程要进行记录，包括唱标内容、投标人的相关声明等，确保开标过程的真实性和可追溯性。"
      },
      duration: "2-4小时",
      color: "from-accent-500/70 to-accent-600/70"
    },
    {
      step: 7,
      title: "评标",
      description: "评标委员会对投标文件进行综合评审",
      keyPoints: [
        "组建评标委员会（5人以上单数，专家≥2/3）",
        "初步评审：符合性、资格、响应性检查",
        "详细评审：技术评审和商务评审",
        "推荐中标候选人、撰写评标报告"
      ],
      details: {
        "评委组建": "由招标人代表和技术、经济等方面的专家组成，成员人数为5人以上单数，专家不得少于成员总数的三分之二。",
        "初步评审": "符合性检查（格式、签字盖章等）、资格复核（资质等级、业绩等）、响应性评审（工期、质量标准、报价范围等）。",
        "详细评审": "技术评审（施工方案合理性、先进性）、商务评审（投标报价、业绩、人员、设备等）。",
        "废标情形": "资格条件不符、未按时足额提交投标保证金、关键文件未签字盖章、存在明显算术错误、未实质性响应招标文件、涉及串标围标等违法行为。"
      },
      duration: "1-3天",
      color: "from-accent-500/75 to-accent-600/75"
    },
    {
      step: 8,
      title: "定标与中标通知",
      description: "确定中标人，公示中标结果并发出中标通知书",
      keyPoints: [
        "招标人依据评标报告确定中标人",
        "公示中标候选人或结果（不少于3日）",
        "处理异议和投诉",
        "发出中标通知书"
      ],
      details: {
        "定标决策": "招标人依据评标委员会提交的书面评标报告和推荐的中标候选人名单最终确定中标人。招标人拥有定标权，可在推荐候选人中择优选定，但不得脱离评标报告结论或擅自改变评标标准。",
        "公示要求": "公示内容至少包含：中标候选人/中标人名称及排序、投标报价（或总得分及主要评分项得分）、项目关键信息。公示期不得少于法定时限（通常为3日），通过指定媒介发布。",
        "异议处理": "公示期内，投标人或其他利害关系人可依法对结果提出异议。招标人需在规定时限内核实并书面答复异议人。",
        "中标通知": "无异议或异议处理完毕后，招标人方可正式发出中标通知书。若第一中标候选人因故无法签订合同，可依法顺延确定后续候选人。"
      },
      duration: "3-7天",
      color: "from-accent-500 to-accent-600"
    },
    {
      step: 9,
      title: "签约前谈判与合同签订",
      description: "就合同细节进行澄清谈判并签订书面合同",
      keyPoints: [
        "可就非实质性细节进行澄清谈判",
        "不得修改招标文件和投标文件实质性内容",
        "在规定时限内签订书面合同",
        "合同签订标志招投标流程法律成果确立"
      ],
      details: {
        "谈判原则": "中标通知书发出后，在正式签订书面合同前，招标人与中标人可能就合同非实质性细节进行澄清或补充谈判。任何谈判均必须严格依据招标文件和投标文件进行，不得修改实质性内容。",
        "谈判内容": "谈判应聚焦于合同履行细节的明确化，如具体沟通机制、部分非关键性服务标准、文件格式等。合同价格、主要工期节点、核心权利义务条款、主要技术规格与方案等实质性内容不得修改。",
        "合同签订": "招标人与中标人应当在中标通知书规定的时限内，依据招标文件和中标人的投标文件签订书面合同。合同是将招投标活动形成的所有法律文件的权利义务关系进行最终确认和固化。",
        "注意事项": "严格遵守时效性要求、确保文件规范性（合同文本与招投标成果严格一致）、履行保密义务、完备的异议/投诉处理机制。"
      },
      duration: "7-15天",
      color: "from-accent-500/85 to-accent-600/85"
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
              <Network className="w-8 h-8 text-base-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-base-50 mb-2">
                建设工程招投标全流程深度解析
              </h1>
              <p className="text-base-50/80 text-lg">
                深入了解参与主体职责、法律依据和招投标完整流程操作规范
              </p>
            </div>
          </div>
        </motion.div>

        {/* 参与主体与基础 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Users className="w-6 h-6 text-accent-500 mr-3" />
              参与主体与基础
            </h2>

            <div className="space-y-8">
              {participants.map((participant, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <participant.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-base-50">
                          {participant.title}
                        </h3>
                        <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded-full text-sm font-medium">
                          {participant.role}
                        </span>
                      </div>
                      
                      <p className="text-base-50/85 mb-4 leading-relaxed">
                        {participant.description}
                      </p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-base-50 uppercase tracking-wider mb-3">
                            主要职责
                          </h4>
                          <div className="space-y-2">
                            {participant.responsibilities.map((responsibility, respIndex) => (
                              <div key={respIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                <span className="text-base-50/80 text-sm leading-relaxed">
                                  {responsibility}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-base-50 uppercase tracking-wider mb-3">
                            实际案例
                          </h4>
                          <div className="bg-gradient-to-r from-accent-500/15 to-accent-500/5 backdrop-blur-sm rounded-xl p-4">
                            <p className="text-base-50/85 text-sm leading-relaxed">
                              {participant.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 基本法律依据与原则 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-accent-500 mr-3" />
              基本法律依据与原则
            </h2>

            {/* 法律依据 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-base-50 mb-6">法律依据</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                {legalBasis.map((law, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500/30 to-accent-500/20 rounded-xl flex items-center justify-center">
                        <law.icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded-full text-xs font-medium">
                        {law.level}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-base-50 mb-3 leading-tight">
                      {law.name}
                    </h4>
                    
                    <p className="text-base-50/80 text-sm mb-4 leading-relaxed">
                      {law.scope}
                    </p>
                    
                    <div className="space-y-2">
                      {law.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-base-50/80 text-sm leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 基本原则 */}
            <div>
              <h3 className="text-xl font-semibold text-base-50 mb-6">基本原则</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-base-50 mb-2">
                          {principle.title}
                        </h4>
                        <p className="text-base-50/85 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-base-50 uppercase tracking-wider">
                        具体体现
                      </h5>
                      {principle.implementation.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                          <span className="text-base-50/80 text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 招投标流程详解 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Settings className="w-6 h-6 text-accent-500 mr-3" />
              招投标流程详解
            </h2>

            <div className="relative">
              {/* 流程时间线 */}
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-accent-500/50 to-accent-500" />
              
              <div className="space-y-8">
                {biddingProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-6">
                      {/* 步骤序号 */}
                      <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${step.color || 'from-accent-500 to-accent-600'} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{step.step}</span>
                      </div>
                      
                      {/* 步骤内容 */}
                      <div className="flex-1 glass-card p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-base-50 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-base-50/85 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                            {step.duration}
                          </span>
                        </div>
                        
                        {/* 关键要点 */}
                        <div className="grid md:grid-cols-2 gap-3 mb-4">
                          {step.keyPoints.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                              <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-base-50/80 text-sm leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        {/* 详细说明 */}
                        {step.details && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <h4 className="text-sm font-semibold text-accent-500 mb-3 uppercase tracking-wider">详细说明</h4>
                            <div className="space-y-3">
                              {Object.entries(step.details).map(([key, value], detailIndex) => (
                                <div key={detailIndex} className="bg-gradient-to-r from-white/5 to-white/2 rounded-lg p-3">
                                  <h5 className="text-sm font-semibold text-base-50 mb-1">{key}</h5>
                                  <p className="text-base-50/75 text-sm leading-relaxed">{value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 流程总结 */}
            <div className="mt-10 p-6 bg-gradient-to-r from-accent-500/15 to-accent-500/5 backdrop-blur-sm rounded-2xl">
              <h3 className="text-lg font-bold text-base-50 mb-3">流程要点总结</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500 mb-1">9个</div>
                  <div className="text-base-50/80 text-sm">核心步骤</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500 mb-1">60-90天</div>
                  <div className="text-base-50/80 text-sm">完整周期</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500 mb-1">严格规范</div>
                  <div className="text-base-50/80 text-sm">程序要求</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/bidding-lifecycle"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            招投标关键枢纽
          </Link>
          
          <Link 
            to="/course/risk-control" 
            className="btn-primary flex items-center group"
          >
            风险防控与合规红线
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PLCBasicsPage;