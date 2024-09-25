import { ArticleData } from '../types/article.types';
import { getDateFormated } from '../lib/date.lib';
import { getUniqueId } from '../lib/uuid.lib';
import { getArticleChanges } from '../lib/article.lib';
import { getArticleFileData, writeArticleFile } from '../lib/file.lib';

const getArticleById = async (articleId:string) => {
  const articleData = await getArticleFileData(articleId);
  return articleData;
};

const createArticle = async (articleData:ArticleData) => {
  const id = getUniqueId();
  const publishDate = getDateFormated(articleData.publishDate);
  const newArticleData = { ...articleData, id, publishDate };
  
  await writeArticleFile(newArticleData);
  return newArticleData;    
};

const updateArticle = async (id:string, articleData:ArticleData) => {
  const originalArticle = await getArticleById(id);
  
  if (!originalArticle) {
    throw new Error(`Article ${id} doesn't exist.`);
  }
  
  const articleChanges = getArticleChanges(originalArticle, articleData);
  const articleUpdate = { ...articleChanges, id };
  
  await writeArticleFile(articleUpdate);
  
  return articleUpdate;
};

export {
  getArticleById,
  createArticle,
  updateArticle
};