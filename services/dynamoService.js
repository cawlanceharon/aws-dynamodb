
const dynamoDB = require('../config/awsConfig');
const { getUserById, addUser } = require('../models/userModel');

// Fetch user by ID from DynamoDB
const fetchUserById = async (userId) => {
  const params = getUserById(userId);
  return dynamoDB.get(params).promise();
};

// Add new user to DynamoDB
const insertUser = async (user) => {
  const params = addUser(user);
  return dynamoDB.put(params).promise();
};

module.exports = { fetchUserById, insertUser };
