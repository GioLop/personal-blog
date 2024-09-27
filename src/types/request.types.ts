interface ArticleRequestBody {
  articleTitle: string,
  publishDate: string,
  content: string
}

interface LoginRequestBody {
  userName: string,
  userPassword: string,
};

interface DeleteRequestBody {
  delete: string,
};

export {
  ArticleRequestBody,
  LoginRequestBody,
  DeleteRequestBody
};