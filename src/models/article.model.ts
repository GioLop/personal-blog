import { promises } from 'node:fs';
import path from 'node:path';
import { Article, ArticleData, ArticleList, ArticlesIndex } from './article.schema';
import { getDateFormated } from '../lib/date.lib';
import { getUniqueId } from '../lib/uuid.lib';

const ARTICLES_DIRECTORY = path.join(__dirname, '..', '..', 'data');
const ARTICLES_INDEX_PATH = path.join(ARTICLES_DIRECTORY, 'articles_index.json');

const STANDARD = 'utf8';

const { readFile, writeFile, stat } = promises;

const checkFileExistence = async (path:string) => !!(await stat(path).catch(() => false));

const getArticlesIndex = async () => {
  const indexExists = await checkFileExistence(ARTICLES_INDEX_PATH);

  if (!indexExists) return {};
  
  try {
    const fileData = await readFile(path.resolve(ARTICLES_INDEX_PATH), STANDARD);
    return JSON.parse(fileData) as ArticlesIndex;  
  } catch (error) {
    console.log(error);
    throw new Error('Error while getting articles index data');
  }
};

const addArticleToIndex = async (id:string, articleData:ArticleData) => {
  const artcilesIndex = await getArticlesIndex();
  const { title, publishDate } = articleData;
  const newArticleToIndex = {
    id,
    title,
    publishDate,
    fileName: `article_${id}.json`,
    isActive: true
  };
  
  artcilesIndex[id] = newArticleToIndex;
  
  await writeFile(
    path.resolve(ARTICLES_INDEX_PATH), 
    JSON.stringify(artcilesIndex),
    STANDARD);
  return newArticleToIndex;
};

const getArticlesList = async () => {
  const articleIndex = await getArticlesIndex();
  return  Object.values(articleIndex) as ArticleList;
};

const getArticleById = async (articleId:string) => {
  const articleIndex = await getArticlesIndex();
  const { fileName } = articleIndex[articleId];
  const articlePath = path.join(ARTICLES_DIRECTORY, fileName);
  const articleData = await readFile(path.resolve(articlePath), STANDARD);

  return JSON.parse(articleData) as Article;
};

const createArticle = async (articleData:ArticleData) => {
  const id = getUniqueId();
  const publishDate = getDateFormated(articleData.publishDate);
  
  try {
    await writeFile(
      path.join(ARTICLES_DIRECTORY, `article_${id}.json`), 
      JSON.stringify({ ...articleData, id, publishDate }),
      STANDARD);
    
    const articleIndex = addArticleToIndex(id, { ...articleData, publishDate });

    return articleIndex;
  } catch (error) {
    console.log(error);
  }     
};

export {
  getArticlesList,
  getArticleById,
  createArticle
};