import { ArticleData, ArticleList } from '../types/article.types';
import { getIndexFileData, writeIndexFile } from '../lib/file.lib';

const getArticlesIndex = async () => {
  const articlesIndex = await getIndexFileData();
  return articlesIndex;
};

const getArticlesList = async () => {
  const articleIndex = await getArticlesIndex();
  return  Object.values(articleIndex) as ArticleList;
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

export {
  getArticlesList,
  getArticlesIndex,
  addArticleToIndex,
  updateArticleIndex
};