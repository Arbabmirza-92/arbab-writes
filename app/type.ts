export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image?: string;
  author?: string;
  readTime?: string;
};