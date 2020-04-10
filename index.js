const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.sendFile('/index.html', {root: __dirname });
});
app.get('/a.mp3', (req, res) => {
  res.sendFile('/a.mp3', {root: __dirname });
});
app.get('/aidcraft.tk/ai.js', (req, res) => {
  res.sendFile('/ai.js', {root: __dirname });
});
app.get('/aidcraft.tk/mySketch.js', (req, res) => {
  res.sendFile('/mySketch.js', {root: __dirname });
});
app.get('/aidcraft.tk/snake.js', (req, res) => {
  res.sendFile('/snake.js', {root: __dirname });
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