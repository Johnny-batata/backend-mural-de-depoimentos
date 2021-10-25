const { getAll, create } = require("../model/posts");

module.exports = (io) =>
  io.on('connection', (socket) => {
    socket.on('increasePosts', async(name, message) => {
      await create(name, message)
      const posts = await getAll()
      io.emit('refreshPosts', posts )
    });
  });