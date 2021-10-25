const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;

const postsController = require('./controller/posts')


const http = require('http').createServer(app);
app.use(cors());


const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
  }
});

app.post('/posts', postsController.create)
app.get('/', postsController.getAll )
require('./socket/posts')(io);



app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));