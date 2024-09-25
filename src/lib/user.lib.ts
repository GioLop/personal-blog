const ADMIN_MOCK = {
  userID: 'mock01',
  userName: 'admin',
  password: 'blogAdmin123'
};

const isValidAdmin = (
  userName: string,
  password: string
) => userName === ADMIN_MOCK.userName && password === ADMIN_MOCK.password;

const getUserId = () => {
  return ADMIN_MOCK.userID;
};

export {
  isValidAdmin,
  getUserId
};