const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const postsController = require('./controller/posts')
const http = require('http').createServer(app);
app.use(bodyParser.json());
app.use(cors());

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST'], 
  }
});

app.post('/posts', postsController.create)
app.get('/', postsController.getAll)
require('./socket/posts')(io);

http.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));