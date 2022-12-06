import mongoose from 'mongoose';
import { MONGO_CONNECTION_URL } from '../../config';

const setupMongoose = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_CONNECTION_URL);
    console.log('Succesfully connected to mongoose');
  } catch (error: any) {
    console.error('Could not connect to mongoose. ' + error.message);
  }
};

export default setupMongoose;
