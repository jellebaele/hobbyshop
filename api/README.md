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

## Features
Entities: Category, User, Product, Unit, ...
Authorization: you cannot a product unless it's yours

Endpoints:

CRUD 
```
/category
```
```
/category/:categoryId
```
```
/category?query
```
```
/category?page=1&per_page=50&query
```
```
/category/products/:productId
```

Link header:
```
</category?per_page=50&page=3>; rel="last"<http://localhost/category?per_page=50&page=2>; rel="next"<http://localhost/category?per_page=50&page=1>; rel="first"
```

## TODO

- [x] Get all categories present in DB
- [ ] Product status in enum
- [x] Link categories to products 
- [x] Create new categories when not present
- [ ] Get all units present in DB
- [ ] Register verification via mail
- [x] CRUD Product
- [x] CRUD User
- [x] Admin priviliges (User API)
- [x] Get all products and users in parts (adjust limit): https://docs.github.com/en/rest/guides/using-pagination-in-the-rest-api?apiVersion=2022-11-28
- [ ] Move all authority to routes layer instead of controller layer
- [x] Validation for CRUD (test everything)
- [x] Filter request via query
- [ ] Sort requests
- [ ] Get e.g. all products created by one user
-> /user/:userId/products
-> /category/:categoryId/products
- [ ] Mappers in services
- [ ] Repo?
