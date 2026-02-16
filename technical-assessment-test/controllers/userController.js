let users = [];

const registerUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  registerUser,
  getUsers
};
