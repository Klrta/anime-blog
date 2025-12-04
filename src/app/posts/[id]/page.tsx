import { getPostData, getAllPosts } from '@/lib/posts';

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
    <div className="min-h-screen bg-anime-cream py-20 px-6">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-anime-pink/10 overflow-hidden">
        {/* 文章头部 */}
        <header className="bg-gradient-to-r from-anime-pink/20 to-anime-blue/20 p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {postData.title}
          </h1>
          <time className="text-anime-blue font-medium bg-white/60 px-4 py-1 rounded-full text-sm">
            {postData.date}
          </time>
        </header>

        {/* 文章正文 */}
        {/* dangerouslySetInnerHTML 是 React 插入 HTML 的方式 */}
        <div 
          className="p-10 prose prose-pink max-w-none prose-headings:text-anime-blue prose-a:text-anime-pink"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />
      </article>
    </div>
  );
}