import { promises } from 'node:fs';
import path from 'node:path';
import { ArticleList, ArticlesIndex } from './articles.schema';

const ARTICLES_INDEX_PATH = path.join(__dirname, '..', '..', 'data', 'article_index.json');
const STANDARD = 'utf8';

const { readFile, writeFile, stat } = promises;

const checkFileExistence = async (path:string) => !!(await stat(path).catch(e => false));

const getArticlesList = async ():Promise<ArticleList> => {
  const indexExists = await checkFileExistence(ARTICLES_INDEX_PATH);

  if (!indexExists) {
    return [];
  }

  const fileData = JSON.parse(
    await readFile(path.resolve(ARTICLES_INDEX_PATH), STANDARD)) as ArticlesIndex;

  return Object.values(fileData);
};

export {
  getArticlesList
};