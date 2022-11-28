import setupExpress from './express';
import { Express } from 'express';

const setupServer = (): Express | undefined => {
  try {
    const app = setupExpress();

    return app;
  } catch (error) {
    console.log('Something went wrong during setup server: ' + error);
  }
};

export default setupServer;
