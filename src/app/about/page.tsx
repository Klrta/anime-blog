import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 font-sans relative z-10">
      {/* Header，与首页保持一致 */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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

      {/* About 主体内容 */}
      <main className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-3xl font-bold text-anime-blue mb-4">关于我</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          这里是伊蕾娜的小窝，记录生活、游戏和阅读的点点滴滴。
        </p>
      </main>
    </div>
  );
}