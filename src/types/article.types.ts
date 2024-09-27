interface ArticleData {
  title: string;
  publishDate: string;
  body: string;
};

interface Article extends ArticleData {
  id: string;
};

interface ArticleIndex {
  id: string,
  title: string,
  publishDate: string,
  fileName: string,
  isActive: boolean 
};

type ArticleList = ArticleIndex[];

type ArticlesIndex = Record<string, ArticleIndex>;

export {
  ArticleData,
  Article,
  ArticleIndex,
  ArticleList,
  ArticlesIndex
};