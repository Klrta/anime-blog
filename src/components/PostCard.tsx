import Link from 'next/link';
import { PostData } from '@/lib/posts'; // 引入我们定义的文章类型

// 定义组件需要接收什么数据 (Props)
// 就像函数需要参数一样，组件需要 Props
interface Props {
  post: PostData; // 必须传给我一篇文章的数据
}

export default function PostCard({ post }: Props) {
  return (
    <article className="group bg-white rounded-2xl p-6 shadow-lg shadow-anime-pink/20 hover:shadow-anime-pink/40 hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      {/* 日期 */}
      <div className="mb-4">
        <span className="text-xs font-medium text-anime-blue bg-anime-blue/10 px-2 py-1 rounded-full">
          {post.date}
        </span>
      </div>

      {/* 标签 (如果有的话) */}
      <div className="flex gap-2 mt-2 mb-3">
        {post.tags?.map(tag => (
          <Link key={tag} href={`/tags/${tag}`} className="text-xs text-anime-pink border border-anime-pink/30 px-2 py-0.5 rounded-full hover:bg-anime-pink hover:text-white transition-colors">
            #{tag}
          </Link>
        ))}
      </div>

      {/* 标题 */}
      <h2 className="text-xl font-bold mb-2 group-hover:text-anime-pink transition-colors">
        <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>

      {/* 描述 */}
      <p className="text-gray-500 text-sm line-clamp-3 mb-4">
        {post.description || "点进来看详情..."}
      </p>

      {/* 阅读更多按钮 */}
      <Link
        href={`/posts/${post.id}`}
        className="text-sm font-medium text-anime-pink hover:text-anime-blue transition-colors"
      >
        阅读更多 →
      </Link>
    </article>
  );
}