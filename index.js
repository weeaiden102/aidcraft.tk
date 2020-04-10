const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.sendFile('/a/index.html', {root: __dirname });
});
app.get('/a.mp3', (req, res) => {
  res.sendFile('/a/a.mp3', {root: __dirname });
});
app.get('/ai.js', (req, res) => {
  res.sendFile('/a/ai.js', {root: __dirname });
});
app.get('/mySketch.js', (req, res) => {
  res.sendFile('/a/mySketch.js', {root: __dirname });
});
app.get('/snake.js', (req, res) => {
  res.sendFile('/a/snake.js', {root: __dirname });
});
app.get('/repl', (req, res) => {
  res.redirect("https://repl.it/@weeaiden102/aidcraft")
});
app.get("/*", (req, res) => {
  res.end("404  not found")
});
app.listen(3000, () => {
  console.log('server started');
});