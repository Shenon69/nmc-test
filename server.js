import app from "./src/config/app.js";

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello FOSS NSBM" });
});
