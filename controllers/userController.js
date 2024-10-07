
const { fetchUserById, insertUser } = require('../services/dynamoService');

// Controller to handle fetching a user by ID
const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await fetchUserById(userId);
    if (data.Item) {
      res.json(data.Item);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user: ', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Controller to handle adding a new user
const createUser = async (req, res) => {
  console.log(req.body);
  const { userId, name, email } = req.body;
  const newUser = { UserId: userId, Name: name, Email: email };
  try {
    await insertUser(newUser);
    res.json({ success: true, message: 'User added successfully!' });
  } catch (error) {
    console.error('Error adding user: ', error);
    res.status(500).json({ error: 'Failed to add user' });
  }
};

module.exports = { getUser, createUser };
