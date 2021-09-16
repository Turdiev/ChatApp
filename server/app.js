
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const history = require('connect-history-api-fallback');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')))
app.use(history());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const chatUpdate = require('./router/pusher/chat-update');
const auth = require('./router/pusher/auth/index');

app.use('/', auth);
app.use('/chat', chatUpdate);

// app.route('/*')
//     .get((req, res) => {
//           res.sendFile(path.join(__dirname + '/dist/'));
// });

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})