'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  date: string;
  description?: string;
}

const POSTS_PER_PAGE = 4; // 每页显示 6 篇文章

export default function SearchPosts({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // 新增：当前页码状态

  // 1. 先进行搜索过滤
  const filteredPosts = posts.filter((post) => {
    const searchContent = (post.title + post.description).toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  // 2. 计算分页数据
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // 当用户搜索时，重置到第一页
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* 搜索框 */}
      <div className="mb-10 relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="搜索文章..."
          value={query}
          onChange={handleSearch}
          className="w-full px-6 py-3 rounded-full border-2 border-anime-pink/30 focus:border-anime-pink focus:outline-none bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all text-center placeholder-gray-400 dark:text-gray-100"
        />
        <span className="absolute right-4 top-3.5 text-anime-pink">🔍</span>
      </div>

      {/* 文章列表 (显示切分后的 currentPosts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg shadow-anime-pink/20 dark:shadow-none hover:shadow-anime-pink/40 hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
          >
            <div className="mb-4">
              <span className="text-xs font-medium text-anime-blue bg-anime-blue/10 dark:bg-anime-blue/20 px-2 py-1 rounded-full">
                {post.date}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-anime-pink transition-colors text-gray-800 dark:text-gray-100">
              {post.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
              {post.description}
            </p>
            <Link
              href={`/posts/${post.id}`}
              className="text-sm font-medium text-anime-pink hover:text-anime-blue transition-colors mt-auto"
            >
              阅读更多 →
            </Link>
          </article>
        ))}
      </div>

      {/* 无结果提示 */}
      {filteredPosts.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          没有找到相关文章 (｡•́︿•̀｡)
        </div>
      )}

      {/* 分页控制按钮 */}
      {filteredPosts.length > POSTS_PER_PAGE && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 hover:bg-anime-pink hover:text-white transition-colors"
          >
            上一页
          </button>
          
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            第 {currentPage} 页 / 共 {totalPages} 页
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 hover:bg-anime-pink hover:text-white transition-colors"
          >
            下一页
          </button>
        </div>
      )}
    </div>
  );
}