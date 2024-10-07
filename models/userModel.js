
const TABLE_NAME = 'UsersTable';

const getUserById = (userId) => ({
  TableName: TABLE_NAME,
  Key: { UserId: userId },
});

const addUser = (user) => ({
  TableName: TABLE_NAME,
  Item: user,
});

module.exports = { getUserById, addUser };
