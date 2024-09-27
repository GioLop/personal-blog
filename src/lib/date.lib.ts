import { ArticleIndex } from '../types/article.types';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getDateFormated = (date:string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();

  return `${MONTHS[month + 1]} ${day}, ${year}`;
};

const orderNewestFirst = (
  articleA: ArticleIndex,
  articleB: ArticleIndex
) => new Date(articleB.publishDate).getTime() - new Date(articleA.publishDate).getTime(); 

export {
  getDateFormated,
  orderNewestFirst
};