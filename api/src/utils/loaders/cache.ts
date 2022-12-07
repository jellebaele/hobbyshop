import connectRedis, { RedisStore } from 'connect-redis';
import session from 'express-session';
import Redis from 'ioredis';
import { REDIS_OPTIONS } from '../../config';

export default function setupCacheStore(): RedisStore {
  const redisClient = new Redis({ ...REDIS_OPTIONS });

  const RedisStore = connectRedis(session);
  const store = new RedisStore({
    client: redisClient as any,
  });

  console.log('Succesfully connected to redis cache.');

  return store;
}
