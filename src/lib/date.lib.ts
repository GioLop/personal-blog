import { ArticleIndex } from '../types/article.types';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const getDateFormated = (date:string) => {
  const newDate = new Date(`${date} 00:00`);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  return `${MONTHS[month]} ${day}, ${year}`;
};

const orderNewestFirst = (
  articleA: ArticleIndex,
  articleB: ArticleIndex
) => new Date(articleB.publishDate).getTime() - new Date(articleA.publishDate).getTime(); 

export {
  getDateFormated,
  orderNewestFirst
};