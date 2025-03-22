export interface News {
  _id: string;
  title: string;
  description: string;
  source: string;
  author: string;
  url: string;
  imageUrl: string;
  publishedAt: Date;
  content: string;
  summary: String;
  categories: [String];
}