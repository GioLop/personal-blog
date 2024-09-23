import { promises } from 'node:fs';
import path from 'node:path';
import { Article, ArticleData, ArticleList, ArticlesIndex } from './articles.schema';
import ShortUniqueId from 'short-unique-id';
import js from '@eslint/js';

const ARTICLES_DIRECTORY = path.join(__dirname, '..', '..', 'data');
const ARTICLES_INDEX_PATH = path.join(ARTICLES_DIRECTORY, 'articles_index.json');

const STANDARD = 'utf8';

const uuid = new ShortUniqueId({ length: 10 });

const { readFile, writeFile, stat } = promises;

const checkFileExistence = async (path:string) => !!(await stat(path).catch(() => false));

const getArticlesIndex = async () => {
  const indexExists = await checkFileExistence(ARTICLES_INDEX_PATH);

  if (!indexExists) return {};
  
  const fileData = await readFile(path.resolve(ARTICLES_INDEX_PATH), STANDARD);
  
  return JSON.parse(fileData) as ArticlesIndex;
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
  const id = uuid.rnd();
  
  await writeFile(
    path.join(ARTICLES_DIRECTORY, `article_${id}.json`), 
    JSON.stringify({ id, ...articleData}),
    STANDARD);
  console.log(articleData);
};

export {
  getArticlesList,
  getArticleById,
  createArticle
};