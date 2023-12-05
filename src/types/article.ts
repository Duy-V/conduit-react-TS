import { TAuthor } from "./author";

export type TArticle = {
  id: string,
  createdAt: string,
  updatedAt: string,
  slug: string,
  title: string,
  description: string,
  body: string,
  tagList: [],
  favoritesCount: number,
  authorId: string,
  author: TAuthor
};
