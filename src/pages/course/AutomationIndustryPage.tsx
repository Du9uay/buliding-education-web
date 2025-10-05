import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Network, 
  BookOpen,
  Users,
  Monitor,
  Settings,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap
} from '../../components/Icons';

const AutomationIndustryPage: React.FC = () => {
  // 工程项目全生命周期数据
  const projectLifecycle = [
    {
      title: "立项",
      description: "定义项目目标与可行性，制定总体规划和预算方案",
      stage: "准备阶段",
      icon: BookOpen,
      color: "from-blue-500/20 to-blue-500/10"
    },
    {
      title: "设计",  
      description: "形成技术方案与施工图纸，明确工程具体要求",
      stage: "准备阶段",
      icon: Monitor,
      color: "from-blue-500/20 to-blue-500/10"
    },
    {
      title: "招投标",
      description: "通过公开竞争筛选承包商，确定执行主体和合同条件",
      stage: "关键枢纽",
      icon: Target,
      color: "from-accent-500 to-yellow-400"
    },
    {
      title: "施工",
      description: "按照设计方案和合同要求执行工程建设",
      stage: "实施阶段", 
      icon: Settings,
      color: "from-green-500/20 to-green-500/10"
    },
    {
      title: "竣工",
      description: "完成工程建设，进行验收和交付",
      stage: "实施阶段",
      icon: CheckCircle,
      color: "from-green-500/20 to-green-500/10"
    },
    {
      title: "运维",
      description: "后期维护运营，确保项目持续发挥作用",
      stage: "实施阶段",
      icon: Shield,
      color: "from-green-500/20 to-green-500/10"
    }
  ];

  // 招投标战略价值
  const strategicValues = [
    {
      title: "甄选合格承包商/供应商的关键途径",
      description: "通过公开、公平的竞争机制，系统评估和筛选潜在合作伙伴，精准选择出在能力、经验和资源上最匹配项目需求的优秀承包商。",
      details: [
        "展示资质、过往业绩、技术方案和报价",
        "基于综合比较选择最佳合作伙伴", 
        "从源头保障项目顺利实施基础"
      ],
      icon: Users
    },
    {
      title: "有效控制项目核心要素的核心手段", 
      description: "通过市场竞争机制，在成本控制、质量保障、工期优化三个维度实现项目要素的有效管控。",
      details: [
        "成本控制：多家竞争报价，利用市场机制形成价格发现",
        "质量控制：严格资质预审筛选具备实力的承包商",
        "工期保障：合同约束和履约需求驱动科学施工组织"
      ],
      icon: Target
    },
    {
      title: "源头风险防控的重要保障",
      description: "通过对承包商/供应商的严格审查，提前识别并排除潜在风险，从项目起点降低后期隐患。",
      details: [
        "企业资质、财务状况深度审查",
        "商业信誉、法律合规性核验",
        "避免委托能力不足或信誉不佳的企业"
      ],
      icon: Shield
    },
    {
      title: "确保项目合规性的法定基石",
      description: "严格遵循相关法律法规，通过规范程序、透明标准、完善监督确保项目合法合规。",
      details: [
        "遵循《招标投标法》及实施条例",
        "规范程序、透明评审、完善监督",
        "为项目全生命周期奠定法律基础"
      ],
      icon: BookOpen
    }
  ];

  // 招投标失败后果
  const failureConsequences = [
    {
      title: "项目延期",
      description: "选择不具备能力的承包商，导致施工进度严重滞后，大幅延长项目周期并推高成本。",
      icon: Zap,
      severity: "high"
    },
    {
      title: "成本超支", 
      description: "恶意低价中标或成本估算错误，迫使建设单位不断追加投资，造价严重失控。",
      icon: Target,
      severity: "high"
    },
    {
      title: "质量事故",
      description: "未严格审查资质，不合格企业偷工减料，引发结构安全隐患等重大质量问题。",
      icon: Shield,
      severity: "critical"
    },
    {
      title: "法律纠纷",
      description: "程序违法违规导致招标无效、监管处罚、合同诉讼及声誉损害。",
      icon: BookOpen,
      severity: "medium"
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
              <Target className="w-8 h-8 text-base-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-base-50 mb-2">
                招投标——项目生命周期的关键枢纽
              </h1>
              <p className="text-base-50/80 text-lg">
                理解招投标在工程项目全生命周期中的战略地位与核心价值
              </p>
            </div>
          </div>
        </motion.div>

        {/* 工程项目全生命周期 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Network className="w-6 h-6 text-accent-500 mr-3" />
              工程项目全生命周期简述
            </h2>

            <div className="grid lg:grid-cols-6 gap-4 mb-8">
              {projectLifecycle.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* 连接线 */}
                  {index < projectLifecycle.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-4 h-0.5 bg-gradient-to-r from-accent-500 to-transparent -translate-y-1/2 z-0" />
                  )}
                  
                  <div className={`relative h-full p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    phase.stage === '关键枢纽' 
                      ? 'bg-gradient-to-br from-accent-500/20 to-accent-500/10 border border-accent-500/30' 
                      : 'glass-card'
                  }`}>
                    {/* 阶段标签 */}
                    <div className="absolute -top-3 left-4 px-3 py-1 bg-white/10 rounded-full">
                      <span className="text-xs font-bold text-accent-500">
                        {phase.stage}
                      </span>
                    </div>
                    
                    {/* 图标 */}
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500/30 to-accent-500/20 rounded-xl flex items-center justify-center mb-4 mt-2">
                      <phase.icon className="w-6 h-6 text-accent-500" />
                    </div>
                    
                    {/* 内容 */}
                    <h3 className="text-lg font-bold text-base-50 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-base-50/80 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-accent-500/15 to-accent-500/5 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-base-50/90 text-center leading-relaxed">
                招投标是项目从<strong className="text-accent-500">准备阶段</strong>（立项、设计）转向<strong className="text-accent-500">实施阶段</strong>（施工、竣工、运维）的关键枢纽，
                通过公开竞争机制筛选出具备资质与能力的承包商，为项目落地奠定执行基础。
              </p>
            </div>
          </motion.div>
        </section>

        {/* 招投标的战略地位与价值 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Target className="w-6 h-6 text-accent-500 mr-3" />
              招投标的战略地位与价值
            </h2>

            <div className="space-y-8">
              {strategicValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-base-50 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-base-50/85 mb-4 leading-relaxed">
                        {value.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {value.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                            <span className="text-base-50/80 text-sm leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 招投标失败/失误的严重后果 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Shield className="w-6 h-6 text-orange-400 mr-3" />
              招投标失败/失误可能带来的严重后果
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {failureConsequences.map((consequence, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`glass-card p-6 border-l-4 ${
                    consequence.severity === 'critical' ? 'border-red-500' :
                    consequence.severity === 'high' ? 'border-orange-500' : 'border-yellow-500'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        consequence.severity === 'critical' ? 'bg-red-500/20' :
                        consequence.severity === 'high' ? 'bg-orange-500/20' : 'bg-yellow-500/20'
                      }`}>
                        <consequence.icon className={`w-6 h-6 ${
                          consequence.severity === 'critical' ? 'text-red-400' :
                          consequence.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'
                        }`} />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-base-50 mb-2">
                          {consequence.title}
                        </h3>
                        <p className="text-base-50/80 leading-relaxed">
                          {consequence.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/20">
              <div className="text-center">
                <h3 className="text-lg font-bold text-orange-300 mb-2">重要提醒</h3>
                <p className="text-base-50/85">
                  若缺失招投标环节，随意选定施工方将导致质量失控、成本超支等重大风险。
                  招投标的本质是解决"由谁执行"的核心问题，确保方案高效转化为实体成果。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 优化资源配置 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Network className="w-6 h-6 text-accent-500 mr-3" />
              优化资源配置
            </h2>

            <div className="mb-6">
              <p className="text-base-50/90 leading-relaxed text-lg mb-6">
                招投标的核心战略价值在于通过市场化竞争机制，实现优质资源（尤其是承包商与供应商）的高效配置。
                它将项目需求与市场主体能力精准对接，驱动行业资源向高绩效主体流动。
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-base-50 mb-3">
                  大型基建项目优质资源集中
                </h3>
                <p className="text-base-50/85 leading-relaxed">
                  在大型基建项目（比如地铁工程）中，严格的资质审查与能力竞争使具备资金实力、技术储备及专业经验的优质承包商脱颖而出，
                  确保核心资源集中于关键项目。
                </p>
              </motion.div>

              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500/90 to-accent-600/90 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-base-50 mb-3">
                  竞争压力驱动企业升级
                </h3>
                <p className="text-base-50/85 leading-relaxed">
                  竞争压力倒逼企业持续升级：承包商为赢得重大项目（如水利工程），
                  就会主动投入技术研发与设备升级，形成行业创新与效率提升的良性循环。
                </p>
              </motion.div>

              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500/80 to-accent-600/80 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-base-50 mb-3">
                  公平准入促进资源优化
                </h3>
                <p className="text-base-50/85 leading-relaxed">
                  招投标体系构建了公平准入环境，使具备专业优势的中小供应商（如专项材料商）有机会参与大型项目供应链，
                  促进资源在不同层级企业间动态优化。
                </p>
              </motion.div>
            </div>

            <div className="p-6 bg-gradient-to-r from-accent-500/15 to-accent-500/5 backdrop-blur-sm rounded-2xl">
              <h3 className="text-lg font-bold text-accent-500 mb-3 text-center">
                "筛选-激励-流通"三位一体机制
              </h3>
              <p className="text-base-50/90 text-center leading-relaxed">
                这种三位一体的资源配置机制，将会推动建筑行业形成更高效、更具活力的生态系统。
                通过市场竞争实现资源的最优配置，让优秀企业获得更多机会，推动整个行业的健康发展。
              </p>
            </div>
          </motion.div>
        </section>

        {/* 行业生态与环境 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-base-50 mb-8 flex items-center">
              <Monitor className="w-6 h-6 text-accent-500 mr-3" />
              行业生态与环境
            </h2>

            {/* 土木水利行业招投标的特点 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-base-50 mb-6">土木水利行业招投标的特点</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "政策法规密集",
                    icon: BookOpen,
                    description: "土木水利行业的招投标受到众多法律法规的约束，比如《招标投标法》以及其实施条例，还有行业内的各种规定。",
                    example: "水利工程的招投标不仅要遵循《招标投标法》，还需要遵守《水利工程建设项目招标投标管理规定》等一系列法规。"
                  },
                  {
                    title: "投资规模大",
                    icon: Target,
                    description: "土木水利项目往往涉及巨额资金投入，比如建设一条高速公路，投资可能高达几十亿甚至上百亿。",
                    example: "如此大规模的投资使得招投标过程备受瞩目，建设单位会更加严格地进行招投标管理，确保资金合理、合规使用。"
                  },
                  {
                    title: "技术专业性强",
                    icon: Settings,
                    description: "土木水利建设工程会涉及诸多专业技术，比如水工结构设计、土方开挖技术等都具有很强的专业性。",
                    example: "大型水电站建设项目会要求投标企业必须具备水工结构设计、水电设备安装等专业技术的团队。"
                  },
                  {
                    title: "资质要求高",
                    icon: Shield,
                    description: "行业内部对承包商的资质有严格规定，不同等级的项目需要相应等级资质的企业来承担。",
                    example: "特级资质的企业可以承担各类大型土木水利工程，而三级资质的企业只能承担小型项目。"
                  },
                  {
                    title: "公共项目占比大",
                    icon: Users,
                    description: "政府投资的公共工程占比高（如城市防洪体系、饮水工程），其招投标过程兼具工程属性与公共政策属性。",
                    example: "社会舆论监督压力要求流程极致透明化，公正性直接影响政府公信力。"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500/30 to-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-base-50 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-base-50/85 mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="p-4 bg-gradient-to-r from-accent-500/10 to-accent-500/5 rounded-xl">
                          <p className="text-base-50/80 text-sm leading-relaxed">
                            <span className="font-semibold text-accent-500">案例：</span> {feature.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 行业趋势简述 */}
            <div>
              <h3 className="text-xl font-semibold text-base-50 mb-6">行业趋势简述</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-base-50 mb-3">
                    电子化招投标普及
                  </h4>
                  <p className="text-base-50/85 mb-3 leading-relaxed">
                    越来越多的招投标活动通过电子平台进行，招标公告发布、投标文件提交、开标评标等环节都在网上进行。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">提高效率和透明度</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">避免文件丢失篡改</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">确保资料完整真实</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500/90 to-accent-600/90 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-base-50 mb-3">
                    信用体系建设
                  </h4>
                  <p className="text-base-50/85 mb-3 leading-relaxed">
                    将承包商的信用状况纳入招投标评价体系，企业的信誉、履约情况、获奖情况等都会作为信用评价的指标。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">规范招投标行为</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">促进企业重视信誉</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">违约记录影响中标</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500/80 to-accent-600/80 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-base-50 mb-3">
                    合规透明要求提升
                  </h4>
                  <p className="text-base-50/85 mb-3 leading-relaxed">
                    社会对公共资源交易的监督力度加大，招投标对合规性和透明度的要求越来越高。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">多媒介发布公告</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">评标专家随机抽取</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base-50/80 text-sm">违规处罚力度加大</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>
          
          <Link 
            to="/course/bidding-process" 
            className="btn-primary flex items-center group"
          >
            建设工程招投标全流程
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutomationIndustryPage;