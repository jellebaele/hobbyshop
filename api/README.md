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
- [x] CRUD Product
- [x] CRUD User
- [x] Admin priviliges (User API)
- [x] Get all products and users in parts (adjust limit): https://docs.github.com/en/rest/guides/using-pagination-in-the-rest-api?apiVersion=2022-11-28
- [x] Move all authority to routes layer instead of controller layer
- [x] Validation for CRUD (test everything)
- [ ] Filter request
- [ ] Sort requests
- [ ] Get e.g. all products created by one user
