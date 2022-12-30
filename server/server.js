const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

app.post('/signIn', (req, res) => {
  const data = req.body;
  const username = data.username;
  const pass = data.password;
  if (username === 'admin' && pass === 'admin') {
    res.json({ message: 'sucess', token: 'authentationtoken' });
  } else {
    res.status = 'Authentication failure';
    res.statusCode = 401;
    res.statusMessage = 'username and password is wrong';
    res.json({ message: 'Authentication failure' });
  }
});


app.get("/movies", (req, res) => {
  fs.readFile(path.join(__dirname, "movies.json"), "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/movies', (req, res) => {
  fs.readFile(path.join(__dirname, 'movies.json'), 'utf8', (error, data) => {
    const movies = JSON.parse(data);
    const newItem = { id: movies.items.length + 1, ...req.body };
    movies.items.push(newItem);
    fs.writeFile(path.join(__dirname, 'movies.json'), JSON.stringify(movies), 'utf8', () => {
      res.json({ status: 'success' });
 });
});
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("I am listeneing at port", port);
});

app.get("/users", (req, res) => {
  fs.readFile(path.join(__dirname, "users.json"), "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    res.json(JSON.parse(data));
});
});