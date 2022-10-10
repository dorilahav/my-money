import {connect as connectMongoose} from 'mongoose';

export default async () => {
  await connectMongoose(process.env.DATABASE_URL as string);
  console.log('Connected to database!');
};
