import ShortUniqueId from 'short-unique-id';

const uuid = new ShortUniqueId({ length: 10 });

const getUniqueId = () => uuid.rnd();

export {
  getUniqueId
};