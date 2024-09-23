interface Article {
  id: string;
  title: string;
  publish_date: string;
  body: string;
}

interface ArticleIndex {
  id: string,
  tite: string,
  publish_date: string,
  fileName: string,
  path: string,
  isActive: boolean 
};

type ArticleList = ArticleIndex[];

type ArticlesIndex = Record<string, ArticleIndex>;

export {
  Article,
  ArticleList,
  ArticlesIndex
};