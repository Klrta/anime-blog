import Link from 'next/link';
import { getPostData, getAllPosts } from '@/lib/posts';
import Comments from '@/components/Comments';
import ThemeToggle from '@/components/ThemeToggle';

// 这个函数告诉 Next.js 有哪些文章需要生成页面 (SSG 核心)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

// 页面组件
export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  // 等待参数解析
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 font-sans relative z-10">
      {/* Header (与首页保持一致) */}
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

      {/* 文章内容 */}
      <main className="pt-24 pb-16 px-6">
        <article className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-anime-pink/10 dark:shadow-none overflow-hidden border border-white/50 dark:border-gray-700">
          {/* 文章头部 */}
          <header className="bg-gradient-to-r from-anime-pink/20 to-anime-blue/20 p-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {postData.title}
            </h1>
            <time className="text-anime-blue dark:text-anime-pink font-medium bg-white/60 dark:bg-black/20 px-4 py-1 rounded-full text-sm">
              {postData.date}
            </time>
          </header>

          {/* 文章正文 */}
          <div 
            className="p-10 prose prose-pink dark:prose-invert max-w-none prose-headings:text-anime-blue dark:prose-headings:text-anime-pink prose-a:text-anime-pink"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
          />
          
          {/* 评论区 */}
          <div className="px-10 pb-10">
            <Comments />
          </div>
        </article>
      </main>
    </div>
  );
}