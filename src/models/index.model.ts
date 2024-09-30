import { ArticleData, ArticleList } from '../types/article.types';
import { getIndexFileData, writeIndexFile } from '../lib/file.lib';
import { orderNewestFirst } from '../lib/date.lib';


const getArticlesIndex = async () => {
  const articlesIndex = await getIndexFileData();
  return articlesIndex;
};

const getArticleFromIndex = async (articleId: string) => {
  const articlesIndex = await getArticlesIndex();
  return articlesIndex[articleId];
};

const getAllArticlesList = async () => {
  const articleIndex = await getArticlesIndex();
  const articlesList = Object.values(articleIndex).filter((articleIndex) => articleIndex.isActive);
  
  return articlesList.sort(orderNewestFirst) as ArticleList;
};

const getAvailableArticlesList = async () => {
  const allArticles = await getAllArticlesList();
  const availableArticles = allArticles.filter(article => new Date(article.publishDate) <= new Date());

  return availableArticles;
};

const addArticleToIndex = async (id:string, articleData:ArticleData) => {
  const { title, publishDate } = articleData;
  const newArticleToIndex = {
    id,
    title,
    publishDate,
    fileName: `article_${id}.json`,
    isActive: true
  };

  const artcilesIndex = await getArticlesIndex();
  artcilesIndex[id] = newArticleToIndex;
  
  await writeIndexFile(artcilesIndex);
  
  return newArticleToIndex; 
};

const updateArticleIndex = async (id:string, articleData:ArticleData) => {
  const { title, publishDate } = articleData;
  const articlesIndex = await getArticlesIndex();
    
  articlesIndex[id] = {...articlesIndex[id], title, publishDate, id };
  
  await writeIndexFile(articlesIndex);
  
  return articlesIndex[id];
};

const deactivateArticleInIndex = async (id:string) => {
  const articlesIndex = await getArticlesIndex();
  
  articlesIndex[id] = {...articlesIndex[id], isActive: false };
  
  await writeIndexFile(articlesIndex);
  
  return articlesIndex[id];
};

export {
  getArticlesIndex,
  getArticleFromIndex,
  getAllArticlesList,
  getAvailableArticlesList,
  addArticleToIndex,
  updateArticleIndex,
  deactivateArticleInIndex
};