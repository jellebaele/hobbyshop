# Hobbyshop API

## How to start
Start up databases:
```console
$ docker-compose up
```

Start up express server in dev mode:
```console
$ npm run dev
```
Start up express server in production mode:
```console
$ npm run start
```

## DB Access
### MongoDB

Access mongo express: (mongo express)[http://localhost:8081] 

### Redis
Access redis cli:
```console
$ docker exec -it api_cache_1 sh

/data $ redis-cli
```

Next, login in redis:
```console
AUTH *password*
```

To see all session keys:
```console
KEYS *
```

To delete all keys:
```console
FLUSHDB
```

TODO:
- [ ] Get all categories present in DB
- [ ] Get all units present in DB
- [ ] Register verification via mail
- [ ] CRUD Product
