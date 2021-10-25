
const post = require('../model/posts')

const getAllService = async() => {
  const posts = await post.getAll();
  return posts; 
}

const createService = async(name, message) => {
  const posts = await post.create(name, message)
  return posts;
}
module.exports = { getAllService, createService }