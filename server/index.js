const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost/panda');

const Comment = mongoose.model('Comment', { email: String, body: String, avatar: String, posted: { type: Date, default: Date.now } });

app.post('/comment', (req, res) => {
  const { email, body } = req.body;
  if (!email || !body) {
    return res.status(400).send({ error: 'Missing email and/or body field!' });
  }
  const avatarMd5 = md5(email.trim().toLowerCase());
  const avatar = `https://www.gravatar.com/avatar/${avatarMd5}`;
  const comment = new Comment({ email, body, avatar });
  comment.save().then(() => {
    res.status(200).send(comment);
  });
});

app.get('/comments', (req, res) => {
  const { email, latest } = req.query;
  if (latest === 'true') {
    return Comment.findOne({ email }).sort({ posted: -1 }).exec((err, data) => {
      res.status(200).send(data);
    });
  }
  const find = email ?
    { email: { $regex: email, $options: 'i' } } :
    {};
  Comment.find(find).sort({ posted: 1 }).exec((err, comments) => {
    res.status(200).send(comments);
  });
});

app.listen(port, () => console.log("Listening on port ", port));
