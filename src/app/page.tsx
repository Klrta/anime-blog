// 'use client'; // 这一行必须加在文件最最最上面（第一行），因为这个特效需要浏览器运行
// import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-anime-cream text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-anime-blue tracking-wider">
            AnimeBlog
          </div>
          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-anime-pink transition-colors">首页</Link>
            <Link href="/archive" className="hover:text-anime-pink transition-colors">归档</Link>
            <Link href="/about" className="hover:text-anime-pink transition-colors">关于</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-anime-pink/10 to-anime-blue/10 flex flex-col items-center justify-center text-center">
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-anime-pink to-anime-blue rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto transform transition duration-500 hover:scale-110"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight h-20">
          欢迎来到伊蕾娜的小窝
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
          记录生活，分享热爱。保持清新，保持可爱。
        </p>
      </section>

      {/* Posts Grid */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} AnimeBlog. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}
