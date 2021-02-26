import mongoose from 'mongoose';

export const configureMongoose = () => {
  const connectionString = process.env.MONGO_URL || 'mongodb://localhost:27017/my-money';

  return mongoose.connect(connectionString, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
}