'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
  const { theme } = useTheme();

  return (
    <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
      <Giscus
        id="comments"
        repo="Klrta/anime-blog" // 你的仓库名
        repoId="R_kgDOQiSOYw"   // 替换这里！！！
        category="Announcements"
        categoryId="DIC_kwDOQiSOY84CzsTT" // 替换这里！！！
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}