import { Article, ArticleData } from '../models/article.schema';

const getChanges = (org:string, updt:string) => org === updt ? org : updt;

const getArticleChanges = (orgArt: Article, updArt: ArticleData) => {
  const title = getChanges(orgArt.title, updArt.title);
  const publishDate = getChanges(orgArt.publishDate, updArt.publishDate);
  const body = getChanges(orgArt.body, updArt.body);

  return { title, publishDate, body };
};

export {
  getArticleChanges
};