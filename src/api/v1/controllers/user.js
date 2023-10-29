export const createUser = (req, res) => {
  const { name, age, hobby } = req.body;

  if (!name || !age) {
    res.status(400).json({ message: "Please provide all details" });
  }

  res.json({ message: "Received data:", name, age, hobby });
};

export const getName = (req, res) => {
  res.json({ message: "Hello volunteer" });
};
