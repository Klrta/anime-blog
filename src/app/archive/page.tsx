import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import ThemeToggle from '@/components/ThemeToggle';
import SearchPosts from '@/components/SearchPosts'; // 引入新组件

export default function Archive() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 font-sans relative z-10">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-anime-blue tracking-wider">
            AnimeBlog
          </div>
          <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 items-center">
            <Link href="/" className="hover:text-anime-pink transition-colors">首页</Link>
            <Link href="/archive" className="hover:text-anime-pink transition-colors">归档</Link>
            <Link href="/about" className="hover:text-anime-pink transition-colors">关于</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">文章归档</h1>
          <p className="text-gray-500 dark:text-gray-400">这里记录了所有的思绪与足迹</p>
        </div>

        {/* 使用搜索组件来显示文章列表 */}
        <SearchPosts posts={posts} />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} AnimeBlog. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}
