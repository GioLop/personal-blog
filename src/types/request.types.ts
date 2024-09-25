interface ArticleRequestBody {
  articleTitle: string,
  publishDate: string,
  content: string
}

interface LoginRequestBody {
  userName: string,
  userPassword: string,
};

export {
  ArticleRequestBody,
  LoginRequestBody
};