import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[]; // 新增：标签数组，?表示这个属性是可选的
  content: string;
  contentHtml?: string; // 新增：存放转换后的 HTML
  [key: string]: any;
}

// 获取所有文章列表（用于首页）
export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  // 只处理 Markdown 文件，忽略子目录（例如 images 文件夹），否则 fs.readFileSync 会报 EISDIR
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      content: matterResult.content,
      ...(matterResult.data as { title: string; date: string }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 新增：获取单篇文章的详细内容
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 解析元数据
  const matterResult = matter(fileContents);

  // 使用 remark 将 Markdown 转换为 HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string }),
  };
}

// 新增：根据标签获取文章
export function getPostsByTag(tag: string): PostData[] {
  const allPosts = getAllPosts();
  // 筛选出 tags 数组里包含这个 tag 的文章
  return allPosts.filter(post=> post.tags && post.tags.includes(tag));
}

// 新增：获取所有标签列表（为了生成静态页面）
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post=> {
    post.tags?.forEach(tag=> tags.add(tag));
  })
  return Array.from(tags);
}
