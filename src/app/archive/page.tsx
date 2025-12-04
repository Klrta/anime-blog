import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Archive() {
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

      {/* Posts Grid */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl p-6 shadow-lg shadow-anime-pink/20 hover:shadow-anime-pink/40 hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-anime-blue bg-anime-blue/10 px-2 py-1 rounded-full">
                  {post.date}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-anime-pink transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                {post.description || post.content.substring(0, 100)}...
              </p>
              <Link
                href={`/posts/${post.id}`}
                className="text-sm font-medium text-anime-pink hover:text-anime-blue transition-colors"
              >
                阅读更多 →
              </Link>
            </article>
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
