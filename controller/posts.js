const servicePosts = require('../service/posts')

const getAll = async(req, res) => {

  try {
    const posts = await servicePosts.getAllService()

    return res.status(200).json({data: posts})
    
  } catch(err) {
    console.log(err.message)
  }
}

const create = async  (req, res) => {
  const { name, message} = req.body

  try {
    const posts =  await servicePosts.createService(name, message)
    return res.status(200).json({ posts })
  } catch(err) {
    console.log(err.message)
  }
}

module.exports = { getAll, create }