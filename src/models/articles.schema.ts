interface Article {
  id: string;
  title: string;
  publish_date: string;
  body: string;
}

type ArticleList = Article[];

type ArticlesIndex = Record<string, Article>;;

export {
  Article,
  ArticleList,
  ArticlesIndex
};