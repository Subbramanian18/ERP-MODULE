const mongoose = require('mongoose');

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URL).then((con) => {
    console.log('MongoDB connected successfully ' + con.connection.host)
  })
}
module.exports = connectDb;
