import Link from 'next/link';
import { getPostsByTag, getAllTags } from '@/lib/posts';
import PostCard from '@/components/PostCard';

// 1. 告诉 Next.js 有哪些标签页面需要生成
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

// 2. 页面组件
export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  // 获取 URL 里的标签名 (比如 "Next.js")
  // decodeURIComponent 是为了处理中文标签 (比如 "技术" 可能会变成 "%E6%8A%80%E6%9C%AF")
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  
  // 获取这个标签下的所有文章
  const posts = getPostsByTag(decodedTag);

  return (
    <div className="min-h-screen bg-anime-cream">
      {/* 简单的页头 */}
      <header className="bg-white shadow-sm py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-anime-blue">
            标签: <span className="text-anime-pink">#{decodedTag}</span>
          </h1>
          <Link href="/" className="text-gray-500 hover:text-anime-blue mt-2 inline-block">
            ← 返回首页
          </Link>
        </div>
      </header>

      {/* 文章列表 (和首页几乎一样) */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}