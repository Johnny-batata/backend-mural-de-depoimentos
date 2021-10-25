const mongoConnection = require('./connection')

const getNewRecipe = async (name, message, insertedId) => {
    return ({ 
      data: {
        _id: insertedId,
          name, 
          message,

      },
  });
};

const getAll = async () => {
  const db = await mongoConnection()
  const data = await db.collection('post').find({}).toArray() 
  return data;
}

const create = async (name, message) => {
  const db = await mongoConnection()
  const data = await db.collection('post').insertOne({ name, message })

  return getNewRecipe(name, message,  data.insertedId);

}

module.exports = { getAll, create }