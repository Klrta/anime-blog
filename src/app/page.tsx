import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import HeroTitle from '@/components/HeroTitle';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-gray-800 font-sans relative z-10">
      {/* Header (保持不变) */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-anime-blue tracking-wider">
            AnimeBlog
          </div>
          <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 items-center">
            <Link href="/" className="hover:text-anime-pink transition-colors">首页</Link>
            <Link href="/archive" className="hover:text-anime-pink transition-colors">归档</Link>
            <Link href="/about" className="hover:text-anime-pink transition-colors">关于</Link>
            {/* 加上切换按钮 */}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section: 只保留头像和标题 */}
      <section className="pt-32 pb-10 px-6 flex flex-col items-center justify-center text-center">
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-anime-pink to-anime-blue rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto transform transition duration-500 hover:scale-110"
          />
        </div>
        <HeroTitle />
        <p className="text-lg text-gray-500 max-w-2xl mt-4">
          记录生活，分享热爱。保持清新，保持可爱。
        </p>
      </section>

      {/* 主要内容区：双栏布局 */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* 左侧：文章列表 (占 3 列) */}
        <main className="lg:col-span-3">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">📝</span>
            <h2 className="text-2xl font-bold text-gray-800">最新文章</h2>
          </div>

          {/* 文章网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        {/* 右侧：侧边栏 (占 1 列) */}
        <aside className="lg:col-span-1 space-y-6">

          {/* 侧边栏模块：这里的风景 */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-sm">
            <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span>✨</span> 这里的风景
            </h3>

            {/* 迷你版 Bento Grid */}
            <div className="grid grid-cols-1 gap-4">
              {/* 图片 1 */}
              <div className="h-40 relative rounded-xl overflow-hidden group border border-white/30">
                <img src="/bg.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sidebar 1" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* 文字块 */}
              <div className="bg-anime-blue/10 rounded-xl p-4 text-center border border-anime-blue/20">
                <p className="text-sm text-gray-600 font-medium">今日心情</p>
                <p className="text-xs text-gray-500 mt-1">代码写得好开心！<br />( •̀ ω •́ )y</p>
              </div>

              {/* 图片 2 */}
              <div className="h-32 relative rounded-xl overflow-hidden group border border-white/30">
                <img src="/avatar.jpg" className="w-full h-full object-cover" alt="Sidebar 2" />
              </div>
            </div>
          </div>

          {/* 侧边栏模块：关于我 */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-sm">
            <h3 className="font-bold text-gray-700 mb-2">关于我</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              这里是伊蕾娜的小窝，分享二次元、编程和生活点滴。欢迎常来玩哦！
            </p>
          </div>

        </aside>

      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm mt-10 border-t border-white/20">
        © {new Date().getFullYear()} AnimeBlog. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}