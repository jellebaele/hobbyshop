import setupExpress from './express';
import { Express } from 'express';
import setupMongoose from './database';

const setupServer = (): Express | undefined => {
  try {
    setupMongoose();
    const app = setupExpress();

    return app;
  } catch (error) {
    console.log('Something went wrong during setup server: ' + error);
  }
};

export default setupServer;
