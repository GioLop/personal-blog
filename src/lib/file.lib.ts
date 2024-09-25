import { promises } from 'node:fs';
import path from 'node:path';
import { Article, ArticlesIndex } from '../types/article.types';

const ARTICLES_DIRECTORY = path.join(__dirname, '..', '..', 'data');
const ARTICLES_INDEX_PATH = path.join(ARTICLES_DIRECTORY, 'articles_index.json');

const STANDARD = 'utf8';

const { readFile, writeFile, stat } = promises;

const checkFileExistence = async (path:string) => !!(await stat(path).catch(() => false));

const getIndexFileData = async () => {
  const indexPath = path.resolve(ARTICLES_INDEX_PATH);
  let indexData = '';

  try {
    const fileExists = await checkFileExistence(indexPath);
    if (fileExists) indexData = await readFile(indexPath, STANDARD);
  } catch (error) {
    console.log(error);
    throw new Error(`Error while reading ${indexPath}`);
  }
 
  return JSON.parse(indexData) as ArticlesIndex; 
};

const getArticleFileData = async (articleId: string) => {
  const articlePath = path.join(ARTICLES_DIRECTORY, `article_${articleId}.json`);
  
  try {
    const fileExists = await checkFileExistence(articlePath);
    
    if (fileExists) {
      const articleData = await readFile(path.resolve(articlePath), STANDARD);
      return JSON.parse(articleData) as Article;
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Error while reading ${articlePath}`);
  }
};

const writeIndexFile = async (articlesIndex: ArticlesIndex) => {
  try {
    await writeFile(
      path.resolve(ARTICLES_INDEX_PATH), 
      JSON.stringify(articlesIndex),
      STANDARD);  
  } catch (error) {
    console.log(error);
    throw new Error(`Error while writting ${ARTICLES_INDEX_PATH}`);
  }
};

const writeArticleFile = async (articleData:Article) => {
  const newArticlePath = path.join(ARTICLES_DIRECTORY, `article_${articleData.id}.json`);
  
  try {
    await writeFile(
      newArticlePath, 
      JSON.stringify(articleData),
      STANDARD);  
  } catch (error) {
    console.log(error);
    throw new Error(`Error while writting ${newArticlePath}`);
  }
};

export {
  checkFileExistence,
  getIndexFileData,
  getArticleFileData,
  writeIndexFile,
  writeArticleFile,
};