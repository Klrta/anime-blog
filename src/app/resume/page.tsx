'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
      {/* 打印时的样式优化 */}
      <style jsx global>{`
        @media print {
          @page { margin: 0; }
          body { background: white; color: black; }
          .no-print { display: none; }
          .print-black { color: black !important; }
          .print-border { border: 1px solid #ddd !important; }
        }
      `}</style>

      {/* Header (网页版显示，打印时隐藏) */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10 no-print">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-anime-blue tracking-wider hover:text-anime-pink transition-colors">
            AnimeBlog
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 items-center">
            <Link href="/" className="hover:text-anime-pink transition-colors">首页</Link>
            <Link href="/archive" className="hover:text-anime-pink transition-colors">归档</Link>
            <Link href="/about" className="hover:text-anime-pink transition-colors">关于</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 md:px-8 print:p-0">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl dark:shadow-none rounded-xl overflow-hidden print:shadow-none print:rounded-none">
          
          {/* 简历头部 */}
          <div className="bg-gradient-to-r from-anime-blue to-anime-pink p-8 md:p-12 text-white print:bg-none print:text-black print:p-8 print:border-b print:border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">曾亚杰</h1>
                <p className="text-lg opacity-90 print:text-black">计算机科学与技术 / 2026届本科</p>
                <p className="text-sm opacity-80 mt-1 print:text-black">求职意向：智云工程师 / 政企信息化支撑 / 网络运维工程师</p>
              </div>
              <div className="text-sm space-y-1 opacity-90 print:text-black text-right md:text-left">
                <p>📞 (+86) 16683095989</p>
                <p>📧 majonotabitabi@163.com</p>
                <p>📍 浙江 · 温州</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10 print:p-8 print:space-y-6">
            
            {/* 教育背景 */}
            <section>
              <h2 className="text-2xl font-bold text-anime-blue mb-6 flex items-center gap-2 print:text-black border-b pb-2 border-gray-100 dark:border-gray-700 print:border-gray-300">
                <span className="text-xl">🎓</span> 教育背景
              </h2>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold">温州理工学院</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm print:text-black">2022.09 - 2026.06</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">计算机科学与技术（本科）</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                主修课程：计算机网络、数据库系统、操作系统、数据结构、数据分析与建模
              </p>
            </section>

            {/* 技能清单 */}
            <section>
              <h2 className="text-2xl font-bold text-anime-blue mb-6 flex items-center gap-2 print:text-black border-b pb-2 border-gray-100 dark:border-gray-700 print:border-gray-300">
                <span className="text-xl">🛠️</span> 技能清单
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg print:border print:border-gray-200 print:bg-white">
                  <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-200">计算机与网络</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    熟悉 TCP/IP 协议、子网划分、路由交换基础；了解常见防火墙与 VPN 原理；掌握 Linux 基础命令与日志排查。
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg print:border print:border-gray-200 print:bg-white">
                  <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-200">云与数据库</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    了解阿里云/华为云平台使用；熟练使用 MySQL、SQL Server 进行数据管理与维护；了解 Redis 缓存优化。
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg print:border print:border-gray-200 print:bg-white">
                  <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-200">编程与工具</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    熟悉 Python (数据分析/脚本)、Java 基础；熟练使用 Office (Word/Excel/PPT) 编写技术文档与方案。
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg print:border print:border-gray-200 print:bg-white">
                  <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-200">综合素质</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    具备较强的执行力与团队协作能力；擅长跨部门沟通；具备数据驱动思维与逻辑分析能力。
                  </p>
                </div>
              </div>
            </section>

            {/* 项目经历 */}
            <section>
              <h2 className="text-2xl font-bold text-anime-blue mb-6 flex items-center gap-2 print:text-black border-b pb-2 border-gray-100 dark:border-gray-700 print:border-gray-300">
                <span className="text-xl">💻</span> 项目与实践经历
              </h2>
              
              <div className="space-y-8">
                {/* 项目 1 */}
                <div className="relative pl-6 border-l-2 border-anime-pink/30 print:border-gray-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-anime-pink print:bg-gray-400"></div>
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">校园信息化笔记系统优化</h3>
                    <span className="text-sm text-anime-pink font-medium print:text-black">2025.03 - 2025.06</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>参与系统的功能优化，支持后台数据整理与索引结构改进。</li>
                    <li>利用 <strong>MySQL</strong> 与 <strong>Redis</strong> 优化数据检索效率，提升系统响应速度。</li>
                    <li>负责测试与维护工作，积累了系统运维与信息化支撑经验。</li>
                  </ul>
                </div>

                {/* 项目 2 */}
                <div className="relative pl-6 border-l-2 border-anime-pink/30 print:border-gray-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-anime-pink print:bg-gray-400"></div>
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">餐饮外卖平台实训项目</h3>
                    <span className="text-sm text-anime-pink font-medium print:text-black">2024.10 - 2025.12</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>熟悉平台业务流程，参与系统后台的订单与菜单管理。</li>
                    <li>协助团队完成数据同步与接口调试，确保业务正常运行。</li>
                    <li>提升了跨部门协作、问题定位与解决能力。</li>
                  </ul>
                </div>

                {/* 项目 3 */}
                <div className="relative pl-6 border-l-2 border-anime-pink/30 print:border-gray-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-anime-pink print:bg-gray-400"></div>
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">客户数据挖掘与分析</h3>
                    <span className="text-sm text-anime-pink font-medium print:text-black">2025.05</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>使用 <strong>SQL Server</strong> 提取政企客户数据，完成数据清洗与分类。</li>
                    <li>结合 <strong>Python</strong> 对客户行为进行统计与可视化，辅助决策分析。</li>
                    <li>锻炼了数据处理、逻辑分析与报告输出能力。</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* 底部按钮 (打印时隐藏) */}
        <div className="max-w-4xl mx-auto mt-8 text-center no-print">
          <button 
            onClick={() => window.print()}
            className="bg-anime-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors shadow-lg flex items-center gap-2 mx-auto"
          >
            <span>🖨️</span> 打印 / 保存为 PDF
          </button>
        </div>
      </main>
    </div>
  );
}
